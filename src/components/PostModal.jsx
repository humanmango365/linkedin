import React, { useState } from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux'
import firebase from 'firebase'
import { postArticleAPI } from '../app/actions'

const PostModal = ({handleCloseModal, user, postArticle}) => {

  const [editorText, setEditorText] = useState("")
  const [shareImage, setShareImage] = useState("")
  const [videoLink, setVideoLink] = useState("")
  const [assetArea, setAssetArea] = useState("")

  const handleChange = (e) => {
    const image = e.target.files[0]
    if (image === '' || image === undefined) {
      alert(`not an image, the file is a ${typeof image}`)
      return;
    }
    setShareImage(image);
  }

  const switchAssetArea = (area) => {
    setShareImage("")
    setVideoLink("")
    setAssetArea(area)
  }

  const postNewArticle = (e) => {
    e.preventDefault()
    if (e.target !== e.currentTarget) {
      return;
    }

    const payload = {
      image: shareImage,
      video: videoLink,
      user: user,
      description: editorText,
      timestamp: firebase.firestore.Timestamp.now()
    }

    postArticle(payload)
    reset(e)
  }

  const reset = (e) => {
    setEditorText('')
    setShareImage("")
    setVideoLink("")
    setAssetArea("")
    handleCloseModal()
  }



  return (
    <Container>
      <Content>
        <Header>
          <h2>Create a post</h2>
          <button onClick={reset}>
            <img src="/images/close-icon.svg" alt="" />
          </button>
        </Header>

        <SharedContent>
          <UserInfo>
            <img src={user.photoURL} alt="" />
            <span>{user.displayName}</span>
          </UserInfo>

          <Editor>
            <textarea
              value={editorText}
              onChange={(e) => setEditorText(e.target.value)}
              placeholder='What do you want to talk about?'
              autoFocus
            />
            {}
            { assetArea === 'image' ?
            <UploadImage>
              <input 
                type="file" 
                accept='image/gif, image/jpeg, image/png, image/jpg'
                name='image'
                id='file' 
                onChange={handleChange}
              />
              <p>
                <label 
                  htmlFor="file"
                >Select an image to share</label>
              </p>
              {shareImage && <img src={URL.createObjectURL(shareImage)} />}
              </UploadImage>
              :

              assetArea === 'media' && (
              <Media>
                <input 
                  type="text" 
                  placeholder='please input a video link'
                  value={videoLink}
                  onChange={(e) => setVideoLink(e.target.value)}
                />
                {videoLink && <ReactPlayer width={'100%'} url={videoLink} />}
              </Media>
              )
            }
            
          </Editor>
         
        </SharedContent>

        <ShareCreation>
          <AttachAssets>
            <AssetButton onClick={() => switchAssetArea('image')}>
              <img src="/images/share-image.svg" alt="" />
            </AssetButton>
            <AssetButton onClick={() => switchAssetArea('media')}>
              <img src="/images/share-video.svg" alt="" />
            </AssetButton>
          </AttachAssets>
          <ShareComment>
            <AssetButton>
              <img src="/images/share-comment.svg" alt="" />
              Anyone
            </AssetButton>
          </ShareComment>
          <PostButton 
            disabled={!editorText}
            onClick={(e) => {
              postNewArticle(e)
            }}
          >
            Post
          </PostButton>
        </ShareCreation>

        
      </Content>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  color: black;
  background-color: rgba(0, 0, 0, .7);
  animation: fadeIn .3s;
`

const Content = styled.div`
  max-height: 90%;
  max-width: 552px;
  background: white;
  margin: 0 auto;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
`

const Header = styled.div`
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, .15);
  font-size: 16px;
  line-height: 1.75;
  color: rgba(0, 0, 0, .6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    height: 40px;
    width: 40px;
    justify-content: center;
    &:hover {
      background: rgba(0, 0, 0, .09);
      border-radius: 5px;
      transition: background .28s ease-in;
    }
    img {
      height: 30px; 
      width: 30px;
    }
  }
`

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  img {

    height: 48px;
    width: 48px;
    border-radius: 50%;
    margin-right: 5px;
    background-clip: content-box;
    border: 2px solid transparent;
    
  }

  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
  }

`

const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`

const AssetButton = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  min-width: auto;
  color: rgba(0, 0, 0, .5);
  img {
    width: 40px;
    height: 40px;
  }
`

const AttachAssets = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
  ${AssetButton} {
    width: 40px;
  }
`

const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, .15);
  ${AssetButton} {
    img {
      margin-right: 5px;
    }
  }
`

const PostButton = styled.button`
  min-width: 60px;
  border-radius: 20px;
  padding-left: 16px;
  padding-right: 16px;
  background: ${props => props.disabled ? 'rgba(0, 0, 0, .3)' : '#0a66c2'} ;
  color: white;
  &:hover {
    background-color: ${props => props.disabled ? '' : '#004182'};
  }

`

const Editor = styled.div`
  padding: 12px 24px;

  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
    padding: 2px;
    outline: 2px solid rgba(0, 0, 0, .15);
    margin-bottom: 20px;
    &:focus {
      outline-color: #0a66c2;
    }
  }

  & input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
    padding: 2px;
    outline: 2px solid rgba(0, 0, 0, .15);
    &:focus {
      outline-color: #0a66c2;
    }
  }
`

const UploadImage = styled.div`
  height: 80px;
  text-align: center;
  & > input {
    display: none;
  }
  img {
    width: 100%;
  }
`

const Media = styled.div`
  height: 80px;
`

const mapStateToProps = state => {
  return {
    user: state.userState.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postArticle: (payload) => {
      dispatch(postArticleAPI(payload))
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostModal)
