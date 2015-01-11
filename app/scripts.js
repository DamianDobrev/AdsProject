var Dom = (function () {
    function newNoty(type, message) {
        noty({
            text: message,
            animation: {
                open: {height: 'toggle'},
                close: {height: 'toggle'},
                easing: 'swing',
                speed: 500
            },
            layout: 'topCenter',
            theme: 'relax',
            timeout: 3000,
            closeWith: ['button'],
            type: type
        });
    }

    function makeArray(number) {
        var array = [];
        for (var i = 0; i < number; i++) {
            array[i] = i;
        }
        return array;
    }
    return {
        createNoty : newNoty,
        makeArray : makeArray
    }
})();