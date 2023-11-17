import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchDetails } from '../redux/Crypto/CryptoSlice';

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const cryptoDetails = useSelector((state) => state.crypto.details.coins);
  console.log(cryptoDetails);

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, [dispatch, id]);

  return (
    <div>
      <h2>
        Crypto Details for ID:
        {' '}
        {id}
      </h2>
      {cryptoDetails ? (
        <Card className="m-3">
          <Card.Header>
            <Card.Title>{cryptoDetails.name}</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <strong>Symbol:</strong>
              {' '}
              {cryptoDetails.symbol}
            </Card.Text>
            <Card.Text>
              <strong>Market Cap:</strong>
              {' '}
              {cryptoDetails.marketCap}
            </Card.Text>
            <Card.Text>
              <strong>Price:</strong>
              {' '}
              {cryptoDetails.price}
            </Card.Text>
            <Card.Text>
              <strong>Change:</strong>
              {' '}
              {cryptoDetails.change}
            </Card.Text>
            {/* Add more details as needed */}
          </Card.Body>
        </Card>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default Details;
