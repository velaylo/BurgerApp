import React from 'react';
import propTypes from 'prop-types';
import AddBurgerForm from './AddBurgerForm';
import EditBurgerForm from './EditBurgerForm';

const MenuAdmin = props => {
    return(
        <div className="menu-admin">
            <h2>Управление меню</h2>
            {Object.keys(props.burgers).map(key => {
                return (
                    <EditBurgerForm 
                        key={key} 
                        burger={props.burgers[key]} 
                        updatedBurger={props.updatedBurger} 
                        index={key}
                        deleteBurger={props.deleteBurger}
                    />
                )
            })}
            <AddBurgerForm addBurger={props.addBurger} />
            <button onClick={props.loadSampleBurgers}>Загрузить бургеры</button>
        </div>
    )
}

MenuAdmin.propTypes = {
    burgers: propTypes.object,
    deleteBurger: propTypes.func,
    updatedBurger: propTypes.func,
    addBurger: propTypes.func,
    loadSampleBurgers: propTypes.func
}

export default MenuAdmin;