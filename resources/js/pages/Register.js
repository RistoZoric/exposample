import React, { useState,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
    Text, 
    Icon,
    Stack, 
    Link, 
    Box ,
    Button
} from "@chakra-ui/react";
import { FaFacebookF, FaEye, FaEyeSlash, FaGoogle, FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { InertiaLink, useForm, Head, usePage } from "@inertiajs/inertia-react";
import CanelaText from "@/components/UI/CanelaText";
import Layout from "@/shared/Layout";

import Navigation from "@/components/UI/Navigation";
import Footer from "@/components/UI/Footer";

import { toggleMobileMenu, selectGlobal } from "@/slices/globalSlice";
import useRoutes from "@/utils/useRoutes";
import useURL from "@/utils/useURL";

import useLang from "@/utils/useLang";
import { Helmet } from "react-helmet";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
  } from '@chakra-ui/react'
import "../../css/main.css"; 
const Register = () => {
    document.documentElement.scrollTop = 0;
    const initialFocusRef = useRef()
    const dispatch = useDispatch();
    const { isMobileMenuOpen } = useSelector(selectGlobal);
    const route = useRoutes();
    const URL = useURL();
    const { locale } = usePage().props;
   const lang = useLang(locale);
  lang.setFallback("en");
    const [showPassword, setShowPassword] = useState(false);
    const [checked, setChecked] = useState('off');
    const handleShowPassword = () => setShowPassword(!showPassword);
    const currentUSer = localStorage.getItem("current_domain");
    const { data, setData, post, errors } = useForm({
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
        accept_tos:"",
        type: (currentUSer === 'creator') ?  "creator" : 'reviewer',
    });
 
    const currentDomain = location.hostname;
   
    const app_env = localStorage.getItem("app_env"); 
    const base_url = localStorage.getItem("base_url"); 

    const handleMultipleDomain = (url,jump=false,currentUSer,jump_url='') => {

        const app_env = localStorage.getItem("app_env");
        if(app_env === 'local'){
            var http = 'http://'; 
        }else{
            var http = 'https://'; 
        }
 
        if(currentUSer == 'creator' && jump === false ){
            window.location.href =location.origin+'/'+url ;
        }
        if(currentUSer == 'reviewer' && jump === false ){
            window.location.href = location.origin+'/'+url ;    
        }        
        
        if(jump_url != '' && jump == true ){
            if(url){
                window.open( http+jump_url+'/'+url,"_blank" );
            }else{
                window.open(http+jump_url,"_blank");
            }
                
        }
    }
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(FaEyeSlash);

    const handleAcceptTos = (event) =>{
         if(event.target.value == 'off'){
            setChecked('on');
            setData('accept_tos','on');
         }else{
            setData('accept_tos','off');
            setChecked('off');
         } 
    }

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(FaEye);
            setType('text');
        }
        else {
            setIcon(FaEyeSlash);
            setType('password');
        }
    }

    async function handleSubmit(event) {
        event.preventDefault(); 
        await post('/register');
        //await setTimeout(() => setData("type", type), 1000);
        // console.log("ddd",route("creator.register"))
        // await post(route("auth.register"));
    }

    return (
        <>
            <Helmet>
                <title>{lang.get("register.meta_title")}</title>
            </Helmet>
            {/*<Head>
        <title>{lang.get('register.')}meta_title')}</title>
      </Head>*/}
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
                        <div className="side_oneSignup col-lg-6 col-sm-12">
                        {(currentUSer == 'creator') ?
                        <>
                     
                       
                          <h1>{lang.get('register.sign_msg')}
                          
                            </h1>
                        </> :
                         <>
                         <h1>
                         {lang.get('register.sign_creator')}
                        
                           </h1>
                       </>
                              
                       }
                        
     
      
                        </div>
                        <div className="side_two col-lg-6 col-sm-12">
                            <div className="oneHeading">
                                <h1>{lang.get('register.subtitle')} </h1>
                            </div>
                            <div className="row bmainButtons">
                                <Link
                                     href={route('auth.google.redirect',currentUSer)} 
                                    className="first col-lg-6 col-sm-12 button-hover-effect"
                                >
                                    <FaGoogle />
                                    {lang.get('register.sign_google')} 
                                </Link>
                                <Link
                                    href={route("auth.facebook.redirect",currentUSer )} 
                                    className="second col-lg-6 col-sm-12 button-hover-effect"
                                >
                                    <FaFacebookSquare />
                                    {lang.get('register.sign_fb')} 
                                </Link>
                            </div>
                            <h5>{lang.get('register.sign_others')} </h5>
                            {/* for name an */}
                            <div
                                className="row submit_area"
                                style={{ paddingBottom: "20px" }}
                            >
                                <div className="col-lg-6 col-sm-12">
                                    <label htmlFor="username">{lang.get('register.username')} </label>
                                    <input
                                        type="text"
                                        id="email"
                                        name="username"
                                        placeholder="Tonenguyen"
                                          onChange={(event) =>
                                            setData(
                                                "username",
                                                event.target.value
                                            )
                                        }
                                    />
                                    <div className="text-danger">{errors.username}</div>
                                </div>
                                <div className="col-lg-6 col-sm-12">
                                    <label htmlFor="password">{lang.get('register.email')} </label>
                                    <br/>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="moontheme"
                                        onChange={(event) =>
                                            setData(
                                                "email",
                                                event.target.value
                                            )
                                        }
                                    />
                                    <div className="text-danger">{errors.email}</div>
                                </div>
                            </div>
                            {/* name boxes end */}
                            <div className="row submit_area">
                                <div className="col-lg-6 col-sm-12">
                                    <label htmlFor="email">{lang.get('register.password')} </label>
                                    <input
                                        id="email"
                                        name="password"
                                        placeholder="7 + Characters"
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        onChange={(event) =>
                                          setData(
                                              "password",
                                              event.target.value
                                          )
                                      }
                                    />
                                    <button className="field__view">
                                        <div
                                            className="icon icon-eye"
                                            onClick={handleShowPassword}
                                        >
                                            {/* {showPassword ? (
                                                <Icon
                                                    as={FaEyeSlash}
                                                    color="gray.400"
                                                />
                                            ) : (
                                                <Icon
                                                    as={FaEye}
                                                    color="gray.400"
                                                />
                                            )} */}
                                        </div>
                                    </button>
                                    <div className="text-danger">{errors.password}</div>
                                    
                                </div>
                                <div
                                    className="col-lg-6 col-sm-12"
                                    style={{ position: "relative" }}
                                >
                                    <label htmlFor="password">{lang.get('register.confirm_password')} </label>
                                    <br/>
                                    <input
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        id="pwd"
                                        name="pwd"
                                        minLength="8"
                                        placeholder="7 + Characters"
                                        onChange={(event) =>
                                          setData(
                                              "password_confirmation",
                                              event.target.value
                                          )
                                      }
                                    />
                                    <button className="field__view">
                                        <div
                                            className="icon icon-eye"
                                            onClick={handleShowPassword}
                                        >
                                            {showPassword ? (
                                                <Icon
                                                    as={FaEyeSlash}
                                                    color="gray.400"
                                                />
                                            ) : (
                                                <Icon
                                                    as={FaEye}
                                                    color="gray.400"
                                                />
                                            )}
                                        </div>
                                    </button>
                                    <div className="text-danger">{errors.password}</div>

                                </div>
                                {/* <input 
                                        id="accept_tosHid"
                                        name="accept_tos" 
                                        type="hidden"
                                        value={(checked) ? setData("accept_tos", '1') : '0' }
                                        /> */}
                                        
                                <div className="checkOne dds">
                                      
                                    <input type="checkbox" id="accept_tos"   
                                         onChange={(event) => handleAcceptTos(event)
                                            
                                            //setData("accept_tos",(event.target.value =='on') ? 'on' :'off')
                                          } value={checked}></input>

                                    <label htmlFor="accept_tos">
                                    {lang.get('register.accepted')}
                                        <Link target={'_blank'} href="/terms-and-conditions"><strong>{lang.get('register.terms_and_conditions')} </strong></Link>
                                    </label>
                                </div>
                                <div className="text-danger">{errors.accept_tos}</div>
                             
                            </div>
                            <div className="Sign_btn">
                              <button className="button-hover-effect" onClick={(event) =>
                                            handleSubmit(event)
                                        }>
                                <a style={{color: "white"}}>{lang.get('register.submit')}</a>
                              </button>
                            </div>

                            
                            <Stack direction="column" spacing={6} className="mt-5">
                                    <Box textAlign="center">
                                        {
                                        (location.hostname == 'creators.privy.reviews' || location.hostname == 'creators.privy.local' ) ? 
                                        <>
                                        <Text
                                            color="chantilly.500"
                                            fontSize={{
                                                base: "lg",
                                                md: "xl",
                                                xl: "2xl",
                                            }}
                                            fontWeight="medium"
                                            style={{textAlign:'left'}}
                                        >
                                            {lang.get("register.reviewer_title")}
                                        </Text>
                                        <Text fontSize={{ base: "sm", md: "md" }} style={{textAlign:'left'}}>
                                                 {lang.get(  "register.reviewer_subtitle" )}
                                        </Text> </>
                                    :
                                    <>   <Text
                                        color="chantilly.500"
                                        fontSize={{
                                            base: "lg",
                                            md: "xl",
                                            xl: "2xl",
                                        }}
                                        fontWeight="medium"
                                        style={{textAlign:'left'}}
                                    >   {lang.get("register.creator_title")}
                                        
                                    </Text>
                                        <Text fontSize={{ base: "sm", md: "md" }} style={{textAlign:'left'}}>
                                            {lang.get(  "register.creator_subtitle" )}
                                               
                                        </Text></>
                                    }
                                    </Box>

                                    <Stack
                                     direction={{
                                         base: "column",
                                         md: "row",
                                     }}
                                     spacing={2}
                                     justify="center"
                                     align="center"
                                 >
                                      <div className="Sign_btn">
                                        {
                                            (currentUSer == 'creator' ) ? 
                                                <>
                                                <button className="button-hover-effect" onClick={() => handleMultipleDomain((currentUSer == 'creator') ? 'register' : '',(currentUSer == 'reviewer') ? false : true,currentUSer,base_url) } >
                                                    <a style={{ color: "white" }}>{lang.get(  "register.signup" )}</a>
                                                </button>
                                                </>
                                                :
                                                <>
                                                <button className="button-hover-effect" onClick={() => handleMultipleDomain((currentUSer == 'reviewer') ? 'register' : '' ,(currentUSer == 'creator') ? false : true,currentUSer,'creators.'+base_url) } >
                                                    <a style={{ color: "white" }}>{lang.get('register.signup')} </a>
                                                </button>
                                                </>
                                            
                                            }
                                     </div>
                                 </Stack>

                                    {/* <div className="Sign_btn mt-2 register-page"> */}
                                        
                                    
                                        {/* <Popover
                                         // initialFocusRef={initialFocusRef}
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
                                              
                                           <Button onClick={() => handleMultipleDomain((currentUSer == 'creator') ? 'register' : '' ,(currentUSer == 'creator') ? false : true,currentUSer,'creators.'+base_url+'/register') } colorScheme='green' className="ml-2">Creator</Button>
                                           <Button onClick={() => handleMultipleDomain((currentUSer == 'reviewer') ? 'register' : '',(currentUSer == 'reviewer') ? false : true,currentUSer,base_url+'/register') } colorScheme='blue' className="mr-2" > Reviewer</Button>
                                          </PopoverBody>
                                             
                                          </PopoverContent>
                                        </Popover>  */}
                                      {/* </div> */}
                                    {/* {
                                        (location.hostname == 'creators.privy.reviews' || location.hostname == 'creators.privy.local' ) ? 
                                        <>
                                    <Stack
                                        direction={{
                                            base: "column",
                                            md: "row",
                                        }}
                                        spacing={2}
                                        justify="center"
                                        align="center"
                                    >
                                         <div className="Sign_btn">
                                            <button className="button-hover-effect" onClick={(event) =>
                                               handleNewtab("creator")
                                            }>
                                              <a style={{color: "white"}}>Sign Up</a>
                                            </button>
                                        </div>
                                    </Stack>
                                    </> :
                                    <>
                                     <Stack
                                     direction={{
                                         base: "column",
                                         md: "row",
                                     }}
                                     spacing={2}
                                     justify="center"
                                     align="center"
                                 >
                                      <div className="Sign_btn">
                                         <button className="button-hover-effect" onClick={(event) =>
                                             handleNewtab("reviewer")
                                         }>
                                           <a style={{color: "white"}}>Sign Up</a>
                                         </button>
                                     </div>
                                 </Stack>
                                 </>
                                 } */}
                                </Stack>
                        </div>
                    </div>
                </div>
            </div>

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
                            width={{ base: "full", lg: "70%" }}
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
                                        fontSize={{ base: "3xl", lg: "4xl" }}
                                        as="h1"
                                    >
                                        {lang.get("register.title")}
                                    </CanelaText>
                                    <Text fontSize={{ base: "sm", lg: "lg" }}>
                                        {lang.get("register.subtitle")}
                                    </Text>
                                </Box>
                                <Stack direction="column" spacing={3}>
                                    <FormControl
                                        id="username"
                                        isInvalid={errors.username}
                                        isRequired
                                    >
                                        <Input
                                            type="text"
                                            variant="flushed"
                                            pl="1rem"
                                            pr="1rem"
                                            placeholder={lang.get(
                                                "register.username"
                                            )}
                                            focusBorderColor="chantilly.500"
                                            errorBorderColor="chantilly.700"
                                            fontSize={{ base: "sm", md: "md" }}
                                            value={data.username}
                                            onChange={(event) =>
                                                setData(
                                                    "username",
                                                    event.target.value
                                                )
                                            }
                                        />
                                        <FormErrorMessage color="chantilly.700">
                                            {errors.username}
                                        </FormErrorMessage>
                                    </FormControl>
                                    <FormControl
                                        id="email"
                                        isInvalid={errors.email}
                                        isRequired
                                    >
                                        <Input
                                            type="email"
                                            variant="flushed"
                                            pl="1rem"
                                            pr="1rem"
                                            placeholder={lang.get(
                                                "register.email"
                                            )}
                                            focusBorderColor="chantilly.500"
                                            errorBorderColor="chantilly.700"
                                            fontSize={{ base: "sm", md: "md" }}
                                            value={data.email}
                                            onChange={(event) =>
                                                setData(
                                                    "email",
                                                    event.target.value
                                                )
                                            }
                                        />
                                        <FormErrorMessage color="chantilly.700">
                                            {errors.email}
                                        </FormErrorMessage>
                                    </FormControl>
                                    <FormControl
                                        id="password"
                                        isInvalid={errors.password}
                                        isRequired
                                    >
                                        <InputGroup>
                                            <Input
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                variant="flushed"
                                                pl="1rem"
                                                pr="4.5rem"
                                                placeholder={lang.get(
                                                    "register.password"
                                                )}
                                                focusBorderColor="chantilly.500"
                                                errorBorderColor="chantilly.700"
                                                fontSize={{
                                                    base: "sm",
                                                    md: "md",
                                                }}
                                                value={data.password}
                                                onChange={(event) =>
                                                    setData(
                                                        "password",
                                                        event.target.value
                                                    )
                                                }
                                            />
                                            <InputRightElement width="3rem">
                                                <Button
                                                    h="1.5rem"
                                                    size="sm"
                                                    onClick={handleShowPassword}
                                                >
                                                    {showPassword ? (
                                                        <Icon
                                                            as={FaEyeSlash}
                                                            color="gray.400"
                                                        />
                                                    ) : (
                                                        <Icon
                                                            as={FaEye}
                                                            color="gray.400"
                                                        />
                                                    )}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
                                        <FormErrorMessage color="chantilly.700">
                                            {errors.password}
                                        </FormErrorMessage>
                                    </FormControl>
                                    <FormControl
                                        id="password_confirmation"
                                        isInvalid={errors.password}
                                        isRequired
                                    >
                                        <Input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            variant="flushed"
                                            pl="1rem"
                                            pr="1rem"
                                            placeholder={lang.get(
                                                "register.confirm_password"
                                            )}
                                            focusBorderColor="chantilly.500"
                                            errorBorderColor="chantilly.700"
                                            fontSize={{ base: "sm", md: "md" }}
                                            value={data.password_confirmation}
                                            onChange={(event) =>
                                                setData(
                                                    "password_confirmation",
                                                    event.target.value
                                                )
                                            }
                                        />
                                        <FormErrorMessage color="chantilly.700">
                                            {errors.password}
                                        </FormErrorMessage>
                                    </FormControl>
                                    <HStack spacing={1} py={2}>
                                        <Text fontSize="sm">
                                            {lang.get(
                                                "register.terms_and_conditions_message"
                                            )}
                                        </Text>
                                        <Link
                                            as={InertiaLink}
                                            href={route(
                                                "pages.terms_and_conditions"
                                            )}
                                            fontSize="sm"
                                            fontWeight="medium"
                                        >
                                            {lang.get(
                                                "register.terms_and_conditions"
                                            )}
                                        </Link>
                                    </HStack>
                                </Stack>
                                <Stack
                                    direction={{ base: "column", md: "row" }}
                                    spacing={2}
                                    justify="center"
                                    align="center"
                                >
                                    <Button
                                        as={Link}
                                        href={route("auth.facebook.redirect")}
                                        width={{ base: "full", md: "50%" }}
                                        variant="outline"
                                        size="sm"
                                        leftIcon={
                                            <Icon
                                                as={FaFacebookF}
                                                color="facebook"
                                                height={5}
                                                width={5}
                                            />
                                        }
                                        borderRadius="20px"
                                        fontWeight="normal"
                                        py={6}
                                        _hover={{ textDecoration: "none" }}
                                    >
                                        {lang.get(
                                            "register.continue_with_facebook"
                                        )}
                                    </Button>
                                    <Button
                                        as={Link}
                                        href={route("auth.google.redirect")}
                                        width={{ base: "full", md: "50%" }}
                                        variant="outline"
                                        size="sm"
                                        leftIcon={
                                            <Icon
                                                as={FcGoogle}
                                                height={5}
                                                width={5}
                                            />
                                        }
                                        borderRadius="20px"
                                        fontWeight="normal"
                                        py={6}
                                        _hover={{ textDecoration: "none" }}
                                    >
                                        {lang.get(
                                            "register.continue_with_google"
                                        )}
                                    </Button>
                                </Stack>
                                <Stack
                                    direction={{ base: "column", md: "row" }}
                                    spacing={2}
                                    justify="center"
                                    align="center"
                                >
                                    <Button
                                        width={{ base: "full", md: "50%" }}
                                        variant="solid"
                                        size="sm"
                                        colorScheme="chantilly"
                                        color="white"
                                        borderRadius="20px"
                                        py={6}
                                        onClick={(event) =>
                                            handleSubmit(event, "reviewer")
                                        }
                                    >
                                        {lang.get("register.register")}
                                    </Button>
                                    <Button
                                        as={InertiaLink}
                                        href={route("auth.login")}
                                        width={{ base: "full", md: "50%" }}
                                        variant="outline"
                                        size="sm"
                                        background="white"
                                        color="chantilly.500"
                                        borderColor="chantilly.500"
                                        borderWidth="2px"
                                        borderRadius="20px"
                                        py={6}
                                    >
                                        {lang.get("register.login")}
                                    </Button>
                                </Stack>
                                <Stack direction="column" spacing={6}>
                                    <Box textAlign="center">
                                        <Text
                                            color="chantilly.500"
                                            fontSize={{
                                                base: "lg",
                                                md: "xl",
                                                xl: "2xl",
                                            }}
                                            fontWeight="medium"
                                        >
                                            {lang.get("register.creator_title")}
                                        </Text>
                                        <Text
                                            fontSize={{ base: "sm", md: "md" }}
                                        >
                                            {lang.get(
                                                "register.creator_subtitle"
                                            )}
                                        </Text>
                                    </Box>
                                    <Stack
                                        direction={{
                                            base: "column",
                                            md: "row",
                                        }}
                                        spacing={2}
                                        justify="center"
                                        align="center"
                                    >
                                        <Button
                                            variant="solid"
                                            width={{ base: "full", md: "50%" }}
                                            size="sm"
                                            colorScheme="chantilly"
                                            color="white"
                                            borderRadius="20px"
                                            py={6}
                                            onClick={(event) =>
                                                handleSubmit(event, "creator")
                                            }
                                        >
                                            {lang.get("register.register")}
                                        </Button>
                                        <Button
                                            as={InertiaLink}
                                            href={route("auth.login")}
                                            variant="outline"
                                            width={{ base: "full", md: "50%" }}
                                            size="sm"
                                            background="white"
                                            color="chantilly.500"
                                            borderColor="chantilly.500"
                                            borderWidth="2px"
                                            borderRadius="20px"
                                            py={6}
                                        >
                                            {lang.get("register.login")}
                                        </Button>
                                    </Stack>
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

Register.layout = (page) => <Layout children={page} />;

export default Register;
