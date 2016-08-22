const initialState = {
}

export function simpleReducer(state = initialState, action) {
   switch (action.type) {
      case 'SIMPLE_TYPE':
      return {
         results: action.results
      }
      default:
         return state
   }

}
