import React, { Component } from 'react'

export default class Header extends Component {
    constructor() {
        super()

        this.state = {
            user: 'dushy'
        }
    }

    changeUser = (e) => {
        if(this.state.user === 'harsh') {
            this.setState({
                user: 'dushy'
            })
        } else {
            this.setState({
                user: 'harsh'
            })
        }
    }   

    render() {
        const { user } = this.state;
        return (
            <div style={{ height: '80px', background: 'black', color: "white" }}>
                <div style={{ fontSize: "45px"}} onClick={this.changeUser}>{user}</div>
            </div>
        )
    }
}
