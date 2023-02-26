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
## Микрофронтенд </br>
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

Компонент (Angular component) - обособленная часть функционала со своей логикой, HTML-шаблоном и CSS-стилями.

Класс становится Angular компонентом, если его объявлению предшествует декоратор <code>@Component()</code> с объектом конфигурации:

```ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
```

### Жизненный цикл компонентов в Angular
Экземпляр компонента имеет жизненный цикл, который начинается, когда Angular создает экземпляр класса компонента и отображает представление компонента вместе с его дочерними представлениями. Жизненный цикл продолжается с обнаружением изменений, поскольку Angular проверяет, когда изменяются свойства, привязанные к данным, и обновляет как представление, так и экземпляр компонента по мере необходимости. Жизненный цикл заканчивается, когда Angular уничтожает экземпляр компонента и удаляет его отрисованный шаблон из DOM. Директивы имеют аналогичный жизненный цикл, поскольку Angular создает, обновляет и уничтожает экземпляры в процессе выполнения.

Ваше приложение может использовать методы привязки жизненного цикла для подключения к ключевым событиям в жизненном цикле компонента или директивы для инициализации новых экземпляров, инициирования обнаружения изменений при необходимости, реагирования на обновления во время обнаружения изменений и очистки перед удалением экземпляров.

Все методы жизненного цикла приведены ниже:

<strong>ngOnChanges()</strong>: вызывается до метода ngOnInit() при начальной установке свойств, которые связаны механизмом привязки, а также при любой их переустановке или изменении их значений. Данный метод в качестве параметра принимает объект класса SimpleChanges, который содержит предыдущие и текущие значения свойства.

<strong>ngOnInit()</strong>: вызывается один раз после установки свойств компонента, которые участвуют в привязке. Выполняет инициализацию компонента

<strong>ngDoCheck()</strong>: вызывается при каждой проверке изменений свойств компонента сразу после методов ngOnChanges и ngOnInit

<strong>ngAfterContentInit()</strong>: вызывается один раз после метода ngDoCheck() после вставки содержимого в представление компонента кода html

<strong>ngAfterContentChecked()</strong>: вызывается фреймворком Angular при проверке изменений содержимого, которое добавляется в представление компонента. Вызывается после метода ngAfterContentInit() и после каждого последующего вызова метода ngDoCheck().

<strong>ngAfterViewInit()</strong>: вызывается фреймворком Angular после инициализации представления компонента, а также представлений дочерних компонентов. Вызывается только один раз сразу после первого вызова метода ngAfterContentChecked()

<strong>ngAfterViewChecked()</strong>: вызывается фреймворком Angular после проверки на изменения в представлении компонента, а также проверки представлений дочерних компонентов. Вызывается после первого вызова метода ngAfterViewInit() и после каждого последующего вызова ngAfterContentChecked()

<strong>ngOnDestroy()</strong>: вызывается перед тем, как фреймворк Angular удалит компонент.

### Директивы (Directives)

Angular директивы используются для манипулированием поведения DOM-дерева.
Выделяют три типа директив:

- С собственным шаблоном, или по-другому компоненты (компоненты являются директивами);
- Структурные, которые изменяют структуру DOM-дерева;
- Атрибуты, которые изменяют внешний вид или поведение по умолчанию элемента DOM-дерева.

Несмотря на существующую классификацию, иногда бывают трудно однозначно определить принадлежность к группе, поскольку одна директива может совмещать в себе функционал сразу двух групп.

По умолчанию в Angular предусмотрен ряд встроенных директив. Рассмотрим самые популярные из них.

К встроенным структурным директивам относятся: <code>*ngIf</code>, <code>*ngFor</code>, <code>*ngSwitch</code> и др. Все Angular директивы этой группы предваряются символом *.

- <code>*ngIf</code> добавляет или удаляет элемент из DOM-дерева в зависимости от истинности переданного выражения (true - добавление, false - удаление).

```ts
<div *ngIf="true">This will be added to the DOM</div>
<div *ngIf="false">This will be removed from the DOM</div>
```

- <code>*ngFor</code> используется для визуализации массива данных. Директива применяется к блоку HTML-кода, определяющего, как должны отображаться данные элемента массива. Далее Angular использует этот HTML как шаблон для всех последующих элементов в массиве.

- <code>*ngSwitch</code> эмулирует работу оператора switch применительно к шаблонам.
Angular директивы <code>*ngSwitchCase</code> и <code>*ngSwitchDefault</code> отображают указанный шаблон в зависимости от значения переданной ngSwitch переменной или шаблон по умолчанию, если ни один из описанных случаев не соответствует реальному значению.

### Пайпы (Pipes)
Angular pipe, или просто фильтр, нужен для преобразования данных прямо в HTML-шаблоне. Например, отображение даты и времени в желаемом формате или задание формата вывода числового значения.

В Angular имеется ряд встроенных фильтров, но также предусмотрена возможность создания собственных.

Рассмотрим пример использования кастомного пайпа

```ts
import { Pipe, PipeTransform } from '@angular/core';
import { IMissionRockets } from "../models/IMissionRockets";

@Pipe({
  name: 'filterIsSuccessLaunch'
})
export class SuccessLaunchPipe implements PipeTransform {
  transform(mission: IMissionRockets[], IsSuccess: boolean): IMissionRockets[] {
    if (!IsSuccess) return mission.filter(m => !m.cores[0].landing_success)
    else {
      return mission.filter(m => m.cores[0].landing_success && m.cores[0].landing_success !== null);
    }
  }

}

```

### Сервисы (Services)
Angular сервис - это обычный класс, используемый в контексте Angular для хранения глобального состояния приложения или в качестве поставщика данных.
Angular сервисы могут быть определены на уровне приложения, модуля или компонента.

Пример
```ts
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class AccountsHttpService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable {
    return this.http.get('/api/users')
  }
}

```

### Модули (Modules)

Angular модуль - это класс с декоратором <code>@NgModule()</code>, который служит изолирующей логической объединяющей структурой для компонентов, директив, фильтров и сервисов. Все перечисленные сущности определяются и конфигурируются с помощью <code>@NgModule()</code>.

Angular приложение имеет модульную архитектуру и состоит, по крайней мере, из одного главного, или корневого, модуля. Все остальные относятся к второстепенным.

Сама библиотека @angular также модульная:

- BrowserModule;
- CommonModule;
- FormsModule;
- ReactiveFormsModule;
- HttpClientModule;
- RouterModule и др.

Ключевая роль при создании Angular модуля у декоратора <code>@NgModule()</code>, принимающего конфигурационный объект со свойствами:

- imports - массив, где указывается список импортируемых второстепенных модулей;</br>
- exports - массив компонентов, директив и фильтров, которыми пользуются другие модули, если они импортируют текущий;</br>
- declarations - массив компонентов, директив и фильтров;</br>
- entryComponents - массив создаваемых динамически компонентов;</br>
- bootstrap - массив, в котором указывается компонент для загрузки;</br>
- providers - массив сервисов.</br>

По назначению модули можно классифицировать следующим образом:

- корневой;
- функциональный;
- маршрутизации;
- для поставки сервисов.
Корневой модуль - главный в приложении. Именно он загружается первым и импортирует в себя все второстепенные модули, которые могут импортировать в себя другие второстепенные модули.

Только корневой модуль может определять свойство <code>bootstrap</code> и импортировать <code>BrowserModule</code>.

```ts
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    //
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## MVC, MVP, MVVM
## Принципы SOLID, KISS, DRY, YAGNI
### SOLID - это принципы разработки программного обеспечения, следуя которым Вы получите хороший код, который в дальнейшем будет хорошо масштабироваться и поддерживаться в рабочем состоянии.

<strong>S</strong> - Single Responsibility Principle - принцип единственной ответственности. Каждый класс должен иметь только одну зону ответственности.

<strong>O</strong> - Open closed Principle - принцип открытости-закрытости. Классы должны быть открыты для расширения, но закрыты для изменения.

<strong>L</strong> - Liskov substitution Principle - принцип подстановки Барбары Лисков. Должна быть возможность вместо базового (родительского) типа (класса) подставить любой его подтип (класс-наследник), при этом работа программы не должна измениться.

<strong>I</strong> -  Interface Segregation Principle - принцип разделения интерфейсов. Данный принцип обозначает, что не нужно заставлять клиента (класс) реализовывать интерфейс, который не имеет к нему отношения.

<strong>D</strong> - Dependency Inversion Principle - принцип инверсии зависимостей. Модули верхнего уровня не должны зависеть от модулей нижнего уровня. И те, и другие должны зависеть от абстракции. Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.

### Keep - It Simple, Stupid / Будь проще

Принцип KISS утверждает, что большинство систем работают лучше всего, если они остаются простыми, а не усложняются. Поэтому в области проектирования простота должна быть одной из ключевых целей, и следует избегать ненужной сложности в вашем коде

### DRY - Don’t Repeat Yourself / Не повторяйтесь

Эта концепция была впервые сформулирована в книге Энди Ханта и Дэйва Томаса «Программист-прагматик: путь от подмастерья к мастеру».

Идея вращается вокруг единого источника правды (single source of truth — SSOT). Что это вообще такое?

В проектировании и теории информационных систем единый источник истины (SSOT) – это практика структурирования информационных моделей и схемы данных, которая подразумевает, что все фрагменты данных обрабатываются (или редактируются) только в одном месте… SSOT предоставляют достоверные, актуальные и пригодные к использованию данные.

Использование SSOT позволит создать более прочную и понятную кодовую базу.

Дублирование кода – пустая трата времени и ресурсов. Вам придется поддерживать одну и ту же логику и тестировать код сразу в двух местах, причем если вы измените код в одном месте, его нужно будет изменить и в другом.

В большинстве случаев дублирование кода происходит из-за незнания системы. Прежде чем что-либо писать, проявите прагматизм: осмотритесь. Возможно, эта функция где-то реализована. Возможно, эта бизнес-логика существует в другом месте. Повторное использование кода – всегда разумное решение.

## YAGNI - You Aren’t Gonna Need It / Вам это не понадобится

Этот принцип прост и очевиден, но ему далеко не все следуют. Если пишете код, то будьте уверены, что он вам понадобится. Не пишите код, если думаете, что он пригодится позже.

Этот принцип применим при рефакторинге. Если вы занимаетесь рефакторингом метода, класса или файла, не бойтесь удалять лишние методы. Даже если раньше они были полезны – теперь они не нужны.

Может наступить день, когда они снова понадобятся – тогда вы сможете воспользоваться git-репозиторием, чтобы воскресить их из мертвых.

## Event Loop, async/await JavaScript ES7 (ES2016)
## Что нового в JavaScipt ES8 (ES2017)
## Что нового в JavaScript ES9 (ES2018)
## Что нового в JavaScript ES10 (ES2019)
## Что нового в JavaScript ES11 (ES2020)
## Что нового в JavaScript ES12 (ES2021)
## Что нового в JavaScript ES13 (ES2022)

Подробнее об ECMAScript 2022 (ES13): https://javascript.plainenglish.io/latest-es13-javascript-features-24cba45c93f7
