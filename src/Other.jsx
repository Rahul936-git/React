import { Outlet , Link } from "react-router";        //  this is used for nested part 

function Others(){

    return(
        <>
        <nav>
            <Link to="nested_0"> Nested_0 </Link>
            <Link to="nested_1"> Nested_1 </Link>
            <Link to="nested_2"> Nested_2 </Link>
        </nav>

        <h1>this is other Page</h1>
        <Outlet></Outlet>
        </>
    )
}

export default Others;