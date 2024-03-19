function timer() {
    let speed = 50, // 时间差
    counter = 1, 
    start = new Date().getTime();
    
    function instance() {
     let ideal = (counter * speed), // 理想的用时
     real = (new Date().getTime() - start);  // shi'ji
     counter++; // 次数
 
     let diff = (real - ideal); // 理想值  和 实际值的 差值
     console.log('ideal = ', ideal, 'real = ', real, 'diff = ', diff);
      window.setTimeout(function() { instance(); }, (speed - diff)); // 通过系统时间进行修复
 
    };
    
    window.setTimeout(function() { instance(); }, speed);
 }

timer();
