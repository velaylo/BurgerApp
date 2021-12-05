import React, { useState } from 'react';
import restaurants from '../sample-restaurants';

const Landing = props => {
    const [display, setDisplay] = useState(false);
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    const DisplayList = () => {
        const displayState = display;
        setDisplay(!displayState)
        console.log(display)
    }

    const GetTitle = restaurant => {
        const { title, url} = restaurant;
        setTitle(title);
        setUrl(url);
        setDisplay(false);
    }

    const GoToRestaurant = () => {
        const urlState = url;
        props.history.push(`/restaurant/${urlState}`)
    }
    return(
        <div className="restaurant_select">
            <div className="restaurant_select_top">
                <div className="restaurant_select_top-header font-effect-outline" onClick={DisplayList}>{title ? title : 'Выбери ресторан'}</div>
                <div className="arrow_picker">
                    <div className="arrow_picker-up"></div>
                    <div className="arrow_picker-down"></div>
                </div>
            </div>
            {display ? <div className="restaurant_select_bottom">
                <ul>
                    {restaurants.map(restaurant => {
                        return <li onClick={() => GetTitle(restaurant)} key={restaurant.id}>{restaurant.title}</li>
                    })}
                </ul>
            </div> : null}
            {title && !display ? <button onClick={GoToRestaurant}>Перейти в ресторан</button> : null}
        </div>
    )
} 

export default Landing