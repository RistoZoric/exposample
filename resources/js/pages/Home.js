import { useDispatch, useSelector } from 'react-redux';
import { Container, Icon, VStack } from '@chakra-ui/react';
import ReactHtmlParser from 'react-html-parser';

import { Head, InertiaLink, Link, usePage } from '@inertiajs/inertia-react';
import Layout from '@/shared/Layout';

import Navigation from '@/components/UI/Navigation';
import HomeHero from '@/components/HomeHero';
import HomeCtaReviews from '@/components/HomeCtaReviews';
import HomeCtaCreators from '@/components/HomeCtaCreators';
import HomeReviewsMasonry from '@/components/HomeReviewsMasonry';
import HomeHighlightedReview from '@/components/HomeHighlightedReview';
import Footer from '@/components/UI/Footer';

import { toggleMobileMenu, selectGlobal } from '@/slices/globalSlice';
import useRoutes from '@/utils/useRoutes';
import useLang from '@/utils/useLang';
import HomeCtaAscs from '@/components/HomeCtaAsc';
import { FaSearch, FaLock, FaStar } from 'react-icons/fa';
import '../../css/main.css';

import create1 from '../../img/create1.png';
import create2 from '../../img/create2.png';
import fourthSec from '../../img/fourthSec.png';
import peoples from '../../img/peoples.png';
import backtick from '../../img/backtick.png';
import avatar1 from '../../img/user_icon_blue.png';
import avatar2 from '../../img/user_icon_blue.png';

import renderStars from '@/utils/renderStars';
// import { renderIconToComponent } from "../utils/renderIcon";
import renderIconToComponent from '@/utils/renderIconToComponent';
import { Inertia } from '@inertiajs/inertia';
import '../../css/app_dev.css';

const Home = ({ categories, recentReviews, highlightedReview }) => {
  const dispatch = useDispatch();
  const { isMobileMenuOpen } = useSelector(selectGlobal);
  const route = useRoutes();
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");
  const currentUSer = localStorage.getItem('current_domain');

  const base_url = localStorage.getItem('base_url');

  const handleSearch = () => {
    let search = document.getElementById('search').value;
    Inertia.get('categories/search?q=' + search);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const metaTitleHome = (currentUSer) => {
    if (currentUSer == 'creator') {
      return lang.get("home.privy_creators");
    } else {
      return lang.get("home.privy_reviews");
    }
  };

  const handleMultipleDomain = (
    url,
    jump = false,
    currentUSer,
    jump_url = ''
  ) => {
    const app_env = localStorage.getItem('app_env');
    if (app_env === 'local') {
      var http = 'http://';
    } else {
      var http = 'https://';
    }

    if (currentUSer == 'creator' && jump === false) {
      window.location.href = location.origin + '/' + url;
    }
    if (currentUSer == 'reviewer' && jump === false) {
      window.location.href = location.origin + '/' + url;
    }

    if (jump_url != '' && jump == true) {
      if (url) {
        window.open(http + jump_url + '/' + url, '_blank');
      } else {
        window.open(http + jump_url, '_blank');
      }
    }
  };
  let reviews_block = [];
  if (recentReviews.length > 0) {
    const chunkSize = 6;
    for (let i = 0; i < recentReviews.length; i += chunkSize) {
      reviews_block.push(recentReviews.slice(i, i + chunkSize));
    }
  }

  return (
    <>
      <Head>
        <title>{metaTitleHome(currentUSer)}</title>
        <meta
          name="description"
          content="Privy is a free and open public forum that brings creators and subscribers together. Built on trust and transparency, Privy provides a safe space for subscribers to share their experiences about OnlyFans content creators while also discovering new ones."
        />
        <meta
          name="keywords"
          content="Review Content Creators, Review OnlyFans, Find New OnlyFans, OnlyFans marketing, Grow OnlyFans subscribers, OnlyFans review forum"
        />
      </Head>
      <Navigation
        isMobileMenuOpen={isMobileMenuOpen}
        onToggle={() => dispatch(toggleMobileMenu())}
        logo="white"
        textColor="white"
        btnScheme={{
          color: 'chantilly.500',
          background: 'white',
        }}
        scheme="chantilly"
      />
      <section className="homeSlider-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <h1>
                {ReactHtmlParser(lang.get('home.hero'))}
               
              </h1>
              <div className="search-buttons">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="text"
                    id="search"
                    name="fname"
                    placeholder={ReactHtmlParser(lang.get('home.search_placeholder'))}
                    onKeyDown={handleKeyDown}
                  />
                  <a onClick={handleSearch}>
                    <FaSearch />
                  </a>
                </div>
                <div className="view">
                  <h4 className="one">
                    <Link href="/">{ReactHtmlParser(lang.get('home.categories.title'))}</Link>
                  </h4>
                  <h4 className="two">
                    <Link href="/categories"> {ReactHtmlParser(lang.get('home.categories.view_all'))}</Link>
                  </h4>
                </div>
              </div>

              {/* categories */}
              <div className="seven_categories">
                <Link href={'categories/top-rated'} className="one_cat">
                  <button style={{ width: '100%' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.001"
                      height="11.19"
                      viewBox="0 0 12.001 11.19"
                    >
                      <g
                        id="noun_top_1637397"
                        transform="translate(-137.832 8.06)"
                      >
                        <g
                          id="Group_31"
                          data-name="Group 31"
                          transform="translate(137.832 -8.06)"
                        >
                          <path
                            id="Path_44"
                            data-name="Path 44"
                            d="M24.662,30.3H20.671a.3.3,0,0,0-.3.3V36.22h4.59V30.6A.3.3,0,0,0,24.662,30.3Z"
                            transform="translate(-16.61 -25.03)"
                          />
                          <path
                            id="Path_45"
                            data-name="Path 45"
                            d="M24.416,4.549l-1.246-.2-.544-1.221a.344.344,0,0,0-.315-.19.308.308,0,0,0-.275.184l-.57,1.2L20.22,4.49a.328.328,0,0,0-.19.557l.892.892-.229,1.239a.328.328,0,0,0,.472.354l1.121-.57.026.013,1.082.584a.324.324,0,0,0,.479-.334l-.2-1.246.911-.872A.322.322,0,0,0,24.416,4.549Z"
                            transform="translate(-16.255 -2.94)"
                          />
                          <path
                            id="Path_46"
                            data-name="Path 46"
                            d="M3.676,23.644l-.79-.125-.345-.775a.219.219,0,0,0-.2-.121.2.2,0,0,0-.175.116L1.8,23.5l-.79.1a.208.208,0,0,0-.121.353l.566.565-.146.786a.208.208,0,0,0,.3.224l.711-.362.017.008.686.37a.205.205,0,0,0,.3-.212l-.125-.79L3.784,24A.2.2,0,0,0,3.676,23.644Z"
                            transform="translate(-0.832 -18.834)"
                          />
                          <path
                            id="Path_47"
                            data-name="Path 47"
                            d="M51.51,29.482l-.679-.107-.3-.666a.188.188,0,0,0-.172-.1.168.168,0,0,0-.15.1l-.311.655-.679.089a.179.179,0,0,0-.1.3l.486.486-.125.676a.179.179,0,0,0,.257.193l.611-.311.014.007.59.318a.177.177,0,0,0,.261-.182l-.107-.679.5-.476A.176.176,0,0,0,51.51,29.482Z"
                            transform="translate(-39.778 -23.664)"
                          />
                          <path
                            id="Path_48"
                            data-name="Path 48"
                            d="M3.949,40.514H1.714a.3.3,0,0,0-.3.3V44.47H4.249V40.813A.3.3,0,0,0,3.949,40.514Z"
                            transform="translate(-1.303 -33.28)"
                          />
                          <path
                            id="Path_49"
                            data-name="Path 49"
                            d="M50.982,43.919H48.747a.3.3,0,0,0-.3.3v3h2.834v-3A.3.3,0,0,0,50.982,43.919Z"
                            transform="translate(-39.281 -36.029)"
                          />
                        </g>
                      </g>
                    </svg>
                    <p>{ReactHtmlParser(lang.get('home.categories.top_rated'))}</p>
                  </button>
                </Link>
                <Link href={'categories/near-you'} className="one_cat">
                  <button style={{ width: '100%' }}>
                    <svg
                      id="Group_32"
                      data-name="Group 32"
                      xmlns="http://www.w3.org/2000/svg"
                      width="14.248"
                      height="19.165"
                      viewBox="0 0 14.248 19.165"
                    >
                      <path
                        id="Path_50"
                        data-name="Path 50"
                        d="M7.124,0a7.116,7.116,0,0,1,7.124,7.124c0,3.215-2.143,5.17-3.972,7.691l-3.152,4.35-3.215-4.35C2.08,12.293,0,10.339,0,7.124A7.077,7.077,0,0,1,7.124,0Zm0,3.909a3.175,3.175,0,0,1,3.152,3.215,3.122,3.122,0,0,1-3.152,3.152A3.175,3.175,0,0,1,3.909,7.124,3.229,3.229,0,0,1,7.124,3.909Z"
                        fillRule="evenodd"
                      />
                    </svg>
                    <p>{ReactHtmlParser(lang.get('home.categories.near_you'))}</p>
                  </button>
                </Link>
                <Link href={route('categories.featured')} className="one_cat">
                  <button style={{ width: '100%' }}>
                    <svg
                      id="noun_increase_1923146"
                      xmlns="http://www.w3.org/2000/svg"
                      width="14.523"
                      height="11.559"
                      viewBox="0 0 14.523 11.559"
                    >
                      <path
                        id="Path_51"
                        data-name="Path 51"
                        d="M11.457,320.792v-3.3h-3.3l.974.974L7,320.592l-1.777-1.777,0,0,0,0L0,323.321v2.147H2.147l3.188-4.03,1.671,1.67,1.258-1.258h0l2.126-2.126,1.069,1.068Z"
                        transform="translate(0 -313.909)"
                      />
                      <path
                        id="Path_52"
                        data-name="Path 52"
                        d="M12.744,1.778v8H1.778v-8H12.744M14.523,0H0V11.559H14.523Z"
                      />
                      <path
                        id="Path_53"
                        data-name="Path 53"
                        d="M1.778,704.108v-1.854L0,703.739v2.147H2.147l1.485-1.778Z"
                        transform="translate(0 -694.327)"
                      />
                    </svg>
                    <p>{ReactHtmlParser(lang.get('home.categories.featured'))}</p>
                  </button>
                </Link>

                {categories.map((category) => (
                  <Link
                    href={'categories/' + category.slug}
                    className="one_cat"
                  >
                    <button style={{ width: '100%' }}>
                      <Icon
                        as={renderIconToComponent(category.icon)}
                        height={5}
                        width={5}
                        color="gray.400"
                        mb={2}
                      />
                      <p>{category.slug}</p>
                    </button>
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-lg-6 col-sm-12"></div>
          </div>
        </div>
      </section>

      <section className="creator">
        <div className="container">
          <h1>{ReactHtmlParser(lang.get('home.cta_asc.title'))}</h1>
          <p className="mb-2">
            {ReactHtmlParser(lang.get('home.cta_asc.body'))}
          </p>
          <Link href={'#'}>
            <button
              onClick={() =>
                handleMultipleDomain(
                  currentUSer == 'reviewer' ? 'home' : '',
                  currentUSer == 'creator' ? false : true,
                  currentUSer,
                  'creators.' + base_url
                )
              }
              type="button"
              className="std-button-pink"
            >
              {ReactHtmlParser(lang.get('home.go_explore'))}
            </button>
          </Link>
        </div>
      </section>
      {/* are you create r section end*/}

      {/* third section start */}
      <div className="third_cover">
        <div className="custom-shape-divider-bottom-1652165777">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="container">
          <div className="third row">
            <div className="col-lg-4 col-sm-12">
              <h1>
                {ReactHtmlParser(lang.get('home.cta_reviews.title'))} 
              </h1>
              <p>
                {ReactHtmlParser(lang.get(`home.cta_reviews.body`))}.
              </p>
              <div className="thirdbtn_center">
                <Link className={'text-black'} href={'/categories'}>
                  <button className={'text-uppercase'}>{ReactHtmlParser(lang.get('home.cta_reviews.button'))}</button>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <img
                className="third_img1"
                src={create1}
                style={{ width: '120%' }}
              />
            </div>
            <div className="col-lg-4 col-sm-12">
              <h4>{ReactHtmlParser(lang.get('home.review_msg'))}:</h4>
              <img
                className="third_img2"
                src={create2}
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* third section end */}
      {/* <HomeCtaReviews /> */}

      {/* fourth section */}
      <div className="container">
        <div className="fourth row">
          <div
            className="fourth_one col-lg-6 col-sm-12"
            style={{ width: '35%' }}
          >
            <h1 style={{ paddingTop: '40px' }}>
              {ReactHtmlParser(lang.get('home.title'))}
              
            </h1>
            <a className={'text-black'} href={'/featured-creators'}>
              <button type="/">{ReactHtmlParser(lang.get('home.go_explore'))}</button>
            </a>
          </div>
          <div
            className="fourth_two col-lg-6 col-sm-12"
            style={{ width: '65%' }}
          >
            <img src={fourthSec} style={{ width: '100%' }} />
          </div>
        </div>
      </div>
      {/* fourth section end*/}

      {/* fifth crowsel section */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="fifthtop_heading" style={{ textAlign: 'center' }}>
          <p
            style={{
              fontWeight: 'bold',
              fontSize: '18px',
              letterSpacing: '1px',
            }}
          >
            {ReactHtmlParser(lang.get('home.reviews_masonry.subtitle'))}
          </p>
          <h2
            style={{
              fontWeight: 'bold',
              fontSize: '36px',
              paddingBottom: '10px',
            }}
          >
            {ReactHtmlParser(lang.get('home.reviews_masonry.title'))}
           
          </h2>
        </div>
        <div className="container">
          <div className="carousel-indicators">
            {reviews_block.map((item, index) => {
              return (
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={index}
                  className={index == 0 ? 'active' : ''}
                  aria-current="true"
                  aria-label={'Slide ' + (index + 1)}
                ></button>
              );
            })}
          </div>
          <div className="carousel-inner">
            {reviews_block.map((item, index) => {
              let CSize = 2;
              let CArray = [];
              for (let i = 0; i < item.length; i += CSize) {
                CArray.push(item.slice(i, i + CSize));
              }
              return (
                <div
                  key={index}
                  className={'carousel-item ' + (index == 0 ? 'active' : '')}
                >
                  <div className="row">
                    {CArray.map((innerItem, innerIndex) => {
                      if (innerItem.length > 0) {
                        return (
                          <div
                            className="col-lg-4 col-sm-12 col-md-6"
                            key={innerIndex}
                          >
                            {innerItem.map((it, ind) => {
                            
                              return (
                                <div className="nmae35" key={innerIndex}>
                                  <p>{it.description}</p>
                                  <div className="start_icon">
                                    {renderStars(it.rating, 'xl')}
                                  </div>
                                  {it.avatar ? (
                                    <>
                                      <img
                                        src={it.avatar}
                                        alt="/"
                                        className="rounded-circle"
                                      />
                                    </>
                                  ) : (
                                    <>
                                      <img
                                        src={avatar1}
                                        alt="/"
                                        className="rounded-circle"
                                      />
                                    </>
                                  )}
                                  <h3 className="mt-2">
                                    {it.username || lang.get('home.unknown')}
                                  </h3>{' '}
                                  <h6 className="mt-2 ">
                                     {ReactHtmlParser(lang.get('home.reviews_masonry.reviewed'))}
                                    <a href={'/@' + it.creator_username} className="ml-4">
                                      @{it.creator_username}
                                    </a>
                                  </h6>
                                  <div></div>
                                  {/* <img src={avatar1} alt="/" />
                                <h3>{it.short_name || ""}</h3> <h6>{ReactHtmlParser(lang.get('home.home.reviews_masonry.reviewed', { name: it.creator_short_name })}</h6> */}
                                </div>
                              );
                            })}
                          </div>
                        );
                      } else {
                        return (
                          <>
                            <div className="col-lg-4 col-sm-12 col-md-6"></div>
                          </>
                        );
                      }
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* fifth crowsel section end*/}

      {/* sixth section */}
      <section className="sixth">
        <div className="container py-2">
          <div className="row">
            <div
              className="sixth_one col-lg-6 col-sm-12"
              style={{ padding: '100px 0px' }}
            >
              <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="2000"
              >
                <div className="carousel-movers carousel-indicators">
                  {highlightedReview &&
                    highlightedReview.map((review, index) => {
                      return (
                        <button
                          type="button"
                          data-bs-target="#carouselExampleCaptions"
                          data-bs-slide-to={index}
                          className={index == 0 ? 'active' : ''}
                          aria-current="true"
                          aria-label={'Popular Review ' + (index + 1)}
                        ></button>
                      );
                    })}
                </div>
                <div className="carousel-inner">
                  {highlightedReview &&
                    highlightedReview.map((review, index) => {
                      return (
                        <div
                          className={
                            'carousel-item' + (index == 0 ? ' active' : '')
                          }
                        >
                          <div className="six_content">
                            <h2>{review.title}</h2>
                            <img
                              className="backtick"
                              style={{
                                padding: '20px 0px',
                              }}
                              src={backtick}
                            />
                            <p>{review.description}</p>
                            <div className="start_icon">
                              {renderStars(review.rating, '2xl')}
                            </div>
                            {review.avatar ? (
                              <>
                                <img
                                  className="avatar_six rounded-circle"
                                  src={review.avatar}
                                  alt="/"
                                />
                              </>
                            ) : (
                              <>
                                <img
                                  className="avatar_six rounded-circle"
                                  src={avatar2}
                                  alt="/"
                                />
                              </>
                            )}
                            <h3>{review.username || lang.get('home.Unknown')}</h3>{' '}
                            <h6>
                               {ReactHtmlParser(lang.get('home.highlighted_review.reviewed'))}
                              <a href={'/@' + review.creator_username} className="ml-4">
                                @{review.creator_username}
                              </a>
                            </h6>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <img
                className="peoples"
                style={{ width: '80%', float: 'right' }}
                src={peoples}
              />
            </div>
          </div>
        </div>
      </section>

      {/* <HomeCtaAscs />
      <HomeCtaReviews />
      <HomeCtaCreators />
      <HomeReviewsMasonry reviews={recentReviews} />
      <HomeHighlightedReview review={highlightedReview} /> */}

      <Footer />
    </>
  );
};

Home.layout = (page) => <Layout children={page} />;

export default Home;
