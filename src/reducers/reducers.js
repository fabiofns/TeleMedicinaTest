import { 
    NAME,
    TOTAL, 
    URL_CONTENT,
} from '../actions/actionTypes';

const initialState = {
    name: '',
    total: '',
    urlContent: '',
};

export const reducer = (state = initialState, action) => {

    switch (action.type) {

        case NAME:
            return {
                ...state,
                name: action.value,
            }; 
            
        case TOTAL:
            return {
                ...state,
                total: action.value,
            };             

        case URL_CONTENT:
            return {
                ...state,
                urlContent: action.value,
            };                                  
                            
        default:
            return state;
    }
};