Javascript nos deja cambiar a piachere las variables tanto fuera como dentro de las funciones.

```javascript
var numero = 0;
numero = numero + 1;
console.log(numero); //esto imprimirá 1 en la consola

function nuevoNumero() {
  numero = 0;
  console.log(numero); //esto imprimirá 0 en la consola, es decir, pisamos el valor de la variable por 0.
}
```

> ¡Ahora vamos a hacer algo de dinero :moneybag:!
>
> Escribí una función `aumentarFortuna` que duplique el valor de la variable global `pesosEnMiBilletera`. No declares la variable, ya lo hicimos nosotros por vos (con una cantidad secreta de dinero :wink:)
