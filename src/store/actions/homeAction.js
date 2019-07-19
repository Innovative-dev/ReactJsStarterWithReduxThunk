import axios from 'axios';

import {SUCCESS } from './types';

// export const informationFetch = () => {
//     console.log('infomationFetch is called');
//     return dispatch =>{
//     axios.get('http://www.mocky.io/v2/5c41920e0f0000543fe7b889')
//     .then(response =>{
//         console.log("rsponse in action "+ JSON.stringify(response));
//         dispatch({ tyepe:SUCCESS, payload: response.data  });
//     })
//     .catch(error => {
//         dispatch({ tyepe:SUCCESS, payload: null  })
//     });
// }
// } 

export const informationFetch = () => {
    console.log("informationFetch  is called");
    return dispatch => {
        // axios.post('http://www.mocky.io/v2/5c41920e0f0000543fe7b889')
    axios.post('http://test.com')
        .then( response => {
            console.log("informationFetch  is called nex");
            console.log("enquiry response", JSON.stringify(response));
            dispatch({ type: SUCCESS, payload: response.data});
        })
        .catch( error => {
            console.log("enquiry fetch error", error);
            dispatch({ tyepe:SUCCESS, payload: null  })
        })
    }
}