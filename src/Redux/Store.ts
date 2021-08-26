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
import globalReducer from './reducers/globalReducer'
import cuentasReducer from './reducers/cuentasReducer';
import arancelesReducer from './reducers/arancelesReducer';
import barridasReducer from './reducers/barridasReducer';
import cajaReducer from './reducers/cajaReducer';
import ctacteReducer from './reducers/ctacteReducer';
import modalTableReducer from './reducers/modalTableReducer';
import alumnosSaoReducer from './reducers/alumnosSaoReducer'; 


const rootReducers = combineReducers<AppState>({
    CuentasState:cuentasReducer,
    PersonState:personReducer,
    UsuarioState:usuarioReducer,
    ModalState:modalReducer,
    InformesState:InformesReducer,
    GlobalState: globalReducer,
    ArancelesState:arancelesReducer,
    BarridasState:barridasReducer,
    CajaState:cajaReducer,
    CtacteState: ctacteReducer,
    ModalTableState:modalTableReducer,
    AlumnosSaoState:alumnosSaoReducer
})

const store :Store<AppState, AnyAction> = createStore(
    rootReducers,
    undefined,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store