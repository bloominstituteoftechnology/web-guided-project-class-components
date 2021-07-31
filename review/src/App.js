import React, { useState } from "react";

const Person = (props) => {
  return (
    <div>
      <h1>Hello {props.name}.</h1>
      <h1>
        That is a great {props.name}. Keep your name {props.name}!
      </h1>
      <h2>You are a bad ass {props.age}.</h2>
    </div>
  );
};

const App = () => {
  // const name = "Rick";
  const [name, setName] = useState("Rick");
  const [age, setAge] = useState(54);
  const handleClick = () => {
    console.log("clicked in method");
    setName("Sara");
    setAge(44);
  };
  return (
    <div>
      <Person name={name} age={age}/>
      {/* <h1>Hello {name}.</h1>
      <h1>That is a great {name}. Keep your name {name}!</h1>
      <h2>You are a bad ass {age}.</h2> */}
      <button onClick={handleClick}>Click me bitch</button>
    </div>
  );
};

export default App;
