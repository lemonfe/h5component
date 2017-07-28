import './index.css'
import H5 from './js/H5'

$(function () {
  var h5 = new H5();

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


