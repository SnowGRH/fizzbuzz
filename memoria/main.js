import { lista, hatter } from "./adat.js";
let IdLista = [];

$(function () {
  const ARTICLE = $("article");
  let txt = osszeallit();
  ARTICLE.html(txt);
  const KEPEKELEME = $("img");
  KEPEKELEME.on("click", onhidded);
  
});

function osszeallit() {
  let txt = "";
  for (let index = 0; index < lista.length; index++) {
    txt += `<div><img id="${index}" src="${hatter}"></div>`;
  }
  return txt;
}
function onhidded(event) {
  let ideleme = $(event.target).attr("id");
  $(event.target).attr("src", `${lista[ideleme]}`);
  IdLista.push(ideleme);
  keptorles();
  if (IdLista.length > 1) {
    const KEPEKELEME = $("img");
    if () {
        
    }
    KEPEKELEME .off("click", onhidded);
    setTimeout(animaciokephide, 1000)


}

}
function animaciokephide () {
  $($("img")).attr("src", `${hatter}`);
  IdLista = [];
  const KEPEKELEME = $("img");
  KEPEKELEME.on("click", onhidded);
}
function keptorles(event) {

}