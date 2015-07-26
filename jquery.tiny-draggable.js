/*;
	jQuery tinyDraggable v1.0.3
    Copyright (c) 2014 Simon Steinberger / Pixabay
    GitHub: https://github.com/Pixabay/jQuery-tinyDraggable
    More info: https://pixabay.com/blog/posts/p-52/
	License: http://www.opensource.org/licenses/mit-license.php
*/

(function($){
    $.fn.tinyDraggable = function(options){
        var settings = $.extend({ handle: 0, exclude: 0 }, options);
        return this.each(function(){
            var dx, dy, el = $(this), doc = $(document), handle = settings.handle ? $(settings.handle, el) : el;
            handle.on({
                mousedown: function(e){
                    if (settings.exclude && ~$.inArray(e.target, $(settings.exclude, el))) return;
                    if (settings.callback && settings.callback('start', e.pageX, e.pageY) === false) return;

                    e.preventDefault();
                    var os = el.offset(); dx = e.pageX-os.left, dy = e.pageY-os.top;

                    function onDrag(e){
                      var x = e.pageX-dx, y = e.pageY-dy;
                      if (!settings.callback || settings.callback('drag', x, y) !== false) {
                        el.offset({top: y, left: x});
                      }
                    }
                    function onStop(e){
                      if (settings.callback && settings.callback('stop', e.pageX, e.pageY) === false) return;
                      doc.off('mousemove.drag', onDrag).off('mouseup', onStop);
                    }

                    doc.on('mousemove.drag', onDrag).on('mouseup', onStop);
                }
            });
        });
    };
}(jQuery));
