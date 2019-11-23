const players = [
  {id: 1, name: 'LDK', score: 10},
  {id: 2, name: 'PARK', score: 20},
  {id: 3, name: 'KIM', score: 30},
  {id: 4, name: 'HONG', score: 40}
]


//함수선언식
/*function Header(){
  return (
    <header className="header">
      <h1 className="h1">Scoreboard</h1>
      <span className="stats">Player: 1</span>
    </header>
  )
}*/

//함수표현식
/*const Header = (){
  return (
    <header className="header">
      <h1 className="h1">Scoreboard</h1>
      <span className="stats">Player: 1</span>
    </header>
  )
};*/

//애로우 펑션
const Header = (props) => {
  console.log(props);
  return (<header className="header">
      <h1 className="h1">{props.title}</h1>
      <span className="stats">Player: {props.totalPlayers}</span>
    </header>
  )
};

//함수선언식
/*function Player (){
  return (<div className="player">
    <span className="player-name">LCY</span>
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">35</span>
        <button className="counter-action increment"> + </button>
      </div>
  </div>
  );
}*/

//애로우펑션
const Player = (props) => (<div className="player">
    <span className="player-name">{props.name}</span>
    <Counter score={props.score}/>
  </div>
);

//class component형 Counter
class Counter extends React.Component {
  /*  constructor(){
      super();
      this.state = {
        score: 10
      }
    }*/
  state = {
    score: 10
  }

  incrementScore() {
    //console.log('incrementScore',this);
    this.setState({score : this.state.score +1});
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> -</button>
        <span className="counter-score">{this.props.score} </span>
        <button className="counter-action increment" onClick={this.incrementScore.bind(this)}>+</button>
      </div>
    )
  }
}

//함수형 Counter
/*const Counter = (props) => (
  <div className="counter">
    <button className="counter-action decrement"> -</button>
    <span className="counter-score">{props.score} </span>
    <button className="counter-action increment"> +</button>
  </div>
);*/

const App = (props) => (
  <div className="scoreboard">
    <Header title="My Scoreboard" totalPlayers={11}/>
    {
      props.initialPlayers.map((player) => (
        <Player name={player.name} score={player.score} key={player.key}/>
      ))
    }
  </div>
)


ReactDOM.render(<App initialPlayers={players}></App>, document.getElementById('root'));