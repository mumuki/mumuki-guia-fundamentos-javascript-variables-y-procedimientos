¿Notaste algo extraño en esta línea?

```javascript
console.log("La primera tirada dio " + primeraTirada);
```

Utilizamos el operador `+` de una forma diferente, operando un string y un número, y lo que hizo fue concatenar al string con la representación textual del número. Es decir que:

* si operamos dos números con `+`, se suman
* si operamos dos strings con `+`, se concatenan
* si operamos un string y un número `+`, se convierte el número a string, y luego se concatenan