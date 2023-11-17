/**
 * 5.1 원시값의 메서드
 */

// new String/Number/Boolean (x)

/**
 * 5.2 숫자형
 */

let billion = 1e9; // 1000000000
let ms = 1e-6; // 0.000001

alert(0xff) // 16진수: 255

// toString(base)
let num = 255;

alert(num.toString(16)); // ff
alert(num.toString(2)); // 11111111

// 어림수 구하기
Math.floor(); // 소수점 첫째 자리에서 내림
Math.ceil(); // 올림
Math.round(); // 반올림
Math.trunc(); // 소수부 무시

// 소수점 n번째를 구하는 경우
let num = 1.23456;

alert(Math.floor(num * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23
alert(num.toFixed(1)); // 소수점 n번째 수까지 어림수를 구한 후 문자형으로 반환

// 부정확한 계산

// isNaN과 isFinite
alert(isNaN(NaN)); // true
alert(isNaN("str")); // true

// parseInt와 parseFloat
alert(parseInt('100px')); // 100
alert(parseInt('12.3')); // 12 : 정수 부분만 반환
alert(parseFloat('12.3.4')); // 12.3 : 두번째 점에서 멈춤
alert(parseInt('a123')); // NaN: a에서 멈춤
alert(parseInt('0xff', 16)); // 255 // 16진수 파싱 가능

// 기타 수학 함수
Math.random(); // 0과 1 사이의 난수를 반환
Math.max(); // 최댓값 반환
Math.pow(n, power); // n을 power번 거듭제곱


/**
 * 5.3 문자열
 */

// 특수 기호
let guestList = "guest:\n * John\n * Pete \n"; // \n: 줄바꿈

alert('My\n'.length); // 3: 문자의 길이

let str = 'hello';

alert(str[0]); // 첫번째 글자
alert(str.charAt(0)); // 첫번째 글자
alert(str[1000]); // undefined
alert(str.charAt(1000)); // ''

for(let char of "Hello"){
    alert(char); // h, e, l, l, o
}

// 문자열의 불변성: 문자열의 중간 글자 하나를 바꾸기 불가능
let str = 'hi';
str = 'h' + str[1]; // hi

alert('Interface'.toUpperCase()); // 'INTERFACE'
alert('Interface'.toLowerCase()); // 'Interface'

// 부분 문자열 찾기
// str.indexOf
let str = 'Widget with id';

alert(str.indexOf('Widget')); // 0 : Widget으로 시작
alert(str.indexOf('width')); // -1: 대소문자 구별 -> 없음
alert(str.indexOf("id")); // 1
alert(str.indexOf('id', 2)); // 12: 'id'가 두번째로 오는 위치

// includes, startsWith, endsWith: 포함 여부만 알고 싶을 때 사용
alert(str.includes('Widget')); // true
alert(str.includes('id', 2)); // true : 두 번째 위치에 id가 있음
alert(str.startsWith('Wi')); // true
alert(str.endsWith("get")); // false

// 부분 문자열 추출
// str.slice(start[,end])
alert(str.slice(0,2)); // 'wi' : 0번째에서 2번째까지
alert(str.slice(2)); // 'dget with id': 2번째부터 끝까지
alert(str.slice(-4, -1)); // 'h i': 끝에서 4번째부터 끝에서 1번째까지

// str.substring(start[, end]): start가 end보다 커도 가능
alert(str.substring(2,5)); // 'dge'
alert(str.substring(5,2)); // 'dge'
alert(str.slice(5,2)); // ""

// str.substr(start [, length]): length개의 글자를 반환 // 구식 -> 동작 안 할 수 있음
alert(str.substr(2,4)); // 'dget': 2번째에서 4개

// 문자열 비교하기
alert('a' > 'Z'); // true: 소문자는 대문자보다 항상 큼


/**
 * 5.4 배열: 자료형에 제약이 없음
 */

let arr = new Array();
let arr = [];
let fruits = ["apple", "banana"];

alert(fruits[0]); // "apple"
fruits[2] = 'lemon'; // fruits = ["apple", "banana", "lemon"]
fruits.length; // 3
alert(fruits); // 전체 출력

// pop: 스택 끝 요소를 추출
alert(fruits.pop()); // 'lemon' // fruits = ["apple", "banana"]

// push: 요소를 스택 끝에 집어넣음
alert(fruits.push('pear')) // fruits = ["apple", "banana", "pear"]

// shift: 배열 앞에 요소 추가
alert(fruits.shift()); // 'apple' // fruits = ["banana", "pear"]

// unshift: 요소 여러 개를 한 번에 더해줌
alert(fruits.unshift("pineapple", "lemon")) // fruits = ["banana", "pear", "pineapple", "lemon"]

// 반복문
// for
let arr = ["apple", "orange", "pear"];

for (let i = 0; i < arr.length; i++){
    alert(arr[i]);
}
// for of
for (let fruit of arr){
    alert(fruit);
}
// for in -> bad
for (let key in arr){
    alert(arr[key]);
}

// length 프로퍼티
let arr = [1, 2, 3, 4, 5];

arr.length = 2; // 요소를 2개 남기고 자르기
alert(arr); // [1, 2]

arr.length = 5; // 되돌리기 불가능

// toString: 요소를 쉼표로 구분한 문자열을 반환(자동)
alert(arr); // 1,2,3,4,5
alert([1] + 1); // "11"
alert([1,2] + 1); // "1,21"


/**
 * 5.5 배열과 메서드
 */

// splice
let arr = ["I", "go", "home"];

delete arr[1]; // arr = ["I", , "home"];
alert(arr.length); // 3

arr.splice(1, 1); // 인덱스 1부터 요소 1개를 제거 -> arr = ["I"]

let arr = ["I", "study", "JavaScript", "right", "now"];

arr.splice(0, 3, "Let's", "dance"); // 처음(0) 3개의 요소를 지우고, 그 자리에 다른 요소로 대체
alert( arr ) //["Let's", "dance", "right", "now"]

let removed = arr.splice(0, 2);
alert(removed); // "Let's", "dance"
arr.splice(1, 0,"a", "b"); // "right", "now", "a", "b" : 요소를 제거하지 않으면서 새로운 요소 추가

// slice: arr.slice([start], [end])
let arr = ["t", "e", "s", "t"]
alert(arr.slice(-2)); // s, t : 인덱스가 -2인 요소부터 제일 끝 요소까지 복사

// concat: arr.concat(arg1, arg2...): 기존 배열의 요소를 사용해 새로운 배열을 생성하거나 기존 배열에 요소를 추가할 때 사용
let arr = [1, 2];

alert(arr.concat([3, 4])); // 1, 2, 3, 4 : 기존 1, 2 + 3, 4
alert(arr.concat([3, 4], [5, 6])); // 1, 2, 3, 4, 5, 6
alert(arr.concat([3, 4], 5, 6)); // 1, 2, 3, 4, 5, 6

let arr = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

alert( arr.concat(arrayLike) ); // 1,2,something,else

// arr.forEach
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

arr.forEach((item, index, array){
    alert(`${item} is at index ${index} in ${array}`);
});

// 배열 탐색
// arr.indexOf(item, from): 인덱스 from부터 시작해서 item을 찾고 반환. 없으면 -1을 반환
// arr.lastIndextOf(item, from): 위와 동일. 검색을 뒤에서부터 시작
// arr.includes(item, from): 인덱스 from부터 시작해서 item이 있는지 검색. 발견하면 true를 반환
let arr = [1, 0, false];

alert(arr.indexOf(0)); // 1: 0의 위치
alert(arr.indexOf(false)); // 2: false의 위치
alert(arr.indextof(null)); // -1

alert(arr.includes(1)); // true

// find와 findIndex
let result = arr.findIndex(function(item, index, array){ // item: 함수를 호출할 요소
    // true가 반환되면 반복이 멈추고, 해당 요소를 반환
    // 조건에 맞는 요소가 없으면, undefined를 반환
});

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);
alert(user.name); // "John"

// filter
let results = arr.filter(function(item, index, array){
    // 조건을 충족하는 요소는 results에 순차적으로 더해짐
    // 조건에 맞는 요소가 없으면, 빈 배열을 반환
});

let someUsers = users.filter(item => item.id < 3);
alert(someUsers.length); // 2

// 배열을 변형하는 메서드
// map: 배열 요소 전체를 대상으로 함수를 호출하고, 함수 호출 결과를 배열로 반환
let result = arr.map(function(item, index, array){

});

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6

// sort: 배열의 요소를 정렬
let arr = [1, 2, 15];
arr.sort(); // 1, 15, 2 : 문자열로 취급되어 재정렬됨

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

arr.sort(compareNumeric); // 1, 2, 15: 숫자 정렬

arr.sort( (a, b) => a - b );

let countries = ['Österreich', 'Andorra', 'Vietnam'];
alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra, Österreich, Vietnam

// reverse: 역순으로 정렬
arr.reverse(); // 1, 2, 3, 4, 5

// split과 join
let names = ['Bilbo', 'Gandalf', 'Nazgul'];

let arr = names.split(', ');

for(let name of arr){
    alert(`${name}에게 보내는 메시지`); // Bilbo에게 보내는 메시지 // Gandalf에게 보내는 메시지 // Nazgul에게 보내는 메시지
}

names.split(', ', 2); // 배열의 길이를 2로 제한
'test'.split(''); // 문자열을 분리도 가능

names.join(';'); // Bilbo;Gandalf;Nazgul

// reduce와 reduceRight: 배열을 기반으로 값 하나를 도출할 때 사용
let value = arr.reduce(function(accmulator, item, index, array){
    // accumulator: 이전 함수 호출의 결과
    // initial: 함수 최초 호출 시 사용되는 초깃값(옵션)
}, [initial]);

let arr = [1, 2, 3, 4, 5];
arr.reduce((sum, current) => sum + current, 0); // 15

// Array.isArray: 배열 여부 파악
alert(typeof {}); // object
alert(typeof []); // object

alert(Array.isArray({})); // false
alert(Array.isArray([])); // true

// 배열 메서드와 'thisArg'


/**
 * 5.6 iterable 객체
 */

// Symbol.iterator
let range = {
    from: 1,
    to: 5,

    [Symbol.iterator](){
        this.current = this.from;
        return this;
    },

    net(){
        if (this.current <= this.to) {
            return {done: false, value: this.current++};
        } else{
            return {done: true};
        }
    }
};

for (let num of range){
    alert(num); // 1, 2, 3, 4, 5
}


for (let char of "test"){
    alert(char); // t, e, s, t
}

// 이터레이터를 명시적으로 호출하기: 반복 과정 통제 가능

// 이터러블과 유사 배열
let arrayLike = { // 인덱스와 length프로퍼티가 있음 => 유사 배열
    0: "Hello",
    1: "World",
    length: 2
  };

// Array.from
let arr = Array.from(arrayLike);


/**
 * 5.7 맵과 셋
 */

// 맵(Map): 키에 다양한 자료형을 허용
// new Map(): 맵 생성
// map.set(key, value): key를 이용해 value를 저장
// map.get(key): key에 해당하는 값을 반환. 존재하지 않으면 undefined를 반환
// map.has(key): key가 존재하면 true/false
// map.delete(key): key에 해당하는 값을 삭제
// map.clear(): 맵 안의 모든 요소를 제거
// map.size: 요소의 개수를 반환

let map = new Map(); // 맵 생성

map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1');

map.get(1); // 'num1'
map.size; // 3

let john = {name: "John"};
let visitsCountMap = new Map();

visitsCountMap.set(john, 123);
alert(visitsCountMap.get(john)); // 123

// 맵의 요소에 반복 작업하기
// map.keys(): 각 요소의 키를 모은 반복 가능한 객체를 반환
// map.values(): 각 요소의 값을 모은 이터러블 객체를 반환
// map.entries(): 요소의 [key, value]를 한 쌍으로 하는 이터러블 객체를 반환

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

for (let veg of recipeMap.key()){
    alert(veg); // cucumber, tomatoes, oninon
}

for (let amount of recipeMap.values()){
    alsert(amount); // 500, 350, 50
}

recipeMap.forEach((value, key, map) => {
    alert(`${key}: ${value}`); // cucumber: 500, ...
})

// Object.entries: 객체를 맵으로 바꾸기
let obj = {
    name: "John",
    age: 30
};

let map = new Map(Object.entries(obj));
alert(map.get('name')); // John

// Object.fromEntries: 맵을 객체로 바꾸기
let obj = Object.fromEntires(map); // 맴을 일반 객체로 변환

// 셋(set): 중복을 허용하지 않는 값을 모은 컬렉션
// new Seet(iterable): 셋 생성
// set.add(value): 값을 추가하고 셋 자신을 반환
// set.delete(value): 값을 제거. 성공에 따라 true/false
// set.has(value): 셋 내에 존재 여부에 따라 true/false
// set.clear(): 셋을 비움
// set.size: 셋의 길이 반환

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john);set.add(pete);set.add(mary);set.add(john);set.add(mary);

alert( set.size ); // 3: 중복 제거

for (let user of set) {
  alert(user.name); // John, Pete, Mary 순
}

set.forEach((value, valueAgain, set) => {
    alert(value);
})

// set.keys(): 셋 내의 모든 값을 포함하는 이터러블 객체를 반환
// set.values(): = set.keys(). 맵과의 호환성을 위함
// set.entries(): [value, value] 배열을 반환


/**
 * 5.8 위크맵과 위크셋
 */
// 위크맵: 키가 반드시 객체인 맵
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "ok"); // 키: 객체
weakMap.set("test", "no"); // error

// weakMap.get(key)
// weakMap.set(key, value)
// weakMap.delete(key)
// weakMap.has(key)

// 위크셋: 키가 반드시 객체인 셋


/**
 * 5.9 Object.keys, values, entries
 */
// Object.keys(obj): 객체의 키만 담은 배열 반환 // Object.keys() -> X
// Object.values(obj): 객체의 값만 담은 배열 반환
// Object.entries(obj): [key, value] 쌍을 담은 배열을 반환

let user = {
    name: "John",
    age: 30
};

Object.keys(user) // ["name", "age"]
Object.values(user) // ["John", 30]
Object.entries(user) // [ ["name","John"], ["age",30] ]

for (let value of Object.values(user)){
    alert(value);
}

// 객체 변환하기
let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePrices = Object.fromEntries(
    Object.entries(prices).map(([key, value]) => [key, value * 2])
    // 1. Object.entries: 배열로 변환
    // 2. map 적용
    // 3. from.entries: 배열을 객체로 재변환
);


/**
 * 5.10 구조 분해 할당(destructuring assignment)
 */

// 배열 분해하기
let arr = ["Bora", "Lee"]
let [firstName, LastName] = arr;

alert(firstName); // "Bora"

let [firstName, surname] = "Bora Lee".split(' ');

let [a, , b] = ["a", "A", "b"]; // 두번째 요소는 무시

for (let [key, value] of Object.entries(user)){ // user: 객체
    alert(`${key}:${value}`); // name:John, age:30
}

for (let [key, value] of user) { // user: 맵
    alert(`${key}:${value}`); // name:John, then age:30
  }

// ...로 나머지 요소 가져오기
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"]; // rest: 배열
alert(rest); // "Consul", "of the Roman Republic"

// 기본값
let [name = "Guest", surname = "Anonymous"] = ["Julius"];

alert(name);    // Julius (배열에서 받아온 값)
alert(surname); // Anonymous (기본값)

// 객체 분해하기
let options = {
    title: "Menu",
    width: 100,
    height: 200
};
  
let {title, width, height} = options;
  
alert(title);  // Menu

// 중첩 구조 분해
let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};

let {
    size: { // size 할당,
      width,
      height
    },
    items: [item1, item2], // items 할당
    title = "Menu" // title: 기본값을 사용함
} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
alert(item1);  // Cake
alert(item2);  // Donut


/**
 * 5.11 Date 객체와 날짜
 */

// new Date(): 객체 생성(현재 날짜와 시간)
// new Date(milliseconds): 현재 날짜에서 milliseconds 후의 시점의 객체 생성
// new Date(datestring): 자동으로 구문 분석 ex) new Date("2017-01-26");
// new Date(year, month, date, hours, minutes, seconds, ms)
new Date(2011, 0, 1, 0, 0, 0, 0); // 2011년 1월 1일 00시 00분 00초
new Date(2011, 0, 1); // 위와 동일: hours/minutes/seconds/ms에 값이 없는 경우엔 0으로 처리

// 날짜 구성요소 얻기
// getFullYear(): 연도 반환(네자리수)
// getMonth(): 0 ~ 11
// getDate()
// getHours(), getMinutes(), getSeconds(), getMilliseconds()
// getDay(): 요일 반환. 일요일(0) ~ 토요일(6)
// getTime(): 주어진 일시와 1970년 1월 1일 00시 00분 00초 사이의 간격(밀리초 단위)인 타임스탬프를 반환
// getTimezoneOffset(): 현지 시간과 표준 시간의 차이를 반환

// 날짜 구성요소 설정하기
// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
// setTime(milliseconds) :1970년 1월 1일 00:00:00 UTC부터 밀리초 이후를 나타내는 날짜를 설정

// 자동 고침(autocorrection)
let date = new Date(2013, 0, 32); // 1/32 존재하지 않음
alert(date); // 2013/2/1

date.setDate(0); // 0: 전 달의 마지막 날과 같음 -> 2013/1/31

let date = new Date();
date.setSeconds(date.getSeconds + 70); // 70초 후의 날짜 출력

// Date.now(): 현재 타임스탬프를 반환

// Date.parse와 문자열: YYYY-MM-DDTHH:mm:ss.sssZ
// YYYY-MM-DD : 날짜(연-월-일)
// "T" : 구분 기호로 쓰임
// HH:mm:ss.sss : 시:분:초.밀리초
// 'Z'(옵션) : +-hh:mm 형식의 시간대를 나타냄. Z 한 글자인 경우엔 UTC+0을 나타냄

let ms = Date.parse('2012-01-26T13:51:50.417-07:00');


/**
 * 5.12 JSON과 메서드
 */

// JSON.stringify: 객체를 JSON으로 바꿈
// JSON.parse: JSON을 객체로 바꿈
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

let json = JSON.stringify(student);
/* JSON으로 인코딩된 객체:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/

// JSON.stringify 호출 시 무시되는 프로퍼티: 메서드, 심볼형 프로퍼티, 값이 undefined인 프로퍼티
let user = {
    sayHi() { // 무시
      alert("Hello");
    },
    [Symbol("id")]: 123, // 무시
    something: undefined // 무시
};
  
 alert( JSON.stringify(user) ); // {} (빈 객체가 출력됨)

// replacer로 원하는 프로퍼티만 직렬화하기
let json = JSON.stringify(value[, replacer, space]);
// value: 인코딩하려는 값
// replacer: 프로퍼티가 담긴 배열 또는 매핑 함수 function(key, value)
// space: 서식 변경 목적으로 사용할 공백 문자 수

let room = {
    number: 23
};
  
let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup은 room을 참조
};
  
room.occupiedBy = meetup; // room references meetup
  
alert( JSON.stringify(meetup, ['title', 'participants']) ); // {"title":"Conference","participants":[{},{}]}
alert( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );
/*
{
  "title":"Conference",
  "participants":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/

// space로 가독성 높이기
let user = {
    name: "John",
    age: 25,
    roles: {
      isAdmin: false,
      isEditor: true
    }
};

alert(JSON.stringify(user, null, 2));
/* 공백 문자 두 개를 사용하여 들여쓰기함:
{
  "name": "John",
  "age": 25,
  "roles": {
    "isAdmin": false,
    "isEditor": true
  }
}
*/

// 커스텀 "toJsSON"
let room = {
    number: 23,
    toJSON() {
      return this.number;
    }
};

// JSON.parse
let value = JSON.parse(str, [reviver]);
// str: JSON 형식의 문자열
// reviver: 모든 (key, value) 쌍을 대상으로 호출되는 function(key,value) 형태의 함수로 값을 변경

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup = JSON.parse(str);

alert( meetup.date.getDate() ); // error: meetup.date가 문자열임

let meetup = JSON.parse(str, function(key, value) {
    if (key == 'date') return new Date(value); // date 형식으로 변환
    return value;
});