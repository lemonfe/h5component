//图片预加载
(function($) {

  function PreLoad(imgs, opts) {
    this.imgs = (typeof imgs === 'string')
      ? [imgs]
      : imgs;
    this.opts = $.extend({}, PreLoad.Defaults, opts); //后一个对象融合覆盖前一个对象成为一个对象

    if (this.opts.order === 'ordered') {
      this._ordered()
    } else {
      this._unordered()
    }
  }
  PreLoad.Defaults = {
    order: 'unordered',
    each: null, //每张图片加载完成后执行
    all: null //所有图片执行完成 后加载
  };
  PreLoad.prototype._ordered = function() {
    var opts = this.opts,
      imgs = this.imgs,
      len = imgs.length,
      count = 1;
    load();
    function load() {
      var imgObj = new Image();

      $(imgObj).on('load error', function() {
        opts.each && opts.each(count);
        if (count >= len) {
          opts.all && opts.all()
        } else {
          load();
        }
        count++;
      });

      imgObj.src = imgs[count]
    }
  },
  PreLoad.prototype._unordered = function() {
    var imgs = this.imgs,
      opts = this.opts,
      count = 0,
      len = imgs.length;
    $.each(imgs, function(i, src) {
      if (typeof src != 'string')
        return;
      var imgObj = new Image();

      $(imgObj).on('load error', function() {
        opts.each && opts.each(count)
        // $progress.html(Math.round((count + 1) / len * 100) + '%');
        if (count >= len - 1) {
          opts.all && opts.all()
        }
        count++;
      })

      imgObj.src = src
    })
  };

  // $.fn.extend -> $('.imgs').preload()
  $.extend({
    preload: function(imgs, opts) {
      new PreLoad(imgs, opts)
    }
  })
})(jQuery)
