const name = "Krzysztof";
const age = 14;



function greet (age, name) {
    console.log (
        `Witaj Drogi Odwiedzający, nazywam się ${name} i mam ${age} lat.`
    );
}

greet (14, "Krzysztof")


function createContent(querySelectorContent, content) {
    const element= document.querySelector(querySelectorContent);
    element.innerHTML =  content;
}

createContent('.notes__heading--js' , 'Dzień dobry!' );

const button = document.querySelector ('.action--js');

console.log (button);

const myClick = () => {
    const heading = document.querySelector('.main__heading--js');
    heading. innerHTML = `Nazywam się Krzysztof i mam 14 lat.`;
}

button.addEventListener('click',myClick )
