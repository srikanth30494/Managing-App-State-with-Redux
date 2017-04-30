/**
 * Created by Srikanth on 4/17/2017.
 */
export default function(state= null, action){

    switch(action.type){
        case 'BOOK_SELECTED':
        return action.payload;
    }
    return state;
}