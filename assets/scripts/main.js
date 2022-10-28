
function Play(){
    //take the option from 
    let option = document.getElementById("selection").value;
    console.log(option);
    switch(option){
        case "1":
            console.log("creation 10x10 table");
            createTable(100, "sq10");
            break;
        case "2":
            createTable(81, "sq9");
            break;
        case "3":
            createTable(49, "sq7")
            break;
    }
}


function createTable(n_square, style){
    //make a node/connection with the grid
    let table = document.getElementById("grid");
    //creation square by square
    for(let i = 0; i<n_square; i++){
        //function that create a single square
        console.log(style);
        let instant_square =singleSquare(style);
        table.append(instant_square);
    }

}


function singleSquare(style){
    const div = document.createElement('div');
    div.classList.add(style);
    return div;
}
