function redDel(myid)
{
    let recId=myid;
    alert
    let url=`http://localhost:3000/donors/${recId}`;
    fetch(url, {method: "DELETE"})
    .then(response=>{
        alert("RecordDeleted");
    });
}
async function recordDelete(){
    let url=" http://localhost:3000/donors";
    let myObj= await fetch(url);
    let myData= await myObj.json();
    let tableData=`<table border="1" width="600" align="center">
    <tr id="head">
    <td>Name</td>
    <td>Address</td>
    <td>Age</td>
    <td>Blood</td>
    <td>City</td>
    <td>Delete</td>
    </tr>
    `;
    myData.map((key)=>{
        tableData+=`
        <tr>
        <td>${key.name}</td>
        <td>${key.address}</td>
        <td>${key.age}</td>
        <td>${key.group}</td>
        <td>${key.city}</td>
        <td>
        <a href="#" onclick="redDel(${key.id})">
        <img src="del.png" width="30" height="30">
        </a>
        </td>
        </tr>
        `;
    });
    tableData+="</table>";
    document.getElementById("data").innerHTML=tableData;
    document.getElementById("head").style.backgroundColor = "rgb(23, 128, 23)";
    document.getElementById("head").style.color = "white"; 
}
recordDelete();