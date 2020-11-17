// from data.js
var tableData = data;

console.log(tableData);

// YOUR CODE HERE!
var tbody = d3.select("tbody");


tableData.forEach(function (data) {
    var row = tbody.append("tr");
    Object.entries(data).forEach(function ([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");
var form = d3.select("form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

    tbody.html("");

    filteredData.forEach(function (data) {
        var row = tbody.append("tr");
        Object.entries(data).forEach(function ([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}





   

