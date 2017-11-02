import React, {Component} from 'react';
// row class
export class Row extends React.Component {
  constructor(props){
    super(props)
    this.state = { asteroid: null }
  }


  unpackAsteroids = () => {
    if (this.props.asteroids) {
      this.props.asteroids.map( asteroid => {
        return <Row asteroid={asteroid}  />
      })
    }

  }
  render (){

    return (
      <tr>
        <td> {this.props.asteroid.close_approach_data[0].close_approach_date}</td>
        <td> {this.props.asteroid.is_potentially_hazardous_asteroid}</td>
        <td> {this.props.asteroid.close_approach_data[0].relative_velocity['miles_per_hour']}</td>
        <td> {this.props.asteroid.estimated_diameter.feet}</td>
      </tr>
  )}
}
export default Row;
