const button = document.getElementById('generate');
const quote = document.getElementById('quote');
const URL = 'https://api.quotable.io/random';


console.log(button, quote);

button.addEventListener('click', async (e) => {

    const response = await fetch(URL);
    const data = await response.json();

    quote.innerHTML = '';
    quote.textContent = data.content;
    button.textContent = 'Generate Next Quote';
})