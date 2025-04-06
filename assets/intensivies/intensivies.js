export const intensivies = [
	{
		id: 0,
		name: "Архитектура и структура .NET веб-приложений. Проектирование ASP.NET Core сервисов.",
		price: "14 900 ",
		sale: "9 900",
		buyLink: "https://t.me/sachkov_intensive_1_bot",
		descr:
			"На этом интенсиве вы с нуля освоите проектирование и разработку современных .NET веб-приложений с использованием ASP.NET Core! Этот интенсив подойдет для начинающих разработчиков, которые хотят углубить свои знания в архитектуре, проектировании и создании масштабируемых веб приложений на основе монолитной и модульной архитектуре.",
		fullDescription: `<div class="flex flex-col gap-4">
        <span class="int__descr-title font-semibold text-2xl">Почему этот интенсив?</span>

        <ul class="int__list int__list_why">
        <li>Практико-ориентированный подход: <span class="">каждый этап сопровождается реальными примерами и заданиями</span></li>
        <li>Глубокое погружение в архитектуру: вы поймете, как с нуля проектировать приложения, которые легко поддерживать и масштабировать</li>
        <li>Актуальные технологии: ASP.NET Core, REST API, EF Core, FluentValidation, Scrutor, CQRS и многое другое</li>
        <li>Свой проект: вы узнаете, какие идеи и проекты можно реализовать на ASP.NET Core, и сможете придумать свою уникальную идею для нового проекта</li>
        </ul>

         <span class="int__descr-title font-semibold text-2xl">Для кого этот интенсив:</span>

        <ul class="int__list int__list_who">
         <li>Разработчики, которые хотят улучшить свои навыки в проектировании и архитектуре .NET веб-приложений.</li>
         <li>Те, кто хотят научиться создавать масштабируемые и поддерживаемые веб-приложения на актуальном стэке.</li>
         <li>Все, кто хочет создать свой уникальный пет проект на ASP.NET Core, который поможет при трудоустройстве.</li>
        </ul>

         <span class="int__descr-title font-semibold text-2xl">Результат:</span>

        <ul class="int__list int__list_total">
         <li>Вы сможете самостоятельно проектировать и разрабатывать сложные .NET веб-приложения, используя лучшие практики и современные архитектурные подходы.</li>
         <li>Не упустите возможность прокачать свои навыки и стать специалистом в разработке .NET веб-приложений!</li>
        </ul>
      </div>`,
		lessonsAmount: 16,
		duration: 14,
		programm: [
			{
				label: "Урок 1. Продумывание идеи и проектирование проекта",
				defaultOpen: true,
				content: `<ul class="int-list">
                        <li class="programm-span">Какие бывают проекты и как придумать идею для проекта?</li>
                        <li class="programm-span">Конкретные примеры идей</li>
                        <li class="programm-span">Определяем функционал веб-приложения</li>
                        <li class="programm-span">Проектирование предметной области</li>
                        <li class="programm-span">Модули. Как правильно разделить проект на модули</li>
                        <li class="programm-span">Как устанавливать связь между модулями</li>
                        <li class="programm-span">Cohesion, что это и для чего нужно</li>
                        <li class="programm-span">Coupling, что это и для чего нужно</li>
                          </ul>`,
			},
			{
				label: "Урок 2. Проектирование REST API",
				content: `<ul class="int-list">
                    <li class="programm-span">Проектирование REST API. Что такое REST API?</li>
                    <li class="programm-span">Создание ресурса, метод POST</li>
                    <li class="programm-span">Получение ресурса, метод GET</li>
                    <li class="programm-span">Зачем иногда следует использовать POST вместо GET</li>
                    <li class="programm-span">Получение ресурса по ID</li>
                    <li class="programm-span">Обновление ресурса</li>
                    <li class="programm-span">Удаление ресурса</li>
                    <li class="programm-span">Важные правила при проектировании REST API</li>
                    <li class="programm-span">Проектирование более сложных endpoint'ов</li>
                </ul>`,
			},
			{
				label:
					"Урок 3. Выбор архитектуры для проекта: монолит, модульный монолит, микросервисы",
				content: `<ul class="int-list">
                    <li class="programm-span">Какую архитектуру выбрать для проекта? Монолит, модульный монолит, микросервисы</li>
                    <li class="programm-span">Монолитная архитектура</li>
                    <li class="programm-span">Модульный монолит</li>
                    <li class="programm-span">Микросервисная архитектура</li>
                </ul>`,
			},
			{
				label: "Урок 4. Чистая архитектура",
				content: `<ul class="int-list">
                    <li class="programm-span">Чистая архитектура, что это и зачем нужно?</li>
                    <li class="programm-span">Какие раньше были архитектуры?</li>
                    <li class="programm-span">Что такое бизнес логика?</li>
                    <li class="programm-span">Основные концепции чистой архитектуры</li>
                    <li class="programm-span">Слои в чистой архитектуре. Первый слой - Entities</li>
                    <li class="programm-span">Внешние слои</li>
                    <li class="programm-span">Пример проекта с чистой архитектурой</li>
                </ul>`,
			},
			{
				label:
					"Урок 5. Создание репозитория и проекта, создание основных сущностей",
				content: `<ul class="int-list">
                    <li class="programm-span">Создание репозитория</li>
                    <li class="programm-span">Создание проекта</li>
                    <li class="programm-span">Добавление .gitignore</li>
                    <li class="programm-span">Создание канбан доски для задач</li>
                    <li class="programm-span">Работа с ветками и задачами</li>
                    <li class="programm-span">Создание доменного проекта</li>
                    <li class="programm-span">Создание моделей в предметной области</li>
                    <li class="programm-span">Почему GUID а не long?</li>
                    <li class="programm-span">Анемичная и богатая модель</li>
                    <li class="programm-span">Связи между моделями и модулями</li>
                    <li class="programm-span">Прямая ссылка или Guid</li>
                    <li class="programm-span">Решение проблемы nullable reference</li>
                    <li class="programm-span">Древовидная структура, parent - children</li>
                    <li class="programm-span">Проектирование других сущностей</li>
                </ul>`,
			},
			{
				label:
					"Урок 6. Настройка проекта: editorconfig, stylecop. Создание контроллера",
				content: `<ul class="int-list">
                    <li class="programm-span">Коммит и пуш изменений, пуллреквест и мерж</li>
                    <li class="programm-span">Создание Asp Net Core проекта</li>
                    <li class="programm-span">Создание слоя Presenters с контроллерами</li>
                    <li class="programm-span">Настраиваем swagger и open api</li>
                    <li class="programm-span">Editorconfig и stylecop, анализатор кода</li>
                    <li class="programm-span">Directory.Build.props для чего нужен</li>
                    <li class="programm-span">Проект WEB против Presenters</li>
                    <li class="programm-span">Методы в контроллере на практике</li>
                    <li class="programm-span">ActionResult и статус коды</li>
                    <li class="programm-span">Параметры в методах контроллера [FromBody] и другие</li>
                    <li class="programm-span">DTO модели</li>
                    <li class="programm-span">Проект с контрактами</li>
                    <li class="programm-span">Пишем остальные HTTP методы на практике</li>
                    <li class="programm-span">Получение данных. HTTP GET метод</li>
                    <li class="programm-span">Обновление данных. HTTP PUT метод</li>
                    <li class="programm-span">Удаление данных. HTTP DELETE метод</li>
                    <li class="programm-span">Другие HTTP методы для различных фич</li>
                </ul>`,
			},
			{
				label: "Урок 7. Application слой",
				content: `<ul class="int-list">
                    <li class="programm-span">Коммит и пуш изменений</li>
                    <li class="programm-span">Формируем задачу, работа с Application слоем</li>
                    <li class="programm-span">Документация enum'ов</li>
                    <li class="programm-span">Зачем нужен Application слой</li>
                    <li class="programm-span">Создание Application слоя на практике, установление зависимостей</li>
                    <li class="programm-span">Создаём первый сервис. Что такое сервис</li>
                    <li class="programm-span">Какие параметры должен принимать сервис
                    <li class="programm-span">Формируем бизнес сценарий в сервисе</li>
                    <li class="programm-span">Создание сущности в сервисе</li>
                    <li class="programm-span">Как работать с базой данных в Application слое. Dependency inversion принцип.</li>
                    <li class="programm-span">Что такое репозиторий и зачем он нужен</li>
                    <li class="programm-span">Какие модели использовать для работы с базой данных? Domain vs DTO vs Datamodels</li>
                    <li class="programm-span">Почему нужно начитать разработку с интерфейсов?</li>
                    <li class="programm-span">Какие должны быть папки в проекте? Как распределить файлы по папкам</li>
                    <li class="programm-span">Как писать логи</li>
                    <li class="programm-span">Работа с валидацией. Основные концепции. Где должна быть валидацияВалидация входных параметров. Валидация бизнес логики</li>
                    <li class="programm-span">FluentValidation, как пользоваться библиотекой?</li>
                    <li class="programm-span">Валидация бизнес логики. Правила в сценариях</li>
                    <li class="programm-span">Как использовать сервисы в контроллерах</li>
                    <li class="programm-span">Как и где правильно регистрировать зависимости</li>
                </ul>`,
			},
			{
				label: "Урок 8. Инфраструктурный слой",
				content: `<ul class="int-list">
                    <li class="programm-span">Инфраструктурный слой, что это и для чего нужен</li>
                    <li class="programm-span">Создание инфраструктурного слоя для базы данных</li>
                    <li class="programm-span">Инверсия зависимостей, объясняю на примере</li>
                    <li class="programm-span">Нужно ли использовать репозитории</li>
                    <li class="programm-span">Пример как можно реализовать сидирование</li>
                    <li class="programm-span">Что ещё может быть в инфраструктуре? Примеры инфраструктурных слоёв</li>
                    <li class="programm-span">Как регистрировать инфраструктуру в DI? Extension методы</li>
                    <li class="programm-span">Подвожу итоги по инфраструктуре</li>
                </ul>`,
			},
			{
				label: "Урок 9. Работа с ошибками, как правильно работать с Exceptions",
				content: `<ul class="int-list">
                    <li class="programm-span">Почему важно правильно работать с ошибками</li>
                    <li class="programm-span">Создание кастомных Exceptions</li>
                    <li class="programm-span">Класс Error и Shared проект. Правильно работаем с ошибками</li>
                    <li class="programm-span">Как вернуть ошибки валидации с помощью Exception</li>
                    <li class="programm-span">Как правильно обрабатывать ошибки, Exception middleware</li>
                    <li class="programm-span">Почему Exceptions это не всегда хорошо</li>
                </ul>`,
			},
			{
				label: "Урок 10. Result паттерн",
				content: `<ul class="int-list">
                    <li class="programm-span">Когда нужно использовать Exceptions</li>
                    <li class="programm-span">Когда нужно использовать Result паттерн</li>
                    <li class="programm-span">Зачем нужен Result паттерн, что это такое</li>
                    <li class="programm-span">Самая простая реализация Result паттерна с помощью кортежей</li>
                    <li class="programm-span">Класс Result, пример его использования</li>
                    <li class="programm-span">Result<T>, как вернуть значения из Result</li>
                    <li class="programm-span">Неявное преобразование</li>
                    <li class="programm-span">Библиотека CsharpFunctionalExtensions</li>
                    <li class="programm-span">Возвращаем список ошибок</li>
                    <li class="programm-span">Кастомная коллекция Failure</li>
                    <li class="programm-span">Возвращаем список ошибок</li>
                    <li class="programm-span">Пример кода с try catch + Result</li>
                    <li class="programm-span">Метод расширения для красивого ответа клиенту, статус коды</li>
                </ul>`,
			},
			{
				label: "Урок 11. Реализация других бизнес фич",
				content: `<ul class="int-list">
                    <li class="programm-span">Метод AddAnswer</li>
                    <li class="programm-span">Что должен возвращать метод в сервисах</li>
                    <li class="programm-span">Документация методов, summary</li>
                    <li class="programm-span">Добавляем нужные зависимости и начинаем писать логику метода, валидация</li>
                    <li class="programm-span">Два способа, как добавлять дочернюю сущность в базу данных</li>
                    <li class="programm-span">Первый способ, если используете Dapper</li>
                    <li class="programm-span">Что может пойти не так в бизнес сценарии, откуда берутся баги</li>
                    <li class="programm-span">Как управлять транзакцией в Application слое, TransactionManager</li>
                    <li class="programm-span">Второй способ добавления дочерней сущности в базу данных</li>
                    <li class="programm-span">Добавляем новые бизнес правила и усложняем метод</li>
                    <li class="programm-span">Как обратиться к другому модулю в разных случаях, новый инфраструктурный слой</li>
                </ul>`,
			},
			{
				label: "Урок 12. Разделение сервиса на обработчики (Hanlders)",
				content: `<ul class="int-list">
                    <li class="programm-span">Разделение сервиса на части</li>
                    <li class="programm-span">Как правильно назвать обработчик</li>
                    <li class="programm-span">Вынесение фичи в отдельный класс</li>
                    <li class="programm-span">Создание папок для фич, удобный способ</li>
                    <li class="programm-span">Общий интерфейс для обработчиков</li>
                    <li class="programm-span">Паттерн команда (command), что это такое и зачем нужны команды</li>
                    <li class="programm-span">ICommandHandler</li>
                    <li class="programm-span">ICommand, улучшение интерфейса</li>
                    <li class="programm-span">Как в контроллере правильно вызвать Handler</li>
                    <li class="programm-span">Как удобно зарегистрировать все обработчики в DI</li>
                    <li class="programm-span">Scrutor, расширяем возможности Dependency Injection</li>
                    <li class="programm-span">Получение данных</li>
                </ul>`,
			},
			{
				label: "Урок 13. Получение данных из бд и других источников",
				content: `<ul class="int-list">
                    <li class="programm-span">Как получать данные?</li>
                    <li class="programm-span">Пишем фичу на получение данных с фильтрами</li>
                    <li class="programm-span">Какие модели возвращать из бэкенда? Создаём DTO</li>
                    <li class="programm-span">Получаем данные с помощью репозитория, способ первый</li>
                    <li class="programm-span">Получаем связанные данные из другого хранилища, пример с файлами</li>
                    <li class="programm-span">Extension метод для Enum, из Enum в строку</li>
                    <li class="programm-span">Минусы использования репозитория для получения данных</li>
                    <li class="programm-span">Второй способ, использование DbContext в Handler</li>
                    <li class="programm-span">Как использовать DbContext в Application</li>
                    <li class="programm-span">IQueryable в DbContext </li>
                    <li class="programm-span">Пишем запросы в Handler с помощью DbContext</li>
                    <li class="programm-span">Паттерн CQS, разделение операций на запись и чтение</li>
                    <li class="programm-span">Добавление IQuery и IQueryHandler</li>
                    <li class="programm-span">Что если мы не используем EF Core, а используем Dapper</li>
                </ul>`,
			},
			{
				label: "Урок 14. Модульный монолит",
				content: `<ul class="int-list">
                    <li class="programm-span">Рассматриваем обычное монолитное решение</li>
                    <li class="programm-span">Как будет выглядеть модульный монолит</li>
                    <li class="programm-span">Меняем структуру проекта, создаём новые проекты</li>
                    <li class="programm-span">Показываю как должен выглядеть модульный монолит</li>
                    <li class="programm-span">Проект Shared</li>
                    <li class="programm-span">Папка Infrastructure</li>
                    <li class="programm-span">Остальные проекты в Core</li>
                    <li class="programm-span">Пример модуля Questions</li>
                    <li class="programm-span">Архитектура Vertical Slice Architecture для небольших модулей</li>
                    <li class="programm-span">Minimal API для фич</li>
                    <li class="programm-span">Как регистрировать ендпоинты в Minimal API</li>
                    <li class="programm-span">Взаимодействие между модулями с помощью контрактов</li>
                    <li class="programm-span">Как регистрировать DI в модулях</li>
                </ul>`,
			},
			{
				label: "Урок 15. Github actions",
				content: `<ul class="int-list">
                    <li class="programm-span">Пушим прошлую задачу в github</li>
                    <li class="programm-span">Настриваем Github actions</li>
                </ul>`,
			},
			{
				label:
					"Урок 15. Mediatr - зачем он нужен и почему лучше его не использовать. Cross-cutting concerns. Декораторы",
				content: `<ul class="int-list">
                    <li class="programm-span">Что такое Mediatr</li>
                    <li class="programm-span">Внедрение Mediatr в проект</li>
                    <li class="programm-span">Behaviors, Cross-cutting concerns</li>
                    <li class="programm-span">Декораторы</li>
                </ul>`,
			},
		],
	},
];
