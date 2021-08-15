async function asyncF() {
    console.log(1);
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(2);
        resolve();
      }, 0);
    });
    console.log(3);
  }
  
  console.log(4);
  asyncF();
  console.log(5);

//執行結果:4 > 1 > 5 > 2 > 3 

//第十二行 console.log(4)
//function asyncF()
  //第二行 console.log(1)
//await讓出線程：
  //第五行 console.log(2) setTimeout會去queue排隊等待
  //第九行 console.log(3) Promise結束後執行
//第十四行 console.log(5)
//stack已空，event loop把queue中拉到stack執行
  //第五行 console.log(2)
//第九行 console.log(3)

//TODO：分成macro-task/micro-task




