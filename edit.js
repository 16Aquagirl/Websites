function updatesave(myid) {

    let id = myid;
    let name = document.getElementById("nm").value;
    let address = document.getElementById("ad").value;
    let age = document.getElementById("age").value;
    let group = document.getElementById("grp").value;
    let city = document.getElementById("city").value;
    let url = `http://localhost:3000/donors/${id}`;
    fetch(url, {
        method: 'PUT',
        body: JSON.stringify({
            name: name,
            address: address,
            age: age,
            group: group,
            city: city
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(Response => Response.json())
        .then(json => {
            alert("Succesfully Update!!!");
        })
}
function editRec(myid) {
    let recid = myid;
    let url = ` http://localhost:3000/donors/${recid}`;
    let myTable = "<table align='center'>";

    async function recDisplay() {
        let myObj = await fetch(url);
        let myData = await myObj.json();

        myTable += `<tr>
        <td>Edit Name</td>
        <td><input type='text' value='${myData.name}' id="nm"></td>       
        </tr>

        <tr>
        <td>Edit Address</td>
        <td><input type='text' value='${myData.address}' id="ad" width="></td>  
        </tr>
        
         <tr>
         <td>Edit Age</td>
         <td><input type='text' value='${myData.age}' id="age"></td>  
         </tr>
        
         <tr>
         <td>Edit Age</td>
         <td><input type='text' value='${myData.age}' id="age"></td>  
         </tr>
        
        <tr>
        <td>Edit Blood Group</td>
        <td><input type='text' value='${myData.group}' id="grp"></td>  
        </tr>
        
        <tr>
        <td>Edit City</td>
        <td><input type='text' value='${myData.city}' id="city"></td>  
        </tr>
        
        <tr>
        <td> </td>
        <td><input type='button' value='Update !!!' onclick="updatesave(${myData.id});"></td>
        </tr>
        `;
        myTable += "</table>";
        document.getElementById("data2").innerHTML = myTable;
        document.getElementById("data2").style.padding = "20px";
    } recDisplay();
}
async function editRecord() {
    let url = "http://localhost:3000/donors";
    let myObj = await fetch(url);
    let myData = await myObj.json();

    let myTable = `<table border="1" width="600" align='center'>
    <tr id="head">
    <td>Name</td>
    <td>Address</td>
    <td>Age</td>
    <td>Group</td>
    <td>City</td>
    </tr>
    `;
    myData.map((key) => {
        myTable += `
        <tr>
        <td>${key.name}</td>
        <td>${key.address}</td>
        <td>${key.age}</td>
        <td>${key.group}</td>
        <td>${key.city}</td>
        <td>
        <a href="#" onclick="editRec(${key.id})">
        <img src="pencil.png" width="30" height="30">  </a>
        </td>
        </tr>
        `;
    });
    myTable += '</table>';
    document.getElementById("data1").innerHTML = myTable;
    document.getElementById("head").style.backgroundColor = "rgb(23, 128, 23)";
    document.getElementById("head").style.color = "white";
}
editRecord();