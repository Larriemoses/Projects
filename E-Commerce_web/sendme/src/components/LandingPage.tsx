import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import '../assets/Styles/components/LandingPage.css';
import { FaRegComment, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

import { freelancerTestimonials, clientTestimonials, Testimonial } from './sub_components/testimonials';
import PaginationDots from './sub_components/pagenationDots';
import AOS from 'aos';

const LandingPage = () => {
    const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) { // Show when user scrolls down 300px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', toggleVisibility);
    
    // Clean up event listener on unmount
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };




    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    const [clientIndex, setClientIndex] = useState<number>(0);
    const [freelancerIndex, setFreelancerIndex] = useState<number>(0);

    // Functions to handle pagination dot clicks separately for clients and freelancers
    const handleClientDotClick = (index: number) => {
        setClientIndex(index);
    };

    const handleFreelancerDotClick = (index: number) => {
        setFreelancerIndex(index);
    };

    const currentClientTestimonial: Testimonial = clientTestimonials[clientIndex];
    const currentFreelancerTestimonial: Testimonial = freelancerTestimonials[freelancerIndex];

    return (
        <>


            <div data-aos="fade-up" id="landing-content" className='HeroSection'>
                <div className="Sections">
                    <div className='IntroSection' data-aos="fade-up">
                        <p>Get a trusted Freelancers | Jobs right away! </p>
                        <h1>Connect to over 200k plus Freelancers & Business across the Nigerian Institutions</h1>
                    </div>
                    <div className="cards" id='findfreelancers'>
                        <div className="card1">
                            <h1>Find Freelancers</h1>
                            <p style={{ marginTop: '-5%' }}>We make job easier - that means finding you the best Freelancers within reach</p>
                            <button>Click Here</button>
                        </div>
                        <div className="card2" id='findworks'>
                            <h1>Find Work</h1>
                            <p>We make job easier - that means finding you th8e best fitting jobs within reach</p>
                            <button> Click Here</button>
                        </div>
                    </div>
                </div>
                <div className='backgroundImage'></div>
            </div>
            <div className="main" id='aboutus'>
                <div data-aos="flip-left" className='About Us'>
                    <div className="WhySendMe_1">
                        <h2>What is SendMe?</h2>
                        <hr />
                        <h1>Your Trusted Freelancers</h1>
                    </div>
                    <div className="WhySendMe_2">
                        <p>SendMe is a student community of expert Freelancers providing your needed services around the home and office across all the Nigerian institutions. We guarantee comfort and peace of mind with our sole commitment to pairing every {"(Student)"} client - individual, home or office with the best of Freelancers in your Institution to ensure you get top talent service in time and at the best price available.</p>
                        <a href="#">More about Us</a>
                    </div>
                </div>

                <div data-aos="zoom-in" className='Testimonials'>
                    {/* Client Testimonials Section */}
                    <div className="clientSide">
                        <h2>Client's Testimonials</h2>
                        <hr />
                        <div className="subTestimonial">
                            <FaRegComment size={70} color='#c72424' style={{ marginRight: '5%', justifySelf: 'center' }} />
                            <h1>What our Clients say</h1>
                        </div>
                    </div>
                    <span className='pagenationDots1'>
                        <PaginationDots currentIndex={clientIndex} total={clientTestimonials.length} onClick={handleClientDotClick} />
                    </span>
                    <div className="testimonyBox">
                        <div className='mTestimony'>
                            <p>"{currentClientTestimonial.testimony}"</p>
                            <p style={{ color: '#c72424' }}><strong>- {currentClientTestimonial.testifier}</strong></p>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" className='Testimonials freelancer'>
                    {/* Freelancer Testimonials Section */}
                    <div className="clientSide ">
                            <h2>Freelancers' Testimonials</h2>
                            <hr />
                            <div className="subTestimonial">
                                <FaRegComment size={70} color='#c72424' style={{ marginRight: '5%', justifySelf: 'center' }} />
                                <h1>What our Freelancers say</h1>
                            </div>
                        </div>
                        <span className='pagenationDots1'>
                            <PaginationDots currentIndex={freelancerIndex} total={freelancerTestimonials.length} onClick={handleFreelancerDotClick} />
                        </span>
                        <div className="testimonyBox">
                            <div className='mTestimony'>
                                <p>"{currentFreelancerTestimonial.testimony}"</p>
                                <p style={{ color: '#c72424' }}><strong>- {currentFreelancerTestimonial.testifier}</strong></p>
                            </div>
                        </div>
                </div>

               <div className="beforeFooter">
                    <div data-aos="slide-left"className="LastMain1">

                        <div className="firstPart">
                        <hr className="vertical-hr" />
                        <h1><b style={{color: '#c72424'}}>200k</b> Plus Freelancers on our platform</h1>
                        </div>

                        <div className="endPA">
                            <p >We make it easy for you to hire the most proficient Freelancers with years of experience, and the exact skills you’re looking for.</p>
                            <button>Hire now</button>
                        </div>
                    </div>

                    <div data-aos="slide-right" className="LastMain2">
                             
                     <div className="secondPartHidden">
                        <hr className="vertical-hr" />
                            <h1>Over <b style={{color: '#c72424'}}>2000</b> Jobs Posted daily</h1>
                        </div>
                    

                        <div className="endSecondPart">
                            <p  >We want the best for you and your career.
                            For starters, our entire team of experts will always have your back.</p>
                            <button>Find work</button> 
                        </div>
                      
                        <div className="secondPart">
                        <hr className="vertical-hr" />
                            <h1>Over <b style={{color: '#c72424'}}>2000</b> Jobs Posted daily</h1>
                        </div>
                    
                    </div>
               </div>

            </div>
            
            <div data-aos="flip-up" id='contact' className='footerSection'>
                <div className="footer_one">
                    <h1>Do you have any question?</h1>
                    <button>Login</button>
                    <div className='contact'>
                        <h2>899 567 567 </h2>
                        <hr />
                        <p>Address</p>
                        <p>FUTO, Owerri, Imo State</p>
                    </div>
                </div>

                <div className="footer_two">
                        <div className="terms">
                            <ul>
                                <li><a href="#">PRIVACY POLICY</a></li>
                                <li><a href="#">TERMS OF USE</a></li>
                                
                            </ul>
                            <p>COPYRIGHT &copy;2024 SENDME INC. </p>
                        </div>

                      
                        <ul className="socials">
                           <li><a href="https://www.linkedin.com/sendme"><FaLinkedin size={35} color='black' style={{ marginLeft: '2%'}} /></a></li> 
                           <li><a href="https://www.facebook.com/sendme"><FaFacebook size={35} color='black' style={{ marginLeft: '2%'}} /></a></li> 
                           <li><a href="https://www.instagram.com/sendme"><FaInstagram size={35} color='black' style={{ marginLeft: '2%'}} /></a></li> 
                           <li><a href="https://www.x.com/sendme"><FaTwitter size={35} color='black' style={{ marginLeft: '2%'}}/>
                           </a></li> 
                        </ul>
                   
                </div>
                
            </div>

            {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top">
          ↑ Top
        </button>
      )}
        </>
    );
};

export default LandingPage;
