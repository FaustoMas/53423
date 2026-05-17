# Analizador Sintáctico y Semántico

Este repositorio contiene un analizador léxico, sintáctico e intérprete construido con **ANTLR4** y **Node.js**, basándose en la gramática EBNF proporcionada por la cátedra. 

El programa procesa un código fuente de entrada, genera una tabla de lexemas y tokens, construye el árbol de derivación sintáctica y, finalmente, traduce y ejecuta las instrucciones en JavaScript.

## Requisitos Previos
- Tener [Node.js](https://nodejs.org/) instalado en el sistema.

## Instalación
1. Clonar el repositorio en una carpeta local.
2. Abrir una terminal en la raíz del proyecto.
3. Ejecutar el siguiente comando para instalar la dependencia de ANTLR4:
   ```bash
   npm install

Cómo ejecutar el proyecto
Para procesar un archivo, se debe ejecutar el archivo principal index.js mediante Node.js, pasándole como parámetro el nombre del archivo de texto que contiene el código a evaluar.

1. Pruebas con código CORRECTO
2. 
node index.js correcto1.txt
node index.js correcto2.txt

3. Pruebas con código INCORRECTO
Prueba con error sintáctico (falta punto y coma):
node index.js incorrecto1.txt
Prueba con error léxico (símbolo no reconocido):
node index.js incorrecto2.txt
