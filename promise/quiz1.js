// 請問下列程式碼印出的順序為何？

function syncF() {
  console.log(1);

  setTimeout(() => {
    console.log(2);
  }, 0);
  console.log(3);
}

console.log(4);
syncF();
console.log(5);

//執行結果:4 > 1 > 3 > 5 > 2 

//第十二行 console.log(4)
//function syncF() 依序執行：
  //第四行 console.log(1)
  //第七行 console.log(2) setTimeout會去queue排隊等待
  //第九行 console.log(3)
  //第十四行 console.log(5)
//stack已空，event loop把queue中拉到stack執行
  //第七行 console.log(2)

//TODO：分成macro-task/micro-task

