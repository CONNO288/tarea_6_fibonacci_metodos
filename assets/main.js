//1. Serie de Fibonacci
//a) Números de 1 a 1000

function serie_Fibonacci_Todos(limit) {
    const serieAllNumbers = [0, 1];
    for (let i = 1; ; i++) {
        const next = serieAllNumbers [i] + serieAllNumbers [i - 1];
        if (next > limit) break;
        serieAllNumbers.push(next);
    }
    return serieAllNumbers ;
}

console.log(serie_Fibonacci_Todos(1000));

//b) Números pares de 1 a 1000

function serie_Fibonacci_Par(limit) {
    const serieAllNumbers = [0, 2];
    for (let i = 1; ; i++) {
        const next = serieAllNumbers [i] + serieAllNumbers [i - 1];
        if (next > limit) break;
        serieAllNumbers.push(next);
    }
    return serieAllNumbers ;
}

console.log(serie_Fibonacci_Par(1000));
//c) Números impares de 1 a 1000
//2. Retornar otro arreglo con todo en mayúscula
//3. Retornar otro arreglo con los pokemon tipo fuego