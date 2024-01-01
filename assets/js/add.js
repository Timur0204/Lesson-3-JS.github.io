   
   function answer() {
    let result = document.querySelector('#result');
    let arr = [143, 1083, 874, 4186, 2436, 2970, 4851, 2288, 4042, 910, 1850, 5888];

    let marks = 0;

    let examples = [
        '#firstExample', '#secondExample', '#thirdExample', '#fourthExample',
        '#fifthExample', '#sixthExample', '#seventhExample', '#eighthExample',
        '#ninthExample', '#tenthExample', '#eleventhExample', '#twelfthExample'
    ];
    result.innerHTML = '';

    for (let i = 0; i < arr.length; i++) {
        let currentExample = document.querySelector(examples[i]).value;

        if (currentExample == arr[i]) {
            result.innerHTML += `Это число ${arr[i]}, вы правы | + 1 балл</br>`;
            marks++;
        } else if (isNaN(currentExample) || currentExample === "") {
            result.innerHTML += `Введите число | 0 баллов</br>`;
        } else {
            result.innerHTML += `Это число ${arr[i]}, вы неправы | 0 баллов</br>`;
        }
    }

    if(marks == 1) {
        result.innerHTML += `Вы набрали ${marks} балл из 12</br>`;
    } else if(marks >= 2 && marks <= 4) {
        result.innerHTML += `Вы набрали ${marks} балла из 12</br>`;
    } else if(marks <= 12 || marks == 0) {
        result.innerHTML += `Вы набрали ${marks} баллов из 12</br>`;
    }
}
