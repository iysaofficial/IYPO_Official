const NewsletterComp = () =>{
    return(
        <>
        <section className="newsletter-section">
            <div className="newsletter-container">
                <div className="newsletter-box">
                    <h2>Subscribe to <br /> Our Newsletter</h2>
                    <form action="https://formspree.io/f/xoqgjrok" method="POST">
                        <input type="email" placeholder="Enter Email Address" name="email"/>
                        <input type="submit" value={"Subscribe"} />
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}

export default NewsletterComp