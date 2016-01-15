$(document).ready(function () {
    $(function () {
        $(".draggable").draggable({
            stop: function (event, ui) {
                var key = $(this).data('key');
                $.post('position/setposition', {
                        top: ui.offset.top,
                        left: ui.offset.left,
                        key: key
                    })
                    .done(function (data) {
                        console.log(data);
                    })
            }
        });
    });

})