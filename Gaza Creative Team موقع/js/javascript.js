document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        document.title = ' Gaza Creative Team - ' + e.target.innerText;
        e.target.style.color = 'red';
    });
});
