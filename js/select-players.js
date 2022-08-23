// push an object inside a new array:::
    const cartArry = [];

function display(cartPlayer){
     console.log(cartPlayer);
     const playerBody = document.getElementById('cart-products');
     playerBody.innerHTML = '';

     for(let i = 0; i < cartPlayer.length; i++){
         // const name = cartArry[i].innerText;
         // console.log(cartPlayer[i].playerName);
         const name = cartArry[i].playerName;
        
        if(i < 5 ){
            console.log('ok');   
        }
        else{
            alert(' Warning! You can not select more than 5 because budget is too short to buy players.');
            //  break;
        }


       const tr = document.createElement('tr')
         tr.innerHTML = `
         <th>${i + 1}</th>
         <td>${name}</td>          
         `;
         
        playerBody.appendChild(tr);

      }
    
    }
  

// get array object and push that array::

    function addToCart(element){
// Select button when clicked disable:::
    element.disabled = true;

    const playerName = element.parentNode.children[1].innerText;
    const playerObject = {
        playerName: playerName,
       }
 
    cartArry.push(playerObject);
    document.getElementById('total-added-player').innerText = cartArry.length;
       
    display (cartArry);

    }
    

