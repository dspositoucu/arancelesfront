import { applyMiddleware, combineReducers, createStore, Store, AnyAction } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// tipo para usar en el combineReducers
import { AppState } from './state/AppState'

// Reducers
import personReducer from './reducers/personReducer'
import usuarioReducer from './reducers/userReducer';
import modalReducer from './reducers/modalReducer';
import InformesReducer from './reducers/informesReducer'

const rootReducers = combineReducers<AppState>({
    PersonState:personReducer,
    UsuarioState:usuarioReducer,
    ModalState:modalReducer,
    InformesState:InformesReducer
})

const store :Store<AppState, AnyAction> = createStore(
    rootReducers,
    undefined,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store