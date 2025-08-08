let nota1 = 10;
    let nota2 = 5;
    let nota3 = 3;

    let media = (nota1 + nota2 + nota3) / 3;

    if (media >= 7) {
        window.alert("Aluno aprovado com média " + media.toFixed(2));
    } else {
        window.alert("Aluno reprovado com média " + media.toFixed(2));
    }