function onFormSubmit() {
    var formData = readFormData();
    inserNewRecord(formData);
}
function readFormData() {
    var formData = [];
    formData["fullName"] = document.getElementById("fullName").Value;
    formData["empCode"] = document.getElementById("empCode").Value;
    return formData;
}
function inserNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = `<a>Edit</a>
    //
                       <a>Delete</a>`;
}