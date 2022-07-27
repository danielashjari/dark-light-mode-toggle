
const CHECKBOX = document.getElementById('checkbox');

const DARK_MQ = window.matchMedia("(prefers-color-scheme: dark)");

CHECKBOX.addEventListener('change', (e) => {
 if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {        
      document.documentElement.setAttribute('data-theme', 'light');    
    }   
});

// check the toggle when prefers-color-scheme is dark
if(DARK_MQ.matches) {
  CHECKBOX.checked=true;
}
