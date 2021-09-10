import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
  padding: 24px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1200px;
`

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  margin-top: 100px;
  margin-bottom 50px;
`

const HeroSubtitle = styled.p`
  font-size: 1.2em;
  color: #45bdff;
  font-weight: 300;
`
const HeroTitle = styled.p`
  color: #4e3ff0;
  font-size: 3.4em;
  font-weight: 700;
`

const Section = styled.div`
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`

const Paragraph = styled.p`
  margin-bottom: 10px;
  opacity: 0.8;
`

const PStyle = styled.span`
  opacity: 0.8;
`

const SectionTitle = styled.p`
  font-size: 2em;
  font-weight: 600;
  margin-bottom: 10px;
`

const Content = () => (
  <Container>
    <Wrapper>
      <Hero>
        <HeroSubtitle>LAST UPDATED 9/10/21</HeroSubtitle>
        <HeroTitle>Privacy Policy</HeroTitle>
      </Hero>
      <Section>
        <Paragraph>
          {`This privacy policy ("Privacy Policy") explains how information about you is collected,
          used and disclosed by us. This Privacy Policy applies to information we collect when (i)
          you access to and use of our Sites, (ii) your access to and use of our Applications, or
          (iii) your access to and use of our services that link to or reference our Dialect Terms.
          The Site, Application and other Dialect services together are hereinafter collectively
          referred to as the "Dialect Platform". The Privacy Policy is intended to meet our duties of
          transparency under the "General Data Protection Regulation" or "GDPR".`}
        </Paragraph>
        <Paragraph>
          {`By downloading, accessing, using and/or interacting with our Dialect Platform, you agree
          and expressly consent to our collection, use and disclosure of the information that you
          provide as described in this Privacy Policy. This Privacy Policy is incorporated by
          reference into the terms of service available at www.Dialect.com/tos (our "Dialect Terms")
          and is subject to the provisions of the Dialect Terms. Capitalized terms (including
          "Dialect", "us", "we" and "our") used but not defined in this Privacy Policy shall have the
          meaning ascribed to such terms in our Dialect Terms. If you have any concerns about
          providing information to us or the use of that information as described in this Privacy
          Policy, you should not use our Dialect Platform.`}
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>Modifications</SectionTitle>
        <Paragraph>
          {`Because we are always looking for new and innovative ways to help you achieve your goals
          in connection with the use of our Dialect Platform, this Privacy Policy may change over
          time, so please review it frequently. The effective date at the top indicates the last
          time this Privacy Policy was modified. If we are required by applicable data protection
          laws to give you enhanced notice or seek your consent for any such changes, we will do so.
          You can see when this policy was last updated by checking the "last updated" date
          displayed at the top of this policy. Any revised Privacy Policy will supersede all
          previous privacy policies.
        `}
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>1. How We Collect Information</SectionTitle>
        <Paragraph>
          {`We collect information: (i) that you choose to provide to us; and (ii) automatically
          through your use of the Dialect Platform. If you are a resident of the European Economic
          Area (the "EEA"), we rely on one of the following legal grounds to process information
          about you: (i) where we have your consent, (ii) where we have a legitimate interest to do
          so, (iii) where the processing is necessary for the performance of a contract with you,
          and (iv) where we need to comply with a legal or regulatory obligation.`}
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>2. Information We Collect That You Choose To Provide To Us</SectionTitle>
        <Paragraph>
          {`We collect information that you choose to provide to us, for example, when you create an
          account, manage your user profile, participate in any interactive features of the Dialect
          Platform, request our e-newsletter or other marketing communications, participate in a
          promotion or survey, request customer support or otherwise communicate with us. The type
          of information we may collect includes your name, user name, country, telephone number,
          email address, postal address, photograph, avatar, password, security questions and
          answers, details about our products you use, details you provide in respond to surveys
          about our products, information you provide when seeking help from us, billing
          information, payment card number and account details, forum posts and comments and other
          contact or identifying information you choose to provide directly.`}
        </Paragraph>
        <Paragraph>
          For your information, the Company has collected, both directly and through third parties,
          the following categories of personal information about consumers during the preceding
          twelve (12) month period:
        </Paragraph>
        <ul>
          <li>
            <PStyle>
              Identifiers, such as a real name, postal address, Internet Protocol address, account
              name, or other similar identifier;
            </PStyle>
          </li>
          <li>
            <PStyle>
              Audio, electronic, visual, thermal, olfactory, or other similar information of a
              livingperson;
            </PStyle>
          </li>
          <li>
            <PStyle>Professional or employment-related information</PStyle>
          </li>
          <li>
            <PStyle>Education information</PStyle>
          </li>
        </ul>
      </Section>
      <Section>
        <SectionTitle>
          3. What Information We Collect Automatically When You Use the Dialect Platform
        </SectionTitle>
        <Paragraph>We automatically collect information about you including:</Paragraph>
        <Paragraph>
          Device Information. We collect device-specific information when you access the Dialect
          Platform from a computer, mobile, and/or other device, including your hardware model,
          operating system and version, unique device identifiers, mobile network information,
          country of access, crash reports, request and referral URL’s and system activity details.
        </Paragraph>
        <Paragraph>
          Software Information. We collect software-specific information about your use of the
          Dialect Platform, such as which version of our software and what updates you have
          installed or use, and the presence of required plug ins.
        </Paragraph>
        <Paragraph>
          Use Information. We collect information about your use of the Dialect Platform, including
          the type of browser you use, the language you prefer, access times, pages viewed, user
          activity, interactions with other users, your internet protocol address and the page you
          visited before navigating to the Dialect Platform.
        </Paragraph>
        <Paragraph>
          Information Collected by Cookies and Other Tracking Technologies. We use various
          technologies to collect information, and this may include sending cookies, web beacons,
          Flash Cookies (as defined below), or other tracking technologies.
        </Paragraph>
        <ul>
          <li>
            <PStyle>
              Cookies. Cookies are small data files stored on your hard drive or in device memory
              that helps us to improve the Dialect Platform and your experience, see which areas and
              features of the Dialect Platform are popular and count visits. For more information
              about cookies, and how to disable them, please see Section 11 (Your Choices and
              Controls) below.
            </PStyle>
          </li>
          <li>
            <PStyle>
              {`Web Beacons. We may also collect information using web beacons (also known as
              "tracking pixels"). Web beacons are electronic images that may be used in the Dialect
              Platform or emails and help deliver cookies, count visits, understand usage and
              campaign effectiveness and determine whether an email has been opened and acted upon.`}
            </PStyle>
          </li>
        </ul>
      </Section>
      <Section>
        <SectionTitle>4. Information Provided to Us by Third Parties</SectionTitle>
        <Paragraph>
          In addition to the information that we collect directly from you, we also collect certain
          of your information from following third party sources.
        </Paragraph>
        <Paragraph>
          App Stores or Distribution Channels. The Dialect Platform that are distributed through app
          stores or distribution channels, such as the Apple App Store, Google Play and other
          Chinese Android app store, may also request permission to automatically collect other
          information from your mobile or other device. The Dialect Platform may only collect such
          information with your authorization in accordance with your device operating system’s
          permission process.
        </Paragraph>
        Apple App Store. The Dialect Platform that is distributed through the Apple App Store may
        also request permission to automatically collect other information from your mobile or other
        device. The Apple App Store may collect information regarding customer activity on the Apple
        App Store and aggregate that information to understand which part of Apple’s services are of
        most interest to you. More information on Apple’s privacy policy can be found here. We may
        only collect such information with your authorization in accordance with your device
        operating system’s permission process.
        <Paragraph>
          Google Play. The Dialect Platform that are distributed through Google Play may also
          request permission to automatically collect other information from your mobile or other
          device. Google Play may collect device-specific information to help the user decide on
          which devices the user would like purchases to be available for use. In mobile
          applications, Google Play may use identifiers specific to your device to serve you more
          relevant advertisements. More information on Google’s privacy policy can be found here.
          The Dialect Platform may only collect such information with your authorization in
          accordance with your device operating system’s permission process.
        </Paragraph>
        Mobile Platforms. If you use or access the Dialect Platform on your mobile device and/or
        tablet, we receive information about you from the app stores and other mobile platform
        providers. This information includes your username and/or device ID and the fact that you
        made a purchase, for instance, but does not include any sensitive or financial information.
        Some of our mobile platforms also may send information to us that you authorize them to
        provide. Our mobile products also may request additional personal information from you, such
        as push notification tokens, your precise location or contact list, and we will collect this
        information only if you give us your explicit consent.
        <Paragraph>
          Third Party Services and User Information. We may allow third parties to serve
          advertisements in connection with the Dialect Platform, to provide analytics services and
          provide you with other services, such as social media, rewards programs and tournaments.
          These third parties may use cookies, web beacons and other technologies to collect
          information about you on the Dialect Platform and other websites and online services, such
          as your name, profile picture, email address, your internet protocol addresses,
          identifiers associated with your mobile device or applications on the device, pages
          viewed, time spent on pages, links clicked and conversion information. Some of such third
          party analytics and advertising services may offer you a choice to opt-out of the
          collection and/or sharing of this information. This Privacy Policy does not apply to and
          we are not responsible for, third party cookies, web beacons or other tracking
          technologies. In addition, we may also receive information about you when other users
          choose to share their contact lists with us. For example, (i) if you create or log into
          your account through a social media site (such as Facebook and Wechat), we might have
          access to certain information from that site, such as your name, profile picture, phone
          number and/or email address in accordance with the authorization procedures determined by
          such social media site; and (ii) our services utilize the YouTube application programming
          interfacing services (API Services) as a third party services, and you are agreeing to be
          bound by the YouTube’s Terms of Service(https://www.youtube.com/t/terms) and Privacy
          Policy(http://www.google.com/policies/privacy), and API Services Terms of
          Service(https://developers.google.com/youtube/terms/api-services-terms-of-service) when
          engaging YouTube content and services through our service.
        </Paragraph>
        <Paragraph>
          We have identified the provider names of some of the third-party analytics and advertising
          services we use. We take no responsibility for the content or privacy practices of any
          third party services. We encourage you to carefully review the privacy policies of any
          third party services you access. Please see the links below to learn more about the data
          practices of our third-party service providers:
        </Paragraph>
        <ul>
          <li>
            <PStyle>Google Analytic: google.com/analytics</PStyle>
          </li>
        </ul>
      </Section>
      <Section>
        <SectionTitle>5. How We Use Your Information</SectionTitle>
        <Paragraph>We may use information about you for various purposes, including to:</Paragraph>
        <ul>
          <li>
            <PStyle>Provide, maintain and improve the Dialect Platform</PStyle>
          </li>
          <li>
            <PStyle>
              Provide and deliver the products and/or services you order and send you related
              information, including confirmations and invoices
            </PStyle>
          </li>
          <li>
            <PStyle>
              Send you communications about products, services, offers, promotions, rewards or
              events offered by us and other companies and provide news and information we think
              will be of interest to you
            </PStyle>
          </li>
          <li>
            <PStyle>
              Send you technical notices, updates, security alerts and support and administrative
              messages
            </PStyle>
          </li>
          <li>
            <PStyle>
              Respond to your comments, questions, requests and provide customer service
            </PStyle>
          </li>
          <li>
            <PStyle>
              Monitor and analyze trends, usage and activities in connection with the Dialect
              Platform
            </PStyle>
          </li>
          <li>
            <PStyle>
              Personalize and improve the Dialect Platform and provide advertisements, content,
              suggested connections and features that match user profiles or activities
            </PStyle>
          </li>
          <li>
            <PStyle>Process and deliver contest entries and rewards</PStyle>
          </li>
          <li>
            <PStyle>
              Link or combine with information we receive from others to help understand your needs
              and provide you with better service.
            </PStyle>
          </li>
        </ul>
        <Paragraph>
          We retain your data only for as long as necessary to provide the service you have
          requested and thereafter for a variety of legitimate legal or business purposes. These
          might include retention periods: (i) mandated by law, contract or similar obligations
          applicable to our business operations; (ii) for preserving, resolving, defending or
          enforcing our legal/contractual rights; or (iii) needed to maintain adequate and accurate
          business and financial records.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>6. What Kinds of Information We Share</SectionTitle>
        <Paragraph>
          We will share personal information outside of the Company when we have your consent. We’ll
          ask for your explicit consent to share any sensitive personal information. We do not share
          your personal information with companies, organizations, or individuals outside of the
          Company except the following cases:
        </Paragraph>
        <ul>
          <li>
            <PStyle>
              With vendors, consultants and other service providers who need access to such
              information to carry out work on our behalf, based on our instructions and in
              compliance with our Privacy Policy and other appropriate confidentiality and security
              measures;
            </PStyle>
          </li>
          <li>
            <PStyle>
              With the Teacher of Dialect Platform in connection with providing Teaching Services to
              the Students;
            </PStyle>
          </li>
          <li>
            <PStyle>
              With other users of Dialect Platform in connection with the social features of the
              Dialect Platform (for example, your username and profile picture, you have accumulated
              in the Dialect Platform that may be visible to other users of the Dialect Platform, or
              information that you provide in your account registration for forum use and your forum
              comments may be visible to other forum users);
            </PStyle>
          </li>
          <li>
            <PStyle>
              In response to a request for information if we believe disclosure is required by or
              otherwise in accordance with any applicable law, regulation or legal process;
            </PStyle>
          </li>
          <li>
            <PStyle>To protect the rights, property and safety of the Company or others;</PStyle>
          </li>
          <li>
            <PStyle>
              Subject to applicable laws, in connection with any merger, sale of company assets or
              acquisition of all or a portion of our business;
            </PStyle>
          </li>
          <li>
            <PStyle>
              With your consent or at your direction, including if we notify you through the Dialect
              Platform that the information you provide will be shared in a particular manner and
              you provide such information.
            </PStyle>
          </li>
        </ul>
        <Paragraph>
          For your information, the Company has disclosed to third parties or service providers for
          business purposes the following categories of personal information about consumers during
          the preceding twelve (12) month period:
        </Paragraph>

        <ul>
          <li>
            <PStyle>
              Identifiers, such as an Internet Protocol address, account name, or other similar
              identifier;
            </PStyle>
          </li>
          <li>
            <PStyle>
              Audio, electronic, visual, thermal, olfactory, or other similar information;
            </PStyle>
          </li>
          <li>
            <PStyle>Professional or employment-related information;</PStyle>
          </li>
          <li>
            <PStyle>Education information;</PStyle>
          </li>
          <li>
            <PStyle>
              Consumer profiles based on inferences drawn from the information provided above.
            </PStyle>
          </li>
        </ul>
        <Paragraph>
          We do not sell any personal information about consumers. We may also share aggregated or
          de-identified information, which cannot reasonably be used to identify you. When we
          provide this information, we perform appropriate procedures so that the information does
          not identify you and we contractually prohibit recipients of the data from re-identifying
          this information to associate the information with you.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>
          7. Ways You Might Share Your Information through the Dialect Platform
        </SectionTitle>
        <Paragraph>
          {`The Dialect Platform may offer social sharing features and other integrated tools (such as
          the Facebook or Twitter "Like" button and WeChat "Moments" feature), which let you share
          actions you take on the Dialect Platform with other media, and vice versa. The use of such
          features enables the sharing of information with your friends or the public, depending on
          the settings you establish with the entity that provides the social sharing feature. For
          more information about the purpose and scope of data collection and processing in
          connection with social sharing features, please visit the privacy policies of the entities
          that provide such features.`}
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>8. How We Keep Your Information Safe</SectionTitle>
        <Paragraph>
          {`We take commercially reasonable security measures to help protect information we collect
          about you from loss, theft, misuse, unauthorized access, disclosure, alteration and
          destruction. These security measures may include practices such as keeping your sensitive
          data on a secured server behind a firewall, and transmitting sensitive information (such
          as a credit card number) entered while using the Dialect Platform using secure socket layer
          technology ("SSL").Unfortunately, however, no security system is 100% secure, and we
          cannot guarantee that the information we collect from you will be free from unauthorized
          access by third parties. Unauthorized entry or use, hardware or software failure and other
          factors may compromise the security of user information. Your password is an important
          component of our security system, and as a result it is your responsibility to protect
          your password. Do not share your password with any third parties. If your password has
          been compromised for any reason, you should change your password immediately.`}
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>9. Where We Store Your Information</SectionTitle>
        <Paragraph>
          Your information we collect may be stored and processed for the purposes set out in this
          Privacy Policy in the United State, Spain or any other country in which the Company, its
          subsidiaries, or third party agents operate. If you are a resident of the EEA, we may
          transfer your information to affiliated entities or third parties to jurisdictions outside
          the EEA. Please note that these countries outside of the EEA may not have the same data
          protection laws as your own jurisdiction. We take steps to ensure that there are adequate
          safeguards and mechanisms in place to allow the transfer of your information across
          borders outside of the EEA.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>10. Our Policies Regarding Children</SectionTitle>
        <Paragraph>
          {`The Dialect Platform is not intended for children under the age of eighteen (18) (the
          "Child" or "Children"), and we do not knowingly collect any personal information from such
          Children. Children should not use or attempt to use the Dialect Platform, and if you are
          Children, please do not attempt to use the Dialect Platform or send any information about
          yourself to the Company.`}
        </Paragraph>
        <Paragraph>
          In the event that we learn that we have inadvertently gathered personal information from a
          Child, we will take reasonable measures to delete such information from our records.
          Parents who believe that we might have gathered any information from or about a Child may
          submit a request to delete such information to write to our address listed in Section 13
          (Contact Us) below.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>11. Your Choices and Controls</SectionTitle>
        <Paragraph>
          {`We give you meaningful choices when it comes to important uses and collection of your
          information. To easily access, view, update, correct, delete or port your personal data,
          or to update your subscription preferences, please sign into your account and visit
          "Account Settings". Where we rely on consent to collect and use information about you, you
          can withdraw your consent at any time. If you make a request to delete your personal data
          and that data is necessary for the products or services you have purchased, the request
          will be honored only to the extent it is no longer necessary for any of the Dialect
          Platform purchased or required for our legitimate business purposes or legal or
          contractual record keeping requirements.`}
        </Paragraph>
        <Paragraph>
          Cookies. Most web browsers are set to accept cookies by default. If you prefer, you can
          usually choose to set your browser to remove or reject browser cookies. Please note that
          if you choose to remove or reject cookies, this could affect the availability and
          functionality of the Dialect Platform.
        </Paragraph>
        <Paragraph>
          {`Push Notifications. We may send push notifications or "alerts" to your device to provide
          information regarding the Dialect Platform, service updates, promotional communications and
          other related messages. You can deactivate push notifications by changing your
          notification settings via your device.`}
        </Paragraph>
        <Paragraph>
          Promotional Communications. You may opt-out of receiving promotional messages from us by
          following the instructions in those messages. If you opt out, we may still send you
          administrative, transactional, or relationship messages, such as those about your account
          or our ongoing business relations including but not limited to administrative
          confirmations, order confirmations, important updates regarding the Dialect Platform and
          notices regarding this Privacy Policy and our Dialect Terms.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>12. How We Respond to Do Not Track Signals</SectionTitle>
        <Paragraph>
          Because consumers are often unaware that their do not track beacons are active, do not
          track frequently does not reflect the actual preferences of our users. We currently do not
          respond to Do Not Track signals. In the meantime, you may opt out of certain types of
          tracking, including certain analytics and tailored advertising by changing your cookie
          settings.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>13. Contact Us</SectionTitle>
        <Paragraph>
          If you have any questions about this Privacy Policy, please contact us as follows:
        </Paragraph>
        <ul>
          <li>
            <PStyle>Online Support: https://support.Dialect.com</PStyle>
          </li>
          <li>
            <PStyle>Email: support@Dialect.com</PStyle>
          </li>
        </ul>
      </Section>
      <Section>
        <SectionTitle>14. Right to Contact a Data Protection Authority</SectionTitle>
        <Paragraph>
          If you have a concern about how we collect and use information, please contact us. You
          also have the right to contact your local Data Protection Authority. Contact details for
          Data Protection Authorities in the EEA are available
          {' '}
          <a href="https://ec.europa.eu/info/law/law-topic/data-protection/data-protection-eu_en">
            here
          </a>
          .
        </Paragraph>
      </Section>
    </Wrapper>
  </Container>
)

export default Content
