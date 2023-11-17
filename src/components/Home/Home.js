/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { FaArrowCircleRight } from 'react-icons/fa';
import { fetchCrypto } from '../../redux/Crypto/CryptoSlice';
import '../../App.css';
import Search from './Search';

const Home = () => {
  const dispatch = useDispatch();
  const cryptos = useSelector((state) => state.crypto.data.coins);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchCrypto(searchQuery));
  }, [dispatch, searchQuery]);

  const filteredCryptos = cryptos && cryptos.filter((crypto) => crypto.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="home-div">
      <Search setSearchQuery={setSearchQuery} />
      <div className="status-nav">
        <div className="nav-items">
          <span className="Page-title">Status</span>
          <Link to="/alltimeStatus">
            <span className="link">All time Status</span>
          </Link>
        </div>
      </div>
      <div className="card-section">
        {filteredCryptos && filteredCryptos.length > 0 ? (
          filteredCryptos.map((crypto) => (
            <div style={{ width: '50%' }} key={crypto.id}>
              <Card
                className="p-2"
                style={{
                  backgroundColor: 'rgb(52, 58, 64)',
                  color: 'white',
                  margin: '10px',
                  padding: '40px',
                  borderStyle: 'groove',
                  borderRadius: '56px',
                }}
              >

                <Card.Header className="header-card">
                  <Card.Title>{crypto.name}</Card.Title>
                  <div className="div-cardImg">
                    <Card.Img
                      variant="top"
                      src={crypto.iconUrl}
                      alt="Coin Icon"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <Link to={`/details/${crypto.id}`}>
                    <FaArrowCircleRight className="details-nav" />
                  </Link>
                </Card.Header>
                <Card.Body class="cardBody">
                  <Card.Subtitle className="mb-2 p-2 text-muted">
                    Market Cap:
                    {' '}
                    {crypto.marketCap}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 p-2 text-muted">
                    Price:
                    {' '}
                    {crypto.price}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 p-2 text-muted">
                    Change:
                    {' '}
                    {crypto.listedAt}
                  </Card.Subtitle>
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
