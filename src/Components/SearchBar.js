import React, { Component } from 'react';
import InputBase from '@material-ui/core/InputBase';

export default class SearchBar extends Component {
    state = {
        textToSearch: '',
    }

    onUserRepoTyping = (e) => {
        this.setState({ textToSearch: e.target.value })
    }

    handleSearch = (e) => {
        e.preventDefault()
        const [ user, repo ] = this.state.textToSearch.split("/")
        this.props.onSearch(repo, user)
        console.log(user + " " + repo)
        e.currentTarget.reset()
    }

    render() {
        return(
            <div>
            <form onSubmit={this.handleSearch} >
                <InputBase
                    className='searchInput'
                    placeholder="Search using user/repo"
                    ref={input => this.search = input}
                    onChange={this.onUserRepoTyping}
                    />
            </form>
            </div>
        )
    }
}