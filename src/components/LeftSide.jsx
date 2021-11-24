import React from 'react'
import styled from 'styled-components'

const LeftSide = () => {
  return (
    <Container>
      <ArtCard>

        <Photo>
          <div><img src="/images/photo.svg" alt="" /></div>
          <h2>Hello there</h2>
          <a>Add a photo</a>
        </Photo>

        <Widget>
          <a href="">
            <div>
              <span>Connections</span>
              <p>Grow your network</p>
            </div>
            <img src="/images/widget-icon.svg" alt="" />
          </a>
        </Widget>

        <Items>
          <img src="/images/item-icon.svg" alt="" />
          My Items
        </Items>
        
      </ArtCard>
      <SubCard>
        <Group>
          <div>
            <a>Groups</a>
            <a>Events</a>
            <a>Follows Hashtags</a>
          </div>
          <img src="/images/plus-icon.svg" alt="" />
        </Group>
        <p>Discover more</p>
      </SubCard>
    </Container>
  )
}


// --------------------STYLES--------------------

const Container = styled.div`
  grid-area: leftside;
`

const ArtCard = styled.div`
  overflow: hidden;
  margin-bottom: 8px;
  background-color: white;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`

const Photo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 0;
  z-index: 3;
  border-bottom: 1px solid rgb(0 0 0 / 15%);
  div {
    background-color: white;
    padding: 12px;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
    z-index: 1;
  }

  h2 {
    font-weight: 600;
    font-size: 24px;
  }

  a {
    margin-top: 10px;
    color: rgb(10, 102, 194);
    font-size: 14px;
  }

  &:before {
    content: '';
    width: 100%;
    height: 50px;
    background-image: url('/images/card-bg.svg');
    background-position: top;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
`

const Widget = styled.div`
  padding: 16px;
  border-bottom: 1px solid rgb(0 0 0 / 15%);

  & > a {

    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;

    div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 4px;
    font-size: 14px;

    span {
      color: rgb(0 0 0 / 60%);
      font-weight: 600;
    }

    p {
      color: rgb(0 0 0);
      font-weight: 600;
    }
  }

    img {
      height: 1.2rem;
    }
  } 

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`

const Items = styled.div`
  padding: 16px;
  font-size: 14px;
  color: rgb(0 0 0);
  font-weight: 600;
  display: flex;
  align-items: center;
`

const SubCard = styled(ArtCard)`
  p {
    padding: 16px;
    color: rgb(0 0 0 / 60%);
    font-weight: 600;
    font-size: 14px;
  }
`

const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(0 0 0 / 15%);
  padding: 16px;
  font-size: 14px;

  div {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: flex-start;

    a {
      font-weight: 600;
      &:hover {
        color: #0a66c2;
      }
    }
  }

  img {
    height: 1.2rem;
  }

`

export default LeftSide
