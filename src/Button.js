import styled from 'styled-components'

export default styled.button`
    padding: 10px;
    background-color: ${props => props.primary ? 'cornflowerblue' : 'hotpink'};
    color: ${props => props.color ? 'teal' : 'white'};
`
