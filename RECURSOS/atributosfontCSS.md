# ATRIBUTOS DE FUENTE CSS

### ***font-family:***
Define la familia de fuentes a usar.
> **VALORES**
> - Nombre de la fuente: Arial, Times New Roman, etc.
> - Comillas para nombres con espacios: "Open Sans", "Courier New".
> - Genérico: serif, sans-serif, monospace, cursive, fantasy.

### 2. *font-size*
> Especifica el tamaño de la fuente.
> 1. Especifica el tamaño del texto con cualquiera de las siguiente dedidas (px, pt, in, cm, mm, em, rem, %, vw, vh).
> ```css
> font-size: 16px;
> ```

### 3. *font-weight*
> Define el grosor de la fuente.
> 1. Grosor lighter, este valor le da un grado de grosos menor al del padre
> ```css
> font-weight: normal;
> ```
> 2. Este valor le da un grado de grosos menor al del padre.
> ```css
> font-weight: lighter;
> ```
> 3. Este valor le da un grosor bold al texto.
> ```css
> font-weight: bold;
> ```
> 4. Este valor le da un grado de grosos mayor al del padre.
> ```css
> font-weight: bolder;
> ```
> 5. Grosos por valor numérico.
> ```css
> font-weight: 100;
> ```
> ```css
> font-weight: 200;
> ```
> ```css
> font-weight: 300;
> ```
> ```css
> font-weight: 400;
> ```
> ```css
> font-weight: 500;
> ```
> ```css
> font-weight: 600;
> ```
> ```css
> font-weight: 700;
> ```
> ```css
> font-weight: 800;
> ```
> ```css
> font-weight: 900;
> ```

### 4. *font-style*
> Especifica el estilo de la fuente.
> 1. Estilo normal de la fuente.
> ```css
> font-style: normal;
> ```
> 2. Estilo italico de la fuente.
> ```css
> font-style: italic;
> ```
> 3. Estilo oblicuo de la fuente.
> ```css
> font-style: oblique;
> ```

### 5. *line-height*
   Controla la altura de la línea.
   - *Valores*:
     - Número: 1.5.
     - Unidades: px, em, % o solo un número (relativo al tamaño de fuente).
     
### 6. *letter-spacing*
> Ajusta el espacio entre caracteres.
> 1. Longitudes para el espaciado en las siguientes unidades (px, em, %).
> ```css
> letter-spacing: 10px;
> ```

### 7. *word-spacing*
> Ajusta el espacio entre palabras.
> 1. Longitudes para el espaciado en las siguientes unidades (px, em, %).
> ```css
> word-spacing: 10px;
> ```

### 8. *text-align*
> Alinea el texto dentro de su contenedor.
> 1. Alinea el texto hacia la izquierda.
> ```css
> text-align: left;
> ```
> 2. Alinea el texto hacia la izquierda.
> ```css
> text-align: right;
> ```
> 3. Alinea el texto al centro.
> ```css
> text-align: center;
> ```
> 4. Justifica el texto a la ancho del contenedor.
> ```css
> text-align: justify;
> ```

### 9. *text-transform*
> Transforma los caracteres del texto.
> 1. No hace ninguna transformación, valor por defecto.
> ```css
> text-transform: none;
> ```
> 2. Pone la primer letra de cada palabra en mayúscula.
> ```css
> text-transform: capitalize;
> ```
> 3. Pone el texto en mayusculas.
> ```css
> text-transform: uppercase;
> ```
> 4. Pone el texto en minúsculas.
> ```css
> text-transform: lowercase;
> ```

### 10. *text-decoration*
> Añade decoración al texto.
> 1. No aplica ninguna decoración al texto.
> ```css
> text-decoration: none;
> ```
> 2. Aplica una línea debado del texto.
> ```css
> text-decoration: underline;
> ```
> 3. Aplica una línea encima del texto.
> ```css
> text-decoration: overline;
> ```
> 4. Aplica una línea a través del texto.
> ```css
> text-decoration: line-through;
> ```

### 11. ***Gradiente***
> Añadir gradientes al fondo
> 1. Gradiente linear.
> ```css
> background: linear-gradient(to top left, #f69d3c, #3f87a6);
> ```
> 2. Gradiente radial.
> ```css
> background: radial-gradient(#f69d3c, #3f87a6);
> ```
> 3. Gradiente linear repetitivo.
> ```css
> background: repeating-linear-gradient(#f69d3c, #3f87a6 50px);
> ```
> 4. Gradiente radial repetitivo.
> ```css
> background: repeating-radial-gradient(#f69d3c, #3f87a6 50px);
> ```
> 5. Gradiente cónico.
> ```css
> background: conic-gradient(#f69d3c, #3f87a6);
> ```

### 12. *text-indent*
   Define la sangría del primer renglón de un texto.
   - *Valores*:
     - Longitudes: px, em, %.

### 13. *text-shadow*
   Añade sombra al texto.
   - *Valores*:
     - h-shadow v-shadow blur-radius color

### Ejemplo de CSS
Aquí tienes un ejemplo que utiliza algunos de estos atributos:

```CSS
p {
  font-family: "Arial", sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
  line-height: 1.5;
  letter-spacing: 0.5px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: underline;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}
```

