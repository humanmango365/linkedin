import React from 'react'
import styled from 'styled-components'

const RightSide = () => {
  return (
    <Container>
      <FollowCard>
        
        <Title>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>

        <FeedList>
          <li>
            <a href="">
              <Avatar />
            </a>
            <div>
              <span>#LinkedIn</span>
              <button>Follow</button>
            </div>
          </li>

          <li>
            <a href="">
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>

        <Recomendation>
          View all recomendations
          <img src="/images/right-icon.svg" alt="" />
        </Recomendation>

      </FollowCard>
      <BannerCard>
        <img src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg" alt="none" />
      </BannerCard>
    </Container>
  )
}

const Container = styled.aside`
  grid-area: rightside;
`

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: rgba(0, 0, 0, .6);
`

const FeedList = styled.ul`
  margin-top: 16px;

  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;

    & > div {
      display: flex;
      flex-direction: column;

      button {
        background-color: transparent;
        color: rgba(0, 0, 0, .6);
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .6);
        cursor: pointer;
        padding: 10px 16px;
        align-items: center;
        border-radius: 15px;
        font-weight: 600;
        display: inline-flex;
        justify-content: center;
        max-height: 32px;
        max-width: 480px;
        text-align: center;

        &:hover {
          background-color: rgba(0, 0, 0, .08);
        }
      }
    }
  }
`

const Avatar = styled.div`
  background-image: url('https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`

const Recomendation = styled.a`
  margin-top: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 6px;
  color: #0a66c2;
  cursor: pointer;
  transition: all 128ms;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`

const BannerCard = styled(FollowCard)`
  img {
    width: 100%;
  }
`

export default RightSide
