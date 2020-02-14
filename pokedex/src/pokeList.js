import React, { Component } from 'react';
import pokeArray from './mockPokeData.js';


export default class Pokemon extends Component {
     state = { data: [] };

  render() {
    const mappedData = this.props.pokeArray.map(poke => { <pokeItem pokemon={poke} /> })
      return (
       <ul>
          {mappedData}  
        </ul>
      )
      }}