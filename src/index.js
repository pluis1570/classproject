var render = require ('./render.js')
var tabletop = require ('tabletop')
require ('./index.css')

   /* moet ZEKER blijven staan */
tabletop.init({
  key: 'https://docs.google.com/spreadsheets/d/19c5VxyfV5P3-4jUwramk5fiyFLm4IPGqqLqo8_6f7-o/pubhtml',
callback: function (tabletopData, tabletop) {
  var renderedPlaces = renderPlaces(tabletopData)
  console.log(renderedPlaces)
  document.getElementById("app-4").appendChild(renderedPlaces)
},
   
  simpleSheet: true
})
   
