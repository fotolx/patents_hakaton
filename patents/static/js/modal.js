document.addEventListener("DOMContentLoaded", function() {
    const fileInput = document.getElementById("modal-load-file");
    const submitButton = document.querySelector(".btn-modal");
    const label = document.querySelector(".label-modal");
    const modalTitle = document.querySelector('.modal-title')
    const modalText = document.querySelector('.modal-text')

    // Скрываем кнопку по умолчанию
    submitButton.style.display = "none";

    // Добавляем обработчик события на изменение input file
    fileInput.addEventListener("change", function() {
        if (fileInput.files.length > 0) {
            const fileName = fileInput.files[0].name;
            submitButton.style.display = "inline-block";  
            modalTitle.style.display = 'none'
            modalText.style.display = 'none'
            label.style.display = 'block'
            label.innerHTML = `Файл загружен: <span>${fileName}</span>`;  
        }
    });
});