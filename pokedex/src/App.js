import React, { Component } from 'react';
import Header from './header';
// import pokeArray from './mockPokeData.js';
import Pokemon from './pokeList';
import './App.css';
import pokeball from './assets/pokeball.jpg';
import request from 'superagent';

export default class App extends Component {
  state = { selected: null,
          hp: null,
          type_1: null,
          pokemon: []
        }
async componentDidMount(){
  //this is the basic code for calling api
const data = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex')
this.setState({ pokemon: data.body.results})
}
  render () {
    return (
      <>
      <Header pokeball={pokeball}/>
      <Pokemon pokeArray={this.state.pokemon}/>
      </>
    )
   
  }};
  
    
   
