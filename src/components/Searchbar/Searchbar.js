import React, { Component } from 'react';
import s from './Searchbar.Module.css';

export default class Searchbar extends Component {
    state = {
        query: '',
    }

    handleChange = e => {
        this.setState({ query: e.currentTarget.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.query);
        this.reset();
    }

    reset = () => {
        this.setState({ query: '' });
    }

    render() {
        return (
            <header className={s.Searchbar}>
                <form onSubmit={this.handleSubmit} className={s.SearchForm}>
                    <button type="submit" className={s.SearchFormButton}>
                        <span className={s.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={s.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.query}
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        );
    } 
}
