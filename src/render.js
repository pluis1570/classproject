var crel = require('crel')
/*
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
module.exports = renderApp*/

function renderPlace(place){
    return crel('div',
    crel('h1', place.Area),
    crel ('img',{'src': place.Image}),
    crel('p', place.Information)
    )
}
function renderPlaces (places){
    return crel ('div',places.map(renderPlace))
}
module.exports = renderPlaces

/*


*/
