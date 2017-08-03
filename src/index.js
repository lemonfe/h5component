import './index.scss'
import 'fullpage.js'
import H5 from './js/H5'
import './preload.js'
import './canvas.js'

$(function() {
  var imgs = [
    require('./assets/tail_share.png'),
    require('./assets/face_slogan.png'),
    require('./assets/lemonfe.png'),
    require('./assets/face_img_left.png'),
    require('./assets/face_img_right.png'),
    require('./assets/footer.png'),
    require('./assets/p1_people.png'),
    require('./assets/description_bg.gif'),
    require('./assets/tail_slogan.png'),
    require('./assets/page_caption_bg.png'),
    require('./assets/tail_back.png'),
    require('./assets/tail_logo.png')
  ];
  var h5 = new H5();

  var len = imgs.length;
  $.preload(imgs, {
    each: function(count) {},
    all: function() {

      $('.loading').hide();
      h5.loader(7)
    }
  })

  // h5.whenAddPage = function() {
  //   this.addComponent('slide_up', {
  //     bg: imgs[5],
  //     css: {
  //       opacity: 0,
  //       left: 0,
  //       bottom: -20,
  //       width: '100%',
  //       height: '20px',
  //       zIndex: 999
  //     },
  //     animateIn: {
  //       opacity: 1,
  //       bottom: '-1px'
  //     },
  //     animateOut: {
  //       opacity: 0,
  //       bottom: '-20px'
  //     }
  //   })
  // };

  h5.addPage('face').addComponent('topic', {
    width: 300,
    height: 300,
    bg: imgs[2],
    css: {
      opacity: 0,
      borderRadius: 150
    },
    animateIn: {
      top: 100,
      opacity: 1
    },
    animateOut: {
      top: 0,
      opacity: 0
    },
    center: true
  }).addComponent('slogan', {
    width: 365,
    height: 99,
    bg: imgs[1],
    css: {
      opacity: 0,
      top: 280
    },
    animateIn: {
      left: '50%',
      opacity: 1
    },
    animateOut: {
      left: 0,
      opacity: 0
    },
    center: true,
    delay: 500
  }).addComponent('face_img_left', {
    width: 370,
    height: 493,
    bg: imgs[3],
    css: {
      opacity: 0,
      left: -50,
      bottom: -50
    },
    animateIn: {
      left: 0,
      bottom: 0,
      opacity: 1
    },
    animateOut: {
      left: -50,
      bottom: -50,
      opacity: 0
    },
    delay: 1000
  }).addComponent('face_img_right', {
    width: 370,
    height: 493,
    bg: imgs[4],
    css: {
      opacity: 0,
      right: -50,
      bottom: -50
    },
    animateIn: {
      right: 0,
      bottom: 0,
      opacity: 1
    },
    animateOut: {
      right: -50,
      bottom: -50,
      opacity: 0
    },
    delay: 1000
  }).addPage().addComponent('caption', {text: '教育背景'}).addComponent('text', {
    width: 550,
    text: `<h3>大连理工大学城市学院</h3>
          <h5>2013.9 ~ 2017.7</h5>
          <h4>网络工程</h4>
          <p style="line-height:30px">   第一次接触到javascript实在学校的课堂上，通过它在网页上
          展现出绚丽的网页，让我喜欢上这个语言，走上了一条不归路！</p>
    `,
    center: true,
    css: {
      opacity: 0,
      color: 'rgb(240, 184, 18)',
      textAlign: 'center'
    },
    animateIn: {
      top: 120,
      opacity: 1
    },
    animateOut: {
      top: 240,
      opacity: 0
    }
  }).addComponent('people', {
    center: true,
    width: 515,
    height: 305,
    bg: imgs[6],
    css: {
      opacity: 0,
      bottom: 0
    },
    animateIn: {
      bottom: 80,
      opacity: 1
    },
    animateOut: {
      bottom: 0,
      opacity: 0
    },
    delay: 500
  }).addPage().addComponent('caption', {text: '实习经历'}).addComponent('text', {
    width: 640,
    text: `<h2>大连库特熊电子商务有限公司</h2>
          <h4>2016.10 ~ 2017.3</h4>
          <h3>技术部实习生</h3>
          <p style="line-height:28px"><i style="color:rgb(149, 120, 172)">主要职责：</i>PC端电商网站的页面开发</p>
          <p style="line-height:28px"><i style="color:rgb(149, 120, 172)">问题一：</i>网站要求响应式开发</p>
  <p style="line-height:28px"><i style="color:rgb(149, 120, 172)">解决思路：</i>当时没有太了解css3新特性，借此了解到许多css3的新特性，并借助与其中的媒体查询实现响应式开发。</p>
  <p style="line-height:28px"><i style="color:rgb(149, 120, 172)">问题二：</i>数据接口与页面整合</p>
  <p style="line-height:28px"><i style="color:rgb(149, 120, 172)">解决思路：</i>借此了解到前后端分离的概念，并寻找到一个叫jade（pug）的模板引擎来实现数据到页面的渲染。</p>
    `,
    center: true,
    css: {
      opacity: 0,
      color: 'rgb(240, 184, 18)',
      textAlign: 'center'
    },
    animateIn: {
      top: 100,
      opacity: 1
    },
    animateOut: {
      top: 240,
      opacity: 0
    }
  }).addPage().addComponent('caption', {text: '项目经历'}).addComponent('polyline', {
    type: 'polyline',
    width: 630,
    height: 300,
    data: [
      [
        'css3', .2, 'rgb(240, 184, 18)'
      ],
      [
        'jQuery', .45, 'rgb(240, 184, 18)'
      ],
      ['bootstrap', .35, 'rgb(240, 184, 18)']
    ],
    css: {
      opacity: 0,
      top: 100
    },
    animateIn: {
      opacity: 1,
      top: 350
    },
    animateOut: {
      opacity: 0,
      top: 100
    },
    center: true
  }).addComponent('text', {
    width: 640,
    text: `<h3><i style="color:rgb(149, 120, 172)">网站主页、商品详情页、商品列表页</i></h3>
          <p style="line-height:28px">
          <i style="color:rgb(149, 120, 172)">主要技术：</i>
          jQuery、bootstrap、css3
          </p>
          <p style="line-height:28px">
          <i style="color:rgb(149, 120, 172)">主要收获：</i>
          对之前松散的技术上的一次磨合，同时因为第一次做项目，遇到的问题很多，与此同时极大的锻炼了解决问题的能力。
          </p>

    `,
    center: true,
    css: {
      opacity: 0,
      color: 'rgb(240, 184, 18)',
      textAlign: 'center'
    },
    animateIn: {
      top: 100,
      opacity: 1
    },
    animateOut: {
      top: 240,
      opacity: 0
    }
  }).addComponent('msg', {
    text: '技术和库',
    css: {
      opacity: 0,
      bottom: 70,
      width: '100%',
      color: 'rgb(240, 184, 18)',
      textAlign: 'center'
    },
    animateIn: {
      opacity: 1
    },
    animateOut: {
      opacity: 0
    }
  }).addPage().addComponent('caption', {text: '个人技能分布'}).addComponent('radar', {
    type: 'radar',
    width: 400,
    height: 400,
    data: [
      [
        'html5', .7, 'rgb(240, 184, 18)'
      ],
      [
        'css3', .8, 'rgb(240, 184, 18)'
      ],
      [
        'vue', .7, 'rgb(240, 184, 18)'
      ],
      [
        'javascript', .8, 'rgb(240, 184, 18)'
      ],
      ['nodejs', .3, 'rgb(240, 184, 18)']
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
    center: true
  }).addComponent('msg', {
    text: '个人非常喜欢Vue的轻量<p>同时又羡慕React的健壮</p>',
    css: {
      opacity: 0,
      bottom: 100,
      width: '100%',
      color: 'rgb(240, 184, 18)',
      textAlign: 'center'
    },
    animateIn: {
      opacity: 1
    },
    animateOut: {
      opacity: 0
    }
  }).addPage().addComponent('caption', {text: 'MVVM前端框架热度'}).addComponent('pie', {
    type: 'pie',
    width: 400,
    height: 400,
    data: [
      [
        'react', .35, '#00d8ff'
      ],
      [
        'vue', .3, '#4fc08d'
      ],
      [
        'angular', .25, 'rgb(171, 76, 107)'
      ],
      [
        'other', .1, '#fff'
      ]
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
    center: true
  }).addComponent('msg', {
    text: 'React为2016年前端框架之王<p>Vue是新秀框架</p>',
    css: {
      opacity: 0,
      bottom: 100,
      width: '100%',
      color: '#ff7676',
      textAlign: 'center'
    },
    animateIn: {
      opacity: 1
    },
    animateOut: {
      opacity: 0
    }
  }).addPage().addComponent('caption', {text: '个人日常爱好'}).addComponent('bar', {
    type: 'bar',
    width: 530,
    height: 600,
    data: [
      [
        '看电影', .1, '#ff7676'
      ],
      [
        '码代码', .6, '#ff7676'
      ],
      [
        '逛街', .05, '#ff7676'
      ],
      [
        '看技术书籍', .15, '#ff7676'
      ],
      [
        '锻炼', .1, '#ff7676'
      ],
    ],
    css: {
      opacity: 0,
      top: 100
    },
    animateIn: {
      opacity: 1,
      top: 300
    },
    anmateOut: {
      opacity: 0,
      top: 100
    },
    center: true
  }).addComponent('msg', {
    text: '学无止境，努力努力在努力！！',
    css: {
      opacity: 0,
      bottom: 140,
      width: '100%',
      color: '#99c0ff',
      textAlign: 'center'
    },
    animateIn: {
      opacity: 1
    },
    animateOut: {
      opacity: 0
    }
  }).addComponent('msg', {
    text: '以下都是真实的，不是假的，我也很心酸',
    css: {
      opacity: 0,
      top: 140,
      width: '100%',
      color: '#99c0ff',
      textAlign: 'center'
    },
    animateIn: {
      opacity: 1
    },
    animateOut: {
      opacity: 0
    }
  }).addPage().addComponent('caption', {text: '报名人数过万'}).addComponent('ring', {

    // 任务一：(2)配置文件缺少类型(type)和数据(data)的定义，完成这两个配置。注意，环图只支持一项数据。
    type: 'ring',
    data: [
      ['Js', .7, '#ff7676']
    ],

    width: 400,
    height: 400,

    css: {
      top: 120,
      opacity: 0,
      fontSize: '30px'
    },
    animateIn: {
      opacity: 1
    },
    animateOut: {
      opacity: 0
    },
    center: true
  }).addComponent('msg', {
    text: '不同课程报名人数超过一万',
    css: {
      opacity: 0,
      top: 340,
      width: '100%',
      color: '#ff7676',
      textAlign: 'center'
    },
    animateIn: {
      opacity: 1
    },
    animateOut: {
      opacity: 0
    }
  }).addComponent('ring-1', {
    type: 'ring',
    data: [
      ['前端开发', .7, 'darkorange']
    ],
    width: 140,
    height: 140,
    css: {
      opacity: 0,
      left: 30,
      bottom: 120,
      fontSize: '12px'
    },
    animateIn: {
      opacity: 1
    },
    animateOut: {
      opacity: 0
    }
  }).addComponent('ring-2', {
    type: 'ring',
    data: [
      ['Js', .7, 'darkorange']
    ],
    width: 140,
    height: 140,
    css: {
      opacity: 0,
      bottom: 120,
      fontSize: '12px'
    },
    animateIn: {
      opacity: 1
    },
    animateOut: {
      opacity: 0
    },
    center: true
  }).addComponent('ring-3', {
    type: 'ring',
    data: [
      ['Js', .7, 'darkorange']
    ],
    width: 140,
    height: 140,
    css: {
      opacity: 0,
      right: 30,
      bottom: 120,
      fontSize: '12px'
    },
    animateIn: {
      opacity: 1
    },
    animateOut: {
      opacity: 0
    }
  }).addComponent('ring-4', {
    type: 'ring',
    data: [
      ['Js', .7, 'darkorange']
    ],
    width: 140,
    height: 140,
    css: {
      opacity: 0,
      left: 90,
      bottom: 30,
      fontSize: '12px'
    },
    animateIn: {
      opacity: 1
    },
    animateOut: {
      opacity: 0
    }
  }).addComponent('ring-5', {
    type: 'ring',
    data: [
      ['Js', .7, 'darkorange']
    ],
    width: 140,
    height: 140,
    css: {
      opacity: 0,
      right: 90,
      bottom: 30,
      fontSize: '12px'
    },
    animateIn: {
      opacity: 1
    },
    animateOut: {
      opacity: 0
    }
  }).addPage().addComponent('caption', {text: '职业规划'}).addComponent('point', {
    type: 'point',

    width: 300,
    height: 300,
    data: [
      [
        '架构师', 6, 'green'
      ],
      [
        'FE', 3, 'rgb(172, 43, 172)', 0, '-60%'
      ],
      ['高级FE', 4, 'red', 0, '120%']
    ],
    css: {
      bottom: '40%'
    },
    center: true
  }).addPage('tail').addComponent('logo', {
    center: true,
    width: 359,
    height: 129,
    bg: imgs[11],
    css: {
      opacity: 0,
      top: 240
    },
    animateIn: {
      top: 210,
      opacity: 1
    },
    animateOut: {
      top: 240,
      opacity: 0
    }
  }).addComponent('slogan', {
    center: true,
    width: 314,
    height: 46,
    bg: imgs[8],
    css: {
      opacity: 0,
      top: 320
    },
    animateIn: {
      top: 300,
      opacity: 1
    },
    animateOut: {
      top: 320,
      opacity: 0
    },
    delay: 500
  }).addComponent('share', {
    width: 128,
    height: 120,
    bg: imgs[0],
    css: {
      opacity: 0,
      top: 110
    },
    animateIn: {
      top: 10,
      opacity: 1,
      right: 10
    },
    animateOut: {
      top: 110,
      opacity: 0,
      right: 110
    },
    delay: 1000
  }).addComponent('back', {
    center: true,
    width: 52,
    height: 50,
    bg: imgs[10],
    onclick: function() {
      $.fn.fullpage.moveTo(1)
    }
  });
})
