import Link from "next/link"

const HeroComp = () => {
    return(
        <>       
        <section className="hero-section">
            <div className="hero-container">
                <br />
                <br />
                <img src="/assets/images/logo/IYPO.png" alt=""/>
                <h1>International Youth Physics Olympiad</h1>
                <p>Registration is now open for the International Youth Physics Olympiad! <br /> Join this prestigious event and gain an unforgettable experience!
                </p>
                <br />
                <br />
                <button className="registration-button" disabled>Registration Closed</button>
                {/* <Link href="/registration" className="registration-button">Registration</Link> */}
                
                <div className="hero-social-icon">
                    <br />
                    <br />
                    <span>Follow us</span>
                    <Link href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'><i className="fab fa-facebook-f facebook-bg"></i></Link>
                    <Link href="https://www.instagram.com/iyp.olympiad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'><i className='fab fa-instagram instagram-bg'></i></Link>
                    <Link href="https://www.youtube.com/@IYSAOfficial" target='_blank'><i className='fab fa-youtube youtube-bg'></i></Link>
                    <Link href="https://www.tiktok.com/@iysa.official" target='_blank'><i className='fab fa-tiktok tiktok-bg'></i></Link>
                    <Link href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'><i className='fab fa-linkedin linkedin-bg'></i></Link>
                </div>
            </div>
        </section>
        </>
    )
}

export default HeroComp