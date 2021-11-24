import React from 'react'
import Header from './Header'
import styled from 'styled-components'
import LeftSide from './LeftSide'
import Main from './Main'
import RightSide from './RightSide'

const Home = () => {
  return (
    <Container>
      <Header />
      <Section>
        <h5><a>Hiring in a hurry? - </a></h5>
        <p>
          Find talented pros in record time with Upwork and keep 
          business moving.
        </p>
      </Section>
      <Content>
        <Layout>
          <LeftSide />
          <Main />
          <RightSide />
        </Layout>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  max-width: 100%;
  padding-top: 60px;
`

const Content = styled.div`
  max-width: 1128px;
  margin: 0 auto;
`

const Section = styled.section`
  min-height: 50px;
  padding: 16px 16px;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  line-height: 1.5;

  h5{
    color: #0a66c2;
    a {
      font-weight: 700;
    }
  }

  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5px 5px;
  }
`

const Layout = styled.div`
  display: grid;
  grid-template-areas: 'leftside main rightside';
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 2fr);
  column-gap: 25px;
  row-gap: 25px;
  grid-template-rows: auto;
  @media (max-width: 768px) {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    padding: 0 5px;
    padding-bottom: 60px;
  }
`

export default Home
