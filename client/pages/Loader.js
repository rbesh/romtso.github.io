import React from 'react';
import {render} from 'react-dom';

export default class Container extends React.Component {
  constructor(...options){
    super(...options)
  }

  render () {
    return (
      <div className="preloader-wrapper big active">
       <div className="spinner-layer spinner-green-only">
         <div className="circle-clipper left">
           <div className="circle"></div>
         </div>
         <div className="gap-patch">
           <div className="circle"></div>
         </div>
       </div>
     </div>
    )
  }
}
