import React from 'react'
import ReactDOM from 'react-dom';

import {connect} from 'react-redux';

import * as SearchActions from '../../actions/SimpleActions'

let pages = {
}

var MainPage = React.createClass({
   getInitialState() {
      return {}
   },
   render() {
      return (
      <div>
        <h1>
          {'Hi!'}
        </h1>
        <p>
          {'Happy coding!'}
        </p>
      </div>)

   }
})

function mapStateToProps(state) {
   return {}
}

function mapDispatchToProps(dispatch) {
   return {

   };
}

var MainPageApp = connect(mapStateToProps, mapDispatchToProps)(MainPage)
export default MainPageApp
