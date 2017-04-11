import { createStore, compose, applyMiddleware } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import rootReducer from '../../scaffolding/reducers';
import DevTools from '../containers/DevTools';

const enhancer = compose(
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/,
    ),
  ),
);

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk), enhancer);

    if (module.hot) {
        module.hot.accept('../../scaffolding/reducers', () =>
      store.replaceReducer(require('../../scaffolding/reducers').default),
    );
    }

    return store;
}
