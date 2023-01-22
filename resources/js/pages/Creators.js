import { useDispatch, useSelector } from "react-redux";
import { VStack } from "@chakra-ui/react";

import { Head, Link, usePage } from "@inertiajs/inertia-react";
import Layout from "@/shared/Layout";

import NavigationCreator from "@/components/UI/NavigationCreator";
import WhyHero from "@/components/WhyHero";
import WhyFeatures from "@/components/WhyFeatures";
import WhyCta from "@/components/WhyCta";
import WhyCtaPlans from "@/components/WhyCtaPlans";
import HomeHighlightedReview from "@/components/HomeHighlightedReview";
import Footer from "@/components/UI/Footer";

import { toggleMobileMenu, selectGlobal } from "@/slices/globalSlice";
import useRoutes from "@/utils/useRoutes";
import useLang from "@/utils/useLang";
import peoples from "../../img/peoples.png";
import backtick from "../../img/backtick.png";
import Rectangle from "../../img/Rectangle.png";
import avatar2 from "../../img/avatar2.png";
import Component1 from "../../img/Component1.png";
import "../../css/main.css";
import "../../Assets/Why1.css";
import { FaSearch, FaLock, FaStar, FaArrowDown } from "react-icons/fa";
import Navigation from "../components/UI/Navigation";
import renderStars from "@/utils/renderStars";
import { Inertia } from "@inertiajs/inertia";
import PromoModal from "../components/UI/PromoModal";
import "../../css/app_dev.css";
import ReactHtmlParser from "react-html-parser";

const Creators = ({ highlightedReview, context, authUser }) => {
    document.documentElement.scrollTop = 0;
    const dispatch = useDispatch();
    const { isMobileMenuOpen } = useSelector(selectGlobal);
    const route = useRoutes();
    const { locale } = usePage().props;
    const lang = useLang(locale);
    lang.setFallback("en");
    return (
        <>
            <Head>
                {/* <title>{lang.get("creators.meta_title")}</title> */}
            </Head>
            <Navigation
                isMobileMenuOpen={isMobileMenuOpen}
                onToggle={() => dispatch(toggleMobileMenu())}
                logo="white"
                textColor="white"
                btnScheme={{
                    color: "chantilly.500",
                    background: "white",
                }}
                scheme="chantilly"
                context={context}
            />

            <section className="Why1slider">
                <div className="container">
                    <div className="row Why1slider">
                        <div className="Why1 col-lg-12 col-sm-12">
                            <h1 className="mb-2">
                                {/* {ReactHtmlParser(lang.get('creators.hero'))} */}
                                {ReactHtmlParser(
                                    lang.get("creators.hero.title")
                                )}
                            </h1>
                            <p className="mb-3">
                                {ReactHtmlParser(
                                    lang.get("creators.hero.subtitle")
                                )}
                            </p>
                        </div>
                        <div className="searchWhy1">
                            <input
                                type="text"
                                id="search"
                                name="fname"
                                placeholder={ReactHtmlParser(
                                    lang.get("creators.hero.search_placeholder")
                                )}
                            />
                            <a
                                className="button-hover-effect"
                                style={{
                                    cursor: "pointer",
                                    display: "inline-block",
                                }}
                                onClick={() => {
                                    let search =
                                        document.getElementById("search").value;
                                    Inertia.get(
                                        "categories/search?q=" + search
                                    );
                                }}
                            >
                                {ReactHtmlParser(
                                    lang.get("creators.hero.button")
                                )}
                            </a>
                        </div>
                    </div>
                    <div className="downbtn">
                        <p>
                            <a href="#carouselExampleIndicators2">
                                <FaArrowDown />
                            </a>
                        </p>
                    </div>
                </div>
            </section>
            {/* section why1slider end */}
            <section className="why12">
                <div className="container">
                    <div className="row threetrack">
                        <div className="threetrack col-lg-4 col-sm-12">
                            <h1>01.</h1>
                            <h2>
                                {ReactHtmlParser(
                                    lang.get("creators.features.1.title")
                                )}
                            </h2>
                            <p>
                                {ReactHtmlParser(
                                    lang.get("creators.features.1.body")
                                )}
                            </p>
                        </div>
                        <div className="threetrack col-lg-4 col-sm-12">
                            <h1>02.</h1>
                            <h2>
                                {ReactHtmlParser(
                                    lang.get("creators.features.2.title")
                                )}
                            </h2>
                            <p style={{ paddingTop: "20px" }}>
                                {ReactHtmlParser(
                                    lang.get("creators.features.2.body")
                                )}
                            </p>
                        </div>
                        <div className="threetrack col-lg-4 col-sm-12">
                            <h1>03.</h1>
                            <h2>
                                {ReactHtmlParser(
                                    lang.get("creators.features.3.title")
                                )}
                            </h2>
                            <p>
                                {ReactHtmlParser(
                                    lang.get("creators.features.3.body")
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="why123">
                <div className="container">
                    <div className="row whyprivy">
                        <div className="whyprivy col-lg-8 col-sm-12">
                            <h1>
                                {ReactHtmlParser(
                                    lang.get("creators.cta.title")
                                )}
                            </h1>
                            <p>
                                {ReactHtmlParser(lang.get("creators.cta.body"))}
                            </p>
                            <div>
                                <Link
                                    href="/trust-in-reviews"
                                    style={{ color: "black" }}
                                >
                                    <button className="std-button-pink">
                                        {ReactHtmlParser(
                                            lang.get("creators.cta.button")
                                        )}
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div
                            className="whyprivy col-lg-4 col-sm-12"
                            style={{ pointerEvents: "none" }}
                        >
                            <img src={Component1} />
                        </div>
                    </div>
                </div>
            </section>
            {/* sixth section */}
            <section className="sixth">
                <div className="container">
                    <div className="row">
                        <div
                            className="sixth_one col-lg-6 col-sm-12"
                            style={{ padding: "100px 0px" }}
                        >
                            <div
                                id="carouselExampleCaptions"
                                class="carousel slide vertical"
                                data-bs-ride="carousel"
                            >
                                <div class="carousel-movers">
                                    {highlightedReview &&
                                        highlightedReview.map(
                                            (review, index) => {
                                                return (
                                                    <button
                                                        type="button"
                                                        data-bs-target="#carouselExampleCaptions"
                                                        data-bs-slide-to={index}
                                                        className={
                                                            index == 0
                                                                ? "active"
                                                                : ""
                                                        }
                                                        aria-current="true"
                                                        aria-label={
                                                            "Popular Review " +
                                                            (index + 1)
                                                        }
                                                    ></button>
                                                );
                                            }
                                        )}
                                </div>
                                <div class="carousel-inner">
                                    {highlightedReview &&
                                        highlightedReview.map(
                                            (review, index) => {
                                                return (
                                                    <div
                                                        className={
                                                            "carousel-item" +
                                                            (index == 0
                                                                ? " active"
                                                                : "")
                                                        }
                                                    >
                                                        <div className="six_content">
                                                            <h2>
                                                                {review.title}
                                                            </h2>
                                                            <img
                                                                className="backtick"
                                                                style={{
                                                                    padding:
                                                                        "20px 0px",
                                                                }}
                                                                src={backtick}
                                                            />
                                                            <p>
                                                                {
                                                                    review.description
                                                                }
                                                            </p>
                                                            <div className="start_icon">
                                                                {renderStars(
                                                                    review.rating,
                                                                    "2xl"
                                                                )}
                                                            </div>
                                                            <img
                                                                className="avatar_six"
                                                                src={avatar2}
                                                                alt="/"
                                                            />
                                                            <h3>
                                                                {review.short_name ||
                                                                    "Unknown"}
                                                            </h3>{" "}
                                                            <h6>
                                                                {lang.get(
                                                                    "home.reviews_masonry.reviewed",
                                                                    {
                                                                        name: review.creator_short_name,
                                                                    }
                                                                )}
                                                            </h6>
                                                        </div>
                                                    </div>
                                                );
                                            }
                                        )}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <img
                                className="peoples"
                                style={{ width: "80%", float: "right" }}
                                src={peoples}
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* sixth section end*/}

            <section className="getSeen" id="3">
                <div className="container">
                    <div className="row getseen">
                        <div
                            id="carouselExampleIndicators2"
                            class="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div class="carousel-indicators">
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators2"
                                    data-bs-slide-to="0"
                                    class="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                ></button>
                            </div>
                            <div class="carousel-inner2">
                                <div class="carousel-item active">
                                    <img
                                        className="rectangleimg"
                                        src={Rectangle}
                                    />
                                    <div className="why1heading">
                                        <h1>
                                            {ReactHtmlParser(
                                                lang.get(
                                                    "creators.cta_plans.title"
                                                )
                                            )}
                                        </h1>
                                        <p>
                                            {ReactHtmlParser(
                                                lang.get(
                                                    "creators.cta_plans.body"
                                                )
                                            )}
                                        </p>
                                        <div
                                            className="plansbtn"
                                            onClick={() => {
                                                Inertia.get(
                                                    "/plans-and-pricing"
                                                );
                                            }}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <a href="#">
                                                {ReactHtmlParser(
                                                    lang.get(
                                                        "creators.cta_plans.button"
                                                    )
                                                )}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {authUser && authUser.plan == null && (
                <>
                    <PromoModal />
                </>
            )}

            <Footer />
        </>
    );
};



Creators.layout = (page) => <Layout children={page} />;

export default Creators;
