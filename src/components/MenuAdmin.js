import React from 'react';
import AddBurgerForm from './AddBurgerForm';
import EditBurgerForm from './EditBurgerForm';

const MenuAdmin = props => {
    return(
        <div className="menu-admin">
            <h2>Управление меню</h2>
            {Object.keys(props.burgers).map(key => {
                return <EditBurgerForm key={key} burger={props.burgers[key]} updatedBurger={props.updatedBurger} index={key}/>
            })}
            <AddBurgerForm addBurger={props.addBurger} />
            <button onClick={props.loadSampleBurgers}>Загрузить бургеры</button>
        </div>
    )
}

export default MenuAdmin;