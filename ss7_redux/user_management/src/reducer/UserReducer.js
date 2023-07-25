

const initialValue = {
    list: []
}

export const list = (state = initialValue, action) => {
   
    switch (action.type) {
        case "GET-LIST-USER":
        
            return {...state, list:action.payload}
    
        default:
        
            return state;
        

    }
}