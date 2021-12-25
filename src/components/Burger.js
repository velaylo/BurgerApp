import React from 'react';
import propTypes from 'prop-types';

const Burger = props => {
    const{ image, name, price, desc, status} = props.details;

    const isAvailable = status === 'available';

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
                <button 
                className="buttonOrder" 
                onClick={() => props.addToOrder(props.index)}
                disabled={!isAvailable}
                >
                {isAvailable ? 'Заказать' : "Времеенно нет"}
                </button>
            </div>
        </li>
    )
};

Burger.propTypes = {
    details: propTypes.shape({
        image: propTypes.string, 
        name: propTypes.string,
        price: propTypes.number,
        desc: propTypes.string,
        status: propTypes.string
    }),
    index: propTypes.string,
    addToOrder: propTypes.func
}

export default Burger;