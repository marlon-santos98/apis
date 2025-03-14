function efetuarCalculoImc(peso, altura){
    let imc = peso / (altura * altura)
        return imc
}

function retornaStatusImc(imc)
{
    let status;

    if(imc < 18.5)
    {
        status = 'Abaixo do peso';
    }
    else if(imc >= 18.5 && imc < 24.9)
    {
        status = 'Peso Normal';
    }
    else if(imc >= 24.9 && imc < 30)
    {
        status = 'Acima do peso';
    }
    else
    {
        status = 'Obeso';
    }

    return status;
}

function validaParametro(parametro){
    if(isNaN(parametro)){
        return false
    } else {
        return true
    }
}

exports.validaParametro = validaParametro;
exports.efetuarCalculoImc = efetuarCalculoImc;
exports.retornaStatusImc = retornaStatusImc;