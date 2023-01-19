const form = document.querySelector('#formExpense');
const addButton = document.querySelector('.add-expense');
const name = document.querySelector('#name');
const date = document.querySelector('#date');
const amount = document.querySelector('#amount');
const table = document.querySelector('#expenseTable');

console.log(table);


const addExpense = (e) => {
    e.preventDefault(e);
    console.log(name.value, date.value, amount.value);

    table.innerHTML += `<tr>
        <td>${name.value}</td>
        <td>${date.value}</td>
        <td>$${parseFloat(amount.value)}</td>
        <td>x</td>
    </tr>`

    // Reset form
    form.reset();
}


form.addEventListener('submit', addExpense);


function validate(str) {
    let rgx = /^[0-9]*$/;
    return str.match(rgx);
}
































// const expenses = JSON.parse(localStorage.getItem('expenses')) || [];


// Add Expense
// function addExpense(e) {
//     e.preventDefault();
    
//     let nameInput = document.querySelector('#name').value;
//     let date =  document.querySelector('#date').value;
//     let amount = document.querySelector('#amount').value;

//     if(nameInput === '' || date === '' || amount === '') {
//         console.log('error')
//     } else {
//         const expense = {
//             name: nameInput,
//             date: date,
//             amount: amount,
//             id: expenses.length > 0 ? expenses[expenses.length - 1].id + 1 : 1           
//          }

//          expenses.push(expense);
        

//         // Save in LocalStorage
//         localStorage.setItem('expenses', JSON.stringify(expenses))
//     }
//     // Reset Form
//     form.reset();

//     getExpensesFromLocalStorage()
// }





// function getExpensesFromLocalStorage() {

// const expenseTable = document.querySelector('#expenseTable');

// expenseTable.innerHTML = '';    

//     for (let i = 0; i < expenses.length; i++) {
//             expenseTable.innerHTML += `
//                 <tr>
//                     <td>${expenses[i].name}</td>   
//                     <td>${expenses[i].date}</td>   
//                     <td>${expenses[i].amount}</td>   
//                     <td><a class="delete-button" onclick="deleteExpense(${expenses[i].id})">Delete</td>
//                 </tr>
//             `
//     }
// }

// function deleteExpense(id) {
//     for (let i = 0; i < expenses.length; i++) {
//         if(expenses[i].id === id) {
//             expenses.splice(i, 1)
//         }
        
//     }

//     localStorage.setItem('expenses', JSON.stringify(expenses));

//     getExpensesFromLocalStorage()
// }

// getExpensesFromLocalStorage();
