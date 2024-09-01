document.getElementById('colorButton').addEventListener('click', function() {
    const title = document.getElementById('title');
    const currentColor = title.style.color;

    if (currentColor === 'red') {
        title.style.color = '#333';
    } else {
        title.style.color = 'red';
    }
});