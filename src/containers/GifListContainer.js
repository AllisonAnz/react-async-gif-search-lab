//GifListContainer should be a container that does the data fetching 
//and then renders it corresponding sub-component 
//storing the first 3 gifs from the response in its comp. state 
//and passing that data down to its child <GifList> comp, as a prop 

//it will also render a <GifSearch /> comp. that reders the form 
//GifListContainer should pass down a submit handler function to GifSearch as a prop 
import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    state = {
        gifs: []
    }

    render() {
        return (
            <div>
                <GifSearch fetchGIFs={this.fetchGIFs} />
                <GifList gifs={this.state.gifs} />    
            </div>
        )
    }

    fetchGIFs = (query="dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(({data}) => {
            //console.log(data),
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
        })
    }

    componentDidMount(){
        this.fetchGIFs()
    }
}

export default GifListContainer
