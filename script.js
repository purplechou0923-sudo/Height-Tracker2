let records = [];
let month = 0;

function recordHeight() {
  let date = document.getElementById("date").value;
  let height = Number(document.getElementById("height").value);

  if (date === "" || height === 0) {
    document.getElementById("result").innerHTML =
      "請輸入日期和身高！";
    return;
  }

  month++;

  let growth = 0;

  // 第一次紀錄沒有上一次身高可以比較
  if (records.length > 0) {
    growth = height - records[records.length - 1].height;
  }

  records.push({
    date: date,
    height: height,
    growth: growth
  });
allRecords.push({
  date: date,
  height: height,
  growth: growth
});

showAllRecords();
  // 顯示這次紀錄
  document.getElementById("result").innerHTML =
    "已紀錄！你這次長高了 " + growth + " 公分，請一個月後繼續登記！";

  // 顯示所有紀錄
  document.getElementById("history").innerHTML +=
    "<p>第 " + month + " 個月｜" +
    date + "｜身高：" +
    height + " 公分｜長高：" +
    growth + " 公分</p>";

  // 第12個月
  if (month === 12) {
    let totalGrowth = 0;

    for (let i = 0; i < records.length; i++) {
      totalGrowth += records[i].growth;
    }

    document.getElementById("result").innerHTML =
      "已紀錄！你這次長高了 " + growth +
      " 公分，請一個月後繼續登記！<br><br>" +
      "🎉 恭喜～你成功紀錄了一年！<br>" +
      "這一年你總共長高了 " +
      totalGrowth + " 公分！";

    // 清空，開始新的12個月
    records = [];
    month = 0;
  }

  // 清空輸入框
  document.getElementById("date").value = "";
  document.getElementById("height").value = "";
}
// 儲存所有月份的紀錄
let allRecords = [];

// 切換分頁
function showPage(page) {
  document.getElementById("mainPage").style.display = "none";
  document.getElementById("allRecordsPage").style.display = "none";

  document.getElementById(page).style.display = "block";
}

// 顯示所有身高紀錄
function showAllRecords() {
  let html = "";

  for (let i = 0; i < allRecords.length; i++) {
    html += "<p>日期：" + allRecords[i].date +
      "｜身高：" + allRecords[i].height +
      " 公分｜長高：" + allRecords[i].growth +
      " 公分</p>";
  }

  document.getElementById("allHistory").innerHTML =
    html || "目前還沒有身高紀錄！";
}