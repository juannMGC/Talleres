function convertirMayusculas() {
    let input = document.getElementById('inputText').value;
    let resultado = '';

    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            resultado += input.charAt(i).toLowerCase();
        } else {
            resultado += input.charAt(i).toUpperCase();
        }
    }

    document.getElementById('resultado').innerText = resultado;
}

function calcularEdad() {
    const fechaNacimiento = document.getElementById('inputFecha').value;
    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date();

    if (nacimiento.getFullYear() < 1900) {
        document.getElementById('edad').innerText = "La fecha de nacimiento debe ser posterior a 1900.";
    } else {
        let edad = hoy.getFullYear() - nacimiento.getFullYear();
        let meses = hoy.getMonth() - nacimiento.getMonth();
        let dias = hoy.getDate() - nacimiento.getDate();

        if (meses < 0 || (meses === 0 && dias < 0)) {
            edad--;
            meses += 12;
        }

        if (dias < 0) {
            dias += new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate();
            meses--;
        }

        document.getElementById('edad').innerText = `Edad: ${edad} años, ${meses} meses y ${dias} días.`;
    }
}

function calcularResultado() {
    const x = document.getElementById('inputX').value;

    const resultado = ((x - 1) / ((x + 2) * (x - 2))).toFixed(2);

    document.getElementById('resultadoFuncion').innerText = resultado;
}

function generarMatriz() {
    const filas = document.getElementById('inputFilas').value;
    const columnas = document.getElementById('inputColumnas').value;

    let matriz = [];
    for (let i = 0; i < filas; i++) {
        matriz[i] = [];
        for (let j = 0; j < columnas; j++) {
            matriz[i][j] = Math.floor(Math.random() * 10); // Números aleatorios del 0 al 9
        }
    }

    document.getElementById('matriz').innerHTML = "<h3>Matriz Aleatoria:</h3>" + JSON.stringify(matriz);

    // Cálculo de la inversa
    let inversa = matriz.map((row, i) => row.map((val, j) => matriz[j][i]));

    document.getElementById('inversa').innerHTML = "<h3>Inversa de la Matriz:</h3>" + JSON.stringify(inversa);

    // Cálculo de la transpuesta
    let transpuesta = matriz.reverse();

    document.getElementById('transpuesta').innerHTML = "<h3>Transpuesta de la Matriz:</h3>" + JSON.stringify(transpuesta);
}