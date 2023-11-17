/**
 * 6.1 재귀와 스택
 */

// 재귀
function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
}
  
alert( pow(2, 3) ); // 8

// 실행컨텍스트와 스택
// 실행 중인 함수의 실행 절차에 대한 정보는 해당 함수의 실행컨텍스트(execution context)에 저장됨

let company = {
    sales: [{
      name: 'John',
      salary: 1000
    }, {
      name: 'Alice',
      salary: 1600
    }],
  
    development: {
      sites: [{
        name: 'Peter',
        salary: 2000
      }, {
        name: 'Alex',
        salary: 1800
      }],
  
      internals: [{
        name: 'Jack',
        salary: 1300
      }]
    }
}; // 직원의 임금 더하기

function sumSalaries(department) {
    if (Array.isArray(department)) { // 첫 번째 경우
      return department.reduce((prev, current) => prev + current.salary, 0); // 배열의 요소를 합함
    } else { // 두 번째 경우
      let sum = 0;
      for (let subdep of Object.values(department)) {
        sum += sumSalaries(subdep); // 재귀 호출로 각 하위 부서 임직원의 급여 총합을 구함
      }
      return sum;
    }
}
  
alert(sumSalaries(company)); // 7700


/**
 * 6.2 나머지 매개변수와 스프레드 문법
 */

// 나머지 매개변수 ...: 항상 마지막에 있어야 함
function sumAll(...args) { // args는 배열의 이름입니다.
    let sum = 0;
  
    for (let arg of args) sum += arg;
  
    return sum;
}

alert( sumAll(1) ); // 1
alert( sumAll(1, 2) ); // 3
alert( sumAll(1, 2, 3) ); // 6

// arguments 객체: 유사 배열 객체
function showName() {
    alert( arguments.length );
    alert( arguments[0] );
    alert( arguments[1] );
}

showName("Bora", "Lee"); // 2, Bora, Lee
showName("Bora"); // 1, Bora, undefined

// 스프레드 문법
let arr = [3, 5, 1];

alert( Math.max(arr) ); // NaN
alert( Math.max(...arr) ); // 5: 배열을 인수 목록으로 바꿈

let arr = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr, 2, ...arr2];

// 배열과 객체의 복사본 만들기
let arr = [1, 2, 3];
let arrCopy = [...arr];

let obj = { a: 1, b: 2, c: 3 };
let objCopy = { ...obj }; // 참조가 다름 -> 복사본은 영향받지 않음


/**
 * 6.3 변수의 유효범위와 클로저
 */
// 코드 블록: {} 안에서 선언한 변수는 블록 안에서만 사용 가능
// 중첩 함수: 


/**
 * 6.4 오래된 var
 */


/**
 * 6.5 전역 객체
 */
// 브라우저 환경에서 : window
// 표준화: globalThis
// let이나 const가 아닌 var로 선언한 전역 함수나 전역 변수

alert("Hello");
window.alert("Hello"); // 위와 동일

window.currentUser = { // 모든 스크립트에서 현재 사용자에게 접근 가능
    name: "John"
  };

// 폴리필 사용하기
if (!window.Promise) {
    window.Promise = ... // 모던 자바스크립트에서 지원하는 기능을 직접 구현함
  }


/**
 * 6.6 객체로서의 함수와 기명 함수 표현식
 */

// 'name' 프로퍼티: 함수 이름 가져옴
function sayHi() {
    alert("Hi");
}
  
alert(sayHi.name); // sayHi

let sayHi = function() {
    alert("Hi");
};
  
alert(sayHi.name); // sayHi :익명 함수여도 자동으로 이름 할당

// length 프로퍼티

// 커스텀 프로퍼티

// 기명 함수 표현식: 이름이 있는 함수 표현식
// 이름을 사용해 함수 표현식 내부에서 자기 자신 참조 가능
// 기명 함수 표현식 외부에서는 이름 사용 불가능
let sayHi = function(who) {
    alert(`Hello, ${who}`);
};

let sayHi = function func(who) { // 기명 함수 표현식
    alert(`Hello, ${who}`);
};


/**
 * 6.7 new Function 문법
 */
 let func = new Function ([arg1, arg2, ...argN], functionBody);

 let sum = new Function('a', 'b', 'return a + b');
 let sayHi = new Function('alert("Hello")');

// 클로저: new Function을 이용해 만든 함수는 외부 변수에 접근 불가능. 오직 전역 변수에만 접근 가능
function getFunc() {
    let value = "test";
  
    let func = new Function('alert(value)');
  
    return func;
}
  
getFunc()(); // ReferenceError: value is not defined


/**
 * 6.7 setTimeout과 setInterval을 이용한 호출 스케줄링
 */
// setTimeout: 일정 시간이 지난 후에 함수를 실행
let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
// func|code: 실행하고자 하는 코드. 함수 또는 문자열
// delay: 실행 전 대기 시간. 단위는 밀리초. 기본값: 0
// arg1,... : 함수에 전달할 인수들
function sayHi(who, phrase) {
    alert( who + ' 님, ' + phrase );
}
  
setTimeout(sayHi, 1000, "홍길동", "안녕하세요."); // 홍길동 님, 안녕하세요.

// clearTimeout으로 스케줄링 취소하기
let timerId = setTimeout(...);
clearTimeout(timerId);

// setInterval: 함수를 주기적응으로 실행
let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)

let timerId = setInterval(() => alert('째깍'), 2000); // 2초 간격으로 메시지를 보여줌
setTimeout(() => { clearInterval(timerId); alert('정지'); }, 5000); // 5초 후에 정지


/**
 * 6.8 call/apply와 데코레이터, 포워딩
 */
// 코드 변경 없이 캐싱 기능 추가하기
function slow(x) {
    // CPU 집약적인 작업이 여기에 올 수 있습니다.
    alert(`slow(${x})을/를 호출함`);
    return x;
}
  
function cachingDecorator(func) {
    let cache = new Map();
  
    return function(x) {
      if (cache.has(x)) {    // cache에 해당 키가 있으면
        return cache.get(x); // 대응하는 값을 cache에서 읽어옵니다.
      }
  
      let result = func(x);  // 그렇지 않은 경우엔 func를 호출하고,
  
      cache.set(x, result);  // 그 결과를 캐싱(저장)합니다.
      return result;
    };
}
  
slow = cachingDecorator(slow);
  
alert( slow(1) ); // slow(1)이 저장되었습니다.
alert( "다시 호출: " + slow(1) ); // 동일한 결과
  
alert( slow(2) ); // slow(2)가 저장되었습니다.
alert( "다시 호출: " + slow(2) ); // 윗줄과 동일한 결과

// func.call을 사용해 컨텍스트 지정하기
func.call(context, arg1, arg2, ...) // 메서드를 호출하면 메서드의 첫 번째 인수가 this, 이어지는 인수가 func의 인수가 된 후, func이 호출

let worker = {
    someMethod() {
      return 1;
    },
  
    slow(x) {
      alert(`slow(${x})을/를 호출함`);
      return x * this.someMethod(); // (*)
    }
};
  
function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
      if (cache.has(x)) {
        return cache.get(x);
      }
      let result = func.call(this, x); // 이젠 'this'가 제대로 전달됩니다.
      cache.set(x, result);
      return result;
    };
}
  
worker.slow = cachingDecorator(worker.slow); // 캐싱 데코레이터 적용
  
alert( worker.slow(2) ); // 제대로 동작합니다.
alert( worker.slow(2) ); // 제대로 동작합니다. 다만, 원본 함수가 호출되지 않고 캐시 된 값이 출력됩니다.

// 여러 인수 전달하기
let worker = {
    slow(min, max) {
      alert(`slow(${min},${max})을/를 호출함`);
      return min + max;
    }
};
  
function cachingDecorator(func, hash) {
    let cache = new Map();
    return function() {
      let key = hash(arguments); // (*)
      if (cache.has(key)) {
        return cache.get(key);
      }
  
      let result = func.call(this, ...arguments); // (**)
  
      cache.set(key, result);
      return result;
    };
}
  
function hash(args) {
    return args[0] + ',' + args[1];
}
  
worker.slow = cachingDecorator(worker.slow, hash);
  
alert( worker.slow(3, 5) ); // 제대로 동작합니다.
alert( "다시 호출: " + worker.slow(3, 5) ); // 동일한 결과 출력(캐시된 결과)

// func.apply
func.apply(context, args) // apply는 func의 this를 context로 고정해주고, 유사 배열 객체인 args를 인수로 사용할 수 있게 해줍니다.

func.call(context, ...args); // 전개 문법을 사용해 인수가 담긴 배열을 전달하는 것과 / 인수가 이터러블 형태
func.apply(context, args);   // call을 사용하는 것은 동일합니다. / 유사 배열 형태의 args만 받음

let wrapper = function() {
    return func.apply(this, arguments);
  };

// 메서드 빌리기
function hash() {
    alert( arguments.join() ); // Error: arguments.join is not a function
    alert( [].join.call(arguments) ); // 1,2
  }


/**
 * 6.10 함수 바인딩
 */

// 사라진 this
let user = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    }
};
  
setTimeout(user.sayHi, 1000); // Hello, undefined! : 객체에서 분리된 함수인 user.sayHi가 전달됨(user 컨텍스트를 잃어버림)

// 방법 1: 래퍼
setTimeout(function() {
    user.sayHi(); // Hello, John!
}, 1000);

setTimeout(() => user.sayHi(), 1000); // Hello, John!

// 방법 2: bind
let boundFunc = func.bind(context); // this가 context로 고정된 함수 func가 반환

let sayHi = user.sayHi.bind(user);

// 부분 적용
let bound = func.bind(context, [arg1], [arg2], ...);

function mul(a, b) {
    return a * b;
}
  
let double = mul.bind(null, 2);
alert( double(3) ); // = mul(2, 3) = 6

// 컨텍스트 없는 부분 적용
function partial(func, ...argsBound) {
    return function(...args) { // (*)
      return func.call(this, ...argsBound, ...args);
    }
}
  
// 사용법:
let user = {
    firstName: "John",
    say(time, phrase) {
      alert(`[${time}] ${this.firstName}: ${phrase}!`);
    }
};
  
// 시간을 고정한 부분 메서드를 추가함
user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());
  

/**
 * 6.11 화살표 함수 다시 살펴보기
 */

// 화살표 함수에는 this가 없습니다
let group = {
    title: "1모둠",
    students: ["보라", "호진", "지민"],
  
    showList() {
      this.students.forEach( // this: group
        student => alert(this.title + ': ' + student)
      );
    }
};
  
group.showList();

// 화살표 함수에는 arguments가 없습니다
function defer(f, ms) {
    return function() {
      setTimeout(() => f.apply(this, arguments), ms)
    };
}
  
function sayHi(who) {
    alert('안녕, ' + who);
}
  
let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("철수"); // 2초 후 "안녕, 철수"가 출력



















