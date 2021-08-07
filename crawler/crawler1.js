const axios = require("axios");
const moment = require("moment");

axios
  .get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
    params: {
      response: "json",
      date: moment().format("YYYYMMDD"),
      stockNo: 2881,
    },
  })
  .then((response) => {
    console.log(response.data);
  });
