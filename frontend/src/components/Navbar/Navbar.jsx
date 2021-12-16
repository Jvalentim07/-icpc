import React from "react"

import './Navbar.scss'

class NavigationBar extends React.Component {
    // state = {
    //     itemsMenu: [],
    //     itemsServices: [],
    //     menuShow: false
    // }
    async componentDidMount() {
        console.log('Navbar code')
    }
    // Componente do NavBar
    render () {
        return (
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                Navbar
            </div>
        )
    }
}

export default NavigationBar