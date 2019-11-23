function person() {
  this.arms = 2;
  this.legs = 2;
}

// arms의 출력 결과는 무엇인가?
// console.log(arms);
// Person() 실행결과는 무엇인가? 그 이유는?
console.log(person());//undefined 리턴이 없기 때문.
// arms의 출력 결과는 무엇인가?  여기서 사용된 this는 무엇인가?
console.log(arms); //2. person 호출 했기 때문에 this arms가 먹힙니다.