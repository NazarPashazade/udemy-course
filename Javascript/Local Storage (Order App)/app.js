const productSelect = document.getElementById('product');
const quantityinput = document.getElementById('quantity');

const totalPriceDisplay = document.getElementById('totalPrice');

const orderSummary = document.getElementById('orderSummary');

const orderForm = document.getElementById('orderForm');

const historyDiv = document.getElementById('history');

const clearHistoryBtn = document.getElementById('clearHistory');


const calculateTotalPrice = () => {
  const price = parseFloat(productSelect.value || 0)
  const quantity = parseInt(quantityinput.value || 0)
  const result = price * quantity
  totalPriceDisplay.innerText = `$${result}`
}

const handleChange = () => {
  calculateTotalPrice()
}

document.addEventListener('DOMContentLoaded', () => {
  const savedorders = JSON.parse(localStorage.getItem('orders'))

  if (savedorders) {
    const lastOrder = savedorders[savedorders.length - 1]
    productSelect.value = lastOrder.price
    quantityinput.value = lastOrder.quantity
  }

  calculateTotalPrice()
  displayOrderHistory()
})

clearHistoryBtn.addEventListener('click', () => {
  localStorage.removeItem('orders')
  displayOrderHistory()
})

orderForm.addEventListener('submit', (event) => {

  const savedOrders = localStorage.getItem('orders')

  const history = savedOrders ? JSON.parse(savedOrders) : []

  const order = {
    date: new Date().toLocaleDateString(),
    price: productSelect.value,
    quantity: quantityinput.value,
    totalPrice: totalPriceDisplay.innerText
  }

  event.preventDefault()

  orderSummary.innerHTML = `

    <h2>Order Summary</h2>

    <p>Product: ${order.price}</p>

    <p>Quantity: ${order.quantity}</p>

    <p>Total Price: ${order.totalPrice}</p>

    `

  history.push(order)

  localStorage.setItem('orders', JSON.stringify(history))

  displayOrderHistory()

})

productSelect.addEventListener('change', handleChange)

quantityinput.addEventListener('change', handleChange)


function displayOrderHistory() {

  const savedOrders = localStorage.getItem('orders')

  const orders = savedOrders ? JSON.parse(savedOrders) : []

  if (orders.length === 0) {
    historyDiv.innerHTML = "<h2>No orders placed yet.</h2>";
    return;
  }

  const tableHTML = `
      <h2>Order History:</h2>
      <table class="order-history-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          ${orders.map((o) => `
            <tr>
              <td>${o.date}</td>
              <td>${o.price}</td>
              <td>${o.quantity}</td>
              <td>${o.totalPrice}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;

  historyDiv.innerHTML = tableHTML;
}