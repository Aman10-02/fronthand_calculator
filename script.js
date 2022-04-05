var ans = 0;
var a1 = 0;
var a2 = 0;
var op;
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
    a1 = ans;
    ans = 0;
    a2 = 0;
    op = o;
    document.querySelector(".screen").innerHTML = '<p>' +a1+ ' '+o+ '</p>';
}
function dot() {
    document.querySelector(".screen").innerHTML = '<p>' +ans + "." +'</p>';
    a2++;
}
function eql() {
    if(op == "+")
    {
        ans = ans +  a1;
        document.querySelector(".screen").innerHTML = '<p>' +ans+'</p>';
    }
    if(op == "-")
    {
        ans = ans -  a1;
        document.querySelector(".screen").innerHTML = '<p>' +ans+'</p>';
    }
    if(op == "*")
    {
        ans = ans *  a1;
        document.querySelector(".screen").innerHTML = '<p>' +ans+'</p>';
    }
    if(op == "/")
    {
        ans = ans /  a1;
        document.querySelector(".screen").innerHTML = '<p>' +ans+'</p>';
    }
}