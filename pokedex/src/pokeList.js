import React, { Component } from 'react';
import pokeArray from './mockPokeData.js';

export default class Pokemon extends Component {
  state = { name: ""};

  render() {
      return (
          <div>
              {this.props.pokemon.map(function(request)}
          </div>
      )
  }