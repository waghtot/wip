import * as role from './controller/role.js';
import * as navi from './nav.js';
import { createElement } from './controller/createElement.js';
import { Register } from './controller/register.js';
import { Admin } from './controller/admin.js';

window.onload = function(){
    
    var routePath = window.location.pathname;

    new createElement('nav', '', '');


    switch(routePath){
        case '/':
            new createElement('', 'register', '');
            new Register;
        break;
        case '/login':
            new createElement('', 'login', '');
        break;
        case '/admin':
            new createElement('', 'admin', '');
            new Admin;
        break;
        default:
            app.innerHTML='404!';
        break;
    }
    navi.nav();
}
