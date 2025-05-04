// const element=React.createElement("h1",{},"Rahul kumar Shaw");

// ReactDOM.render(element,document.getElementById('root'));

                                                         // react-dom.development.js:73 Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot ﻿
// //

const element=React.createElement("h1",{},"Rahul kumar Shaw");

const Reactroot =ReactDOM.createRoot(document.getElementById('root'));

Reactroot.render(element); 

// combine in one line


// ReactDOM.createRoot(document.getElementById('root')).render(React.createElement('h1',{},'Rahul kumar Shaw'));
