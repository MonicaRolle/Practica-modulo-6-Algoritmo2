document.write("Hola");

//Random number: genera nºdecimales aleatorios entre [0 y 1).(El 1 no esta incluido, el 0 sí).
// Math.random();

//Generación binaria.

//      0                   0.5                   1
//      [--------------------|--------------------)

// Probabilidad de que el resultado sea menor que 0.5 --> 50%
// Probabilidad de que el resultado mayor o igual a 0.5 --> 50%

var getRandom = (a, b) => Math.random() < 0.5 ? a : b;

console.log(getRandom("rojo", "negro"));

// Con la funcion de redondeo se veria asi : var getRandom = (a, b) => Matn.round(Math.random()) ? a : b;

// Generación con Mutiples Opciones
// Elegir aleatoriamente entre 0 y 9

// 0    1    2    3    4    5    6    7    8    9   10
// [----|----|----|----|----|----|----|----|----|----)

var random = Math.random() * 10;

//Calcular el rango => cuantos números hay entre dos números. rango = máximo(9) - minimo(0) + 1 =10 numeros;

// random * 10;

//Math.floor() => es un redondeo hacia la bajo. redondeo hacia el entero de la izquierda.
//Math.ceil() => es un redondeo hacia la arriba. redondeo hacia el entero de la derecha.

var getRandomNumber = () => Math.floor(random);
console.log(getRandomNumber());

//Caso General: busquemos un aleatorio entre 50 y 100.

// var range = max - min + 1;
// Math.floor(Math.random() * range) + min; Números aleatorios enteros en el rango [min, max]

var range = 100 - 50 + 1; // 51 números a escoger.

Math.floor(Math.random() * range) + 50; // Resultado = entero entre [0,50]

//Distintas probabilidades