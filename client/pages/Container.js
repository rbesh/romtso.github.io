import React from 'react';
import {render} from 'react-dom';
import store from '../store.js'
import MainPage from './MainPage.js'
import Loader from './Loader.js'
import {getPokemons,getFilterTypes} from '../actions'

export default class Container extends React.Component {
  constructor(...options){
    super(...options)
    this.state={loaded:false}
    store.subscribe(()=>{this.setState({loaded:store.getState().loaded})})
    getPokemons();
    getFilterTypes();
  }

  render () {
    return (
      <div>
        {this.state.loaded
          ? <MainPage />
          : <Loader />
        }
      </div>
    )
  }
}
