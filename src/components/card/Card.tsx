import { useRef } from 'react';
function Card(props:any) {
    const imgRef = useRef<HTMLImageElement>(null);
    const animationForProduct = () => {
        const picture = imgRef.current;
        if (!picture) return;

        let picture_pos = picture.getBoundingClientRect();
        const cart_pos = props.containerRef.current.getBoundingClientRect();
        const picture2 = document.createElement('img');

        picture2.src = picture.src;
        picture2.alt = picture.alt;

        picture2.style.position = "fixed";
        picture2.style.left = picture_pos.left + "px";
        picture2.style.top = picture_pos.top + "px";
        picture2.style.border = "none";
        picture2.style.zIndex = "100";
        picture2.style.width = "350px";
        picture2.style.height = "100px";

        let start_x = picture_pos.left + 0.8 * picture_pos.width;
        let start_y = picture_pos.top + 0.8 * picture_pos.height;

        let delta_x = (cart_pos.left + 0.8 * cart_pos.width) - start_x;
        let delta_y = (cart_pos.top + 0.8 * cart_pos.height) - start_y;

        document.body.appendChild(picture2);
        void picture2.offsetWidth;
        picture2.style.transform = "translateX(" + delta_x + "px)";
        picture2.style.transform += "translateY(" + delta_y + "px)";
        picture2.style.transform += "scale(0.25)"; // уменьшаем до 25%
        picture2.style.transition = "2s"; // всё происходит за 2 секунды

        setTimeout(() => document.body.removeChild(picture2), 2000);
    };
    
    return (
        <div className="w-full h-full border-2 cursor-pointer border-black bg-white text-white false" 
            onClick={() => props.isFlag && animationForProduct()}>
            <ul className="mt-2 flex justify-center items-center flex-col">
                <li style={{color: 'black'}}>{props.item.title}</li>
                <img src={props.item.icon} alt="product" style={{width: '100%', height: 150}} ref={imgRef} />
                <li style={{color: 'black'}}>{props.item.price}</li>
            </ul>
        </div>
    );
}

export default Card;