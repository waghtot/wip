import {Ajax} from '../../model/ajax.js';
import {Role} from './role.js';


class Register
{

    constructor()
    {
        new Role;
        this.submit();
    }

    submit()
    {
        document.getElementById('submit').addEventListener('click', ()=>{
            let data = this.collection();
            let res = new Ajax('http://127.0.0.1:8000/create', data).post();
            console.log(res);

            // validate();
            // if(validate() !== false){
            //     sendData();
                // window.location.href='./login';
            // }
        
        }, false);
    }

    collection()
    {
        let data = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            description: document.getElementById('description').value,
            role: document.getElementById('myrole').value,
            role_detail1: document.getElementById('d0').value,
            role_detail2: document.getElementById('d1').value,
            role_detail3: (document.querySelector('#d2:checked')!==null)?1:0,
        }

        data = this.validate(data);
        return data;
        // validate(data);
        // post.post('https://jsonplaceholder.typicode.com/todos', data);
        // post.post('https://mos.dev.com/api/login', data);
        // post.post('http://127.0.0.1:8000/', data);


    }

    validate(data)
    {
        
        // console.log(data.email);
        // const isEmailValid = (email) => {
            // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            // console.log(re.test(data.email));
        // };
        return data;
    }
}
export {Register};