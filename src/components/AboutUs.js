import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import vid2 from "./images/vid2.mp4";
import expert from "./images/expert.png";

function AboutUs() {
    return (
        <div className="AboutUs-body">
            <div className="header">
                <h1>About Us</h1>
            </div>
            <div className="main-content">
                <div className="card-container">
                    <div className="card">
                        <div className="card-header">
                            <div className="AboutUs-logo">
                                <img src={expert} alt="Logo"/>
                            </div>
                            <h5> Expert Financial Guidance.</h5>
                        </div>
                        <div className="card-content">
                            <p>card content.</p>
                        </div>
                    </div>
            
                    <div className="card">
                        <div className="card-header">
                            <div className="AboutUs-logo">
                                <img src={img1} alt="Logo"/>
                            </div>
                            <h5>Guiding personalized finance for strategic growth, precision, and insighte</h5>
                        </div>
                        <div className="card-content">
                        
                        </div>
                    </div>
            
                    <div className="card">
                        <div className="card-header">
                            <div className="AboutUs-logo">
                                <img src={img2} alt="Logo"/>
                            </div>
                            <h5>Finnar excels in CFO services, emphasizing comprehensive financial strategies for success.</h5>
                        </div>
                        <div className="card-content">
                            <p>card content .</p>
                        </div>
                    </div>
            
                    <div className="card">
                        <div className="card-header">
                            <div className="AboutUs-logo">
                                <img src={img3} alt="Logo"/>
                            </div>
                            <h5>At Finnar, you acquire a committed financial partner dedicated to ensuring your financial wellbeing and success.</h5>
                        </div>
                        <div className="card-content">
                            <p> card content.</p>
                        </div>
                    </div>
                </div>
            
                <div id="imageContainer">
                    <video  autoPlay loop muted > <source src={vid2} type="video/mp4" class = "invisible-controls" style={{ display: 'none' }} />
                        Your browser does not support the video tag.
                    </video>
                </div>
            
                <div id="contentContainer">
                
                <h1 style={{ textAlign: 'center', fontFamily: "'Arial', sans-serif" }}>FINNAR</h1>
                    <p  style={{ color: 'rgb(144, 137, 137)' }}>Finnar, blending innovation with expertise, offers tailored CFO services to address unique business needs. With a seasoned team, they navigate the 
                        dynamic business landscape, ensuring informed decisions, growth, and sustained profitability. 
                        Committed to personalized service, Finnar specializes in strategic financial guidance, 
                        acknowledging the uniqueness of each client's goals and challenges. Whether navigating
                        finance complexities or optimizing costs, they stand alongside businesses with precision.
                    </p>
                    <p  style={{ color: 'rgb(144, 137, 137)' }}>Our comprehensive CFO services extend to financial planning, budgeting, risk management,
                        and more, fostering long-term partnerships for mutual success. Finnar invites businesses on a 
                        transformative journey, where traditional and innovation converge, acting as a catalyst for growth. 
                        Together, they unlock the full potential of businesses, propelling them toward financial 
                        excellence — a shared destination where success is not just a goal but a collective achievement.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;