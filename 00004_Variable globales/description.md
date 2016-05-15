¡Sorpresa! Podemos declarar variables tanto directamente en el programa, como dentro de una `function`:

```javascript
function cuentaLoca(unNumero) {
  var elDoble = unNumero * 2;
  if (elDoble > 10) {
    return elDoble;
  } else {
    return 0;
  }
}
```

Las variables declaradas dentro de una `function`, conocidas como _variables locales_, no presentan mayor misterio. Sin embargo, hay que tener un particular cuidado: sólo se pueden utilizar desde dentro de la `function` en cuestión. Si quiero referenciarla desde un programa:

```javascript
console.log(elDoble)
```

Kaboom, ¡se romperá! :collision:

Sin embargo, las variables declaradas directamente en el programa, conocidas como _variables globales_, pueden ser utilizadas desde cualquier `function`. Por ejemplo:

```javascript
var pesoMaximoEquipajeEnGramos = 5000;

function puedeLlevar(pesoEquipaje) {
  return pesoEquipaje <= pesoMaximoEquipajeEnGramos;
}
```

> Veamos si queda claro: escribí una función `asensorSobrecagado`, que toma una cantidad de personas, y dice si entre todos superan la carga máxima del asensor.
>
> Tené en cuenta que se estima que la carga máxima del asensor en 300kg, y que el peso promedio por persona es una variable global: `pesoPromedioPersonaEnKilogramos`.

