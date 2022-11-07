import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import axios from 'axios';
import './asset/frontend/assets/css/font/flaticon.css'
import './asset/frontend/assets/css/fontawesome.min.css'
import './asset/frontend/assets/css/bootstrap.min.css'
import './asset/frontend/assets/css/bootstrap.min.css.map'
import './asset/frontend/assets/css/default.css'
import './asset/frontend/assets/css/style.css'
import './asset/frontend/assets/css/custom.css'
import './asset/frontend/assets/css/testimonial.css'
import 'react-loading-skeleton/dist/skeleton.css'
import './asset/frontend/assets/css/forBangla.css'
import './asset/frontend/assets/css/custom2.css'
import { baseUrl } from "./helpers/Http";

import { languageCheck } from "./helpers/Helpers";
import reportWebVitals from './reportWebVitals';

const lang = languageCheck();
const token = localStorage.getItem("token");
axios.defaults.baseURL = baseUrl('development');
axios.defaults.headers['Authorization'] = "token" + token;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <Provider store={store} >
            <div className={lang}>
                <App />
            </div>
        </Provider>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();