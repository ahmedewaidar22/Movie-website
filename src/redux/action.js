export const addToFavorites=(payload)=>{
    return{
            type:'ADD',
            payload

    };
};

export const removeToFavorites=(payload)=>{
    return{
          type:'REMOVE',
          payload
        
    };
        
};