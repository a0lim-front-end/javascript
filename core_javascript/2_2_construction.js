/** 
 * 2.2 문(statment): 세미콜론으로 구분 
 * */

alert('Hello');
alert('world!');


/** 
 * 2.3 엄격 모드 
 * */

"use strict"; // 모던한 방식(호환시 변경 사항이 활성화됨)으로 실행됨 // 최상단에 있어야 함(함수 내에 사용하면 함수 내에서만 엄격 모드 실행됨)
// 브라우저 콘솔
// 'use strict'; shift+Enter
// 클래스와 모듈을 사용한다면 use strict를 생략 가능


/** 
 * 2.4 변수와 상수
 *  */

let message; // message 변수 선언
message = 'hello'; // 문자열 저장

// 여러 변수 정의 1
let user = 'John', age = 25;

// 여러 변수 정의 2(같은 변수를 두 번 정의하는 것은 불가능)
let user = 'John';
let age = 25;

// var: let의 오래된 버전
// 변수 명명 규칙: 문자, 숫자, $, _ // 첫글자는 숫자가 될 수 없음
// 대소문자 구별
// 예약어는 사용 불가 ex. let, class 등

// 상수
const myBirthday = '18.04.1982'; // 상수 선언(변경 안됨)
// 대문자 상수: 하드 코딩한 값의 별칭을 만들 때 사용
const COLOR_ORANGE = "#FF7F00";


/** 
 * 2.5 자료형 
 * */

// 숫자형
let n = 1;
1/0; // 무한대
Infinity // 무한대
'a'/1; // error: NaN

// BigInt: (2^53-1)(9007199254740991) 보다 큰 값 혹은 -(2^53-1) 보다 작은 정수
const bigInt = 11111111111111111111111111111111111n; // 끝에 n을 붙임

// 문자형
let str = "Hello";
let str2 = 'hello'; // "", '' 상관 없음
alert('my name is `${str}`'); // 'my name is hello // `${}`: 원하는 값을 문자열 중간에 삽입 가능 // 이 때, 큰 따옴표는 사용 불가
alert('112 is `{100+12}`')

// boolean형
let nameFieldChecked = true;
let isGreater = 4 > 1;

// null 값: 어떤 자료형에도 속하지 않는 값(nothing, emptym, unknown 포함)
let abc = null;

// undefined 값: 값이 할당되지 않은 상태
let a;
alert(a) // undefined
a = undefined;

// 객체: 데이터 컬렉션이나 복잡한 개체
// 심볼(symbol): 객체의 고유한 식별자를 만들 때 사용

// typeof 연산자
// 1. 연산자: typeof x
// 2. 함수: typeof(x)
// 결과는 동일
typeof 0 // "number"
typeof Math // "object"
typeof null // "object": 단, null은 객체가 아님 오류 방지를 위한 단순 구분
typeof alert // "function" // 하위 호환성 유지를 위해 남겨짐


/**
 * 2.6 alert, prompt, confirm을 이용한 상호작용
 */

// 모달 창(modal wiindow): 메시지가 있는 작은 창. 확인 버튼을 누르기 전까지 모달 창 밖에 있는 버튼을 누를 수 없음

// alert: 모달 창 생성
alert('Hello');

// prompt: 두 개의 인수를 받음
let result = prompt(title, [default]); // titile: 사용자에게 보여줄 문자열 // default: 입력 필드의 초깃값(선택값)
let ab = prompt('나이를 입력해 주세요', 10);

// 컨펌 대화상자: 질문과 확인, 취소 버튼이 있는 모달 창 생성
result = confirm(question);
let isBoss = confirm("당신이 주인인가요?");
alert(isBoss); // 확인 버튼을 누른 겨우, true 출력


/**
 * 2.7 형 변환
 */

// 문자형으로 변환
let value = true;
value = String(value); // "true"로 변환

// 숫자형으로 변환
alert("6"/"2"); // 3 : 문자열이 숫자형으로 자동변환된 후 연산 수행됨
let str = "123";
str = Number(str); // 123으로 변환

let asd = Number("fkffkffk 123");
alert(asd); // NaN: 형 변환 실패 // Number(null): 0 // Number(true/false): 1/0
// Number(string) 
Number("         23       "); // 문자의 처음과 끝 공백 제거 -> 숫자를 읽음 // 23
Number("123z"); // NaN
Number("     "); // 0

// 불린형으로 변환
// false: 0, 빈 문자열, null, undefined, NaN
Boolean(1); // true
Boolean("str"); // true
Boolean("0"); // true


/**
 * 2.8 기본 연산자와 수학
 */

// 피연산자: 연산자가 연산을 수행하는 대상 // ex: 5 * 2 -> 피연산자: 5, 2

// 단항 연산자
let x = 1;
x = -x; // x = -1

// 이항 연산자
let x = 1, y = 3;
y - x; // 2

// 연산자 % : 나머지 연산자
5 % 2; // 1

// 연산자 ** : 거듭제곱
2 ** 3 // 8

// 이항연산자 +와 문자열 연결
"my" + "string"; // "mystring"
'1' + 2; // '12' : 피연산자 중 하나가 문자열이면, 다른 하나도 문자열로 변환됨
2 + 2 + '1' // '41' : 왼쪽에서 순차적으로 진행됨

// 나머지 산술 연산자와 문자열: 숫자형으로 변환해 계산
6 - '2'; // 4
'6' / '2' // 3

// 단항 연산자 +와 숫자형으로의 변환
let y = -2;
+y; // y = -2 : 숫자에는 영향을 끼치지 않음
+true // 1 : 숫자형이 아닌 피연산자는 숫자형으로 변화

let apple = "2", orange = "3";
apple + orange; // "23"
+apple + +orange; // 5
Number(apple) + Number(orange); // 5

// 연산자 우선순위
image.png

// 할당 연산자(=)
let x = 2 * 2 + 1; // 마지막에 x = 5로 할당됨

let a = 1, b = 2;

let c = 3 - (a = b + 1); // a = 3, c = 0

// 할당 연산자 체이닝
let a, b, c;
a = b = c = 2 + 2; // a = b = c = 4

// 복합 할당 연산자
let n = 2;
n *= 3 + 5; // n *= 8 -> 2 * 8 = 16

// 증가/감소 연산자
n++; // n + 1
n--; // n - 1

let cn = 0;
alert(++cn); // 1
alert(cn++); // 0

// 비트 연산자
// AND: &
// OR: |
// XOR: ^
// NOT: ~
// 왼쪽 시프트: <<
// 오른쪽 시프트: >>

// 쉼표 연산자: 마지막 표현식의 결과만 반환됨
let d = (1 + 2, 3 + 4); // 7
let e = 1 + 2, 3 + 4; // 3(쉼표 연산자의 우선순위는 매우 낮음)


/**
 * 2.9 비교 연산자
 */

// 불린형 반환
alert(2 > 1); // true

// 문자열 비교: 사전순(사전 뒤의 문자열은 앞의 문자열보다 크다고 판단)
alert('Z' > 'A'); // true

// 다른 형을 가진 값 간의 비교
alert('2' > 1); // true: '2'가 2로 변환된 후 비교
alert('01' == 1); // true: '01'이 1로 변환된 후 비교

let A = 0, B = "0";
alert(Boolean(A)); // false
alert(Boolean(B)); // true
alert(A == B); // true: B를 0으로 변환 후 비교

// 일치 연산자(===)
0 == false; // true
0 === false; // false: 피연산자의 형이 다름

// null/undefined와 비교하기
null == undefined; // true
null === undefined; // false

null > 0; // false
null == 0; // false
null >= 0; // true: 비교 연산자에 따라 null이 숫자혀인 0으로 변환됨

undefined > 0; // false: NaN으로 변환됨
undefined < 0; // false: NaN으로 변환됨
undefined == 0; // false: null 또는 undefined와만 같음


/**
 * 2.10 if와 '?'를 사용한 조건 처리
 */


// if문
let year = prompt("몇년도", '');
if (year == 2023) alert("yes");

if(year == 2023){
    alert('yes')
    alert('right')
}

// 불린형으로의 변환
if (0) // falsy
if (1) // truthy

// else 절, else if
if(year == 2023){
    alert('yes')
} else if (year > 2023) {
    alert('up')
} else {
    alert('no')
}

// 조건부 연산자 ?
let result = condition ? value1 : value2;
let acccessAllowed = (age > 18) ? 'up' : 'down';


/**
 * 2.11 논리 연산자
 */

// ||(OR)
// &&(AND)
// !(NOT)
alert(1 && null && 3); // null: falsy
alert(1 && 2 && 3); // 3: 마지막 피연산자를 반환


/**
 * nullish 병합 연산자 '??' : 우선순위 낮음
 */

a ?? B; // a가 null이나 undefined가 아니면 a를 반환, 아닌 경우 b를 반환
alert(null ?? undefined ?? "answer" ?? 'ans'); // 'answer': null이나 undefined가 아닌 첫 번째 피연산자를 반환

// ??와 ||의 차이
let height = 0;

alert(height || 100); // 100: height를 falsy로 처리
alert(height ?? 100); // 0: 첫번째 정의된 값(height)을 반환


/**
 * while과 for 반복문
 */

// while 반복문
let i = 0;
while (i < 3){ // 0, 1, 2 출력
    alert(i);
    i++;
}

// do while 반복문: 최소한 한 번이라도 실행하려고 할 때 사용
do {
    alert(i);
    i++
} while (i < 3);

// for 반복문
for(begin; condition; step){

}

for(let i = 0; i < 3; i++){ // 0, 1, 2
    alert(i)
}

let i = 0;
for(; i < 3;){
    alert(i++)
}

for(;;){ // 무한 루프

}

// 반복문 빠져나오기: break
let sum = 0;
while(true){
    let value = +prompt("number", '');
    if(!value) break; // 입력 값이 없는 경우(입력하지 않았거나 cancel을 누른 경우) 반복문 중지
    sum += value;
}

// 다음 반복으로 넘어가기: continue
for(let i = 0; i < 10; i++){
    if (i % 2 == 0) continue; // 조건이 참인 경우, 건너뛰기
    alert(i); // 1, 3, 5, 7, 9
}

(i > 5) ? alert(i) : continue; // 마지막에 continue, break가 올 수 없음

// break/continue와 레이블
labelName: for(){ // 중첩 반복문을 한번에 빠져나올 때 사용

}

outer: for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        let input = prompt('`${i}`,`${j}`의 값', '');

        if (!input) break outer; // 입력값이 없는 경우, 밖의 반복문까지 빠져나옴
    }
}


/**
 * 2.14 switch 문
 */

// 여러 개의 case문으로 구성. default 문은 선택사항
switch(x){
    case 'value1': // if(x === ''value1')
        break
    case 'value2':
        break
    default: // 값과 일치하는 case가 없을 때 실행
        break
}

let a = 2 + 2;

switch (a) {
  case 3:
    alert( '비교하려는 값보다 작습니다.' );
    break;
  case 4:
    alert( '비교하려는 값과 일치합니다.' );
    break;
  case '5':
    alert( '형이 다르므로 절대 반환되지 않습니다.' );
    break;
  default:
    alert( "어떤 값인지 파악이 되지 않습니다." );
}


/**
 * 2.15 함수
 */

// 함수 선언
let userName = 'john'; // 외부변수(outer variable)

function showMessage(from, text = "no text given"){ // from, text: 매개변수(parameter) / text: 기본값 설정
    let message = "hi"; // 지역변수(local variable): 함수 내에서만 접근 가능
    alert('hello');
}

showMessage("Ahn");

// 반환값: return value
function sum(a, b){
    return a + b;
}


/**
 * 2.16 함수 표현식: 함수를 값처럼 취급함
 */

let sayHi = function(){
    alert("hi");
}

alert(sayHi); // sayHi()로 괄호가 있지 않아 실행되지 않음. 대신 함수 코드가 보임

let func = sayHi; // 함수 복사(함수 호출 결과가 저장됨)

// 콜백 함수
function ask(question, yes, no){ // question을 하고 답변에 따라 yes 나 no를 호출
    if (confirm(question)) yes()
    else no();
}

function showOk(){
    alert('동의');
}

function showCancel(){
    alert('취소');
}

ask('동의하십니까', showOk, showCancel); // 콜백 함수: ask의 인수, showOk, showCancel

// 함수 선언문과 함수 표현식의 차이
// 1. 문법
// 함수 선언문
function sum(a, b){
    return a + B;
}
// 함수 표현식
let sum = function(a, b){
    return a + b;
};

// 2. 자바스크립트 엔진이 함수를 생성하는 시기
// 함수 선언문: 함수 선언문이 정의되기 전에도 호출 가능
sayHi("John"); // "John"

function sayHi(name){
    alert(name);
}
// 함수 표현식
sayHi("John"); // error

let sayHi = function(name){
    alert(name);
}

// 3. 스코프
// 엄격모드에서, 함수 선언문이 코드 블록 내에 위치하면 해당 함수는 블록 내 어디서든 접근 가능. 블록 밖에서는 접근 불가


/**
 * 2.17 화살표 함수 기본
 */

let func = (a, b, c) => expression

let sum = (a, b) => a + b;

let sum = function(a, b){ // 위와 동일
    return a + b;
}

let double = n => n * 2;

let sayHi = () => alert('hi');

let age = prompt("나이를 알려주세요.", 18);

let welcome = (age < 18) ?
  () => alert('안녕') :
  () => alert("안녕하세요!");

welcome();