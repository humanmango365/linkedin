import db, { auth, provider, storage } from '../../firebase';
import { SET_USER, SET_LOADING_STATUS, SET_ARTICLES } from './actionType';

export const signInAPI = () => {
  return (dispatch) => {
    auth.signInWithPopup(provider).then((payload) => {
      console.log(payload.user)
      //dispatch(setUserAC(payload.user));
    }).catch((error) => {
      alert(error.message)
    })
  }
}

export const getUserAuth = () => {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUserAC(user))
      }
    })
  }
}

export const signOutAPI = () => {
  return (dispatch) => {
    auth.signOut().then(() => {
      dispatch(setUserAC(null))
    }).catch(error => {
      alert(error.message)
    })
  }
}

export const setUserAC = (payload) => ({
  type: SET_USER,
  user: payload
})

export const setLoading = status => ({
  type: SET_LOADING_STATUS,
  status
})

export const postArticleAPI = payload => {
  return (dispatch) => {
    dispatch(setLoading(true))
    if (payload.image != '') {
      const upload = storage
        .ref(`images/${payload.image.name}`)
        .put(payload.image)
      upload.on('state-changed', snapshot => {
      const progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      console.log(`Progress: ${progress}%`)
      if (snapshot.state === 'RUNNING') {
        console.log(`Progress: ${progress}%`)
      }
      }, error => console.log(error), 
        async() => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL()
          db.collection('articles').add({
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL
            },
            video: payload.video,
            sharedImage: downloadURL,
            comments: 0,
            description: payload.description
          })
        dispatch(setLoading(false))
        }
        
      );
    } else if (payload.video){
      db.collection('articles').add({
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL
        },
        video: payload.video,
        sharedImage: '',
        comments: 0,
        description: payload.description
      })
      dispatch(setLoading(false))

    }
  }
}

export const getArticlesAPI = () => {
  return (dispatch) => {
    let payload;

    db.collection('articles').orderBy('actor.date', 'desc')
      .onSnapshot((snapshot) => {
        payload = snapshot.docs.map((doc) => doc.data())
        console.log(payload)
        dispatch(setArticles(payload))
      })
  }
}

export const setArticles = articles => ({
  type: SET_ARTICLES,
  articles
})