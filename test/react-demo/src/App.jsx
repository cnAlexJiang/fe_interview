import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    
    function timer() {
      var speed = 50, // 设定间隔
        counter = 1,  // 计数
        start = new Date().getTime();

      function instance() {
        var ideal = (counter * speed),
          real = (new Date().getTime() - start);

        counter++;
        form.ideal.value = ideal; // 记录理想值
        form.real.value = real;   // 记录真实值

        var diff = (real - ideal);
        form.diff.value = diff;  // 差值

        window.setTimeout(function () { instance(); }, speed);
      };

      window.setTimeout(function () { instance(); }, speed);
    }
    timer();


  }, [])

  return (
    <div>
      <button>{count}</button>
    </div>
  )
}

export default App
