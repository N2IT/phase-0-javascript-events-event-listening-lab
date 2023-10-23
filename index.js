// const input = document.getElementById('button');

// function addingEventListener() {
// input.addEventListener('click', function() {
//   alert('I was clicked!');
// });
// }

// addingEventListener();
 


 function addingEventListener(){
  const input = document.getElementById('button').addEventListener('click', function(){
    alert("I have been clicked!")
  })
 }
 