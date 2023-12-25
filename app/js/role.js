var obj = [['tester',['systemy testujące', 'systemy raportowe','zna selenium']], ['developer',['środowiska ide', 'języki programowania','zna mysql']], ['project manager',['metodologie prowadzenia projektów', 'systemy raportowe','zna scrum']]];


function manageRoles()
{
    var view = document.getElementById('myrole');
    view.innerHTML=getRole();

    view.addEventListener('change', (e)=>{
        getRoleDetails(e.target.value);
    }, false);

    document.getElementById('d2').addEventListener('click', ()=>{
        const ckb = document.querySelector('#d2:checked') !==null;
        console.log(ckb);
    }, false);

    document.getElementById('submit').addEventListener('click', ()=>{
        validate();
        if(validate() !== false){
            sendData();
            window.location.href='./admin';
        }

    }, false);
}

var role = setRole();

function setRole(){
    return obj;
}

function getRole(roles = null){

    let option_tag='<option value="">Wybierz z listy</option>\n';    
    
    if(roles === null || roles==''){
        roles = getArray(role);
    }else{
        roles = getArray(role[roles][1]);
    }

    for(var i=0; i<roles.length; i++)
    {
        option_tag += '<option value="'+i+'">'+firstCapital(roles[i])+'</option>\n';
    }
    return option_tag;

}

function getArray(a)
{
    
    let res = [];
    for(var i=0; i<a.length; i++)
    {
        if(Array.isArray(a[i])==true){
            res[i]=a[i][0];
        }else{
            res[i]=a[i];
        }

    }
    return res;
}

function getRoleDetails(a)
{
    const cat = a;
    if(cat == '')
    {
        hideRoleDetails();
        return false;
    }

    showRoleDetails();

    for(let a = 0; a<role.length; a++)
    {
        document.getElementById('fd'+a).innerHTML=firstCapital(role[cat][1][a]);
    }
}

function hideRoleDetails()
{
    document.getElementById('role_details').style.display='none';
}

function showRoleDetails()
{
    document.getElementById('role_details').style.display='block';
}

function firstCapital(a)
{
   return a.charAt(0).toLocaleUpperCase() + a.slice(1);
}

function validate()
{
    
    //array with all fields for validation - at the end of the road
    console.log(document.getElementById('d1').value);
    return false;
}

function sendData()
{
    var xhttp = new XMLHttpRequest();
xhttp.open("POST", "ajaxfile.php", true); 
xhttp.setRequestHeader("Content-Type", "application/json");
xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
       // Response
       var response = this.responseText;
   }
};
var data = {name:'yogesh',salary: 35000,email: 'yogesh@makitweb.com'};
xhttp.send(JSON.stringify(data));
}

export {manageRoles}