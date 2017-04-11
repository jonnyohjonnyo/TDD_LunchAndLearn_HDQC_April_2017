import { createStore } from 'redux';
import rootReducer from '../../scaffolding/reducers';

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState);
}
