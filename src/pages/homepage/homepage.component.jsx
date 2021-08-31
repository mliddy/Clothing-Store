import React from 'react'
import Directory from '../../components/directory/directory.component'
import { HomePageContainer } from './homepage.styles'

//Homepage is just the container for the landing page. It is loaded via App.js
// It loads the Directory component, whoch holds the state for our 5 sections:
// For example MENS, HATS.etc

const HomePage = () => {
//  The below styling used to be done by wrapping directory in " <div className='homepage'>"
// We are replacinging it now with the styled-components container(HomePageContainer)
    return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
    )
}

    export default HomePage;