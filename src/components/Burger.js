import React from 'react';

const Burger = props => {
    const{ image, name, price, desc, status} = props.details;

    return(
        <li className="menu-burger">
            <div className="image-container">
                <img src={image} alt={name}></img>
            </div>
            <div className="burger-details">
                <h3 className="burger-name">
                    {name}
                    <span className="price">{price} ₽</span>
                </h3>
                <p>{desc}</p>
                <button className="buttonOrder">Заказать</button>
            </div>
        </li>
    )
}

export default Burger;