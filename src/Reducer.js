const initialstate = { 
    get_all_records: {
        Loading : false,
        data : []
    },
    get_record: {
      Loading: false,
      data: {}
    }
}

export default function Reducer(state = initialstate, action) {
    
    let actionName = action.type.replace("_PENDING","").replace("_FULFILLED","").replace("_REJECTED","").replace("_RESET","");

    if(initialstate[actionName.toLowerCase()]) {
        switch(action.type) {
            case `${actionName}_PENDING` :
                return { 
                    ...state,
                    [actionName.toLowerCase()] : { 
                        ...state[actionName.toLowerCase()], 
                        Loading : true 
                    }
                }
            case `${actionName}_FULFILLED` :
              return {
                  ...state,
                  [actionName.toLowerCase()] : { 
                      ...state[actionName.toLowerCase()],
                      Loading : false, 
                      data: action.payload.data
                  }
              }
            case `${actionName}_REJECTED` :
                return {
                    ...state,
                    [actionName.toLowerCase()] : { 
                        ...state[actionName.toLowerCase()],
                        Loading : false, 
                        error : true, 
                        errorMessage : action.payload.data.errorMessage
                    }
                }
            default:
                return state
        }
    }
    return state
}