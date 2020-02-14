import React, { Component } from 'react';
import Header from './header';
import pokeArray from "./mockPokeData.js"
import Pokemon from './pokeItem.js';
import './App.css';
import pokeball from './assets/pokeball.jpg';

export default class App extends Component {
  state = { selected: null,
          hp: null,
        }

  render () {
    return (
      <>
      <Header pokeball={pokeball}/>
      <Pokemon pokemon={pokeArray[0]}   />
      </>
    )
    // const pokemonNodes = pokemonData
    // .filter (pokemon => {
    //     if (!this.state.selected) return true;
    //     return pokemon.type === this.state.selected;
    // })
    // .map(horns =>  <Pokemon pokemon={horns} />);
    // const handleChange = e => {
    //   this.setState ({ selected: e.target.value});
    // }
  }};
  
    
    // <Pokelist pokeData={pokeArray} />

// <main>
