//  就算差值
let real = 0;
function timer() {
 
  let speed = 50, // 设定间隔
    counter = 1,  // 计数
    start = new Date().getTime();

  function instance() {
    let ideal = (counter * speed),
      real = (new Date().getTime() - start);

    counter++;

    let diff = (real - ideal);
    console.log('ideal = ', ideal, 'real = ', real, 'diff = ', diff);

    window.setTimeout(function () { instance(); }, speed);
  };

  window.setTimeout(function () { instance(); }, speed);
}
timer();
 