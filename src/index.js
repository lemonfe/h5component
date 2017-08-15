import './index.scss'
import 'fullpage.js'
import H5 from './js/H5'
import './preload.js'
import './canvas.js'


$(function() {
    var imgs = [
        require('./assets/lemonfe.png'),
        require('./assets/face_slogan.png'),
        require('./assets/page_caption_bg.png'),
        require('./assets/p1_people.png'),
        require('./assets/tail_back.png')
       
    ];
    var h5 = new H5();

    var len = imgs.length;
    $.preload(imgs, {
        all: function() {
            $('.loading').hide();
            h5.loader(0);
            setTimeout(function(){
            	$('.h5_component_name_topic').addClass('point_focus');
            },500)
            
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
        bg: imgs[0],
        css: {
            opacity: 0,
            borderRadius: 150,
            backgroundColor:'rgb(240, 184, 18)'
        },
        animateIn: {
            top: 150,
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
        text: `<h3>lemonfe</h3>
					<h5>Front-End</h5>
					<h4>lemonfe@139.com</h4>
		`,
        css: {
            opacity: 0,
            top: 350,
            textAlign: 'center',
            color:'rgb(240, 184, 18)'
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
    }).addPage().addComponent('caption', {
        text: '教育背景'
    }).addComponent('text', {
        width: 550,
        text: `<h3>大连理工大学城市学院</h3>
					<h5>2013.9 ~ 2017.7</h5>
					<h4>网络工程</h4>
		`,
        center: true,
        css: {
            opacity: 0,
            color: 'rgb(240, 184, 18)',
            textAlign: 'center'
        },
        animateIn: {
            top: 180,
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
        bg: imgs[3],
        css: {
            opacity: 0,
            bottom: 0
        },
        animateIn: {
            bottom: 50,
            opacity: 1
        },
        animateOut: {
            bottom: 0,
            opacity: 0
        },
        delay: 500
    }).addPage().addComponent('caption', {
        text: '实习经历'
    }).addComponent('text', {
        width: 640,
        text: `<h2>大连库特熊电子商务有限公司</h2>
					<h4>2016.10 ~ 2017.3</h4>
					<h3>web前端实习生</h3>
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
    }).addComponent('ring', {

        // 任务一：(2)配置文件缺少类型(type)和数据(data)的定义，完成这两个配置。注意，环图只支持一项数据。
        type: 'ring',
        data: [
            ['PC端开发', .7, '#ff7676']
        ],

        width: 400,
        height: 400,

        css: {
            top:280,
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
    })
    .addComponent('msg', {
        text: '主要职责',
        css: {
            opacity: 0,
            top: 500,
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
    }).addPage().addComponent('caption', {
        text: '项目经历'
    }).addComponent('polyline', {
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
        text: `<h3>电商网站</h3>
        		<h3>主页、商品详情页、商品列表页</h3>
					<p style="line-height:28px">
					<i style="color:#ff7676">项目要求： </i>
					响应式布局
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
    }).addPage().addComponent('caption', {
        text: '个人技能分布'
    }).addComponent('radar', {
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
    }).addPage().addComponent('caption', {
        text: 'MVVM前端框架热度'
    }).addComponent('pie', {
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
    }).addPage().addComponent('caption', {
        text: '个人日常爱好'
    }).addComponent('bar', {
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
            top: 220
        },
        anmateOut: {
            opacity: 0,
            top: 100
        },
        center: true
    }).addPage().addComponent('caption', {
        text: '职业规划'
    }).addComponent('point', {
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
            bottom: '35%'
        },
        center: true
    }).addPage('tail').addComponent('logo', {
        center: true,
        width: 500,
        height: 129,
        text:"老铁，这是最后一页了！！！",
        css: {
            opacity: 0,
            top: 240,
            color:'rgb(172, 43, 172)',
            textAlign:'center'
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
        bg: imgs[6],
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
    }).addComponent('back', {
        center: true,
        width: 52,
        height: 50,
        bg: imgs[4],
        onclick: function() {
            $.fn.fullpage.moveTo(1)
        }
    });
})