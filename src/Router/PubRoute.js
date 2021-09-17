import React, { Component } from 'react'
import { Route } from 'react-router-dom'

/* CUSTOM */
import Wrapper from "./Wrapper";

export default class PubRoute extends Component {

    renderWrapper = (props) => {
        return props.wrapper
            ? <Wrapper {...props} content={<props.component {...props} />} />
            : <props.component {...props} />
    }

    render() {
        return (
            <Route
                {...this.props.rest}
                render={() => this.renderWrapper({ ...this.props })}
            />
        )
    }
}
