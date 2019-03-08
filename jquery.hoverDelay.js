/*
 * jQuery hover delay(setTimeout/clearTimeout) plugin
 * Version 1.0.1 (22/05/2015)
 *
 * Author:mingzi
 *USAGE:
 *  
 */
(function($) {
    $.fn.hoverDelay = function(options) {
        var defaults = {
            hoverDuring : 200, /*经过延迟时间*/
            outDuring : 200,  /*移出延迟时间*/
            hoverEvent : function() {   /*经过延时后的回调函数*/
                $.noop();
            },
            outEvent : function() {     /*移出延时后的回调函数*/
                $.noop();
            }
        };
        var sets = $.extend(defaults, options || {});
        var hoverTimer, outTimer,that,e;
        return $(this).each(function() {
            $(this).hover(function(event) {
                clearTimeout(outTimer);
                that = this;
                e = event;
                hoverTimer = setTimeout(function() {
                    sets.hoverEvent.call(null,that,e)
                }, sets.hoverDuring);
            }, function(event) {
                clearTimeout(hoverTimer);
                that = this;
                e = event;
                outTimer = setTimeout(function() {
                    sets.outEvent.call(null,that,e)
                }, sets.outDuring);
            });
        });
    }
})(jQuery);