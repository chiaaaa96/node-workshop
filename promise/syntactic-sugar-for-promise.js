let doWork = function (job, timer, isOK) {
  return new Promise((resolve, reject) => {
    console.log("in promise");
    setTimeout(() => {
      let dt = new Date();
      if (isOK) {
        resolve(`完成工作: ${job} at ${dt.toISOString()}`);
      } else {
        reject(`失敗了 ${job}`);
      }
    }, timer);
  });
};

//syntactic sugar for Promise
async function Healthy() {
  try {
    //專注在成功
    let healthy1 = await doWork("刷牙", 1000, true);
    console.log(healthy1);
    let healthy2 = await doWork("跑步", 2000, true);
    console.log(healthy2);
    EatingMcdonalds; //error
    let healthy3 = await doWork("喝豆漿", 3000, true);
    console.log(healthy3);
  } catch (err) {
    //專注在失敗
    console.log("CouchPotato");
  }
}

Healthy(); //will get a resolved promise.

//async要寫在function前面
//async函式一定會回傳一個Promise物件
//await要放在async函式裡面
//async/await的錯誤處理方法：
//catch方法(就如平時寫Promise一樣)
//try...catch方法
