import { Action, Dispatch, Middleware, Store,  } from 'redux';

export const FETCH = Symbol('FETCH');

export interface FetchPayload {
    url: string;
    config: any; // TODO
}

// TODO: type this better
const fetchMiddleware = (store: Store<any>) => (dispatch: Dispatch<any>) => (action: Action) => {
    if (action[FETCH]) {
        const payload = action[FETCH] as FetchPayload;
        fetch(payload.url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'jsonstub-user-key': 'eb7c97b1-1447-4bf0-abbd-84998ec6f0a2',
                'jsonstub-project-key': '6676899d-ac05-4dca-8052-cb4d6bf539e3'
            }
        })
        .then(response => response.json())
        .then(response => dispatch({ type: action.type, payload: { response } }))
        .catch((error) => dispatch({ type: 'error', payload: { error } }));
    } else {
        dispatch(action);
    }
};

export default fetchMiddleware;