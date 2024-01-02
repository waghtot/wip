import { Ajax } from "../../model/ajax.js";
import { createElement } from "./createElement.js";

class Admin
{
    constructor()
    {
        this.data = new Ajax('http://127.0.0.1:8000/admin').get();
        this.populate();
    }

    populate()
    {
        let table ='';
        if(this.data.length != 0)
        {
            this.data.forEach(element => {
                table = table + this.drawRow(element);
            });
        }
        return table;
    }

    drawRow(e)
    {
        let tab = document.getElementById('users');
        var row = new createElement('','','tr');
        row.setAttribute('data-user', +e[0]);
        e.shift();
        row.innerHTML = this.drawColumn(e);
        tab.appendChild(row);
        return row;
    }

    drawColumn(e)
    {
        let cols='';
        e.forEach(element => {
            if(element instanceof Object == true){
                cols = cols+'<td>'+element.date.substr(0, 16)+'</td>';
            }else{
                cols = cols+'<td>'+element+'</td>';
            }
        });
            // cols = cols + this.actionButtons();
        return cols;
    }

    actionButtons()
    {
        var buttons = new createElement('','','td');
    }
}

export {Admin}