# Analizador Sintáctico

## Instalación
Para instalar la dependencia de ANTLR4 necesaria para ejecutar el proyecto, abra una terminal en la raíz de la carpeta y ejecute el siguiente comando:

```bash
npm install
Instrucciones de Ejecución
1. Ejemplos de Entrada Correcta
Estos archivos no contienen errores y muestran en consola la tabla de tokens, el árbol de análisis sintáctico y el resultado de la interpretación en JavaScript.

Bash
node index.js correcto1.txt
Bash
node index.js correcto2.txt
2. Ejemplos de Entrada Incorrecta
Estos archivos contienen fallas léxicas o sintácticas diseñadas para comprobar el funcionamiento del detector de errores.

Prueba de error sintáctico:

Bash
node index.js incorrecto1.txt
Prueba de error léxico:

Bash
node index.js incorrecto2.txt
