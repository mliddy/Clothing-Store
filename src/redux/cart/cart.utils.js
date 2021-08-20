
//utils function to add extra functionality like the quantity++

// addItem to cart -> takes in all the current cartItems and the item to add
// check to see if teh id's are the same (already has taht item in the cart)
// if true, return a map(new array) and in taht array if an item has a matching id
// create a new item with the old properties (...cartitem) and incrememnt the quantity in that item by 1.
// Otherwise, just return the item, unchanged
// Else, just return all the cartItems with the new item added, and set the quantity = 1
// Note: the map shit happening as we want to create a new array so the re-rendder will trigger
export const addItemToCart = (cartItems,cartItemToAdd) =>{
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if(existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity:cartItem.quantity+1}
            : cartItem
            )
    }

    return [...cartItems, {...cartItemToAdd,quantity:1}]

}