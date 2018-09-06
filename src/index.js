var render = require ('./render')
var tabletop = require ('tabletop')
var foo = require ('./foo')


function init() {
    Tabletop.init({
 key: 'https://docs.google.com/spreadsheets/d/19c5VxyfV5P3-4jUwramk5fiyFLm4IPGqqLqo8_6f7-o/pubhtml',
    callback: function (tabletopData, tabletop) {
     //var renderedPlaces = renderPlaces(tabletopData)
      console.log(tabletopData)
     // document.getElementById("app-4").appendChild(renderedPlaces)
     document.body.appendChild(render(tabletopData))
    },
 
    simpleSheet: true
  })
 }
 