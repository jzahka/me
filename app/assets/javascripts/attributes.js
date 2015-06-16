(function($) {
    "use strict"

    function init(attribute_names) {
        initTyped(attribute_names);
        initVoting();
    }

    function initTyped(attribute_names) {
        $(".attribute_name").typed({
            strings: attribute_names,
            typeSpeed: 20,
            backDelay: 2000,
            loop: true,
            preStringTyped: function(pos) {
                $(".count:visible").hide();
                $(".count").slice(pos, pos+1).show();
            }
        });
    }

    function initVoting() {
        $(".up").click(function (){
            vote('up');
        });
        $(".down").click(function (){
            vote('down');
        });
    }

    function fade_out(selector) {
        $(".voting:visible").hide();
        selector.show();
        selector.fadeOut(2000);
    }

    function vote(direction) {
        var url = 'attributes/' + getCurrentId();
        $.ajax(url, {
            method: "PUT",
            success: function (response) {
                getCountById(response.id).text(response.net);
            },
            data: { vote: direction }
        });
    }

    function getCurrentId() {
        return $('.count:visible').attr('id').slice(-1);
    }

    function getCountById(id) {
        return $('#attribute_' + id);
    }

    window.Attributes = {
        "init": init
    };


})( jQuery );
