import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/layouts/styles.css';
import App from './app/layouts/App';
import reportWebVitals from './reportWebVitals';


let rootEL = document.getElementById('root');
//
//function render() {
//  ReactDOM.render(<App />, rootEL);
//}
//
//if (module.hot) {
//  module.hot.accept('./app/layouts/App', function() {
//    setTimeout(render)
//  })
//}
//
//render();

const root = ReactDOM.createRoot(rootEL);

if (module.hot) {
  module.hot.accept('./app/layouts/App', function() {
    setTimeout(root.render)
  })
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
