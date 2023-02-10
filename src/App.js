// import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import AddItem from './Additem';
import ItemDisplay from './ItemDisplay';
import { useState, useEffect } from 'react';
import Test from './class'
// import styled from 'styled-components';
// import Info from './Info.js';
// // import { PropTypes } from "prop-types";
// import { useState } from 'react';

// const Title = styled.h1`
//   color: ${ props => props.color ? props.color : 'black' }
// `

function App ()
{
  const [ filters, setFilters ] = useState( {} )
  const [ data, setData ] = useState( { items: [] } )

  useEffect(
    () =>
    {
      fetch( "http://localhost:3000/items" )
        .then( ( Response ) => Response.json() )
        .then( ( data ) => setData( {items: data} ) )
    }, []
  )

  const updateFilters = ( searchParams ) =>
  {
    setFilters( searchParams )
  }

  const deleteItem = ( item ) =>
  {
    const items = data[ 'items' ]
    const requestOptions = {
      method: "DELETE"
    }
    fetch( `http://localhost:3000/items/${ item.id }`, requestOptions ).then(
      ( Response ) =>
      {
        if ( Response.ok )
        {
          const idx = items.indexOf( item )
          items.splice( idx, 1 )
          setData({items: items})
        }
      }
    )
  }
  const addItemToData = ( item ) =>
  {
    // let currentData = data;
    // currentData["items"].push( item )
    // setData(currentData)
    let items = data[ "items" ]
    // item.id = items.length + 1

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify( item )
    }
    fetch( 'http://localhost:3000/items', requestOptions )
      .then( ( Response ) => Response.json() )
      .then( ( data ) =>
      {
        items.push( data );
        setData( { items: items } )
      } )

    // items.push( item )
    setData( { items: items } )
    console.log( data )
  }
  const filterData = ( data ) =>
  {
    const filteredData = []
    if ( !filters.name )
    {
      return data
    }
    for ( const item of data )
    {
      if ( filters.name !== "" && item.name !== filters.name )
      {
        continue
      }
      if ( filters.price !== 0 && item.price > filters.price )
      {
        continue
      }
      if ( filters.type !== "" && item.type !== filters.type )
      {
        continue
      }
      if ( filters.brand !== "" && item.brand !== filters.brand )
      {
        continue
      }
      filteredData.push( item )
    }
    return filteredData
  }
  return (
    <div className="container">
      {/* <Title color="">TEST</Title> */ }
      <div className='row mt-3'>
        <ItemDisplay
          deleteItem = {deleteItem}
          items={ filterData( data[ 'items' ] ) } />
      </div>
      <div className='row mt-3'>
        <SearchBar updateSearchParams={ updateFilters } />
      </div>
      <div className='row mt-3'>
        <AddItem addItem={ addItemToData } />
      </div>
      <Test />


      {/* <p>Name: { "name" in filters ? filters["name"] : "No filters to display" }</p>
      <p>Price: { "price" in filters ? filters["price"] : "No filters to display" }</p>
      <p>Type: { "type" in filters ? filters["type"] : "No filters to display" }</p>
      <p>Brand: { "brand" in filters ? filters["brand"] : "No filters to display" }</p> */}

      {/* <h1>Hello</h1> */ }
      {/* <Info />
      <ButtonState></ButtonState> */}
      {/* <AddItem text="a" number={ 1 } />
      <AddItem text="b"  />
      <AddItem text="c"  /> */}
    </div>
  );
}
// function ButtonState () {
//   const [title, setTitle] = useState( "" );
//   const [count, setCount] = useState( 0 )

//   const updateTitle = () => {
//     setTitle( "we now have a title" );
//   }
//   const updateCount = () => {
//     setCount(count + 1)
//   }
//   return (
//     <div>
//       <Data title={ title } count={ count } />
//       <button onClick={updateTitle}>Update Title</button>
//       <button onClick={updateCount}>Update Counter</button>
//     </div>
//   );
// }

// function Data ( props ) {
//   return (
//     <div>
//       <p>Title: { props.title }</p>
//       <p>Count: { props.count }</p>
//     </div>
//   )
// }
// function AddItem (props) {
//   return (
//     <div>
//       <form>
//         <label for="inp">Type something: </label>
//         <input type="text" value={ props.text + ' ' + props.number } id="inp" />
//       </form>

//     </div>
//   );
// }

// AddItem.defaultProps = {
//   number: 2,
//   text: "default",
// }
// AddItem.propTypes = {
//   number: PropTypes.number,
//   text: PropTypes.string, 
// }
export default App;
