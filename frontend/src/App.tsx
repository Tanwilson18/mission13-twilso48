import React, { useState } from 'react';
import './App.css';

function GoButton(props: any) {
  return (
    <div>
      <button onClick={props.click}>G0!</button>
      <br />
    </div>
  );
}

function AmountGo(props: any) {
  return <label>{props.num}</label>;
}

function App() {
  const [count, setcount] = useState(0);

  return (
    <div>
      <GoButton click={() => setcount(count + 1)} />
      <AmountGo num={count} />
    </div>
  );
}

export default App;
