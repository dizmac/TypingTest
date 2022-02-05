const button = document.getElementById("start");
const display = document.getElementById("displayStyle");
const element = document.getElementById("text");
const input = document.getElementById("userInput");
const title = document.getElementById('title');
const result = document.getElementById('result');


let start, words, first = false, i = 0, mode = 0;

const init = () => {
  const quote = getQuote();
  
  words = quote.split(' ');
  button.style.display = 'none';
  input.style.display = 'flex';

  element.innerHTML = quote;
  document.body.appendChild(element);
  document.body.appendChild(input);
}

const getQuote = () => {
  const quotes = ['True love stories never have endings.', 'Never give up work. Work gives you meaning and purpose and life is empty without it.', 'Science can flourish only in an atmosphere of free speech.']; //expandable
  return quotes[Math.floor(Math.random()*2)]
}

const changeStyle = () => {
  if (mode === 0) {
    mode = 1;
    document.body.style.background = '#383838';
    button.style.borderColor = '#383838';
    button.style.color = '#383838';
    display.style.borderColor = '#383838';    
    display.style.color = '#383838';  
    input.style.color = 'white';
    input.style.backgroundColor = '#383838';
    input.style.borderColor = 'white';
    element.style.color = 'white';
    result.style.color = 'white';
    title.style.color = 'white';
  }
}

const type = () => {

  if (!first) {
    start = Date.now();
    first = true;
  }

  const cWord = words[i];
  const v = input.value;

  if (v.trim() === cWord && (v.includes(' ') || v.includes('.'))) {
    if (i === words.length - 1) {
      const t = (Date.now() - start)/1000;
      input.value = 'Completed!';
      input.setAttribute('readonly', true);
      result.innerHTML = `You have completed this quote in ${t.toFixed(2)} seconds! That is an average of ${(words.length/t * 60).toFixed(2)} WPM`;

      result.style.fontSize = '13pt';

      return document.body.appendChild(result);
    }
  
    input.value = '';
    i++;
  }
}


input.style.display = 'none';

button.addEventListener('click', init);
display.addEventListener('click', changeStyle);
input.addEventListener('input', type);