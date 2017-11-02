import Row from './row';
import React, {Component} from 'react';



// table  class
export class NeosTable extends React.Component {
  constructor(props){
    super(props)
    this.state = { hazard: false}
    // add asteroids and update state?
  }





  render() {

    return (
      <div>
      <div class="row">
        <div class="col-sm-12">
          <form class="form-row">
            <div class="form-check">
              <label class="form-check-label">
              </label>
              </div>
            <div class="form-group mx-auto">
            {/* <input id="test" step="1000" type="range" value="30000" min="0" max="60000"> */}

                  <label id="speed">
                  "Minimum Speed: "<span>30000</span>" mph"
                  </label>

              </div>
            </form>
          </div>
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
              <tbody>{
                this.props.asteroids.map( asteroid => {
                  return <Row asteroid={asteroid}  />
                })
              }</tbody>
            </table>
          </div>
        </div>
        </div>
    )
  }



}


export default NeosTable;
