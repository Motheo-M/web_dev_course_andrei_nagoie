import React, { Component } from 'react';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import { robots } from './robots.js';

class App extends Component {
    constructor() {
        super()
        this.state={
            robots: robots,
            searchfield: ''
        }
    }
    render() {
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox />
                <CardList robots={ this.state.robots } />
            </div>
        );
    }
    
}

export default App;