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

let job = doWork("刷牙", 3000, true);
job.then(
  function(resolve) {
    console.log("第一個函式被呼叫",resolve);
  },
  function(reject) {
    console.log("第二個函式被呼叫",reject);
  }
);