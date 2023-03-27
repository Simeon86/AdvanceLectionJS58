window.addEventListener('DOMContentLoaded', () => {

fetch('https://jsonplaceholder.typicode.com/albums')
  .then(response => response.json())
  .then(json => generateTable(json))


function generateTable(data) {
    const table = document.createElement('table');
    const tHead = document.createElement('thead');
    const tBody = document.createElement('tbody');
    const tHeadRow = document.createElement('tr');

    Object.keys(data[0]).forEach(key => { 
        let th = document.createElement('th');
        th.innerText = key;
        tHeadRow.append(th);
    })
    tHead.append(tHeadRow);

    data.forEach(user => addRow(tBody, user))

    tBody.addEventListener('mouseover', function(event) {
        let target = event.target.closest('tr');

        if(!target) return;
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        target.style.background = `rgb(${red}, ${green}, ${blue})`;
    })

    table.append(tHead);
    table.append(tBody);
    document.body.append(table);
}


// userId id title completed


function addRow(tBody, data) {
    let tableRow = document.createElement('tr');

    Object.keys(data).forEach(key => {
        let td = document.createElement('td');
        td.innerText = data[key];
        tableRow.append(td);
    });
    tBody.append(tableRow);
}


document.querySelector('#myForm').addEventListener('submit', e => {
    e.preventDefault();
    let form = e.target;

    let userId = form.querySelector('#userId').value;
    let id = form.querySelector('#id').value;
    let title = form.querySelector('#title').value;
    let completed = form.querySelector('#completed').value;

    let todoObject = {
        userId,
        id,
        title,
        completed
    }

    addRow(document.querySelector('tbody'), todoObject);
})

});

    