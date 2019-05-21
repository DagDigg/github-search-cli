//SERVICE LAYER
import * as myConstants from '../Constants'

export const fetchRepos = async (query='rust', user='rust-lang') => {
    try {
        const res = await fetch(`${myConstants.BASE_REPO_URL}${query}+user:${user}`);
        return await res.json()
    }
    catch (e) {
        throw new Error(e)
    }
  }

  export const fetchBranches = async (url) => {
    try {
        const res = await fetch(`${url}/branches`)
        return await res.json()
    }
    catch (e) {
        throw new Error(e)
    }
  }

  export const  fetchCommits = async (url, sha) => {
    try {
        const res = await fetch(`${url}${myConstants.COMMITS_QUERY_50}${sha}`)
        return await res.json()
    }
    catch (e) {
        throw new Error(e)
    }
  }

  