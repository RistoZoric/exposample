import Hamburger from "../../../img/hamburger.png";
import Hamburger2 from "../../../img/hamburger2.png";
import { useState } from "react";
import "../../../Assets/Navbar.css";
import ReactHtmlParser from "react-html-parser";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaSearch,
} from "react-icons/fa";
import {
    Text,
    Avatar,
    AvatarBadge,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import logo from "../../../img/logo.png";
import logo2 from "../../../img/logo2.png";
import { InertiaLink, Link, usePage } from "@inertiajs/inertia-react";
import useRoutes from "@/utils/useRoutes";

import useLang from "@/utils/useLang";
import { Inertia } from "@inertiajs/inertia";

export default function Navigation({
    navtype,
    navSearch,
    context = "reviewer",
}) {
    const { locale } = usePage().props;
    const { authUser } = usePage().props;
    const route = useRoutes();
    const lang = useLang(locale);
  lang.setFallback("en");
    const [term, setterm] = useState(false);
    const TermClick = () => {
        setterm(!term);
    };
    const Closeterm = () => {
        setterm(false);
    };
    const closeCancel = () => {
        setterm(false);
    };
    const handleSearch = () => {
        let search = document.getElementById("searchnav").value;
        Inertia.get("categories/search?q=" + search);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };
    const currentDomain = location.hostname;
    if (
        currentDomain === "creators.privy.local" ||
        currentDomain === "localhost"
    ) {
        localStorage.setItem("app_env", "local");
        localStorage.setItem("base_url", "localhost:" + location.port);
    } else {
        localStorage.setItem("app_env", "pro");
        localStorage.setItem("base_url", "privy.reviews");
    }
    if (
        currentDomain === "creators.privy.local" ||
        currentDomain === "creators.privy.reviews"
    ) {
        localStorage.setItem("current_domain", "creator");
    } else {
        localStorage.setItem("current_domain", "reviewer");
    }

    const currentUSer = localStorage.getItem("current_domain");
    const app_env = localStorage.getItem("app_env");
    const base_url = localStorage.getItem("base_url");

    var header_logo = logo;
    var navLinkClass = "nav-link";
    var creatorButtonClass = "watch";
    var hamburgerIcon = Hamburger;
    var hamburgerIconStyle = {};
    if (navtype == 2) {
        header_logo = logo2;
        navLinkClass = "nav-link3";
        creatorButtonClass = "watch3";
        hamburgerIcon = Hamburger2;
        hamburgerIconStyle = {
            border: "2px solid rgb(128, 202, 229)",
        };
    }

    const PageName = location.pathname;
    //

    const handleMultipleDomain = (
        url,
        jump = false,
        currentUSer,
        jump_url = ""
    ) => {
        const app_env = localStorage.getItem("app_env");
        if (app_env === "local") {
            var http = "http://";
        } else {
            var http = "https://";
        }

        if (currentUSer == "creator" && jump === false) {
            window.location.href = location.origin + "/" + url;
        }
        if (currentUSer == "reviewer" && jump === false) {
            window.location.href = location.origin + "/" + url;
        }
        console.log("yt", http + jump_url + "/" + url);
        if (jump_url != "" && jump == true) {
            if (url) {
                window.open(http + jump_url + "/" + url, "_blank");
            } else {
                window.open(http + jump_url, "_blank");
            }
        }
    };

    if (currentUSer === "creator") {
        var homeUrl = "home";
    } else {
        var homeUrl = "";
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg " style={{zIndex:4}}>
                <div className="container">
                    <Link className="navbar-brand text-light" href="/">
                        <img src={header_logo} />
                    </Link>
                    <button
                        onClick={TermClick}
                        className="navbar-toggler"
                        style={hamburgerIconStyle}
                    >
                        {term ? (
                            <div className="term">
                                <div className="inner_term">
                                    <div className="term_header">
                                        <Link
                                            className="navbar-brand text-light"
                                            onClick={() =>
                                                handleMultipleDomain(
                                                    homeUrl,
                                                    false,
                                                    currentUSer
                                                )
                                            }
                                            href="#"
                                        >
                                            {" "}
                                            <img src={logo} />
                                        </Link>
                                        {/* <Link className="navbar-brand text-light" href={(context === 'creator') ? route('pages.creators') : route('pages.home')} >
                                            <img src={logo} />
                                        </Link> */}
                                        <button onClick={Closeterm}>X</button>
                                    </div>
                                    <div>
                                        <ul className={"navbar-nav hereh"}>
                                            <li className="nav-item active here">
                                                <Link
                                                    onClick={() =>
                                                        handleMultipleDomain(
                                                            homeUrl,
                                                            false,
                                                            currentUSer
                                                        )
                                                    }
                                                    href="#"
                                                    className="nav-link"
                                                >
                                                    {ReactHtmlParser(
                                                        lang.get(
                                                            "navigation.home"
                                                        )
                                                    )}
                                                </Link>{" "}
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    className="nav-link"
                                                    href="/categories"
                                                >
                                                    {ReactHtmlParser(
                                                        lang.get(
                                                            "navigation.categories"
                                                        )
                                                    )}
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    href="/about-us"
                                                    className="nav-link"
                                                >
                                                    {ReactHtmlParser(
                                                        lang.get(
                                                            "navigation.about_us"
                                                        )
                                                    )}
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    href="/blog"
                                                    className="nav-link"
                                                >
                                                    {ReactHtmlParser(
                                                        lang.get(
                                                            "navigation.blog"
                                                        )
                                                    )}
                                                </Link>
                                            </li>

                                            {authUser && (
                                                <>
                                                    <li className="nav-item">
                                                        <Link
                                                            href="/"
                                                            className="nav-link"
                                                        >
                                                            <Avatar
                                                                size="sm"
                                                                src={
                                                                    authUser.avatar
                                                                }
                                                                background="glacier.300"
                                                            >
                                                                <AvatarBadge
                                                                    boxSize="1em"
                                                                    bg="green.500"
                                                                />
                                                            </Avatar>
                                                        </Link>
                                                    </li>
                                                    {authUser.type ===
                                                        "creator" &&
                                                        authUser.plan_name !==
                                                            "basic" && (
                                                            <li className="nav-item">
                                                                <Link
                                                                    // onClick={() => window.open(route('creator_dashboard.index'))}
                                                                    href={route(
                                                                        "creator_dashboard.index"
                                                                    )}
                                                                    className="nav-link"
                                                                >
                                                                    {lang.get(
                                                                        "navigation.creator_dashboard"
                                                                    )}
                                                                </Link>
                                                            </li>
                                                        )}
                                                    {authUser.type ===
                                                        "creator" && (
                                                        <li className="nav-item">
                                                            <Link
                                                                href={route(
                                                                    "checkout.my_plan"
                                                                )}
                                                                className="nav-link"
                                                            >
                                                                {lang.get(
                                                                    "navigation.my_plan"
                                                                )}
                                                            </Link>
                                                        </li>
                                                    )}
                                                    <li className="nav-item">
                                                        <Link
                                                            href={route(
                                                                "auth.settings"
                                                            )}
                                                            className="nav-link"
                                                        >
                                                            {lang.get(
                                                                "navigation.settings"
                                                            )}
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link
                                                            href={"/logout"}
                                                            className="nav-link"
                                                        >
                                                            {lang.get(
                                                                "navigation.logout"
                                                            )}
                                                        </Link>
                                                    </li>
                                                </>
                                            )}
                                            {!authUser && (
                                                //     <Popover placement='top-start'>
                                                //     <PopoverTrigger>
                                                //     <li  className="nav-item" >
                                                //         <a className='nav-link'><Text>Sign in</Text> </a>
                                                //     </li>

                                                //     </PopoverTrigger>
                                                //     <PopoverContent>
                                                //       <PopoverHeader fontWeight='semibold'>Sign In as ?</PopoverHeader>
                                                //       <PopoverArrow />
                                                //       <PopoverCloseButton />
                                                //       <PopoverBody>
                                                //       <Link  href="#" onClick={() => window.open(route('auth.creator-sign-in'))}><Text> Creator </Text></Link>
                                                //       <Link  href="#" onClick={() => window.open(route('auth.reviewer-sign-in'))}><Text> Reviewer </Text></Link>
                                                //       </PopoverBody>
                                                //     </PopoverContent>
                                                //   </Popover>
                                                <li className="nav-item">
                                                    <Link
                                                        href={route(
                                                            "auth.sign-in"
                                                        )}
                                                        className="nav-link"
                                                    >
                                                        {lang.get(
                                                            "navigation.login"
                                                        )}
                                                    </Link>
                                                </li>
                                            )}
                                            <div
                                                className={
                                                    "forcreatorbtn mobilebtn" +
                                                    currentUSer
                                                }
                                            >
                                                {currentUSer == "creator" ? (
                                                    <>
                                                        <Link
                                                            className="forcreators pro"
                                                            onClick={() =>
                                                                handleMultipleDomain(
                                                                    "",
                                                                    true,
                                                                    currentUSer,
                                                                    base_url
                                                                )
                                                            }
                                                            href="#"
                                                        >
                                                            {lang.get(
                                                                "navigation.for_reviewers"
                                                            )}
                                                        </Link>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Link
                                                            className="forcreators"
                                                            onClick={() =>
                                                                handleMultipleDomain(
                                                                    "home",
                                                                    true,
                                                                    currentUSer,
                                                                    "creators." +
                                                                        base_url
                                                                )
                                                            }
                                                            href="#"
                                                        >
                                                            {lang.get(
                                                                "navigation.for_onlyfans_creators"
                                                            )}
                                                        </Link>
                                                    </>
                                                )}
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                        <span className="navbar-toggler-icon test">
                            <img
                                style={{ width: "100%" }}
                                src={hamburgerIcon}
                            />
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="main_nav">
                        <div
                            className="search-nabar "
                            style={{ display: navSearch ? "block" : "none" }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <input
                                    type="text"
                                    id="searchnav"
                                    name="fname"
                                    placeholder={ReactHtmlParser(lang.get('navigation.search_placeholder'))}
                                    onKeyDown={handleKeyDown}
                                />
                                <a
                                    onClick={handleSearch}
                                    style={{
                                        color: "white",
                                        cursor: "pointer",
                                    }}
                                >
                                    <FaSearch />
                                </a>
                            </div>
                        </div>
                        <ul className={"navbar-nav asd "}>
                            <li className="nav-item active">
                                {" "}
                                <Link
                                    href="#"
                                    onClick={() =>
                                        handleMultipleDomain(
                                            homeUrl,
                                            false,
                                            currentUSer
                                        )
                                    }
                                    className={navLinkClass}
                                >
                                    {ReactHtmlParser(
                                        lang.get("navigation.home")
                                    )}
                                </Link>{" "}
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={navLinkClass}
                                    href="/categories"
                                >
                                    {" "}
                                    {ReactHtmlParser(
                                        lang.get("navigation.categories")
                                    )}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={navLinkClass} href="/about-us">
                                    {ReactHtmlParser(
                                        lang.get("navigation.about_us")
                                    )}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/blog" className={navLinkClass}>
                                    {ReactHtmlParser(
                                        lang.get("navigation.blog")
                                    )}
                                </Link>
                            </li>

                            {authUser && (
                                <Menu>
                                    <MenuButton
                                        mt={{ base: 8, md: 8, lg: 0 }}
                                        mr={7}
                                        display="block"
                                    >
                                        <Avatar
                                            size="sm"
                                            src={authUser.avatar}
                                            background="glacier.300"
                                        >
                                            <AvatarBadge
                                                boxSize="1em"
                                                bg="green.500"
                                            />
                                        </Avatar>
                                    </MenuButton>
                                    <MenuList color="black">
                                        {authUser.type === "creator" &&
                                            authUser.plan_name !== "basic" && (
                                                <MenuItem
                                                    as={InertiaLink}
                                                    href={route(
                                                        "creator_dashboard.index"
                                                    )}
                                                    fontWeight="medium"
                                                >
                                                    {lang.get(
                                                        "navigation.creator_dashboard"
                                                    )}
                                                </MenuItem>
                                            )}
                                        {authUser.type === "creator" && (
                                            <MenuItem
                                                as={InertiaLink}
                                                href={route("checkout.my_plan")}
                                                fontWeight="medium"
                                            >
                                                {lang.get("navigation.my_plan")}
                                            </MenuItem>
                                        )}
                                        <MenuItem
                                            as={InertiaLink}
                                            href={route("auth.settings")}
                                            fontWeight="medium"
                                        >
                                            {lang.get("navigation.settings")}
                                        </MenuItem>
                                        <MenuItem
                                            as={InertiaLink}
                                            href={"/logout"}
                                            fontWeight="medium"
                                        >
                                            {lang.get("navigation.logout")}
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            )}
                            {!authUser && (
                                //      <Popover placement='top-start'>
                                //      <PopoverTrigger>
                                //      <li  className="nav-item" >
                                //         <a className={navLinkClass}>  <Text> Sign in </Text> </a>
                                //     </li>
                                //      </PopoverTrigger>
                                //      <PopoverContent>
                                //        <PopoverHeader fontWeight='semibold'>Sign In as ?</PopoverHeader>
                                //        <PopoverArrow />
                                //        <PopoverCloseButton />
                                //        <PopoverBody>
                                //        <Link  href="#" onClick={() => window.open(route('auth.creator-sign-in'))}><Text> Creator </Text></Link>
                                //        <Link  href="#" onClick={() => window.open(route('auth.reviewer-sign-in'))}><Text> Reviewer </Text></Link>
                                //        </PopoverBody>
                                //      </PopoverContent>
                                //    </Popover>
                                <li className="nav-item">
                                    <Link
                                        href={route("auth.sign-in")}
                                        className={navLinkClass}
                                    >
                                        {ReactHtmlParser(
                                            lang.get("navigation.login")
                                        )}
                                    </Link>
                                </li>
                            )}
                        </ul>
                        {PageName === "/settings" &&
                        currentUSer == "reviewer" ? (
                            <div className={"contact_btn"}>
                                <Link href="#">
                                    <button
                                        onClick={() =>
                                            (location.href = "/categories")
                                        }
                                        className={creatorButtonClass}
                                    >
                                        {ReactHtmlParser(
                                            lang.get(
                                                "navigation.search_creators"
                                            )
                                        )}
                                    </button>
                                </Link>
                            </div>
                        ) : (
                            <div className={"contact_btn"}>
                                {currentUSer == "creator" ? (
                                    <>
                                        <Link href="#">
                                            <button
                                                onClick={() =>
                                                    handleMultipleDomain(
                                                        "",
                                                        true,
                                                        currentUSer,
                                                        base_url
                                                    )
                                                }
                                                className={creatorButtonClass}
                                            >
                                                {lang.get(
                                                    "navigation.for_reviewers"
                                                )}
                                            </button>
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link href="#">
                                            <button
                                                onClick={() =>
                                                    handleMultipleDomain(
                                                        "home",
                                                        true,
                                                        currentUSer,
                                                        "creators." + base_url
                                                    )
                                                }
                                                className={creatorButtonClass}
                                            >
                                                {lang.get(
                                                    "navigation.for_onlyfans_creators"
                                                )}
                                            </button>
                                        </Link>
                                    </>
                                )}
                            </div>
                        )}

                        {/* <div className="contact_btn">

                            {(location.hostname == 'creators.privy.reviews' || location.hostname == 'creators.privy.local') ?
                                <>
                                    <Link href="javascript:;" >
                                        <button onClick={() => handleNewtab('creator')} className={creatorButtonClass}>
                                            {lang.get('navigation.for_reviewers')}
                                        </button>
                                    </Link></>
                                :
                                <>
                                    <Link href="javascript:;" >
                                        <button onClick={() => handleNewtab('reviewer')} className={creatorButtonClass}>
                                            {lang.get('navigation.for_onlyfans_creators')}
                                        </button>
                                    </Link>
                                </>

                            }
                        </div> */}
                        <div className="social_fa">
                            <Link href="/">
                                <FaInstagram />
                            </Link>
                            <Link href="/">
                                <FaTwitter />
                            </Link>
                            <Link href="/">
                                <FaFacebook />
                            </Link>
                            <Link href="/">
                                <FaYoutube />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
