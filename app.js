alert('Boas vindas ao jogo do número secreto');

let quant = 100
let numsec = parseInt(Math.random()*quant + 1);
let chute;
let tentativas = 1;

while(numsec != chute){
    chute = prompt(`Diga um número de 1 a ${quant}`);
    if (numsec == chute) {
        break;
    } else {
        if (numsec > chute){
            alert(`Errou o número secreto é maior que ${chute}`);
        } else{
            alert(`Errou! o número secreto é menor que ${chute}`);
        }
    }
    tentativas = tentativas + 1
}
let num = tentativas==1 ? 'tentativa':'tentativas';
alert(`Acertou! O número secreto é: ${numsec}. Você precisou de ${tentativas} ${num}.`);


//Versão longa
/*if (tentativas==1){
    alert(`Acertou! O número secreto é: ${numsec}. Você precisou de ${tentativas} tentativa.`);
} else{
    alert(`Acertou! O número secreto é: ${numsec}. Você precisou de ${tentativas} tentativas.`);
}
*/

