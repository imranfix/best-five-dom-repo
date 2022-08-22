const cartArry = [];

 function display(cartPlayer){
     console.log(cartPlayer);
     const tableBody = document.getElementById('cart-products');
     tableBody.innerHTML = '';
     for(let i = 0; i < cartPlayer.length; i++){
         // const name = cartArry[i].innerText;
         // console.log(cartPlayer[i].playerName);
         const name = cartArry[i].playerName


         const tr = document.createElement('tr')
         tr.innerHTML = `
         <th>${i + 1}</th>
         <td>${name}</td>          
         `;
     tableBody.appendChild(tr);
        
      }

    }
  

// get array object and push that array::

function addToCart(element){
    const playerName = element.parentNode.children[1].innerText;
   
    const playerObject = {
        playerName: playerName,
       
    }
 
    cartArry.push(playerObject);
    document.getElementById('total-added-player').innerText = cartArry.length;

     display (cartArry);

    }