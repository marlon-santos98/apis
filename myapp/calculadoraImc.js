function efetuarCalculoImc(peso, altura){
    let imc = peso / (altura * altura)
        return imc
}

exports.efetuarCalculoImc = efetuarCalculoImc