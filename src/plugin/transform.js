/**
 * Created by wh on 2017-05-05.
 */
import $ from 'n-zepto'
(function ($, window, document, undefined) {

    let Transform = function (ele, opt) {
        this.$element = ele;
        this.defaults = { //  默认参数
            draggable: true
        };
        this.options = $.extend({}, this.defaults, opt);
    };

    function getPosition($ele) {
        let pos = {};

        pos = toNumber($ele.css(['width', 'height', 'left', 'top',]));
        // pos.vleft = $ele.offset().left;
        // pos.vtop = $ele.offset().top;
        return pos;
    }

    function toNumber(obj) {
        $.each(obj, function (key, value) {
            obj[key] = parseFloat(value);
        });
        return obj;
    }

    function propDefault(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    Transform.prototype = {
        init: function () {
            let spaceX, spaceY,
                opts = this.options,
                $ele = this.$element;

            // 设置初始的位置
            $ele.css({'position': 'absolute', 'top': 0, 'left': 0});

            $ele.on('touchstart', function (e) {
                propDefault(e);

                let pos = getPosition($ele);

                console.log(pos)

                spaceX = e.touches[0].pageX - pos.left;
                spaceY = e.touches[0].pageY - pos.top;
            });
            $ele.on('touchmove', function (e) {
                propDefault(e);

                let moveX = e.touches[0].pageX - spaceX,
                    moveY = e.touches[0].pageY - spaceY;
                $ele.css({'left': moveX, 'top': moveY});
            })
        }
    };

    $.fn.transform = function (options) {
        let _transform = new Transform(this, options);
        _transform.init();
        return this;
    }
})($, window, document);
