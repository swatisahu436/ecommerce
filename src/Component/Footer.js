import { Link } from 'react-router-dom';
const Footer = () => {
    return (

        <footer className="foot">
            <div className='foot_two'>
            <div className='foot_out'>
                <h1
                >MobiMart</h1>
                <h5>@2024 MobiMart Limited</h5>
                
            </div>
            <div className='foot_in'>
                <ul>
                    <h4 className='foot_details'> More About Us</h4>
                    <h4 className='foot_details'>Store</h4>
                    <h4 className='foot_details'>Contact</h4>
                    <h4 className='foot_details'>Social Links
                        <ul className='tags'><Link to="https://www.linkedin.com/company/swiggy-in/"><img src="https://media-assets.swiggy.com/portal/testing/seo-home/Linkedin.svg" alt="lin#" /></Link>
                            <Link to="https://www.instagram.com/swiggyindia/?hl=en"><img src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-instagram.svg" alt="inst#" /></Link>
                            <Link to="https://www.facebook.com/swiggy.in/"><img src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-facebook.svg" alt="face#" /></Link>
                            <Link to="https://in.pinterest.com/swiggyindia/"><img src="https://media-assets.swiggy.com/portal/testing/seo-home/icon-pinterest.svg" alt="pint#" /></Link>
                            <Link to="https://x.com/Swiggy?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor&mx=2"><img src="https://media-assets.swiggy.com/portal/testing/seo-home/Twitter.svg" alt="twitt#" /></Link>
                        </ul></h4>
                </ul>
            </div>
            </div>
            <div className='app_down'>
                <p className='app_line'>For better experience, download the MobiMart  app now</p>
                <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl' alt='helo'></img>
                <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv' alt='helo'></img>
            </div>
        </footer>
    );
};
export default Footer;