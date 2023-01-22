import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Text, Icon, Stack, Button, ButtonGroup } from '@chakra-ui/react';
import {
  FaFacebookF,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaFacebookSquare,
} from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useForm, Head, usePage, Link } from '@inertiajs/inertia-react';
import CanelaText from '@/components/UI/CanelaText';
import Layout from '@/shared/Layout';
import Navigation from '@/components/UI/Navigation';
import Footer from '@/components/UI/Footer';

import { toggleMobileMenu, selectGlobal } from '@/slices/globalSlice';
import useRoutes from '@/utils/useRoutes';
import useLang from '@/utils/useLang';
import { Helmet } from 'react-helmet';
import ReactHtmlParser from "react-html-parser";
import '../../css/main.css';

const Login = () => {
  const initialFocusRef = useRef();
  document.documentElement.scrollTop = 0;
  const dispatch = useDispatch();
  const { isMobileMenuOpen } = useSelector(selectGlobal);
  const route = useRoutes();
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const currentUSer = localStorage.getItem('current_domain');

  const { data, setData, post, errors } = useForm({
    email: '',
    password: '',
    userType: currentUSer == 'creator' ? 'creator' : 'reviewer',
    back: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    post('/login');
    //post(route("auth.login"));
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  useEffect(() => {
    if (!window) {
      return;
    }
    const urlParams = new URLSearchParams(window.location.search);
    const backUrl = urlParams.get('back');
    if (backUrl) {
      setData('back', backUrl);
    }
  }, []);

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(FaEyeSlash);

  const handleToggle = () => {
    if (type === 'password') {
      // setIcon(eye);
      setType('text');
    } else {
      // setIcon(eyeOff);
      setType('password');
    }
  };
  //password eye on of end here
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const base_url = localStorage.getItem('base_url');

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

  return (
    <>
      <Helmet>
        <title>{lang.get('login.meta_title')}</title>
      </Helmet>
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
        navtype={2}
      />

      <div className="Cover">
        <div className="container-fluid">
          <div className="row">
            <div className="side_oneSignin col-lg-6 col-sm-12">
              {currentUSer == 'creator' ? (
                <>
                  <h1>
                  {lang.get('register.signin_msg')}
                    
                  </h1>
                </>
              ) : (
                <>
                  <h1>
                  {ReactHtmlParser(lang.get('register.sign_msg'))}
                    
                  </h1>
                </>
              )}
            </div>
            <div className="side_two col-lg-6 col-sm-12">
              <div className="oneHeading">
                <h1>{lang.get('register.signin')}</h1>
              </div>
              <div className="row bmainButtons">
                <a
                  href={route('auth.google.redirect', currentUSer)}
                  className="first col-lg-6 col-sm-12 button-hover-effect"
                >
                  <FaGoogle />
                  {lang.get('register.continue_with_google')}
                </a>
                <a
                  href={route('auth.facebook.redirect', currentUSer)}
                  className="second23 col-lg-6 col-sm-12 button-hover-effect"
                >
                  <FaFacebookSquare />
                  {lang.get('register.continue_with_facebook')}
                </a>
              </div>
              <h5>{lang.get('register.sign_others')}</h5>

              <div className="row submit_area">
                <div className="col-lg-6 col-sm-12">
                  <label htmlFor="email">{lang.get('register.your_email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Tonynueguon@example.com"
                    onChange={(event) => setData('email', event.target.value)}
                  />
                  <span className="text-danger">{errors.email}</span>
                </div>
                <div
                  className="col-lg-6 col-sm-12"
                  style={{ position: 'relative' }}
                >
                  <label htmlFor="pwd">{lang.get('register.password')}</label>
                  <br/>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="pwd"
                    name="pwd"
                    minLength="8"
                    onChange={(event) =>
                      setData('password', event.target.value)
                    }
                    onKeyPress={handleKeyDown}
                  />
                  <span className="text-danger">{errors.password}</span>
                  <button className="field__view">
                    <div className="icon icon-eye" onClick={handleShowPassword}>
                      {showPassword ? (
                        <Icon as={FaEyeSlash} color="gray.400" />
                      ) : (
                        <Icon as={FaEye} color="gray.400" />
                      )}
                    </div>
                  </button>
                </div>
              </div>

              <div className="checkOne">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                ></input>
                <label htmlFor="vehicle1">{lang.get('register.remember')}</label>
                <Link style={{ fontSize: '13px' }} href="/forgot-password">
                {lang.get('register.forgot_password')}
                </Link>
              </div>
              {errors.sign_url && (
                <div className="wrong_user error">
                  <p>{lang.get('register.wrong_attemp')} </p>&nbsp;
                  <Link
                    onClick={() => window.open(errors.sign_url)}
                    href="#"
                    className="wrong_ss"
                  >
                    {lang.get('register.signin_here')}
                  </Link>
                </div>
              )}

              <div className="Sign_btn">
                <button className="button-hover-effect" onClick={handleSubmit}>
                  <a style={{ color: 'white' }}>{lang.get('register.signin')}</a>
                </button>
              </div>
              <Stack direction="column" spacing={6} className="mt-5">
                {currentUSer == 'creator' ? (
                  <>
                    <Box textAlign="center">
                      <Text
                        color="chantilly.500"
                        fontSize={{
                          base: 'lg',
                          md: 'xl',
                          xl: '2xl',
                        }}
                        fontWeight="medium"
                        style={{ textAlign: 'left' }}
                      >
                        {lang.get('register.creator_title')}
                        
                      </Text>
                      <Text
                        fontSize={{ base: 'sm', md: 'md' }}
                        style={{ textAlign: 'left' }}
                      >
                        {lang.get('register.signup_reviews')}
                      </Text>
                    </Box>
                  </>
                ) : (
                  <>
                    <Box textAlign="center">
                      <Text
                        color="chantilly.500"
                        fontSize={{
                          base: 'lg',
                          md: 'xl',
                          xl: '2xl',
                        }}
                        fontWeight="medium"
                        style={{ textAlign: 'left' }}
                      >
                        {' '}{lang.get('register.no_account')}
                        
                      </Text>
                      <Text
                        fontSize={{ base: 'sm', md: 'md' }}
                        style={{ textAlign: 'left' }}
                      >
                        {lang.get('register.register_msg')}
                        
                      </Text>
                    </Box>
                  </>
                )}

                <Stack
                  direction={{
                    base: 'column',
                    md: 'row',
                  }}
                  spacing={2}
                  justify="center"
                  align="center"
                >
                  <div className="Sign_btn mt-2">
                    <button
                      className="button-hover-effect"
                      onClick={() => (location.href = '/register')}
                    >
                      <a style={{ color: 'white' }}>{lang.get('register.signup')}</a>
                    </button>

                    {/* <Popover
                                        initialFocusRef={initialFocusRef}
                                        placement='bottom'
                                        closeOnBlur={true}
                                      >
                                       
                                        <PopoverTrigger> 
                                          <Button  className="mt-2" style={{ cursor: "pointer" }}>Sign Up</Button>
                                        </PopoverTrigger>
                                        <PopoverContent color='white' >
                                          <PopoverHeader pt={4} fontWeight='bold' border='0'>
                                            What You want to be ?
                                          </PopoverHeader>
                                          <PopoverArrow />
                                          <PopoverCloseButton />

                                          
                                          <PopoverBody>
                                             
                                         
                                           <Button onClick={() => handleMultipleDomain('register',(currentUSer == 'creator') ? false : true ,currentUSer,'creators.'+base_url+'/register') } colorScheme='green' className="ml-2">Creator</Button>
                                           <Button onClick={() => handleMultipleDomain('register',(currentUSer == 'reviewer') ? false : true,currentUSer,base_url+'/register') } colorScheme='blue' className="mr-2" > Reviewer</Button>
                                          </PopoverBody>
                                           
                                        </PopoverContent>
                                      </Popover>  */}
                  </div>
                </Stack>
              </Stack>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

Login.layout = (page) => <Layout children={page} />;

export default Login;
