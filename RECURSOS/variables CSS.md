# Definición de variables

Las variables CSS se definen utilizando la sintaxis `--nombre-variable` dentro de un selector. Por convención, se suelen definir en el selector `:root` para que sean globales.

```css
:root {
    --color-principal: #3498db;
    --tamaño-fuente: 16px;
}
```

## Uso de variables

Una vez definidas, puedes usar estas variables en cualquier lugar de tu CSS utilizando la función var().

```css
body {
    background-color: var(--color-principal);
    font-size: var(--tamaño-fuente);
}
```

## Ventajas de las variables CSS

1. *Reusabilidad:* Puedes cambiar el valor de una variable en un solo lugar y se actualizará en todas partes donde se utilice.
2. *Facilidad de mantenimiento:* Facilita la gestión de estilos complejos.
3. *Dinamismo:* Puedes cambiar los valores de las variables mediante JavaScript para crear estilos dinámicos.

### Ejemplo completo

```css
:root {
    --color-fondo: #f0f0f0;
    --color-texto: #333;
}

body {
    background-color: var(--color-fondo);
    color: var(--color-texto);
}

h1 {
    color: var(--color-principal); /* Esto no funcionará si no está definido en :root */
}
```

## Consideraciones

- Las variables CSS son sensibles a mayúsculas y minúsculas.
- Se pueden redefinir en otros selectores, lo que permite crear un contexto diferente para los valores.

```css
.container {
    --color-principal: #e74c3c; /* Redefinición local */
}

.container h1 {
    color: var(--color-principal); /* Utiliza el nuevo valor */
}
```
