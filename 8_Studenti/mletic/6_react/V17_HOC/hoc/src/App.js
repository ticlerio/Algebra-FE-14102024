import './App.css';

function Button(props) {
  return <button {...props}></button>;
}

function withColor(Element) {
  //ovo je ulazni element
  return function ({ boja, ...otherProps }) {
    return <Element {...otherProps} style={{ backgroundColor: boja }} />; //ovo je izlazni element
  };
}
const ColoredElement = withColor(Button);

function App() {
  return (
    <div className="App">
      <h1 style={styles.h1stil}>Hello</h1>
      <h2 style={{ color: 'yellow', backgroundColor: 'green' }}>Hello</h2>
      <ColoredElement boja="red">Ja sam crven</ColoredElement>
      <ColoredElement boja="green">Ja sam zelen</ColoredElement>
    </div>
  );
}

export default App;

const styles = {
  h1stil: {
    color: 'blue',
    backgroundColor: 'lightGray',
  },
};
