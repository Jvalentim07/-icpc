import * as React from "react"
// import { graphql, Link } from "gatsby"

// import 'bootstrap/dist/css/bootstrap.min.css';

import './imageHover.scss'
import './index.scss'

class HomePage extends React.Component {
  state = {
  }
  async componentDidMount() {
    await this.setState({ loading: true })
    console.log('Novo')
  }
  render () {
  return (
     <div>
       <div>Home</div>
      </div>
    )
  }
}

export default HomePage

