export const FETCH_DATA_LOADING = 'FETCH_DATA_LOADING';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export function fetchPhotos(){
  return async function (dispatch) {
    function onSuccess(data) {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: data })
      return data
    }
    function onError(error) {
      console.log(error)
      dispatch({ type: FETCH_DATA_FAILURE, error })
      return error
    }
    try {
      const URL = 'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'
      const res = await fetch(URL, {
        method: 'GET'
      })
      const data = await res.json()
      return onSuccess(data)
    } catch (error) {
      return onError(error)
    }
  } 
}
