import { toast} from "react-toastify";

//  get local storage cart
const getStoredCartList = () =>{
    const storedList = localStorage.getItem("cart");
    if(storedList){
        const storedCartList = JSON.parse(storedList);
        return storedCartList;
    }else{
        return [];
    }
}


// add local storage cart
const addLocalStorageCart = (id) =>{
    const storedCartList = getStoredCartList(id);
   
    if(storedCartList.includes(id)){
        toast.error("Already cart exist")
    }else{
        storedCartList.push(id);
        const storedCartStr = JSON.stringify(storedCartList);
        localStorage.setItem("cart", storedCartStr)
        toast.success("Item added to cart!")
    }
}

// cart remove
const removeCart = (id) =>{
    const storedCartList = getStoredCartList();
    const remove = storedCartList.filter(saveCart => saveCart.product_id !== id);
    const removed = JSON.stringify(remove);
    localStorage.setItem("cart", removed);
   
        
}


// wish list part

// get wish list cart local storage
const getStoredWishList = () =>{
    const storedList = localStorage.getItem("wish");
    if(storedList){
        const storedWishList = JSON.parse(storedList);
        return storedWishList;
    }else{
        return [];
    }
}



// add local storage cart
const addLocalStorageWish = (id) =>{
    const storedWishList = getStoredWishList(id);
    if(storedWishList.includes(id)){
        toast.error("Already cart exist")
    }else{
        storedWishList.push(id);
        const storedWishStr = JSON.stringify(storedWishList);
        localStorage.setItem("wish", storedWishStr);
        toast.success("Item added to wishlist!")
        
    }
}







export {addLocalStorageCart,addLocalStorageWish,getStoredCartList,getStoredWishList,removeCart}