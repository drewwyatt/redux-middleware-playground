import { Action } from 'redux';

export interface RootState {

}

export default function rootReducer(state: RootState = {}, action: Action): RootState {
    return state;
}