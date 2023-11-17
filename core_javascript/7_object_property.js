/**
 * 7.1 프로퍼티 플래그와 설명자
 */
// 프로퍼티 플래그
// writable: true이면 수정 가능
// enumerable: true이면 반복문 사용해서 나열 가능
// configurable: true이면 프로퍼티 삭제나 플래그 수정 가능
let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
// obj: 정보를 얻고자 하는 객체
// propertyName: 정보를 얻고자 하는 객체 내 프로퍼티

let user = {
    name: "John"
};
  
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  
alert( JSON.stringify(descriptor, null, 2 ) );
/* property descriptor:
{
    "value": "John",
    "writable": true,
    "enumerable": true,
    "configurable": true
}
*/

Object.defineProperty(obj, propertyName, descriptor) // 플래그 변경
// obj, propertyName: 설명자를 적용하고 싶은 객체와 프로퍼티
// descriptor: 적용하고자하는 프로퍼티 설명자
// 플래그 값을 명시하지 않으면, false
Object.defineProperty(user, "name", {
    writable: false
});

Object.defineProperty(user, "toString", {
    enumerable: false
});

// Object.defineProperties: 프로퍼티 여러 개를 한번에 정의
// Object.getOwnPropertyDescriptors: 프로퍼티 설명자를 전부 한번에 가져옴
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj)); // 플래그도 함께 복사 가능

// 객체 수정을 막아주는 메서드들
// Object.preventExtensions(obj): 새로운 프로퍼티 추가 불가
// Object.seal(obj): 새로운 프로퍼티 추가나 기존 프로퍼티 삭제 불가. = configurable: false
// Object.freeze(obj): 새로운 프로퍼티 추가나 기존 프로터피 삭제, 수정 불가. = configurable: false, writable: false
// Object.isExtensible(obj): 새로운 프로퍼티 추가 가능 여부. true/false
// Object.isSealed(obj): 프로퍼티 추가, 삭제 불가능하고 모든 프로퍼티가 cocnfigurable: false면, true
// Object.isFroaen(obj): 프로퍼티 추가, 삭제, 변경이 불가능하고 모든 프로퍼티가 configurable: false, writable: false이면, true


/**
 * 7.2 프로퍼티 getter와 setter
 */
// 데이터 프로퍼티(data property)
// 접근자 프로퍼티(accessor property): get, set을 담당

// getter와 setter
let obj = {
    get propName() {
      // getter: obj.propName을 실행할 때 실행되는 코드
    },
  
    set propName(value) {
      // setter: obj.propName = value를 실행할 때 실행되는 코드
    }
};

let user = {
    name: "John",
    surname: "Smith",
  
    get fullName() { // getter
      return `${this.name} ${this.surname}`;
    },

    set fullName(value) { // setter
        [this.name, this.surname] = value.split(" ");
    }
};
  
alert(user.fullName); // John Smith

// 접근자 프로퍼티 설명자
// get: 인수가 없는 함수. 프로퍼티를 읽을 때 동작
// set: 인수가 하나인 함수. 프로퍼티에 값을 쓸 때 호출
// enumerable: 데이터 프로퍼티와 동일
// configurable: 데이터 프로퍼티와 동일

Object.defineProperty(user, 'fullName', {
    get() {
      return `${this.name} ${this.surname}`;
    },
  
    set(value) {
      [this.name, this.surname] = value.split(" ");
    }
});

// getter와 setter 활용하기
let user = {
    get name() {
      return this._name;
    },
  
    set name(value) {
      if (value.length < 4) {
        alert("입력하신 값이 너무 짧습니다. 네 글자 이상으로 구성된 이름을 입력하세요.");
        return;
      }
      this._name = value;
    }
};
  
user.name = "Pete";
alert(user.name); // Pete

// 호환성을 위해 사용하기
function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;
  
    // age는 현재 날짜와 생일을 기준으로 계산됩니다.: getter
    Object.defineProperty(this, "age", {
      get() {
        let todayYear = new Date().getFullYear();
        return todayYear - this.birthday.getFullYear();
      }
    });
}
  
let john = new User("John", new Date(1992, 6, 1));





