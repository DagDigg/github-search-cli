import React, { Component } from 'react';
import SearchBar from './Components/SearchBar'
import Splitscreen from './Components/Splitscreen'
import Repository from './Components/Repository';
import Commit from './Components/Commit'
import LinearProgress from '@material-ui/core/LinearProgress';
import { fetchRepos, fetchCommits, fetchBranches } from './Components/Api'
import * as myCostants from './Constants'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      repositories: [],
      commits: [],
      branches: [],
      currentRepoUrl: null,
      loading: true,
      defaultSha: null,
    }
  }
  //Fetch default repos once component mounted
  async componentDidMount() {
    await this.fetchRepos()
  }
  //Fetch repos function
  fetchRepos = async (query, user) => {
    const repos = await fetchRepos(query, user)
    this.setState({ repositories: repos.items ? repos.items : [], loading: false, commits: [], branches: [] })
  }
  //Fetch branches function. Auto-Resolves once state is set. Sets default sha of the first branch found
  fetchBranches = async (url) => {
    const branches = await fetchBranches(url)
    const defaultSha = branches[0].commit.sha
    this.setState({branches, defaultSha})
  }
  //Fetch commits function
  fetchCommits = async (url, sha = this.state.defaultSha) => {
    const commits = await fetchCommits(url, sha)
    this.setState({commits})
  }
  //Function to be fired whenever a click on a repo occurs
  onRepoClick = async (url) => {
    await this.fetchBranches(url)
    await this.fetchCommits(url)
    this.setState({currentRepoUrl: url})
  }
  //Handler for branch change on dropdown menu
  handleBranchChange = async (e) => {
    await this.fetchCommits(this.state.currentRepoUrl, e.target.value)
  }

  render() {
    return (  
      <div className="App">
        {/* SearchBar component */}
        <SearchBar onSearch={this.fetchRepos} />
        {/* SplitScreen: left repositories, right commits */}
          {
            (this.state.loading) ? 
              <LinearProgress /> : 
              <Splitscreen
                branches={this.state.branches} 
                onClick={this.handleBranchChange}
                left={
                  (this.state.repositories.length) ?
                  this.state.repositories.map((repo,idx) => {
                  return <Repository key={idx} data={repo} onClick={this.onRepoClick} />
                }) : <p> {myCostants.NO_REPOS_ERR} </p>}
                right={this.state.commits.map((commit,idx) => {
                  return <Commit key={idx} data={commit} onClick={this.onBranchClick} />
                })}
              />
          }
      </div>
    );
  }
}