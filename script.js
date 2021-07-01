for (let i = 1; i <= 100; i++) {
    let n = i;
    let name = "";
    while (n) {
        let rem = n % 26;
        if (rem == 0) {
            name = "Z" + name;
            n = Math.floor(n / 26) - 1;
        }
        else {
            name = String.fromCharCode(65 + rem - 1) + name;
            n = Math.floor(n / 26);
        }
    }
    let column = $(".column-name-container");
    let toAppend = '<div class ="column-name colCode-' + name + ' colId-' + i + '">' + name + '</div>';
    column.append(toAppend);
}


for (let i = 1; i <= 100; i++) {
    let row = $(".row-name-container");
    let toAppend = '<div class="row-name rowId-' + i + '">' + i + '</div>'
    row.append(toAppend);
}


for (let i = 1; i <= 100; i++) {
    let toAppendRow = '<div class="cell-row rowId-'+i+'"></div>';
    let onAppend = $(".input-cell-container");
    onAppend.append(toAppendRow);
    for (let j = 1; j <= 100; j++) {
        let toAppend = '<div class="input-cell" id="row-' + i + '-col-' + j + '" contenteditable></div>'
        let onAppend = $(".cell-row.rowId-"+i); //not ".cell-row .rowId-"+i ->space will not be there.
        onAppend.append(toAppend);
    }
}