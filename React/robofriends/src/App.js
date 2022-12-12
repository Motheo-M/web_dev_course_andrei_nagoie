import React, { Component } from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import { robots } from './robots.js';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state={
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState( { searchfield: event.target.value })
    }

    render() {

        const filteredRobot = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={ filteredRobot } />
            </div>
        );
    }
    
}

export default App;