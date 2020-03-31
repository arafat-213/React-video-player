import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../api/youtube'
import VideoList from './VideoList'

const KEY = 'AIzaSyBgVhYXWlhpYjFj2usdyQtY9Nnhi8majRM'

class App extends React.Component {

    state = { videos: [] }

    onTermSubmit = async (term) => {
        const response = await youtube.get(
            '/search', {
            params: {
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: KEY,
                q: term
            }
        }
        )

        this.setState({
            videos: response.data.items
        })
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                Found {this.state.videos.length} videos.
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

export default App