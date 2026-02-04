import Link from 'next/link'
import '../assets/css/Footer.css'


const FooterComp = () => {
    return(
        <>
        <footer>
            <div className="footer-container">
                <div className="footer-sec aboutus">
                    <h2>IYPO</h2>
                    <p>The Physics Olympiad is a competition held to test students abilities and knowledge in the field of Physics. This event is designed to encourage students to deepen their knowledge of physics and develop their potential.</p>
                    <br />
                    <div className="hero-social-icon">
                        <span>Follow us</span>
                        <Link href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'><i className="fab fa-facebook-f facebook-bg"></i></Link>
                        <Link href="https://www.instagram.com/iyp.olympiad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'><i className='fab fa-instagram instagram-bg'></i></Link>
                        <Link href="https://www.youtube.com/@IYSAOfficial" target='_blank'><i className='fab fa-youtube youtube-bg'></i></Link>
                        <Link href="https://www.tiktok.com/@iysa.official" target='_blank'><i className='fab fa-tiktok tiktok-bg'></i></Link>
                        <Link href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'><i className='fab fa-linkedin linkedin-bg'></i></Link>
                    </div>
                </div>
                <div className="footer-sec footer-quicklinks">
                    <h2>Information Links</h2>
                    <ul>
                        <li><Link href="/#contact-section-wrapper">Contact</Link></li>
                        <li><Link href="https://iysa.or.id" target='_blank'>Our Main Website</Link></li>
                        <li><Link href="https://www.iysaolympiad.or.id/" target='_blank'>IYSA Olympiad Website</Link></li>
                    </ul>
                </div>
                <div className="footer-sec footer-quicklinks">
                    <h2>Navigation</h2>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/#about-section">About</Link></li>
                        <li><Link href="/#main-category-section">Category</Link></li>
                        <li><Link href="https://drive.google.com/file/d/1JljliDQlURbFn5K1idLiEF_nU_fuxTTF/view?usp=sharing">Guide Book</Link></li>
                        <li><Link href="/#contact-section-wrapper">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-sec footer-contact">
                    <h2>Office</h2>
                    <ul className='info'>
                        <li>
                            <span><i className='fa-solid fa-location-dot'></i></span><p><Link href="https://goo.gl/maps/9x18coXGCmSscKec6" target='_blank'>Jl. Kemang, Pasir Putih, Kecamatan. Sawangan, Kota Depok, Jawa Barat 16519</Link></p>
                        </li>
                        <li>
                            <span><i className='fa-solid fa-phone'></i></span><p><Link href="https://wa.me/+6288213248890" target='_blank'>+6288213248890</Link></p>
                        </li>
                        <li>
                            <span><i className='fa-solid fa-envelope'></i></span><p><Link href="mailto:iysa.olympiad@gmail.com" target='_blank'>iysa.olympiad@gmail.com</Link></p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        <div className='copyrightText'>
            <p>Copyright © 2024 IYPO Official.All rights reserved</p>
        </div>
        </>
    )
}

export default FooterComp