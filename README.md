🚀 Тестовое задание 
Разработать веб-приложение "Матчтрекер", которое:
Загружает список матчей с API.
Позволяет раскрыть детали матча.
Показывает названия команд, счет, статус матча, список событий.
Обновляет данные в реальном времени (через WebSockets).
Позволяет фильтровать события матча (например, только Live или только Finished).
Реализует анимацию изменения счета (например, плавное увеличение числа при обновлении).
Базовая адаптация экрана.

1️⃣ API-запрос
Загрузить список матчей
swagger: https://drive.google.com/file/d/1p4Y9-8KL0eCQXh2HZoGgFRK05z_Vz62U/view?usp=sharing
baseUrl - https://app.ftoyd.com/fronttemp-service
Ошибка API (если сервер недоступен) должна показывать текст "Ошибка: не удалось загрузить информацию".
Обновляет данные в реальном времени:
wss://app.ftoyd.com/fronttemp-service/ws

2️⃣ UI (Figma)
Figma макет:
https://www.figma.com/design/W16WfB86EgqtcuuqLCYjgF/Test-assignment?node-id=113-740&t=hBEv4NU9JHRNcUKm-4
