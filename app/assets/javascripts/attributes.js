(function($) {
    "use strict"

    function init(attribute_names) {
        init_typed(attribute_names);
        init_voting();
    }

    function init_typed(attribute_names) {
        $(".attribute_name").typed({
            strings: attribute_names,
            typeSpeed: 20,
            backDelay: 2000,
            loop: true,
            preStringTyped: function(pos) {
                $(".sign").hide();
                $(".voting:visible").hide();
                $(".voting").slice(pos, pos+1).show();
            }
        });
    }

    function init_voting() {
        $(".up").click(function (){
            $('.voting:visible > form > .up_vote').val('true');
            $('.voting:visible > form').submit()
            fade_out($(this).parent().parent().siblings('.plus'));
        });
        $(".down").click(function (){
            $('.voting:visible > form > .up_vote').val('false');
            $('.voting:visible > form').submit()
            fade_out($(this).parent().parent().siblings('.minus'));
        });
    }

    function fade_out(selector) {
        $(".voting:visible").hide();
        selector.show();
        selector.fadeOut(2000);
    }

    window.Attributes = {
        "init": init
    };


})( jQuery );
