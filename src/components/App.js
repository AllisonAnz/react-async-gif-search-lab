import React from 'react'
import GifListContainer from "../containers/GifListContainer"
import NavBar from './NavBar'
//Your task is to create a working app in your browser 
//you should have an app that takes user input, fetch JSON from Giphy API 
//and display the result

// the App component should render out the GifListContainer component 
// App comp will be responsible for rendering the <NavBar /> comp 
// and the <GifListContainer /> comp.
const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <GifListContainer />
    </div>
  )
}

export default App
