Llegó el turno de otra estructura de control de flujo: la repetición simple. Que si mal no te acordás, era algo como lo siguiente...

```gobstones
program {
  repeat(4) {
    //...hacer algo...
  }
}
```

... que nos permitía repetir una tarea múltiples veces. En JavaScript también tenemos una estructura similar (pero no tan fácil de usar): el `for`.

Por ejemplo, si queremos tirar los dados 4 veces e imprimir su resultado, podríamos escribir lo siguiente:

```javascript
for(var i = 0; i < 4; i++) {
   console.log("Salió el " + tirarDado())
}
```

La diferencia principal entre el `for` y el `repeat`, es que en el `for` vos controlás los valores iniciales, de paso y finales de la iteración. Pero antes de adentrarnos en esto, te dejamos un problema:

> Escribí un programa que dibuje un "cuadrado" de asteriscos de 4 por 4:
>
> ```
> ****
> ****
> ****
> ****
>```