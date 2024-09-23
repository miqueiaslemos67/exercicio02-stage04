let student = prompt("Qual o nome do(a) aluno(a)");
let nota01 = prompt("Qual a nota da primeira prova?");
let nota02 = prompt("Qual a nota da segunda prova?");

let testaverage = (Number(nota01) + Number(nota02)) / 2;

let result = testaverage > 7;

testaverage = testaverage.toFixed(2);

if (result) {
    alert("A média do(a) aluno(a) " +  student +  " é: "  + testaverage  + "\nParabéns, "  + student +  "! Você foi aprovado(a) no concuso!");

} else if (testaverage < 2) {
  alert("Dados INCORRETOS!");
} else {
  alert("Não foi dessa vez " + student + ", Tente novamente!");
}


