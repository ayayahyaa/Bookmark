if (localStorage.getItem("sitesContainer") !== null) {
  siteList = JSON.parse(localStorage.getItem("sitesContainer"));
  displayData();
}

var siteNameInput = document.getElementById("siteName");
var siteURLInput = document.getElementById("siteUrl");
var userMsg = document.getElementById("msgName")
var userUrl = document.getElementById("msgUrl")


function validationName() {
  var text = siteNameInput.value;
  var regex = /^[a-zA-Z]{5,}$/i;

  if (regex.test(text) == true) {
    siteNameInput.classList.add("is-valid");
    siteNameInput.classList.remove("is-invalid");
    userMsg.classList.add("d-none");

    return true;
  } else {
    siteNameInput.classList.remove("is-valid");
    siteNameInput.classList.add("is-invalid");
    userMsg.classList.remove("d-none");
    return false;
  }
}

function validationUrl() {
  var textinfo = siteURLInput.value;
  var regex =
    /\b((http|https):\/\/)?(www\.)?[a-zA-Z0-9\-]+\.[a-zA-Z]{2,}(:[0-9]{1,5})?(\/\S*)?\b/;

  if (regex.test(textinfo) == true) {
    siteURLInput.classList.add("is-valid");
    siteURLInput.classList.remove("is-invalid");
    userUrl.classList.add("d-none");
    return true;
  } else {
    siteURLInput.classList.remove("is-valid");
    siteURLInput.classList.add("is-invalid");
    userUrl.classList.remove("d-none");
    return false;
  }
}


function addData() {
  if (
      validationName() && validationUrl()

){
  var site = {
      name: siteNameInput.value,
      url: siteURLInput.value,
};


  siteList.push(site);
  console.log(siteList);
  localStorage.setItem("sitesContainer", JSON.stringify(siteList));
  displayData();
} 
}
function displayData () {
  var content = ""
  for ( var i =0 ; i < siteList.length ; i ++ ){
    content+= 
    `
        <tr>
                        <td>${i+1}</td>
                        <td>${siteList[i].name}</td>
                        <td><a class = " btn btn-success" target ="_blank "href="${siteList[i].url}">visit</a></td>
                        <td>
                            <button onclick="deleteData(${i})" class="btn btn-outline-danger">delete</button>
                        </td>
                    </tr>
    `
  }
  document.getElementById("tableData").innerHTML = content;
}

function deleteData (index){
  siteList.splice(index , 1)
  localStorage.setItem("sitesContainer", JSON.stringify(siteList));
  displayData();
}