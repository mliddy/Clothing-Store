// Doing styles in js, so => css in javascript. Using 'styled-components'

import styled from 'styled-components'

// Create new component for a div and copy the styling we already have in our homepage.styles.scss file
// Then, import it into our component
export const HomePageContainer = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
`
