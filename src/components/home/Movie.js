import React, { Component } from 'react'

export default class Movie extends Component {
    render() {
        return (//react.frag is a virtual element and it will not appear in the dom
            <React.Fragment> 
                <div>
                    <div className="card text-white bg-primary mb-3" style="max-width: 18rem;">
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
