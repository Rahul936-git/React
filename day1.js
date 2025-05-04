//  create element through Js




// //

// const header1=document.createElement('h1');
// header1.innerHTML="Rahul Kumar Shaw";

// header1.style.backgroundColor="purple";
// header1.style.textAlign="center";
// header1.style.color="white";

// const access=document.getElementById('root');
// access.append(header1);

// //




// //

// const React={

//     createElement:function(tag,css,children){

//         const element=document.createElement(tag);
//         element.innerHTML=children;

//         for(let key in css){
//             element.style[key]=css[key]; // // element.style[key] == element.style.backgroundColor;
//         }                                // above both are same // key is JS variable so it is access by [key]
//         return element;
//     }
// }

// const header1=React.createElement("h1",{backgroundColor:'blue',textAlign:'center',color:'white'},"Rahul kumar Shaw");
// const header2=React.createElement('h2',{backgroundColor:'magenta',textAlign:"center",color:'white'},"Medha Ashram School");

// const access=document.getElementById('root');
// access.append(header1);
// access.append(header2);

// //




// //

// const React={

//     createElement:function(tag,css,children){

//         const element=document.createElement(tag);
//         element.innerHTML=children;

//         for(let key in css){
//             element.style[key]=css[key]; // // element.style[key] == element.style.backgroundColor;
//         }                                // above both are same // key is JS variable so it is access by [key]
//         return element;
//     }
// }

// const ReactDOM={
//     render:function(element,root){
//         root.append(element);
//     }
// }

// const header1=React.createElement("h1",{backgroundColor:'blue',textAlign:'center',color:'white'},"Rahul kumar Shaw");
// const header2=React.createElement('h2',{backgroundColor:'magenta',textAlign:"center",color:'white'},"Medha Ashram School");

// // const access=document.getElementById('root');
// // access.append(header1);
// // access.append(header2);

// ReactDOM.render(header1,document.getElementById('root'));
// ReactDOM.render(header2,document.getElementById('root'));

// //





// //

const React={

    createElement:function(tag,css,children){

        const element=document.createElement(tag);

        if(typeof children === 'object'){
            for(let val of children) 
                 element.append(val);
        }

        else
        element.innerHTML=children;

        for(let key in css){
            element.style[key]=css[key]; // // element.style[key] == element.style.backgroundColor;
        }                                // above both are same // key is JS variable so it is access by [key]
        return element;
    }
}

const ReactDOM={
    render:function(element,root){
        root.append(element);
    }
}

const header1=React.createElement("h1",{backgroundColor:'blue',textAlign:'center',color:'white'},"Rahul kumar Shaw");
const header2=React.createElement('h2',{backgroundColor:'magenta',textAlign:"center",color:'white'},"Medha Ashram School");

const li1=React.createElement('li',{},'HTML');
const li2=React.createElement('li',{},'css');
const li3=React.createElement('li',{},"Js");

const Ul= React.createElement('ul',{backgroundColor:'green',textAlign:"left",color:'white'},[li1,li2,li3]);

// unordered list 
// html
// css
// Js

ReactDOM.render(header1,document.getElementById('root'));
ReactDOM.render(header2,document.getElementById('root'));
ReactDOM.render(Ul,document.getElementById('root'));

// //