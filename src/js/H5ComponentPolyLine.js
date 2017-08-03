/* 基本图文组件对象 */
import H5ComponentBase from './H5ComponentBase'
export default function H5ComponentPolyLine( name, cfg ) {
  var component = new H5ComponentBase(name, cfg);
  //绘制网格线
  var w = cfg.width;
  var h = cfg.height;

  //加入一个画布
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = ctx.width = w;
  canvas.height = ctx.height = h;
  component.append(canvas);

  //水平网格线
  var step = 10;
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#000000";

  window.ctx = ctx;
  for (var i = 0; i < step + 1; i++) {
    var y = (h / step) * i;
    ctx.moveTo(0, y);
    ctx.lineTo(w, y)

  }

  //垂直网格线
  step = cfg.data.length + 1;
  var text_w = w / step >> 0;
  for (var i = 0; i < step + 1; i++) {
    var x = w / step * i;
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    if (cfg.data[i]) {
      var text = $('<div class="text"></div>');
      text.css('width', text_w / 2).css('left', (x / 2 - text_w / 4) + text_w / 2);
      text.text(cfg.data[i][0]);
      component.append(text)
    }

  }

  ctx.stroke();

  //绘制折线数据
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = ctx.width = w;
  canvas.height = ctx.height = h;
  component.append(canvas);

  //绘制折线数据
  function draw(per) {

    ctx.clearRect(0, 0, w, h);
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#FF8878";

    var x = 0;
    var y = 0;
    var row_w = w / (cfg.data.length + 1)

    // ctx.moveTo(10,10);
    // ctx.arc(10,10,5,0,2*Math.PI)

    //画点
    for (i in cfg.data) {
      var item = cfg.data[i];

      x = row_w * i + row_w;
      y = h - h * item[1] * per;
      ctx.moveTo(x, y);
      ctx.arc(x, y, 10, 0, 2 * Math.PI)
    }

    //连线
    ctx.moveTo(row_w, h * (1 - cfg.data[0][1] * per));
    for (i in cfg.data) {
      var item = cfg.data[i];
      x = row_w * i + row_w;
      y = h - h * item[1] * per;
      ctx.lineTo(x, y)
    }
    ctx.stroke();
    //绘制阴影
    ctx.lineTo(x, h);
    ctx.lineTo(row_w, h);
    ctx.fillStyle = 'rgba(255,118,118,.5)';
    ctx.fill();

    //写数据
    for (i in cfg.data) {
      var item = cfg.data[i];

      x = row_w * i + row_w;
      y = h - h * item[1] * per;
      ctx.moveTo(x, y);
      ctx.font = "30px Georgia";
      ctx.fillStyle = item[2] ? item[2] : '#595959';
      ctx.fillText(((item[1] * 100) >>> 0 ) + '%', x - 10, y - 15)
    }

  }

  component.on('onLoad', function () {
    var s = 0;
    for (i = 0; i < 100; i++) {
      setTimeout(function () {
        s += 0.01;
        draw(s);
      }, i * 10+500)
    }
  });
  component.on('onLeave', function () {
    var s = 1;
    for (i = 0; i < 100; i++) {
      setTimeout(function () {
        s -= 0.01;
        draw(s);
      }, i * 10 + 500)
    }
  })




  return component;
}