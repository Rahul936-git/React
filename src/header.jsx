import { useSelector } from "react-redux";

function Header(){

    const count = useSelector((state)=>state.cart.count);

    return(
        <div id="head">
        <h1>Swiggy</h1>
        <h1 className="change">cart: ({count})</h1>
        </div>
    )
}

export default Header;