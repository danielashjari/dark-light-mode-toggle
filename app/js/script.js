
const CHECKBOX = document.getElementById('checkbox');

CHECKBOX.addEventListener('change', (e) => {
 if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {        
      document.documentElement.setAttribute('data-theme', 'light');    
    }   
});