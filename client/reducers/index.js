import {SAVE_POKEMONS,SAVE_NEXT_URL,LOADED,GET_FILTER_TYPES,SET_FILTER,REMOVE_FILTER} from '../constants.js'

let initState = {
  nextGetUrl:'http://pokeapi.co/api/v1/pokemon/?limit=12',
  pokemons:[],
  loaded:false,
  filterTypes:[],
  applyedFilters:[]
}

export default (state = initState, action) => {
  let clone
  let filterIndex

  switch (action.type) {
  case SAVE_POKEMONS:
    clone = Object.assign({},state)
    action.data.forEach(item=>{
      clone.pokemons.push(item)
    })
    return clone
  case SAVE_NEXT_URL:
    clone = Object.assign({},state)
    clone.nextGetUrl = 'http://pokeapi.co' + action.data
    return clone
  case LOADED:
    clone = Object.assign({},state)
    clone.loaded=true
    return clone
  case GET_FILTER_TYPES:
    clone = Object.assign({},state)
    clone.filterTypes = action.data
    clone.filterTypes.sort()
    return clone
  case SET_FILTER:
    clone = Object.assign({},state)
    clone.applyedFilters.push(action.data)
    clone.applyedFilters.sort()
    filterIndex = clone.filterTypes.indexOf(action.data)
    clone.filterTypes.splice(filterIndex,1)
    return clone
  case REMOVE_FILTER:
    clone = Object.assign({},state)
    filterIndex = clone.applyedFilters.indexOf(action.data)
    clone.applyedFilters.splice(filterIndex,1)
    clone.filterTypes.push(action.data)
    clone.filterTypes.sort()
    return clone
  default:
    return state
  }
}
