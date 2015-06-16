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
            startDelay: 1000,
            loop: true,
            preStringTyped: function(pos) {
                $(".count").hide();
                $(".count").slice(pos, pos+1).show();
                $("#voting_sign").hide();
                $("#voting_icon").fadeIn(500);
            }
        });
    }

    function initVoting() {
        $(".up").click(function (){
            vote('up');
            fadeOut('+')
        });
        $(".down").click(function (){
            vote('down');
            fadeOut('–')
        });
    }

    function fadeOut(sign) {
        $("#voting_sign").text(sign);
        $("#voting_icon").hide();
        $("#voting_sign").show();
        $("#voting_sign").fadeOut(2000);
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
