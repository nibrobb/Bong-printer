function printBongs (){
    let msg = prompt("Hello, how many bongs");
    msg = Number(msg);
    for (i= 0; i< msg; i++){
        createBong();
    }
}

function printToPDF () {
    window.print();
}

let counterString;
let counter = 1;


function createBong() {
    counterString = '0'.repeat(3 - counter.toString().length) + counter;
    let template = `
<div id='rightside'>
A${counterString}
</div>
<div id='leftside'>
A${counterString}
</div>
<div id='bong-inside'>
<div id='text-inside'>
    <img id='imgplace' src="images/icon.png" width="15" height="20">
    <b>Integrerbar</b>
    <br>
    <div id='small-text'>
        Øl, Vin, Cider og Brus
    </div>
</div>
</div>
<br>
`;
    if(counter <= 18){
            let newDiv = document.createElement(`div`);
            newDiv.className = 'bong';
            newDiv.innerHTML = template;
            document.getElementById('column_1').appendChild(newDiv);
            counter = counter + 1;
    } else if (counter > 18 && counter <= 36){
            let newDiv = document.createElement(`div`);
            newDiv.className = 'bong';
            newDiv.innerHTML = template;
            document.getElementById('column_2').appendChild(newDiv);
            counter = counter + 1;
    } else if (counter > 36){
            let newDiv = document.createElement(`div`);
            newDiv.className = 'bong';
            newDiv.innerHTML = template;
            document.getElementById('column_3').appendChild(newDiv);
            counter = counter + 1;
    }
}
