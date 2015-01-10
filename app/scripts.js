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
    return {
        createNoty : newNoty
    }
})();