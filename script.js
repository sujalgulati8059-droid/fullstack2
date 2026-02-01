const textInput = document.getElementById('textInput');
const counter = document.getElementById('counter');
const maxLength = 200;

textInput.addEventListener('input', function() {
    const length = this.value.length;
    counter.textContent = `Characters: ${length} / ${maxLength}`;
    
    if (length >= maxLength) {
        counter.className = 'counter limit-reached';
        this.value = this.value.substring(0, maxLength);
    } else {
        counter.className = 'counter normal';
    }
});