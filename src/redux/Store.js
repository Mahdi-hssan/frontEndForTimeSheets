import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'
import { PersistGate } from 'redux-persist/integration/react'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import createTransform from 'redux-persist/es/createTransform'


const persistConfig ={
    key : 'main-root',
    storage
}
const persistedReducer= persistReducer (persistConfig,rootReducer)
const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
)
const Persistor=persistStore(store)
const DataProvider = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate Loading={null} persistor={Persistor}>
                {children}
            </PersistGate>
        </Provider>
    )
}

export default DataProvider