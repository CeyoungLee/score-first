// Student 라는 이름의 클래스를 생성하시오.
class Student{
  //name; // 속성으로 바로 추가하기 stage 3에서 추가된 바로 속성 추가하기
  constructor(name){// 생성자를 추가하시오.
    this.name = name;// 생성자에 name 파라메터를 받아서 name 속성에 할당하는 코드를 쓰시오
  }
  changeName(userName){// changeName이라는 이름의 메서드를 추가하시오.
    this.name = userName; // 이 메서드는 userName이라는 파라메터를 받아서 name 속성을 userName 값으로 업데이트해야한다.
  }
}

var user1 = new Student("Jane");// "Jane" 이라는 이름을 파라메터로 넘겨서 user1 변수명을 가진 인스턴스를 생성하시오
console.log(user1);

user1.changeName("Tom");// user1 인스턴스의 name 이 "Tom" 이 되도록 함수를 호출해서 변경해보자.
console.log(user1);// 값이 바뀌었는지 출력해서 확인해보자


// 생성자의 역할은 무엇인가?
// 생성자에 사용된 this는 무엇을 가르키는가?