import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  VStack,
  Box,
  Center,
  Text,
  Stack,
} from '@chakra-ui/react';
import { Head, usePage } from '@inertiajs/inertia-react';
import CanelaText from '@/components/UI/CanelaText';
import Layout from '@/shared/Layout';

import Navigation from '@/components/UI/Navigation';
import Footer from '@/components/UI/Footer';

import { toggleMobileMenu, selectGlobal } from '@/slices/globalSlice';
import useLang from '@/utils/useLang';
import React from 'react';
import {Helmet} from 'react-helmet';

import useRoutes from '../utils/useRoutes';
import "../../Assets/TermCondition.css";
import '../../css/app_dev.css';
const PrivacyPolicy = () => {
  document.documentElement.scrollTop = 0;
  const dispatch = useDispatch();
  const { isMobileMenuOpen } = useSelector(selectGlobal);
  const route = useRoutes();
  const { locale } = usePage().props;
  const lang = useLang(locale);
  lang.setFallback("en");

  return (
    <>
      {/*<Head>
        <title>Terms and Conditions</title>
      </Head>*/}
      <Helmet>
        <title>Terms and Conditions</title>
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
      />
      <div className="privacy-color-part">
        <div className="container">
          <div className="privacy-title-part">
            <h2>Terms and Conditions</h2>
            <p>Know about our policies</p>
            <div className="Privacy-next-title-part">
              <>
                <p
                  className="chakra-text css-1bg6rzf"
                  style={{ textAlign: "left" }}
                />
                <p style={{ margin: "10px 0px" }}>
                  <strong>Terms of Service</strong>
                </p>
                <p>
                  Last Updated on May 1, 2021. These Terms of Service (which,
                  together with the Business Terms below, are the “Terms”) are
                  effective immediately.
                </p>
                <p>
                  PLEASE NOTE: THESE TERMS INCLUDE DISPUTE RESOLUTION PROVISIONS
                  (SEE SECTION 13) THAT, WITH LIMITED EXCEPTIONS, REQUIRE THAT
                  (1) CLAIMS YOU BRING AGAINST PRIVY BE RESOLVED BY BINDING,
                  INDIVIDUAL ARBITRATION, AND (2) YOU WAIVE YOUR RIGHT TO BRING
                  OR PARTICIPATE IN ANY CLASS, GROUP, OR REPRESENTATIVE ACTION
                  OR PROCEEDING.
                </p>
                <p>
                  These Terms govern your access to and use of our products and
                  services, including those offered through our websites,
                  events, communications (e.g., emails, phone calls, and texts)
                  and mobile applications (collectively, the “Service”). By
                  accessing or using the Service, you are agreeing to these
                  Terms, which form a legally binding contract with Privy
                  Reviews Inc., a British Columbia corporation with its
                  headquarters in British Columbia, Canada. Do not access or use
                  the Service if you are unwilling or unable to be bound by the
                  Terms.
                </p>
                <p>
                  Privy is an independent company that is not in any way
                  affiliated with onlyfans.com
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong>1. </strong>
                  <strong>DEFINITIONS</strong>
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong> </strong>
                </p>
                <p>
                  A. Parties. “You” and “your” refer to you, as a user of the
                  Service. A “user” is someone who accesses or in any way uses
                  the Service. “We,” “us,” and “our” refer to Privy and its
                  subsidiaries.
                </p>
                <p>
                  B. Content. “Content” means text, images, photos, audio,
                  video, and all other forms of data or communication. “Your
                  Content” means Content that you submit or transmit to,
                  through, or in connection with the Service, such as comments,
                  ratings, reviews, photos, videos, and related activity, direct
                  messages, and information that you contribute to your user
                  profile or suggest for a business page. “User Content” means
                  Content that users submit or transmit to, through, or in
                  connection with the Service. “Privy Content” means Content
                  that we create and make available in connection with the
                  Service. “Third Party Content” means Content that originates
                  from parties other than Privy or its users, which is made
                  available in connection with the Service. “Service Content”
                  means all of the Content that is made available in connection
                  with the Service, including Your Content, User Content, Privy
                  Content, and Third Party Content.
                </p>
                <p>
                  C. Sites and Accounts. “Consumer Site” means Privy’s consumer
                  website (www.Privyreviews.com and related domains) and mobile
                  applications. “Consumer Account” means the account you create
                  to access or use the Consumer Site. “Business Account” means
                  the account you create to access or use the Privy for Business
                  Owners website and mobile applications. “Account” means any
                  Consumer Account or Business Account.
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong>2. </strong>
                  <strong>CHANGES TO THE TERMS</strong>
                </p>
                <p>
                  We may modify the Terms from time to time. You understand and
                  agree that your access to or use of the Service is governed by
                  the Terms effective at the time of your access to or use of
                  the Service. If we make material changes to these Terms, we
                  will notify you by email, by posting notice on the Service,
                  and/or by other method prior to the effective date of the
                  changes. We will also indicate at the top of this page the
                  date that such changes were last made. You should revisit
                  these Terms on a regular basis as revised versions will be
                  binding on you. You understand and agree that your continued
                  access to or use of the Service after the effective date of
                  changes to the Terms represents your acceptance of such
                  changes.
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong>3. </strong>
                  <strong>TRANSLATION</strong>
                </p>
                <p>
                  We may translate these Terms into other languages for your
                  convenience. Nevertheless, the English version governs your
                  relationship with Privy, and any inconsistencies among the
                  different versions will be resolved in favor of the English
                  version available here.
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong>4. </strong>
                  <strong>USING THE SERVICE</strong>
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong> </strong>
                </p>
                <p>
                  A. Eligibility. To access or use the Service, you must have
                  the requisite power and authority to enter into these Terms.
                  You may not access or use the Service if you are a competitor
                  of Privy or if we have previously banned you from the Service
                  or closed your Account. You must be at least 18 years old. If
                  the laws of the country or State/province where you live
                  provide that you can only be legally bound by a contract with
                  us at an age which is higher than 18 years old, then you are
                  old enough to be legally bound by a contract with us under the
                  laws of the country or State/province where you live. In
                  addition you must not be barred from accessing Privy under any
                  laws which apply to you.
                </p>
                <p>
                  B. Permission to Use the Service. We grant you permission to
                  use the Service subject to these Terms. Your use of the
                  Service is at your own risk, including the risk that you might
                  be exposed to Content that is offensive, indecent, inaccurate,
                  objectionable, incomplete, fails to provide adequate warning
                  about potential risks or hazards, or is otherwise
                  inappropriate.
                </p>
                <p>
                  C. Service Availability. The Service may be modified, updated,
                  interrupted, suspended or discontinued at any time without
                  notice or liability.
                </p>
                <p>
                  D. Accounts. You must create an Account and provide certain
                  information about yourself in order to use some of the
                  features that are offered through the Service. You are
                  responsible for maintaining the confidentiality of your
                  Account password. You are also responsible for all activities
                  that occur in connection with your Account. You agree to
                  notify us immediately of any unauthorized use of your Account.
                  We reserve the right to close your Account at any time for any
                  or no reason.
                </p>
                <p>
                  E. Your Consumer Account is for your personal, non-commercial
                  use only, and you may not create or use a Consumer Account for
                  anyone other than yourself. We ask that you provide complete
                  and accurate information about yourself when creating an
                  Account in order to bolster your credibility as a contributor
                  to the Service. You may not impersonate someone else, provide
                  an email address other than your own, create multiple
                  Accounts, or transfer your Consumer Account to another person
                  without Privy’s prior approval.
                </p>
                <p>
                  F. Communications from Privy and Others. By accessing or using
                  the Service, you consent to receive communications from other
                  users and Privy through the Service, or through any other
                  means such as emails, push notifications, text messages
                  (including SMS and MMS), and phone calls. These communications
                  may promote Privy or businesses listed on Privy, and may be
                  initiated by Privy, businesses listed on Privy, or other
                  users. You further understand that communications may be sent
                  using an automatic telephone dialing system, and that you may
                  be charged by your phone carrier for certain communications
                  such as SMS messages or phone calls. You agree to notify us
                  immediately if the phone number(s) you have provided to us
                  have been changed or disconnected. Please note that any
                  communications, including phone calls, with Privy or made
                  through the Service may be monitored and recorded for quality
                  purposes.
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong>5. </strong>
                  <strong>CONTENT</strong>
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong> </strong>
                </p>
                <p>
                  A. Responsibility for Your Content. You alone are responsible
                  for Your Content, and once posted to Privy, it cannot always
                  be withdrawn. You assume all risks associated with Your
                  Content, including anyone’s reliance on its quality, accuracy,
                  or reliability, and any risks associated with personal
                  information you disclose. You represent that you own or have
                  the necessary permissions to use and authorize the use of Your
                  Content as described herein. You may not imply that Your
                  Content is in any way sponsored or endorsed by Privy.
                </p>
                <p>
                  You may expose yourself to liability if, for example, Your
                  Content contains material that is false, intentionally
                  misleading, or defamatory; violates any third-party right,
                  including any copyright, trademark, service mark, patent,
                  trade secret, moral right, privacy right, right of publicity,
                  or any other intellectual property or proprietary right;
                  contains material that is unlawful, including illegal hate
                  speech or pornography; exploits or otherwise harms minors;
                  violates or advocates the violation of any law or regulation;
                  or violates these Terms.
                </p>
                <p>B. Acceptable Use.</p>
                <p>
                  (i) Do not use Privy except for your own personal use and do
                  not sell, rent, transfer, or share your account or any Content
                  obtained from your use of Privy to or with anyone else.
                </p>
                <p>
                  (ii) Only use Privy in a manner and for a purpose that is
                  lawful.
                </p>
                <p>
                  (iii) Do not upload, post, display, or publish Content on
                  Privy that is illegal, fraudulent, defamatory, hateful,
                  discriminatory, threatening or harassing, or which encourages
                  or promotes violence or any illegal activity.
                </p>
                <p>
                  (iv) Do not use Privy in any way which may exploit, harm, or
                  attempt to exploit or harm any individual under 18 years old,
                  for example by exposing them to inappropriate Content.
                </p>
                <p>
                  (v) Do not upload, post, display, or publish Content on Privy
                  that:
                </p>
                <p>a. shows, includes or refers to:</p>
                <p>
                  i. any individual under 18 years old (or which refers to
                  individuals under 18 years old generally); or
                </p>
                <p>
                  ii. any other individual unless you have written documentation
                  which confirms that all individuals shown or included or
                  referred to in your Content are at least 18 years old, and you
                  have a written consent from each individual to use their name
                  or images (or both) in the Content;
                </p>
                <p>b. shows, promotes, advertises or refers to:</p>
                <p>
                  i. firearms, weapons, or any goods whose sale, possession or
                  use is subject to prohibitions or restrictions;
                </p>
                <p>ii. drugs or drug paraphernalia;</p>
                <p>iii. self-harm or suicide;</p>
                <p>iv. incest;</p>
                <p>v. bestiality;</p>
                <p>
                  vi. violence, rape, lack of consent, hypnosis, intoxication,
                  sexual assault, torture, sadomasochistic abuse or hardcore
                  bondage, extreme fisting, or genital mutilation;
                </p>
                <p>vii. necrophilia;</p>
                <p>viii. urine, scatological, or excrement-related material;</p>
                <p>
                  ix. "revenge porn" (being any sexually explicit material
                  featuring any individual who has not given prior, express and
                  fully informed consent to that material (a) being taken,
                  captured, or otherwise memorialized, or (b) being posted and
                  shared on Privy);
                </p>
                <p>x. escort services, sex trafficking, or prostitution;</p>
                <p>
                  c. contains unsolicited sexual content or unsolicited language
                  that sexually objectifies another user or anyone else in a
                  non-consensual way, or contains fake or manipulated sexual
                  content in relation to another User or anyone else (including
                  "deepfakes");
                </p>
                <p>
                  d. contains, promotes, advertises or refers to hate speech
                  (being Content intended to vilify, humiliate, dehumanize,
                  exclude, attack, threaten, or incite hatred, fear of, or
                  violence against, a group or individual based on race,
                  ethnicity, national origin, immigration status, caste,
                  religion, sex, gender identity or expression, sexual
                  orientation, age, disability, serious disease, veteran status,
                  or any other protected characteristic);
                </p>
                <p>
                  e. contains or refers to anyone else's personal data or
                  private or confidential information (for example, telephone
                  numbers, location information (including street addresses and
                  GPS coordinates), names, identity documents, email addresses,
                  log-in credentials for Privy including passwords and security
                  questions, financial information including bank account and
                  credit card details, biometric data, and medical records)
                  without that person's express written consent;
                </p>
                <p>f. either:</p>
                <p>
                  i. in the case of Content featuring public nudity, was
                  recorded in or is being broadcast from a country, State or
                  province where public nudity is illegal; or
                </p>
                <p>
                  ii. in the case of Content featuring sexual activities, was
                  recorded in or is being broadcast from a public place where
                  members of the public are reasonably likely to see the
                  activities being performed (this does not include outdoor
                  places where members of the public are not present, for
                  example private property such as a private backyard, or
                  secluded areas in nature where members of the public are not
                  present).
                </p>
                <p>
                  g. gives the impression that it comes from or is approved,
                  licensed or endorsed by us or any other person or company;
                </p>
                <p>
                  h. causes or is calculated to cause inconvenience, or anxiety
                  to anyone else or which is likely to upset, embarrass, or
                  cause serious offence to anyone else;
                </p>
                <p>
                  i. is used or is intended to be used to extract money or
                  another benefit from anyone else in exchange for removal of
                  the Content; and/or
                </p>
                <p>
                  j. involves or promotes third party commercial activities or
                  sales, such as contests, sweepstakes and other sales
                  promotions, product placements, advertising, or job posting or
                  employment ads without our prior express consent.
                </p>
                <p>
                  (vi) Do not use Privy to stalk, bully, abuse, harass, threaten
                  or intimidate anyone else.
                </p>
                <p>
                  (vii) Do not use Privy to engage in misleading or deceptive
                  conduct, or conduct that is likely to mislead or deceive any
                  other User.
                </p>
                <p>
                  (viii) Respect the intellectual property rights of Businesses,
                  including by not recording, reproducing, sharing,
                  communicating to the public or otherwise distributing their
                  Content without authorization.
                </p>
                <p>
                  (ix) Do not do anything that violates our or someone else's
                  rights, including intellectual property rights (examples of
                  which are copyright, trademarks, confidential information, and
                  goodwill), personality rights, unfair competition, privacy,
                  and data protection rights.
                </p>
                <p>
                  (x) Do not impersonate us, one of our employees, another User,
                  or any other person or company or falsely state or suggest any
                  affiliation, endorsement, sponsorship between you and us or
                  any other person or company.
                </p>
                <p>
                  (xi) Do not provide false account registration information or
                  make unauthorized use of anyone else's information or Content.
                </p>
                <p>
                  (xii) Do not post or cause to be posted any Content which is
                  spam, which has the intention or effect of artificially
                  increasing any Businesses’ views or interactions, or which is
                  otherwise inauthentic, repetitive, misleading or low quality.
                </p>
                <p>
                  (xiii) Do not transmit, stream, or otherwise send any
                  pre-recorded audio or video material during a live stream or
                  otherwise attempt to pass off recorded material as a live
                  stream.
                </p>
                <p>
                  (xiv) Do not use other media or methods (for example the use
                  of codewords or signals) to communicate anything which
                  violates this Policy.
                </p>
                <p>
                  (xv) Do not reproduce, print, distribute, attempt to download,
                  modify, create derivative works of, publicly display, publicly
                  perform, republish, download, store or transmit any Content,
                  except as permitted under the Terms of Service.
                </p>
                <p>
                  (xvi) Do not knowingly introduce any viruses, trojans, worms,
                  logic bombs or other material into Content which is or may be
                  malicious or technologically harmful.
                </p>
                <p>
                  (xvii) Do not decompile, disassemble, reverse engineer, or
                  otherwise attempt to discover or derive the source code of
                  Privy.
                </p>
                <p>
                  (xviii) Do not use Privy in a way that could adversely affect
                  our systems or security or interfere with any other user’s use
                  of Privy, including their ability to engage in real time
                  activities through Privy.
                </p>
                <p>
                  (xix) Do not use any automated program, tool or process (such
                  as web crawlers, robots, bots spiders, and automated scripts)
                  to access Privy or any server, network or system associated
                  with Privy, or to extract, scrape, collect, harvest or gather
                  Content or information from Privy.
                </p>
                <p>
                  (xx) Do not use Privy' name, logo or any related or similar
                  names, logos, product and service names, designs, or slogans
                  other than in the limited ways which are expressly permitted
                  in the Terms of Service or with our prior written agreement.
                </p>
                <p>
                  C. Our Right to Use Your Content. We may use Your Content in a
                  number of different ways, including by publicly displaying it,
                  reformatting it, incorporating it into advertisements and
                  other works, creating derivative works from it, promoting it,
                  distributing it, and allowing others to do the same in
                  connection with their own websites and media platforms (“Other
                  Media”). As such, you hereby irrevocably grant us world-wide,
                  perpetual, non-exclusive, royalty-free, assignable,
                  sublicensable, transferable rights to use Your Content for any
                  purpose. Please note that you also irrevocably grant the users
                  of the Service and any Other Media the right to access Your
                  Content in connection with their use of the Service and any
                  Other Media. Finally, you irrevocably waive, and cause to be
                  waived, against Privy and its users any claims and assertions
                  of moral rights or attribution with respect to Your Content.
                  By “use” we mean use, copy, publicly perform and display,
                  reproduce, distribute, modify, translate, remove, analyze,
                  commercialize, and prepare derivative works of Your Content.
                </p>
                <p>
                  D. Ownership. As between you and Privy, you own Your Content.
                  We own the Privy Content, including but not limited to visual
                  interfaces, interactive features, graphics, design,
                  compilation (including, but not limited to, our selection,
                  coordination, aggregation, and arrangement of User Content and
                  other Service Content), computer code, products, software,
                  aggregate star ratings, and all other elements and components
                  of the Service excluding Your Content, User Content and Third
                  Party Content. We also own the copyrights, trademarks, service
                  marks, trade names, trade secrets, and other intellectual and
                  proprietary rights throughout the world associated with the
                  Privy Content and the Service, which are protected by
                  copyright, trade dress, patent, trademark, and trade secret
                  laws and all other applicable intellectual and proprietary
                  rights and laws. As such, you may not sell, license, copy,
                  publish, modify, reproduce, distribute, create derivative
                  works or adaptations of, publicly display or in any way use or
                  exploit any of the Privy Content in whole or in part except as
                  expressly authorized by us. Except as expressly and
                  unambiguously provided herein, we do not grant you any express
                  or implied rights, and all rights in and to the Service and
                  the Privy Content are retained by us.
                </p>
                <p>
                  E. Advertising. Privy and its licensees may publicly display
                  advertisements, paid content, and other information nearby or
                  in association with Your Content. You are not entitled to any
                  compensation for such advertisements. The manner, mode and
                  extent of such advertising are subject to change without
                  specific notice to you.
                </p>
                <p>
                  F. Other. User Content (including any that may have been
                  created by users employed or contracted by Privy) does not
                  necessarily reflect the opinion of Privy. Except as required
                  by law, we have no obligation to retain or provide you with
                  copies of Your Content, and we do not guarantee any
                  confidentiality with respect to Your Content. We reserve the
                  right to remove, screen, edit, or reinstate User Content at
                  our sole discretion for any reason or no reason, and without
                  notice to you. For example, we may remove a review if we
                  believe it violates our Content Guidelines.
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong>6. </strong>
                  <strong>BOOKING AND TRANSACTING</strong>
                </p>
                <p>
                  You can access features through the Service that allow you to
                  transact online with business accounts. These features may be
                  provided by Privy’s third-party partners, and their use may be
                  governed by different or additional terms presented to you as
                  part of the transaction process. Please note that such
                  third-party partners and/or businesses themselves are
                  responsible for fulfilling such transactions.
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong>7. </strong>
                  <strong>REPRESENTATIONS AND WARRANTIES</strong>
                </p>
                <p>
                  We are under no obligation to enforce the Terms on your behalf
                  against another user. While we encourage you to let us know if
                  you believe another user has violated the Terms, we reserve
                  the right to investigate and take appropriate action at our
                  sole discretion.
                </p>
                <p>A. You represent and warrant that:</p>
                <p>(i) You have read and understood our Content Guidelines;</p>
                <p>
                  (ii) You have read and understood our Privacy Policy. If you
                  use the Service outside of the United States of America, you
                  consent to having your personal data transferred to and
                  processed in the United States of America;
                </p>
                <p>(iii) you are at least 18 years old;</p>
                <p>
                  (iv) if the laws of the country or State/province where you
                  live provide that you can only be legally bound by a contract
                  with us at an age which is higher than 18 years old, then you
                  are old enough to be legally bound by a contract with us under
                  the laws of the country or State/province where you live; and
                </p>
                <p>
                  (v) you are not be barred from accessing Privy under any laws
                  which apply to you.
                </p>
                <p>
                  B. You also represent and warrant that you will not, and will
                  not assist, encourage, or enable others to use the Service to:
                </p>
                <p>
                  (i) Violate our Terms, including the Content Guidelines and
                  Event Terms and Conditions;
                </p>
                <p>
                  (ii) Post any fake or defamatory review, trade reviews with
                  others, or compensate someone or be compensated to post,
                  refrain from posting, or remove a review;
                </p>
                <p>
                  (iii) Violate any third party’s rights, including any breach
                  of confidence, copyright, trademark, patent, trade secret,
                  moral right, privacy right, right of publicity, or any other
                  intellectual property or proprietary right;
                </p>
                <p>
                  (iv) Threaten, stalk, harm, or harass others, or promote
                  bigotry or discrimination;
                </p>
                <p>
                  (v) Promote a business or other commercial venture or event,
                  or otherwise use the Service for commercial purposes, except
                  in connection with a Business Account in accordance with the
                  Business Terms;
                </p>
                <p>
                  (vi) Send bulk emails, surveys, or other mass messaging,
                  whether commercial in nature or not; engage in keyword
                  spamming, or otherwise attempt to manipulate the Service’s
                  search results, review Recommendation Software (as defined in
                  the Business Terms below), or any third party website;
                </p>
                <p>
                  (vii) Solicit personal information from minors, or submit or
                  transmit pornography;
                </p>
                <p>(viii) Violate any applicable law;</p>
                <p>
                  (ix) Modify, adapt, appropriate, reproduce, distribute,
                  translate, create derivative works or adaptations of, publicly
                  display, sell, trade, or in any way exploit the Service or
                  Service Content (other than Your Content), except as expressly
                  authorized by Privy;
                </p>
                <p>
                  (x) Use any robot, spider, Service search/retrieval
                  application, or other automated device, process or means to
                  access, retrieve, copy, scrape, or index any portion of the
                  Service or any Service Content;
                </p>
                <p>
                  (xi) Reverse engineer any portion of the Service, unless
                  applicable law prohibits this restriction, in which case you
                  agree to provide us with 30 days’ prior written notice here;
                </p>
                <p>
                  (xii) Remove or modify any copyright, trademark, or other
                  proprietary rights notice that appears on any portion of the
                  Service or on any materials printed or copied from the
                  Service;
                </p>
                <p>(xiii) Record, process, or mine information about users;</p>
                <p>
                  (xiv) Access, retrieve or index any portion of the Service for
                  purposes of constructing or populating a searchable database
                  of business reviews;
                </p>
                <p>(xv) Reformat or frame any portion of the Service;</p>
                <p>
                  (xvi) Take any action that imposes, or may impose, in our sole
                  discretion, an unreasonable or disproportionately large load
                  on Privy’s technology infrastructure or otherwise make
                  excessive traffic demands of the Service;
                </p>
                <p>
                  (xvii) Attempt to gain unauthorized access to the Service,
                  Accounts, computer systems or networks connected to the
                  Service through hacking, password mining or any other means;
                </p>
                <p>
                  (xviii) Use the Service or any Service Content to transmit any
                  computer viruses, worms, defects, Trojan horses, malicious
                  code, spyware, malware or other items of a destructive or
                  harmful nature;
                </p>
                <p>
                  (xix) Use any device, software or routine that interferes with
                  the proper working of the Service, or otherwise attempt to
                  interfere with the proper working of the Service;
                </p>
                <p>
                  (xx) Use the Service to violate the security of any computer
                  network, crack passwords or security encryption codes; disrupt
                  or interfere with the security of, or otherwise cause harm to,
                  the Service or Service Content; or
                </p>
                <p>
                  (xxi) Remove, circumvent, disable, damage or otherwise
                  interfere with any security-related features of the Service,
                  features that prevent or restrict the use or copying of
                  Service Content, or features that enforce limitations on the
                  use of the Service.
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong>8. </strong>
                  <strong>ADDITIONAL POLICIES AND TERMS </strong>
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong> </strong>
                </p>
                <p>
                  A. Copyright and Trademark Disputes. You agree to notify us
                  about copyright and trademark disputes concerning User Content
                  by providing a notice that sets out:
                </p>
                <p>
                  (i) Identification of the copyrighted or trademarked work that
                  you claim has been infringed;
                </p>
                <p>
                  (ii) Identification of the allegedly infringing content, and
                  information reasonably sufficient to permit Privy to locate it
                  on the Site (e.g., the URL for the web page on which the
                  content appears);
                </p>
                <p>
                  (iii) A statement by you that you have a good faith belief
                  that the use of the content identified in your notice in the
                  manner complained of is not authorized by the
                  copyright/trademark owner, its agent, or the law;
                </p>
                <p>
                  (iv) A statement by you that you attest, under penalty of
                  perjury, that the information in your notice is accurate and
                  that you are the copyright/trademark owner or authorized to
                  act on the owner's behalf; and
                </p>
                <p>
                  (v) Your physical or electronic signature, together with your
                  contact information.
                </p>
                <p>
                  You agree we may forward any notification sent to us to the
                  user who submitted the User Content at issue. We will respond
                  to all such notices and comply with applicable law. We reserve
                  the right to remove content alleged to be infringing without
                  prior notice and at our sole discretion. We also reserve the
                  right to terminate a user's account if the user is determined
                  to be a repeat infringer.
                </p>
                <p>
                  B. Additional Terms. Your use of the Service is subject to any
                  and all additional terms, policies, rules, or guidelines that
                  we may post on or link to from the Service (the “Additional
                  Terms”). All such Additional Terms are hereby incorporated by
                  reference into, and made a part of, these Terms. If you have a
                  Business Account, the Business Terms provided below apply to
                  you.
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong>9. </strong>
                  <strong>SUGGESTIONS AND IMPROVEMENTS</strong>
                </p>
                <p>
                  By sending us any ideas, suggestions, documents or proposals
                  (“Feedback”), you agree that (i) your Feedback does not
                  contain any third party confidential or proprietary
                  information, (ii) we are under no obligation of
                  confidentiality, express or implied, with respect to the
                  Feedback, (iii) we may have something similar to the Feedback
                  already under consideration or in development, (iv) we have no
                  obligation to review, consider, or implement the Feedback, or
                  to return to you all or part of the Feedback, and (v) you
                  grant us an irrevocable, non-exclusive, royalty-free,
                  perpetual, worldwide, assignable, sublicensable, transferable
                  license to use, modify, prepare derivative works of, publish,
                  distribute and sublicense the Feedback, and you irrevocably
                  waive, and cause to be waived, against Privy and its users any
                  claims and assertions of any moral rights contained in such
                  Feedback.
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong>10. </strong>
                  <strong>THIRD PARTY CONTENT AND SERVICES</strong>
                </p>
                <p>
                  The Service may host Third Party Content, or include links to
                  other websites or applications (each, a “Third Party
                  Service”). We do not control or endorse any Third Party
                  Content or Third Party Service. You agree that we are not
                  responsible for the availability, accuracy, or content of any
                  such Third Party Content or Third Party Service. Your use of
                  and reliance on any Third Party Content or Third Party Service
                  is at your own risk.
                </p>
                <p>
                  Some of the services made available through the Service and
                  Third Party Services may be subject to additional third party
                  terms of service, privacy policies, licensing terms and
                  disclosures, and other terms, conditions, and policies,
                  including without limitation the ones posted here. It is your
                  responsibility to familiarize yourself with any such
                  applicable third party terms.
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong>11. </strong>
                  <strong>INDEMNITY</strong>
                </p>
                <p>
                  You agree to indemnify, defend, and hold harmless Privy, its
                  parents, subsidiaries, affiliates, any related companies,
                  suppliers, licensors and partners, and the officers,
                  directors, employees, agents, contractors and representatives
                  of each of them (collectively, the “Privy Entities”) from and
                  against any and all third party claims, actions, demands,
                  losses, damages, costs, liabilities and expenses (including
                  but not limited to attorneys’ fees and court costs) arising
                  out of or relating to: (i) your access to or use of the
                  Service, including Your Content, (ii) your violation of the
                  Terms, (iii) your breach of your representations and
                  warranties provided under these Terms, (iv) any products or
                  services purchased or obtained by you in connection with the
                  Service, (v) your products or services, or the marketing or
                  provision thereof to end users, or (vi) the infringement by
                  you, or any third party using your Account, of any
                  intellectual property or other right of any person or entity.
                  Privy reserves the right, at your expense, to assume the
                  exclusive defense and control of any matter for which you are
                  required to indemnify us and you agree to cooperate with our
                  defense of these claims. You agree not to settle any such
                  matter without the prior written consent of Privy. Privy will
                  use reasonable efforts to notify you of any such claim, action
                  or proceeding upon becoming aware of it.
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong>12. </strong>
                  <strong>DISCLAIMERS AND LIMITATIONS OF LIABILITY</strong>
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong>
                    PLEASE READ THIS SECTION CAREFULLY SINCE IT LIMITS THE
                    LIABILITY OF THE PRIVY ENTITIES TO YOU. EACH OF THE
                    SUBSECTIONS BELOW ONLY APPLIES UP TO THE MAXIMUM EXTENT
                    PERMITTED UNDER APPLICABLE LAW. NOTHING HEREIN IS INTENDED
                    TO LIMIT ANY RIGHTS YOU MAY HAVE WHICH MAY NOT BE LAWFULLY
                    LIMITED. BY ACCESSING OR USING THE SERVICE, YOU REPRESENT
                    THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO THESE TERMS,
                    INCLUDING THIS SECTION. YOU ARE GIVING UP SUBSTANTIAL LEGAL
                    RIGHTS BY AGREEING TO THESE TERMS.
                  </strong>
                </p>
                <p>
                  A. THE SERVICE AND SERVICE CONTENT ARE MADE AVAILABLE TO YOU
                  ON AN “AS IS”, “WITH ALL FAULTS” AND “AS AVAILABLE” BASIS,
                  WITH THE EXPRESS UNDERSTANDING THAT THE PRIVY ENTITIES MAY NOT
                  MONITOR, CONTROL, OR VET USER CONTENT OR THIRD PARTY CONTENT.
                  AS SUCH, YOUR USE OF THE SERVICE IS AT YOUR OWN DISCRETION AND
                  RISK. THE PRIVY ENTITIES MAKE NO CLAIMS OR PROMISES ABOUT THE
                  QUALITY, COMPLETENESS, ACCURACY, OR RELIABILITY OF THE
                  SERVICE, ITS SAFETY OR SECURITY, INCLUDING WITHOUT LIMITATION
                  THE SECURITY OF YOUR DATA, OR THE SERVICE CONTENT.
                  ACCORDINGLY, THE PRIVY ENTITIES ARE NOT LIABLE TO YOU FOR ANY
                  PERSONAL INJURY, LOSS OR DAMAGE THAT MIGHT ARISE, FOR EXAMPLE,
                  FROM THE SERVICE’S INOPERABILITY, DEPLETION OF BATTERY POWER
                  OR OTHER IMPAIRMENT OF DEVICES USED TO ACCESS THE SERVICE,
                  SERVICE UNAVAILABILITY, SECURITY VULNERABILITIES OR FROM YOUR
                  RELIANCE ON THE QUALITY, ACCURACY, OR RELIABILITY OF THE
                  BUSINESS LISTINGS, RATINGS, REVIEWS (INCLUDING THEIR CONTENT
                  OR OMISSION OF CONTENT, ORDER, AND DISPLAY), METRICS OR OTHER
                  CONTENT FOUND ON, USED ON, OR MADE AVAILABLE THROUGH THE
                  SERVICE.
                </p>
                <p>
                  B. THE PRIVY ENTITIES MAKE NO CLAIMS OR PROMISES WITH RESPECT
                  TO ANY THIRD PARTY, SUCH AS THE BUSINESSES OR ADVERTISERS
                  LISTED ON THE SERVICE OR THAT OFFER GOODS OR SERVICES THROUGH
                  THE SERVICE, OR THE SERVICE’S USERS. ACCORDINGLY, THE PRIVY
                  ENTITIES ARE NOT LIABLE TO YOU FOR ANY PERSONAL INJURY, LOSS
                  OR DAMAGE THAT MIGHT ARISE FROM ANY SUCH THIRD PARTY’S ACTIONS
                  OR OMISSIONS, INCLUDING, FOR EXAMPLE, IF ANOTHER USER OR
                  BUSINESS MISUSES YOUR CONTENT, IDENTITY OR PERSONAL
                  INFORMATION, OR IF YOU HAVE A NEGATIVE EXPERIENCE WITH ONE OF
                  THE BUSINESSES OR ADVERTISERS LISTED OR FEATURED ON THE
                  SERVICE. YOUR PURCHASE AND USE OF PRODUCTS OR SERVICES OFFERED
                  BY THIRD PARTIES THROUGH THE SERVICE IS AT YOUR OWN DISCRETION
                  AND RISK.
                </p>
                <p>
                  C. YOUR SOLE AND EXCLUSIVE RIGHT AND REMEDY IN CASE OF
                  DISSATISFACTION WITH THE SERVICE, RELATED SERVICES, OR ANY
                  OTHER GRIEVANCE SHALL BE YOUR TERMINATION AND DISCONTINUATION
                  OF ACCESS TO, OR USE OF THE SERVICE.
                </p>
                <p>
                  D. THE PRIVY ENTITIES’ MAXIMUM AGGREGATE LIABILITY TO YOU FOR
                  LOSSES OR DAMAGES THAT YOU SUFFER IN CONNECTION WITH THE
                  SERVICE OR THESE TERMS IS LIMITED TO THE GREATER OF (i) THE
                  AMOUNT PAID, IF ANY, BY YOU TO THE PRIVY ENTITIES IN
                  CONNECTION WITH THE SERVICE IN THE 12 MONTHS PRIOR TO THE
                  ACTION GIVING RISE TO LIABILITY, OR (ii) $100.
                </p>
                <p>
                  E. THE PRIVY ENTITIES’ LIABILITY SHALL BE LIMITED TO THE
                  MAXIMUM EXTENT PERMITTED BY LAW, THE PRIVY ENTITIES WILL NOT
                  BE LIABLE FOR ANY (i) INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE,
                  EXEMPLARY, RELIANCE, OR CONSEQUENTIAL DAMAGES, (ii) LOSS OF
                  PROFITS OR REVENUE, (iii) BUSINESS INTERRUPTION, (iv)
                  REPUTATIONAL HARM, (v) LOSS OF INFORMATION OR DATA; OR (vi)
                  LIABILITY WITH RESPECT TO A CONSUMER ALERT POSTED ON ANY PRIVY
                  BUSINESS PAGES FOR YOUR BUSINESS. THE WAIVERS AND LIMITATIONS
                  SPECIFIED IN THIS SECTION 12 WILL SURVIVE AND APPLY REGARDLESS
                  OF THE FORM OF ACTION, WHETHER IN CONTRACT, TORT (INCLUDING
                  NEGLIGENCE), STRICT LIABILITY OR OTHERWISE.
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong>13. </strong>
                  <strong>ARBITRATION, DISPUTES, AND CHOICE OF LAW</strong>
                </p>
                <p>A. If you are a resident of the United States or Canada:</p>
                <p>
                  (i) EXCEPT FOR EXCLUDED CLAIMS: ANY CLAIM, CAUSE OF ACTION,
                  REQUEST FOR RELIEF OR DISPUTE THAT MIGHT ARISE BETWEEN YOU AND
                  PRIVY (“CLAIMS”) MUST BE RESOLVED BY ARBITRATION ON AN
                  INDIVIDUAL BASIS; YOU AND WE AGREE THAT EACH MAY BRING OR
                  PARTICIPATE IN CLAIMS AGAINST THE OTHER ONLY IN OUR RESPECTIVE
                  INDIVIDUAL CAPACITIES, AND NOT AS A PLAINTIFF OR CLASS MEMBER
                  IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. UNLESS
                  BOTH YOU AND PRIVY AGREE OTHERWISE, THE ARBITRATOR MAY NOT
                  CONSOLIDATE OR JOIN THE CLAIMS OF OTHER PERSONS OR PARTIES WHO
                  MAY BE SIMILARLY SITUATED, AND MAY NOT OTHERWISE PRESIDE OVER
                  ANY FORM OF A REPRESENTATIVE OR CLASS PROCEEDING. YOU AND
                  PRIVY EXPRESSLY WAIVE THE RIGHT TO TRIAL BY A JURY.
                </p>
                <p>
                  (ii) “Excluded Claims” means: (a) Claims brought by you or
                  Privy that could be brought in small claims court, if
                  permitted by the rules of that court, or (b) Claims related to
                  intellectual property (like copyrights and trademarks), or a
                  breach of Section 7 above (Representations and Warranties).
                  Excluded Claims may be brought in court. Any issues relating
                  to the scope and enforceability of the arbitration provision
                  will be resolved by the arbitrator. If any Claim cannot be
                  arbitrated in accordance with this provision, then only that
                  Claim may be brought in court and all other Claims remain
                  subject to arbitration. Notwithstanding this paragraph,
                  Business Claims, as defined in Section 3 of the Additional
                  Terms for Business Accounts, are governed by that section.
                </p>
                <p>
                  (iii) Excluded Claims and Claims that cannot be arbitrated
                  must be brought in court. British Columbia, Canada law will
                  govern these Terms (to the extent not preempted or
                  inconsistent with federal law), as well as any such Excluded
                  Claim or Claim that cannot be arbitrated, without regard to
                  conflict of law provisions. You or Privy may seek relief in
                  any small claims court of competent jurisdiction. All other
                  Excluded Claims and Claims that cannot be arbitrated are
                  subject to the exclusive jurisdiction in, and the exclusive
                  venue of, the supreme court of the Province of British
                  Columbia, Canada and you consent to the personal jurisdiction
                  of these courts for the purpose of litigating any such Claim.
                </p>
                <p>
                  (iv) Arbitration shall be administered in accordance with the
                  Arbitration Act, S.B.C 2020, c. 2 and the Vancouver
                  International Arbitration Centre (the “VIAC”) Rules then in
                  effect by a panel of one arbitrator appointed in accordance
                  with those rules. Arbitration may be conducted in person,
                  through the submission of documents, by phone or online. The
                  arbitrator may award damages to you individually as a court
                  could, including declaratory or injunctive relief, but only to
                  the extent required to satisfy your individual claim.
                </p>
                <p>
                  (v) Unless the arbitrator finds the arbitration was frivolous
                  or brought for an improper purpose, Privy will pay all filing,
                  VIAC, and arbitrator’s fees and expenses. We waive any right
                  to seek an award of attorneys’ fees and expenses in connection
                  with any non-frivolous arbitration between you and us.
                </p>
                <p>
                  B. If you are a resident of a country located in the EEA or
                  Switzerland, Irish law will govern these Terms, as well as any
                  dispute that might arise between you and Privy. You agree that
                  any subpoena, third-party discovery request, or other
                  third-party process directed to Privy must issue from, or be
                  domesticated by, the supreme court of the Province of British
                  Columbia, Canada and you agree to submit to the jurisdiction
                  of each of these courts for any related proceedings.
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong>14. </strong>
                  <strong>TERMINATION</strong>
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong> </strong>
                </p>
                <p>
                  A. You may terminate the Terms at any time by closing your
                  Account, discontinuing any access to or use of the Service,
                  and providing Privy with a notice of termination here.
                </p>
                <p>
                  B. We may close your Account, suspend your ability to use
                  certain portions of the Service, terminate any license or
                  permission granted to you hereunder, and/or ban you altogether
                  from the Service for any or no reason, and without notice or
                  liability of any kind. Any such action could prevent you from
                  accessing your Account, the Service, Your Content, Service
                  Content, or any other related information.
                </p>
                <p>
                  C. In the event of any termination of these Terms, whether by
                  you or us, Sections 1, 3, 5, 7–15 of the Terms of Service will
                  continue in full force and effect.
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong>15. </strong>
                  <strong>GENERAL TERMS</strong>
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong> </strong>
                </p>
                <p>
                  A. We reserve the right to modify, update, or discontinue the
                  Service at our sole discretion, at any time, for any or no
                  reason, and without notice or liability.
                </p>
                <p>
                  B. Except as otherwise stated in Section 10 above, nothing
                  herein is intended, nor will be deemed, to confer rights or
                  remedies upon any third party.
                </p>
                <p>
                  C. The Terms contain the entire agreement between you and us
                  regarding the use of the Service, and supersede any prior
                  agreement between you and us on such subject matter. The
                  parties acknowledge that no reliance is placed on any
                  representation made but not expressly contained in these
                  Terms.
                </p>
                <p>
                  D. Any failure on Privy’s part to exercise or enforce any
                  right or provision of the Terms does not constitute a waiver
                  of such right or provision. The failure of either party to
                  exercise in any respect any right provided for herein shall
                  not be deemed a waiver of any further rights hereunder. The
                  Terms may not be waived, except pursuant to a writing executed
                  by Privy.
                </p>
                <p>
                  E. If any provision of the Terms is found to be unenforceable
                  or invalid by an arbitrator or court of competent
                  jurisdiction, then only that provision shall be modified to
                  reflect the parties’ intention or eliminated to the minimum
                  extent necessary so that the Terms shall otherwise remain in
                  full force and effect and enforceable.
                </p>
                <p>
                  F. The Terms, and any rights or obligations hereunder, are not
                  assignable, transferable or sublicensable by you except with
                  Privy’s prior written consent, but may be assigned or
                  transferred by us without restriction. Any attempted
                  assignment by you shall violate these Terms and be void.
                </p>
                <p>
                  G. You agree that no joint venture, partnership, employment,
                  agency, special or fiduciary relationship exists between you
                  and Privy as a result of these Terms or your use of the
                  Service.
                </p>
                <p>
                  H. The section titles in the Terms are for convenience only
                  and have no legal or contractual effect.
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong>ADDITIONAL TERMS FOR BUSINESS ACCOUNTS </strong>
                </p>
                <p>Last Updated on May 1, 2021.</p>
                <p>
                  The following terms (“Business Terms”), in addition to the
                  Terms of Service above, govern your access to and use of your
                  Business Account. In the event of any conflict between these
                  Business Terms and the Terms of Service, the Business Terms
                  apply. If you have purchased products or services from Privy
                  on behalf of your business (e.g., advertising or business
                  tools), the terms of that purchase apply in the event of any
                  conflict with these Business Terms. Capitalized words used but
                  not defined in these Business Terms have the meanings
                  described in the Terms of Service. By creating, accessing, or
                  using your Business Account, you are agreeing to these
                  Business Terms and concluding a legally binding contract with
                  Privy. You are not authorized to create, access, or use a
                  Business Account if you do not agree to these Business Terms.
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong>
                    PLEASE READ THESE BUSINESS TERMS CAREFULLY AS THEY REQUIRE
                    THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE
                    DISPUTES, RATHER THAN TRIALS OR CLASS ACTIONS, AND ALSO
                    LIMIT THE REMEDIES AVAILABLE TO YOU IN THE EVENT OF A
                    DISPUTE.
                  </strong>
                </p>
                <p>
                  In the event of any termination of these Business Terms,
                  whether by you or us, these Business Terms in their entirety
                  will continue in full force and effect.
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong>1. </strong>
                  <strong>REQUIREMENTS, REPRESENTATIONS AND WARRANTIES</strong>
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong> </strong>
                </p>
                <p>
                  A. In order to access or use the Services, you agree that:
                </p>
                <p>
                  (i) you have the authority to act on behalf of the business or
                  businesses associated with or claimed through your Business
                  Account and bind any such business (including any
                  corresponding business entity) to the Business Terms (such
                  business or businesses, your “Business”);
                </p>
                <p>
                  (ii) your access to or use of the Business Site will only be
                  in your capacity as an authorized representative of your
                  Business;
                </p>
                <p>
                  (iii) you will not use the Consumer Site for business
                  activities, including but not limited to flagging reviews or
                  messaging people who have reviewed your Business;
                </p>
                <p>
                  (iv) your Business complies with applicable laws and does not
                  offer, advertise, sell, or lease illegal products and/or
                  services;
                </p>
                <p>
                  (v) you grant Privy a non-transferable, non-exclusive,
                  royalty-free limited license to display your public website on
                  the Services, or allow for its display through iframes or
                  other framing technology;
                </p>
                <p>
                  (vi) you agree that we may contact you, including by phone or
                  email, using the contact information you provide us, make
                  publicly available, or that we have on record for your
                  business, and that our communications (including phone calls)
                  with you may be monitored and recorded for quality purposes;
                  and
                </p>
                <p>
                  (vii) you understand and acknowledge that non-disparagement
                  clauses in certain consumer contracts, such as clauses that
                  seek to restrict or prohibit reviews (including provisions
                  that penalize consumers for posting reviews) about your
                  Business, are prohibited under California law (Cal. Civil Code
                  § 1670.8) and under the federal Consumer Review Fairness Act
                  (15 U.S. Code § 45b) and you agree that you will not include
                  such clauses in your consumer contracts, or otherwise attempt
                  to enforce non-disparagement or ‘gag’ clauses against
                  consumers under any circumstances.
                </p>
                <p>
                  B. You represent and warrant that you will not, and will not
                  authorize or induce any other party, to:
                </p>
                <p>
                  (i) offer incentives of any kind, such as discounts, freebies,
                  refunds, contest entries, offers, or deals in exchange for the
                  posting of reviews of your Business, or to prevent or remove
                  reviews, and you understand and acknowledge that Privy may
                  publicly notify consumers about such incentives and other
                  attempts to obtain, prevent, or remove reviews;
                </p>
                <p>(ii) solicit or ask for reviews from your customers;</p>
                <p>
                  (iii) write reviews or vote on Content (e.g., voting user
                  reviews as useful, funny, or cool) for your Business or your
                  Business’s competitors;
                </p>
                <p>
                  (iv) pay or induce anyone to post, refrain from posting, or
                  remove reviews, or otherwise attempt to circumvent Privy’s
                  Recommendation Software (defined below) or fraud detection
                  systems;
                </p>
                <p>
                  (v) attempt to generate automated, fraudulent, or otherwise
                  invalid ad impressions, inquiries, conversions, ad clicks, or
                  other actions;
                </p>
                <p>
                  (vi) use any automated means or form of scraping or data
                  extraction to access, query or otherwise collect Privy data,
                  content and/or reviews from the Consumer Site or the Business
                  Site;
                </p>
                <p>
                  (vii) use any Privy trademark or service mark in any manner
                  without Privy’s prior written consent; or
                </p>
                <p>
                  (viii) misrepresent your identity or affiliation to anyone in
                  connection with Privy.
                </p>
                <p>
                  C. You understand and acknowledge that Privy allows consumers
                  to post Content about your Business, including photos,
                  ratings, and reviews. You understand and acknowledge that
                  Privy employs automated software in an effort to showcase the
                  most reliable and useful reviews while displaying other
                  reviews less prominently (“Recommendation Software”). You
                  understand and acknowledge that while Privy uses its
                  Recommendation Software to identify potentially less helpful
                  reviews, the Recommendation Software may sometimes suppress
                  legitimate reviews or fail to detect illegitimate reviews. You
                  understand and acknowledge that any purchase of advertising or
                  other paid features from Privy will not influence the
                  Recommendation Software or otherwise allow or enable You,
                  directly or indirectly, to alter reviews or impact whether,
                  where, or how reviews appear on Privy.
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong>
                    The following Sections 2 and 3 apply if you are a resident
                    of the United States or Canada only:
                  </strong>
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong>2. </strong>
                  <strong>DISCLAIMERS AND LIMITATIONS OF LIABILITY</strong>
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong>
                    PLEASE READ THIS SECTION CAREFULLY SINCE IT LIMITS THE
                    LIABILITY OF THE PRIVY ENTITIES TO YOU. FOR CLARITY, THE
                    BELOW APPLIES IN ADDITION TO THE DISCLAIMERS AND LIMITATIONS
                    OF LIABILITY DETAILED IN SECTION 12 OF THE TERMS.
                  </strong>
                </p>
                <p>
                  The federal Communications Decency Act (47 U.S. Code § 230)
                  limits the liability of interactive computer services, like
                  Privy, for their role in publishing third-party Content,
                  including consumer reviews. Additionally, anti-SLAPP laws,
                  such as Cal. Civ. Proc. Code § 425.16 in California, may
                  require you to pay Privy’s attorneys’ fees if you attempt to
                  impose such liability on Privy through legal proceedings.
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong>3. </strong>
                  <strong>ARBITRATION, DISPUTES, AND CHOICE OF LAW</strong>
                </p>
                <p style={{ margin: "10px 0px" }}>
                  <strong>
                    FOR CLARITY, THIS SECTION GOVERNS ANY BUSINESS CLAIM BROUGHT
                    BY YOU OR PRIVY. ANY CLAIM NOT SUBJECT TO THIS SECTION IS
                    INSTEAD GOVERNED BY SECTION 13 OF THE TERMS.
                  </strong>
                </p>
                <p>
                  Except for Excluded Business Claims, any controversy or claim
                  arising out of or relating to: (a) these Terms, or the breach
                  thereof; or (b) your access to or use of your Business Account
                  Business Site; (each such controversy or claim, a “Business
                  Claim”), shall be settled by arbitration administered in
                  accordance with the Arbitration Act, S.B.C 2020, c. 2 and the
                  Vancouver International Arbitration Centre (the “VIAC”) Rules
                  then in effect by a panel of one arbitrator appointed in
                  accordance with those rules and judgment on the award rendered
                  by the arbitrator may be entered in any court having
                  jurisdiction thereof. The arbitrator will issue a reasoned
                  award in writing, including all findings of fact and law upon
                  which the award was made. The arbitrator will not have the
                  power to commit errors of law, and the award may be vacated or
                  corrected through judicial review by a court of competent
                  jurisdiction under the California Arbitration Act for any such
                  error. “Excluded Business Claims” means Claims related to
                  intellectual property (like copyrights and trademarks) or
                  violations of Section 7 of the Terms of Service
                  (Representations and Warranties).
                </p>
                <p>
                  Business Claims shall be heard by a single arbitrator.
                  Arbitrations will be held in Vancouver, British Columbia,
                  Canada, but the parties may choose for themselves whether to
                  appear in person, by phone, or through the submission of
                  documents. The arbitration shall be governed by the laws of
                  the Province of British Columbia and the Federal laws of
                  Canada applicable therein. The prevailing party shall be
                  entitled to an award of reasonable attorneys’ fees.
                </p>
                <p>
                  NOTWITHSTANDING THE FOREGOING, FOR ANY BUSINESS CLAIM THAT IS
                  NOT SUBJECT TO ARBITRATION, INCLUDING WITHOUT LIMITATION
                  EXCLUDED BUSINESS CLAIMS, YOU AGREE TO SUBMIT AND CONSENT TO
                  THE PERSONAL AND EXCLUSIVE JURISDICTION IN, AND THE EXCLUSIVE
                  VENUE OF, THE SUPREME COURT OF BRITISH COLUMBIA LOCATED WITHIN
                  VANCOUVER, BRITISH COLUMBIA, WHICH IS THE PLACE OF PERFORMANCE
                  OF THESE BUSINESS TERMS.
                </p>
                <p>
                  YOU AND PRIVY AGREE THAT EACH MAY BRING OR PARTICIPATE IN
                  BUSINESS CLAIMS AGAINST THE OTHER ONLY IN THEIR RESPECTIVE
                  INDIVIDUAL CAPACITIES, AND NOT AS A PLAINTIFF OR CLASS MEMBER
                  IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. UNLESS
                  BOTH YOU AND PRIVY AGREE OTHERWISE, THE ARBITRATOR MAY NOT
                  CONSOLIDATE OR JOIN THE BUSINESS CLAIMS OF OTHER PERSONS OR
                  PARTIES WHO MAY BE SIMILARLY SITUATED, AND MAY NOT OTHERWISE
                  PRESIDE OVER ANY FORM OF A REPRESENTATIVE OR CLASS PROCEEDING.
                  IF A BUSINESS CLAIM IMPLICATES THIS SECTION, AND THIS SECTION
                  IS FOUND TO BE INVALID, UNENFORCEABLE OR ILLEGAL BY A COURT,
                  SUCH BUSINESS CLAIM MUST BE ADJUDICATED BY A COURT AND NOT BY
                  AN ARBITRATOR.
                </p>
                <p />
              </>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

PrivacyPolicy.layout = (page) => <Layout children={page} />;

export default PrivacyPolicy;
