import {
  Box,
  Text,
  Icon,
  Avatar,
  Divider,
  Flex,
  LinkOverlay,
  LinkBox,
} from '@chakra-ui/react';
import { Head, InertiaLink, Link, usePage } from '@inertiajs/inertia-react';
import React, { Fragment, useState } from 'react';
import Layout from '@/shared/Layout';
import { Helmet } from 'react-helmet';

import Navigation from '@/components/UI/Navigation';
import CanelaText from '@/components/UI/CanelaText';
import Footer from '@/components/UI/Footer';
import Carousel from '@/components/UI/Carousel';

import useRoutes from '@/utils/useRoutes';
import useLang from '@/utils/useLang';
import truncateText from '@/utils/truncateText';
import renderIconToComponent from '@/utils/renderIconToComponent';
import PaddedContainer from '@/components/UI/PaddedContainer';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaSearch,
} from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../Assets/Categories.css';
import '../../css/app_dev.css';
import defaultUserImage from '../../img/user_icon_blue.png';
import { Inertia } from '@inertiajs/inertia';
import '../../css/app_dev.css';
/** V2 */

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Categories = ({ categories }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const route = useRoutes();
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = () => {
    let search = document.getElementById('search').value;
    Inertia.get('categories/search?q=' + search);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const renderCategory = (category, index) => {
    console.log('-> ', category);
    return (
      <div className="svg_slides" key={index}>
        <Link href={route('categories.view', category.slug)}>
          <Icon
            as={renderIconToComponent(category.icon)}
            h={16}
            w={16}
            color="white"
          />
        </Link>
        <h2>{category.name}</h2>
        <p>
          {' '}
          {lang.get('categories.creators_number', {
            number: category.creatorsCount,
          })}
        </p>
      </div>
    );
  };

  const renderCategoryWithCreators = (category) => {
    return (
      <>
        <div className="container">
          <div className="Cat" style={{ border: 'none' }}>
            <div>
              <h3>{category.name}</h3>
              <Slider {...settings}>
                {category.topCreators.map((user, index) => {
                  return (
                    <>
                      <div className="svg_slides2 " key={user.id}>
                        {user.avatar ? (
                          <>
                            <Link href={route('users.view', user.username)}>
                              <img
                                onError={({ currentTarget }) => {
                                  currentTarget.onerror = null;
                                  currentTarget.src = defaultUserImage;
                                }}
                                src={user.avatar}
                                alt=""
                              />
                            </Link>
                          </>
                        ) : (
                          <>
                            <Link href={route('users.view', user.username)}>
                              <img
                                onError={({ currentTarget }) => {
                                  currentTarget.onerror = null;
                                  currentTarget.src = defaultUserImage;
                                }}
                                src={defaultUserImage}
                                alt="else"
                              />
                            </Link>
                          </>
                        )}
                        <h2>{truncateText(user.username, 10)}</h2>
                      </div>
                    </>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </>
    );
    // <Fragment key={category.id}>
    //   <CanelaText
    //     as={InertiaLink}
    //     href={route('categories.view', category.slug)}
    //     fontSize="2xl"
    //     fontWeight="bold"
    //     _hover={{ textDecoration: 'underline', color: 'glacier.500' }}
    //     py={4}
    //   >
    //     {category.name}
    //   </CanelaText>
    //   <Carousel gap={32} slides={{ lg: 8 }}>
    //     {category.topCreators.map((user) => (
    //       <Flex direction="column" key={user.id}>
    //         <LinkBox>
    //           <LinkOverlay as={InertiaLink} href={route('users.view', user.username)}>
    //             <Flex direction="column" align="center">
    //               <Avatar src={user.avatar} size="xl" pointerEvents="none" background="glacier.300" borderRadius="20px" />
    //               <Text fontSize="xs" fontWeight="semibold" textAlign="center" color="gray.600" pt={2}>{truncateText(user.username, 10)}</Text>
    //             </Flex>
    //           </LinkOverlay>
    //         </LinkBox>
    //       </Flex>
    //     ))}
    //   </Carousel>
    //   <Divider borderColor="gray.300" py={2} />
    // </Fragment>
  };

  return (
    <>
      {/* <Head>
        <title>{lang.get('categories.meta_title')}</title>
      </Head> */}

      <Helmet>
        <title>{lang.get('categories.meta_title')}</title>
      </Helmet>
      <Navigation
        isMobileMenuOpen={isMobileMenuOpen}
        onToggle={() => toggleMobileMenu()}
        logo="gradient"
        textColor="glacier.500"
        btnScheme={{
          color: 'white',
          background: 'glacier.500',
        }}
        scheme="glacier"
        boxShadow="sm"
        navtype={2}
      />
      {/* <Box background="#fafafa">
        <Box
          //backgroundColor="glacier.100"
          //backgroundImage="url('/images/abstract-icon-pattern.png')"
          //backgroundRepeat="repeat"
          //h={150}
        />
        <PaddedContainer>
          <Flex direction="column" justify="center" align="start">
            <CanelaText fontSize="2xl" fontWeight="bold" py={4}>Best of Privy</CanelaText>
            <Carousel gap={32} slides={{ lg: 8 }}>
              {categories.map(renderCategory)}
            </Carousel>
            <Divider borderColor="gray.300" py={2} />
            {categories.filter((category) => category.creatorsCount > 0).map(renderCategoryWithCreators)}
          </Flex>
        </PaddedContainer>
      </Box> */}

      <div className="Categories_slider">
        <div className="container wrap">
          <div className="search-buttons32">
            <h2 className="pt-4">{lang.get('categories.category_title')}</h2>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="text"
                id="search"
                name="fname"
                placeholder="Search"
                onKeyDown={handleKeyDown}
              />
              <a onClick={handleSearch}>
                <FaSearch />
              </a>
            </div>
          </div>
          <div className="Cat1">
            <div>
              <h2>{lang.get('categories.best_of_privy')}</h2>
              <Slider {...settings}>
                {categories.map(renderCategory)}

                {/* <div className="svg_slides">
                                  <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      strokeWidth="0"
                                      viewBox="0 0 576 512"
                                      focusable="false"
                                      className="chakra-icon css-tw74kl"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                  >
                                      <path d="M268.3 32.7C115.4 42.9 0 176.9 0 330.2V464c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320C64 186.8 180.9 80.3 317.5 97.9 430.4 112.4 512 214 512 327.8V464c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320c0-165.3-140-298.6-307.7-287.3zm-5.6 96.9C166 142 96 229.1 96 326.7V464c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320c0-74.8 64.5-134.8 140.8-127.4 66.5 6.5 115.2 66.2 115.2 133.1V464c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320c0-114.2-100.2-205.4-217.3-190.4zm6.2 96.3c-45.6 8.9-76.9 51.5-76.9 97.9V464c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320c0-17.6 14.3-32 32-32s32 14.4 32 32v144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320c0-59.2-53.8-106-115.1-94.1z"></path>
                                  </svg>
                                  <h2>LGBTQ+</h2>
                                  <p>0 creators</p>
                              </div> */}
              </Slider>
            </div>
          </div>
        </div>

        {categories
          .filter((category) => category.creatorsCount > 0)
          .map(renderCategoryWithCreators)}

        {/* ------------------no.2  slides---------------- */}
        {/* {reviewerData?.map((reviewrfix) => {
                  return (
                      <>
                          <div className="container">
                              <div className="Cat">
                                  <div>
                                      <h3>Adult</h3>
                                      <Slider {...settings}>
                                          <div className="svg_slides2">
                                              <Link href="/">
                                                  <img
                                                      src={Babymatosao1}
                                                      alt=""
                                                  />
                                              </Link>
                                              <h2>{reviewrfix.name}</h2>
                                          </div>

                                          <div className="svg_slides2">
                                              <Link href="/">
                                                  <img src={Coughsy2} alt="" />
                                              </Link>
                                              <h2>{reviewrfix.name2}</h2>
                                          </div>

                                          <div className="svg_slides2">
                                              <Link href="/">
                                                  <img src={Ohsonya3} alt="" />
                                              </Link>
                                              <h2>{reviewrfix.name3}</h2>
                                          </div>

                                          <div className="svg_slides2">
                                              <Link href="/">
                                                  <img src={Kenley4} alt="" />
                                              </Link>
                                              <h2>{reviewrfix.name4}</h2>
                                          </div>

                                          <div className="svg_slides2">
                                              <Link href="/">
                                                  <img src={Prvegax} alt="" />
                                              </Link>
                                              <h2>{reviewrfix.name5}</h2>
                                          </div>

                                          <div className="svg_slides2">
                                              <Link href="/">
                                                  <img
                                                      src={Sherryshen}
                                                      alt=""
                                                  />
                                              </Link>
                                              <h2>{reviewrfix.name6}</h2>
                                          </div>

                                          <div className="svg_slides2">
                                              <Link href="/">
                                                  <img
                                                      src={Sofiryanxoxoxo}
                                                      alt=""
                                                  />
                                              </Link>
                                              <h2>{reviewrfix.name7}</h2>
                                          </div>

                                          <div className="svg_slides2">
                                              <Link href="/">
                                                  <img
                                                      src={Yogaflocke0}
                                                      alt=""
                                                  />
                                              </Link>
                                              <h2>{reviewrfix.name8}</h2>
                                          </div>

                                          <div className="svg_slides2">
                                              <Link href="/">
                                                  <img
                                                      src={Liavalentina}
                                                      alt=""
                                                  />
                                              </Link>
                                              <h2>{reviewrfix.name9}</h2>
                                          </div>

                                          <div className="svg_slides2">
                                              <Link href="/">
                                                  <img src={Lo315} alt="" />
                                              </Link>
                                              <h2>{reviewrfix.name10}</h2>
                                          </div>

                                          <div className="svg_slides2">
                                              <Link href="/">
                                                  <img src={Onlyaxo} alt="" />
                                              </Link>
                                              <h2>{reviewrfix.name11}</h2>
                                          </div>

                                          <div className="svg_slides2">
                                              <Link href="/">
                                                  <img src={Dgirlx} alt="" />
                                              </Link>
                                              <h2>{reviewrfix.name12}</h2>
                                          </div>

                                          <div className="svg_slides2">
                                              <Link href="/">
                                                  <img
                                                      src={Darlingcute}
                                                      alt=""
                                                  />
                                              </Link>
                                              <h2>{reviewrfix.name13}</h2>
                                          </div>

                                          <div className="svg_slides2">
                                              <Link href="/">
                                                  <img
                                                      src={Anastasiaskye}
                                                      alt=""
                                                  />
                                              </Link>
                                              <h2>{reviewrfix.name14}</h2>
                                          </div>
                                      </Slider>
                                  </div>
                              </div>
                          </div>
                      </>
                  );
              })}
              {/* ------------------no.2  slides---------------- */}
        {/* <div className="container">
                  <div className="Music">
                      <Link href="/">Music</Link>
                  </div>

                  <div className="two_arrow">
                      <svg
                          viewBox="0 0 24 24"
                          focusable="false"
                          className="chakra-icon css-ag1zpf"
                      >
                          <path
                              fill="currentColor"
                              d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                          ></path>
                      </svg>
                      <svg
                          viewBox="0 0 24 24"
                          focusable="false"
                          className="chakra-icon css-ag1zpf"
                      >
                          <path
                              fill="currentColor"
                              d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                          ></path>
                      </svg>
                  </div>

                  <div className="Music">
                      <Link href="/">Sports</Link>
                  </div>

                  <div className="two_arrow">
                      <svg
                          viewBox="0 0 24 24"
                          focusable="false"
                          className="chakra-icon css-ag1zpf"
                      >
                          <path
                              fill="currentColor"
                              d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                          ></path>
                      </svg>
                      <svg
                          viewBox="0 0 24 24"
                          focusable="false"
                          className="chakra-icon css-ag1zpf"
                      >
                          <path
                              fill="currentColor"
                              d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                          ></path>
                      </svg>
                  </div>

                  <div className="Music">
                      <Link href="/">Gaming</Link>
                  </div>

                  <div className="two_arrow">
                      <svg
                          viewBox="0 0 24 24"
                          focusable="false"
                          className="chakra-icon css-ag1zpf"
                      >
                          <path
                              fill="currentColor"
                              d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                          ></path>
                      </svg>
                      <svg
                          viewBox="0 0 24 24"
                          focusable="false"
                          className="chakra-icon css-ag1zpf"
                      >
                          <path
                              fill="currentColor"
                              d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                          ></path>
                      </svg>
                  </div>

                  <div className="Music">
                      <Link href="/">People & Blogs</Link>
                  </div>

                  <div className="two_arrow">
                      <svg
                          viewBox="0 0 24 24"
                          focusable="false"
                          className="chakra-icon css-ag1zpf"
                      >
                          <path
                              fill="currentColor"
                              d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                          ></path>
                      </svg>
                      <svg
                          viewBox="0 0 24 24"
                          focusable="false"
                          className="chakra-icon css-ag1zpf"
                      >
                          <path
                              fill="currentColor"
                              d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                          ></path>
                      </svg>
                  </div>

                  <div className="Music">
                      <Link href="/">Entertainment</Link>
                  </div>
                  <div className="content_chkra">
                      <svg
                          viewBox="0 0 128 128"
                          className="chakra-avatar__svg css-16ite8i"
                          role="img"
                          aria-label=" avatar"
                      >
                          <path
                              fill="currentColor"
                              d="M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"
                          ></path>
                          <path
                              fill="currentColor"
                              d="M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"
                          ></path>
                      </svg>
                  </div>
                  <div className="two_arrow">
                      <svg
                          viewBox="0 0 24 24"
                          focusable="false"
                          className="chakra-icon css-ag1zpf"
                      >
                          <path
                              fill="currentColor"
                              d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                          ></path>
                      </svg>
                      <svg
                          viewBox="0 0 24 24"
                          focusable="false"
                          className="chakra-icon css-ag1zpf"
                      >
                          <path
                              fill="currentColor"
                              d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                          ></path>
                      </svg>
                  </div>

                  <div className="Music">
                      <Link href="/">Education</Link>
                  </div>

                  <div className="two_arrow">
                      <svg
                          viewBox="0 0 24 24"
                          focusable="false"
                          className="chakra-icon css-ag1zpf"
                      >
                          <path
                              fill="currentColor"
                              d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                          ></path>
                      </svg>
                      <svg
                          viewBox="0 0 24 24"
                          focusable="false"
                          className="chakra-icon css-ag1zpf"
                      >
                          <path
                              fill="currentColor"
                              d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                          ></path>
                      </svg>
                  </div>

                  <div className="Music">
                      <Link href="/">Science & Technology</Link>
                  </div>
                  <div className="two_arrow">
                      <svg
                          viewBox="0 0 24 24"
                          focusable="false"
                          className="chakra-icon css-ag1zpf"
                      >
                          <path
                              fill="currentColor"
                              d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                          ></path>
                      </svg>
                      <svg
                          viewBox="0 0 24 24"
                          focusable="false"
                          className="chakra-icon css-ag1zpf"
                      >
                          <path
                              fill="currentColor"
                              d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                          ></path>
                      </svg>
                  </div>
              </div> */}
      </div>

      <Footer />
    </>
  );
};

Categories.layout = (page) => <Layout children={page} />;

export default Categories;
