function Card(props){
    return(
        <div className="inSide" style={{border:"2px solid black", padding:"1rem"}}>
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9AkVq8hteCTYio8TBXMLCE3FnIJ2m55kY1w&s" height="200px" width="200px" /> */}
            <img src={props.image}
                 alt={props.cloth}
                 height="200px"
                 width="200px"
                 style={{objectFit:"cover"}}
            />

            <div style={{textAlign:"center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.Discount}</h1>
                <h2>Shop now</h2>
                <h2>{`Rupee: ${props.price}`}</h2>
            </div>

        </div>
    )
}

export default Card;