import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Container,
  Text,
  Button,
  Image,
  HStack,
  VStack,
  Skeleton,
  Wrap,
  WrapItem,
  Link,
} from '@chakra-ui/react';
import { InertiaLink, Head, usePage } from '@inertiajs/inertia-react';

import Layout from '@/shared/Layout';
import Navigation from '@/components/UI/Navigation';
import Footer from '@/components/UI/Footer';

import { toggleMobileMenu, selectGlobal } from '@/slices/globalSlice';
import CanelaText from '@/components/UI/CanelaText';
import useRoutes from '@/utils/useRoutes';
import useLang from '@/utils/useLang';
import React from 'react';
import {Helmet} from 'react-helmet';
import '../../Assets/TrustInReviews.css';
import tre from '../../img/tre.png';
import sweater from '../../img/sweater.png';
import lab3 from '../../img/lab3.png';
import lab2 from '../../img/lab2.jpg';
import "../../css/main.css";
import girl from '../../img/girl.png';
import { Inertia } from '@inertiajs/inertia';
import '../../css/app_dev.css';
const TrustInReviews = () => {
  document.documentElement.scrollTop = 0;
  const dispatch = useDispatch();
  const { isMobileMenuOpen } = useSelector(selectGlobal);
  const route = useRoutes();
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");

  return (
    <>
      <Helmet>
        <title>{lang.get('trust_in_reviews.meta_title')}</title>
      </Helmet>
      {/*<Head>
        <title>{lang.get('trust_in_reviews.meta_title')}</title>
      </Head>*/}
        <Navigation
          isMobileMenuOpen={isMobileMenuOpen}
          onToggle={() => dispatch(toggleMobileMenu())}
          logo="white"
          textColor="white"
          btnScheme={{
            color: 'glacier.500',
            background: 'white',
          }}
          scheme="glacier"
        />
      <VStack
        spacing={0}
        background={{
          base: 'linear-gradient(to top, rgba(255, 184, 170, 0.5) 50%, rgba(45, 55, 72, 0.5) 100%), url(/images/trust-in-reviews-hero.jpg) no-repeat center',
        }}
        backgroundSize={{
          base: 'cover',
        }}
      >
      </VStack>
      
      

      <div className="trust-image-part">
                <div className="container">
                <div className="trust-title-part">
                <h1 className='mb-4'>Why Privy?</h1>  
                <p className='mb-3'>
                      Creators and subscribers turn to Privy for lots of reasons.
                      
                      But, quite often, it narrows down to one word: Trust. Get a glimpse
                      
                      inside our community and see what makes us different
                      </p>
                  <div className="trust-button-part">
                    <button className='button-hover-effect' onClick={()=>{
                      Inertia.get('/categories')
                    }}>Explore</button>
                    </div>   
                  <div className="trust-flex-part">
                    <div className="trust-box-first">
                    <h2>Success Metrics</h2> 
                    <li>Trusted by world-class creators.</li>
                    </div>
                      <div className="trust-box-second">
                        <h6>Real Reviews</h6>
                        <li>Reviews from verified reviewers.</li>
                      </div>
                      <div className="trust-box-three">
                        <h6>Full Transparency</h6>
                        <li>Fake reviews removed.</li>
                      </div>
                      </div>  
                  </div>
                    </div>   
                  </div>
                  <div className="trust-second-flex-part">
                  <div className="trust-second-img-part">
                    <img src={tre}/>
                    </div>  
                <div className="trust-three-title">
                  <h1>
                    Real Reviews,
                    <br/>
                    In Real-Time
                    </h1>
                    <p>
                    Privy is open for users to leave a review.

                  Every single<br/> review is published instantly and without moderation.
                              <br/>
                Giving creators a safe space to learn from customer <br/>feedback and create better experiences.
                </p>
                </div>
                </div>
                <div className="trust-three-flex-part">
                  <div className="trust-three-title">
                <h1>
                Reviews You<br/>
                Can Trust
                  </h1>
                  <p>
                Trust and transparency are right at<br/> the heart of everything we do at Privy.
                            </p>
                  </div>
                <div className="trust-second-img-part">
                <img src={sweater} /> 
                </div>
                </div>
                <div className="trust-second-flex-part">
                <div className="trust-second-img-part">
                <img src={lab3} /> 
                </div>
                <div className="trust-three-title">
                <h1>

                "Free for Everyone:<br/>
                We are a Public<br/>
                Forum"
                  </h1>
                  <p>
                Trust and transparency are right at the heart<br/> of everything we do at Privy.
                            </p>
                  </div>
                </div>
                <div className="trust-three-flex-part">
                <div className="trust-three-title">
                <h1>


                "We’ve Got Your
                              <br/>
                Back From Day One"
                          
                  </h1>
                  <p>
                  At Privy, we’re one team – working together<br/> to ensure you’re getting the most out of our<br/> platform.
                We treat everyone as we’d like to <br/>be treated and work swiftly to resolve any issues<br/> you may have while using our website.
                </p>
                  </div>
                  <div className="trust-second-img-part">
                <img src={lab2} /> 
                </div>
                </div>
                <div className="trust-second-flex-part">
                <div className="trust-second-img-part">
                <img src={girl} /> 
                </div>
                <div className="trust-three-title">
                <h1>

                Anti-Extortion
                  <br/>
                  
                  & Anti-Bullying
                            
                          
                  </h1>
                  <p>
                  At Privy, we’re one team – working together to <br/>ensure you’re getting the most out of our platform.
                We treat <br/>everyone as we’d like to be treated and work swiftly to resolve<br/> any issues you may have while using our website.
                </p>
                  </div>
                </div>
                <div className="trust-last-color-part">
                <h6 className='mb-3'>Contact Us</h6>  
                <h1>Want to know more?</h1>
                <p className='mb-3'>
                Get in touch to find out more about what we do to build trust and promote
                <br/>
                transparency in online reviews.
                </p>
                <a href='https://support.privy.reviews/hc/en-us'target={"_blank"}>
                  <button className='std-button-pink' style={{color: "black"}}>Get in touch</button>
                </a>
                  </div>   

      <Footer />
    </>
  );
};

TrustInReviews.layout = (page) => <Layout children={page} />;

export default TrustInReviews;
