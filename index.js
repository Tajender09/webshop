import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home(){
    return <App />
}
ReactDOM.render(<Home />, document.querySelector("#root"))