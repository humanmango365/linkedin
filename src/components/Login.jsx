import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <div>
      <Container>
        <Nav>
          <a href="">
            <img src="/images/login-logo.svg" alt="" />
          </a>

          <ButtonGroup>
            <Join>Join now</Join>
            <SignIn>Sign In</SignIn>
          </ButtonGroup>
        </Nav>
        <Section>
          <Hero>
           <h1>
             Welcome to your professional community
           </h1>
           <img src="/images/login-hero.svg" alt="" />
          </Hero>
          <Form>
            <Google>
              <img src="/images/google.svg" alt="" />
              Sign in with Google
            </Google>
          </Form>
        </Section>

      </Container>
    </div>
  )
}

const Container = styled.div`
  
`

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`

const ButtonGroup = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
`

const Join = styled.button`
  font-size: 16px;
  padding: 10px 12px;
  cursor: pointer;
  color: rgba(0,0,0,.6);
  text-decoration: none;
  border-radius: 4px;
  &:hover {
    color: black;
    background-color: lightgray;
    color: rgba(0,0,0,.9);
  }
`

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  cursor: pointer;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 24px;
  background-color: #fff;
  transition-property: all;

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
  }
`
const Section = styled.section`
  display: flex;
  align-content: center;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`
const Hero = styled.div`
  width: 100%;
  h1 {
    width: 55%;
    padding-bottom: 0;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media(max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }

  img {
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`

const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`

const Google = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  cursor: pointer;
  border-radius: 28px;
  padding: 16px 12px;
  background-color: white;
  width: 100%;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%);
  transition-duration: 167ms;
  color: rgba(0, 0, 0, .6);

  &:hover {
    background-color: rgba(207, 207, 207, .25);
    color: rgba(0,0,0,.75);
  }
`


export default Login
