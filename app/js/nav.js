function nav()
{
    document.getElementById('login').addEventListener('click', ()=>{
        window.location.href='./login';
    }, false);

    document.getElementById('register').addEventListener('click', ()=>{
        window.location.href='./';
    }, false);

}

export{nav}