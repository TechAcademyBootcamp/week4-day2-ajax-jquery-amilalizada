$(document).ready(function() {
    let counter = 0;
    $('form').submit(function(event) {
        event.preventDefault();

        if ($('.todos').val() == "") {
            return false
        }
        counter++;

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
                // counter++;
                $(this).closest('.next-inputs').find('label').css("text-decoration", "line-through");
                $('.clearr-all').text("Clear all");
                // if (counter == 0) {
                //     $('.clearr-all').text("");
                // }
            } else if ($('.checkbox:checked').length === 0) {
                $('.clearr-all').text("");
                console.log('sda');
                $(this).closest('.next-inputs').find('label').css("text-decoration", "none");

            } else {
                $(this).closest('.next-inputs').find('label').css("text-decoration", "none");
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
            let copmleted = $('<span class="Completed col-4"> Completed</span>')
            footer_mid_row.append(copmleted);
            let footer_right = $('<span class="clearr-all col-4"></span>')
            $('.ftr').append(footer_right);

        }
        $('.count').text(`${counter} item left`);






    });
});