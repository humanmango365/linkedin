import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/">
            <img src="/images/home-logo.svg" alt="" />
          </a>
        </Logo>

        <Search>
          <div>
            <input type="text" placeholder='Search' />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="" />
          </SearchIcon>
        </Search>

        <Nav>
          <NavListWrap>
            <NavList className='active'>
              <a href="">
                <img src="images/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
            <a href="">
                <img src="images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
            <a href="">
                <img src="images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
            <a href="">
                <img src="images/nav-network.svg" alt="" />
                <span>Network</span>
              </a>
            </NavList>
            <NavList>
            <a href="">
                <img src="images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </NavList>

            <User>
              <a>
                <img src="/images/user.svg" alt="" />
                <span>Me
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
              <SignOut>
                <a>Sign Out</a>
              </SignOut>
            </User>

            <Work>
              <a>
                <img src="/images/nav-work.svg" alt="" />
                <span>Work
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
            </Work>

          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid (0,0,0,.08);
  padding: 8px 24px;
  position: fixed;
  z-index: 100;
  width: 100vw;
  top: 0;
  left: 0;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`

const Search = styled.div`
  position: relative;
  opacity: 1;
  flex-grow: 1;
  margin-left: 20px;
  height: 100%;


  & > div {
    max-width: 280px;
    height: 34px;

    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0,0,0,.9);
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 100%;
      width: 100%;
      border-color: #dce6f1;
      vertical-align: text-top;

      &:focus {
        border: 2px solid #0a66c2;
      }
    }
  }

  
`

const SearchIcon = styled.div`
  position: absolute;
  width: 34px;
  z-index: 1;
  top: 0;
  background: transparent;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;

`

const Nav = styled.nav`
  margin-left: auto;
  display: block;

  @media(max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
    padding: 8px 4px;
  }
`

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    span:after {
      content: '';
      transform: scaleX(1);
      transition: transform .3s;
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      width: 100%;
      border-color: rgba(0, 0, 0, .9);
    }
  }
`

const NavList = styled.li`
  display: flex;
  align-items: center;

  a {
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
      color: rgba(0, 0, 0, 0.6);
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover, &:active {
    a{
      span {
        color: rgba(0, 0, 0, .9);
      }
    }
  }
`
const SignOut = styled.div`
  position: absolute;
  top: 50px;
  background: white;
  border-radius: 0 0 5px 5px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;

  @media (max-width: 768px) {
    top: -30px;
  }
`

const User = styled(NavList)`
  a > img {
    width: 24px;
    border-radius: 50%;
    height: 24px;
  }

  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${SignOut} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, .08);
`



export default Header
