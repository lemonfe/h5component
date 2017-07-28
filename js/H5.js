/* 内容管理对象 */
import H5ComponentBase from './H5ComponentBase'
import H5ComponentBar from './H5ComponentBar'
import H5ComponentPoint from './H5ComponentPoint'
import H5ComponentPie from './H5ComponentPie'
import H5ComponentPolyLine from './H5ComponentPolyLine'
import H5ComponentRadar from './H5ComponentRadar'
import H5ComponentRing from './H5ComponentRing'
export default function H5() {

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
          component = new H5ComponentBase(name,cfg);
          break;
      case 'polyline' :
        component = new H5ComponentPolyLine(name,cfg);
        break;
      case 'pie' :
        component = new H5ComponentPie(name,cfg);
        break;
      case 'bar' :
        component = new H5ComponentBar(name,cfg);
        break;
      case 'radar' :
        component = new H5ComponentRadar(name,cfg);
        break;
      case 'ring' :
        component = new H5ComponentRing (name,cfg);
        break;
      case 'point' :
        component = new H5ComponentPoint (name,cfg);
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


