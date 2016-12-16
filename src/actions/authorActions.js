/**
 * Created by David on 11/12/2016.
 */
import * as types from "./actionTypes";
import AuthorApi from '../api/mockAuthorApi';

export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
  return (dispatch) => {
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch( error =>  {
      throw (error);
    });
  }
}