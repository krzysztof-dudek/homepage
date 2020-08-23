const name = "Krzysztof";
const age = 14;

const heading = document.querySelector('.main__heading--js');

heading. innerHTML = `Nazywam się ${name} i mam ${age} lat.`;

function greet (age, name) {
    console.log (
        `Witaj Drogi Odwiedzający, nazywam się ${name} i mam ${age} lat.`
    );
}

greet (age, name)


function createContent(querySelectorContent, content) {
    const element= document.querySelector(querySelectorContent);
    element.innerHTML =  content;
}

createContent('.notes__heading--js' , 'Dzień dobry!' )
