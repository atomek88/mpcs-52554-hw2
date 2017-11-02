import { Row } from 'row';
import React, {Component} from 'react';
// table  class
export class NeosTable extends React.Component {
  constructor(props){
    super(props)
    this.state = { asteroid: null }
  }

  addAsteroids = () => {
    this.state.asteroids.map( asteroid => {
      return <Row asteroid={asteroid}  />
    })
  }



  render() {
    return (
      <div>
      <div class="container">
      <p class="pull-left"> checkbox </p>

      <p class="pull-right"> scrollbard </p>
      </div>

      <div class="row table-responsive">
        <div class="col-sm-16 col-md-10">
          <table class="table table-striped table-bordered">
            <thead>
              <th>Approach Date</th>
              <th>Hazardous?</th>
              <th>Speed (mph)</th>
              <th>Max. Diameter (feet)</th>
            </thead>
            {this.state.asteroids.map( asteroid => {
              return <Row asteroid={asteroid} />
            })}
            </table>
          </div>
        </div>
        </div>
    )
  }



}

export default NeosTable;
