/*
 * Exercici començat el 29 de gener de 2025.
 * Acabat el 31 de gener de 2025.
 * S’està disputant el partit FC Barcelona VS Real Madrid. 
 * Els teus amics i tu heu quedat per veure’l i has volgut 
 * preparar una petita aplicació per a controlar les estadístiques. 
 * 
 * Descàrrega el projecte de l’exercici i realitza les funcions necessàries 
 * per a poder complir els següents objectius:
 */

// Tots els divs
let colorBoxesDiv: HTMLDivElement = document.getElementById("color-boxes") as HTMLDivElement;
let redDiv: HTMLDivElement = document.getElementById("red") as HTMLDivElement;
let blueDiv: HTMLDivElement = document.getElementById("blue") as HTMLDivElement;
let orangeDiv: HTMLDivElement = document.getElementById("orange") as HTMLDivElement;
let brownDiv: HTMLDivElement = document.getElementById("brown") as HTMLDivElement;
let purpleDiv: HTMLDivElement = document.getElementById("purple") as HTMLDivElement;
let greenDiv: HTMLDivElement = document.getElementById("green") as HTMLDivElement;

// Imatges del Barcelona i Real Madrid
let imatgeBarcelona: HTMLImageElement = document.getElementById("barcelona") as HTMLImageElement;
let imatgeMadrid: HTMLImageElement = document.getElementById("madrid") as HTMLImageElement;

/*
 * Quan es cliqui sobre la imatge del Barcelona 
 * o Madrid amb el botó esquerre, es sumarà 
 * un gol i apareixerà al quadre vermell o 
 * taronja respectivament.
 */
imatgeBarcelona.addEventListener('click', modificarQuadre);
imatgeMadrid.addEventListener('click', modificarQuadre);
imatgeBarcelona.addEventListener('contextmenu', modificarQuadre);
imatgeMadrid.addEventListener('contextmenu', modificarQuadre);

function calcularQuadre(e: Event): void {
  let id: string = (e.target as HTMLElement).id!;
  let valor: number = (e as MouseEvent).button == 0 ? 1 : -1;
  if (id == "barcelona") realitzarCalcul(redDiv, valor);
  else if (id == "madrid") realitzarCalcul(orangeDiv, valor);
}

function realitzarCalcul(div: HTMLDivElement, valor: number): void {
  div.innerHTML = String((Number(div.innerHTML) + valor));
}

/*
function sumarQuadre(e: Event): void {
  let target: HTMLImageElement = e.target as HTMLImageElement;
  if (target.id == "barcelona") redDiv.innerHTML = String((Number(redDiv.innerHTML) + 1));
  else if (target.id == "madrid") orangeDiv.innerHTML = (parseInt(orangeDiv.innerHTML) + 1).toString();
  // console.log(e);
  // console.log(target.id);
}
*/

/*
 * Quan es cliqui  sobre la imatge del Barcelona 
 * o Madrid amb el botó dret, es restarà un gol i 
 * apareixerà al quadre vermell o taronja respectivament.
 */
/*
function restarQuadre(e: Event): void {
  let target: HTMLImageElement = e.target as HTMLImageElement;
  if (target.id == "barcelona") redDiv.innerHTML = String((Number(redDiv.innerHTML) - 1));
  else if (target.id == "madrid") orangeDiv.innerHTML = (parseInt(orangeDiv.innerHTML) - 1).toString();
  // console.log(e);
  // console.log(target.id);
}
*/
function modificarQuadre(e: MouseEvent): void {
  e.preventDefault();
  let id: string = (e.target as HTMLElement).id!;
  if (id == "barcelona" && Number(redDiv.innerHTML) == 0 && e.button == 2) return;
  if (id == "madrid" && Number(orangeDiv.innerHTML) == 0 && e.button == 2) return;
  calcularQuadre(e);
}

/*
 * Quan el ratolí entri sobre la imatge del Barcelona, 
 * es sumarà un al quadre marró, 
 * que representa les faltes que han fet.
 */
/*
 * Quan el ratolí surt de la imatge del Madrid, 
 * es sumarà un al quadre lila, 
 * que representa les faltes que han fet.
 */
imatgeBarcelona.addEventListener('mouseenter', sumarFalta);
imatgeMadrid.addEventListener('mouseleave', sumarFalta);
function sumarFalta(e: Event): void {
  if ((e.target as HTMLElement).id == "barcelona") realitzarCalcul(brownDiv, 1);
  if ((e.target as HTMLElement).id == "madrid") realitzarCalcul(purpleDiv, 1);
}

/*
 * El quadre verd ha d’escriure la composició de les 
 * últimes lletres que s’han polsat al teclat, 
 * que representa el nom de l'últim jugador que ha marcat. 
 * Si es polsa un 0, s’esborrarà el nom.
 */
document.addEventListener('keydown', (ev: KeyboardEvent) => {
  if (ev.key == "0") greenDiv.innerHTML = "0";
  else if (greenDiv.innerHTML.length == 1 && greenDiv.innerHTML == "0")
    greenDiv.innerHTML = ev.key;
  else greenDiv.innerHTML += ev.key;
});

/*
 * El quadre blau representa el minuts de la partida, 
 * ha d’incrementar-se quan es fa doble clic a qualsevol 
 * part de la pàgina.
 */
// Aqui estic utilitzant una funció anònima per a poder passar-li paràmetres a la funció realitzarCalcul
document.body.addEventListener('dblclick', () => realitzarCalcul(blueDiv, 1));
