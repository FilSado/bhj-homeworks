class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerElement = container.querySelector('#timer'); // Элемент таймера

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    this.startTimer(); // Запускаем таймер при сбросе игры
  }


  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval); // Очищаем предыдущий таймер

    const wordLength = this.currentWord.length; // Длина текущего слова
    let timeLeft = wordLength; // Устанавливаем время на основе длины слова

    this.timerElement.textContent = timeLeft; // Обновляем отображение таймера

    this.timerInterval = setInterval(() => {
      timeLeft--;
      this.timerElement.textContent = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(this.timerInterval);
        alert('Время вышло! Игра окончена.');
        this.reset(); // Сбрасываем игру, если время вышло
      }
    }, 1000);
  }


  registerEvents() {
    document.addEventListener('keydown', (event) => {
      const currentChar = this.currentSymbol.textContent.toLowerCase(); // Получаем текущий символ
      const pressedKey = event.key.toLowerCase(); // Получаем нажатую клавишу

      if (pressedKey === currentChar) {
        this.success();
      } else {
        this.fail();
      }
    });
  }

  success() {
    if (this.currentSymbol.classList.contains("symbol_current")) {
      this.currentSymbol.classList.remove("symbol_current");
    }
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 3) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);

    this.startTimer(); // Запускаем таймер для нового слова
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ];
      const index = Math.floor(Math.random() * words.length);

      this.currentWord = words[index]; // Сохраняем текущее слово для использования в таймере
      return this.currentWord;
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

