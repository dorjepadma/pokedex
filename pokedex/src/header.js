import React, { Component } from 'react';

class Header extends Component {
    render () {
        return (
        <header>
            <img src={this.props.pokeball} alt= "pokeball"/>
            <h1>Find your Pokemon!</h1>
        </header>

 )
        ;
    }
}
export default Header;