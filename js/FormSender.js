var form = document.forms.user;
var personName = form.elements["name"];
var personPhone = form.elements["phone"];
var bar =  document.getElementById("loading");
var button = document.getElementById("form-button");


form.submit.addEventListener("click", sendRequest);

function sendRequest(event){
     
    event.preventDefault();
if (personName != "" && personPhone != ""){
var xhr = new XMLHttpRequest();
function reqReadyStateChange() {
    if (xhr.readyState == 4 && xhr.status == 200)
        document.getElementById("output").innerHTML=xhr.responseText;
}
var body = "Name=" + personName.value + "&Phone="+ personPhone.value + "&ChatID=-1001119032259";
xhr.open("POST", "https://cors-anywhere.herokuapp.com/http://telegramsender.somee.com/api/values");
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onreadystatechange = reqReadyStateChange;
xhr.onloadstart = function () {
  button.style="display:none";
  bar.style="display:block; margin-bottom: 36px"
  };
  xhr.onloadend = function () {
  bar.style="display:none"
  button.style="display:inline; background-color:#5bf75b";
  button.value="Отправлено!"
  };
xhr.send(body);

}
}

