import {SAVE_POKEMONS,SAVE_NEXT_URL,LOADED,GET_FILTER_TYPES,SET_FILTER,REMOVE_FILTER} from '../constants.js'
import store from '../store.js'


export let getPokemons = () => {
  let url = store.getState().nextGetUrl
  return fetch(url)
  .then(res=>res.json())
  .then(res=>{
    store.dispatch({type:SAVE_POKEMONS, data:res.objects})
    store.dispatch({type:LOADED})
    store.dispatch({type:SAVE_NEXT_URL, data:res.meta.next})
  })
}

export let getFilterTypes = () => {
  fetch('http://pokeapi.co/api/v1/type/?limit=999')
  .then(res=>res.json())
  .then(res=>{
    let arr = []
    res.objects.forEach(elem=>{
      arr.push(elem.name)
    })
    store.dispatch({type:GET_FILTER_TYPES, data:arr})
  })
}

export let setFilter = (filter) => {
  return {type:SET_FILTER, data:filter}
}

export let removeFilter = (filter) => {
  return {type:REMOVE_FILTER, data:filter}
}
