var H5ComponentRadar = function (name, cfg) {
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

  var step = cfg.data.length;
  var r = w / 2;



  ctx.beginPath();
  ctx.arc(r, r, 5, 0, 2 * Math.PI);
  ctx.stroke();

  //计算一个顶点坐标
  // rad = (2*Math.PI/360) * (360 / step) * i;
  // x = a +Math.sin( rad ) * r
  // y = b +Math.cos( rad ) * r

  //绘制网格背景
  var isBlue = false;

  for (var s = 10; s > 0; s--) {
    ctx.beginPath();
    for (var i = 0; i < step; i++) {
      var rad = (2 * Math.PI / 360) * (360 / step) * i;
      var x = r + Math.sin(rad) * r * (s / 10);
      var y = r + Math.cos(rad) * r * (s / 10);

      ctx.lineTo(x, y);

    }
    ctx.closePath();
    ctx.fillStyle = (isBlue = !isBlue) ? '#99c0ff' : '#f1f9ff';
    ctx.fill()
  }

  //绘制伞骨
  for (var i = 0; i < step; i++) {
    var rad = (2 * Math.PI / 360) * (360 / step) * i;
    var x = r + Math.sin(rad) * r;
    var y = r + Math.cos(rad) * r;
    ctx.moveTo(r, r);
    ctx.lineTo(x, y);

    var text = $('<div class="text"></div>');
    text.text(cfg.data[i][0]);
    text.css('opacity', '0');
    text.css('transition','all .5s '+i*.1+'s');
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
  ctx.strokeStyle = '#e0e0e0';
  ctx.stroke();

  //数据层
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = ctx.width = w;
  canvas.height = ctx.height = h;
  component.append(canvas);

  function draw(per) {
    if(per<1){
      component.find('.text').css('opacity',0)
    }
    if(per>=1){
      component.find('.text').css('opacity',1)
    }

    ctx.clearRect(0, 0, w, h);
    for (var i = 0; i < step; i++) {
      var rad = (2 * Math.PI / 360) * (360 / step) * i;
      var rate = cfg.data[i][1] * per;
      var x = r + Math.sin(rad) * r * rate;
      var y = r + Math.cos(rad) * r * rate;

      ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = '#ff7676';
    ctx.stroke();

    for (var i = 0; i < step; i++) {
      var rad = (2 * Math.PI / 360) * (360 / step) * i;
      var rate = cfg.data[i][1] * per;
      var x = r + Math.sin(rad) * r * rate;
      var y = r + Math.cos(rad) * r * rate;

      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI);
      ctx.fillStyle = '#ff7676';
      ctx.fill();
      ctx.closePath()
    }
  }

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