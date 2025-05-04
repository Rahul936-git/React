// const element=React.createElement('h1',{id:'first',className:'class',style:{backgroundColor:"purple",textAlign:"center",color:"white"}},'Rahul kumar shaw');

// const Reactroot=ReactDOM.createRoot(document.getElementById('root'));
// Reactroot.render(element);


// //

// const element=React.createElement('h1',{id:'first',className:'class',style:{backgroundColor:"purple",textAlign:"center",color:"white"}},'Rahul kumar shaw');
// const element2=React.createElement('h2',{id:'second',className:'class',style:{backgroundColor:"tomato",textAlign:"center",color:"black"}},'Web Development');

// const Reactroot=ReactDOM.createRoot(document.getElementById('root'));

// Reactroot.render(element);
// Reactroot.render(element2);

// //

const element=React.createElement('h1',{id:'first',className:'class',style:{backgroundColor:"purple",textAlign:"center",color:"white"}},'Rahul kumar shaw');
const element2=React.createElement('h2',{id:'second',className:'class',style:{backgroundColor:"tomato",textAlign:"center",color:"black"}},'Web Development');

const div1=React.createElement('div',{},[element,element2]);
const Reactroot=ReactDOM.createRoot(document.getElementById('root'));

// Reactroot.render(element);
// Reactroot.render(element2);

Reactroot.render(div1);




