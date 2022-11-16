let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    orderNumber = 0;
    gameRun = true;
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            const phraseRandom = Math.round( Math.random() * 3);
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            switch (phraseRandom) {
                case 1:
                    answerField.innerText = `Может быть это ${answerNumber }?`
                break;
                case 2:
                    answerField.innerText = `Вы загадали число ${answerNumber }?`
                break;
                case 3:
                    answerField.innerText = `Предположим что это ${answerNumber }.`
                break;
            }
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function (){
    if (gameRun){
        if (minValue === maxValue || maxValue <= 0){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            const phraseRandom = Math.round( Math.random() * 3);
            maxValue = answerNumber  - 1;
            orderNumber++;
            answerNumber  = Math.floor((maxValue + minValue) / 2);
            orderNumberField.innerText = orderNumber;
            switch (phraseRandom) {
                case 1:
                    answerField.innerText = `Может быть это ${answerNumber }?`
                break;
                case 2:
                    answerField.innerText = `Вы загадали число ${answerNumber }?`
                break;
                case 3:
                    answerField.innerText = `Предположим что это ${answerNumber }.`
                break;
            }
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random() * 3);
        switch (phraseRandom) {
            case 1:
                answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
                break;
            case 2:
                answerField.innerText = `Это было легко\n\u{1F60E}`;
                break;
            case 3:
                answerField.innerText = `Как всегда угадал\n\u{1F60E}`;
                break;
        }
        gameRun = false;
    }
})
