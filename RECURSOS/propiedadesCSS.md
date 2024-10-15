# ATIBUTOS CSS

## Estructura de datos

css
selector {
    propiedad: valor;
}


### Componentes:

1. *Selector*: Es el elemento HTML al que se aplicarán los estilos. Puede ser un tag (por ejemplo, div, p), una clase (precedida por un punto, como .clase) o un ID (precedido por un símbolo de gato, como #id).

2. *Propiedad*: Es el aspecto del estilo que deseas cambiar, como color, font-size, margin, etc.

3. *Valor*: Es el valor que se le asigna a la propiedad, como red, 16px, 20px, etc.

### Ejemplo:

```css

css
h1 {
    color: blue;
    font-size: 24px;
}

.claseEjemplo {
    background-color: yellow;
    padding: 10px;
}

#idEjemplo {
    border: 1px solid black;
    margin: 15px;
}

```


En este ejemplo, los estilos se aplican a un encabezado de nivel 1 (h1), a todos los elementos con la clase claseEjemplo, y a un elemento con el ID idEjemplo. Si tienes alguna otra duda sobre CSS, ¡pregunta sin problemas!

Q: Asume rol de programador y muestrame todos los atributos de CSS

A: Claro, aquí hay una lista de los atributos (propiedades) CSS más comunes, organizados por categorías para facilitar su comprensión:

### 1. *Color y Fondo*
- *color*: Establece el color del texto.
- *background-color*: Establece el color del fondo.
- *background-image*: Establece una imagen como fondo.
- *background-repeat*: Controla la repetición de la imagen de fondo.
- *background-position*: Establece la posición de la imagen de fondo.

### 2. *Tipografía*
- *font-family*: Especifica la fuente.
- *font-size*: Establece el tamaño de la fuente.
- *font-weight*: Define el grosor de la fuente.
- *font-style*: Aplica estilo (normal, cursiva, etc.).
- *line-height*: Controla la altura de la línea.

### 3. *Texto*
- *text-align*: Alinea el texto (izquierda, derecha, centro, justificado).
- *text-decoration*: Añade decoraciones como subrayado, línea tachada.
- *text-transform*: Controla el capitalización del texto (mayúsculas, minúsculas).
- *letter-spacing*: Espaciado entre caracteres.
- *word-spacing*: Espaciado entre palabras.

### 4. *Caja y Espaciado*
- *margin*: Espacio exterior alrededor de un elemento.
- *padding*: Espacio interior entre el borde y el contenido.
- *border*: Define el borde de un elemento.
- *width*: Establece el ancho del elemento.
- *height*: Establece la altura del elemento.

### 5. *Posicionamiento*
- *position*: Especifica el método de posicionamiento (static, relative, absolute, fixed, sticky).
- *top, right, bottom, left*: Posicionamiento del elemento en relación a su contenedor.
- *z-index*: Controla el apilamiento de los elementos.

### 6. *Visualización*
- *display*: Controla cómo se muestra un elemento (block, inline, inline-block, flex, grid).
- *visibility*: Controla la visibilidad del elemento (visible, hidden).
- *opacity*: Establece la opacidad del elemento (0 a 1).

### 7. *Flexbox y Grid*
- *flex-direction*: Define la dirección del eje (row, column).
- *justify-content*: Alinea elementos en el eje principal.
- *align-items*: Alinea elementos en el eje transversal.
- *grid-template-columns*: Define el número y el tamaño de las columnas en un grid.

### 8. *Sombra y Filtro*
- *box-shadow*: Añade sombras a los elementos.
- *text-shadow*: Añade sombras al texto.
- *filter*: Aplica efectos visuales (blur, brightness, contrast, etc.).

### 9. *Transiciones y Animaciones*
- *transition*: Controla la transición entre estados.
- *animation*: Define animaciones clave.

### 10. *Transformaciones*
- *transform*: Aplica transformaciones (rotate, scale, translate).

### 11. *Contenido*
- *content*: Inserta contenido en elementos generados.

### 12. *Otros*
- *cursor*: Controla el tipo de cursor al pasar sobre el elemento.
- *overflow*: Controla el comportamiento de overflow de contenido.

Esta lista no es exhaustiva, pero cubre la mayoría de las propiedades que se utilizan en CSS.
