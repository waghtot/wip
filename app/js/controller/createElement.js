import { Ajax } from "../../model/ajax.js";

class createElement
{
    constructor(node=null, template=null, type=null)
    {
        this.app = document.getElementById('app');
        this.type = type;
        (!type)?this.type ='div':this.type = type;
        this.path = '/app/view/';
        this.parts = '/app/view/parts/';
        if(!node)
        {
            this.path = '/app/view/';
            this.attrClass = 'row justify-content-md-center';
            this.temp = template;
        }else{
            this.path = '/app/view/parts/';
            this.attrClass = '';
            this.temp = node;
        }
        return this.create();
    }

    create()
    {
        var nav = document.createElement(this.type);
        if(this.type!=='div'){
            return nav;
        }
        if(this.attrClass!='')
        {
            nav.setAttribute("class", this.attrClass);
        }
        nav.innerHTML = new Ajax(this.path, this.temp).get();
        this.app.appendChild(nav);
    }

}

export {createElement}