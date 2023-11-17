/**
 * 4.1 객체
 */

let user = new Object(); // 객체 생성자 문법
let user = {}; // 객체 리터럴 문법

let user = { // 객체
    name: "John", // key: name, value: John
    age: 30, // key: age, value: 30
    "likes birds": true, // 복수의 단어는 따옴표로 묶어야 함 // 끝에 쉼표: 모든 프로퍼티가 유사한 형태 -> 프로퍼티 추가, 삭제, 이동이 쉬워짐
};

alert(user.name); // John
user.isAdmin = true; // key: isAdmin, value: true 프로퍼티 추가
delete user.age; // 프로퍼티 삭제
user.name = "Pete"; // alert(user.name) = "Pete" -> 프로퍼티 수정

user.likes birds = true; // error: likes birds를 인식하지 못함
user["likes birds"] = ture; // 대괄호 표기법: set
alert(user["likes birds"]); // get
delete user["likes birds"] // delete

let key = prompt("who", "name"); // "name"을 입력
alert(user[key]); // John

// 계산된 프로퍼티(computed property): 객체를 만들 때 객체 리터럴 안의 프로퍼티 키가 대괄호로 둘러싸여 있는 경우
let fruit = prompt("which fruit", "apple");

let bag = {
    [fruit]: 5 // fruit에서 프로퍼티 이름을 동적으로 받아옴
}
alert(bag.apple); // 5

// 단축 프로퍼티
function makeUser(name, age){
    return{
        name, // name: name 
        age, // age: age
    };
}

// 프로퍼티 이름의 제약사항: 예약어 사용 가능. 숫자 -> 문자

// in 연산자: 프로퍼티 존재 여부 확인
let user = {};
alert(user.noSuchProperty === undefined); // true: 프로퍼티가 존재하지 않음
alert("age" in user); // false

// for in 반복문
for(key in object){
}

let user = {
    name: "John",
    age: 30,
    isAdmin: true,
};

for (let key in user){
    alert(key); // name, age, isAdmin
    alert(user[key]); // John, 30, true
}

// 객체 정렬 방식
let codes = {
    "3": "a",
    "2": "b",
    "1": "c" // "+1": 정수로 취급되지 않아, 맨 마지막에 출력 됨
};

for (let code in codes){
    alert(code); // 1, 2, 3 // 정수 순서대로 자동 정렬됨 / 그 외 프로퍼티는 추가된 순서대로 나열
}


/**
 * 4.2 참조에 의한 객체 복사
 */

let user = {
    name: "John"
}
let admin = user; // 참조값을 복사함
admin.name = "Pete";
alert(user.name); // 'Pete' -> user의 참조값도 변경됨

// 객체 복사, 병합과 Object.assign

let clone = {};

for (let key in user){ // 빈 객체에 user 프로퍼티 전부를 복사 후 넣음 -> 독립적인 복제본
    clone[key] = user[key];
}

clone.name = "Pete";
alert(user.name); // "John"

// Object.assign
Object.assign(dest, [src1, src2, ...]) // dest: 목표로 하는 객체 // scr1,...: 복사하고자 하는 객체 -> src1,... 의 프로퍼티를 dest에 복사, dest를 ㅈ외한 객체의 프로퍼티 전부가 첫번째 객체로 복사됨 => 마지막으로 dest 반환

let user = {name: "John"};

let permission1 = {canView: true};
let permission2 = {canEdit: true};

Object.assign(user, permission1, permission2); // user = {name: "John", canView: true, canEdit: true}

Object.assign(user, {name: "Pete"}); // user = {name: "Pete"} // 동일한 이름의 프로퍼티는 값이 덮어씌워 짐

let clone = Object.assign({}, user); // 객체 user을 복사

// 중첩 객체 복사(깊은 복사)
let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

alert(user.sizes.height); // 182

let clone = Object.assign({}, user); // user와 clone은 sizes를 공유 -> 값이 함께 바뀜

/**
 * 4.3 가비지 컬렉션
 */
// 도달 가능성(reachability): 어떻게든 접근하거나 사용할 수 있는 값. 도달 가능한 값은 메모리에서 삭제되지 않음
// ex. 현재 함수의 지역 변수와 매개변수, 중첩 함수의 체인에 있는 함수에서 사용되는 변수와 매개변수, 전역 변수 등 => 루트(root)
// 루트가 참조하는 값이나 체이닝으로 루트에서 참조할 수 있는 값 -> 도달 가능한 값


/**
 * 4.4 메서드와 this
 */

let user = {
    name: "John",
    age: 30
}

user.sayHi = function(){ // sayHi: 메서드(객체 프로퍼티에 할당된 함수)
    alert("hi")
};

user = { // 위와 동일하게 동작
    sayHi(){
        alert("hi")
    }
};

// 메서드와 this
let user = {
    name: "John",
    age: 30,

    sayHi(){
        alert(this.name); // this: 현재 객체 / alert(user.name): 외부 변수를 참조해 접근도 가능
    }
};

user.sayHi(); // "John"

let user = {name: "John"};
let admin = {name: "Admin"};

function sayHi(){
    alert(this.name); // 무엇이 this로 올지 모름
}

user.f = sayHi;
admin.f = sayHi;

user.f(); // this = user // "John"
admin.f() // this = admmin // "Admin"
admin['f'](); // 위와 동일

// 객체가 없는 경우 - 엄격모드: undefined / 엄격모드X: 전역 객체를 참조

//  this가 없는 화살표 함수
let user = {
    firstName: "purple",
    sayHi(){
        let arrow = () => alert(this.firstName); // this: user.sayHi()
        arrow();
    }
};

user.sayHi(); "purple"


/**
 * 4.5 new 연산자와 생성자 함수
 */

// 생성자 함수(constructor function): 함수의 첫 글자는 대문자

let user = new user("purple");

function User(name){
    // this = {}; // 빈 객체가 암시적으로 만들어짐

    this.name = name;
    this.isAdmin = false;

    // return this; // this가 암시적으로 반환됨
}

let user = { // 위와 동일
    name: "purple",
    isAdmin: false
}

// new function(){}: 재사용할 필요가 없는 복잡한 객체를 만들 때 사용

// new.target과 생성자 함수(나중에 공부할 것)

// 생성자와 return문: 객체를 return -> this 대신 객체 반환 / 원시형을 return -> return문 무시
function BigUser(){
    this.name = "monkey";
    return {name: "human"}; // this가 아닌 새로운 객체를 반환
}

alert(new BigUser().name); // "human"

function SmallUser(){
    this.name = "monkey";
    return; // this를 반환함
}

alert(new SmallUser().name); // "monkey"

// 생성자 내 메서드
function User(name){
    this.name = name;

    this.sayHi = function(){
        alert("my name is " + this.name);
    };
}

let bora = new User("purple");

bora.sayHi(); // "my name is purple"


/**
 * 4.6 옵셔널 체이님 ?.
 */


/**
 * 4.7 심볼형: 유일한 식별자
 */

let id = Symbol("description"); 


/**
 * 4.7 객체를 원시형으로 변환하기
 */

// ToPrimitive: hint(목표로 하는 자료형)
// alert 등의 문자열을 기대하는 연산을 수행할 때는, hint = string
// 수학적 연산을 적용하려 할 때는, hint = number
// 확실치 않을 때는, hint = default

// Symbol.toPrimitive
let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint){
        alert(`hint: ${hint}`);
        return hint == string ? `{name: "$this.name"}` : this.money;
    }
};

alert(user); // hint = string // {name: "John"}
alert(+user); // hint = number // 1000
alert(user + 500) // hint = default // 1500

// toString과 valueOf
// hint = string인 경우, toString -> valueOf 순
// 그 외, valueOf -> toString
// toString은 문자열 "[object Object]"를 반환
// valueOf는 객체 자신을 반환

let user = {name: "John"};

alert(user); // [object Object]
alert(user.valueOf() === user); // true

let user = {
    name: "John",
    money: 1000,

    // hint가 "string"인 경우
    toString(){
        return `{name: "${this.name}"}`;
    },

    // hint가 "number" or "default"인 경우
    valueOf(){
        return this.money;
    }
};

alert(user); // hint = string // {name: "John"}
alert(+user); // hint = number // 1000
alert(user + 500) // hint = default // 1500

// 추가 형 변환: 연산자 * -> 피연산자를 숫자형으로 변환
let obj = {
    // 다른 메서드가 없으면 toString에서 모든 형 변환을 처리
    toString(){
        return "2";
    }
};

alert(obj * 2); // 4 // 문자열이 숫자열로 변환
alert(obj + 2); // 22 // 문자열끼리의 병합