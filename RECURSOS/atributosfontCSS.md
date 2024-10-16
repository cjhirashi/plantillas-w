# ATRIBUTOS DE FUENTE CSS

### ***font-family:***
Define la familia de fuentes a usar.
> **VALORES**
> - Nombre de la fuente: Arial, Times New Roman, etc.
> - Comillas para nombres con espacios: "Open Sans", "Courier New".
> - Genérico: serif, sans-serif, monospace, cursive, fantasy.

### ***font-size:***
Especifica el tamaño de la fuente.
> **VALORES**
> - Unidades absolutas: px, pt, in, cm, mm.
> - Unidades relativas: em, rem, %, vw, vh.

### ***font-weight***
Define el grosor de la fuente.
> **VALORES**
> - Números: 100, 200, 300, 400, 500, 600, 700, 800, 900.
> - Palabras clave: normal, bold, bolder, lighter.

### 4. *font-style*
   Especifica el estilo de la fuente.
   - *Valores*:
     - normal: estilo normal.
     - italic: estilo cursivo.
     - oblique: estilo oblicuo.

### 5. *line-height*
   Controla la altura de la línea.
   - *Valores*:
     - Número: 1.5.
     - Unidades: px, em, % o solo un número (relativo al tamaño de fuente).
     
### 6. *letter-spacing*
   Ajusta el espacio entre caracteres.
   - *Valores*:
     - Longitudes: px, em, %.

### 7. *word-spacing*
   Ajusta el espacio entre palabras.
   - *Valores*:
     - Longitudes: px, em, %.

### 8. *text-align*
   Alinea el texto dentro de su contenedor.
   - *Valores*:
     - left
     - right
     - center
     - justify

### 9. *text-transform*
   Controla la transformación del texto.
   - *Valores*:
     - none
     - capitalize: primera letra de cada palabra en mayúscula.
     - uppercase: todo en mayúscula.
     - lowercase: todo en minúscula.

### 10. *text-decoration*
   Añade decoración al texto.
   - *Valores*:
     - none
     - underline
     - overline
     - line-through

### 11. *text-indent*
   Define la sangría del primer renglón de un texto.
   - *Valores*:
     - Longitudes: px, em, %.

### 12. *text-shadow*
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

