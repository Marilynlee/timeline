/**
 * Created by Dragon-PC on 2016/6/19.
 */
$(function () {
    $.ajax({
        url: 'data.json',
        type: 'get',
        dataType: 'json',
        success: function (data) {
            var info = Handlebars.compile($("#info-template").html());
            $('#J-info').append(info(data));
        },
        error: function (data) {
            //console.log(data);
        }
    });

    $('.pick-list>li').click(function () {
        $(this).addClass('cur');
        $(this).siblings().removeClass('cur');
        var val = $(this).text();
        $.ajax({
            url: 'data.json',
            type: 'get',
            dataType: 'json',
            success: function (data) {
                var html=[];
                $.each(data,function(index,value){
                    if (val==parseInt(value.year)) {
                        html.push(value);
                    }
                });
                var info = Handlebars.compile($("#info-template").html());
                $('#J-info').html(info(html));
            },
            error: function (data) {
                console.log('failed');
            }
        });


    });

});