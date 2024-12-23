const productSelect = document.getElementById('product');
const quantityinput = document.getElementById('quantity');

const totalPriceDisplay = document.getElementById('totalPrice');

const orderSummary = document.getElementById('orderSummary');

const orderForm = document.getElementById('orderForm');


const handleChange = () => {
    const price = parseFloat(productSelect.value || 0)
    const quantity = parseInt(quantityinput.value || 0)
    const result = price * quantity
    totalPriceDisplay.innerText = `$${result}`
}


orderForm.addEventListener('submit', (event) => {
    event.preventDefault()

    orderSummary.innerHTML = `

    <h2>Order Summary</h2>

    <p>Product: ${productSelect.value}</p>

    <p>Quantity: ${quantityinput.value}</p>

    <p>Total Price: ${totalPriceDisplay.innerText}</p>

    `
})

productSelect.addEventListener('change', handleChange)

quantityinput.addEventListener('change', handleChange)