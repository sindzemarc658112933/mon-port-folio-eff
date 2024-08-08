//sauvegarder la preference de mode dans le local storage
function setMode(mode){
    ReportBody.ClassList.remove('Ligth-mode','dark-mode');
    ReportBody.ClassList.add(mode);
    localStorage.setItem('portfolioMode',mode);
}
//charger la preference de mode a partir du localstorage
const storedMode= localstorage.getItem('portfolioMode');
if (storedMode){
    setMode(storedMode)
} else{
    setMode('ligth-mode');
}