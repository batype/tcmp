import { solar2lunar } from './shichen';
import { formatTime, getData } from './data';

var shichen = solar2lunar();

var timerbagua;

var turntable = setInterval(function () {
  drawTurntable(formatTime(0, 'hh:mm:ss'));
  var now = new Date();
  if (now.getMinutes() == 0 && now.getSeconds() == 0) {
    RefreshData();
  }
}, 1000);

export function RefreshData() {
  shichen = solar2lunar();
  console.log(JSON.stringify(shichen));
  document.getElementById('dataLGBF').innerText = shichen.LGBF;
  document.getElementById('dataLGBFP').innerText = shichen.LGBFP;
  document.getElementById('lgBFimg1').src = require('../img/lgbf' +
    shichen.indexLGBF +
    '.png');
  document.getElementById('lgBFimg2').src = require('../img/lgbfp' +
    shichen.indexLGBF +
    '.png');

  var data = getData();
  document.getElementById('dataimg1').src = data[0];
  document.getElementById('dataimg2').src = data[1];
  document.getElementById('datatext').innerText = data[2];
}

export function BaGua() {
  var ctx = document.getElementById('bagua').getContext('2d'); //创建 context 对象
  var w = document.getElementById('center').clientWidth; //宽
  var h = document.getElementById('center').clientHeight; //高
  var x = w / 2; // 圆心横坐标
  var y = h / 2; // 圆心纵坐标
  var r = (Math.min(w, h) / 2) * 0.9; //圆半径

  document.getElementById('bagua').setAttribute('width', w);
  document.getElementById('bagua').setAttribute('height', h);
  document.getElementById('bagua').style.top = y * 1 + 'px';
  ctx.translate(x, y);
  clearInterval(timerbagua);
  timerbagua = setInterval(function () {
    //黑色半圆
    ctx.rotate(Math.PI / 180);
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(0, 0, r / 3, 0, Math.PI, false);
    ctx.closePath();
    ctx.fill();
    //四分之一处黑色整圆
    ctx.beginPath();
    ctx.arc(-r / 6, 0, r / 6, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = 'black';
    ctx.fill();
    // 四分之三处白色整圆
    ctx.beginPath();
    ctx.arc(r / 6, 0, r / 6, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fillStyle = '#fff';
    ctx.fill();
    //在绘制整圆
    ctx.beginPath();
    ctx.arc(-r / 6, 0, r / 20, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = '#fff';
    ctx.fill();
    //在绘制整圆
    ctx.beginPath();
    ctx.arc(r / 6, 0, r / 20, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fillStyle = 'black';
    ctx.fill();
  }, 10);
}

export function drawTurntable(timeStr) {
  let turntableCanvas = document.getElementById('turntableCanvas');
  if (turntableCanvas) {
    var ctx = document.getElementById('turntableCanvas').getContext('2d'); //获取画笔

    var w = document.getElementById('center').clientWidth; //宽
    var h = document.getElementById('center').clientHeight; //高
    document.getElementById('turntableCanvas').setAttribute('width', w);
    document.getElementById('turntableCanvas').setAttribute('height', h);

    var x = w / 2; // 圆心横坐标
    var y = h / 2; // 圆心纵坐标
    var r = (Math.min(w, h) / 2) * 0.9; //圆半径
    var hh = timeStr.split(':')[0]; //截取小时（24小时制）
    var mm = timeStr.split(':')[1]; //截取小时（24小时制）
    var ss = timeStr.split(':')[2]; //截取小时（24小时制）

    ctx.strokeStyle = '#EFE7AF'; //设置边框颜色。（背景色）
    ctx.lineWidth = 1; //设置边框宽度
    ctx.clearRect(0, 0, w, h);
    ctx.arc(x, y, r, 0, 2 * Math.PI); //画大转盘圆
    ctx.fillStyle = '#13599a'; //设置填充色
    ctx.fill(); //填充大转盘圆

    for (var i = 0; i < 12; i++) {
      //画扇形分割线
      ctx.beginPath();
      ctx.arc(
        x,
        y,
        r,
        ((1 / 6) * i - 7 / 12) * Math.PI,
        ((1 / 6) * (i + 1) - 7 / 12) * Math.PI,
      ); //画扇形起始位置第二象限偏Y轴15度
      ctx.lineTo(x, y); //链接圆心
      ctx.stroke();

      //显示画笔走过的路径
      if (
        (hh < 23 && parseInt((parseInt(hh) + 1) / 2) == i) ||
        (hh == 23 && i == 0)
      ) {
        //改变指针指示区域颜色
        ctx.fillStyle = '#FF9E04';
        ctx.fill();
      }
    }
    ctx.beginPath(); //画转盘小圆
    ctx.arc(x, y, r / 1.3, 0, 2 * Math.PI, false);
    ctx.stroke();

    //画指针圆
    ctx.beginPath();
    ctx.arc(x, y, r / 2.3, 0, 2 * Math.PI, false);
    ctx.fillStyle = '#f81033';
    ctx.fill();
    ctx.save(); //保存画笔状态

    //画指针
    ctx.beginPath();
    ctx.translate(x, y); //设置旋转中心
    ctx.rotate((((hh * 30 + mm * 0.5 + ss * 0.0083) / 2) * Math.PI) / 180); //时辰旋转角度
    //ctx.rotate((hh * 30 + mm * 0.5 + ss * 0.0083) * Math.PI / 180) //时针旋转角度
    //ctx.rotate((ss*6 ) * Math.PI / 180) //秒针旋转角度
    ctx.moveTo(r / 5, 0); //从旋转中心x偏移r/5
    ctx.lineTo(-r / 5, 0); //链接旋转中心x反方向偏移r/5
    ctx.lineTo(0, -r / 1.68); //链接Y轴反方向r/1.8
    ctx.fillStyle = '#f81033'; //设置填充色
    ctx.fill(); //填充

    //画时钟圆
    ctx.restore(); //恢复画笔状态
    //ctx.beginPath()
    //ctx.arc(x, y, r / 3.8, 0, 2 * Math.PI, false);
    //ctx.fillStyle = "#812028";
    //ctx.fill();

    ctx.font = r / 10 + 'px 微软雅黑';
    ctx.fillStyle = '#ffffff';
    //ctx.fillText(timeStr, x - r / 5, y + r / 20);

    //设置文字
    var backgroundText = [
      {
        jing: '肝经',
        shi: '丑时',
      },
      {
        jing: '肺经',
        shi: '寅时',
      },
      {
        jing: '大肠经',
        shi: '卯时',
      },
      {
        jing: '胃经',
        shi: '辰时',
      },
      {
        jing: '脾经',
        shi: '巳时',
      },
      {
        jing: '心经',
        shi: '午时',
      },
      {
        jing: '小肠经',
        shi: '未时',
      },
      {
        jing: '膀胱经',
        shi: '申时',
      },
      {
        jing: '肾经',
        shi: '酉时',
      },
      {
        jing: '心包经',
        shi: '戌时',
      },
      {
        jing: '三焦经',
        shi: '亥时',
      },
      {
        jing: '胆经',
        shi: '子时',
      },
    ];
    ctx.translate(x, y);
    for (var i = 0; i < 12; i++) {
      ctx.rotate((30 * Math.PI) / 180);
      ctx.font = r / 10 + 'px 微软雅黑';
      if (backgroundText[i].jing.length == 2)
        ctx.fillText(backgroundText[i].jing, -0.1 * r, -0.83 * r);
      else ctx.fillText(backgroundText[i].jing, -0.15 * r, -0.86 * r);
      ctx.fillText(backgroundText[i].shi, -0.1 * r, -0.65 * r);
    }
  }
}
