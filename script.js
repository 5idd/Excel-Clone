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
    let toAppendRow = '<div class="cell-row rowId-' + i + '"></div>';
    let onAppend = $(".input-cell-container");
    onAppend.append(toAppendRow);
    for (let j = 1; j <= 100; j++) {
        let toAppend = '<div class="input-cell" id="row-' + i + '-col-' + j + '"></div>'
        let onAppend = $(".cell-row.rowId-" + i); //not ".cell-row .rowId-"+i ->space will not be there.
        onAppend.append(toAppend);
    }
}


//selecting a align icon
$(".align-icon").click(function () { //yaha arrow function kaam ni kr rha...
    $(".align-icon.selected").removeClass("selected");
    $(this).addClass("selected");
})

$(".style-icon").click(function () { //yaha arrow function kaam ni kr rha...
    $(this).toggleClass("selected");
})

$(".input-cell").click(function (e) { //yaha arrow function kaam ni kr rha...
    if (e.ctrlKey) {
        let x = getRowCol(this);
        $(this).addClass("selected");
        if (x[0] > 1) {
            let topCellSelected = $('#row-' + (parseInt(x[0]) - 1) + '-col-' + parseInt(x[1])).hasClass("selected");
            if (topCellSelected) {
                console.log("top");
                $(this).addClass("top-cell-selected");
                $('#row-' + (parseInt(x[0]) - 1) + '-col-' + parseInt(x[1])).addClass("bottom-cell-selected");
            }
        }
        if (x[1] > 1) {
            let leftCellSelected = $('#row-' + parseInt(x[0]) + '-col-' + (parseInt(x[1]) - 1)).hasClass("selected");
            if (leftCellSelected) {
                console.log("left");
                $(this).addClass("left-cell-selected");
                $('#row-' + parseInt(x[0]) + '-col-' + (parseInt(x[1]) - 1)).addClass("right-cell-selected");
            }
        }

        if (x[1] < 100) {
            let rightCellSelected = $('#row-' + parseInt(x[0]) + '-col-' + (parseInt(x[1]) + 1)).hasClass("selected");
            if (rightCellSelected) {
                console.log("right");
                $(this).addClass("right-cell-selected");
                $('#row-' + parseInt(x[0]) + '-col-' + (parseInt(x[1]) + 1)).addClass("left-cell-selected");
            }
        }

        if (x[0] < 100) {
            let bottomCellSelected = $('#row-' + (parseInt(x[0]) + 1) + '-col-' + parseInt(x[1])).hasClass("selected");
            if (bottomCellSelected) {
                console.log("bottom");
                $(this).addClass("bottom-cell-selected");
                $('#row-' + (parseInt(x[0]) + 1) + '-col-' + parseInt(x[1])).addClass("top-cell-selected");
            }
        }
    }
    else {
        console.log("hi");
        $(".input-cell.selected").removeClass("selected");
        $(this).addClass("selected");
    }
})

$(".input-cell").dblclick(function () {
    $(".input-cell.selected").removeClass("selected");
    $(this).attr("contenteditable", "true");
    $(this).focus();
})

$(".input-cell").blur(function(){
    $(".input-cell.selected").attr("contenteditable", "false"); //focus hatne p contenteditable false ho jae...
})

$(".input-cell-container").scroll(function () {
    $(".column-name-container").scrollLeft(this.scrollLeft) // jitna input cell scroll hua utna column name container bhi scroll kr do.
    $(".row-name-container").scrollTop(this.scrollTop)
})


function getRowCol(ele) {
    let idArray = $(ele).attr("id").split("-");
    let rowId = idArray[1];
    let colId = idArray[3];
    return [rowId, colId];
}

//style-icons--------------------------------------------------------------------

function updateCell(property, value){ //to make cell bold italic underline...
    $(".input-cell.selected").each(function(){
      $(this).css(property, value);  
    })
}

$(".icon-bold").click(function(){
    if($(this).hasClass("selected")){
        updateCell("font-weight", "bold");
    }else{
        updateCell("font-weight", ""); // to remove bold ----> empty string
    }
})

$(".icon-italic").click(function(){
    if($(this).hasClass("selected")){
        updateCell("font-style", "italic");
    }else{
        updateCell("font-style", ""); 
    }
})

$(".icon-underline").click(function(){
    if($(this).hasClass("selected")){
        updateCell("text-decoration", "underline");
    }else{
        updateCell("text-decoration", ""); 
    }
})

//----------------------------------------------------------------------------