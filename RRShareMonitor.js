// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: film;
/*
 * Author: evilbutcher
 * Github: https://github.com/evilbutcher
 * 本脚本使用了@Gideon_Senku的Env.scriptable，感谢！
 */
const scripts = [
  {
    moduleName: "RRShareMonitor",
    url:
      "https://raw.githubusercontent.com/GideonSenku/Scriptable/master/RRShare/RRShareMonitor.js",
  },
];
const $ = new importModule("Env")();
const res = await getinfo();
if (config.runsInWidget) {
  let widget = createWidget(res);
  Script.setWidget(widget);
  Script.complete();
} else {
  items = [];
  for (var i = 0; i < 6; i++) {
    var item = res[i]["file_name"];
    items.push(item);
  }
  console.log(items);
}
update();

function createWidget(res) {
  items = [];
  for (var i = 0; i < 6; i++) {
    var item = res[i]["file_name"];
    items.push(item);
  }

  const w = new ListWidget();
  const bgColor = new LinearGradient();
  bgColor.colors = [new Color("#1c1c1c"), new Color("#29323c")];
  bgColor.locations = [0.0, 1.0];
  w.backgroundGradient = bgColor;
  w.centerAlignContent();

  const firstLine = w.addText(`[📣]人人影视`);
  firstLine.textSize = 12;
  firstLine.textColor = Color.white();
  firstLine.textOpacity = 0.7;

  const top1Line = w.addText(`•${items[0]}`);
  top1Line.textSize = 12;
  top1Line.textColor = Color.white();

  const top2Line = w.addText(`•${items[1]}`);
  top2Line.textSize = 12;
  top2Line.textColor = new Color("#6ef2ae");

  const top3Line = w.addText(`•${items[2]}`);
  top3Line.textSize = 12;
  top3Line.textColor = new Color("#7dbbae");

  const top4Line = w.addText(`•${items[3]}`);
  top4Line.textSize = 12;
  top4Line.textColor = new Color("#ff9468");

  const top5Line = w.addText(`•${items[4]}`);
  top5Line.textSize = 12;
  top5Line.textColor = new Color("#ffcc66");

  const top6Line = w.addText(`•${items[5]}`);
  top6Line.textSize = 12;
  top6Line.textColor = new Color("#ffa7d3");
  w.presentMedium();
  return w;
}

async function getinfo() {
  const zmzRequest = {
    url: `http://file.apicvn.com/file/list?page=1&order=create_time&sort=desc`,
    headers: {
      Host: "file.apicvn.com",
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": "Mozilla/5.0",
    },
  };

  const res = await $.get(zmzRequest);
  log(res);
  return res;
}

//更新代码
function update() {
  log("🔔更新脚本开始!");
  scripts.forEach(async (script) => {
    await $.getFile(script);
  });
  log("🔔更新脚本结束!");
}
