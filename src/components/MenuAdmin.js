import React from 'react';
import AddBurgerForm from './AddBurgerForm';

const MenuAdmin = props => {
    return(
        <div className="menu-admin">
            <h2>Управление меню</h2>
            <AddBurgerForm addBurger={props.addBurger} />
            <button onClick={props.loadSampleBurgers}>Загрузить бургеры</button>
        </div>
    )
}

export default MenuAdmin;