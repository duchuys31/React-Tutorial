import React from "react"

class Info extends React.Component{
    constructor ( props ) {
        super( props );
        this.state = {
            count: 0,
            title: "hello",
        };
        this.buttonPressed = this.buttonPressed.bind(this)
    
    }

    buttonPressed () {
        this.setState( {
            count: this.state.count + 1,
        } );
    }

    render () {
        // const title = this.props.title
        // return (
        //     <div>
        //         <h1>{ title }</h1>
        //     </div>
        // );
        return (
            <div>
                <p>Count: { this.state.count }</p>
                <button onClick={() =>this.buttonPressed()}>Click Me!</button>
            </div>
        )
        
        
    }
}

// function Info () {
//     const title = "This is my title"
//     return (
//         <div>
//             <h1>{ title }</h1>
//         </div>
//     );
// }

// Info.defaultProps = {
//     text: "default", 
//     title: "I am Huy"
// }

export default Info;