import React, { Component } from "react";
import "./SearchOptions.css";
export default class SearchOptions extends Component {
    componentDidMount() {
        this.updateControls();

        window.addEventListener("hashchange", () => {
            this.updateControls();
        });
    }
    state = {
        //radio buttons as a stretch goal?
        // checkedRadio: [{ name: "Pokemon" }, { name: "type" }, { name: "hp" }],
        searchInput: ""
    };
    updateControls() {
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);
        const type = searchParams.get("type");
        
        this.setState({
            searchInput: searchParams.get(s) || "",
            // checkedRadio: type (stretch)
        });
    }
    handleSubmit = event => {
        const form = document.querySelector("form");
        event.preventDefault();
        const formData = new FormData(form);
        const queryString = window.Location.hash.slice(1);
        searchParams.set("type", formData.get("type"));
        searchParams.set("s", formData.get("search"));
        searchParams.set("page", 1);

        window.location.hash = searchParams.toString();
};

render() {
    return (
        <form className="options" onSubmit={this.handleSubmit}>
            <label for="search">Hunt Pokemon</label>
            <p>
                <input
                id="search"
                name="search"
                onChange={e => this.setState({ searchINput: e.target.value })}
                value={this.state.searchInput}
            />
            </p>

        {/* here goes the buttons for stretch goal */}
        <p>
            <button>Search 🔍</button>
        </p>
        </form>
    )
}    
    }
