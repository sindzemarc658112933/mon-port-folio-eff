const modeToggle = document.queryselector('.mode-toggle');
const body = document.body;

modeToggle.addEventListenner('Click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('ligth-mode');
    modeToggle.textContent = body.classList.contains('dark-mode') ? 'Mode Lumineux' : 'Mode sombre';
});