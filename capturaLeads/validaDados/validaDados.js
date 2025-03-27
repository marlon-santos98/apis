function validaNome(nome){
    const regexNome = /^[A-Za-zÀ-ÿ\s'-]+$/
    const isValid = nome.length >= 2 && regexNome.test(nome)
    return isValid
}

function validaEmail(email){
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const isValid = regexEmail.test(email)
    return isValid
}