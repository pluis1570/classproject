var crel = require('crel')

function renderPlace(Place){
    return crel('div',
    crel('h1', 'Place.title'),
    crel ('img',{'src': 'place.Image'}),
    crel('p', 'Place.content')
    )
}
function renderPlaces(Places){
    return crel ('div',
    'renderPlace')
}
module.exports = renderPlaces

 // Waarvoro diend de "module.exports"?

 /* 
 Waar moet de code staan dat reffereerd naar De spreadsheet ? 
 ->  in de les was de HTMLpagina verdwenen, niet terug gevonden waarom.

 Snap niet goed wat er vervangen wordt ( in de index.js)
*/
