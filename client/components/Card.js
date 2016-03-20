import React from 'react';
import {Col,Row} from 'react-bootstrap'
import store from '../store.js'

export default class Card extends React.Component {
  constructor(...options){
    super(...options)
  }
  render(){
    return (
      <div className="card" onClick={(e)=>{this.props.onClick(e)}} id="littleCard">
        <div className="card-image">
          <img src={'http://pokeapi.co/media/img/' + this.props.pokemon.pkdx_id + '.png'} id="littlePokemonPic" />
        </div>
        <div className="card-content">
          <h5 style={{textAlign:'center'}}>{this.props.pokemon.name}</h5>
        </div>
        <div className="card-action">
          <Row className="abilityRow">
            {this.props.pokemon.types.map((elem,i)=>{
              return <Col key={i} xs={12} md={6}><div className={"badge " + elem.name}>{elem.name}</div></Col>
            })}
          </Row>
        </div>
      </div>
    )
  }
}
