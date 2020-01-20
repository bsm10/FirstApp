export const FETCH_DATA_LOADING = 'FETCH_DATA_LOADING';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';


// export const fetchDataBegin = () => ({
//   type: FETCH_DATA_LOADING
// });

// export const fetchDatasSuccess = photos => ({
//   type: FETCH_DATA_SUCCESS,
//   payload: { photos }
// },
//   console.log('photos', photos)
// );

// export const fetchDataFailure = error => ({
//   type: FETCH_DATA_FAILURE,
//   payload: { error }
// },
//   console.log('photos', error)
// );

export function fetchPhotos(){
  return async function (dispatch) {
    function onSuccess(data) {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: data })
      console.log('data', data)
      return data
    }
    function onError(error) {
      console.log(FETCH_DATA_FAILURE)
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
// export function fetchPhotos(){
//   return async dispatch => {
//     function onSuccess(data) {
//       dispatch(fetchDatasSuccess(data));
//       console.log(data)
//       return data
//     }
//     function onError(error) {
//       console.log(FETCH_DATA_FAILURE)
//       dispatch(fetchDataFailure(error))
//       return error
//     }
//     try {
//       const URL = 'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'
//       const res = await fetch(URL, {
//         method: 'GET'
//       })
//       const jsonArr = await res.json()
//       return onSuccess(jsonArr)
//     } catch (error) {
//       return onError(error)
//     }
//   } 
// }
