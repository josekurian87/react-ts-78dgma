import * as React from 'react';
import './style.css';

export default function Home() {
  let [count, setCount] = React.useState(0);
  return (
    <div>
      <h1 onClick={() => setCount(count + 1)}>Hello StackBlitz${count}!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
