# Shedule online (онлайн расписание, вывод информации на табло для посетителей)

Вывод расписания на страницу html через AJAX запрос (используется метод ".load()" с библиотекой jQuery) к другому html с необходимой информацией.

Сделана для применения при входе в офис для ориентации посетителей о проходящих мероприятиях.

1. index.html - основной файл на котором отображается расписание;
2. shedules.css - стили;
3. loading.html - файл, в котором пользователь по дням (числам месяца) заносит данные предстоящих событий (заполняет расписание);
4. script.js - в зависимости от текущего дня месяца получает необходимые данные через AJAX запрос с файла loading.html, также выводит данные текущей даты и времени;
5. start.bat - файл, который необходимо добавить в планировщик задач Windows для автоматического отображения расписания при запуске компьютера, поддерживает флаги открытия браузера Chrome в полноэкранном режиме (режиме киоска), с отключением информационных сообщений и с невозможностью закрытия (в файле изменить место расположения вашего браузера и адрес страницы для подключения).

## Результат 
![Пример отрисовки страницы](https://github.com/bagvi/online_shedules/blob/master/shedule.png)
