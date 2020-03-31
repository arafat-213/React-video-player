import React from 'react'

class SearchBar extends React.Component {
    state = { term: '' }

    onInputChange = (e) => {
        this.setState({
            term: e.target.value
        })
    }

    onFormSubmit = e => {
        e.preventDefault()

        //callback from parent component
        this.props.onTermSubmit(this.state.term)
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form"
                    onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search
                        <input
                                type="text"
                                value={this.state.term}
                                onChange={this.onInputChange}
                            />
                        </label>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar