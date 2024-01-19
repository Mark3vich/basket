function Card(props) {
    if(props.isFlag) {
        console.log(props);
    }
    return (
        <div className="w-full h-full border-2 cursor-pointer border-black bg-white text-white false">
            <ul className="mt-2 flex justify-center items-center flex-col">
                <li style={{color: 'black'}}>{props.item.title}</li>
                <img src={props.item.icon} alt="product" style={{width: '100%', height: 150}}/>
                <li style={{color: 'black'}}>{props.item.price}</li>
            </ul>
        </div>
    );
}

export default Card;