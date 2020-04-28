$(document).ready(function() {
    let counter = 0;
    $('form').submit(function(event) {
        event.preventDefault();

        if ($('.todos').val() == "") {
            return false
        }
        counter++;
        if (counter == 1) {
            let big_check = $('<input class="big-check" type="checkbox">');
            $('.inputclass').prepend(big_check);
        }
        $('.big-check').click(function() {
            $('.checkbox').trigger('click');
        })
        let view_div = $('<div>');
        $('#tasks').append(view_div);
        view_div.addClass('next-inputs');
        let check = $('<input class="checkbox" type="checkbox">');
        view_div.append(check);
        let label = $('<label>');
        view_div.append(label);
        let destroy = $('<span class"close">');
        destroy.html('&times;');
        view_div.append(destroy);
        label.text($('.todos').val());
        $('.todos').val('');
        destroy.click(function() {
            view_div.remove()
            counter--;
            $('.count').text(`${counter} item left`);
            if (counter == 0) {
                $('.ftr').remove();
            }
        })
        $(check).click(function() {
            if ($(this).is(':checked')) {
                $(this).closest('.next-inputs').find('label').css("text-decoration", "line-through");
                $('.clearr-all').text("Clear all");
                let checked_count = parseInt($('.count').text()) - 1;
                $('.count').text(`${checked_count} item left`);




            } else if ($('.checkbox:checked').length === 0) {
                $('.clearr-all').text("");
                let checked_count = parseInt($('.count').text()) + 1;
                $('.count').text(checked_count);
                $(this).closest('.next-inputs').find('label').css("text-decoration", "none");

            } else {
                $(this).closest('.next-inputs').find('label').css("text-decoration", "none");
                let checked_count = parseInt($('.count').text()) + 1;
                $('.count').text(checked_count + 'item left');
            }


        });




        if (counter == 1) {

            let footer = $('<footer class="ftr row">');
            // footer.addClass('ftr , col-4');
            $('#footer').append(footer);
            let item_count = $('<span class="count col-4"></span>');
            footer.append(item_count);
            // $('.ftr') = append()
            let footer_mid = $('<div class="ftr-mid col-4"</div>');
            $('.ftr').append(footer_mid);
            let footer_mid_row = $('.ftr-mid').append('<div class="row">');
            footer_mid.append(footer_mid_row);
            let all = $('<span class="allcheck col-4">All </span>');
            footer_mid_row.append(all);
            let active = $('<span class="active col-4"> Active </span>');
            footer_mid_row.append(active);
            let copmleted = $('<span class="completed col-4"> Completed</span>')
            footer_mid_row.append(copmleted);
            let footer_right = $('<span class="clearr-all col-4"></span>')
            $('.ftr').append(footer_right);

        }
        $('.count').text(`${counter} item left`);

        $('.active').click(function() {
            $('.checkbox:checked').closest('.next-inputs').css('display', 'none');
            let total = $('.next-inputs').length;
            let checked_count = $('.checkbox:checked').length;
            let active_count = total - checked_count;


            $('.count').text(`${active_count} item left`);

        })
        $('.completed').click(function() {
            $('.checkbox').closest('.next-inputs').css('display', 'none');
            $('.checkbox:checked').closest('.next-inputs').css('display', 'flex');
        })
        $('.allcheck').click(function() {
            $('.next-inputs').css('display', 'flex');
        })
        $('.clearr-all').click(function() {
            $('.checkbox:checked').closest('.next-inputs').css('display', 'none');
            $('.clearr-all').text('');
        });







    });
});