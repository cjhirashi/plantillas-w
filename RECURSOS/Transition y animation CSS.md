
## Transiciones

### 1. **transition**
> *Valores*: 
> - transition-property: Especifica la propiedad CSS a la que se aplicará la transición (Ej: all, opacity, transform, background-color).
> - transition-duration: Especifica la duración de la transición (Ej: 0.5s, 200ms).
> - transition-timing-function: Define la curva de velocidad (Ej: ease, linear, ease-in, ease-out, ease-in-out, cubic-bezier(n,n,n,n)).
> - transition-delay: Retraso antes de que comience la transición (Ej: 0s, 150ms).

### 2. **transition-property**
> *Valores*: Lista de propiedades CSS (Ej: all, color, background-color).

### 3. **transition-duration**
> *Valores*: Tiempo (Ej: 0.5s, 1s, 300ms).

### 4. **transition-timing-function**
> *Valores*: (Ej: ease, linear, ease-in, ease-out, ease-in-out, cubic-bezier(n,n,n,n)).

### 5. **transition-delay**
> *Valores*: Tiempo (Ej: 0s, 150ms).

## Animaciones

### 1. **@keyframes**
Define el comportamiento de la animación a través de pasos (keyframes).
*Ejemplo*:
```css
@keyframes nombreAnimacion {
    from { /* estilos iniciales */ }
    to { /* estilos finales */ }
}
```
     
### 2. **animation**
> *Valores*: 
> - animation-name: Nombre de la animación definida en @keyframes.
> - animation-duration: Duración de la animación (Ej: 2s, 500ms).
> - animation-timing-function: Curva de velocidad (Ej: ease, linear).
> - animation-delay: Retraso antes de que comience la animación (Ej: 0s, 200ms).
> - animation-iteration-count: Número de veces que se repetirá la animación (Ej: infinite, 2, 3).
> - animation-direction: Dirección de la animación (Ej: normal, reverse, alternate, alternate-reverse).
> - animation-fill-mode: Controla el estado de la animación antes y después de su duración (Ej: none, forwards, backwards, both).
> - animation-play-state: Pausa o reanuda la animación (Ej: running, paused).

### 3. **animation-name**
> *Valores*: Nombre de la animación definida en @keyframes.

### 4. **animation-duration**
> *Valores*: Tiempo (Ej: 2s, 1.2s).

### 5. **animation-timing-function**
> *Valores*: (Ej: ease, linear, ease-in, ease-out, ease-in-out, cubic-bezier(n,n,n,n)).

### 6. **animation-delay**
> *Valores*: Tiempo (Ej: 0s, 300ms).

### 7. **animation-iteration-count**
> *Valores*: (Ej: 1, infinite).

### 8. **animation-direction**
> *Valores*: (Ej: normal, reverse, alternate, alternate-reverse).

### 9. **animation-fill-mode**
> *Valores*: (Ej: none, forwards, backwards, both).

### 10. **animation-play-state**
> *Valores*: (Ej: running, paused).

## Ejemplo de uso

```css
.elemento {
    transition: all 0.5s ease-in-out 0s;
}

@keyframes ejemploAnimacion {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.elemento-animado {
    animation: ejemploAnimacion 2s ease-in forwards;
}
```

