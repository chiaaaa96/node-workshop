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

let job1 = doWork("刷牙", 1000, true);
job1
  .then((resolve) => {
    console.log("第一個函式被呼叫", resolve);
    return doWork("跑步", 1000, true);
  })
  .then((resolve) => {
    console.log("第一個函式被呼叫", resolve);
    return doWork("喝豆漿", 1000, true);
  })
  .then((resolve) => {
    console.log("第一個函式被呼叫", resolve);
  })
  .catch((reject) => {
    console.log("reject", error);
  })
  .finally(() => {
    console.log("finally");
  });
