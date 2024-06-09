import '../styles/Footer.css'

import InstagramLogo from '../assets/icons/instagram.png'
import FacebookLogo from '../assets/icons/facebook.png'
import TwitterLogo from '../assets/icons/twitter.png'

export default function Footer() {
    return (
        <>
            <section className="footer-container">

                <div className='footer-content'>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>FAQs</p>
                    <p>Terms of Service</p>
                </div>

                <div className='footer-social-media'>
                    <img src={InstagramLogo} alt="Instagram logo" />
                    <img src={FacebookLogo} alt="Facebook logo" />
                    <img src={TwitterLogo} alt="Twitter logo" />
                </div>

            </section>
        </>
    )
}