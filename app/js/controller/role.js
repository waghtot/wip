import {Ajax} from '../../model/ajax.js';
import { Admin } from './admin.js';

class Role
{
    constructor()
    {
        this.role = new Ajax('http://127.0.0.1:8000/').get();
        return this.displayRole();
    }

    displayRole()
    {  
        console.log('hi from manage roles');
        var view = document.getElementById('myrole');
        view.innerHTML=this.getRole();

        view.addEventListener('change', (e)=>{
            this.getRoleDetails(e.target.value);
        }, false);
    }

    getRole(roles = null){

        let option_tag='<option value="">Wybierz z listy</option>\n';    

        if(roles === null || roles==''){
            roles = this.getArray(this.role);
        }else{
            roles = this.getArray(this.role[roles][1]);
        }
        
        for(var i=0; i<roles.length; i++)
        {
            option_tag += '<option value="'+roles[i][0]+'">'+this.firstCapital(roles[i][2])+'</option>\n';
        }
        return option_tag;

    }

    getArray(a)
    {
        
        let res = [];
        for(var i=0; i<a.length; i++)
        {
            if(Array.isArray(a[i])==true){
                if(a[i][1]==0)
                {
                    let set = [a[i][0], a[i][1], a[i][2]];
                    res.push(set);
                }
            }else{
                res.push(a[i]);
            }

        }
        return res;
    }

    getRoleDetails(a)
    {
        const cat = a;

        if(cat == '')
        {
            this.hideRoleDetails();
            return false;
        }

        this.showRoleDetails();

        let index = 0;
        for(let a = 0; a<this.role.length; a++)
        {
            if(this.role[a][1] == cat){
                document.getElementById('fd'+index).innerHTML=this.firstCapital(this.role[a][2]);
                index ++;
            }

        }
    }

    hideRoleDetails()
    {
        document.getElementById('role_details').style.display='none';
    }

    showRoleDetails()
    {
        document.getElementById('role_details').style.display='block';
    }

    firstCapital(a)
    {
        return a.charAt(0).toLocaleUpperCase() + a.slice(1);
    }
}
export {Role}