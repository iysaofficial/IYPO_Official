import Link from "next/link"

const AboutComp = () => {
    return(
        <>
        <section className="about-section" id="about-section">
        <div className="about-content">
            <img src="/assets/images/logo/IYPO.png" alt="" />
            <div className="about-text">
                <h1>IYPO</h1>
                <h5>International Youth Physics Olympiad</h5>
                <p>The Physics Olympiad is a competition held to test students abilities and knowledge in the field of Physics. This event is designed to encourage students to deepen their knowledge of physics and develop their potential.</p>
                <p>The Physics Olympiad is attended by students from various levels, from high school to university level. Participants will be tested with various questions related to basic Physics concepts in everyday life.</p>
                {/* <Link href="/AboutPage"><button className="about-btn">Read More</button></Link> */}
            </div>
        </div>
    </section>
        </>
    )
}

export default AboutComp