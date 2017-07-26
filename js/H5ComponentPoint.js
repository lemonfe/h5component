var H5ComponentPoint = function (name,cfg) {
  var component = new H5ComponentBase(name,cfg);
  var base = cfg.data[0][1];
  //输出每一个point
  $.each(cfg.data,function (index,item) {
    var point = $('<div class="point point_'+index+'">');
    var name = $('<div class="name">'+item[0]+'</div>')
    var per = (item[1]/base*100)+'%';
    point.append(name);
    point.width('100%').height('100%');
    point.width(per).height(per);
    if(item[2]){
      point.css('backgroundColor',item[2])
    }
    if(item[3]!==undefined &&item[4]){
      point.css({'left':item[3],'top':item[4]})
    }
    point.css('transition','all 1s '+index*.5+'s');

    component.append(point);
  });

  return component
}