var i = 0;
var pytjeden = document.getElementById('pyt');
var zerowanie = pytjeden.getElementsByClassName('delete-when-added');
var iloscpyt = 1;
function duplicate() {
    var kolejne = pytjeden.cloneNode(true);
    kolejne.id = "pyt" + ++i;
    pytjeden.parentNode.appendChild(kolejne);
    iloscpyt += 1;
    kolejne.getElementsByTagName('textarea')[0].id = "odpjeden" + i;
    kolejne.getElementsByTagName('textarea')[1].id = "odpdwa" + i;
    kolejne.getElementsByTagName('textarea')[0].value = "";
    kolejne.getElementsByTagName('textarea')[1].value = "";
    console.log(kolejne.getElementsByTagName('textarea')[0].id);
    console.log(kolejne.getElementsByTagName('textarea')[1].id);

}
function dispose()
{
    var ostatnie = document.getElementById('pyt' + i);
    if(i > 0){
    i = i-1;
    ostatnie.remove();
    iloscpyt -= 1;
    }
}
function download(type = 'text/plain') {
    var dane = "";
    var ilosc = document.getElementById('pyt' + i);
    console.log(ilosc);
    var textjeden = document.getElementById("odpjeden0");
    var textdwa = document.getElementById("odpdwa0");
    dane += "pyt0" + " = [\"" + textjeden.value + "\", \"" + textdwa.value + "\"]\n";
    for(let j = 1; j <=i; j++){
    textjeden = document.getElementById("odpjeden" + j);
    textdwa = document.getElementById("odpdwa" + j);
    dane += "pyt" + j +" = [\"" + textjeden.value + "\", \"" + textdwa.value + "\"]\n";

    }
    console.log(dane);

    const blob = new Blob([dane], { type })
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.download = "quiz.py"
    document.body.appendChild(link)
    link.click()

    document.body.removeChild(link)
    URL.revokeObjectURL(url)
}
