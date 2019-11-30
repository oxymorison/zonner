jQuery(document).ready(function($) {

    var form = $("#qForm");
    var sections = $(".question_wrapper");
    var steps_count = sections.size();
    var cur_step = 0;
    var gender_my, gender_interest;

    form.children('.current').fadeIn();

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    function change_step( step_from, step_to) {

        // validate
        if ((step_to > (step_from+1)) || (step_to>=step_from && !form.parsley().validate('block-' + curIndex()))) return false;

        if (step_to == steps_count) {
            var frmGender = gender_interest;
            var ddlGender = gender_my;
            var dob = $('#frmDay').val() + "." + $('#frmMonth').val() + "." + $('#frmYear').val();
            //var location = $('location').val();
            var uname = $('#screenname').val();
            var email = $('#email').val();
            //var pass = $('password').val();
            var cid = getParameterByName('cid');
            var uid = getParameterByName('uid');

			window.location.replace("/web/");
            //window.location.replace("/reg.php?g=" + frmGender + "&d=" + dob + "&u=" + uname + "&l=" + location + "&e=" + email + "&uid=" + uid + "&cid=" + cid);// + "&p=" + pass);
        }
        // hide/show step
        form.children('.question_wrapper').fadeOut().removeClass("current").eq(step_to).fadeIn().addClass("current");

        cur_step = step_to;
    }

    function curIndex() {
        // Return the current index by looking at which section has the class 'current'
        return sections.index(sections.filter('.current'));
    }
    // Prepare sections by setting the `data-parsley-group` attribute to 'block-0', 'block-1', etc.
    sections.each(function(index, section) {
        $(section).find("select, input").attr('data-parsley-group', 'block-' + index);
    });

    // go to next step
    $('.next_question_button').on('click', function(e) {
        e.preventDefault();

        change_step(cur_step, cur_step+1);
        return false;
    });
    $('.answer_clicked').on('click', function(e) {
        e.preventDefault();

        if ($(this).data("name") == "frmGender") {
            gender_interest = $(this).data("value");
        }
        if ($(this).data("name") == "ddlGender") {
            gender_my = $(this).data("value");
        }

        change_step(cur_step, cur_step+1);
        return false;
    });
    // go to prev step
    $('.previous_question_button').on('click', function(e) {
        e.preventDefault();

        change_step(cur_step, cur_step-1);
        return false;
    });

});