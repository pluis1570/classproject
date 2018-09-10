var crel = require('crel')

function renderHeader() {
    return crel('h1', place.area)
}

function renderFooter() {
return crel('address', )
}

function renderPlace(place) {
return crel('li',
    place.information+ ': ' + place.Image)
}

function renderPlaces(places) {
return crel('ul',
    places.map(renderPlace))
}

function renderApp(places) {
 return crel('div',
   renderHeader(),
   renderPlaces(places),
   renderFooter())
}
module.exports = renderApp
/*

function renderPlace(place){
    return crel('div',
    crel('h1', place.area),
    crel ('img',{'src': place.Image}),
    crel('p', place.information)
    )
}
function renderPlaces (place){
    return crel ('div',
    renderPlace)
}
module.exports = renderPlace



varriablen voor tabeltop zijn niet correct . ik krijg mijn DIv met elementen te zien .  maar eenmaal ik date erin steek  worden dezen niet weer gegeven.
nav wat zitten kijken wat ik kon veranderen van namen , zonder succes

"renderPlaces blijft niet herkend"



*/
