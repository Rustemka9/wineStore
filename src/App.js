import logo from './logo.png';
import imgOne from './Images/4.png'
import imgTwo from './Images/10.png'
import imgThree from './Images/12.png'
import imgFour from './Images/11.png'
import './App.css';
import React from 'react';
import Shopblock from './Shopblock';
import imgFive from './Images/14.png'
import imgSix from './Images/15.png'
import imgSeven from './Images/16.png'
import imgEight from './Images/17.png'

const ShopblockStyle = {
  'textAlign' : 'center'
}

const divStyle = {
  'display' : 'inline-block',
  'marginLeft' : '10px',
  'border' : '1px solid black',
  'marginTop' : '20px',
  'marginBottom' : '10px',
  'paddingBottom' : '5px',
  'paddingTop' : '5px'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='logo'>
          <img src={logo} width='40px' alt="Company Logo"/>
        </div>
        <a href="#">HOME</a>
        <a href="#">ABOUT US</a>
        <a href="#">FEATURES</a>
        <a href="#">BEER</a>
        <a href="#">OUR WINES</a>
        <a href="#">BLOG</a>
        <a href="#">CONTACTS</a>
      </header>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <img src={imgOne} alt="Mountains" className="imgOne" width='100%'height="400px"/>
          <div className="textCenter">
            <div className="textCenterHeader">
              <h1>The Best</h1>
              <h2>Reasons for winnes</h2>
            </div>
            <p>We&#8242;ve got both craft &#38; draft beers!</p>
            <p>Call: +7 9999999999</p>
          </div>
          <button className='buttonShop'>
            <p>SHOP NOW</p>
          </button>
        </div>
      </div>
      <div className="slideBox">
        <a href="#">
          <div className="imgTwo">
            <img src={imgTwo} alt="Bar"/>
            <div className="textBlockLeft">
              <div className="textBlockLeftFirstStr">Professional</div>
              <p>WINE TASTING</p>
              <div className="textBlockLeftThirdStr">Sale up to 30% off</div>
              <button className="textBlockLeftButton">
                <p>SHOP NOW</p>
              </button>
            </div>
          </div>
        </a>
        <a href="#">
          <div className="imgThree">
            <img src={imgThree} alt="Shampagne and champagne glass"/>
            <div className="textBlockCenter">
              <div className="textBlockCenterFirstStr">wine</div>
              <p>BUDGET BUBBLES</p>
              <div className="textBlockCenterThirdStr">Get 10% off all Dome delivery</div>
            </div>
          </div>
        </a>
        <a href="#">
          <div className="imgFour">
            <img src={imgFour} alt="Wine bottles"/>
            <div className="textBlockRight">
              <div className="textBlockRightFirstStr">Classic Range</div>
              <p>Limited time sale</p>
              <div className="textBlockRightThirdStr">&#36;8.99</div>
              <button className="textBlockRightButton">
                <p>SHOP NOW</p>
              </button>
            </div>
          </div>
        </a>
      </div>
      <h3>Most popular</h3>
      <div style={ShopblockStyle}>
        <div style={divStyle}>
          <img src={imgFive} width='150px' alt="Cognac Derbent" style={{'cursor': 'pointer'}}/> 
          <Shopblock 
            name={'Derbent'} 
            sort={'Cognac'} 
            price={'$25'} />
        </div>
        <div style={divStyle}>
        <img src={imgSix} width='150px' alt="Light beer Ultra" style={{'cursor': 'pointer'}}/> 
          <Shopblock 
            name={'Ultra'} 
            sort={'Light beer'} 
            price={'$10'} />
        </div>
        <div style={divStyle}>
        <img src={imgSeven} width='150px' alt="Beer Kingfisher" style={{'cursor': 'pointer'}}/> 
          <Shopblock 
          name={'Kingfisher'} 
          sort={'Beer'} 
          price={'$11'} />
        </div>
        <div style={divStyle}>
        <img src={imgEight} width='150px'alt="Wine Bin 28" style={{'cursor': 'pointer'}}/> 
          <Shopblock 
          name={'Bin 28'} 
          sort={'Wine'} 
          price={'$15'} />
        </div>
      </div>
      <footer className="footer">
        <div className="firstFooterColumn">
          <h6>Contact Us</h6>
          <p>Skilled is also likely to be focused on fast and bright teaching, course to...</p>
          <a class="phone" href="tel: +79999999999"><p>&#128379;</p> +7 999 999 99 99</a><br/>
          <a class="mailbox" href="mailto:123456789@gmail.com"><p>&#9993;</p> 123456789@gmail.com</a>
        </div>
        <div className="secondFooterColumn">
          <h6>About Us</h6>
          <a href="#">Shipping info</a><br/>
          <a href="#">Certifications</a><br/>
          <a href="#">Community</a><br/>
          <a href="#">Videos</a><br/>
          <a href="#">Beer blog</a><br/>
        </div>
        <div className="thirdFooterColumn">
          <h6>Newsletter Sisnup</h6>
          <p>Sign up for our e-mail and be the first who know our special offers!</p>
          <input className="footerThirdColumnInput" placeholder="Enter your email..."></input><br/>
          <button className="footerThirdColumnButton">Subscribe</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
