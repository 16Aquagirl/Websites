document.getElementById("btn1").addEventListener("click", displayData);

async function displayData() {
    let dnrnm = document.getElementById("name").value;
    let url = ` http://localhost:3000/donors/?name=${dnrnm}`;
    let myObj = await fetch(url);
    let myData = await myObj.json();
    let myTab = `<table border="1" id="patient">
        <tr id="head">
        <th>Donor name</th>
        <th>Address</th>
        <th>Age</th>
        <th>Blood</th>
        <th>City</th>
        </tr>
        `
    myData.map((key) => {
        myTab += `<tr>
            <td>${key.name}</td>
            <td>${key.address}</td>
            <td>${key.age}</td>
            <td>${key.group}</td>
            <td>${key.city}</td>`
    });
    myTab += `</table>`
    document.getElementById("demo").innerHTML = myTab;
    document.getElementById("head").style.backgroundColor = "rgb(23, 128, 23)";
    document.getElementById("head").style.color = "white";
}
displayData()