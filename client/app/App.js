import React, { Fragment } from 'react'
import PeopleList from './people/PeopleList'
import '../sass/main.scss'

export default class App extends React.Component {
  render() {
    return (
      <div className="page page--split">
        <PeopleList />
        Hello world
      </div>
    )
  }
}
