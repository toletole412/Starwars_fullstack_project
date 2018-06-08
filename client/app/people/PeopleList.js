import React from 'react'
import { connect } from 'react-redux'
import { fetchPeople } from '../redux/actions/people'

class PeopleList extends React.Component {
  //before mounting call fetchpeople function
  componentWillMount(props) {
    this.props.fetchPeople()
  }

  render() {
    const { people } = this.props
    return (
      <section className="peopleList">
        "alsdijf"
        {console.log(people)}
      </section>
    )
  }
}

//This is for getting state as props
const mapStateToProps = (state) => ({
  people: state.people
})

export default connect(mapStateToProps, { fetchPeople })(PeopleList)
