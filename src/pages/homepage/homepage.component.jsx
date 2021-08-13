import React from 'react'
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component'

//Homepage is just the container for the landing page. It is loaded via App.js
// It loads the Directory component, whoch holds the state for our 5 sections:
// For example MENS, HATS.etc

const HomePage = () => {
 
    return (
        <div className='homepage'>
          <Directory />
        
        </div>
    )
}

export default HomePage;