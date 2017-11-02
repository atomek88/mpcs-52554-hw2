import { Row } from 'row.js'
// table  class
class NeosTable extends React.Component {
  constructor(props){
    super(props)
    this.state = { asteroid: null }
  }

  addAsteroids = () => {
    this.state.asteroids.map( asteroid => {
      return <Row asteroid={asteroid} otherProp={ otherProp } />
    })
  }



  render() {
    return (
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

    )
  }



}

export default neos_results;
