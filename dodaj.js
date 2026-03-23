var i = 0;
var pytjeden = document.getElementById('pyt');

function duplicate() {
    var kolejne = pytjeden.cloneNode(true);
    kolejne.id = "pyt" + ++i;
    pytjeden.parentNode.appendChild(kolejne);
}