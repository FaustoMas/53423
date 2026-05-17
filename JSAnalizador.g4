grammar JSAnalizador;

programa : PROGRAMA ID LLLAVE instruccion* RLLAVE EOF ;

instruccion : asignacion
            | excepcion
            | bloque
            | imprimir
            ;

asignacion : ID IGUAL expresion PYC ;

excepcion : PROCESAR bloque MANEJAR LPAR ID RPAR bloque PYC ;

bloque : LLLAVE instruccion* RLLAVE ;

imprimir : IMPRIMIR LPAR expresion RPAR PYC ;

expresion : termino ( (MAS | MENOS | MULT | DIV) termino )* ;

termino : NUMERO
        | ID
        | LPAR expresion RPAR
        | CADENA 
        ;

PROGRAMA : 'programa' ;
PROCESAR : 'procesar' ;
MANEJAR  : 'manejarError' ;
IMPRIMIR : 'imprimir' ;

IGUAL  : '=' ;
PYC    : ';' ;
LLLAVE : '{' ;
RLLAVE : '}' ;
LPAR   : '(' ;
RPAR   : ')' ;

MAS   : '+' ;
MENOS : '-' ;
MULT  : '*' ;
DIV   : '/' ;

ID     : [a-zA-Z] [a-zA-Z0-9_]* ;
NUMERO : [0-9]+ ('.' [0-9]+)? ;
CADENA : '"' ~["]* '"' ;

WS : [ \t\r\n]+ -> skip ;