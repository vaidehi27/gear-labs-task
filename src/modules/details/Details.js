import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as Actions from './Details.actions.js'
import { Link } from 'react-router-dom'
import TextField from 'material-ui/TextField'
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import './Details.css'

class Details extends Component {
  state = {
    slot: {}
  }

  componentDidMount () {
    this.props._getRecord((parseInt(this.props.match.params.number.replace(":", "") , 10)))
  }

  componentWillReceiveProps (props) {
    this.setState({
      slot: props.detailsState.data
    })
  }

  onFirstNameChange = val => {
    this.setState({
      slot: {
        ...this.state.slot,
        data: {
          ...this.state.slot.data,
          firstName: val.target.value
        }
      }
    })
  }

  onLastNameChange = val => {
    this.setState({
      slot: {
        ...this.state.slot,
        data: {
          ...this.state.slot.data,
          lastName: val.target.value
        }
      }
    })
  }

  onPhoneNumberChange = val => {
    this.setState({
      slot: {
        ...this.state.slot,
        data: {
          ...this.state.slot.data,
          phoneNumber: val.target.value
        }
      }
    })
  }

  onSubmit = async () => {
    let response = await Actions._postRecord(this.state.slot)
    if(response) {
      this.props.history.push("/")
    }
  }

  render () {
    return (
      <Card className="content-center">
        <CardTitle  title={`Enter details for time slot ${this.state.slot.time}`} />
        <CardText className="content-center content-column">
          <TextField
            value={this.state.slot.data && this.state.slot.data.firstName ? this.state.slot.data.firstName : ''}
            floatingLabelText="First Name"
            onChange={this.onFirstNameChange}
          />
          <TextField
            value={this.state.slot.data && this.state.slot.data.lastName ? this.state.slot.data.lastName : ''}
            floatingLabelText="Last Name"
            onChange={this.onLastNameChange}      
          />
          <TextField
            value={this.state.slot.data && this.state.slot.data.phoneNumber ? this.state.slot.data.phoneNumber : ''}
            floatingLabelText="Phone Number"
            type="number"
            onChange={this.onPhoneNumberChange}
          />
        </CardText>
        <CardActions className="content-center">
          <RaisedButton label="Submit" onClick={this.onSubmit} primary={true} disabled={this.state.slot.data && this.state.slot.data.firstName && this.state.slot.data.lastName && this.state.slot.data.phoneNumber ? false : true }/>
          <Link to="/"><RaisedButton label="Cancel" /></Link>
        </CardActions>
      </Card>
    )
  }
}

export default connect(
  state => ({
    detailsState: state.reducer.get_record,
  }),
  dispatch => bindActionCreators(Actions, dispatch)
)(Details)