import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
      
      <Div>
        <p>TravelMedia.in</p>
      </Div>
      
      <NavMenu>

      </NavMenu>
    
    </Nav>
  )
}

export default Header

const Nav = styled.div`
height: 96px;
width: 100%;
background: #F05A22;
color: white;
box-shadow: 4px 14px 24px 0px #FFBE9DCF;
display: flex;

`

const Div = styled.div`
width: 179.07px
height: 26.91px
background: white;

p {
font-family: Montserrat;
font-size: 22px;
font-weight: 700;
letter-spacing: 0em;
text-align: center;
padding: 10px;
margin-left: 10px;
`

const NavMenu = styled.div`
width: 431px;
height: 73px;
top: 11px;
left: 667px;
border-radius: 40px;
background: white;
margin: auto;

`



