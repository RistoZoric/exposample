import { useDispatch, useSelector } from "react-redux";
import {
    Box,
    Container,
    Text,
    Image,
    HStack,
    VStack,
    Stack,
} from "@chakra-ui/react";

import { Head, InertiaLink, usePage, Link } from "@inertiajs/inertia-react";
import Layout from "@/shared/Layout";

import Navigation from "@/components/UI/Navigation";
import Footer from "@/components/UI/Footer";
import { Helmet } from "react-helmet";

import { toggleMobileMenu, selectGlobal } from "@/slices/globalSlice";
import useRoutes from "@/utils/useRoutes";
import useLang from "@/utils/useLang";
import "../../Assets/Blog1.css";
import processed1 from "../../img/processed1.jpeg";
import chkra1 from "../../img/chkra1.png";
import chkra3 from "../../img/chkra3.png";
import blackbg from "../../img/blackbg.png";
import "../../css/app_dev.css";
const trimText = (text, length) =>
    text.length > length ? `${text.substring(0, length - 3)}...` : text;

const Blog = ({
    firstPost,
    secondPost,
    thirdAndForthPosts,
    morePosts,
    loadmore,
}) => {
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
                <title>{lang.get("blog.meta_title")}</title>
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
            />

            {/* <Helmet>
            <title>{lang.get('blog.meta_title')}</title>
      </Helmet> */}

            <section className="Blog1slider">
                <div className="container">
                    <div className="row blog1">
                        {firstPost && firstPost.id && (
                            <>
                                <div className="blog1 col-lg-6">
                                    <div className="row chkra">
                                        <div className="chkra1 col-lg-2">
                                            <img
                                                src={
                                                    firstPost.author_image
                                                        ? `https://storage.googleapis.com/storage.privy.reviews/` +
                                                          firstPost.author_image
                                                        : processed1
                                                }
                                            />
                                            <h2>
                                                {" "}
                                                <span>
                                                    {firstPost.created_at_day
                                                        .length > 1
                                                        ? firstPost.created_at_day
                                                        : "0" +
                                                          firstPost.created_at_day}
                                                </span>{" "}
                                                {firstPost.created_at_month}{" "}
                                                {firstPost.created_at_year}
                                            </h2>
                                        </div>
                                        <div className="chkra1 col-lg-10">
                                            <h2>
                                                {lang.get("blog.by")}
                                                <span>
                                                    {firstPost.author_name ||
                                                        "Unknown"}
                                                </span>
                                            </h2>
                                            <Link
                                                className="chakra-text css-b6uzoi"
                                                href={"/blog/" + firstPost.slug}
                                            >
                                                {firstPost.title}
                                            </Link>
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: trimText(
                                                        firstPost.body,
                                                        200
                                                    ),
                                                }}
                                            ></p>
                                            <Link
                                                href={"/blog/" + firstPost.slug}
                                            >
                                                Read More
                                            </Link>
                                        </div>
                                        <div className="chkra2 col-lg-12">
                                            <img
                                                src={
                                                    firstPost.image
                                                        ? `https://storage.googleapis.com/storage.privy.reviews/` +
                                                          firstPost.image
                                                        : chkra1
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        {/* ----------chkra3 hide section in mobile view----- */}
                        <div className=" blog2 col-lg-6">
                            <div className="row chkra3">
                                {secondPost && secondPost.id && (
                                    <>
                                        <div className="chkra3 col-lg-2">
                                            <img
                                                src={
                                                    secondPost.author_image
                                                        ? `https://storage.googleapis.com/storage.privy.reviews/` +
                                                          secondPost.author_image
                                                        : processed1
                                                }
                                            />
                                        </div>
                                        <div className="chkra3 col-lg-10">
                                            <h2>
                                                {lang.get("blog.by")}
                                                <span>
                                                    {secondPost.author_name ||
                                                        "Unknown"}
                                                </span>
                                            </h2>
                                            <h3>
                                                {secondPost.created_at_day
                                                    .length > 1
                                                    ? secondPost.created_at_day
                                                    : "0" +
                                                      secondPost.created_at_day}{" "}
                                                {secondPost.created_at_month}{" "}
                                                {secondPost.created_at_year}
                                            </h3>
                                            <Link
                                                className="chakra-text css-1uuv0md"
                                                href={
                                                    "/blog/" + secondPost.slug
                                                }
                                            >
                                                {secondPost.title}
                                            </Link>
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html: trimText(
                                                        secondPost.body,
                                                        200
                                                    ),
                                                }}
                                            ></p>
                                        </div>
                                        <div className="chkra3 col-lg-2"></div>
                                        <div className="chkra31 col-lg-10">
                                            <img
                                                src={
                                                    secondPost.image
                                                        ? `https://storage.googleapis.com/storage.privy.reviews/` +
                                                          secondPost.image
                                                        : chkra3
                                                }
                                            />
                                        </div>
                                        <div className="chkra3 col-lg-2"></div>
                                    </>
                                )}

                                {thirdAndForthPosts &&
                                    thirdAndForthPosts.map((post, index) => {
                                        return (
                                            <>
                                                <div className="chkra4 col-lg-8">
                                                    <h4>
                                                        {lang.get("blog.by")}{" "}
                                                        <span>
                                                            {" "}
                                                            {post.author_name ||
                                                                "Unknown"}
                                                        </span>
                                                    </h4>
                                                    <h5>
                                                        {post.created_at_day
                                                            .length > 1
                                                            ? post.created_at_day
                                                            : "0" +
                                                              post.created_at_day}{" "}
                                                        {post.created_at_month}{" "}
                                                        {post.created_at_year}
                                                    </h5>
                                                    <Link
                                                        className="chakra-text css-f0lbso"
                                                        href={
                                                            "/blog/" + post.slug
                                                        }
                                                    >
                                                        {post.title}{" "}
                                                    </Link>
                                                </div>
                                                <div className="rightcircle col-lg-2">
                                                    <img
                                                        className="rightcircle"
                                                        src={
                                                            post.author_image
                                                                ? `https://storage.googleapis.com/storage.privy.reviews/` +
                                                                  post.author_image
                                                                : processed1
                                                        }
                                                    />
                                                </div>
                                                <div className="chkra3 col-lg-2"></div>
                                            </>
                                        );
                                    })}
                            </div>
                        </div>
                        {/* ----------chkra3 hide section in mobile view----- */}
                    </div>
                </div>
            </section>
            {/* ----------------section latest post----------- */}
            <section className="latest">
                <div className="container">
                    <div className="latestpost">
                        <h4>LATEST POST</h4>
                    </div>
                    {morePosts?.map((newpost) => {
                        return (
                            <>
                                <div className="row post1 my-5">
                                    <div className="post1 col-lg-4 py-5 di1">
                                        <h1>
                                            <span>BY</span>
                                            {newpost.author_name || "Unknown"}
                                        </h1>
                                        <h2>
                                            {newpost.created_at_day.length > 1
                                                ? newpost.created_at_day
                                                : "0" +
                                                  newpost.created_at_day}{" "}
                                            {newpost.created_at_month}{" "}
                                            {newpost.created_at_year}
                                        </h2>
                                        <h3>{newpost.title}</h3>
                                    </div>
                                    <div className="post1 col-lg-4 di2">
                                        <img
                                            src={
                                                newpost.image
                                                    ? `https://storage.googleapis.com/storage.privy.reviews/` +
                                                      newpost.image
                                                    : blackbg
                                            }
                                        />
                                    </div>
                                    <div className="post1 col-lg-4 py-5 di3">
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: trimText(
                                                    newpost.body,
                                                    200
                                                ),
                                            }}
                                        ></p>
                                        <Link href={"/blog/" + newpost.slug}>
                                            <button>READ MORE</button>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                    <div className="loadmore">
                        {loadmore ? (
                            <>
                                <h2>
                                    <Link
                                        preserveState
                                        href={loadmore}
                                        style={{
                                            textDecoration: "underline",
                                            color: "#ffb8aa",
                                        }}
                                    >
                                        {lang.get("blog.more_posts")}
                                    </Link>
                                </h2>
                            </>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

Blog.layout = (page) => <Layout children={page} />;

export default Blog;
