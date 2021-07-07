import React, { Component } from 'react';
import Header from './header.js';
import SearchOptions from './SearchOptions.js'
// import pokeArray from './mockPokeData.js';
import Pokemon from './pokeList.js';
import './App.css';
import pokeball from './assets/pokeball.jpg';
import request from 'superagent';
import Paging from "./Paging.js";


export default class App extends Component {
  state = { selected: null,
          hp: null,
          type_1: null,
          pokemon: []
        }
async componentDidMount(){
  //append new string to url
  //this is the basic code for calling api
const data = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex')
this.setState({ pokemon: data.body.results})
}
  render () {
    return (
      <div>
      <Header pokeball={pokeball}/>
      <main>
      <Pokemon pokeArray={this.state.pokemon}/>

      <section className="options-section">
        <SearchOptions />
      </section>
      <section className="list-section">
        {/* this is going to need to be updated
        <PokeList pokemon={pokemon} /> */}
        <Paging totalResults={totalResults} />
      </section>
      </main>

      </div>
    )
   
  }};
  
    
   
