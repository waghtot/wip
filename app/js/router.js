import * as role from './role.js';
import * as navi from './nav.js';
import * as ajax from './ajax.js';

window.onload = function(){
navi.nav();
var app = document.getElementById('app');

var routePath = window.location.pathname;
var template = '/app/view/';

switch(routePath){
    case '/':
        app.innerHTML = ajax.get(template, 'register');
        // app.innerHTML = loadPage('/app/view/register.html');
        return role.manageRoles();
    case '/login':
        app.innerHTML = ajax.get(template, 'login');
        // app.innerHTML = loadPage('/app/view/login.html');
    break;
    case '/admin':
        app.innerHTML = ajax.get(template, 'admin');
        // app.innerHTML = loadPage('/app/view/login.html');
    break;
    default:
        app.innerHTML='404!';
    break;
}

}
