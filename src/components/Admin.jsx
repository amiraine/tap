import React from 'react';
import PropTypes from 'prop-types';
import AdminTapList from './AdminTapList';
import { Link } from 'react-router-dom';
function Admin(props){
  function handleNewSubmission(event){
    event.preventDefault();
    props.onNewTapCreation({
      name: _beerName.value,
      brewer: _brewery.value,
      type: _type.value,
      abv: _abv.value,
      price: _price.value,
      remaining: _remaining.value
    })
    _beerName.value = '';
    _brewery.value = '';
    _type.value = '';
    _abv.value = '';
    _price.value = '';
    _remaining.value = '';
  }
  let _beerName = null;
  let _brewery = null;
  let _type = null;
  let _abv = null;
  let _price = null;
  let _remaining = null;

  return(
    <div>
      <style jsx>{`
        h1, h2, h3{
          text-align: center;
        }
        h1{
          background-color: #ffa391;
          color: white;
          padding: 20px 0px;
        }
        .form{
          display: flex;
          justify-content: center;
          font-size: 1.5em;
        }
        input{
          padding: 5px;
          margin-bottom: 15px;
          border-radius: 5px;
          border: 2px solid #ddd;
          line-height: 2em;
        }
        input::placeholder{
          font-size: 1.5em;
        }
        .inline-labels{
          display: flex;
          justify-content: space-between;
        }
        .inline-labels label{
          width: 188px;
        }
        button{
          padding: 15px 45px;
          background-color: #ffa391;
          font-size: .75em;
          border-radius: 5px;
          border: 1px transparent;
        }
      `}</style>
    <h1>For handling sales, <Link to="/sales">click here.</Link></h1>
      <h2>Administrator page</h2>
      <h3>Add a new keg</h3>
      <div className="form">
        <form onSubmit ={handleNewSubmission}>
          <label>Beer name</label><br/>
          <input
            placeholder="Beer name"
            size="90"
            id="beerName"
            ref={(input) => {_beerName = input;}}
            required
            /><br/>
          <label>Brewery name</label><br/>
          <input
            placeholder="Brewery"
            size="90"
            id="brewery"
            ref={(input) => {_brewery = input;}}
            required
          /><br/>
          <label>Beer type</label><br/>
          <input
            placeholder="e.g. Lager, Ale, etc."
            size="90"
            id="type"
            ref={(input) => {_type = input;}}
            required
            /><br/>
          <div className="inline-labels">
            <label>ABV</label> <label>Price</label>
            <label>Remaining</label><br/>
          </div>
          <input
            placeholder="5.5%"
            size="28"
            id="abv"
            ref={(input) => {_abv = input;}}
            required
            />
          <input
            placeholder="$7"
            size="28"
            id="price"
            ref={(input) => {_price = input;}}
            required
            />
          <input
            placeholder="Remaining pints"
            size="28"
            id="remaining"
            ref={(input) => {_remaining = input;}}
            required
            /><br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
Admin.propTypes ={
  onNewTapCreation: PropTypes.func
}
export default Admin;
