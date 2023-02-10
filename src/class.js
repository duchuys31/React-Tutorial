import React from "react";

class Test extends React.Component
{
    constructor ( props )
    {
        super( props )
        this.state = {
            count: 0,
        }
    }
    componentDidMount ()
    {
        console.log( "mounted!" )
    }
    componentDidUpdate ()
    {
        console.log( "update!" )
    }
    componentWillUnmount ()
    {
        console.log('cleanup')
    }
    clickedButton ()
    {
        this.setState( { count: this.state.count + 1 } )
        console.log( "clicked!" )
    }
    render ()
    {
        return (
            <div>
                <p>Clicked: { this.state.count }</p>
                <button className="btn btn-primary" onClick={ () => this.clickedButton() }>Click Me!</button>
            </div>
        )

    }
}

export default Test;