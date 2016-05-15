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

Esto puede ser un poco perturbador: JavaScript no diferencia funciones de procedimientos: todos pueden tener efectos y todos pueden o no tener retorno. Vos sos responsable de escribir una `function` que tenga sentido y se comporte o bien como un procedimiento (sin retorno y con efecto) o bien como una función (con retorno y sin efecto).

Si empezás a mezclar funciones con retornos y efecto, funcionará, pero tu código se volverá de a poco más difícil de entender. Esto nos va a pasar mucho en JavaScript: que puedas hacer algo no significa que debas hacerlo :wink:.

