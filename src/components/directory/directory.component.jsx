import {React} from 'react'
import MenuItem from '../menu-item/menu-item.component'

import {connect} from 'react-redux'
import {selectDirectorySection} from '../../redux/directory/directory.selectors'
import {createStructuredSelector} from 'reselect'
import './directory.styles.scss'

// Directory component holds state for our 5 sections: MENS, HATS,etc
// It holds state for those sections and then maps through that array, passing the data to 
// menu item to be created and then Directory renders that menu item(category) on the page

const Directory = ({sections})=>{

        return(
          
            <div className='directory-menu'>
                {sections.map(({title,imageUrl,id,size}) => 
                <MenuItem key = {id} title = {title} imageUrl = {imageUrl} size = {size}/>)}
            </div>
           
        )
    
}

const mapStateToProps = createStructuredSelector({
  sections:selectDirectorySection
})

export default connect(mapStateToProps)(Directory);