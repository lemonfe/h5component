(function () {
    window.onresize = function () {
      canvasPage.width = document.body.offsetWidth;
      canvasPage.height = document.body.offsetHeight;
    };


    let canvasPage = document.getElementById("myCanvas");

    canvasPage.width = document.body.offsetWidth;
    canvasPage.height = document.body.offsetHeight;
    let ctx = canvasPage.getContext("2d");
    let zhongX = canvasPage.width / 2;
    let zhongY = canvasPage.height / 2;


    function randomColor() {
      return "rgb(" + randomNum(0, 255) + "," + randomNum(0, 255) + "," + randomNum(0, 255) + ")";
    }

    function Ball() {
      this.r = randomNum(0.1, 3);
      this.color = randomColor();

      this.x = randomNum(this.r, canvasPage.width - this.r);
      this.y = randomNum(this.r, canvasPage.height - this.r);

      this.speedX = randomNum(1, 3) * (randomNum(0, 1) ? 1 : -1);
      this.speedY = randomNum(1, 3) * (randomNum(0, 1) ? 1 : -1);
    }

    Ball.prototype.move = function () {
      this.x += this.speedX * 0.2;
      this.y += this.speedY * 0.2;

      if (this.x <= this.r) {
        this.x = this.r;
        this.speedX *= -1;
      }
      if (this.x >= canvasPage.width - this.r) {
        this.x = canvasPage.width - this.r
        this.speedX *= -1;
      }
      //小球碰到上边界的处理 反弹
      if (this.y <= this.r) {
        this.y = this.r;
        //反弹
        this.speedY *= -1;
      }
      //小球碰到下边界的处理 反弹
      if (this.y >= canvasPage.height - this.r) {
        this.y = canvasPage.height - this.r;
        //反弹
        this.speedY *= -1;
      }
    }

    Ball.prototype.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    let balls = [];
    let arr = [];
    for (let i = 0; i < 0.0002 * canvasPage.width * canvasPage.height; i++) {
      let ball = new Ball();
      balls.push(ball);
    }

    setInterval(function () {
      arr = [];
      ctx.clearRect(0, 0, canvasPage.width, canvasPage.height);
      for (let i = 0; i < balls.length; i++) {
        balls[i].move();
        balls[i].draw();
        if (ballAndMouse(balls[i]) < 150) {
          ctx.lineWidth = (130 - ballAndMouse(balls[i])) * 1.5 / 130;

          ctx.beginPath();
          ctx.moveTo(balls[i].x, balls[i].y);
          ctx.lineTo(zhongX, zhongY);
          ctx.strokeStyle = balls[i].color;
          ctx.stroke();
        }
      }


      for (let i = 0; i < balls.length; i++) {
        for (let j = 0; j < balls.length; j++) {
          if (ballAndBall(balls[i], balls[j]) < 80) {
            ctx.lineWidth = (80 - ballAndBall(balls[i], balls[j])) * 0.6 / 80;
            ctx.globalAlpha = (130 - ballAndBall(balls[i], balls[j])) * 1 / 80;
            ctx.beginPath();
            ctx.moveTo(balls[i].x, balls[i].y);
            ctx.lineTo(balls[j].x, balls[j].y);
            ctx.strokeStyle = balls[i].color;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1.0;

    }, 30);


    function randomNum(x, y) {
      return Math.floor(Math.random() * (y - x + 1) + x);
    }

    function ballAndMouse(obj) {
      let disX = Math.abs(zhongX - obj.x);
      let disY = Math.abs(zhongY - obj.y);
      return Math.sqrt(disX * disX + disY * disY);
    }

    function ballAndBall(obj1, obj2) {
      let disX = Math.abs(obj1.x - obj2.x);
      let disY = Math.abs(obj1.y - obj2.y);
      return Math.sqrt(disX * disX + disY * disY);
    }

    canvasPage.onmousemove = function (event) {
      event = event || window.event;
      zhongX = event.offsetX;
      zhongY = event.offsetY;
    }
  })();