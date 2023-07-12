function Intro(props) {
  return (
    <div>
        <h1>INTRODUCTION</h1>
        <p>This is the introduction description. My name is {props.name}.</p>
        <button onClick={() => props.clicked()}>Click me!</button>
    </div>
  );
}

export default Intro;