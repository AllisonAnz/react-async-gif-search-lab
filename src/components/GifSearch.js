//GifSearch receive a callback prop from its parent 
//on a submit event, it should invoke the callback prop with the value of the text input 
//It is the callback function, defined in GifListContainer that
//will actually query the API with the test the user has entered 

import React, { Component } from 'react'

class GifSearch extends Component {

    state = {
        query: ""
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchGIFs(this.state.query)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.query} onChange={event => this.setState({ query: event.target.value })} />
                </form>
            </div>
        )
    }

}

export default GifSearch