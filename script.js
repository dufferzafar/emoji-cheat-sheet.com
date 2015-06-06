// http://stackoverflow.com/a/13949064/2043048
$(document).ready(function() {
    $("span.name").on("click", function () {
        var me = $(this)[0];
        var selection = me.ownerDocument.defaultView.getSelection();
        var range = me.ownerDocument.createRange();
        range.selectNodeContents(me);
        selection.removeAllRanges();
        selection.addRange(range);
    });
});
