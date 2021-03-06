import React from 'react';
import PropTypes from 'prop-types';

function AdminTap(props){
  function sellPint(){
    props.handleSellPint(props.beerId);
  }
  let emptyKeg = null;
  let hideButton = null;
  if(props.remaining === 0){
    emptyKeg = 'Please replace this keg as soon as possible!';
    hideButton = 'hidden';
  }
  return(
    <div>
      <style jsx>{`
        .hidden{
          display: none;
        }
        .tap-items{
          padding: 20px;
        }
        .tap-items:hover{
          animation: fade .5s ease-out 1;
          color: #ffa391;
        }
        @keyframes fade{
          0% {color: black; }
          100% {color: #ffa391; }
        }
        .grid-wrapper{
          display: grid;
          grid-template-columns: 2fr 1fr 2fr;
        }
        .button-wrapper{
          display: flex;
          justify-content:flex-end;
          padding: 20px;
        }
        .remainder{
          display: flex;
          justify-content:center;
          align-items: center;
        }
      `}</style>
      <div className="grid-wrapper">
        <div className="button-wrapper">
          <button className={hideButton} onClick={sellPint}>Sell pint</button>
          {emptyKeg}
        </div>
        <div className="remainder">
          <h2>{props.remaining} pints</h2>
        </div>
        <div className="items">
          <h4>{props.name} by {props.brewer}</h4>
          <h5>{props.description}</h5>
          <div>
            <h5>ABV: {props.abv} | Price: ${props.price}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

AdminTap.propTypes ={
  handleSellPint: PropTypes.func,
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.number.isRequired,
  id: PropTypes.number,
};

export default AdminTap;
