var ans = 0;
var a1 = 0;
var a2 = 0;
var op;
var ops = 0;
function value(a) {
    if(a2 > 0)
    {
        ans = ans + (a / (Math.pow(10,a2)));
        document.querySelector(".screen").innerHTML = '<p>' + ans+'</p>';
        a2++;
        if (a2 > 4){
            return;
        }
    }
    else if (a2 == 0)
    {
        ans = (10*ans) + a;
        document.querySelector(".screen").innerHTML = '<p>' +ans+'</p>';
    }
}
function operation(o) {
    ops++;
    if(ops == 1){
        a1 = ans;
        ans = 0;
        a2 = 0;
        op = o;
        document.querySelector(".screen").innerHTML = '<p>' +a1+ ' '+o+ '</p>';
    }
    else if(ops > 1)
    {
        eql();
        a1 = ans;
        ans=0;
        a2=0;
        op = o;
        document.querySelector(".screen").innerHTML = '<p>' +a1+ ' '+o+ '</p>';
    }

}
function dot() {
    document.querySelector(".screen").innerHTML = '<p>' +ans + "." +'</p>';
    a2++;
}
function eql() {
    if(op == "+")
    {
        ans = a1 + ans;
        document.querySelector(".screen").innerHTML = '<p>' +ans+'</p>';
    }
    if(op == "-")
    {
        ans = a1 - ans;
        document.querySelector(".screen").innerHTML = '<p>' +ans+'</p>';
    }
    if(op == "*")
    {
        ans = a1 * ans;
        document.querySelector(".screen").innerHTML = '<p>' +ans+'</p>';
    }
    if(op == "/")
    {
        ans = a1 / ans;
        document.querySelector(".screen").innerHTML = '<p>' +ans+'</p>';
    }
}
function refresh() {
    window.location.reload();
}
