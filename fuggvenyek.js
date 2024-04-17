





export function tablazatOsszeallit(lista) {


  /* összeállítja a html kódot szöveges formátumban, minden sor végén legyen egy kuka! */

  /*  szorgalmi: a fejléc kulcsait is ciklussal írd ki! */

  let txt = "";
  txt += "<table class='table table-striped'><tr>";


  for (let i = 0; i < Object.keys(lista[0]).length; i++) {
    let elem = Object.keys(lista[0])[i];
    elem = (elem).charAt(0).toUpperCase() + elem.slice(1)
    txt += `<th>${elem}</th>`;
  }


  txt += "</tr>";

  lista.forEach((element,i) => {
    txt += `<tr>`;
    for (const key in element) {
      /* objektumokon iterál végig */
      
      txt += `<td>${element[key]}</td>`;
    }

    txt += `<td id="${i}"class="kuka">🗑️</td> </tr>`;
  });


  txt += "</table>";
  return txt;
}







export function megjelenites(txt) {
  /* megjelníti egy html szoveget egy html elemben */
  const adatokELEM = $(".adatok");
  adatokELEM.html(txt);
}






