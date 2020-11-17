// create variable to reference data.js
var ufoData = data;
//console.log(ufoData);

// reference table location in index.html
var tbody = d3.select("tbody");
// create buildTable function
function buildTable(tableData) {
    // clear the current table data
    tbody.html("");
    // append a table row (tr) for each object in data.js
    tableData.forEach((tableRow) => {
        // append a row to the table body
        var row = tbody.append("tr");
        // append a table data (td) for each value in the object
        Object.values(tableRow).forEach((value) => {
            var cell = row.append("td");
            // add each value as a table cell 
            cell.text(value);
        });
    });
};



// collect the filters
var filters = {};
// create function for the updatedFilters
function updatedFilters() {
    // identify the element, value and id of the filter that was changed
    var changedElement = d3.select(this).select("input");
    var elementValue = changedElement.property("value");
    var filterId = changedElement.attr("id");

    // when a filter value is entered, add id and value to filter
    if (elementValue) {
        filters[filterId] = elementValue;
    }
    else {
        delete filters[filterId];
    }
    // call filterTable function below to apply filter / rebuild table
    filterTable();
}
// create filterTable function
function filterTable() {
    // set filteredData to ufoData
    var filteredData = ufoData;
    // keep data from ufoData that matches filter values
    Object.entries(filters).foreach(([key, value]) => {
        filteredData = filteredData.filter(row => row[key] === value);
    });
    // rebuild the table using buildTable function w/filteredData
    buildTable(filteredData)
}



d3.selectAll(".filter").on("change", updatedFilters);

buildTable(ufoData)
