

    function gen() {
        let n = Math.random();
        n = Math.floor(n * 90) + 10;
        return n;
    }

    let marksSum = 0;
    let answerDetails = "";

    for (let i = 1; i <= 12; i++) {
        let num1 = gen();
        let num2 = gen();
        let userAnswer = +prompt(`Пример ${i}. Сколько будет ${num1} * ${num2}?`);
    
        let correctAnswer = num1 * num2;
    
        if (userAnswer === correctAnswer) {
            alert(`Да, это число ${correctAnswer} | + 1 балл`);
            marksSum++;
        } else if(isNaN(userAnswer) || userAnswer == '') {
            alert('Надо вводить число | + 0 баллов');
            break;
        } else {
            alert(`Нет, это число ${correctAnswer} | + 0 баллов`);
        }

        answerDetails += `Пример ${i}: ${num1} * ${num2} = ${correctAnswer}. Ваш ответ: ${userAnswer}</br>`;

    }

    if(marksSum == 1) {
        alert(`Ваша оценка: ${marksSum} балл.`);
    } else if(marksSum >= 2 && marksSum <= 4) {
        alert(`Ваша оценка: ${marksSum} балла.`);
    } else {
        alert(`Ваша оценка: ${marksSum} баллов.`);
    }

    document.write(`<h1>Ответы:</h1>${answerDetails}</br><h2>Ваша оценка: ${marksSum}</h2>`);



