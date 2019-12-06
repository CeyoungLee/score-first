class Counter {
  constructor() {
    console.log(this);//Counter
    setInterval(function () {console.log(this);}, 2000);//window
    setInterval(() => console.log(this), 4000);//Counter
    setInterval(fx5, 2000);//window
  }

  fx4() {
    console.log(this);//Counter
  }
}

function fx5() {
  console.log(this); //window
}

const counter1 = new Counter();
counter1.fx4();//Counter
fx5();