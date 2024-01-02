function nav()
{
    if(document.getElementById('login')){
    document.getElementById('login').addEventListener('click', ()=>{
        window.location.href='./login';
    }, false);
    }
    
    if(document.getElementById('register')){
        document.getElementById('register').addEventListener('click', ()=>{
            console.log('reload');
            window.location.reload(true);
            window.location.href='./';

        }, false); 
    }
    if(document.getElementById('admin')){
        document.getElementById('admin').addEventListener('click', ()=>{
            window.location.href='./admin';
        }, false);
    }
}

export{nav}