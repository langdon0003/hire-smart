// Imports
import axios from 'axios'
import isEmpty from 'validator/lib/isEmpty'

// App Imports
import { API_URL } from '../../../../setup/config/env'
import { queryBuilder } from '../../../../setup/helpers'
import { EDIT_SET, EDIT_UNSET } from './types'

// Create or update
export function createOrUpdate(candidate) {
  if (!isEmpty(candidate.id)) {
    return update(candidate)
  } else {
    delete candidate.id
    return create(candidate)
  }
}

// Create
export function create(candidate) {
  return dispatch => {
    return axios.post(API_URL, queryBuilder({
      type: 'mutation',
      operation: 'candidateCreate',
      data: candidate,
      fields: ['_id']
    }))
  }
}

// Update
export function update(candidate) {
  return dispatch => {
    return axios.post(API_URL, queryBuilder({
      type: 'mutation',
      operation: 'candidateUpdate',
      data: candidate,
      fields: ['_id']
    }))
  }
}

// Remove
export function remove(data) {
  return dispatch => {
    return axios.post(API_URL, queryBuilder({
      type: 'mutation',
      operation: 'candidateRemove',
      data,
      fields: ['_id']
    }))
  }
}

// Edit
export function edit(candidate) {
  return { type: EDIT_SET, candidate }
}
export function editClose() {
  return { type: EDIT_UNSET }
}
