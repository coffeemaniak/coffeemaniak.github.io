$(function(){

    $('.load-more').on('click', function(){
        const btn = $(this);
        const loader = btn.find('span');
        $.ajax({
            url: '/data.html',
            type: 'GET',
            beforeSent: function(){
                btn.atrr('disabled', true);
                loader.addClass('d-inline-block');
            },
            success: function(responce){
                setTimeout(function(){
                    loader.removeClass('d-inline-block');
                    // btn.atrr('disabled', false);
                    $('.after-post').before(responce);
                }, 2000)
            },
            error: function(){
                alert('Error!');
                loader.removeClass('d-inline-block');
                btn.atrr('disabled', false);
            }
        });
    });

})