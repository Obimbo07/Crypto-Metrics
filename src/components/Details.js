import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchCrypto } from '../redux/Crypto/CryptoSlice';
import './Details.css';

const Details = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const cryptoDetailsArray = useSelector((state) => state.crypto.data.coins);
  const cryptoDetails = cryptoDetailsArray
    ? cryptoDetailsArray.find((crypto) => crypto.name === name)
    : null;
  useEffect(() => {
    dispatch(fetchCrypto(name));
  }, [dispatch, name]);

  return (
    <div className="details-container">

      {cryptoDetails && (
        <>
          <div className="details-header">
            <div className="header-inner">
              <span className="detail">
                Rank:
                {' '}
                {cryptoDetails.rank}
              </span>
              <span className="detail">
                24Hour Volume:
                {' '}
                {cryptoDetails['24hVolume']}
              </span>
              <span className="detail">
                BTC price:
                {' '}
                {cryptoDetails.btcPrice}
              </span>

            </div>
            <div className="img-cont">
              <img className="logo-img" src={cryptoDetails.iconUrl} alt="logo" />
            </div>
          </div>
          <div className="divider-header">
            <h2>
              Crypto Details for:
              {' '}
              {name}
            </h2>
          </div>
          <ul className="details-list">
            <li className="details-item">
              <strong>Name:</strong>
              {' '}
              {cryptoDetails.name}
            </li>
            <li className="details-item">
              <strong>Symbol:</strong>
              {' '}
              {cryptoDetails.symbol}
            </li>
            <li className="details-item">
              <strong>24h Volume:</strong>
              {' '}
              {cryptoDetails['24hVolume']}
            </li>
            <li className="details-item">
              <strong>BTC Price:</strong>
              {' '}
              {cryptoDetails.btcPrice}
            </li>
            <li className="details-item">
              <strong>Change:</strong>
              {' '}
              {cryptoDetails.change}
            </li>
          </ul>

        </>
      )}
    </div>
  );
};

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Details;
