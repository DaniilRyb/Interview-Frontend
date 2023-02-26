# Вопросы на интервью Frontend-разработчика

## Вопросы по JavaScript, TypeScript, Angular, Frontend'у и Backend'у <br/>

## Сервер: status code браузера<br/>
Ниже представлен обзорный список всех описанных в данной статье кодов ответа:</br>

## 1xx: Informational (информационные)</br>
100 Continue («продолжай»)</br>
101 Switching Protocols («переключение протоколов»)</br>
102 Processing («идёт обработка»)</br>
103 Early Hints («ранняя метаинформация»)</br>

## 2xx: Success (успешно)</br>
200 OK («хорошо»);</br>
201 Created («создано»);</br>
202 Accepted («принято»);</br>
203 Non-Authoritative Information («информация не авторитетна»);</br>
204 No Content («нет содержимого»);</br>
205 Reset Content («сбросить содержимое»);</br>
206 Partial Content («частичное содержимое»);</br>
207 Multi-Status («многостатусный»);</br>
208 Already Reported («уже сообщалось»);</br>
226 IM Used («использовано IM»)</br>
## 3xx: Redirection (перенаправление)</br>
300 Multiple Choices («множество выборов»)</br>
301 Moved Permanently («перемещено навсегда»)</br>
302 Moved Temporarily («перемещено временно»)</br>
302 Found («найдено»)</br>
303 See Other («смотреть другое»;</br>
304 Not Modified («не изменялось»)</br>
305 Use Proxy («использовать прокси»)</br>
306 — зарезервировано (код использовался только в ранних спецификациях)</br>
307 Temporary Redirect («временное перенаправление»)</br>
308 Permanent Redirect («постоянное перенаправление»)</br>

## 4xx: Client Error (ошибка клиента)</br>
400 Bad Request («неправильный, некорректный запрос»)</br>
401 Unauthorized («не авторизован (не представился)»)</br>
402 Payment Required («необходима оплата»)</br>
403 Forbidden («запрещено (не уполномочен)»)</br>
404 Not Found («не найдено»)</br>
405 Method Not Allowed («метод не поддерживается»)</br>
406 Not Acceptable («неприемлемо»)</br>
407 Proxy Authentication Required («необходима аутентификация прокси»)</br>
408 Request Timeout («истекло время ожидания»)</br>
409 Conflict («конфликт»)</br>
410 Gone («удалён»)</br>
411 Length Required («необходима длина»)</br>
412 Precondition Failed («условие ложно»)</br>
413 Payload Too Large («полезная нагрузка слишком велика»)</br>
414 URI Too Long («URI слишком длинный»)</br>
415 Unsupported Media Type («неподдерживаемый тип данных»)</br>
416 Range Not Satisfiable («диапазон не достижим»)</br>
417 Expectation Failed («ожидание не удалось»)</br>
418 I’m a teapot («я — чайник»);</br>
419 Authentication Timeout (not in RFC 2616) («обычно ошибка проверки CSRF»)</br>
421 Misdirected Request</br>
422 Unprocessable Entity («необрабатываемый экземпляр»)</br>
423 Locked («заблокировано»)</br>
424 Failed Dependency («невыполненная зависимость»)</br>
425 Too Early («слишком рано»)</br>
426 Upgrade Required («необходимо обновление»)</br>
428 Precondition Required («необходимо предусловие»)</br>
429 Too Many Requests («слишком много запросов»)</br>
431 Request Header Fields Too Large («поля заголовка запроса слишком большие»)</br>
449 Retry With («повторить с»)</br>
451 Unavailable For Legal Reasons («недоступно по юридическим причинам»)</br>
499 Client Closed Request (клиент закрыл соединение)</br>
## 5xx: Server Error (ошибка сервера)</br>
500 Internal Server Error («внутренняя ошибка сервера»)</br>
501 Not Implemented («не реализовано»)</br>
502 Bad Gateway («плохой, ошибочный шлюз»)</br>
503 Service Unavailable («сервис недоступен»)</br>
504 Gateway Timeout («шлюз не отвечает»)</br>
505 HTTP Version Not Supported («версия HTTP не поддерживается»)</br>
506 Variant Also Negotiates («вариант тоже проводит согласование»)</br>
507 Insufficient Storage («переполнение хранилища»)</br>
508 Loop Detected («обнаружено бесконечное перенаправление»)</br>
509 Bandwidth Limit Exceeded («исчерпана пропускная ширина канала»)</br>
510 Not Extended («не расширено»)</br>
511 Network Authentication Required («требуется сетевая аутентификация»)</br>
520 Unknown Error («неизвестная ошибка»)</br>
521 Web Server Is Down («веб-сервер не работает»)</br>
522 Connection Timed Out («соединение не отвечает»)</br>
523 Origin Is Unreachable («источник недоступен»)</br>
524 A Timeout Occurred («время ожидания истекло»)</br>
525 SSL Handshake Failed («квитирование SSL не удалось»)</br>
526 Invalid SSL Certificate («недействительный сертификат SSL»)</br>


## RxJS: Observable, BehaviorSubject, subscribe, unsubscribe
## Микрофронтенд</br>
## Асинхронный JavaScript: Promise, Promise.all, Promise.race, Promise.any</br>

Пример использования Promise
```js
const promise1 = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1') # обрщение к серверу
        .then(response => response.json()) №
        .then(json => resolve(json))
        .catch((err) => reject(err))
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise2 status is OK!!!")
    }, 200)
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise3 status is OK!!!"), 1000)
})
```

Возвращает успешный (resolve) промис, если все промисы выполнились успешно, иначае возращается неуспешный промис (reject)
```js
Promise.all([promise1, promise2, promise3])
    .then(() => console.log("ok!!!!"))
    .catch((err) => console.log(err))
```

Функция race([...arrayPromises]) возвращаеся промис, который выполнился быстрее всех из переданных в массив

```js
Promise.race([promise1, promise2, promise3])
    .then(r => console.log(r))
    .catch((err) => console.log(err))

```

Функция any([...arrayPromises]) возвращает промис, который выполнился быстрее всех и одновременно является успешным
```js
const slow = new Promise(resolve => setTimeout(() => resolve(1), 6000))
const fast = new Promise(resolve => setTimeout(() => resolve(2), 3000))
const theFastest = new Promise((resolve, reject) =>
    setTimeout(() => reject('Some error'), 1000))

Promise.any([slow, fast, theFastest])
    .then(() => console.log("OK"))
    .catch(() => console.log("Some error"))
```
## Основы Angular: компоненты (жизненный цикл), директивы, пайпы, сервисы, модули 

## Принципы SOLID, KISS, DRY
### SOLID - это принципы разработки программного обеспечения, следуя которым Вы получите хороший код, который в дальнейшем будет хорошо масштабироваться и поддерживаться в рабочем состоянии.

S - Single Responsibility Principle - принцип единственной ответственности. Каждый класс должен иметь только одну зону ответственности.

O - Open closed Principle - принцип открытости-закрытости. Классы должны быть открыты для расширения, но закрыты для изменения.

L - Liskov substitution Principle - принцип подстановки Барбары Лисков. Должна быть возможность вместо базового (родительского) типа (класса) подставить любой его подтип (класс-наследник), при этом работа программы не должна измениться.

I -  Interface Segregation Principle - принцип разделения интерфейсов. Данный принцип обозначает, что не нужно заставлять клиента (класс) реализовывать интерфейс, который не имеет к нему отношения.

D - Dependency Inversion Principle - принцип инверсии зависимостей. Модули верхнего уровня не должны зависеть от модулей нижнего уровня. И те, и другие должны зависеть от абстракции. Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.

### Keep It Simple, Stupid / Будь проще

Принцип KISS утверждает, что большинство систем работают лучше всего, если они остаются простыми, а не усложняются. Поэтому в области проектирования простота должна быть одной из ключевых целей, и следует избегать ненужной сложности в вашем коде



## Event Loop, async/await JavaScript ES7 (ES2016)
## Что нового в JavaScipt ES8 (ES2017)
## Что нового в JavaScript ES9 (ES2018)
## Что нового в JavaScript ES10 (ES2019)
## Что нового в JavaScript ES11 (ES2020)
## Что нового в JavaScript ES12 (ES2021)
## Что нового в JavaScript ES13 (ES2022)
Подробнее об ECMAScript 2022 (ES13): https://javascript.plainenglish.io/latest-es13-javascript-features-24cba45c93f7

