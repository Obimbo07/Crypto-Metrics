import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCrypto } from '../../redux/Crypto/CryptoSlice';
import '../../App.css';
import { Card, Row, Col } from 'react-bootstrap';
import NavBar from '../NavBar';
import Search from './Search';

const Home = () => {
  const dispatch = useDispatch();
  const cryptos = useSelector((state) => state.crypto.data.data);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchCrypto(searchQuery));
  }, [dispatch, searchQuery]);

  const filteredCryptos = cryptos && cryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="home-div">
      <div className="nav-section">
        <NavBar />
      </div>
      <Search setSearchQuery={setSearchQuery} />
      <div className="card-section">
        {filteredCryptos && filteredCryptos.length > 0 ? (
          filteredCryptos.map((crypto) => (
            <div style={{ width: 'fit-content' }} key={crypto.id}>
              <Card
                className="p-2"
                style={{
                  backgroundColor: '#343a40',
                  color: 'white',
                  width: 'fit-content',
                  margin: '10px',
                  padding: '5px',
                }}
              >
                <Card.Header>
                  <Card.Title>{crypto.name}</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">{crypto.symbol}</Card.Subtitle>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <div>No data available.</div>
        )}
      </div>
    </div>
  );
};

export default Home;
