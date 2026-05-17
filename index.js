import JSAnalizadorLexer from "./JSAnalizadorLexer.js";
import JSAnalizadorParser from "./JSAnalizadorParser.js";
import JSAnalizadorVisitor from "./JSAnalizadorVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';

class MiTraductorVisitor extends JSAnalizadorVisitor {
    visitPrograma(ctx) {
        let code = "";
        if (ctx.instruccion()) {
            for (let i of ctx.instruccion()) code += this.visit(i) + "\n";
        }
        return code;
    }
    visitInstruccion(ctx) { return this.visit(ctx.children[0]); }
    visitAsignacion(ctx) { return `let ${ctx.ID().getText()} = ${this.visit(ctx.expresion())};`; }
    visitExcepcion(ctx) {
        return `try ${this.visit(ctx.bloque(0))} catch (${ctx.ID().getText()}) ${this.visit(ctx.bloque(1))}`;
    }
    visitBloque(ctx) {
        let code = "{\n";
        for (let i of ctx.instruccion()) code += this.visit(i) + "\n";
        return code + "}";
    }
    visitImprimir(ctx) { return `console.log(${this.visit(ctx.expresion())});`; }
    visitExpresion(ctx) {
        let expr = this.visit(ctx.termino(0));
        for(let i = 1; i < ctx.termino().length; i++) {
            expr += ` ${ctx.getChild(i * 2 - 1).getText()} ${this.visit(ctx.termino(i))}`;
        }
        return expr;
    }
    visitTermino(ctx) { return ctx.CADENA() ? ctx.CADENA().getText() : ctx.getText(); }
}

async function main() {
    let input;
    const archivoDestino = process.argv[2] || 'input.txt';

    try {
        input = fs.readFileSync(archivoDestino, 'utf8');
    } catch (err) {
        input = await leerCadena();
    }

    let inputStream = CharStreams.fromString(input);
    let lexer = new JSAnalizadorLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new JSAnalizadorParser(tokenStream);
    let tree = parser.programa();
    
    if (parser.syntaxErrorsCount > 0) {
        console.error("Se encontraron errores de sintaxis en la entrada.");
    } else {
        console.table(tokenStream.tokens.filter(t => t.type !== -1).map(t => ({ 
            Lexema: t.text, 
            Token: JSAnalizadorLexer.symbolicNames[t.type] || "SÍMBOLO" 
        })));

        console.log(tree.toStringTree(parser.ruleNames));

        const visitor = new MiTraductorVisitor();
        const jsCode = visitor.visit(tree);   

        let nombre = "Mundo"; 
        try {
            eval(jsCode);
        } catch(e) {
            console.error(e.message);
        }
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();