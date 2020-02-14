import React, { Component } from 'react';
import PokeItem from './pokeItem';
// import pokeArray from './mockPokeData.js';

export default class Pokemon extends Component {
     state = { data: [] };

  render() {
    const mappedData = this.props.pokeArray.map(poke => { return <PokeItem key={poke._id} pokemon={poke} /> })
      return (
       <ul>
          {mappedData}  
        </ul>
      )
      }}