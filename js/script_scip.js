// Получаем ссылки на нужные элементы
const roundText = document.querySelector('.raund_text');
const rollButton = document.getElementById('roll');
const skipButton = document.getElementById('scip');
const turnMessage = document.getElementById('turnMessage');

// Устанавливаем начальное значение раунда
let round = 0;

// Обработчик события для кнопки "Играть"
rollButton.addEventListener('click', () => {
  if (round === 2) {
    // Отключаем кнопку и показываем сообщение "Не твой ход"
    rollButton.disabled = true;
    turnMessage.style.display = 'block';

    // Через 2 секунды скрываем сообщение и активируем кнопку снова
    setTimeout(() => {
      turnMessage.style.display = 'none';
      rollButton.disabled = false;
    }, 2000);
  } else {
    round++;
    roundText.textContent = 'round ' + round;
  }
});

// Обработчик события для кнопки "Пропустить"
skipButton.addEventListener('click', () => {
  round = 0;
  roundText.textContent = 'round ' + round;
});