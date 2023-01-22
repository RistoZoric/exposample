import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Container,
    VStack,
    Box,
    Center,
    Text,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    Icon,
    Stack,
    FormControl,
    FormErrorMessage,
} from "@chakra-ui/react";
import { FaFacebookF, FaEye, FaEyeSlash, FaGoogle, FaFacebookSquare, FaAngleLeft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import {
    InertiaLink,
    useForm,
    Head,
    usePage,
    Link,
} from "@inertiajs/inertia-react";
import CanelaText from "@/components/UI/CanelaText";
import Layout from "@/shared/Layout";
import Navigation from "@/components/UI/Navigation";
import Footer from "@/components/UI/Footer";

import { toggleMobileMenu, selectGlobal } from "@/slices/globalSlice";
import useRoutes from "@/utils/useRoutes";
import useLang from "@/utils/useLang";
import { Helmet } from "react-helmet";
import "../../css/main.css";
import '../../css/app_dev.css';
const ResetPassword = ({token, user}) => {
  console.log(token, user);
    const dispatch = useDispatch();
    const { isMobileMenuOpen } = useSelector(selectGlobal);
    const route = useRoutes();
    const { locale } = usePage().props;
    const lang = useLang(locale);
  lang.setFallback("en");
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);
    
    const { data, setData, post, errors } = useForm({
        email: user.email,
        token: token,
        password: "",
        confirmPassword: "",
    });

    function handleSubmit(event) {
        event.preventDefault();
        post(route("auth.updatepassword"));
    }

    useEffect(() => {
        if (!window) {
            return;
        }
        const urlParams = new URLSearchParams(window.location.search);
        const backUrl = urlParams.get("back");
        if (backUrl) {
            setData("back", backUrl);
        }
    }, []);

    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(FaEyeSlash);

    const handleToggle = () => {
        if (type === "password") {
            // setIcon(eye);
            setType("text");
        } else {
            // setIcon(eyeOff);
            setType("password");
        }
    };
    //password eye on of end here
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Forgot Password</title>
            </Helmet>
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
                navtype={2}
            />

            <div className="Cover">
                <div className="container-fluid">
                    <div className="row">
                        <div className="forget col-lg-6 col-sm-12">
                            <h1>
                                Forgot <br />
                                password? <br />
                                Enter your
                                <br />
                                e-mail.
                            </h1>
                        </div>
                        <div className="forget_two col-lg-6 col-sm-12">
                            <div className="oneHeading">
                                <h1>Reset Password?</h1>
                                <p>
                                    Please enter your new password.
                                </p>
                            </div>
                            <div className="row">
                              <div className="col-md-6 col-sm-12">
                                <div className="inputHeading mt-2">
                                    <h3>Confirm Password</h3>
                                </div>
                                <div className="submit_area mt-2">
                                    <input
                                        type="password"
                                        id="password2"
                                        name="password"
                                        placeholder="Tonynguyen@example.com"
                                        onChange={(event) => setData('password', event.target.value)}
                                    />
                                    <div className="text-danger" style={{fontSize: '14px'}}>{errors.password}</div>
                                    <div className="text-success" style={{fontSize: '14px'}}>{errors.success}</div>
                                </div>

                              </div>
                              <div className="col-md-6 col-sm-12">
                                <div className="inputHeading mt-2">
                                    <h3>Password</h3>
                                </div>
                                <div className="submit_area mt-2">
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder="Tonynguyen@example.com"
                                        onChange={(event) => setData('confirmPassword', event.target.value)}
                                    />
                                    <div className="text-danger" style={{fontSize: '14px'}}>{errors.confirmPassword}</div>
                                    <div className="text-success" style={{fontSize: '14px'}}>{errors.success}</div>
                                </div>

                              </div>

                            </div>
                            <div className="Sign_btn">
                              <button onClick={handleSubmit} className="button-hover-effect">
                                  <a style={{color:"white"}}>Update Password</a>
                                </button>
                            </div>
                            <div className="back-sign">
                                <Link href="/sign-in">
                                    <FaAngleLeft />
                                    Back to sign in
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<Head>
        <title>{lang.get('login.meta_title')}</title>
      </Head>
            {/* <VStack
        spacing={0}
        background="linear-gradient(#ffb8aa 50%, transparent 50%) no-repeat"
        backgroundSize="fill"
      >
        <Container
          maxWidth="8xl"
          px={{ base: 6, md: 12, xl: 24 }}
          py={{ base: 6, md: 12 }}
        >
          <Center width="full">
            <Box
              width={{ base: 'full', lg: '70%' }}
              background="white"
              borderRadius="60px"
              px={{ base: 12, lg: 36 }}
              pt={12}
              pb={24}
              boxShadow="sm"
            >
              <Stack direction="column" spacing={6}>
                <Box textAlign="center">
                  <CanelaText
                    color="chantilly.500"
                    fontSize={{ base: '3xl', lg: '4xl' }}
                    as="h1"
                  >
                    {lang.get('login.title')}
                  </CanelaText>
                  <Text fontSize={{ base: 'sm', lg: 'lg' }}>
                    {lang.get('login.subtitle')}
                  </Text>
                </Box>
                <Stack direction="column" spacing={3}>
                  <FormControl id="first-email" isInvalid={errors.email} isRequired>
                    <Input
                      type="email"
                      variant="flushed"
                      pl="1rem"
                      pr="1rem"
                      placeholder={lang.get('login.email')}
                      focusBorderColor="chantilly.500"
                      errorBorderColor="chantilly.700"
                      fontSize={{ base: 'sm', md: 'md' }}
                      value={data.email}
                      onChange={(event) => setData('email', event.target.value)}
                    />
                    <FormErrorMessage color="chantilly.700">{errors.email}</FormErrorMessage>
                  </FormControl>
                  <FormControl id="password" isInvalid={errors.password} isRequired>
                    <InputGroup>
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        variant="flushed"
                        pl="1rem"
                        px="4.5rem"
                        placeholder={lang.get('login.password')}
                        focusBorderColor="chantilly.500"
                        errorBorderColor="chantilly.700"
                        fontSize={{ base: 'sm', md: 'md' }}
                        onChange={(event) => setData('password', event.target.value)}
                      />
                      <InputRightElement width="3rem">
                        <Button h="1.5rem" size="sm" onClick={handleShowPassword}>
                          {showPassword ? <Icon as={FaEyeSlash} color="gray.400" /> : <Icon as={FaEye} color="gray.400" />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage color="chantilly.700">{errors.password}</FormErrorMessage>
                  </FormControl>
                </Stack>
                <Stack
                  direction={{ base: 'column', md: 'row' }}
                  spacing={2}
                  justify="center"
                  align="center"
                >
                  <Button
                    as={Link}
                    href={route('auth.facebook.redirect')}
                    width={{ base: 'full', md: '50%' }}
                    variant="outline"
                    size="sm"
                    leftIcon={<Icon as={FaFacebookF} color="facebook" height={5} width={5} />}
                    borderRadius="20px"
                    fontWeight="normal"
                    py={6}
                    _hover={{ textDecoration: 'none' }}
                  >
                    {lang.get('login.continue_with_facebook')}
                  </Button>
                  <Button
                    as={Link}
                    href={route('auth.google.redirect')}
                    width={{ base: 'full', md: '50%' }}
                    variant="outline"
                    size="sm"
                    leftIcon={<Icon as={FcGoogle} height={5} width={5} />}
                    borderRadius="20px"
                    fontWeight="normal"
                    py={6}
                    _hover={{ textDecoration: 'none' }}
                  >
                    {lang.get('login.continue_with_google')}
                  </Button>
                </Stack>
                <Stack
                  direction={{ base: 'column', md: 'row' }}
                  spacing={2}
                  justify="center"
                  align="center"
                >
                  <Button
                    width={{ base: 'full', md: '50%' }}
                    variant="solid"
                    size="sm"
                    colorScheme="chantilly"
                    color="white"
                    borderColor="chantilly.500"
                    borderRadius="20px"
                    py={6}
                    onClick={handleSubmit}
                  >
                    {lang.get('login.login')}
                  </Button>
                  <Button
                    as={InertiaLink}
                    href={route('auth.register')}
                    width={{ base: 'full', md: '50%' }}
                    variant="outline"
                    size="sm"
                    background="white"
                    color="chantilly.500"
                    borderColor="chantilly.500"
                    borderWidth="2px"
                    borderRadius="20px"
                    py={6}
                  >
                    {lang.get('login.register')}
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Center>
        </Container>
      </VStack> */}
            <Footer />
        </>
    );
};

ResetPassword.layout = (page) => <Layout children={page} />;

export default ResetPassword;
