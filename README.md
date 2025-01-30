# Exercici 1: Gestió d'esdeveniments
## Descripció:
- **Objectiu:** Aprofundir en els conceptes relacionats amb els esdeveniments.
- **Desenvolupament:** Individual.
- **Lliurament:** No s’entrega.

## Enunciat
S’està disputant el partit FC Barcelona VS Real Madrid. Els teus amics i tu heu quedat per veure’l i has volgut preparar una petita aplicació per a controlar les estadístiques. 

- Descàrrega el projecte de l’exercici i realitza les funcions necessàries per a poder complir els següents objectius:
  - Quan es cliqui  sobre la imatge del Barcelona o Madrid amb el botó esquerre, es sumarà un gol i apareixerà al quadre vermell o taronja respectivament.
  - Quan es cliqui  sobre la imatge del Barcelona o Madrid amb el botó dret, es restarà un gol i apareixerà al quadre vermell o taronja respectivament.

  - Quan el ratolí entri sobre la imatge del Barcelona, es sumarà un al quadre marró, que representa les faltes que han fet.
  - Quan el ratolí surt de la imatge del Madrid, es sumarà un al quadre lila, que representa les faltes que han fet.

  - El quadre verd ha d’escriure la composició de les últimes lletres que s’han polsat al teclat, que representa el nom de l'últim jugador que ha marcat. Si es polsa un 0, s’esborrarà el nom.
  - El quadre blau representa el minuts de la partida, ha d’incrementar-se quan es fa doble clic a qualsevol part de la pàgina.

(Jo només he programat el index.ts. Esborrant l'`index.ts` i el codi transpilat a JS dins de .js és literalment el projecte de l'exercici.)

Comandes necessàries per transpilar:
```shell
npx tsc --watch
```
