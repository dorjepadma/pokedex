import React, { Component } from "react";
import "./Paging.css";

export default class Paging extends Component {
    cosntructor() {
        super();
        this.state = {page: 1 };
    }
    componentDidMount() {
        this.updateControls();
        window.addEventListener("hashchange", () => {
            this.updateControls();
        });
    }
    updatePage(increment) {
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);
        searchParams.set("page", this.state.page + increment);
        window.location.hash = searchParams.toString();
    }
    updateControls(){
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);
        let pageToUse = this.state.page;
        const parsedPage = Number(searchParams.get("page"));
        if (isNaN(parsedPage)) {
            pageToUse = 1;
        } else {
            pageToUse = parsedPage
        }
        this.setState({ page: pageToUse });
    }
    render() {
        const { page } = this.state;
        const perPage = 10; 
        const { totalResults } = this.props;
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);
        const parsedPage = parseInt(searchParams.get("page"));

        let pageToUse;
        if (isMaM(parsedPage)) {
            pageToUse = 1;
        } else {
            pageToUse = parsedPage;
        }
        if (!totalResults) {
            return <p className="paging"> Nothing here, try again</p>;
        }
        const lastPage = Math.ceil(totalResults / perPage);

        return (
            <p className="paging">
                <button
                className="prev"
                onClick={() => this.updatePage(-1)}
                type="button">
                ◀
                </button>
                <span>
                    page{pageToUse} of
                    {lastPage}
                </span>
                <button
                className="next"
                disabled={pageToUse === lastpage ? "true" : ""}
                onClick={() => this.updatePage(1)}
                type="button">
                    ▶
                </button>
            </p>
        )
    }
}