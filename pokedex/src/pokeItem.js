import React, { Component } from 'react';

export default class Pokemon extends Component {
    render() {
        return <li>
            <div 
            className="info-container">
                <h2>{this.props.pokemon.pokemon}</h2>
                <p className="type_1">
                    {this.props.pokemon.type_1}
                </p>
                < p className="hp">
                    {this.props.pokemon.hp}
                </p>
            </div>
            <div
            className="url-image">
                <img alt={this.props.pokemon.url_image}
                src={this.props.pokemon.url_image} />
            </div>
        </li>
    }}