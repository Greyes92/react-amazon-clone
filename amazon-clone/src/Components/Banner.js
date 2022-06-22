import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import './Banner.css'

class Banner extends React.Component {
    render() {
        return (
          <BannerContainer>
            <Carousel className='carousel' autoPlay={true} interval={4500} infiniteLoop={true} showThumbs={false} showStatus={false} showIndicators={false}>
                <div>
                    <img src="https://m.media-amazon.com/images/I/71B1mwrQ4NL._SX3000_.jpg" alt='' />
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/71jW23T9J6L._SX3000_.jpg" alt='' />
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/71fjsrxVAQL._SX3000_.jpg" alt='' />
                </div>
            </Carousel>
          </BannerContainer>
          
        );
    }
};

export default Banner;

const BannerContainer = styled.div`
     z-index: 1;

`


