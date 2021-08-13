import React from 'react'
import './menu-item.styles.scss'

// MenuItem component creates the individual menu:category(section-HATS,etc) item
// Gets its data from DIRECTORY as props and then displays/renders the background image, title
// and a 'Shop Now' span

const MenuItem = ({ title, imageUrl, size }) => {
    return (
        <div className={`${size} menu-item`}>
            <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}>
            </div>
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )

}

export default MenuItem;