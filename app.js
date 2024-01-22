alert('Boas vindas ao jogo do número secreto');

let numsec = 8;
let chute;
let tentativas = 1;

while(numsec != chute){
    chute = prompt('Diga um número de 1 a 10');
    if (numsec == chute) {
        alert(`Acertou! O número secreto é: ${numsec}. Você precisou de ${tentativas} tentativa(s).`);
    } else {
        if (numsec > chute){
            alert(`Errou o número secreto é maior que ${chute}`);
        } else{
            alert(`Errou! o número secreto é menor que ${chute}`);
        }
    }
    tentativas = tentativas + 1
}
