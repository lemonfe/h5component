import H5ComponentBase from './H5ComponentBase'

export default function H5ComponentPie(name, cfg) {
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
  var len = cfg.data.length;
  var data = cfg.data;
  var r = w / 2;
  //加入一个底图层
  ctx.beginPath();
  ctx.fillStyle = '#eee';
  ctx.strokeStyle = '#eee';
  ctx.lineWidth = 3;
  ctx.arc(r, r, r, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke()

  //绘制一个数据层
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = ctx.width = w;
  canvas.height = ctx.height = h;
  component.append(canvas);

  var colors = ['red', 'green', 'blue', 'orange', 'gray'];
  var sAngle = -0.5 * Math.PI;
  var eAngle = 0;
  var aAngle = 2 * Math.PI;


  for (var i = 0; i < len; i++) {
    var item = cfg.data[i];
    eAngle = sAngle + item[1] * aAngle;
    ctx.beginPath();
    ctx.fillStyle = item[2] ? item[2] : colors[i];
    ctx.strokeStyle = item[2] ? item[2] : colors[i];
    ctx.lineWidth = .1;
    ctx.moveTo(r, r);
    ctx.arc(r, r, r, sAngle, eAngle);
    ctx.fill();
    ctx.stroke();
    sAngle = eAngle;

    //加入文本
    var text = $('<div class="text"></div>');
    var per = $('<div class="per"></div>');
    text.text(item[0]);
    text.css('opacity','0');
    per.text(item[1] * 100 + '%');
    text.append(per);

    var x = r + Math.sin(.5 * Math.PI - sAngle) * r;
    var y = r + Math.cos(.5 * Math.PI - sAngle) * r;


    if (x > w / 2) {
      text.css('left', x / 2)
    } else {
      text.css('right', (w - x) / 2)
    }
    if (y > h / 2) {
      text.css('top', y / 2)
    } else {
      text.css('bottom', (h - y) / 2)
    }
    if (cfg.data[i][2]) {
      text.css('color', cfg.data[i][2])
    }

    component.append(text)
  }
  //加入一个
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = ctx.width = w;
  canvas.height = ctx.height = h;
  component.append(canvas);

  //加入一个底图层

  ctx.fillStyle = '#eee';
  ctx.strokeStyle = '#eee';
  ctx.lineWidth = 3;


  function draw(per) {
    ctx.clearRect(0, 0, w, h);
    ctx.beginPath();
    ctx.moveTo(r, r);
    if (per <= 0) {
      ctx.arc(r, r, r, 0, 2 * Math.PI);
      component.find('.text').css('opacity','0')
    } else {
      ctx.arc(r, r, r, sAngle, sAngle + 2 * Math.PI * per, true);
    }
    ctx.fill();
    ctx.stroke();

    if(per>=1){
      component.find('.text').css('opacity','1')
    }
  }

  draw(0);
  component.on('onLoad', function () {
    var s = 0;
    for (i = 0; i < 100; i++) {
      setTimeout(function () {
        s += 0.01;
        draw(s);
      }, i * 10 + 500)
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