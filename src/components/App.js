import React from 'react';
import propTypes from 'prop-types';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';
import sampleBurgers from '../sample-burgers';
import Burger from './Burger';
import base from '../base';

class App extends React.Component {

    static propTypes = {
        match: propTypes.object
    }

    state = {
        burgers: {},
        order: {}
    }

    componentDidMount() {
        const { params } = this.props.match

        const localStorageRef = localStorage.getItem(params.restaurantId);
        if (localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) });   
        }

        this.ref = base.syncState(`${params.restaurantId}/burgers`, {
            context: this,
            state: 'burgers'
        });
    }

    componentDidUpdate() {
        const { params } = this.props.match
        localStorage.setItem(params.restaurantId, JSON.stringify(this.state.order));
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    AddBurger = burger => {
        const burgers = {...this.state.burgers};
        burgers[`burger${Date.now()}`] = burger;
        this.setState({burgers})
    }

    UpdatedBurger = (key, updatedBurger) => {
        const burgers = {...this.state.burgers};
        burgers[key] = updatedBurger;
        this.setState({burgers});
    }

    DeleteBurger = key => {
        const burgers = {...this.state.burgers};
        burgers[key] = null;
        this.setState({burgers});
    }

    LoadSampleBurgers = () => {
        this.setState({ burgers: sampleBurgers })
    }

    AddToOrder = key => {
        const order = { ...this.state.order }
        order[key] = order[key] + 1 || 1;
        this.setState({ order });
    }

    DeleteFromOrder = key => {
        const order = { ...this.state.order }
        delete order[key];
        this.setState({ order });
    }

    render() {
        return(
            <div className="burger-paradise">
                <div className="menu">
                    <Header title="Hot Burger" />
                    <ul className="burgers">
                        {Object.keys(this.state.burgers).map(key => {
                            return (
                                <Burger 
                                    key={key} 
                                    index={key} 
                                    addToOrder={this.AddToOrder}
                                    details={this.state.burgers[key]} 
                                />
                            );
                        })}
                    </ul>
                </div>
                <Order burgers={this.state.burgers} order={this.state.order} deleteFromOrder={this.DeleteFromOrder} />
                <MenuAdmin 
                    addBurger={this.AddBurger} 
                    loadSampleBurgers={this.LoadSampleBurgers}
                    burgers={this.state.burgers}
                    updatedBurger={this.UpdatedBurger}
                    deleteBurger={this.DeleteBurger}
                />
            </div>
        )
    }
}

export default App;