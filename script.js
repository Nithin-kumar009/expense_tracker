// script.js
let expenses = [];
let total = 0;

function addExpense() {
  const title = document.getElementById("title").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (title === "" || isNaN(amount)) {
    alert("Please enter valid details");
    return;
  }

  expenses.push({ title, amount });

  total += amount;
  document.getElementById("total").innerText = total;

  const li = document.createElement("li");

  li.innerHTML = `
    ${title} - ₹${amount}
    <button class="delete-btn" onclick="deleteExpense(this, ${amount})">Delete</button>
  `;

  document.getElementById("expense-list").appendChild(li);

  document.getElementById("title").value = "";
  document.getElementById("amount").value = "";
}

function deleteExpense(button, amount) {
  button.parentElement.remove();

  total -= amount;
  document.getElementById("total").innerText = total;
}