const cartArry = [];

function display(cartPlayer){
    // console.log(cartPlayer);
    const tableBody = document.getElementById('test');

    for(let i = 0; i<cartPlayer.length; i++){
        const name = cartArry[i].playerName;
     
     }
  
     const h3 = document.createElement('h3');
     h3.innerHTML = `
              <li>levan</li>
             `;
     
     tableBody.appendChild(h3);

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