import { applyMiddleware, combineReducers, createStore, Store, AnyAction } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// tipo para usar en el combineReducers
import { AppState } from './state/AppState'

// Reducers
import personReducer from './reducers/personReducer'

const rootReducers = combineReducers<AppState>({
    PersonState:personReducer
})

const store :Store<AppState, AnyAction> = createStore(
    rootReducers,
    undefined,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store