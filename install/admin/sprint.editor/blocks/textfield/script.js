sprint_editor.registerBlock('textfield', function($, $el, data) {

    data = $.extend({
        value: ''
    }, data);

    this.getData = function () {
        return data;
    };

    this.collectData = function () {
        data.value = $el.find('input[type=text]').val();
        return data;
    };

    this.afterRender = function () {
    };

});