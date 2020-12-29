import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId = "bdcd42dc-a8d7-4cf2-aef6-0c0048d47fb0" language = "en-US">
        <Provider>
            <App />
        </Provider> 
    </SpeechProvider>,
    document.getElementById('root')
);