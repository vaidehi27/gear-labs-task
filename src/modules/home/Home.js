import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as Actions from './Home.actions.js'
import { List, ListItem } from 'material-ui/List'
import { Link } from 'react-router-dom'
import './Home.css'

class Home extends Component {

  componentDidMount () {
    this.props._getAllRecords()
  }

  render () {
    return (
      <List className="home">
        {
          this.props.homeState.data.map(slot => (
            <Link to={`/home/:${slot.id}`} key={slot.id}>
              <ListItem
                className={`home-list ${slot.data ? 'background-red' : 'background-green'}`}
                primaryText={slot.time}
              />
            </Link>
          ))
        }
      </List>
    )
  }
}

export default connect(
  state => ({
    homeState : state.reducer.get_all_records
  }),
  dispatch => bindActionCreators(Actions, dispatch)
)(Home)