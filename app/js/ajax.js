
var xhttp = new XMLHttpRequest();

function get(url, name)
{
    xhttp.open("GET", url+name+'.html', false);
    xhttp.send();
    return xhttp.responseText;
}

function post(url, data)
{

}

// var xhttp = new XMLHttpRequest();
// xhttp.open("POST", "ajaxfile.php", true); 
// xhttp.setRequestHeader("Content-Type", "application/json");
// xhttp.onreadystatechange = function() {
//    if (this.readyState == 4 && this.status == 200) {
//        // Response
//        var response = this.responseText;
//    }
// };
// var data = {name:'yogesh',salary: 35000,email: 'yogesh@makitweb.com'};
// xhttp.send(JSON.stringify(data));

export {get, post}