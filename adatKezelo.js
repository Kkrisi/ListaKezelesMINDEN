


export function tablazatRendez(lista, irany) {
  /* - adott mező (név) szerint rendezi a táblázatot. - akkor hívódik meg, ha a táblázat név fejlécmezőjére kattintunk. Berendezzük a listát */

  /* szorgalmi: a.nev első betűjének karakterkódja alapján */
  lista.sort(function (a) {

    console.log("a:",a)

    if(typeof a === "number"){
      console.log("a - szam:",a);
    } else if (typeof a === "string") {
      a = atalakit(a);
      console.log("a- szoveg:",a);
    }



  
 
  });

  return lista;
}







function atalakit(szoveg) {
  // Cseréljük le az Á és É karaktereket A-ra és E-re
  szoveg.nev = szoveg.nev.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  return szoveg;
}





export function szuresNevSzerint(lista, szurtSzoveg) {
  /* szurtLista - a szűrőbe írt szó alaján kilistázza azokat az adatokat a listából, amelyekben szerepel a név mezőjében az adott szó.  */
  const SZURTLiSTA = lista.filter(function (elem) {
    return elem.nev.includes(szurtSzoveg);
  });
  console.log(SZURTLiSTA);
  return SZURTLiSTA;
}






export function sorTorles(lista, index) {
  /* - minden sor végén legyen egy kuka, a sor indexével, erre a kukára kattintva töröljük az adott sort a listából, és újra megjelenítjük a táblázatot a módosult listával.   */
  lista.splice(index, 1);
  return lista;
}
