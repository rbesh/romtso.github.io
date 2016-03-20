import React from 'react';
import {DropdownButton,MenuItem,Row,Col} from 'react-bootstrap'
import store from '../store.js'
import {setFilter,removeFilter} from '../actions'

export default class Filter extends React.Component {
  constructor(...options){
    super(...options)
    this.state={filterTypes:[],applyedFilters:[]}
    store.subscribe(()=>{
      this.setState({filterTypes:store.getState().filterTypes,applyedFilters:store.getState().applyedFilters})
    })
  }
  handleChooseFilter(e,filter){
    e.preventDefault();
    store.dispatch(setFilter(filter));
  }
  handleCloseFilter(e,filter){
    e.preventDefault();
    store.dispatch(removeFilter(filter));
  }
  render(){
    return (
      <Row className="filter">
        <Col xs={4} md={3}>
          <DropdownButton title="Add filter" id="bg-nested-dropdown">
            {this.state.filterTypes.map((elem,i)=>{
              return <MenuItem key={i} onClick={e=>this.handleChooseFilter(e,elem)}>{elem}</MenuItem>
            })}
          </DropdownButton>
        </Col>
        <Col xs={8} md={9}>
          {this.state.applyedFilters.map((elem,i)=>{
            return (<div className={"chip "+elem} key={i}>
              {elem}
              <i onClick={e=>this.handleCloseFilter(e,elem)} className="material-icons">close</i>
            </div>)
          })}
        </Col>
    </Row>
    )
  }
}

let marg = (screen.height/2) - 380 + 'px'
