/* 基本图文组件对象 */
import H5ComponentBase from './H5ComponentBase'
export default function H5ComponentBar( name, cfg ) {
  var component = new H5ComponentBase(name,cfg);

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