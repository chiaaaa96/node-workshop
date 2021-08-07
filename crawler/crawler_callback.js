const axios = require("axios");
const moment = require("moment");
const fs = require("fs");

fs.readFile("stock.txt", "utf-8", (err, stockCode) => {
  axios
    .get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
      params: {
        response: "json",
        date: moment().format("YYYYMMDD"),
        stockNo: stockCode,
      },
    })
    .then((response) => {
      console.log(response.data);
    });
});
