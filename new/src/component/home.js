import './home.css';
import { IoMdSearch } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { IoMdLogIn } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-router-dom";


function Home()
{
    return(
        <div>
            <header className="fix">
        <nav>
          <div className="leftItems">
            <li>
              <img src="https://t3.ftcdn.net/jpg/02/47/48/00/240_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg" alt="Not found" className="logoImage"></img>
              </li>
              <li><b>ShopCart</b></li>
          </div>
          <div className="centerItems">
          <div>
          

            <input type="search" placeholder="Search" className="search"/><IoMdSearch className="logo"/>
            </div>
          </div>
          <div className="rightItems">
                    <ul>
          <li
              style={{
                color: "blue",
              }}
            >
              <IoHome style={{ fontSize: '25px', cursor: 'pointer' }}
              title="Home"/>
            </li>
          <li style={{
                color: "blue",
              }} >
              <FaShoppingCart 
              style={{ fontSize: '25px', cursor: 'pointer' }}
              title="Cart"/>
            </li>
            <Link to='/Aboutus'>
          <li style={{
                color: "blue",
              }} >
              <FcAbout 
              style={{ fontSize: '25px', cursor: 'pointer' }}
              title="About us"/>
            </li></Link>
           <Link to='/Login'><li className="bo" style={{ fontSize: '15px', cursor: 'pointer' }}><b>LOGIN</b><IoMdLogIn /></li></Link> 
          </ul>

          </div>
        </nav>
        </header>

       
        <div class="image-list">
    <div class="item">
        <img src="https://5.imimg.com/data5/SELLER/Default/2021/3/KO/QG/XG/3922575/all-grocery-items-500x500.jpg" alt="grocery"></img>
        <p>Grocery</p>
    </div>
    <div class="item">
        <img src="https://pngimg.com/d/iphone_14_PNG13.png" alt="Mobiles"></img>
        <p>Mobiles</p>
    </div>
    <div class="item">
        <img src="https://c8.alamy.com/comp/HKPR1N/consumer-and-home-electronicstvfridgevacuum-cleanermicrowavewasher-HKPR1N.jpg"alt="electronics"></img>
        <p>Electronics</p>
    </div>
    <div class="item">
        <img src="https://www.shutterstock.com/shutterstock/photos/2161754315/display_1500/stock-vector-a-set-of-household-appliances-microwave-oven-washing-machine-refrigerator-vacuum-cleaner-iron-2161754315.jpg" alt="appliances"></img>
        <p>Appliances</p>
    </div>
    <div class="item">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/024/822/743/small/the-headphones-ai-generated-transparent-png.png" alt="others"></img>
        <p>Others</p>
    </div>
</div>


<div className="image-slider">
  <Slider
    dots={true}
    infinite={true}
    speed={500}
    slidesToShow={1}
    slidesToScroll={1}
    autoplay={true}
    autoplaySpeed={3000}
  >
    <div>
      <img src="https://aws-obg-image-lb-3.tcl.com/content/dam/brandsite/region/in/news/pc/card-image/Newsfreedom.jpg" alt="Slide 1" />
    </div>
    <div>
      <img src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img18/Wireless/iPhone/iPhoneFestJune/Ingress/_D5172772-_IN_Wireless_iphone-Fest_1500x300._CB476317947_.jpg" alt="Slide 2" />
    </div>
    <div>
      <img src="https://www.bajajmall.in/content/dam/emistoremarketplace/index/10-10-22/swami/refrigerator/big-banner/RefDiwaliOffer_Row8_1_BigBanner_DESK_EnergyRef_PDP_SF.jpg" alt="Slide 3" />
    </div>
  </Slider>
</div>


<div className="recent-searches">
  <h2>Recently Searched</h2>
  <div className="search-items">
    <div className="search-item">
      <img
        src="https://freepngimg.com/thumb/apple/94072-technology-airpods-earbuds-apple-headset-free-transparent-image-hd.png" alt="Product 1"className="product-image"/>
      <div className="product-details">
        <p className="change">Mivi DuoPods K2 TWS,AI-ENC,40Hr Playtime,13mm Bass,Made in India</p>
        <p><b>₹1,199</b></p>
        <button>Buy Now</button>
      </div>
    </div>
    <div className="search-item">
      <img src="https://static1.industrybuying.com/products/it-electronics/smart-watch/ITE.SMA.88673817_1681467871760.webp "alt="Product 2" className="product-image" />
      <div className="product-details">
        <p className="change">PunnkFunnk 8 Ultra 1.99 Inch Display Android Force Bluetooth Calling Smart Watch</p>
        <p><b>₹1,180</b></p>
        <button>Buy Now</button>
      </div>
    </div>
    <div className="search-item">
      <img src="https://b.scdn.gr/images/sku_main_images/031106/31106857/20211126163859_apple_iphone_13_5g_4gb_128gb_blue.jpeg " alt="Product 3" className="product-image" />
      <div className="product-details">
        <p className="change">APPLE iPhone 13 (Blue, 128 GB)</p>
        <p><b>₹1,20,490</b></p>
        <button>Buy Now</button>
      </div>
    </div>
    <div className="search-item">
      <img src="https://www.wepc.com/wp-content/uploads/2020/01/iBUYPOWER-Element-9260-957x1200.jpg " alt="Product 4" className="product-image" />
      <div className="product-details">
        <p className="change">NXTGN Core i9 Gaming PC (Core i9 11th Gen Processor, 32GB RAM, 1TB SSD, 4TB Hard Drive, Windows 11 Pro)</p>
        <p><b>₹58,900</b></p>
        <button>Buy Now</button>
      </div>
    </div>
  </div>
</div>



<div className="recent-searches">
  <h2>Popularly Searched</h2>
  <div className="search-items">
    <div className="search-item">
      <img
        src="https://m.media-amazon.com/images/I/41N-xTnsiGL.SY445_SX342_QL70_FMwebp.jpg" alt="Product 1"className="product-image"/>
      <div className="product-details">
        <p className="change">Certified Refurbished Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Blue)</p>
        <p><b>₹2,299</b></p>
        <button>Buy Now</button>
      </div>
    </div>
    <div className="search-item">
      <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41HtuG4T+5L.SX300_SY300.jpg"alt="Product 2" className="product-image" />
      <div className="product-details">
        <p className="change">Hisense 189 cm (75 inches) 4K Ultra HD Smart Mini LED QLED TV 75U7K (Black)</p>
        <p><b>₹1,49,990</b></p>
        <button>Buy Now</button>
      </div>
    </div>
    <div className="search-item">
      <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51kMB0GKJOL.SX679.jpg" alt="Product 3" className="product-image" />
      <div className="product-details">
        <p className="change">NEXDIGITRON ACE Plus Car Dash Camera with GPS Logger, 140° Wide Angle Upto 128GB Supported,Made in India</p>
        <p><b>₹5,699</b></p>
        <button>Buy Now</button>
      </div>
    </div>
    <div className="search-item">
      <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/21pJ7D2fWmL.jpg" alt="Product 4" className="product-image" />
      <div className="product-details">
        <p className="change">MEGACOOL CENTRE-Dakin 1 Ton 3 Star Fixed Speed Split AC (2)</p>
        <p><b>₹1,18,999</b></p>
        <button>Buy Now</button>
      </div>
    </div>
  </div>
</div>


<footer class="container1">
    <div class="column">
        <div className="logoImage">
            <img src="https://t3.ftcdn.net/jpg/02/47/48/00/240_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg" alt="no logo"></img>
        </div>
        <br></br>
        <p>Shopcart</p>
        <div><FaInstagram className="icon"/><FaFacebook className="icon"/><FaSquareXTwitter className="icon"/></div>
    </div>
    <div class="column">
        <h4>Company</h4>
        <p>Business</p>
        <p>Partnership</p>
        <p>Network</p>
    </div>
    <div class="column">
        <h4>Contact</h4>
       <Link to='/Privacy' className='pri'> <p>Privacy policy</p></Link>
        <p>Contact us</p>
        <p>Terms and conditions</p>
    </div>
</footer>


<div class="copyright">
      <b> Copyright © 2023 ShopCart All Rights Reserved.</b>
    </div>
 </div>
    )
}
export default Home;