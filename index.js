let myform = document.querySelector('form');
let task = document.getElementById('task');
let priority = document.getElementById('priority');
let tbody = document.querySelector('tbody');

let alltask = [];
// console.log(alltask);
myform.addEventListener('submit', function(e)
{
    e.preventDefault()
    let obj = {};
    obj.task = task.value;
    obj.priority = priority.value;

    alltask.push(obj);
    tbody.innerHTML = null;
    
    alltask.map(ele =>
        {
            let row = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');

            td1.innerText = ele.task;
            td2.innerText = ele.priority;

            row.append(td1, td2);
            tbody.append(row);

        })

})
