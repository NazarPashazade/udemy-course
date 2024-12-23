const generalSection = document.querySelector('.content')
const dynamicContentSection = document.getElementById('dynamicContent')

const changeTextBtn = document.getElementById('changeText')
const addElementBtn = document.getElementById('addElement')
const removeElementBtn = document.getElementById('removeElement')

// changeTextBtn.innerText = "JS Simplified"
// changeTextBtn.style.backgroundColor = "red"

// changeTextBtn.setAttribute('title', 'DemoTitle')
// changeTextBtn.removeAttribute("class", "btn")


const handleChnageText = () => {
    dynamicContentSection.innerText = "Text Changed"
    dynamicContentSection.style.backgroundColor = "blue"
    dynamicContentSection.style.color = "white"
}

const handleAddElement = () => {
    const newElement = document.createElement('p')
    newElement.innerText = "JS Simplified!"
    dynamicContentSection.appendChild(newElement)
}

const handleRemoveElement = () => {
    const elements = dynamicContentSection.querySelectorAll('p')

    elements.forEach(element => element.remove())  // dynamicContentSection.removeChild(element)

    // dynamicContentSection.querySelector('p').remove()
}

changeTextBtn.addEventListener('click', handleChnageText)

addElementBtn.addEventListener('click', handleAddElement)

setTimeout(() => {
    addElementBtn.removeEventListener('click', handleAddElement)
}, 5000)

const intervalId = setInterval(() => {
    // handleAddElement()
}, 1000);

setTimeout(() => {
    clearInterval(intervalId)
}, 4000);

removeElementBtn.addEventListener('click', handleRemoveElement)