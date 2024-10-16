## Atributos - Propiedades de Caja

En CSS, los parámetros de caja y espaciado son fundamentales para controlar la apariencia y la disposición de un elemento en la página. Aquí te detallo los valores más comunes que se pueden manejar:

### 1. **Box Model**

El modelo de caja en CSS incluye el content, padding, border y margin.

> **VALORES**
> - *width* y *height* | (px), (%), rem, etc | Definen el tamaño del content.

##### *Ejemplo* 
```css
width: 200px; height: 100px;
```
> **VALORES**
> - *padding* | (px), (%), rem, etc | Espaciado interno entre el contenido y el borde del elemento.

##### *Ejemplo*
```css
padding: 10px; o padding: 5px 10px; (arriba y abajo, izquierda y derecha).
```
 
> **VALORES**
> - *border* | border: <width> <style> <color> | Define el borde alrededor del elemento.

##### *Ejemplo*
```css
border: 2px solid #000;
```

> **VALORES**
> - *margin* | (px), (%), rem, etc | Espaciado externo entre el borde del elemento y otros elementos.

##### *Ejemplo*
```css
margin: 20px; /*todo*/
margin: 10px 15px; /*arriba y abajo | izquierda y derecha*/
margin: 2px 4px 6px 8px; /*arriba | derecha | abajo | izquierda*/
```

## Atributos - Espaciado (Espaciado Interior y Exterior)

### 2. **Propiedades de Espaciado**

> **VALORES**
> - *margin*: Espacio exterior.
> - margin-top, margin-right, margin-bottom, margin-left
##### *Ejemplo* 
```css
margin-top: 10px;
```
    
> **VALORES**
> - *padding*: Espacio interior.
> - padding-top, padding-right, padding-bottom, padding-left

##### *Ejemplo* 
```css
padding-bottom: 15px;
```
    
> **VALORES**
> - *box-shadow*: Para agregar sombras alrededor de la caja.
> - Valores: igual que box-shadow mencionado antes.

##### *Ejemplo*
```css
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
```

### *Ejemplo* 

```css
.element {
    width: 300px;
    height: 200px;
    padding: 20px;         /* Espaciado interno */
    margin: 10px 15px;    /* Espaciado externo */
    border: 2px solid #333; /* Borde sólido */
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5); /* Sombra */
}
```

### Notas Finales

- Aquellos elementos en CSS generalmente respetan el modelo de cajas, lo que significa que cualquier estilo que apliques impactará su tamaño, espaciado y presentación general en la página.
- Considera también el *modelo de caja* (box-sizing: content-box; o box-sizing: border-box;) para controlar cómo se calculan el ancho y la altura en funciones del padding y borde.


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
> - solid | Borde sólido.
> - dashed | Borde discontinuo.
> - dotted | Borde de puntos.
> - double | Borde doble.
> - groove | Borde en relieve.
> - ridge | Borde elevado.
> - inset | Borde con efecto de inserción.
> - outset | Borde con efecto de salida.

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

### *Ejemplo*
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

### *Ejemplo*
```css
filter: blur(5px) brightness(150%);
```

## Atributos - Tranformación

La propiedad transform en CSS se utiliza para aplicar transformaciones 2D y 3D a un elemento. 
A continuación, se detallan los valores y funciones que puedes usar en los parámetros de transformación:

### Transformaciones 2D

#### 1. ***translate()***

Mueve un elemento en el plano XY.

> **VALORES**
> - translate(x, y) o translateX(x) / translateY(y)
> - Valores: pueden ser en píxeles (px), porcentajes (%) o unidades como em/rem.
##### *Ejemplo* 
```css
transform: translate(50px, 100px);
```


#### 2. ***scale()***

Cambia el tamaño de un elemento.

> **VALORES**
> - scale(x, y) o scaleX(x) / scaleY(y)
> - Valores: pueden ser números (1 para tamaño original, >1 para aumentar, <1 para reducir).
##### *Ejemplo* 
```css
transform: scale(1.5, 2);
```

#### 3. ***rotate()***

Rota un elemento alrededor de su origen (0, 0).

> **VALORES**
> - rotate(angle)
> - Valores: puede ser en grados (deg), radianes (rad) o turnos (turn).
##### *Ejemplo*
```css
transform: rotate(45deg);
```

#### 4. ***skew()***

Inclina un elemento a lo largo de los ejes X y Y.

> **VALORES**
> - skew(x-angle, y-angle) o skewX(x-angle) / skewY(y-angle)
> - Valores: en grados (deg).
##### *Ejemplo* 
```css
transform: skew(30deg, 20deg);
```

#### 5. ***matrix()***

Permite aplicar múltiples transformaciones en una sola función utilizando una matriz 2D.

> **VALORES**
> - matrix(a, b, c, d, e, f)
##### *Ejemplo*
```css
transform: matrix(1, 0, 0, 1, 100, 200);
```


### Transformaciones 3D

#### 1. ***translateZ()***

Mueve un elemento a lo largo del eje Z.

##### *Ejemplo* 
```css
transform: translateZ(100px);
```

#### 2. ***scaleZ()***

Cambia el tamaño de un elemento a lo largo del eje Z.

##### *Ejemplo* 
```css
transform: scaleZ(1.5);
```


#### 3. ***rotateX()***

Rota un elemento alrededor del eje X.

##### *Ejemplo* 
```css
transform: rotateX(45deg);
```

#### 4. ***rotateY()***

Rota un elemento alrededor del eje Y.

##### *Ejemplo* 
```css
transform: rotateY(45deg);
```

#### 5. ***rotateZ()*** 

Rota un elemento alrededor del eje Z (equivalente a rotate() en 2D).

##### *Ejemplo* 
```css
transform: rotateZ(45deg);
```

#### 6. ***perspective()*** 

Define una perspectiva para las transformaciones 3D. Debe aplicarse sobre el contenedor.

##### *Ejemplo*
```css
perspective(500px)
```

### Combinación de Transformaciones

Puedes combinar múltiples transformaciones en una sola declaración transform. Se ejecutarán en el siguiente orden:

> - *translate*
> - *scale*
> - *rotate*
> - *skew*

##### *Ejemplo*
```css
transform: translate(50px, 50px) scale(1.5) rotate(45deg);
```


