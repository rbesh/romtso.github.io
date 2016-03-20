import React from 'react';
import {Table} from 'react-bootstrap'
import store from '../store.js'

export default class BigCard extends React.Component {
  constructor(...options){
    super(...options)
  }
  render(){
    return (
      <div className="card" id="bigCard" style={{marginTop: marg}}>
        <div className="card-image">
          <img src={'http://pokeapi.co/media/img/' + this.props.pokemon.pkdx_id + '.png'} id="littlePokemonPic" />
        </div>
        <div className="card-content">
          <h5 style={{textAlign:'center'}}>{this.props.pokemon.name} #{this.props.pokemon.pkdx_id}</h5>
          <Table striped bordered>
            <tr>
              <th id="leftCol">Type</th>
              <th>
              {
                this.props.pokemon.types.map((elem,i)=>{
                  if(this.props.pokemon.types.length !== i+1){
                    return elem.name + ', '
                  }else {
                    return elem.name
                  }

                })
              }
              </th>
            </tr>
            <tr>
              <th id="leftCol">Attack</th>
              <th>{this.props.pokemon.attack}</th>
            </tr>
            <tr>
              <th id="leftCol">Defence</th>
              <th>{this.props.pokemon.defense}</th>
            </tr>
            <tr>
              <th id="leftCol">HP</th>
              <th>{this.props.pokemon.hp}</th>
            </tr>
            <tr>
              <th id="leftCol">SP Attack</th>
              <th>{this.props.pokemon.sp_atk}</th>
            </tr>
            <tr>
              <th id="leftCol">SP Defence</th>
              <th>{this.props.pokemon.sp_def}</th>
            </tr>
            <tr>
              <th id="leftCol">Speed</th>
              <th>{this.props.pokemon.speed}</th>
            </tr>
            <tr>
              <th id="leftCol">Weight</th>
              <th>{this.props.pokemon.weight}</th>
            </tr>
            <tr>
              <th id="leftCol">Total moves</th>
              <th>{this.props.pokemon.moves.length}</th>
            </tr>
          </Table>
        </div>
      </div>
    )
  }
}

let marg = (screen.height/2) - 380 + 'px'
