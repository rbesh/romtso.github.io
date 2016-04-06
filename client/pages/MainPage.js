import React from 'react';
import {render} from 'react-dom';
import store from '../store.js'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import Card from '../components/Card.js'
import BigCard from '../components/BigCard.js'
import Filter from '../components/Filter.js'
import {getPokemons} from '../actions'

export default class MainPage extends React.Component {
  constructor(...options){
    super(...options)
    this.state = {pokemons:[],currentPokemon:{types:[],moves:[]},detailIsVisible:false,loadMoreButton:'LOAD MORE'}
    store.subscribe(()=>{this.setState({pokemons:store.getState().pokemons})})
  }
  handleLoadMore(e){
    e.preventDefault()
    this.setState({loadMoreButton:'LOADING...'})
    getPokemons()
    .then(()=>{this.setState({loadMoreButton:'LOAD MORE'})})
  }
  setCurrentPokemon(e,pokemon){
    e.preventDefault()
    this.setState({currentPokemon:pokemon,detailIsVisible:true})
  }
  filteredPokemons(){
    let filters = store.getState().applyedFilters
    let resultArr = []
    if(filters.length === 0){
      return this.state.pokemons
    }
    for(let i = 0; i < this.state.pokemons.length; i++ ){
      let pokemon = {types:[]}
      pokemon.types = this.state.pokemons[i].types.map(el=>{
        return el.name
      })
      if(filters.length > pokemon.types.length) continue;
      for(let y = 0; y < filters.length; y++ ){
        if(!pokemon.types.includes(filters[y].toLowerCase())) break;
        if(pokemon.types.includes(filters[y].toLowerCase()) && y === filters.length-1){
          resultArr.push(this.state.pokemons[i])
        }
      }
    }
    return resultArr
  }
  render () {
    return (
      <div>
        <div id="title">
          Pokedex
        </div>
        <Grid>
          <Row>
          <Col xs={7} md={8}>
            <Filter />
            {this.filteredPokemons().map((elem,i)=>{
              return <Col key={i} xs={6} md={4}><Card onClick={(e)=>{this.setCurrentPokemon(e,elem)}} pokemon={elem} /></Col>
            })}
            {!store.getState().applyedFilters.length
            ? <Button onClick={(e)=>{this.handleLoadMore(e)}} bsSize="large" block>{this.state.loadMoreButton}</Button>
            : ''}
            {store.getState().applyedFilters.length && !this.filteredPokemons().length
            ? <h4>Missing pokemon with choosen ability :(</h4>
            : ''}
          </Col>
          <Col xs={5} md={4}>
            {this.state.detailIsVisible
              ? <BigCard pokemon={this.state.currentPokemon}/>
              : null
            }
          </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
