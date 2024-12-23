const generalSection = document.querySelector('.content')
const dynamicContentSection = document.getElementById('dynamicContent')

const changeTextBtn = document.getElementById('changeText')
const addElementBtn = document.getElementById('addElement')
const removeElementBtn = document.getElementById('removeElement')

document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form submission prevented!");
});

document.getElementById("myImage").addEventListener("dragstart", (event) => {
    event.preventDefault();
    console.log("Image dragging prevented!");
});

document.getElementById("myLink").addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Link navigation prevented!");
});

document.getElementById("list").addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log(`You clicked ${event.target.textContent}`);
    }
});


// changeTextBtn.innerText = "JS Simplified"
// changeTextBtn.style.backgroundColor = "red"

// changeTextBtn.setAttribute('title', 'DemoTitle')
// changeTextBtn.removeAttribute("class", "btn")


// dynamicContentSection.children[0].addEventListener('click', (event) => {
//     event.stopPropagation()
//     console.log('H2 Clicked')
// })

// dynamicContentSection.addEventListener('click', (event) => {
//     console.log('Dynamic Content Clicked')
// })

// document.body.addEventListener('click', (event) => {
//     console.log('Body Clicked')
// })

const handleChnageText = () => {
    dynamicContentSection.innerText = "Text Changed"
    dynamicContentSection.style.backgroundColor = "blue"
    dynamicContentSection.style.color = "white"
}

const handleAddElement = (event) => {
    console.log(event.target)
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

// addElementBtn.addEventListener('click', handleAddElement)

removeElementBtn.addEventListener('click', handleRemoveElement)

setTimeout(() => {
    addElementBtn.removeEventListener('click', handleAddElement)
}, 5000)

const intervalId = setInterval(() => {
    // handleAddElement()
}, 1000);

setTimeout(() => {
    clearInterval(intervalId)
}, 4000);

