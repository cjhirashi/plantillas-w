## Atributos - **Borde**

En CSS, el atributo border permite definir bordes para los elementos de tu página. Puedes controlar diferentes aspectos del borde, 
tales como el color, el estilo y el grosor.

### 1. ***border-width***

Controla el grosor del borde. Puedes especificarlo en valores absolutos o relativos (en píxeles, em, rem, etc.).

```css
border-width: 2px; /* Un ancho uniforme en todos los lados */
border-width: 2px 4px; /* Vertical | Horizontal */
border-width: 2px 4px 6px; /* Superior | Horizontal | Inferior */
border-width: 2px 4px 6px 8px; /* Superior | Derecho | Inferior | Izquierdo */
```

### 2. ***border-style***

Define el estilo del borde. 
> **VALORES**
> - none | Sin borde.
> - solid: Borde sólido.
> - dashed: Borde discontinuo.
> - dotted: Borde de puntos.
> - double: Borde doble.
> - groove: Borde en relieve.
> - ridge: Borde elevado.
> - inset: Borde con efecto de inserción.
> - outset: Borde con efecto de salida.

```css
border-style: solid; /* Un borde sólido */
```

### 3. ***border-color***

Especifica el color del borde. 

> **VALORES**
> - Formato hexadecimal
> - Formato RGB
> - Formato RGBA
> - Formato HSL
> - Formato HSLA
> - nombre de color

```css
border-color: #3498db; /* Color en formato hexadecimal */
border-color: rgb(52, 152, 219); /* Color en formato RGB */
border-color: rgba(52, 152, 219, 0.5); /* Color en formato RGBA */
border-color: hsl(200, 100%, 50%); /* Color en formato HSL */
```

### 4. ***border***

Puedes combinar las propiedades anteriores en una sola línea utilizando la propiedad border.

```css
border: 2px solid #3498db; /* Establece el grosor, el estilo y el color en una sola declaración */
```

### 5. Bordes específicos

Puedes especificar bordes individuales para cada lado del elemento usando:

> - border-top
> - border-right
> - border-bottom
> - border-left

Cada una de estas propiedades puede recibir valores para width, style y color.

```css
border-top: 2px solid #3498db;
border-right: 4px dashed #e74c3c;
border-bottom: 6px dotted #2ecc71;
border-left: 8px double #f39c12;
```

### 6. ***border-radius***

Esta propiedad se utiliza para redondear las esquinas del borde.

```css
border-radius: 10px; /* Redondea todas las esquinas */
border-radius: 10px 5px; /* Superior | Inferior */
border-radius: 10px 5px 15px; /* Superior | Derecho | Inferior */
border-radius: 10px 5px 15px 20px; /* Superior | Derecho | Inferior | Izquierdo */
```

### *Ejemplo completo*

```css
.box {
    border: 2px solid #3498db;
    border-radius: 8px;
    border-top: 3px dashed #e74c3c;
    border-left: 4px dotted #2ecc71;
}
```

## Atributos - Sombra (Box Shadow)

La propiedad box-shadow se utiliza para agregar sombras a los elementos. Los valores que puedes ingresar son:

> 1. ***Desplazamiento horizontal*** | px, % o rem | Positivo hacia la derecha o negativo hacia la izquierda.
> 2. ***Desplazamiento vertical*** | px, % o rem | Positivo hacia abajo, negativo hacia arriba.
> 3. ***Difuminado (blur)*** | px | Un valor mayor significa una sombra más difusa.
> 4. ***Extensión (spread)*** (opcional) | px | Un valor positivo aumentará el tamaño, mientras que un negativo lo reducirá
> 5. ***Color*** | Puedes usar nombres de color, hexadecimal, RGB, RGBA, HSL o HSLA.

### *Ejemplo:*
```css
box-shadow: 10px 5px 15px rgba(0, 0, 0, 0.5);
```

## Atributos - Filtro (Filter)

La propiedad filter se utiliza para aplicar efectos gráficos a los elementos. Algunos de los valores disponibles son:

> 1. ***blur(5px)*** | Aplica un desenfoque
> 2. ***brightness(150%)*** | Ajusta el brillo
> 3. ***contrast(200%)*** | Ajusta el contraste
> 4. ***drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5))*** | Crear una sombra similar a box-shadow pero en filtros
> 5. ***grayscale(100%)*** | Convierte la imagen a escala de grises
> 6. ***invert(100%)*** | Invierte el color
> 7. ***opacity(50%)*** | Ajusta la opacidad
> 8. ***saturate(300%)*** | Ajusta la saturación
> 9. ***sepia(100%)*** | Aplica un efecto sepia

### *Ejemplo:*
```css
filter: blur(5px) brightness(150%);
```

