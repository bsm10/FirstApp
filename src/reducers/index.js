import { combineReducers } from 'redux'
import photos from './photosReducer'

export default combineReducers({
   photosList: photos
});
