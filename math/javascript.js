function conta() {
    let campo = n;

    let n = parseInt(campo.value);
    let fat = n;
    let pot = 0;
    let soma = 0;
    let i = n;

    while (n>=1) {
        pote = Math.pow(2,n);
        i = n;
        while (i>1) {
            fat = fat*(i-1);
            i = i-1;
        }
        soma = soma+(pote/fat);
        n = n-1;
    }
    soma = soma*(1/3);
    alert(soma);
}