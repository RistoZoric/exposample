import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Container,
  Text,
  Image,
  HStack,
  VStack,
  Stack,
  Avatar,
  Icon, Link,
} from '@chakra-ui/react';

import { Head, usePage } from '@inertiajs/inertia-react';
import {
  FaFacebook, FaTwitter,
} from 'react-icons/fa';
import Layout from '@/shared/Layout';

import Navigation from '@/components/UI/Navigation';
import Footer from '@/components/UI/Footer';

import { toggleMobileMenu, selectGlobal } from '@/slices/globalSlice';
import useRoutes from '@/utils/useRoutes';
import useLang from '@/utils/useLang';
import {Helmet} from 'react-helmet';
import '../../Assets/Blog.css'
import circle from '../../img/circle.png'
import '../../css/app_dev.css'
const BlogPost = ({ post }) => {
  const dispatch = useDispatch();
  const { isMobileMenuOpen } = useSelector(selectGlobal);
  const route = useRoutes();
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");
  const bodyStartingLetter = String(post.body).charAt(0);
  const bodyWithoutStartingLetter = String(post.body).substring(1);
  var blog_image = {};
  if(post.image){
    blog_image = {
      // backgroundImage: reviewBg,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  }
  return (
      <>
          <Head>
              <title>{post.meta_title}</title>
              <meta name="description" content={post.meta_description} />
              <meta name="keywords" content={post.meta_keywords} />
              <meta name="author" content={post.author_name} />
              <meta property="og:url" content={route("blog.view", post.slug)} />
              <meta property="og:type" content="article" />
              <meta property="og:title" content={post.meta_title} />
              <meta property="og:description" content={post.body} />
              <meta
                  property="og:image"
                  content={`https://storage.googleapis.com/storage.privy.reviews/${post.image}`}
              />
          </Head>
          <VStack
              spacing={0}
            >
            <Navigation
              isMobileMenuOpen={isMobileMenuOpen}
              onToggle={() => dispatch(toggleMobileMenu())}
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
            <Box width="full" background="#fafafa">
                <img className='post_image' src={`https://storage.googleapis.com/storage.privy.reviews/${post.image}`} />
                <section className="Blogslider" style={blog_image}> 
                {/* <section className="Blogslider" style={blog_image} > */}
                    <div className="container">
                        <div className="row blogHeading">
                        <div className='blogHeading'>
                        <h1>{post.title}</h1>
                        </div>
                            <div className="blog col-lg-8">

                            </div>
                            <div className="Blogger-details container-fluid">
                    
                            <div className='blogger-inner-cap'>
                          
                              <div className="inner-luana">
                                <img src={post.author_image ? `https://storage.googleapis.com/storage.privy.reviews/${post.author_image}` : circle} />
                                <div className='inner-bloger-text'>
                                  
                                <h3> <span className='byi'>BY</span> {post.author_name} </h3>
                                <h4>
                                  {
                                    post.created_at_day
                                      .length > 1
                                      ? post.created_at_day
                                      : "0" +
                                      post.created_at_day}
                                  {" "}
                                  {post.created_at_month}{" "}
                                  {post.created_at_year}
                                </h4>
                                </div>
                                
                              </div>
                              <div className="inner-luana-social">
                                <HStack spacing={6}>
                                  <Text fontSize="md">{lang.get('blog.post.share')}</Text>
                                  <Link href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank">
                                    <Icon as={FaFacebook} fontSize="xl" />
                                  </Link>
                                  <Link href={`https://twitter.com/intent/tweet?text=${post.title}&url=${window.location.href}`} target="_blank">
                                    <Icon as={FaTwitter} fontSize="xl" />
                                  </Link>
                                </HStack>
                              </div>
                            </div>
                            
                          </div>
                          
                            
                        </div>
                        
                    </div>
                    
                </section>
            
                {/* ----mobile scetion-------------- */}
                {/* <div className="container mobile-blog">
                    <div className="blog3 col-lg-4">
                        <h1>For creators: </h1>
                        <h2>The benefits of utilizing Privy</h2>
                        <p>
                            Consectetur adipiscing elit, sed do tempor incididunt ut
                            labore et dolore.
                        </p>
                        <div className="luana2">
                            <img src={circle} />
                            <h3>
                                BY <span>LUANA LLOYD</span>{" "}
                            </h3>
                            <h4>17 OCT 2020</h4>
                        </div>
                        <div className="luana2">
                            <h3 style={{ marginright: "20px" }}>
                              <HStack spacing={6}>
                                <Text fontSize="md">{lang.get('blog.post.share')}</Text>
                                <Link href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank">
                                  <Icon as={FaFacebook} fontSize="xl" />
                                </Link>
                                <Link href={`https://twitter.com/intent/tweet?text=${post.title}&url=${window.location.href}`} target="_blank">
                                  <Icon as={FaTwitter} fontSize="xl" />
                                </Link>
                              </HStack>
                            </h3>
                        </div>
                    </div>
                </div> */}

          
                {/* ----mobile scetion-------------- */}
                {/* -------------blogslider end------------ */}
              
                <div className="container blog-body">
                    <section className="blogtwo">
                        <div className="row blogcontent">
                            <div className="blogcontent col-lg-12">
                                <div className="innertext col-lg-12">
                                
                                    {/* <div className="barea" style={{verticalAlign: 'top'}}>
                                        <h1 style={{textAlign: "right"}}>{post.body[0] || ""}</h1>
                                    </div> */}
                                    <div className="barea2">
                                        <p className='pt-2 first-special-character' dangerouslySetInnerHTML={{__html: post.body ? post.body : ""}}></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Box>
           </VStack>
          <Footer />
      </>
  );
};

BlogPost.layout = (page) => <Layout children={page} />;

export default BlogPost;
