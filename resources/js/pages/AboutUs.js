import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import {
    Box,
    Container,
    Text,
    Button,
    Icon,
    Image,
    HStack,
    VStack,
    Wrap,
    WrapItem,
    Flex,
    ModalOverlay,
    Modal,
    ModalContent,
    AspectRatio,
    Avatar,
} from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";
import { Head, usePage } from "@inertiajs/inertia-react";
import renderStars from "@/utils/renderStars";

import Layout from "@/shared/Layout";

import Navigation from "@/components/UI/Navigation";
import Footer from "@/components/UI/Footer";

import { toggleMobileMenu, selectGlobal } from "@/slices/globalSlice";
import CanelaText from "@/components/UI/CanelaText";
import useRoutes from "@/utils/useRoutes";
import useLang from "@/utils/useLang";
import { FaSearch, FaLock, FaStar, FaArrowDown } from "react-icons/fa";
import mission2 from "../../img/mission2.png";
import Rectangle1 from "../../img/Rectangle1.png";
import about65 from "../../img/user_icon_blue.png";
import image from "../../img/image.png";
import Social from "../../img/Social.png";
import "../../Assets/AboutUs.css";
import "../../css/app_dev.css";
import ReactHtmlParser from "react-html-parser";
const AboutUs = ({ reviews }) => {
    document.documentElement.scrollTop = 0;
    const dispatch = useDispatch();
    const { isMobileMenuOpen } = useSelector(selectGlobal);
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const route = useRoutes();
    const { locale } = usePage().props;
   const lang = useLang(locale);
  lang.setFallback("en");
    console.log("lang", lang.get("about_us.meta_title"));

    function handleVideoOpen() {
        setIsVideoOpen(true);
    }

    function handleVideoClose() {
        setIsVideoOpen(false);
    }

    const renderReview = (review) => (
        <WrapItem
            background="white"
            borderRadius="8px"
            boxShadow="sm"
            width={{ base: "full", md: "300px" }}
        >
            <VStack w="full" spacing={6} align="start" justify="center">
                <HStack spacing={6} align="center">
                    <Avatar
                        src={review.avatar}
                        borderRadius={0}
                        borderTopLeftRadius="8px"
                        height="96px"
                        width="96px"
                        fit="cover"
                        bg="glacier.300"
                    />
                    <Box>
                        <Text fontWeight="semibold" fontSize="lg" color="black">
                            {review.username}
                        </Text>
                        <Text fontSize="sm" color="black">
                            {String(review.type).charAt(0).toUpperCase() +
                                String(review.type).slice(1)}
                        </Text>
                    </Box>
                </HStack>
                <Flex width="full" align="center" justify="center">
                    <HStack
                        width="80%"
                        spacing={2}
                        justify="center"
                        p={2}
                        background="gray.100"
                        borderRadius="4px"
                    >
                        {renderStars(review.rating, "xl")}
                    </HStack>
                </Flex>
                <Text
                    color="gray.500"
                    px={5}
                    pb={5}
                    fontSize="md"
                    textAlign="center"
                >
                    {review.description}
                </Text>
            </VStack>
        </WrapItem>
    );

    return (
        <>
            <Helmet>
                <title>{lang.get("about_us.meta_title")}</title>
            </Helmet>

            {/* <Head>
        <title>{lang.get('about_us.meta_title')}</title>
      </Head> */}
            <Navigation
                isMobileMenuOpen={isMobileMenuOpen}
                onToggle={() => dispatch(toggleMobileMenu())}
                logo="white"
                textColor="white"
                btnScheme={{
                    color: "glacier.500",
                    background: "white",
                }}
                scheme="glacier"
                navSearch={true}
            />
            <section className="AboutUSSlider">
                <div className="container">
                    <div className="row aboutSlider">
                        <div className="about1 col-lg-12 col-sm-12">
                            <h1>
                                {ReactHtmlParser(lang.get("about_us.title"))}
                            </h1>
                            
                            <p className="mb-4">
                                {ReactHtmlParser(lang.get("about_us.subtitle"))}
                            </p>
                            {/* <div className='playbutton col-lg-12 col-sm-12'>
              <img src={platButton}></img>
                  </div> */}
                            <div className="view__body">
                                <button
                                    onClick={handleVideoOpen}
                                    className="play"
                                >
                                    <FaPlay />
                                    {/* <a href= "https://www.youtube.com/watch?v=pBFQdxA-apI" class="popup-youtube" > </a> */}
                                </button>
                                {isVideoOpen ? (
                                    <div className="userLogin">
                                        <div className="inner_userLogin">
                                            <div className="userLogin_header">
                                                <button
                                                    onClick={() =>
                                                        setIsVideoOpen(false)
                                                    }
                                                >
                                                    X
                                                </button>
                                            </div>
                                            <div className="popup_content">
                                                <iframe
                                                    src="https://www.youtube.com/embed/h4v7OhbcRU0"
                                                    width="100%"
                                                    height="450px"
                                                    id="myId"
                                                    className="myClassname"
                                                    display="initial"
                                                    position="relative"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="downbtn2">
                                <p>
                                    <a href="#">
                                        <FaArrowDown />
                                    </a>
                                </p>
                            </div>
                            {/* <div className='downarrow col-lg-12 col-sm-12'>
                  <img src={Path}></img>
                  </div> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bgHero">
                <div className="container">
                    <div className="row mission">
                        <div className="Mission1 col-lg-6 col-sm-12">
                            <h1>{lang.get("about_us.our_mission.title")}</h1>
                            <div className="mission3">
                                <p>{lang.get("about_us.our_mission.body")}</p>
                            </div>
                        </div>
                        <div className="Mission2 col-lg-6 col-sm-12">
                            <img src={mission2}></img>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row whowe">
                        <div className="whowe1 col-lg-4 col-sm-12">
                            <img src={Rectangle1}></img>
                        </div>
                        <div className="whowe2 col-lg-8 col-sm-12">
                            <h1>{lang.get("about_us.who_we_are.title")}</h1>
                            <p>{lang.get("about_us.who_we_are.body")}</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* ---------- mission------------------- */}
            <section className="Aboutmain">
                <div className="container">
                    <div className="row onlyFans">
                        <h1>
                            {ReactHtmlParser(
                                lang.get("about_us.testimonials.title")
                            )}
                        </h1>

                        {reviews &&
                            reviews.map((review, index) => {
                                return (
                                    <>
                                        <div className="onlyfans col-lg-3 col-sm-12">
                                            <div className="image1">
                                                {review.avatar ? (
                                                    <>
                                                        <img
                                                            src={review.avatar}
                                                        ></img>
                                                    </>
                                                ) : (
                                                    <>
                                                        <img
                                                            src={about65}
                                                        ></img>
                                                    </>
                                                )}
                                            </div>

                                            <h2 className="mb-2">
                                                {review.username}
                                            </h2>
                                            <h3>
                                                {String(review.type)
                                                    .charAt(0)
                                                    .toUpperCase() +
                                                    String(review.type).slice(
                                                        1
                                                    )}
                                            </h3>
                                            <div className="social">
                                                {renderStars(
                                                    review.rating,
                                                    "xl"
                                                )}
                                            </div>

                                            <p>{review.description}</p>
                                        </div>
                                    </>
                                );
                            })}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

AboutUs.layout = (page) => <Layout children={page} />;

export default AboutUs;
