let table = document.getElementById('sampleTable');
    let i = 3;
    function addRow() {
        table.innerHTML += `<tr><td>Row${i} cell1</td>
        <td>Row${i} cell2</td></tr> `
        i++;
    }