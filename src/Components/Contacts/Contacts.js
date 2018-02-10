import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class Contacts extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render () {
    return (
      <div>
        Contacts
        <Link to='/contacts/form'>Form</Link>
        <div className='form'>
          <Route path='/contacts/form' render={() => {
            return(
              <div>Contacts form</div>
            )
          }}/>
        </div>

      </div>
    )
  }
}

export default withRouter(Contacts)