export default function reducer (state = {
  sess: {},
  fetching: false,
  fetched: false,
  isActive: false,
  showForm: false,
  error: null
}, action) {
  switch (action.type) {
    case 'CLEAR_SESSION':
      {
        return { ...state,
          fetching: false,
          fetched: false,
          isActive: false,
          showForm: false,
          error: null,
          sess: {}
        }
      }
    case 'FETCH_RECIPE_SESSION_PENDING':
      {
        return { ...state,
          isActive: true,
          fetching: true,
          showForm: false
        }
      }
    case 'FETCH_RECIPE_SESSION_REJECTED':
      {
        return { ...state,
          fetching: false,
          error: action.payload,
          showForm: false
        }
      }
    case 'FETCH_RECIPE_SESSION_FULFILLED':
      {
        return {
          ...state,
          fetching: false,
          fetched: true,
          isActive: true,
          showForm: false,
          sess: action.payload
        }
      }
    case 'LOGIN_FORM':
      {
        return { ...state,
          fetching: false,
          fetched: false,
          isActive: false,
          error: null,
          showForm: true,
          sess: {}
        }
      }
  }
  return state
}
