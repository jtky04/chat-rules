// Ждем, пока страница загрузится
document.addEventListener('DOMContentLoaded', function() {
// Проверяем, открыто ли приложение внутри Telegram
if (window.Telegram && window.Telegram.WebApp) {
const tg = window.Telegram.WebApp;

    // Сообщаем Телеграму, что приложение готово
    tg.ready();
    
    // Разворачиваем приложение на весь экран (убираем шторку)
    tg.expand();
    
    // Делаем так, чтобы верхняя панель Телеграма (где кнопка "Закрыть") была темной
    tg.setHeaderColor('#1a1417'); 
}
});