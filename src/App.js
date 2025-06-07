import React from 'react'
// css
import "./css/style.css"
// /css
// img
import logo from "./img/logo.svg"
import introImg from "./img/intro-img.svg"
import stat1 from "./img/staticon1.svg"
import stat2 from "./img/staticon2.svg"
import stat3 from "./img/staticon3.svg"
import about from "./img/about.svg"
import check from "./img/check.svg"
import box from "./img/box.svg"
import check2 from "./img/check2.svg"
import map from "./img/map.svg"
import netflix from "./img/netflix.svg"
import reddit from "./img/reddit.svg"
import amazon from "./img/amazon.png"
import discord from "./img/discord.svg"
import spotify from "./img/spotify.svg"
import person1 from "./img/person1.svg"
import person2 from "./img/person2.svg"
import person3 from "./img/person3.svg"
import facebook from "./img/facebook.svg"
import twitter from "./img/twitter.svg"
import instagram from "./img/instagram.svg"
// /img
export default function App() {
  return (
    <div>
      {/* header */}
      <div className='container'>
        <header>
          <nav>
            <div className='nav-header'>
              <div className='nav-items'>
                <div className='nav-brand'>
                  <img src={logo} alt="logo" />
                  <p className='nav-name'>Lasles <span>VPN</span></p>
                </div>
                <div className='nav-links'>
                  <ul className='nav-paths'>
                    <li className='nav-path-items'><a href="#">About</a></li>
                    <li className='nav-path-items'><a href="#">Features</a></li>
                    <li className='nav-path-items'><a href="#">Pricing</a></li>
                    <li className='nav-path-items'><a href="#">Testimonials</a></li>
                    <li className='nav-path-items'><a href="#">Help</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='nav-logbuttons'>
              <a href="#">Sign In</a>
              <button type='button'><b>Sign Up</b></button>
            </div>
          </nav>
        </header>
      </div>
      {/* /header */}
      {/* into section */}
      <div className='container'>
        <section className='intro-section'>
          <div className='intro-text'>
            <h1 className='intro-title'>Want anything to be
              <br /> easy with <span> LaslesVPN.</span></h1>
            <p className='intro-text-desc'>Provide a network for all your needs with ease and fun using <span>LaslesVPN</span><br />discover interesting features from us.</p>
            <div className='intro-button'>
              <a href='#' className='intro-btn-a'><button className='intro-btn'>Get Started</button></a>
              <span className='intro-btn-shadow'></span>
            </div>
          </div>
          <div className='intro-img'>
            <img src={introImg} alt="Intro Img" />
          </div>
        </section>
      </div>

      {/* /into section */}
      {/* stat section  */}
      <div className='container'>
        <section className='stat-section'>
          <div className='stat'>
            <div className='stat-items'>
              <div className='stat1'>
                <div className='stat-icon'><img src={stat1} alt="stat1" /></div>
                <div className='stat-text'>
                  <h3 className='stat-title'>90+</h3>
                  <p>Users</p>
                </div>
              </div>
              <span className='line'></span>
              <div className='stat2'>
                <div className='stat-icon'><img src={stat2} alt="stat2" /></div>
                <div className='stat-text'>
                  <h3 className='stat-title'>30+</h3>
                  <p>Locations</p>
                </div>
              </div>
              <span className='line'></span>
              <div className='stat3'>
                <div className='stat-icon'><img src={stat3} alt="stat3" /></div>
                <div className='stat-text'>
                  <h3 className='stat-title'>50+</h3>
                  <p>Servers</p>
                </div>
              </div>
            </div>
          </div>
        </section></div>
      {/* /stat section  */}
      {/* about section */}
      <div className='container'>

        <section className='about-section'>
          <div className='about-img'>
            <img src={about} alt="about img" />
          </div>
          <div className='about-text'>
            <div className='about-text-title'>
              <h1>We Provide Many Features You Can Use</h1>
            </div>
            <div className='about-text-desc'>
              <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
            </div>
            <div className='about-task-items'>
              <div className='about-task-item'>
                <img src={check} alt="checkIMG" />
                <p>Powerfull online protection.</p>
              </div>
              <div className='about-task-item'>
                <img src={check} alt="checkIMG" />
                <p>Internet without borders.</p>
              </div>
              <div className='about-task-item'>
                <img src={check} alt="checkIMG" />
                <p>Supercharged VPN</p>
              </div>
              <div className='about-task-item'>
                <img src={check} alt="checkIMG" />
                <p>No specific time limits.</p>
              </div>
            </div>
          </div>
        </section>
        <div className='clearfix'></div>
      </div>
      {/* /about section */}

      {/* features section */}
      <section className='features-section'>
        <div className='container'>
          <div className='features-text'>
            <h1>Choose Your Plan</h1>
            <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
          </div>
          <div className='boxes'>
            <div className='box'>
              <div className='box-img'>
                <img src={box} alt="Box image" />
              </div>
              <p className='price-text'>Free Plan</p>
              <div className='box-items'>
                <div className='box-task'>
                  <img src={check2} alt="Check img" />
                  <p>Unlimited Bandwitch</p>
                </div>
                <div className='box-task'>
                  <img src={check2} alt="Check img" />
                  <p>Encrypted Connection</p>
                </div>
                <div className='box-task'>
                  <img src={check2} alt="Check img" />
                  <p>No Traffic Logs</p>
                </div>
                <div className='box-task'>
                  <img src={check2} alt="Check img" />
                  <p>Works on All Devices</p>
                </div>
              </div>

              <div className='box-footer'>
                <p className='box-price' style={{ marginTop: "130px" }}>Free</p>
                <button className='box-button'>Select</button>
              </div>
            </div>
            <div className='box'>
              <div className='box-img'>
                <img src={box} alt="Box image" />
              </div>
              <p className='price-text'>Standard Plan</p>
              <div className='box-items'>
                <div className='box-task'>
                  <img src={check2} alt="Check img" />
                  <p>Unlimited Bandwitch</p>
                </div>
                <div className='box-task'>
                  <img src={check2} alt="Check img" />
                  <p>Encrypted Connection</p>
                </div>
                <div className='box-task'>
                  <img src={check2} alt="Check img" />
                  <p>No Traffic Logs</p>
                </div>
                <div className='box-task'>
                  <img src={check2} alt="Check img" />
                  <p>Works on All Devices</p>
                </div>
                <div className='box-task'>
                  <img src={check2} alt="Check img" />
                  <p>Connect Anyware</p>
                </div>
              </div>
              <div className='box-footer'>
                <p className='box-price' style={{ marginTop: '90px' }}>$9 / mo</p>
                <button className='box-button'>Select</button>
              </div>
            </div>
            <div className='box'>
              <div className='box-img'>
                <img src={box} alt="Box image" />
              </div>
              <p className='price-text'>Premium Plan</p>
              <div className='box-items'>
                <div className='box-task'>
                  <img src={check2} alt="Check img" />
                  <p>Unlimited Bandwitch</p>
                </div>
                <div className='box-task'>
                  <img src={check2} alt="Check img" />
                  <p>Encrypted Connection</p>
                </div>
                <div className='box-task'>
                  <img src={check2} alt="Check img" />
                  <p>No Traffic Logs</p>
                </div>
                <div className='box-task'>
                  <img src={check2} alt="Check img" />
                  <p>Works on All Devices</p>
                </div>
                <div className='box-task'>
                  <img src={check2} alt="Check img" />
                  <p>Connect Anyware</p>
                </div>
                <div className='box-task'>
                  <img src={check2} alt="Check img" />
                  <p>Get New Features</p>
                </div>
              </div>
              <div className='box-footer'>
                <p className='box-price' style={{ marginTop: "50px" }}>$12 / mo</p>
                <button className='box-button'>Select</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /features section */}
      {/* testimonials section */}
      <div className='container'>
        <section className='map-section'>
          <div className='map-text'>
            <h1 className='map-title'>Huge Global Network<br />of Fast VPN</h1>
            <p className='map-desc'>See <span>LaslesVPN</span> everywhere to make it easier for you when you move locations.</p>
          </div>
          <img src={map} alt="map" className='map-img' />
        </section>
      </div>
      {/* /testimonials section */}
      {/* companys */}
      <div className='container'>
        <section className='companys-section'>
          <div className='companys'>
            <img src={netflix} alt="netflix" />
            <img src={reddit} alt="reddit" />
            <img src={amazon} alt="amazon" />
            <img src={discord} alt="discord" />
            <img src={spotify} alt="spotify" />
          </div>
        </section>
      </div>
      {/* /companys */}
      {/* help */}
      <div className='container'>
        <section className='help-section'>
          <div className='help-text'>
            <h1 className='help-text-title'>Trusted by Thousands of<br />Happy Customer</h1>
            <p className='help-text-desc'>These are the stories of our customers who have joined us with great <br />pleasure when using this crazy feature.</p>
          </div>
          <div className='cards'>
            <div className='card'>
              <div className='card-header'>
                <img src={person1} alt="Person 2" />
                <div className='card-data'>
                  <h1 className='card-person-name'>Viezh Robert</h1>
                  <p className='card-person-address'>Warsaw,Poland</p>
                </div>
              </div>
              <p className='card-text'>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
            </div>
            <div className='card'>
              <div className='card-header'>
                <img src={person2} alt="Person 1" />
                <div className='card-data'>
                  <h1 className='card-person-name'>Yessica Christy</h1>
                  <p className='card-person-address'>Warsaw,Poland</p>
                </div>
              </div>
              <p className='card-text'>“I like it because I like to travel far and still can connect with high speed.”.</p>
            </div>
            <div className='card'>
              <div className='card-header'>
                <img src={person3} alt="Person 3" />
                <div className='card-data'>
                  <h1 className='card-person-name'>Kim Young Jou</h1>
                  <p className='card-person-address'>Seoul, South Korea</p>
                </div>
              </div>
              <p className='card-text'>“This is very unusual for my business that currently requires a virtual private network that has high security.”.</p>
            </div>
          </div>
        </section>
        <footer>

        </footer>
      </div>
      {/* /help */}
      {/* footer */}
      <footer>
        <div className='container'>
          <div className='footer-section'>

            <div className='footer-endText'>
              <div className='nav-brand'>
                <img src={logo} alt="logo" />
                <p className='nav-name'>Lasles <span>VPN</span></p>
              </div>
              <div className='footer-text'>
                <p> <b>LaslesVPN</b> is a private virtual network that<br />has unique features and has high security.</p>
              </div>
              <div className='footer-social'>
                <img src={facebook} alt={"facebook"} />
                <img src={twitter} alt={'twitter'} />
                <img src={instagram} alt={"instagram"} />
              </div>
              <p className='copyright'>©2020Lasles<b>VPN</b></p>
            </div>
            <div className='footer-links'>
              <div className='footer-product'>
                <p className='title-link'><b>Product</b></p>
                <a href='#'><p className='footer-link'>Download</p></a>
                <a href='#'><p className='footer-link'>Pricing</p></a>
                <a href='#'><p className='footer-link'>Locations</p></a>
                <a href='#'><p className='footer-link'>Server</p></a>
                <a href='#'><p className='footer-link'>Countries</p></a>
                <a href='#'><p className='footer-link'>Blog</p></a>
              </div>
              <div className='footer-product'>
                <p className='title-link'><b>Engage</b></p>
                <a href='#'><p className='footer-link'>LaslesVPN</p></a>
                <a href='#'><p className='footer-link'>FAQ</p></a>
                <a href='#'><p className='footer-link'>Tutorials</p></a>
                <a href='#'><p className='footer-link'>About Us</p></a>
                <a href='#'><p className='footer-link'>Privacy Policy</p></a>
                <a href='#'><p className='footer-link'>Terms of Service</p></a>
              </div>
              <div className='footer-product'>
                <p className='title-link'><b>Earn Money</b></p>
                <a href='#'><p className='footer-link'>Affiliate</p></a>
                <a href='#'><p className='footer-link'>Become Partner</p></a>
              </div>
            </div>
          </div>
          <div className='clearfix'></div>
        </div>
      </footer>
      {/* /footer */}
    </div >
  )
}
