import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import 'reset.scss'

if (document.body.style.width > '500px') { window.alert("手机打开体验更加") }
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

