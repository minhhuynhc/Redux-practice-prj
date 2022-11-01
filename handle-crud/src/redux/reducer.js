import axios from "axios"





export const initialState = []
const reducer = (state, action) => {
    switch (action.type){
        case "addData":
        return [
            ...state,
            {data: action.data}
        ]
        default: 
        return[
            state
        ]
    }
}
export default reducer