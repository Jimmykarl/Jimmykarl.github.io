document.getElementById('abstract-toggle').addEventListener('click', function () {
    const abstractText = document.getElementById('abstract-text');
    const arrow = this.querySelector('.arrow');
    
    if (abstractText.style.display === 'none' || !abstractText.style.display) {
        abstractText.style.display = 'block';
        arrow.classList.add('rotate');
    } else {
        abstractText.style.display = 'none';
        arrow.classList.remove('rotate');
    }
});
