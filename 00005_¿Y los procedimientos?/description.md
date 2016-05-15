En el ejercicio anterior, construiste una `function` que se ejecutaba con el sólo fin de imprimir por pantalla. Y por ello, tuvimos que devolver un valor cualquiera. ¿No te huele mal?

Además, hagamos memoria: cuando queremos reutilizar código, podíamos declarar:

* _funciones_, que siempre devuelven algo y no producen ningún efecto
* _procedimientos_, que no devuelven nada, y producen efectos

Entonces `versosMartinFierro`, no es una función... ¡sino un procedimiento! ¿Cómo se declaran procedimientos en JavaScript?

¡De la misma forma que las funciones!: usando la palabra clave `function`.

```javascript
function versosMartinFierro() {
    console.log("Aquí me pongo a cantar");
    console.log("Al compás de la vigüela;");
    console.log("Que el hombre que lo desvela");
    console.log("Una pena extraordinaria");
}
```

> Envía esta nueva versión de `versosMartinFierro`