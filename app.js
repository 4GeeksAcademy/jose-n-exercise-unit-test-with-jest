// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}


function fromDollarToYen(valueInDollar){
    let valueInEuro = valueInDollar / 1.07;

    return valueInEuro * 156.5;

}

function fromYenToPound(valueInYen){

    let valueInEuro = valueInYen / 156.5;
    return valueInEuro * 0.87;
}


console.log(fromDollarToYen(1));


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
