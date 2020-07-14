import React from 'react';
import logo from './logo.svg';
import main from './main.png';
import './App.css';
import { findByLabelText } from '@testing-library/react';

function App() {
    return (
        <div className="App" >
            <div><a style={{fontSize : 100}}>ESTELLA GRAMO</a></div>
            <div className="App-main">
                <img src={main} className="main" alt="logo" />
                <div className="Login-from">
                    <form >
                        <div>ESTELLA GRAMO
                            <p><input type="text" placeholder="아이디"/></p>
                            <p><input type="password" placeholder="패스워드"/> </p>
                            <p><button>로그인</button> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
