import {REQUEST,SUCCESS,FAIL } from '../actions/types';

const initial_state = {
    loading: false,
    infomation: null
}

export default(state = initial_state, action) => {

        switch(action.type){
            
            case REQUEST:
                return{ ...state, loading: true, };

            case SUCCESS:
                return {...state, loading: false, infomation: action.payload }

             case FAIL:
                return{ ...state, loading: false, infomation: null};

                default:
                    return state;
        }

}