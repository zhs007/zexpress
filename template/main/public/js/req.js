function onRet(str) {
    var obj = JSON.parse(str);

    if (obj.hasOwnProperty('newurl')) {
        window.location.href = obj.newurl;

        return ;
    }

    if (obj.hasOwnProperty('err')) {
        alert(obj.err);

        return ;
    }
}

function login() {
    var name = $("#inputName").val();
    var password = $("#inputPassword").val();

    $.post('/adminctrl/login/', {name: name, password: password}, function (data, status) {
        onRet(data);
    });
}