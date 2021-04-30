import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  
  constructor() {
    super()
    this.state = {
      activatedButton: ''
    }
  }

  handleClick = (event) => {
    event.persist()
    this.setState({
      activatedButton: event.target.id
    })
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar handleClick={this.handleClick}/>
        {this.state.activatedButton === 'profile' ? <Profile/> : null}
        {this.state.activatedButton === 'photo' ? <Photos/> : null}
        {this.state.activatedButton === 'cocktail' ? <Cocktails/> : null}
        {this.state.activatedButton === 'pokemon' ? <Pokemon/> : null}
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
