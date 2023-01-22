import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Text,
  VStack,
  HStack,
  Box,
  Flex,
  Icon,
  Button,
} from '@chakra-ui/react';

import { Head, InertiaLink, Link, usePage } from '@inertiajs/inertia-react';
import Layout from '@/shared/Layout';
import {
  FaCheck, FaCheckCircle,
} from 'react-icons/fa';
import Navigation from '@/components/UI/Navigation';
import Footer from '@/components/UI/Footer';

import { toggleMobileMenu, selectGlobal } from '@/slices/globalSlice';
import CanelaText from '@/components/UI/CanelaText';
// import useRoutes from '@/utils/useRoutes';
import useLang from '@/utils/useLang';
import React from 'react';
import {Helmet} from 'react-helmet';
import useRoutes from '../utils/useRoutes';
import '../../Assets/PlansPricing.css'
import '../../Assets/UpgradedPlans.css'
import "../../css/main.css";
import '../../css/app_dev.css';
import CornerRibbon from "react-corner-ribbon";
const PlansAndPricing = () => {
    document.documentElement.scrollTop = 0;
  const dispatch = useDispatch();
  const { isMobileMenuOpen } = useSelector(selectGlobal);
  const route = useRoutes();
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");

  return (
    <>
      {/*<Head>
        <title>{lang.get('plans_and_pricing.meta_title')}</title>
      </Head> */}
      <Helmet>
        <title>{lang.get('plans_and_pricing.meta_title')}</title>
      </Helmet>
      <Navigation
        isMobileMenuOpen={isMobileMenuOpen}
        onToggle={() => dispatch(toggleMobileMenu())}
        logo="white"
        textColor="white"
        btnScheme={{
          color: 'glacier.900',
          background: 'white',
        }}
        scheme="glacier"
        navSearch={true}
      />
      <div className="main_outer">
            <div className="main_inner">
                <div className="main_header">
                    <p>Plans &amp; Pricing</p>
                    <h2>Enjoy a free 7 day trial on our paid plans
                    

                        <p style={{fontFamily: "Raleway, sans-serif"}}>No contracts and you can cancel any time.</p>
                    </h2>
                </div>
                <div className="container">
                    <div className="main_cards">
                        <div className="cards_inner cardOne">
                            <h4>Basic</h4>
                            <h2>Free</h2>
                            <p>Continue using Privy for free. Enjoy our free features and continue growing  your fandom.</p>
                            <hr />
                            <div className="innerList">
                                <ul>
                                    <li><i><FaCheckCircle /></i>Claim your profile</li>
                                    <li><i><FaCheckCircle /></i>65 word description</li>
                                    <li><i><FaCheckCircle /></i>5 searchable tags/terms</li>
                                    <li><i><FaCheckCircle /></i>Respond to reviews</li>
                                    <li><i><FaCheckCircle /></i>Link content platform profile</li>
                                    <li><i><FaCheckCircle /></i>Invite 20 subscribers to review</li>
                                    <li><i><FaCheckCircle /></i>Receive support</li>
                                </ul>
                            </div>
                            <div className="button_sec">
                                <Link href={route('checkout.my_plan')}><button className='button-hover-effect'>Choose Plan</button></Link>
                            </div>

                        </div>
                        <div className="cards_inner cardTwo">
                              <CornerRibbon
                                  position="top-right" // OPTIONAL, default as "top-right"
                                  fontColor="#f0f0f0" // OPTIONAL, default as "#f0f0f0"
                                  backgroundColor="#2c7" // OPTIONAL, default as "#2c7"
                                  containerStyle={{}} // OPTIONAL, style of the ribbon
                                  style={{'font-size' : '16px','font-family': "'Raleway', sans-serif"}} // OPTIONAL, style of ribbon content
                                  className="" // OPTIONAL, css class of ribbon
                              >
                                  POPULAR *

                              </CornerRibbon>
                            <h4>Standard</h4>
                            <h2>$49<span>/mo</span></h2>
                            <span>$499/yr</span>
                            <p>Unlock many of our features that allow you to
                                stand out from the rest. Features like upgrading
                                your profile, priority support, and custom
                                analytics to help you grow your fandom.</p>
                            <hr />
                            <div className="innerList">
                                <ul>
                                    <li><i><FaCheck /></i> Claim your profile</li>
                                    <li><i><FaCheck /></i> 120 word description</li>
                                    <li><i><FaCheck /></i> 8 searchable tags/terms</li>
                                    <li><i><FaCheck /></i> Respond to reviews</li>
                                    <li><i><FaCheck /></i> Link content platform profile</li>
                                    <li><i><FaCheck /></i> Invite 50 subscribers to review</li>
                                    <li><i><FaCheck /></i> Receive priority support</li>
                                    <li><i><FaCheck /></i> View basic performance and analytics

                                    </li>
                                </ul>
                            </div>
                            <div className="button_sec">
                                <Link href={route('checkout.my_plan')}><button className='button-hover-effect'>Choose Plan</button></Link>
                            </div>

                        </div>
                        <div className="cards_inner cardThree">
                            <h4>Premium</h4>
                            <h2>$99<span>/mo</span></h2>
                            <span>$999/yr</span>
                            <p>Get the VIP treatment with our Premium plan.
                                Unlock all features and have a robust profile.
                                Your profile will also be featured on our
                                “Featured Creators” page. This plan is great
                                for rising talents ; Get seen by everyone.</p>
                            <hr />
                            <div className="innerList">
                                <ul>
                                    <li><i><FaCheckCircle /></i> Claim your profile</li>
                                    <li><i><FaCheckCircle /></i> 200 word description</li>
                                    <li><i><FaCheckCircle /></i> 12 searchable tags/terms</li>
                                    <li><i><FaCheckCircle /></i> Respond to reviews</li>
                                    <li><i><FaCheckCircle /></i> Link content platform profile</li>
                                    <li><i><FaCheckCircle /></i> Invite unlimited subscribers to review</li>
                                    <li><i><FaCheckCircle /></i> Receive priority support
                                    </li>
                                    <li><i><FaCheckCircle /></i> View basic performance
                                        and analytics</li>
                                    <li><i><FaCheckCircle /></i> Get featured on our “featured
                                        creators” page</li>
                                </ul>
                            </div>
                            <div className="button_sec">
                                <Link href={route('checkout.my_plan')}><button className='button-hover-effect'>Choose Plan</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <Footer />
    </>
  );
};

PlansAndPricing.layout = (page) => <Layout children={page} />;

export default PlansAndPricing;
