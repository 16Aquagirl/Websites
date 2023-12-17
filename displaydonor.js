async function dataDisplay()
{
    let url= "http://localhost:3000/donors";
    let myObj= await fetch(url);
    let myData= await myObj.json();

    let myTab=`<table border="1" width="400">
    <tr id="head">
    <td>Donor Name</td>
    <td>Address</td>
    <td>Age</td>
    <td>Blood</td>
    <td>City</td>
    </tr>
    `
    myData.map((key)=>{
        myTab+=`<tr>
        <td>${key.name}</td>
        <td>${key.address}</td>
        <td>${key.age}</td>
        <td>${key.group}</td>
        <td>${key.city}</td>
        `
    });
    myTab +=`</table>`
    document.getElementById("demo").innerHTML = myTab;
    document.getElementById("head").style.backgroundColor = "rgb(23, 128, 23)";
    document.getElementById("head").style.color = "white";
}
dataDisplay()