
// the selector returns all the li elements that are childeren to the ul
// The '$' symbol is used to denote that the variable is a path to an element or node accessed with jQuery, The '$' is not however requiered
var $listHTML = $('ul').html();
// this will appened all the the li elements that are denoted in the variable.
$('ul').append($listHTML);

// Selecting the ul element and using .text with store all the text is associated with ALL the li elements
var $listText = $('ul').text();
// this will append all the text to the ul element but will not have any html element within it
$('ul').append('<p>' + $listText + '</p>')

// Selecting the li element will grab all the html inside ONLY THE FIRST li ELEMENT!!!
var $listItemHTML = $('li').html();
// Since only the nodes from the first li element in the ul is saved, appending it to all the li elements will add only the first li text
$('li').append('<i>' + $listItemHTML + '</i>');

// taking the .text from the li elements WWILLLL take on all the text in ALL the li elements
var $listItemText = $('li').text();
// Appending this text to the li elements will add all of the text from all the li elements to all the li elements
$('li').append('<i>' + $listItemText + '</i>');