//Remove <main> element with id = "main"
//Declare a variable 'element' to reference the method 

const element = document.querySelector('main').remove();

//Create new header <h1> element with id 'victory'
//Use .id method to assign id 'victory' to created h1 tag

const newHeader = document.createElement('h1');
newHeader.id = 'victory';

//Set the text of h1 tag to 'YOUR-NAME is the champion'
//Append element to DOM
newHeader.textContent = 'Morine is the champion'; 
document.body.append(newHeader);