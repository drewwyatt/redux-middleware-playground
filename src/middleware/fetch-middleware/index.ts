import { Action, Dispatch, Middleware, Store,  } from 'redux';

export const FETCH = Symbol('FETCH');

export interface FetchAction extends Action {
    'FETCH': {
        url: string;
    };
}

// TODO: type this better
const fetchMiddleware = (store: Store<any>) => (dispatch: Dispatch<any>) => (action: Action | FetchAction) => {
    if (action[FETCH]) {
        console.log(action, action[FETCH], (action as FetchAction).FETCH);
        dispatch({ type: 'different_action' });
    } else {
        dispatch(action);
    }
};

export default fetchMiddleware;