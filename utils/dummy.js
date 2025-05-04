            //  <Card cloth="T-shirt" Discount="10-20% off"/>
            //  <Card cloth="Pant" Discount="30-50%Off" />
            //  <Card cloth="Skirt" Discount="15-25% off" />
            //  <Card cloth="kurta" Discount="15-20% off" />
            //  <Card cloth="patloon" Discount="11-28% off" />
            //  <Card cloth="shoes" Discount="14-22% off" />
            //  <Card cloth="Shirt" Discount="14-25% off" />
            //  <Card cloth="Jeans" Discount="10-20% off" />
            //  <Card cloth="laggese" Discount="13-24% off" />
            //  <Card cloth="Band" Discount="18-27% off" />
            //  <Card cloth="Tie" Discount="12-30% off" />
            //  <Card cloth="Watches" Discount="10-18% off" /> 



// const arr=[{cloth:"T-shirt", Discount:"10-20% off" },{cloth:"Pant" , Discount:"30-50%Off"},{cloth:"Skirt" , Discount:"15-25% off"},{cloth:"kurta", Discount:"15-20% off"},{cloth:"trousers", Discount:"11-28% off"},{cloth:"shoes", Discount:"14-22% off"},{cloth:"Shirt" , Discount:"14-25% off"},{cloth:"Jeans" , Discount:"10-20% off"},{cloth:"luggage", Discount:"13-24% off"},{cloth:"Band" , Discount:"18-27% off"},{cloth:"Tie", Discount:"12-30% off" },{cloth:"Watches", Discount:"10-18% off"}]

const arr = [
    { 
      cloth: "T-shirt", 
      Discount: "10-20% off", 
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" ,
      price:  1200
    },
    { 
      cloth: "Pant", 
      Discount: "30-50%Off", 
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" ,
      price:  1600
    },
    { 
      cloth: "Skirt", 
      Discount: "15-25% off", 
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" ,
      price:  1300
    },
    { 
      cloth: "kurta", 
      Discount: "15-20% off", 
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSzmTSW5BD4FMbIwz8yChxaUKqnu11mWOro0SHFLLbUw8b4VOizsEMxo2Mk1KKslSr0sDEkt-tDHNMoDHVcCOBdIXyed6wqDk2CiQm80Id27EOEXSsLvqK9",
      price:  1800
    },
    { 
      cloth: "trousers", 
      Discount: "11-28% off", 
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" ,
      price:  4200
    },
    { 
      cloth: "shoes", 
      Discount: "14-22% off", 
      image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" ,
      price:  6200
    },
    { 
      cloth: "Shirt", 
      Discount: "14-25% off", 
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      price:  7200
    },
    { 
      cloth: "Jeans", 
      Discount: "10-20% off", 
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" ,
      price:  9200
    },
    { 
      cloth: "luggage", 
      Discount: "13-24% off", 
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" ,
      price:  2200
    },
    { 
      cloth: "Band", 
      Discount: "18-27% off", 
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" ,
      price:  5200
    },
    { 
      cloth: "Tie", 
      Discount: "12-30% off", 
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" ,
      price:  7200
    },
    { 
      cloth: "Watches", 
      Discount: "10-18% off", 
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" ,
      price:  9200
    }
  ];

console.log(arr);

export default arr;  // In one line only one export default but you can use export before every another function in same file to export multiple files in same folder
                     // and export default cannot write before const 


// //



export function greet(){  // use only simple export as we already used export default before
    return <h1>Shopping section</h1>
}

export function meet(){  // use only simple export as we already used export default before
    return <h2>you will get here your desire product</h2>
}