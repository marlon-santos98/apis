function conversorCelsius(fahrenheit){
    let celsius = (fahrenheit - 32) / 1.8
    return celsius
}

function conversorFahrenheit(celsius){
    let fahrenheit = (celsius * 1.8) + 32
    return fahrenheit
}

function converteTemperatura(temperatura, conversor){
    let resultado

    if(conversor === 'C'){
        resultado = conversorCelsius(temperatura)
    } else if (conversor === 'F'){
        resultado = conversorFahrenheit(temperatura)
    } 

    return resultado
}

exports.converteTemperatura = converteTemperatura