import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DataStore from "./store/DataStore";

export const Context = createContext(null);

ReactDOM.render(
    <Context.Provider value={{
        datas: new DataStore()
    }
    }>
        <App/>
    </Context.Provider>,
    document.getElementById('root')
);
