import React from 'react'
import styled from 'styled-components'

const Main = () => {
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="/images/user.svg" alt="" />
          <button>Start a post</button>
        </div>

        <GroupButton>
          <button>
            <img src="/images/image-icon.svg" alt="" />
            <span>Photo</span>
          </button>

          <button>
            <img src="/images/video-icon.svg" alt="" />
            <span>Video</span>
          </button>

          <button>
            <img src="/images/event-icon.svg" alt="" />
            <span>Event</span>
          </button>

          <button>
            <img src="/images/article-icon.svg" alt="" />
            <span>Article</span>
          </button>
        </GroupButton>
      </ShareBox>
      
      <div>
        <Article>

          <SharedActor>
            <a href="">
              <img src="/images/user.svg" alt="" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src="/images/more-icon.svg" alt="" />
            </button>
          </SharedActor>

          <Description>
            Description
          </Description>

          <SharedImg>
            <a href="">
              <img src="/images/shared-image.png" alt="" />
            </a>
          </SharedImg>

          <SocialCounts>
            <li>
              <button>
                <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt="" />
                <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt="" />
                <span>75</span>
              </button>
            </li>

            <li>
              <a href="">2 comments</a>
            </li>
          </SocialCounts>

          <SocialButtons>
            <button>
              <img src="/images/like-icon.svg" alt="" />
              <span>Like</span>
            </button>
            <button>
              <img src="/images/comment-icon.svg" alt="" />
              <span>Comments</span>
            </button>
            <button>
              <img src="/images/share-icon.svg" alt="" />
              <span>Share</span>
            </button>
            <button>
              <img src="/images/send-icon.svg" alt="" />
              <span>Send</span>
            </button>
          </SocialButtons>
        
        </Article>
      </div>
    </Container>
  )
}



// ----------------- STYLES -----------------

const Container = styled.div`
  grid-area: main;

`

const CommonCard = styled.div`
  overflow: hidden;
  text-align: center;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  border: none;
  position: relative;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background-color: white;

  div {
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 20px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        color: rgb(0 0 0 / 60%);
        font-weight: 600;
        padding: 12px 16px;
        border-radius: 35px;
        text-align: left;
        border: 1px solid rgba(0, 0, 0, .15);
        &:hover {
          background-color: rgba(0, 0, 0, .08);
        }
      }
    }
  }
`

const GroupButton = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 8px;
  padding: 20px 28px;
  button {
    flex-basis: 94px;
  }
  @media (max-width: 768px) {
    padding: 12px;
  }

  button {
      color: rgba(10, 102, 194, .6);
      font-size: 14px;
      line-height: 1.5;
      background: transparent;
      border-radius: 5px;
      padding: 6px 10px;
      display: inline-flex;
      align-items: center;
      column-gap: 6px;
      font-weight: 600;

      &:hover {
        background-color: rgba(10, 102, 194, .08);
      }
    }

`

const Article = styled(CommonCard)`
  margin: 0 0 8px;
  padding: 0;
  overflow: visible;
`

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  
  a {
    margin-right: 12px;
    flex-grow: 1;
    display: flex;

    img {
      width: 48px;
      height: 48px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      margin-left: 8px;
      

      span {
        text-align: left;
        font-size: 12px;
        color: rgba(0, 0, 0, .6);

        &:first-child {
          font-weight: 600;
          font-size: 14px;
          color: #000;
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
  }
`

const Description = styled.div`
  padding: 0 16px;
  color: rgba(0, 0, 0, .9);
  font-size: 14px;
  text-align: left;
`

const SharedImg = styled.div`
margin-top: 8px;
background-color: #f9fafb;
  a {
    img {
      width: 100%;
    }
  }
`

const SocialCounts = styled.ul`
  text-align: left;
  padding: 8px 16px;
  overflow: auto;
  line-height: 1.3;
  border-bottom: 1px solid #e9e5df;
  display: flex;
  align-items: center;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
      align-items: center;
    }
  }
`

const SocialButtons = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  button {
    color: rgba(10, 102, 194, .6);
      font-size: 14px;
      line-height: 1.5;
      background: transparent;
      border-radius: 5px;
      padding: 6px 10px;
      display: inline-flex;
      align-items: center;
      column-gap: 6px;
      font-weight: 600;

      &:hover {
        background-color: rgba(10, 102, 194, .08);
      }
  }
`

export default Main
