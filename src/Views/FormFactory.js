import React, { Component } from 'react'
/* INT */
import ViewContainer from '../Components/View/ViewContainer'

export default class FormFactory extends Component {

    render() {
        return (
            <ViewContainer title={this.props.title}>
            </ViewContainer>
        )
    }
}