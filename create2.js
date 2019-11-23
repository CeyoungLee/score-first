//JSX 식
const title = (
  <h1 id='main-title'
      title='This is a title'>
    Je suis un titre.
  </h1>
);
//title: React Element

//const desc = React.createElement('p', null, 'This is a Description');

const desc = <p className="scoreboard"> Ceci est une description.</p>

const header = <header>{title} {desc}</header>

ReactDOM.render(header, document.getElementById('root'));