const title = React.createElement(
  'h1',
  {id: 'main-title', title: 'This is a title'},
  'My First React Element');
//title: React Element
console.log(title);

const desc = React.createElement(
  'p', null, 'This is a Description'
);

const header = React.createElement('header', null, title, desc);

ReactDOM.render(header, document.getElementById('root'));