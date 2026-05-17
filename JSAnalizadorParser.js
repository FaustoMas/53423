// Generated from JSAnalizador.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import JSAnalizadorListener from './JSAnalizadorListener.js';
import JSAnalizadorVisitor from './JSAnalizadorVisitor.js';

const serializedATN = [4,1,18,81,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,1,0,5,0,21,8,0,10,0,12,0,24,9,0,1,0,
1,0,1,0,1,1,1,1,1,1,1,1,3,1,33,8,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,4,1,4,5,4,51,8,4,10,4,12,4,54,9,4,1,4,1,4,1,5,1,5,1,
5,1,5,1,5,1,5,1,6,1,6,1,6,5,6,67,8,6,10,6,12,6,70,9,6,1,7,1,7,1,7,1,7,1,
7,1,7,1,7,3,7,79,8,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,1,1,0,11,14,81,0,16,
1,0,0,0,2,32,1,0,0,0,4,34,1,0,0,0,6,39,1,0,0,0,8,48,1,0,0,0,10,57,1,0,0,
0,12,63,1,0,0,0,14,78,1,0,0,0,16,17,5,1,0,0,17,18,5,15,0,0,18,22,5,7,0,0,
19,21,3,2,1,0,20,19,1,0,0,0,21,24,1,0,0,0,22,20,1,0,0,0,22,23,1,0,0,0,23,
25,1,0,0,0,24,22,1,0,0,0,25,26,5,8,0,0,26,27,5,0,0,1,27,1,1,0,0,0,28,33,
3,4,2,0,29,33,3,6,3,0,30,33,3,8,4,0,31,33,3,10,5,0,32,28,1,0,0,0,32,29,1,
0,0,0,32,30,1,0,0,0,32,31,1,0,0,0,33,3,1,0,0,0,34,35,5,15,0,0,35,36,5,5,
0,0,36,37,3,12,6,0,37,38,5,6,0,0,38,5,1,0,0,0,39,40,5,2,0,0,40,41,3,8,4,
0,41,42,5,3,0,0,42,43,5,9,0,0,43,44,5,15,0,0,44,45,5,10,0,0,45,46,3,8,4,
0,46,47,5,6,0,0,47,7,1,0,0,0,48,52,5,7,0,0,49,51,3,2,1,0,50,49,1,0,0,0,51,
54,1,0,0,0,52,50,1,0,0,0,52,53,1,0,0,0,53,55,1,0,0,0,54,52,1,0,0,0,55,56,
5,8,0,0,56,9,1,0,0,0,57,58,5,4,0,0,58,59,5,9,0,0,59,60,3,12,6,0,60,61,5,
10,0,0,61,62,5,6,0,0,62,11,1,0,0,0,63,68,3,14,7,0,64,65,7,0,0,0,65,67,3,
14,7,0,66,64,1,0,0,0,67,70,1,0,0,0,68,66,1,0,0,0,68,69,1,0,0,0,69,13,1,0,
0,0,70,68,1,0,0,0,71,79,5,16,0,0,72,79,5,15,0,0,73,74,5,9,0,0,74,75,3,12,
6,0,75,76,5,10,0,0,76,79,1,0,0,0,77,79,5,17,0,0,78,71,1,0,0,0,78,72,1,0,
0,0,78,73,1,0,0,0,78,77,1,0,0,0,79,15,1,0,0,0,5,22,32,52,68,78];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class JSAnalizadorParser extends antlr4.Parser {

    static grammarFileName = "JSAnalizador.g4";
    static literalNames = [ null, "'programa'", "'procesar'", "'manejarError'", 
                            "'imprimir'", "'='", "';'", "'{'", "'}'", "'('", 
                            "')'", "'+'", "'-'", "'*'", "'/'" ];
    static symbolicNames = [ null, "PROGRAMA", "PROCESAR", "MANEJAR", "IMPRIMIR", 
                             "IGUAL", "PYC", "LLLAVE", "RLLAVE", "LPAR", 
                             "RPAR", "MAS", "MENOS", "MULT", "DIV", "ID", 
                             "NUMERO", "CADENA", "WS" ];
    static ruleNames = [ "programa", "instruccion", "asignacion", "excepcion", 
                         "bloque", "imprimir", "expresion", "termino" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = JSAnalizadorParser.ruleNames;
        this.literalNames = JSAnalizadorParser.literalNames;
        this.symbolicNames = JSAnalizadorParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, JSAnalizadorParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.match(JSAnalizadorParser.PROGRAMA);
	        this.state = 17;
	        this.match(JSAnalizadorParser.ID);
	        this.state = 18;
	        this.match(JSAnalizadorParser.LLLAVE);
	        this.state = 22;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 32916) !== 0)) {
	            this.state = 19;
	            this.instruccion();
	            this.state = 24;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 25;
	        this.match(JSAnalizadorParser.RLLAVE);
	        this.state = 26;
	        this.match(JSAnalizadorParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, JSAnalizadorParser.RULE_instruccion);
	    try {
	        this.state = 32;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 28;
	            this.asignacion();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 29;
	            this.excepcion();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 30;
	            this.bloque();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 31;
	            this.imprimir();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, JSAnalizadorParser.RULE_asignacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(JSAnalizadorParser.ID);
	        this.state = 35;
	        this.match(JSAnalizadorParser.IGUAL);
	        this.state = 36;
	        this.expresion();
	        this.state = 37;
	        this.match(JSAnalizadorParser.PYC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	excepcion() {
	    let localctx = new ExcepcionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, JSAnalizadorParser.RULE_excepcion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(JSAnalizadorParser.PROCESAR);
	        this.state = 40;
	        this.bloque();
	        this.state = 41;
	        this.match(JSAnalizadorParser.MANEJAR);
	        this.state = 42;
	        this.match(JSAnalizadorParser.LPAR);
	        this.state = 43;
	        this.match(JSAnalizadorParser.ID);
	        this.state = 44;
	        this.match(JSAnalizadorParser.RPAR);
	        this.state = 45;
	        this.bloque();
	        this.state = 46;
	        this.match(JSAnalizadorParser.PYC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bloque() {
	    let localctx = new BloqueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, JSAnalizadorParser.RULE_bloque);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(JSAnalizadorParser.LLLAVE);
	        this.state = 52;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 32916) !== 0)) {
	            this.state = 49;
	            this.instruccion();
	            this.state = 54;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 55;
	        this.match(JSAnalizadorParser.RLLAVE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	imprimir() {
	    let localctx = new ImprimirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, JSAnalizadorParser.RULE_imprimir);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(JSAnalizadorParser.IMPRIMIR);
	        this.state = 58;
	        this.match(JSAnalizadorParser.LPAR);
	        this.state = 59;
	        this.expresion();
	        this.state = 60;
	        this.match(JSAnalizadorParser.RPAR);
	        this.state = 61;
	        this.match(JSAnalizadorParser.PYC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, JSAnalizadorParser.RULE_expresion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.termino();
	        this.state = 68;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 30720) !== 0)) {
	            this.state = 64;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 30720) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 65;
	            this.termino();
	            this.state = 70;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	termino() {
	    let localctx = new TerminoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, JSAnalizadorParser.RULE_termino);
	    try {
	        this.state = 78;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 71;
	            this.match(JSAnalizadorParser.NUMERO);
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 72;
	            this.match(JSAnalizadorParser.ID);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 73;
	            this.match(JSAnalizadorParser.LPAR);
	            this.state = 74;
	            this.expresion();
	            this.state = 75;
	            this.match(JSAnalizadorParser.RPAR);
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 77;
	            this.match(JSAnalizadorParser.CADENA);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

JSAnalizadorParser.EOF = antlr4.Token.EOF;
JSAnalizadorParser.PROGRAMA = 1;
JSAnalizadorParser.PROCESAR = 2;
JSAnalizadorParser.MANEJAR = 3;
JSAnalizadorParser.IMPRIMIR = 4;
JSAnalizadorParser.IGUAL = 5;
JSAnalizadorParser.PYC = 6;
JSAnalizadorParser.LLLAVE = 7;
JSAnalizadorParser.RLLAVE = 8;
JSAnalizadorParser.LPAR = 9;
JSAnalizadorParser.RPAR = 10;
JSAnalizadorParser.MAS = 11;
JSAnalizadorParser.MENOS = 12;
JSAnalizadorParser.MULT = 13;
JSAnalizadorParser.DIV = 14;
JSAnalizadorParser.ID = 15;
JSAnalizadorParser.NUMERO = 16;
JSAnalizadorParser.CADENA = 17;
JSAnalizadorParser.WS = 18;

JSAnalizadorParser.RULE_programa = 0;
JSAnalizadorParser.RULE_instruccion = 1;
JSAnalizadorParser.RULE_asignacion = 2;
JSAnalizadorParser.RULE_excepcion = 3;
JSAnalizadorParser.RULE_bloque = 4;
JSAnalizadorParser.RULE_imprimir = 5;
JSAnalizadorParser.RULE_expresion = 6;
JSAnalizadorParser.RULE_termino = 7;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSAnalizadorParser.RULE_programa;
    }

	PROGRAMA() {
	    return this.getToken(JSAnalizadorParser.PROGRAMA, 0);
	};

	ID() {
	    return this.getToken(JSAnalizadorParser.ID, 0);
	};

	LLLAVE() {
	    return this.getToken(JSAnalizadorParser.LLLAVE, 0);
	};

	RLLAVE() {
	    return this.getToken(JSAnalizadorParser.RLLAVE, 0);
	};

	EOF() {
	    return this.getToken(JSAnalizadorParser.EOF, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JSAnalizadorListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSAnalizadorListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSAnalizadorVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSAnalizadorParser.RULE_instruccion;
    }

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	excepcion() {
	    return this.getTypedRuleContext(ExcepcionContext,0);
	};

	bloque() {
	    return this.getTypedRuleContext(BloqueContext,0);
	};

	imprimir() {
	    return this.getTypedRuleContext(ImprimirContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSAnalizadorListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSAnalizadorListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSAnalizadorVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSAnalizadorParser.RULE_asignacion;
    }

	ID() {
	    return this.getToken(JSAnalizadorParser.ID, 0);
	};

	IGUAL() {
	    return this.getToken(JSAnalizadorParser.IGUAL, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	PYC() {
	    return this.getToken(JSAnalizadorParser.PYC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSAnalizadorListener ) {
	        listener.enterAsignacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSAnalizadorListener ) {
	        listener.exitAsignacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSAnalizadorVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExcepcionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSAnalizadorParser.RULE_excepcion;
    }

	PROCESAR() {
	    return this.getToken(JSAnalizadorParser.PROCESAR, 0);
	};

	bloque = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BloqueContext);
	    } else {
	        return this.getTypedRuleContext(BloqueContext,i);
	    }
	};

	MANEJAR() {
	    return this.getToken(JSAnalizadorParser.MANEJAR, 0);
	};

	LPAR() {
	    return this.getToken(JSAnalizadorParser.LPAR, 0);
	};

	ID() {
	    return this.getToken(JSAnalizadorParser.ID, 0);
	};

	RPAR() {
	    return this.getToken(JSAnalizadorParser.RPAR, 0);
	};

	PYC() {
	    return this.getToken(JSAnalizadorParser.PYC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSAnalizadorListener ) {
	        listener.enterExcepcion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSAnalizadorListener ) {
	        listener.exitExcepcion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSAnalizadorVisitor ) {
	        return visitor.visitExcepcion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BloqueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSAnalizadorParser.RULE_bloque;
    }

	LLLAVE() {
	    return this.getToken(JSAnalizadorParser.LLLAVE, 0);
	};

	RLLAVE() {
	    return this.getToken(JSAnalizadorParser.RLLAVE, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JSAnalizadorListener ) {
	        listener.enterBloque(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSAnalizadorListener ) {
	        listener.exitBloque(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSAnalizadorVisitor ) {
	        return visitor.visitBloque(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImprimirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSAnalizadorParser.RULE_imprimir;
    }

	IMPRIMIR() {
	    return this.getToken(JSAnalizadorParser.IMPRIMIR, 0);
	};

	LPAR() {
	    return this.getToken(JSAnalizadorParser.LPAR, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	RPAR() {
	    return this.getToken(JSAnalizadorParser.RPAR, 0);
	};

	PYC() {
	    return this.getToken(JSAnalizadorParser.PYC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSAnalizadorListener ) {
	        listener.enterImprimir(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSAnalizadorListener ) {
	        listener.exitImprimir(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSAnalizadorVisitor ) {
	        return visitor.visitImprimir(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSAnalizadorParser.RULE_expresion;
    }

	termino = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerminoContext);
	    } else {
	        return this.getTypedRuleContext(TerminoContext,i);
	    }
	};

	MAS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JSAnalizadorParser.MAS);
	    } else {
	        return this.getToken(JSAnalizadorParser.MAS, i);
	    }
	};


	MENOS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JSAnalizadorParser.MENOS);
	    } else {
	        return this.getToken(JSAnalizadorParser.MENOS, i);
	    }
	};


	MULT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JSAnalizadorParser.MULT);
	    } else {
	        return this.getToken(JSAnalizadorParser.MULT, i);
	    }
	};


	DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JSAnalizadorParser.DIV);
	    } else {
	        return this.getToken(JSAnalizadorParser.DIV, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JSAnalizadorListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSAnalizadorListener ) {
	        listener.exitExpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSAnalizadorVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSAnalizadorParser.RULE_termino;
    }

	NUMERO() {
	    return this.getToken(JSAnalizadorParser.NUMERO, 0);
	};

	ID() {
	    return this.getToken(JSAnalizadorParser.ID, 0);
	};

	LPAR() {
	    return this.getToken(JSAnalizadorParser.LPAR, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	RPAR() {
	    return this.getToken(JSAnalizadorParser.RPAR, 0);
	};

	CADENA() {
	    return this.getToken(JSAnalizadorParser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSAnalizadorListener ) {
	        listener.enterTermino(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSAnalizadorListener ) {
	        listener.exitTermino(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSAnalizadorVisitor ) {
	        return visitor.visitTermino(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




JSAnalizadorParser.ProgramaContext = ProgramaContext; 
JSAnalizadorParser.InstruccionContext = InstruccionContext; 
JSAnalizadorParser.AsignacionContext = AsignacionContext; 
JSAnalizadorParser.ExcepcionContext = ExcepcionContext; 
JSAnalizadorParser.BloqueContext = BloqueContext; 
JSAnalizadorParser.ImprimirContext = ImprimirContext; 
JSAnalizadorParser.ExpresionContext = ExpresionContext; 
JSAnalizadorParser.TerminoContext = TerminoContext; 
