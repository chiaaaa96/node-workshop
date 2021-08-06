# Code review 的重要性

## Table of Contents

- [Code review 的重要性](#code-review-的重要性)
  - [Table of Contents](#table-of-contents)
  - [1.目的](#1目的)
  - [2.code review check list](#2code-review-check-list)
  - [3.注意事項](#3注意事項)
  - [4.Fun Facts](#4fun-facts)

## 1.目的

- **減少 Bug**：
  團隊可互相幫助找出錯誤以確保品質
- **維持一致性與可讀性**：
  代碼可讀性較高時，有助於團隊快速理解、維護及擴展
- **互助學習**

  - 對於菜鳥工程師而言，可快速了解公司的編碼風格及習慣，也可通過 review 代碼的評論去學習。
  - 對於團隊而言可分享經驗、技巧和編碼技能，達到知識共享。

---

## 2.code review check list

- **是否符合公司之編碼習慣**：
  在編寫的代碼中，使用的方式不是較好或存在不合理的地方，例如：for 循環中 break,continue 的方式，通常的循环都可以先寫 break，再寫 continue。

```gherkin=
for (CommonAd commonAd : candidateApps) {
  	if(xxx){
      break;
  	}
  	if(xxx){
      continue;
  	}
    xxx;
}
```

- **是否符合公司之命名規範**：
  沒有按照規範來，在命名上容易出現隨心所欲的狀況。
- **是否有替代碼註解**：
  對以後維護有很重要的意義，例如：在比較複雜的邏輯需要增加注釋。

## 3.注意事項

- **公司應訂定一套規範**：編碼規範+技術規範+數據庫規範，讓規範標準化。
- 開始 review 前，應先**通過代碼掃描工具進行前期掃描**，避免出現比較多的基本問題。
- **PR 盡量要小**，若是較大的改動應分批提交，比較容易發現代碼中可能存在的問題。

## 4.Fun Facts

> Refer to Alberto Bacchelli.(2018). [“Modern Code Review: A Case Study at Google”](https://research.google/pubs/pub47025/)

作者通過 log 分析，得出關於 Google 工程師 CR 的相關數據：

- Google 工程師**CR 的完成時間**為 4 小時(中位數)。
- **CR 修改的行數**是 24(中位數)，有超過 10%的變動**只修改了 1 行**。
- 有 35%的變動**只涉及 1 個文件**，有 95%的變動**涉及少於 10 個文件**。
- **只有一個 reviewer**的變動有 75%以上。
