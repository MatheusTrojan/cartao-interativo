function mascara(numeroCartao) { 
    if(numeroCartao.value.length == 4)
        numeroCartao.value = numeroCartao.value + ' ';
    if(numeroCartao.value.length == 9)
        numeroCartao.value = numeroCartao.value + ' ';
    if(numeroCartao.value.length == 14)
        numeroCartao.value = numeroCartao.value + ' ';
}