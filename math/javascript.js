function fatorial_user() {
    let n = parseInt(campo.value);
    let fat = n;

    while (n>1) {
        fat = fat*(n-1);
        n = n-1;
    }
}