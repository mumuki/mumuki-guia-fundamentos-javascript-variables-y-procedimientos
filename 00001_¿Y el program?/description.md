Ahora bien, más allá de que podamos consultar el resultado de una función a través de la consola, también aprendimos anteriormente que los programas tienen un punto de entrada: el `program`. ¿Dónde quedó?

La respuesta es tan simple como sorprendente: En JavaScript todo lo que escribamos fuera de una `function` será, implícitamente, dicho punto de entrada. Por ejemplo, si queremos un programa que imprime por pantalla el clásico `"Hola, mundo!"`, lo podremos escribir así:

```javascript
console.log("Hola, mundo!");
```

O si queremos un programa que tire tres veces los datos e imprima sus resultados, podremos escribirlo así: 

```javascript
console.log("Tirando dados");

var primeraTirada = tirarDado();
var segundaTirada = tirarDado();
var terceraTirada = tirarDado();

console.log("La primera tirada dio " + primeraTirada);
console.log("La primera tirada dio " + segundaTirada);
console.log("La primera tirada dio " + terceraTirada);
```

> Copiá y enviá este programa. 


