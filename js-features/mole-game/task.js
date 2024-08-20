// Получение элементов DOM
const holes = document.querySelectorAll('.hole');
const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

// Инициализация счета
let dead = 0; // Количество убитых кротов
let lost = 0; // Количество промахов
deadCounter.textContent = dead;
lostCounter.textContent = lost;

// Функция для обработки клика по лунке
function handleHoleClick(event) {
  const hole = event.target;

  // Проверка наличия крота в лунке
  if (hole.classList.contains('hole_has-mole')) {
    // Увеличение счета за победу
    dead++;
    deadCounter.textContent = dead;

    // Проверка на победу
    if (dead === 10) {
      alert('Поздравляем! Вы победили!');
      resetGame();
    }
  } else {
    // Увеличение счетчика поражений
    lost++;
    lostCounter.textContent = lost;

    // Проверка на поражение
    if (lost === 5) {
      alert('Вы проиграли!');
      resetGame();
    }
  }

  // Сброс класса hole_has-mole после проверки и обновления счета
  hole.classList.remove('hole_has-mole');
}

// Функция для сброса игры
function resetGame() {
  dead = 0;
  lost = 0;
  deadCounter.textContent = dead;
  lostCounter.textContent = lost;
}

// Добавление обработчика события click для каждой лунки
holes.forEach(hole => {
  hole.addEventListener('click', handleHoleClick);
});
