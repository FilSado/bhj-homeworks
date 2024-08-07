const cookie = document.getElementById("cookie");
const counterElement = document.getElementById("clicker__counter");
const speedElement = document.createElement('div'); // Создаем div для отображения скорости
speedElement.classList.add('clicker__speed'); // Добавляем класс для стилизации
speedElement.textContent = 'Скорость: 0 кликов/сек';
document.querySelector('.clicker__status').appendChild(speedElement); // Добавляем div на страницу

let clickCount = 0;
let lastClickTime = null;

cookie.addEventListener("click", function() {
    clickCount++;
    counterElement.textContent = clickCount;

    // Чередование размера печеньки
    cookie.style.width = (cookie.offsetWidth + (clickCount % 2 === 0 ? -10 : 10)) + "px";
    cookie.style.height = (cookie.offsetHeight + (clickCount % 2 === 0 ? -10 : 10)) + "px";

    // Обновление скорости клика
    if (lastClickTime) {
        const timeDifference = new Date() - lastClickTime;
        const clicksPerSecond = 1000 / timeDifference; // Вычисляем скорость в кликах/сек
        speedElement.textContent = `Скорость: ${clicksPerSecond.toFixed(2)} кликов/сек` ; // Обновляем текст элемента 
    }
    lastClickTime = new Date();
});
