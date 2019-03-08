# jquery.hoverDelay

jquery.hoverDelay hover 延时事件


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
