import arr from "../utils/dummy";

// function Header(){

function Header({A,setA}){

    // function sortArray(){
    //     arr.sort((a,b)=>a.price-b.price);
    //     console.log(arr);
    // }

    function sortByPriceLowtoHigh(){
        // const sorted=A.sort((a,b)=>a.price-b.price);    // This directly sorts A. The state still points to the same array in memory, so React might not detect it as a change. // 🔴 Modifies original A
        const sorted = [...A].sort((a,b)=>a.price-b.price);  // [...] is the spread syntax  // It creates a shallow copy of the array A. // ✅ Creates a new array
        setA(sorted);
        console.log(sorted);
    }

    function priceAbove1999(){
        const sortAbove = arr.filter((value)=>value.price > 1999); // filter return array
        setA(sortAbove);
    }

    function priceLess1999(){
        const sortbelow = arr.filter((value)=>value.price < 1999);
        setA(sortbelow);
    }

    function sortByPriceHightoLow(){
        const sorthightolow=[...A].sort((a,b)=>b.price-a.price);
        setA(sorthightolow);
    }

    return(
        <>
    <div className="head">
        <div className="topLeft">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGb6Jjv3Rr1Lq3SWZtJ0kez7nzW6N-xEw0sULChBNg8chXlDW-W-fSmog&s" height="60px" width="60px"></img>
            <button >Men</button>
            <button >Women</button>
            <button >Kids</button>
            <button >Home and living</button>
            <button >Beauty</button>
            <button >Studio</button>
        </div>

        <input type="text" placeholder="Search for product"></input>

        <div className="topRight">
            <button>Profile</button>
            <button>WishList</button>
            <button>Bag</button>
        </div>

    </div>
    
    <button onClick={sortByPriceLowtoHigh}>Sort low to high</button>
    <button onClick={priceAbove1999}>Price Above 1999</button>
    <button onClick={priceLess1999}>Price below 1999</button>
    <button onClick={sortByPriceHightoLow}>Sort high to low</button>
    </>
    );

}

export default Header;