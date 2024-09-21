document.querySelectorAll('.dropdown').forEach(dropdown => {
    const dropdownValue = dropdown.querySelector('.dropdown__value');
    const dropdownList = dropdown.querySelector('.dropdown__list');

    // Открытие/закрытие списка при нажатии на кнопку
    dropdownValue.addEventListener('click', () => {
        dropdownList.classList.toggle('dropdown__list_active');
    });

    // Обработка выбора элемента списка
    dropdownList.querySelectorAll('.dropdown__item').forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Запрет перехода по ссылке
            const selectedValue = item.textContent; // Получаем текст выбранного элемента
            dropdownValue.textContent = selectedValue; // Обновляем значение кнопки
            dropdownList.classList.remove('dropdown__list_active'); // Закрываем список
        });
    });

    // Закрытие списка при клике вне его
    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target)) {
            dropdownList.classList.remove('dropdown__list_active');
        }
    });
});
