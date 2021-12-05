import React from 'react';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';
import sampleBurgers from '../sample-burgers';

class App extends React.Component {
    state = {
        burgers: {},
        order: {}
    }

    AddBurger = burger => {
        console.log("addBurger", burger)
        const burgers = {...this.state.burgers};
        burgers[`burger${Date.now()}`] = burger;
        this.setState({burgers})
    }

    LoadSampleBurgers = () => {
        this.setState({ burgers: sampleBurgers })
    }

    render() {
        return(
            <div className="burger-paradise">
                <div className="menu">
                    <Header title="Hot Burger" />
                </div>
                <Order />
                <MenuAdmin 
                    addBurger={this.AddBurger} 
                    loadSampleBurgers={this.LoadSampleBurgers}
                />
            </div>
        )
    }
}

export default App;