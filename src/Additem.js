import { useState } from "react";


function AddItem ( props )
{
    const [ name, setName ] = useState( "" )
    const [ price, setPrice ] = useState( 0 )
    const [ type, setType ] = useState( "" )
    const [ brand, setBrand ] = useState( "" )

    const addItemButtonPressed = () =>
    {
        props.addItem( { name: name, price: price, type: type, brand: brand } )
    }

    return (
        <div className="container">
            <div className="row">
                <h2>Add an Item</h2>
            </div>

            <div className="row">
                <label htmlFor="name-field">Name:</label>
                <input id="name-field" className="form-control" type="text" value={ name } onChange={ ( e ) => setName( e.target.value ) } />
                <label htmlFor="price-field">Price:</label>
                <input id="price-field" className="form-control" type="number" value={ price } onChange={ ( e ) => setPrice( e.target.value ) } />
                <label htmlFor="type-field">Type:</label>
                <input id="type-field" className="form-control" type="text" value={ type } onChange={ ( e ) => setType( e.target.value ) } />
                <label htmlFor="brand-field">Brand:</label>
                <input id="brand-field" className="form-control" type="text" value={ brand } onChange={ ( e ) => setBrand( e.target.value ) } />
            </div>
            <div className="row mt-3">
                <button type="Button" className="btn btn-primary" onClick={ addItemButtonPressed }>Add item</button>
            </div>
            {/* <p>Name: { name }</p>
            <p>Price: { price }</p>
            <p>Type: { type }</p>
            <p>Brand: { brand }</p> */}
        </div>
    )
}

export default AddItem