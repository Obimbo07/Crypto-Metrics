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

  // eslint-disable-next-line max-len
  const filteredCryptos = cryptos && cryptos.filter((crypto) => crypto.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="home-div">
      <Search setSearchQuery={setSearchQuery} />
      <div className="status-nav">
        <div className="nav-items">
          <span className="Page-title">Status by Crypto</span>
        </div>
      </div>
      <div className="card-section">
        {filteredCryptos && filteredCryptos.length > 0 ? (
          filteredCryptos.map((crypto, index) => (
            <div style={{ width: '50%' }} key={crypto.id}>
              <Card
                className="p-2"
                style={{
                  backgroundColor: index % 2 === 0 ? '#3939d1' : '#4d4dff',
                  color: 'white',
                  padding: '7px',
                  height: '96%',
                }}
              >
                <Card.Header className="header-card">
                  <Card.Title className="card-title">{crypto.name}</Card.Title>
                  <div className="div-cardImg">
                    <Card.Img
                      variant="top"
                      src={crypto.iconUrl}
                      alt="Coin Icon"
                      style={{ width: '70%', height: '70%', objectFit: 'contain' }}
                    />
                  </div>
                  <Link to={`/details/${crypto.name}`}>
                    <FaArrowCircleRight className="details-nav" />
                  </Link>
                </Card.Header>
                <Card.Body className="cardBody">
                  <Card.Subtitle className=" text-muted">
                    Market Cap:
                    {' '}
                    {crypto.marketCap}
                  </Card.Subtitle>
                  <Card.Subtitle className=" text-muted">
                    Price:
                    {' '}
                    {crypto.price}
                  </Card.Subtitle>
                  <Card.Subtitle className=" text-muted">
                    Change:
                    {' '}
                    {crypto.listedAt}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <div className="loading-text">Loading Data Please Wait...</div>
        )}
      </div>
    </div>
  );
};

export default Home;
