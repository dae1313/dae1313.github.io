let persons = [];
let salaries = [];


let employeeValue = {
    phoebe: { name: "Phoebe", salary: "$4000" },
        monica: { name: "Monica", salary: "$2000" },
        rachel: { name: "Rachel", salary: "$2100" },
        joey: { name: "Joey", salary: "$6000" },
        chandler: { name: "Chandler", salary: "$5000" },
        ross: { name: "Ross", salary: "$3000" }
};

document.getElementById("employee-name").focus();

function addSalary() {
    const nameInput = document.getElementById("employee-name").value;
    const salaryInput = document.getElementById("employee-salary").value;

    if (nameInput.trim() && salaryInput.trim()) {
        document.getElementById("employee-input-display").innerHTML = `Employee Name: ${nameInput}<br>Salary: ${salaryInput}`;
        persons.push(nameInput);
        salaries.push(salaryInput);
        displayArray();
    } else {
        document.getElementById("employee-input-display").innerHTML = "";
        alert("Try again. Enter both name and salary.");
    }
    document.getElementById("employee-tbody").innerHTML = "";
    document.getElementById("table-tbody").innerHTML = "";

    document.getElementById("employee-name").focus();
}

function displayArray() {
    const tbody = document.getElementById("employee-tbody");
    tbody.innerHTML = "";

    for (let i = 0; i < persons.length; i++) {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${persons[i]}</td><td>${salaries[i]}</td>`;
        tbody.appendChild(row);
    }
}


function displaySelected() {
    const select = document.getElementById("employee-list-select");
    const employee = employeeValue[select.value];

    if (employee) {
        const displayContainer = document.getElementById("employee-select-display");
        displayContainer.innerHTML = `<strong>Employee Name:</strong> ${employee.name}` + `<br>` + `<strong>Salary: $</strong> ${employee.salary}`;
    } else {
        const displayContainer = document.getElementById("employee-select-display");
        displayContainer.innerHTML = "Sorry try again. Pick a employee from the list";
    }
}

function displaySalary() {
    var tableBody = document.getElementById("employee-tbody");

    tableBody.innerHTML = "";

    for (const employee in employeeValue) {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${employeeValue[employee].name}</td><td>${employeeValue[employee].salary}</td>`;
        tableBody.appendChild(row);
    }

    /*look example of how to create row: https://www.w3schools.com/jsref/met_table_insertrow.asp */
    for (let i = 0; i < persons.length; i++) {
        var newRow = tableBody.insertRow();
        var cellName = newRow.insertCell(0);
        var cellSalary = newRow.insertCell(1);

        cellName.innerHTML = persons[i];
        cellSalary.innerHTML = salaries[i];

    }

    var table = document.getElementById("results_table");
    table.style.display  = "table";

}


/*https://www.geeksforgeeks.org/javascript-program-to-find-largest-element-in-an-array/*/
function displayResults() {
    let total = 0;
    const resultContent = document.getElementById("results");
    
    /*look at these examples to help me get the salary from the list: https://www.freecodecamp.org/news/javascript-map-how-to-use-the-js-map-function-array-method/ */
    /*https://www.educative.io/answers/how-to-get-keys-values-and-entries-in-javascript-object*/ 
    
    const getSalary = salaries.map(function(salary) {
        return parseInt(salary, 10);
    });

    /*https://www.w3schools.com/js/js_object_maps.asp */
    const employeeSalaries = Object.values(employeeValue).map(employee => parseInt(employee.salary.replace("$", "").replace(",", ""), 10));

    const allSalaries = [...getSalary, ...employeeSalaries];

    for (let i = 0; i < allSalaries.length; i++) {
        total += allSalaries[i];
    }

    const averageTotal = total / allSalaries.length;
    const decimalAverage = averageTotal.toFixed(2);
    const highestNumber = Math.max(...allSalaries);

    resultContent.innerHTML = "";


    const h2Element = document.createElement("h2");
    h2Element.textContent = "The Average and Highest Number";
    resultContent.appendChild(h2Element);

    const pElement = document.createElement("p");
    pElement.textContent = "Average: " + decimalAverage + " || Highest: " + highestNumber;
    resultContent.appendChild(pElement);
}






















































