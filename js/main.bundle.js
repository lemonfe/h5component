/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = H5ComponentBase;
/* 基本图文组件对象 */
function H5ComponentBase( name, cfg ) {
  var cfg = cfg || {};
  var id = ( 'h5_c_'+Math.random() ).replace('.','_') ;

  // 把当前的组建类型添加到样式中进行标记
  var cls = ' h5_component_'+cfg.type;
  var component = $('<div class="h5_component '+cls+' h5_component_name_'+name+'" id="'+id+'">');

  cfg.text   &&  component.text(cfg.text);
  cfg.width  &&  component.width(cfg.width/2);
  cfg.height &&  component.height(cfg.height/2);

  cfg.css && component.css( cfg.css );
  cfg.bg  && component.css('backgroundImage','url('+cfg.bg+')');

  if( cfg.center === true){
    component.css({
      marginLeft : ( cfg.width/4 * -1) + 'px',
      left:'50%'
    })
  }
  //  ... 很多自定义的参数
  if( typeof cfg.onclick === 'function' ){
    component.on('click',cfg.onclick);
  }

  // 任务二：(1)支持 relativeTo参数（CSS translate 实现方法）
  // 任务二：(2)获取 relateveTo 元素的位置，应该用 offsetLeft、offsetTop
  // 任务二：(3)考虑 cfg.center 对relativeTo参数的影响，并且在有、没有这两种情况下都要支持

  component.on('onLoad',function(){

    // 任务二：(1)支持relativeTo参数（修改 DOM 结构实现方法）

    setTimeout(function(){
      component.addClass(cls+'_load').removeClass(cls+'_leave');
      cfg.animateIn && component.animate( cfg.animateIn );
    },cfg.delay || 0)

    return false;
  })
  component.on('onLeave',function(){
    setTimeout(function(){
      component.addClass(cls+'_leave').removeClass(cls+'_load');
      cfg.animateOut && component.animate( cfg.animateOut );
    },cfg.delay || 0)
    return false;
  })


  return component;
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = H5ComponentPie;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__H5ComponentBase__ = __webpack_require__(0);


function H5ComponentPie(name, cfg) {
  var component = new __WEBPACK_IMPORTED_MODULE_0__H5ComponentBase__["a" /* default */](name, cfg);
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

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_H5__ = __webpack_require__(11);



$(function () {
  var h5 = new __WEBPACK_IMPORTED_MODULE_1__js_H5__["a" /* default */]();

  h5.whenAddPage = function () {
    this.addComponent('slide_up', {
      bg: 'imgs/footer.png',
      css: {
        opacity: 0,
        left: 0,
        bottom: -20,
        width: '100%',
        height: '20px',
        zIndex: 999
      },
      animateIn: {
        opacity: 1,
        bottom: '-1px'
      },
      animateOut: {
        opacity: 0,
        bottom: '-20px'
      }
    })
  };

  h5
      .addPage('face')
      .addComponent('topic', {
        width: 395,
        height: 130,
        bg: './imgs/face_logo.png',
        css: {opacity: 0},
        animateIn: {top: 100, opacity: 1},
        animateOut: {top: 0, opacity: 0},
        center: true,
      })
      .addComponent('slogan', {
        width: 365,
        height: 99,
        bg: './imgs/face_slogan.png',
        css: {opacity: 0, top: 230},
        animateIn: {left: '50%', opacity: 1},
        animateOut: {left: 0, opacity: 0},
        center: true,
        delay: 500
      })
      .addComponent('face_img_left', {
        width: 370,
        height: 493,
        bg: './imgs/face_img_left.png',
        css: {opacity: 0, left: -50, bottom: -50},
        animateIn: {left: 0, bottom: 0, opacity: 1},
        animateOut: {left: -50, bottom: -50, opacity: 0},
        delay: 1000
      })
      .addComponent('face_img_right', {
        width: 370,
        height: 493,
        bg: './imgs/face_img_right.png',
        css: {opacity: 0, right: -50, bottom: -50},
        animateIn: {right: 0, bottom: 0, opacity: 1},
        animateOut: {right: -50, bottom: -50, opacity: 0},
        delay: 1000
      })
      .addPage()
      .addComponent('caption', {text: '核心理念'})
      .addComponent('text', {
        width: 500,
        height: 30,
        text: 'IT教育网-只学有用的',
        center: true,
        css: {opacity: 0, color: 'red', fontSize: '26px'},
        animateIn: {top: 120, opacity: 1},
        animateOut: {top: 240, opacity: 0},
      })
      .addComponent('description', {
        width: 481,
        height: 295,
        text: 'IT教育网-只学有用的IT教育网-只学有用的IT教育网-只学有用的IT教育网-只学有用的IT教育网-只学有用的',
        center: true,
        bg: './imgs/description_bg.gif',
        css: {
          opacity: 0,
          padding: '15px 10px 10px 10px',
          fontSize: '15px',
          color: '#fff',
          lineHeight: '18px',
          top: 300
        },
        animateIn: {top: 220, opacity: 1},
        animateOut: {top: 300, opacity: 0},
        delay: 500
      })
      .addComponent('people', {
        center: true,
        width: 515,
        height: 305,
        bg: './imgs/p1_people.png',
        css: {
          opacity: 0,
          bottom: 0
        },
        animateIn: {bottom: 80, opacity: 1},
        animateOut: {bottom: 0, opacity: 0},
        delay: 500
      })
      .addPage()
      .addComponent('caption', {
        text: '课程分布方向'
      })
      .addComponent('polyline', {
        type: 'polyline',
        width: 630,
        height: 300,
        data: [
          ['js', .4, '#ff7676'],
          ['html', .2, '#ff7676'],
          ['css', .3, '#ff7676'],
          ['vue', .05, '#ff7676'],
          ['react', .09, '#ff7676']
        ],
        css: {
          opacity: 0,
          top: 100
        },
        animateIn: {
          opacity: 1,
          top: 250
        },
        animateOut: {
          opacity: 0,
          top: 100
        },
        center: true,
      })
      .addComponent('msg', {
        text: '前端开发课程占到40%',
        css: {
          opacity: 0,
          top: 140,
          width: '100%',
          color: '#ff7676',
          textAlign: 'center'
        },
        animateIn: {
          opacity: 1,
        },
        animateOut: {
          opacity: 0,
        },
      })
      .addPage()
      .addComponent('caption', {
        text: '移动开发课程资源',
      })
      .addComponent('pie', {
        type: 'pie',
        width: 400,
        height: 400,
        data: [
          ['js', .4, '#ff7676'],
          ['html', .2, '#f6f'],
          ['css', .15, '#aaa'],
          ['vue', .05, '#f00'],
          ['react', .2, 'blue']
        ],
        css: {
          opacity: 0,
          top: 200
        },
        animateIn: {
          opacity: 1,
          top: 200
        },
        anmateOut: {
          opacity: 0
        },
        center: true,
      })
      .addComponent('msg', {
        text: '前端开发课程占到40%',
        css: {
          opacity: 0,
          bottom: 140,
          width: '100%',
          color: '#ff7676',
          textAlign: 'center'
        },
        animateIn: {
          opacity: 1,
        },
        animateOut: {
          opacity: 0,
        },
      })
      .addPage()
      .addComponent('caption', {
        text: '前端开发课程'
      })
      .addComponent('bar', {
        type: 'bar',

        width: 530,
        height: 600,
        data: [
          ['js', .4, '#ff7676'],
          ['html', .2],
          ['css', .3],
          ['vue', .05],
          ['react', .09]
        ],
        css: {
          opacity: 0,
          top: 100
        },
        animateIn: {
          opacity: 1,
          top: 200
        },
        anmateOut: {
          opacity: 0,
          top: 100
        },
        center: true,
      })
      .addComponent('msg', {
        text: '前端开发课程占到40%',
        css: {
          opacity: 0,
          bottom: 140,
          width: '100%',
          color: '#ff7676',
          textAlign: 'center'
        },
        animateIn: {
          opacity: 1,
        },
        animateOut: {
          opacity: 0,
        },
      })
      .addPage()
      .addComponent('caption', {
        text: '后端开发课程'
      })
      .addComponent('radar',{
        type: 'radar',
        width: 400,
        height: 400,
        data: [
          ['js', .9, '#ff7676'],
          ['html', .6, '#ff7676'],
          ['css', .5, '#ff7676'],
          ['vue', .8, '#ff7676'],
          ['react', .2, '#ff7676']
        ],
        css: {
          opacity: 0,
          top: 100
        },
        animateIn: {
          opacity: 1,
          top: 200
        },
        anmateOut: {
          opacity: 0,
          top: 100
        },
        center: true,
      })
      .addPage()
      .addComponent('caption', {
        text: '报名人数过万'
      })
      .addComponent('ring', {

        // 任务一：(2)配置文件缺少类型(type)和数据(data)的定义，完成这两个配置。注意，环图只支持一项数据。
        type : 'ring',
        data:[
          ['Js' , .7  ,'#ff7676'],
        ],

        width : 400,
        height : 400,


        css : {
          top:120,
          opacity:0,
          fontSize: '30px'
        },
        animateIn:{
          opacity:1
        },
        animateOut:{
          opacity:0
        },
        center : true,
      })
      .addComponent('msg', {
        text: '不同课程报名人数超过一万',
        css: {
          opacity: 0,
          top: 340,
          width: '100%',
          color: '#ff7676',
          textAlign: 'center'
        },
        animateIn: {
          opacity: 1,
        },
        animateOut: {
          opacity: 0,
        },
      })
      .addComponent('ring-1', {
        type : 'ring',
        data:[
          ['前端开发' , .7  ,'darkorange'],
        ],
        width : 140,
        height : 140,
        css : {
          opacity:0,
          left:30,
          bottom: 120,
          fontSize: '12px'
        },
        animateIn:{
          opacity:1
        },
        animateOut:{
          opacity:0
        }
      })
      .addComponent('ring-2', {
        type : 'ring',
        data:[
          ['Js' , .7  ,'darkorange'],
        ],
        width : 140,
        height : 140,
        css : {
          opacity:0,
          bottom: 120,
          fontSize: '12px'
        },
        animateIn:{
          opacity:1
        },
        animateOut:{
          opacity:0
        },
        center:true
      })
      .addComponent('ring-3', {
        type : 'ring',
        data:[
          ['Js' , .7  ,'darkorange'],
        ],
        width : 140,
        height : 140,
        css : {
          opacity:0,
          right:30,
          bottom: 120,
          fontSize: '12px'
        },
        animateIn:{
          opacity:1
        },
        animateOut:{
          opacity:0
        }
      })
      .addComponent('ring-4', {
        type : 'ring',
        data:[
          ['Js' , .7  ,'darkorange'],
        ],
        width : 140,
        height : 140,
        css : {
          opacity:0,
          left:90,
          bottom: 30,
          fontSize: '12px'
        },
        animateIn:{
          opacity:1
        },
        animateOut:{
          opacity:0
        }
      })
      .addComponent('ring-5', {
        type : 'ring',
        data:[
          ['Js' , .7  ,'darkorange'],
        ],
        width : 140,
        height : 140,
        css : {
          opacity:0,
          right:90,
          bottom: 30,
          fontSize: '12px'
        },
        animateIn:{
          opacity:1
        },
        animateOut:{
          opacity:0
        }
      })
      .addPage()
      .addComponent('caption', {
        text: '课程难度分布'
      })
      .addComponent('point',{
        type: 'point',

        width: 300,
        height: 300,
        data: [
          ['A项', .4, 'green'],
          ['B项', .2, 'yellow', 0, '-60%'],
          ['C项', .3, 'red', 0, '120%']
        ],
        css: {
          bottom: '40%'
        },
        center: true,
      })

      .addPage('tail')
      .addComponent('logo', {
        center: true,
        width: 359,
        height: 129,
        bg: './imgs/tail_logo.png',
        css: {
          opacity: 0,
          top: 240
        },
        animateIn: {top: 210, opacity: 1},
        animateOut: {top: 240, opacity: 0},
      })
      .addComponent('slogan', {
        center: true,
        width: 314,
        height: 46,
        bg: './imgs/tail_slogan.png',
        css: {
          opacity: 0,
          top: 320
        },
        animateIn: {top: 300, opacity: 1},
        animateOut: {top: 320, opacity: 0},
        delay: 500
      })
      .addComponent('share', {
        width: 128,
        height: 120,
        bg: './imgs/tail_share.png',
        css: {
          opacity: 0,
          top: 110
        },
        animateIn: {top: 10, opacity: 1, right: 10},
        animateOut: {top: 110, opacity: 0, right: 110},
        delay: 1000
      })
      .addComponent('back', {
        center: true,
        width: 52,
        height: 50,
        bg: './imgs/tail_back.png',
        onclick: function () {
          $.fn.fullpage.moveTo(1)
        }
      })
      .loader();
})




/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(9)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./node_modules/_css-loader@0.28.4@css-loader/index.js!./index.css", function() {
			var newContent = require("!!./node_modules/_css-loader@0.28.4@css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "\r\n\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.h5_page{\r\n    background-image: url(" + __webpack_require__(6) + ");\r\n    background-size: cover;\r\n}\r\n.h5_page_face {\r\n    background-image: url(" + __webpack_require__(7) + ");\r\n    background-size: cover;\r\n}\r\n\r\n.h5_component_name_slogan {\r\n    animation: rock 2s infinite 2s;\r\n}\r\n.h5_component_name_caption {\r\n    background-image: url(" + __webpack_require__(8) + ");\r\n    width: 283px;\r\n    height:160px;\r\n    text-align: center;\r\n    line-height: 140px;\r\n    font-size:20px;\r\n    color: #fff;\r\n}\r\n.h5_component_name_description {\r\n   box-sizing: border-box;\r\n}\r\n.h5_component_name_back{\r\n    top:30px;\r\n    animation: back 2s infinite 2s;\r\n}\r\n/* H5对象的全局样式 */\r\n.h5{\r\n    height: 100%;\r\n}\r\n/* 基本图文组件样式 */\r\n.h5_component{\r\n    background-size: 100%;\r\n    background-repeat: no-repeat;\r\n    position: absolute;\r\n}\r\n.h5_page{\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #ddd;\r\n    background-size: 100%;\r\n    background-repeat: no-repeat;\r\n}\r\n/* 柱状组件样式 */\r\n.h5_component_bar{\r\n}\r\n\r\n.h5_component_bar .line{\r\n    height: 15px;\r\n    font-size: 12px;\r\n    line-height: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.h5_component_bar .name{\r\n    width: 60px;\r\n    float: left;\r\n    color: #000;\r\n    text-align: center;\r\n}\r\n\r\n.h5_component_bar .rate{\r\n    height: 15px;\r\n    margin-left: 5px;\r\n    float: left;\r\n    position: relative;\r\n}\r\n.h5_component_bar .rate .bg{\r\n    background-color: #99c0ff;\r\n    width: 0%;\r\n    height: 100%;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    border-radius: 3px;\r\n}\r\n.h5_component_bar .per{\r\n    width: 20px;\r\n    color: #99c0ff;\r\n    margin-left: 5px;\r\n    float: left;\r\n    -webkit-opacity:0;\r\n}\r\n.h5_component_bar_load .rate .bg{\r\n    -webkit-transition:all 1s .5s;\r\n    width: 100%;\r\n}\r\n.h5_component_bar_leave .rate .bg{\r\n    width: 0%;\r\n}\r\n.h5_component_bar_load .per{\r\n    -webkit-transition:all 1s 1.5s;\r\n    -webkit-opacity:1;\r\n}\r\n.h5_component_bar_leave .per{\r\n    -webkit-opacity:0;\r\n}\r\n\r\n.h5_component_pie canvas{\r\n    position: absolute;\r\n    left:0;\r\n    top:0;\r\n    width:100%;\r\n    height: 100%;\r\n\r\n}\r\n.h5_component_pie .text{\r\n    position: absolute;\r\n    text-align: center;\r\n    transition: all 1s;\r\n}\r\n/* 散点图组件样式 */\r\n.h5_component_point{\r\n    color: #fff;\r\n}\r\n\r\n.h5_component_point .point{\r\n    display: block;\r\n    background-color: #ccc;\r\n    position: absolute;\r\n    border-radius: 50%;\r\n    -webkit-opacity:0;\r\n    -webkit-transition:all 1s;\r\n}\r\n\r\n.h5_component_point .name{\r\n    height: 30px;\r\n    width: 100%;\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 50%;\r\n    margin-top: -15px;\r\n    font-size: 22px;\r\n}\r\n.h5_component_point .per{\r\n    font-size: .5em;\r\n}\r\n\r\n.h5_component_point_load .point{\r\n    -webkit-opacity:1;\r\n    -webkit-transform:scale(1);\r\n}\r\n.h5_component_point_leave .point{\r\n    -webkit-opacity:0;\r\n    -webkit-transform:scale(.1)\r\n}\r\n\r\n\r\n.h5_component_point_load .point_focus{\r\n    box-shadow: 0 0 10px rgba(0,0,0,.5);\r\n}\r\n.h5_component_point_load .point_focus:after{\r\n    content: ' ';\r\n    text-indent: -999px;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 50%;\r\n    top: 50%;\r\n    margin-left: -50%;\r\n    margin-top: -50%;\r\n    border-radius: 50%;\r\n    -webkit-opacity:.5;\r\n    background-color: inherit;\r\n    -webkit-animation: breathe 3s infinite ease-in-out .5s;\r\n    z-index: -1;\r\n}\r\n@-webkit-keyframes breathe{\r\n    0% {\r\n        -webkit-transform:scale(.5);\r\n        -webkit-opacity:.9;\r\n    }\r\n    95%{\r\n        -webkit-transform:scale(1.5);\r\n        -webkit-opacity:0;\r\n    }\r\n    100%{\r\n        -webkit-transform:scale(.9);\r\n        -webkit-opacity:0;\r\n    }\r\n}\r\n\r\n.h5_component_polyline{\r\n\r\n}\r\n.h5_component_polyline canvas{\r\n    position: absolute;\r\n    left:0;\r\n    top:0;\r\n    width:100%;\r\n    height: 100%;\r\n}\r\n.h5_component_polyline .text{\r\n    position: absolute;\r\n    font-size: 25px;\r\n    text-align: center;\r\n    bottom:-20px;\r\n    height: 20px;\r\n    line-height: 20px;\r\n    transform: scale(.8);\r\n    -webkit-transition: all 1s 1.5s;\r\n    -webkit-opacity: 0;\r\n}\r\n\r\n.h5_component_polyline_load .text{\r\n    -webkit-opacity: 1;\r\n}\r\n.h5_component_polyline_leave .text{\r\n    -webkit-opacity: 0;\r\n}\r\n\r\n/* 雷达图组件样式 */\r\n.h5_component_radar{\r\n\r\n}\r\n.h5_component_radar canvas{\r\n    position: absolute;\r\n    left:0;\r\n    top:0;\r\n    width:100%;\r\n    height: 100%;\r\n}\r\n.h5_component_radar .text{\r\n    position: absolute;\r\n}\r\n\r\n/* 环图组件样式 */\r\n.h5_component_ring{\r\n}\r\n\r\n.h5_component_ring .mask{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    z-index: 90;\r\n    /* 任务三：修正遮罩层的样式，为其添加白色背景颜色，并且设置为完成 圆形饼图的 80% 大小 */\r\n    background-color: #fff;\r\n    border-radius: 50%;\r\n    -webkit-transform:scale(.8);\r\n}\r\n\r\n.h5_component_ring .text{\r\n    width: 100%;\r\n    top: 40%;\r\n    opacity: 0;\r\n}\r\n.h5_component_ring .text .per{\r\n}\r\n\r\n\r\n@keyframes back {\r\n    50%{ top: 15px}\r\n}\r\n\r\n@keyframes rock {\r\n    0% {\r\n        transform: rotate(0deg)\r\n    }\r\n    5% {\r\n        transform: rotate(3deg)\r\n    }\r\n    10% {\r\n        transform: rotate(-4deg)\r\n    }\r\n    15% {\r\n        transform: rotate(3deg)\r\n    }\r\n    20% {\r\n        transform: rotate(-2deg)\r\n    }\r\n    25% {\r\n        transform: rotate(1deg)\r\n    }\r\n    30% {\r\n        transform: rotate(-1deg)\r\n    }\r\n    70% {\r\n        transform: rotate(1deg)\r\n    }\r\n    100% {\r\n        transform: rotate(0deg)\r\n    }\r\n}", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b48f53f7e6f64ab609a4c9840dfcd007.png";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1b656d7f63fb6666119e0c9871016328.png";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bb7134de5e36660cb47b9ee3c2c4f8e5.png";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(10);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = H5;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__H5ComponentBase__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__H5ComponentBar__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__H5ComponentPoint__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__H5ComponentPie__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__H5ComponentPolyLine__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__H5ComponentRadar__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__H5ComponentRing__ = __webpack_require__(16);
/* 内容管理对象 */







function H5() {

  this.id = ('h5_'+Math.random()).replace('.','_');
  this.el = $('<div class="h5" id="'+this.id+'">').hide();
  this.page = [];
  $('body').append(this.el);
/*
* 新增一个页
* @param {string} name 组件的名称，会加到classname中
* @param {string} text 组件默认的文本
* */
  this.addPage = function (name,text) {
    var page = $('<div class="h5_page section">');

    if( name != undefined) {
      page.addClass('h5_page_'+name);
    }

    //text用于测试
    if( text != undefined) {
      page.text(text)
    }
    this.el.append(page);
    this.page.push(page);
    if(typeof this.whenAddPage === 'function'){
      this.whenAddPage()
    }
    return this
  };
/*
* 新增一个组件*/
  this.addComponent = function (name,cfg) {
    var cfg = cfg || {};
    cfg = $.extend({
      type: 'base'
    },cfg);
    var component;
    var page = this.page.slice(-1)[0];
    switch (cfg.type) {
      case 'base' :
          component = new __WEBPACK_IMPORTED_MODULE_0__H5ComponentBase__["a" /* default */](name,cfg);
          break;
      case 'polyline' :
        component = new __WEBPACK_IMPORTED_MODULE_4__H5ComponentPolyLine__["a" /* default */](name,cfg);
        break;
      case 'pie' :
        component = new __WEBPACK_IMPORTED_MODULE_3__H5ComponentPie__["a" /* default */](name,cfg);
        break;
      case 'bar' :
        component = new __WEBPACK_IMPORTED_MODULE_1__H5ComponentBar__["a" /* default */](name,cfg);
        break;
      case 'radar' :
        component = new __WEBPACK_IMPORTED_MODULE_5__H5ComponentRadar__["a" /* default */](name,cfg);
        break;
      case 'ring' :
        component = new __WEBPACK_IMPORTED_MODULE_6__H5ComponentRing__["a" /* default */] (name,cfg);
        break;
      case 'point' :
        component = new __WEBPACK_IMPORTED_MODULE_2__H5ComponentPoint__["a" /* default */] (name,cfg);
        break;
      default:
    }
    page.append(component);
    return this
  };

  this.loader = function (curPage) {
    this.el.fullpage({
      onLeave:function( index, nextIndex, direction) {
        $(this).find('.h5_component').trigger('onLeave');
      },
      afterLoad:function( anchorLink, index ) {
        $(this).find('.h5_component').trigger('onLoad');
      }
    });
    this.page[0].find('.h5_component').trigger('onLoad');
    this.el.show();
    if(curPage){
      $.fn.fullpage.moveTo(curPage)
    }
  }
};




/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = H5ComponentBar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__H5ComponentBase__ = __webpack_require__(0);
/* 基本图文组件对象 */

function H5ComponentBar( name, cfg ) {
  var component = new __WEBPACK_IMPORTED_MODULE_0__H5ComponentBase__["a" /* default */](name,cfg);

  $.each(cfg.data,function (index,item) {
    var line = $('<div class="line"></div>');
    var name = $('<div class="name"></div>');
    var rate = $('<div class="rate"></div>');
    var per = $('<div class="per"></div>');
    var width = item[1]*100+'%';
    var bgStyle;
    if(item[2]){
      bgStyle = 'style="background-color:'+item[2]+'"'
    }
    rate.html('<div class="bg"'+bgStyle+'></div>');
    rate.css('width',width);
    per.text(width);
    name.text(item[0]);
    line.append(name).append(rate).append(per);
    component.append(line)
  })



  return component;
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = H5ComponentPoint;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__H5ComponentBase__ = __webpack_require__(0);
/* 散点图表组件对象 */

function H5ComponentPoint( name, cfg ) {
  var component =  new __WEBPACK_IMPORTED_MODULE_0__H5ComponentBase__["a" /* default */]( name ,cfg );

  var base = cfg.data[0][1];   //  以第一个数据的 比例为大小的 100%

  //   输出每个 Point
  $.each( cfg.data,function( idx ,item ){

    var point = $('<div class="point point_'+idx+'" >');

    var name = $('<div class="name">'+item[0]+'</div>');
    var rate = $('<div class="per">'+ (item[1]*100)+'%</div>');

    name.append(rate);
    point.append(name);


    var per =  (item[1]/base*100) + '%';

    point.width(per).height(per);

    if(item[2]){
      point.css('background-color',item[2]);
    }
    if(item[3] !== undefined && item[4]!== undefined ){
      point.css('left',item[3]).css('top',item[4]);

    }
    point.css('transition','all 1s '+idx*.5+'s')
    component.append( point );
  } );

  component.find('.point').on('click',function(){
    component.find('.point').removeClass('point_focus');
    $(this).addClass('point_focus');

    return false;
  }).eq(0).addClass('point_focus')

  return component;
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = H5ComponentPolyLine;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__H5ComponentBase__ = __webpack_require__(0);
/* 基本图文组件对象 */

function H5ComponentPolyLine( name, cfg ) {
  var component = new __WEBPACK_IMPORTED_MODULE_0__H5ComponentBase__["a" /* default */](name, cfg);
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

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = H5ComponentRadar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__H5ComponentBase__ = __webpack_require__(0);

function H5ComponentRadar(name, cfg) {
  var component = new __WEBPACK_IMPORTED_MODULE_0__H5ComponentBase__["a" /* default */](name, cfg);
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

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = H5ComponentRing;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__H5ComponentPie__ = __webpack_require__(1);
/* 环图组件对象 */


function H5ComponentRing( name, cfg ) {


  if(cfg.data.length>1){  //  环图应该只有一个数据
    // 任务二：(1) 把数据格式化为只有一项，例如 a = [ [1] , [2] , [3] ] 格式化为： a=[ [1] ]
    cfg.data = [cfg.data[0]];
  }

  //  任务二：(2) 重设配置中的 type 参数，不仅利用 H5ComponentPie 构建 DOM 结构和 JS 逻辑，也使用其 CSS 样式定义（思考下为什么能达到这个效果）
  cfg.type = 'pie';
  var component =  new __WEBPACK_IMPORTED_MODULE_0__H5ComponentPie__["a" /* default */]( name ,cfg );

  //  任务二：(3) 修正组件的样式，以支持在样式文件中组件的样式定义 .h5_component_ring 相关样式能生效
  component.addClass('h5_component_ring');


  var mask = $('<div class="mask">');

  // 任务二：(4) 把创建好的遮罩元素添加到组件中
  component.append(mask);

  var text = component.find('.text');

  text.attr('style','');
  if(cfg.data[0][2]){
    text.css('color',cfg.data[0][2]);
  }
  //  任务二：(5) 在遮罩元素( .mask ) 中添加文本信息
  mask.append( text );

  return component;
}

/***/ })
/******/ ]);