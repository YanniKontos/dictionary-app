const form = document.getElementById('inputForm');
const searchDefinition = document.getElementById('search-definition'); 
const definitionText = document.getElementById('definition-text')
const api = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

form.addEventListener('submit', e => {  
    e.preventDefault();                      
    
    fetch(api + searchDefinition.value)
    .then(response => response.json())
    .then(data => {
        let definition = (data[0].meanings[0].definitions[0].definition);
        definitionText.textContent = definition;
    });
});