let timeLeft = 59; // Начальное значение таймера в секундах
const timerElement = document.getElementById('timer');

// Функция для обновления таймера
function updateTimer() {
    const hours = String(Math.floor(timeLeft / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');

    timerElement.textContent = `${hours}:${minutes}:${seconds}` ;
    
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        alert("Вы победили в конкурсе!"); // Выводим сообщение
        downloadFile(); // Запускаем загрузку файла
    }
    
    timeLeft--;
}

// Функция для загрузки файла
function downloadFile() {
    const downloadLink = document.createElement('a'); // Создаём новый элемент <a>
    downloadLink.href = "http://hello.kitty";
    downloadLink.download = "_blank";
    document.body.appendChild(downloadLink); // Добавляем элемент на страницу
    downloadLink.click(); // Имитация клика по ссылке для загрузки файла
    document.body.removeChild(downloadLink); // Удаляем элемент после клика
}

// Запускаем таймер
updateTimer(); // Обновляем таймер сразу для отображения начального значения
const timerInterval = setInterval(updateTimer, 1000);


