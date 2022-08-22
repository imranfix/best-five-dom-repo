const cartArry = [];

function display(cartPlayer){
    // console.log(cartPlayer);
    const playerBody = document.getElementById('test');
    playerBody.innerText = '';

    for(let i = 0; i<cartPlayer.length; i++){
        const name = cartArry[i].innerText;
       
     
     }

     
  
     const ol = document.createElement('ol');

     ol.innerHTML = `
              <li>messi</li>
             `; 
          
     playerBody.appendChild(ol);

}



// get array object and push that array::

function addToCart(element){
    const playerName = element.parentNode.children[1].innerText;
   
    const playerObject = {
        playerName: playerName,
    }
 
    cartArry.push(playerObject);

    document.getElementById('test').innerText = cartArry;
    display (cartArry);

}