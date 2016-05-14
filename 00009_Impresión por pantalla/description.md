Ahora que ya te convencimos de que no necesitamos al tablero, vamos a mostrarte que sí hay algo parecido en JavaScript :stuck_out_tongue:: la impresión por pantalla. Veamos un ejemplo:

```javascript
function funcionEgocentrica() {
  console.log("soy una función que imprime por pantalla");
  console.log("y estoy por devolver el valor 5");
  return 5;
}
```

¿Qué hace esto? Al igual que `Poner(bolita)`, `console.log` es una funcionalidad que siempre está disponible y nos permite _escribir_ en la pantalla. Si llamamos a la función anterior, veremos que, además de devolver el valor 5, imprime dos líneas:

```
soy una función que imprime por pantalla
y estoy por devolver el valor 5
```

Sin embargo, sólo podemos escribir strings, y una vez que escribimos en la pantalla, no hay vuelta atrás: no hay forma de retroceder o deshacer.

> Veamos si va quedando claro, escribí una `function` `versosMartinFierro` que imprima por pantalla los primeros versos del Martín Fierro:
>```
>Aquí me pongo a cantar
>Al compás de la vigüela;
>Que el hombre que lo desvela
>Una pena extraordinaria
>```
>
> Esta `function` debe devolver 0

