import React from "react";
import { Route, Redirect } from "react-router-dom";

/* CUSTOM */
import Wrapper from "./Wrapper";

export default class ProRoute extends React.Component {

    renderWrapper = (props) => {
        return props.wrapper
            ? <Wrapper {...props} content={<props.component {...props} />} />
            : <props.component {...props} />
    }

    render() {
        return (
            <Route
                {...this.props.rest}
                render={(props) =>
                    this.state.auth
                        ? (
                            <React.Fragment>
                                {this.renderWrapper({ ...this.props })}
                            </React.Fragment>
                        ) : (
                            <Redirect
                                to={{
                                    pathname: "/login",
                                    state: { from: props.location }
                                }}
                            />
                        )
                }
            />
        )
    }
}