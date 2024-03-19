import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>

    <p class="read-the-docs">
      Click on the Vite and React logos to learn more
    </p>
    <p>ideal: <input type="text" id="ideal" /></p>
    <p>real: <input type="text" id="real" /></p>
    <p>diff: <input type="text" id="diff" /></p>

  </div>
`

setupCounter(document.querySelector('#counter'))
