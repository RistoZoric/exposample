import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Alert,
  AlertIcon,
  Container,
  HStack,
  Text,
  Button,
  Code,
  VStack,
  useClipboard,
  IconButton,
  Icon,
  useToast,Link
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import { usePage } from '@inertiajs/inertia-react';
import useRoutes from '@/utils/useRoutes';
import useLang from '@/utils/useLang';

import '../../assets/popup.css';
import one from '../../assets/img/one.png'
import two from '../../assets/img/two.png'
import three from '../../assets/img/three.png'
import four from '../../assets/img/four.png'
import five from '../../assets/img/five.png'
import six from '../../assets/img/six.png'
import seven from '../../assets/img/seven.png'
import { FaPaperPlane } from 'react-icons/fa'; 
import $ from 'jquery'
export default function VerifyAlert({ authUser, crawlerUrl }) {
  const [isOpen, setOpen] = useState(false);
  const [isVerifyOpen, setVerifyOpen] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { hasCopied, onCopy } = useClipboard(authUser.verification_code);
  const toast = useToast();
  const cancelRef = useRef();
  const route = useRoutes();
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");
  
  const verifyUrl = `${crawlerUrl}/verify/${authUser.username}?code=${authUser.verification_code}`;

  $(function(){
    var overlay = $('<div id="overlay"></div>');
    overlay.show();
    overlay.appendTo(document.body);
    $('.popup').show();
    $('.close').click(function(){
      $('.popup').hide();
      overlay.appendTo(document.body).remove();
      return false;
    });
    $('.x').click(function(){
      $('.popup').hide();
      overlay.appendTo(document.body).remove();
      return false;
    });
    $('.platform_image').click(function(){
      $('.platform_image').removeClass('active_link');
      $(this).addClass('active_link');
    });
    $('.verify_btn').click(function(){
      if($('.active_link').length){
        var platfromtype = $('.active_link').data('type');
        if(platfromtype != ''){
          window.location.href = window.location.protocol + "//" + window.location.host + "/verify/"+platfromtype;
        }
      }else{
        alert('Please select the platform.')
      }
    });
  });

  function handleOpen() {
    setOpen(true);
  }

  function closeVerify() {
    setVerifyOpen(false);
  }
  function closeAlertVerify(){
    setOpen(false); 
  }

  function handleClose() {
    setOpen(false);
  }

  function handleCopy() {
    if (!hasCopied) {
      toast({
        title: 'Copied.',
        description: 'The code has been copied to your clipboard.',
        status: 'success',
        position: 'bottom-right',
        duration: 3000,
        isClosable: true,
      });
    }
    onCopy();
  }

  function handleVerify() {
    setIsSubmitting(true);
    fetch(verifyUrl)
      .then((response) => response.json())
      .then((data) => {
        setIsSubmitting(false);
        if (data.success === true) {
          setHasError(false);
          window.location = route('auth.settings');
        } else {
          setHasError(true);
        }
      });
  }

  if(isVerifyOpen === false){
    return <></>
  }
  return (authUser.type === 'creator' && !authUser.is_verified) && (
  <>
    <Alert
      status="warning"
      variant="left-accent"
      cursor="pointer"
      
       onClick={handleOpen}
    >
      <Container
        maxWidth="8xl"
        px={{ base: 6, md: 12, lg: 24 }}
      >
        <HStack align="center">
          <AlertIcon />
          <Text fontSize="sm">{"Verify your Privy profile so that users can search for your profile and review you."}</Text>
          <button style={{marginLeft: "auto"}} onClick={closeVerify}>
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
        </HStack>
      </Container>
    </Alert>
    <AlertDialog
      size="lg"
     //  isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={handleClose}
      isCentered 
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {lang.get('modals.verification.title')}
          </AlertDialogHeader>
          <AlertDialogBody>
            <VStack spacing={4} align="start" >
              {hasError && (
                <Alert
                  status="error"
                  variant="left-accent"
                  fontSize="sm"
                  
                >
                  <AlertIcon />
                    {lang.get('modals.verification.error')}
                </Alert>
              )}
              <Alert
                colorScheme="glacier"
                variant="left-accent"
                fontSize="sm"
              >
                <AlertIcon />
                {lang.get('modals.verification.info')}
              </Alert>
              <HStack spacing={1}>
                <Code
                  fontSize="sm"
                  fontWeight="semibold"
                  borderRadius="md"
                  p={2}
                >
                  {authUser.verification_code}
                </Code>
                <IconButton
                  fontSize="sm"
                  height="2.35rem"
                  width="2.5rem"
                  icon={<Icon as={IoCopyOutline} color="gray.400" />}
                  onClick={handleCopy}
                />
              </HStack>
              <Text fontSize="sm">{lang.get('modals.verification.instruction_2')}</Text>
            </VStack>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={handleClose}>
              {lang.get('modals.verification.button_1')}
            </Button>
            <Button
              colorScheme="glacier"
              isLoading={isSubmitting}
              loadingText={lang.get('modals.verification.button_2_loading')}
              onClick={handleVerify}
              ml={3}
            >
              {lang.get('modals.verification.button_2')}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>

    {isOpen && (
        <div className='popup'>
         
          <div className='cnt223 row'>
          
          <div className="one_side col-lg-6"></div>
          <div className="two_side col-lg-6">
          <button  className='closeBtn btn btn-light  btn-sm' onClick={closeAlertVerify}>
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
              <h2>Verify your Privy profile with your favorite content platform <br/>
              and start asking for reviews today!</h2> 
                 <div className="platform">
                        <Link className="platform_link" to='/'><img className="platform_image" data-type="fansly" title="Fansly" src={two}/></Link>
                        <Link className="platform_link" to='/'><img className="platform_image" data-type="youtube" title="YouTube" src={three}/></Link>
                        <Link className="platform_link" to='/'><img className="platform_image" data-type="youtube" title="YouTube Gaming" src={four}/></Link>
                        <Link className="platform_link" to='/'><img className="platform_image" data-type="patreon" title="Patreon" src={five}/></Link>
                        <Link className="platform_link" to='/'><img className="platform_image" data-type="twitch" title="Twitch" src={six}/></Link>
                      </div>
                      <div className='verify_btn'>
                        <button type='/'>VERIFY NOW</button><Link className="platform_link" to='/'><FaPaperPlane/></Link>
                  </div>
            </div>
            </div>
        </div>
      )} 
  </>
  );
}
