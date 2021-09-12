/* eslint-disable max-len */
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

const SectionSub = styled.p`
  font-size: 1.4em;
  font-weight: 500;
  margin-bottom: 8px;
  margin-top: 8px;
`

const Content = () => (
  <Container>
    <Wrapper>
      <Hero>
        <HeroSubtitle>LAST UPDATED 9/10/21</HeroSubtitle>
        <HeroTitle>Terms of Service</HeroTitle>
      </Hero>
      <Section>
        <Paragraph>
          {`Please read these Dialect Terms of Service (the "Dialect Terms" or "Dialect Terms of
          Service") carefully as they govern (i) your access to and use of our Sites, (ii) your
          access to and use of our Applications, or (iii) your access to and use of our services
          that link to or reference these Dialect Terms, and contain important information about your
          legal rights, remedies and obligations. The Site, Application and other Dialect services
          together are hereinafter collectively referred to as the "Dialect Platform". By accessing
          or using the Dialect Platform, you are agreeing to these Dialect Terms and concluding a
          legally binding contract with Dialect, whether or not you become a registered user of the
          Dialect Platform. Certain areas of the Dialect Platform may have different terms and
          conditions, standards, guidelines, or policies posted or may require you to agree with and
          accept additional terms and conditions. If there is a conflict between these Dialect Terms
          and the terms and conditions posted for a specific area of the Dialect Platform, the terms
          and conditions that are specific to that area will take precedence with respect to your
          use of, or access to, that area of the Dialect Platform.`}
        </Paragraph>
        <Paragraph>
          {`You may be referred to in this Dialect Terms as "you" or "your", or may be referred to
          specifically in your applicable role as a Company or an Authorized User (each as defined
          below). If you are entering into this Dialect Terms on behalf of a company or other legal
          entity (such company or legal entity, the "Company"), this Dialect Terms shall be a binding
          agreement between Dialect and the Company that you represent, and you represent that you
          have the authority to bind such Company, its users, and its affiliates to this Dialect
          Terms. In that case, the terms "you" or "your" shall also refer to such entity, its users,
          and its affiliates, as applicable. If you do not have such authority, or if you do not
          agree with this Dialect Terms, you may not use the Service. If you are entering into this
          Dialect Terms as an individual and not on behalf of a company or other legal entity, this
          Dialect Terms shall be a binding agreement between Dialect and you personally. You
          acknowledge that this Dialect terms is a contract between you and Dialect, even though it is
          electronic and is not physically signed by you and Dialect, and it governs your use of the
          Service.`}
        </Paragraph>
        <Paragraph>
          {`You represent that you have read and understood our privacy policy ("Privacy Policy"),
          which is available at https://www.dialect.so/privacy. Note that we may disclose
          information about you to third parties if we have a good faith belief that such a
          disclosure is reasonably necessary to (i) take action regarding suspected illegal
          activities; (ii) enforce or apply Dialect Terms or other Dialect Policies (as defined
          below); (iii) comply with legal process or other government inquiry, such as a search
          warrant, subpoena, statute, judicial proceeding or other legal process served on us; or
          (iv) protect our rights, reputation, and property or that of our users, affiliates or the
          public.`}
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>1. Definitions</SectionTitle>
        <Paragraph>
          {`"Applications" means the applications for mobile, tablet, and other smart devices and
          application program interfaces provided by Dialect, including but not limited to the mobile
          application entitled as "Dialect".`}
        </Paragraph>
        <Paragraph>
          {`"Dialect", "we", "us", or "our" means (i) Dialect Technology Inc., with respect to Members that
          access and use of the Dialect Service`}
        </Paragraph>
        <Paragraph>
          {`"Dialect Content" means any content that Dialect creates and makes available in connection
          with the Dialect Platform, including proprietary Dialect content and any content licensed or
          authorized for use by or through Dialect from a third party, but excluding Member Content.`}
        </Paragraph>
        <Paragraph>
          {`"Dialect Product" means the Application(s) of "Dialect", the Site "www.dialect.so" and any
          website operated by Dialect HK Limited.`}
        </Paragraph>
        <Paragraph>
          {`"Member Content" means all content, such as text, photos, audio, video, or other materials
          and information, that a Member posts, uploads, publishes, submits, transmits, includes in
          their Member profile.`}
        </Paragraph>
        <Paragraph>
          "Sites" means Dialect’s websites, including but not limited to www.dialect.so
        </Paragraph>
        <Paragraph>"Student" means a Member that purchases Teacher Services.</Paragraph>
        <Paragraph>"Teacher" means a Member that offers and delivers Teacher Services.</Paragraph>
        <Paragraph>
          {`"Teacher Services" means all services delivered by Teachers as described in the Teacher
          Policy, including but not limited to paid lessons, packages and other services rendered
          where Dialect Credits (as defined in Payment Policy) are exchanged.`}
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>2. Relationship</SectionTitle>
        <Paragraph>
          The Dialect Platform is an online venue for language learning where registered users
          ("Members") may use our Connection Services and Payment Services to directly interact with
          one another. You understand and agree that Dialect is not a party to any agreements
          entered into between Students and Teachers or between Members, nor is Dialect a language
          services broker or agent. Dialect has no control over the conduct of Students, Teachers,
          Members or other users of the Dialect Platform or over any services provided by Teachers
          or other Members over the Dialect Platform, and disclaims all liability in this regard to
          the maximum extent permitted by law.
        </Paragraph>
        <Paragraph>
          If you choose to teach on the Dialect Platform, you understand and agree that your
          relationship with Dialect is limited to being a Member and an independent, third-party
          contractor, and not an employee, agent, joint venturer or partner of Dialect for any
          reason, and you act exclusively on your own behalf and for your own benefit, and not on
          behalf of or for the benefit of Dialect. Dialect does not control, and has no right to
          control, your listing, your activities associated with your profile or listed services, or
          any other matters related to any services that you provide. As a Member you agree not to
          do anything to create a false impression that you are endorsed by, partnering with, or
          acting on behalf of or for the benefit of Dialect, including by using any Dialect
          intellectual property in an unauthorized or in appropriate manner.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>3. Modification</SectionTitle>
        <Paragraph>
          Dialect reserves the right, at its sole discretion, to modify the Dialect Platform and to
          modify these Dialect Terms, at any time and without prior notice. If we modify these
          Dialect Terms, we will either post the modification on the Sites and the Applications or
          otherwise provide you with notice of the modification. We will also update the "Last
          Updated" date at the top of these Dialect Terms. By continuing to access or use the
          Dialect Platform after we have posted a modification on the Sites and the Applications or
          have provided you with notice of a modification, you are indicating that you agree to be
          bound by the modified Dialect Terms. If the modified Dialect Terms are not acceptable to
          you, your only recourse is to cease using the Dialect Platform.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>4. Eligibility</SectionTitle>
        <Paragraph>
          The Dialect Platform is available only to, and may only be used by, individuals who are 18
          years and older who can form legally binding contracts under applicable law.
        </Paragraph>
        <Paragraph>
          WHILE WE USE GOOD FAITH EFFORTS TO CONFIRM THAT EACH TEACHER ON THE Dialect PLATFORM IS
          PROFESSIONAL, WE ARE NOT ABLE TO PROVIDE ANY ASSURANCES REGARDING THE CHARACTER OR OTHER
          QUALITIES OF TEACHERS AND THE ACCURACY OF THE INFORMATION TEACHERS PROVIDE VIA THE Dialect
          PLATFORM. WHEN INTERACTING WITH OTHER MEMBERS YOU SHOULD EXERCISE CAUTION AND COMMON SENSE
          TO PROTECT YOUR PERSONAL SAFETY AND PROPERTY, JUST AS YOU WOULD WHEN INTERACTING WITH
          OTHER PERSONS WHOM YOU DON’T KNOW. NEITHER Dialect NOR ITS AFFILIATES OR LICENSORS IS
          RESPONSIBLE FOR THE CONDUCT, WHETHER ONLINE OR OFFLINE, OF ANY MEMBERS OF THE Dialect
          PLATFORM. Dialect AND ITS AFFILIATES AND LICENSORS WILL NOT BE LIABLE FOR ANY CLAIM,
          INJURY OR DAMAGE ARISING IN CONNECTION WITH YOUR USE OF THE Dialect PLATFORM.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>5. Description of Services</SectionTitle>
        <SectionSub>5.1 Dialect Services</SectionSub>
        <Paragraph>Dialect’s services includes:</Paragraph>
        <ol>
          <li>
            <PStyle>
              Connection Services. Dialect provides Members with access to and use of the Dialect
              Platform, which is an online venue where (a) Members can upload, submit, store, send
              and receive content related to language learning; (b) Members can conduct searches,
              connect with, choose, and engage each other for the purposes of language learning and
              instant language practice; (c) Students can conduct searches, connect with, choose,
              and engage Teachers directly for language instruction and Teacher Services; (d)
              Teachers can advertise their capabilities, respond to inquiries, connect with and
              engage Students to provide them with their Teacher Services (collectively, "Connection
              Services"). For the avoidance of doubt, in providing the Connection Services, Dialect
              only provides the venue for Members, including Students and Teachers, to find and
              contract with each other, and Dialect does not take part in direct interactions
              between Members.
            </PStyle>
          </li>
          <li>
            <PStyle>
              Payment Services. For Students and Teachers, Dialect also provides certain payment
              processing services, credit purchase and payment tools, dispute resolution procedures
              and assistance, and other services in accordance with Dialect’s Payment Policy
              (collectively, "Payment Services"). Payment Services do not include Connection
              Services.
            </PStyle>
          </li>
          <li>
            <PStyle>
              Business Services. If a Member is a Company, such Member may authorize additional
              individuals and/or their employees (the "Employees") to use of the Dialect Platform,
              including but not limited to the Connection Services and Payment Services. The Company
              may (i) track Employees’ completed lessons, (ii) add or remove any Employees from
              access to or the use of Dialect Platform, (iii) control, refill or shift their Dialect
              credits balances within such Company’s Dialect Account (as defined below). The Company
              may also review the Employees’ language learning performance report through its
              Dialect Account. For the avoidance of doubt, an Employee shall be considered as a
              "Student".
            </PStyle>
          </li>
        </ol>
        <SectionSub>5.2 Teacher Services</SectionSub>
        <Paragraph>
          Teachers may provide certain Teacher Services through the Dialect Platform. If you are
          accepted to be a Teacher, you agree to Dialect's Teacher Policy. All Members hereby
          acknowledge that the Teacher Services are solely provided by Teachers and are not provided
          by Dialect. Dialect’s responsibility with respect to Teacher Services is limited to
          facilitating the availability of the Dialect Platform.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>Dialect Account</SectionTitle>
        <SectionSub>6.1 Account Registration</SectionSub>
        <Paragraph>
          "Dialect Content" means any content that Dialect creates and makes available in connection
          with the Dialect Platform, including proprietary Dialect content and any content licensed
          or authorized for use by or through Dialect from a third party, but excluding Member
          Content.
        </Paragraph>
        <Paragraph>
          Your Dialect Account is for personal, non-commercial use only, provided that, if you are
          creating an Dialect Account on behalf of a Company, you may authorize their Employees to
          use of the Dialect Platform. To create an Dialect Account, you must be eligible to use the
          Dialect Platform for which you are registering, be a resident of a country where use of
          the Dialect Platform is permitted, have a valid email address, have a valid mobile phone
          number (if applicable) and provide truthful and accurate information. You may not
          impersonate someone else, provide an email address or mobile phone number other than your
          own or create multiple Dialect Accounts. You may choose to show a pseudonym to other
          Members, but please remember that others may still be able to identify you if, for
          example, you include identifying information during your use of the Dialect Platform, use
          the same Dialect Account information on other sites or allow other sites to share
          information about you with us. Please read our Privacy Policy for more information.
        </Paragraph>
        <Paragraph>
          In addition, to create an Dialect Account, Dialect may require you to select a username
          and password. You acknowledge that you shall be responsible for ensuring that any username
          you select does not infringe any third-party rights and is not otherwise unlawful. Dialect
          may refuse to grant you a username in Dialect’s sole discretion for any reason including
          if the proposed username impersonates or misleadingly implies an association with the
          persona of another person or entity, is or may be illegal, is or may be protected by
          trademark or other proprietary rights, is vulgar or otherwise offensive, or may cause
          confusion, or for any other reason as determined by Dialect in Dialect’s sole discretion.
          Your selection and use of a specific username do not convey any ownership or rights in
          that username and Dialect reserves the right to revoke and/or reassign that username in
          Dialect’s sole discretion. You understand and agree that Dialect reserves the right to
          change, remove, alter or delete any username, with or without prior notice to you, at any
          time and for any reason in Dialect’s sole discretion. YOU ARE ENTIRELY RESPONSIBLE FOR
          MAINTAINING THE CONFIDENTIALITY OF YOUR USERNAME AND PASSWORD AND ALL ACCESS TO AND USE OF
          YOUR Dialect ACCOUNT, INCLUDING ANY AND ALL ACTIVITIES (INCLUDING USE OF THE Dialect
          PLATFORM, AS APPLICABLE) THAT ARE CONDUCTED THROUGH THE USE OF YOUR USERNAME AND PASSWORD
          WHETHER OR NOT AUTHORIZED BY YOU. YOUR Dialect ACCOUNT MAY BE SUSPENDED OR TERMINATED IF
          SOMEONE ELSE USES YOUR Dialect ACCOUNT TO ENGAGE IN ACTIVITY THAT VIOLATES THESE Dialect
          TERMS.
        </Paragraph>
        <Paragraph>
          You agree to notify Dialect immediately of any unauthorized use of your Dialect Account.
          We reserve the right to close your Dialect Account at any time if you violate these
          Dialect Terms or if we otherwise have a legitimate interest to do so, such as complying
          with a legal or regulatory obligation.
        </Paragraph>
        <SectionSub>6.2 Third-Party Account</SectionSub>
        <Paragraph>"Teacher" means a Member that offers and delivers Teacher Services.</Paragraph>
        <SectionSub>6.3 Link your Dialect Account with Third-Party Account</SectionSub>
        <Paragraph>
          As part of the functionality of the Dialect Platform, you may link your Dialect Account
          with Third-Party Accounts, by either: (i) providing your Third-Party Account login
          information to Dialect through the Dialect Platform; or (ii) allowing Dialect to access
          your Third-Party Account, as permitted under the applicable terms and conditions that
          govern your use of such Third-Party Account. You represent that you are entitled to
          disclose your Third-Party Account login information to Dialect and/or grant Dialect access
          to your Third-Party Account (including, but not limited to, for use by Dialect for the
          purposes described herein), without breach by you of any of the terms and conditions that
          govern your use of the applicable Third-Party Account and without obligating Dialect to
          pay any fees or making Dialect subject to any usage limitations imposed by such
          third-party service providers. By granting Dialect access to any Third-Party Accounts, you
          understand that Dialect will access, make available and store (if applicable) any content
          that you have provided to and stored in your Third-Party Account ("SNS Content") so that
          it is available on and through the Dialect Platform via your Dialect Account and Dialect
          Account profile page. Unless otherwise specified in these Dialect Terms, all SNS Content,
          if any, will be considered to be Member Content for all purposes of these Dialect Terms.
        </Paragraph>
        <Paragraph>
          If you choose to link Third-Party Accounts with your Dialect Account, subject to the
          privacy settings that you have selected at such Third-Party Accounts, some of the
          information that you provided to us from the linking of your Third-Party Accounts might be
          available on and through the Dialect Platform via your Dialect Account and Dialect Account
          profile page. You have the ability to disable the connection between your Dialect Account
          and your Third-Party Accounts at any time by accessing the "Settings" section of the Sites
          or Applications. If you disable the connection between your Dialect Account and your Third
          Party Accounts, then SNS Content from that Third Party Account will no longer be available
          on and through the Dialect Platform, and you will no longer be able to access your Dialect
          Account through such Third Party Account.
        </Paragraph>
        <Paragraph>
          PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH
          YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY
          SERVICE PROVIDERS. Dialect makes no effort to review any SNS Content for any purpose,
          including but not limited to for accuracy, legality or non-infringement and Dialect is not
          responsible for any SNS Content.
        </Paragraph>
        <Paragraph>
          Your Dialect Account and your Dialect Account profile page will be created for your use of
          the Dialect Platform based upon the information you provide to us or that we obtain
          through a Third-Party Account that you link with your Dialect Account as described above.
        </Paragraph>
        <SectionSub>6.4 Link to a Company</SectionSub>
        <Paragraph>
          If you are an Employee of a Company, during the registration process, you may identify a
          Company with whom your profile and Dialect Account is associated. Alternately, your
          individual profile may have been created by an authorized representative of the Company,
          and your profile and Dialect Account will be associated with such Company. If your Dialect
          Credits, Teacher Services and Payment Services are provided or scheduled by a Company, you
          may lose access to such Dialect Credits, Teacher Services and Payment Services upon
          termination or change in status of your relationship with such Company. If you are an
          authorized representative of an entity receiving the Services, you hereby warrant and
          represent to us that (a) you have the proper authority to create, terminate and maintain
          the company account and to add and remove individual members to and from the account and
          (b) you have obtained all necessary consent from any applicable individuals for the
          creation of their accounts and the processing of individual information. You agree to
          indemnify us for any loss we may suffer as a result of any breach of these warranties and
          representations.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>7. Virtual Currency of Dialect Product</SectionTitle>
        <SectionSub>7.1 Virtual Currency License</SectionSub>
        <Paragraph>
          You acknowledge that the Dialect Product may include a component of virtual credits or
          currency called "Tokens" ("Virtual Currency"). The Virtual Currency may only be used
          within the Dialect Product in exchange for the service times of the Dialect Product.
          Regardless of the terminology used, Virtual Currency represents a limited license right
          governed solely under these Dialect Terms, and are not redeemable for any sum of money or
          monetary value from Dialect or any other person or entity at any time. Virtual Currency
          provided by Dialect include only a limited license right to use such Virtual Currency.
          Other than a limited, personal, revocable, non-transferable, non-sublicensable license to
          use Virtual Currency on and in the Dialect Product, you agree that you have no right,
          title or ownership in or to any such Virtual Currency. YOU ACKNOWLEDGE AND AGREE THAT
          VIRTUAL CURRENCY HAS NO CASH VALUE AND THAT NEITHER Dialect NOR ANY OTHER PERSON OR ENTITY
          HAS ANY OBLIGATION TO EXCHANGE YOUR VIRTUAL CURRENCY FOR ANYTHING OF VALUE, INCLUDING
          WITHOUT LIMITATION, REAL CURRENCY, AND THAT, IF YOUR Dialect ACCOUNT IS TERMINATED,
          SUSPENDED OR OTHERWISE MODIFIED OR IF YOUR RIGHT TO ACCESS The Dialect PRODUCT IS
          TERMINATED, THE VIRTUAL CURRENCY AND YOUR Dialect ACCOUNT SHALL HAVE NO VALUE.
        </Paragraph>
        <SectionSub>7.2 Virtual Currency Fees</SectionSub>
        <Paragraph>
          We reserve the right to charge fees for the right to access or use Virtual Currency,
          and/or may distribute Virtual Currency without charge, in our sole discretion. You
          acknowledge and agree that we may revise or take action that impacts the perceived value
          of, or pricing for, any Virtual Currency at any time except to the extent that we agree
          otherwise in writing. Virtual Currency will expire after 24 months of non-use of your
          Dialect Account.
        </Paragraph>
        <SectionSub>
          7.3 Managing Your Virtual Currency. All purchases of Virtual Currency are final and under
          no circumstances will be refundable, transferable or exchangeable
        </SectionSub>
        <Paragraph>
          By purchasing Virtual Currency, you are confirming that you want the Virtual Currency
          immediately credited to your Dialect Account and that by doing so you lose any
          cancellation rights under applicable laws.
        </Paragraph>
        <Paragraph>
          We have the absolute right to manage, regulate, control, modify and/or eliminate such
          Virtual Currency as we see fit in our sole discretion, and we shall have no liability to
          you or anyone else for the exercise of such rights. For example, Virtual Currency will be
          lost, deleted from your Dialect Account or forfeited when/if your Dialect Account is
          terminated, suspended or closed for any reason or when we discontinue any or all of the
          Dialect Product, including without limitation any services provided or offered through
          third party platforms.
        </Paragraph>
        <Paragraph>
          We reserve the right, in our sole discretion, to make all calculations regarding the
          balance of Virtual Currency in your Dialect Account. We further reserve the right, in our
          sole discretion, to determine the amount of Virtual Currency that is credited and debited
          from your Dialect Account in connection with your use of the Dialect Product. While we
          strive to make all such calculations on a consistent and reasonable basis, you hereby
          acknowledge and agree that our determination of the amount of Virtual Currency in your
          Dialect Account is final, unless you can provide documentation to us that such calculation
          was or is intentionally incorrect.
        </Paragraph>
        <SectionSub>7.4 Transfers of Virtual Currency; Unauthorized Transactions</SectionSub>
        <Paragraph>
          Any unauthorized transferring, trading, selling or exchanging of any Virtual Currency or
          Dialect Accounts ("Unauthorized Transactions") with anyone, including with other users of
          the Dialect Product, is not sanctioned by us and is strictly forbidden. All Members who
          participate in such activities do so at their own risk and hereby agree to indemnify
          Dialect against any and all consequences resulting from such actions. You acknowledge that
          Dialect may stop, suspend, terminate, discontinue or reverse any Unauthorized Transactions
          when Dialect suspects or has evidence of fraud, violations of these Dialect Terms,
          violations of any other applicable law or regulation or any intentional act designed to
          interfere at all with the normal operation of the Services. You further agree that Dialect
          may, in Dialect’s sole discretion, reverse any transaction if such reversal is in
          Dialect’s best interest, or may debit your balance of Virtual Currency, including without
          limitation, taking actions, which may cause your balance to be zero and/or a negative
          amount. Dialect may, in Dialect’s sole discretion, terminate, suspend or modify your
          Dialect Account if you engage or assist in any Unauthorized Transactions. Verification of
          certain information applicable to a transaction involving Virtual Currency may be required
          prior to our acceptance thereof. In addition, as a condition to receiving certain Virtual
          Currency or other awards for participating in promotions, giveaways, contests or
          sweepstakes, you may be required to provide additional information about yourself in our
          marketing materials. You acknowledge and agree that Dialect shall have no liability for
          the use or loss of such information and/or Virtual Currency due to any unauthorized third
          party activity, such as hacking, phishing, password mining, social engineering and/or any
          other unauthorized third party or other user’s activity. Dialect may replace such lost
          Virtual Currency under certain circumstances, at Dialect’s sole discretion on a
          case-by-case basis, without incurring any obligation or liability. You may be required to
          provide the Dialect or our designated representative with your credit card number or other
          billing information, and related information, in order to purchase Virtual Currency.
          Dialect may also provide you with the option of participating in third party offers to
          receive Virtual Currency.
        </Paragraph>
        <SectionSub>7.5 Purchasing Virtual Currency</SectionSub>
        <Paragraph>
          Teachers may provide certain Teacher Services through the Dialect Platform. If you are
          accepted to be a Teacher, you agree to Dialect's Teacher Policy. All Members hereby
          acknowledge that the Teacher Services are solely provided by Teachers and are not provided
          by Dialect. Dialect’s responsibility with respect to Teacher Services is limited to
          facilitating the availability of the Dialect Platform.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>8. Ownership</SectionTitle>
        <Paragraph>
          All content made available through Dialect Platform is either owned by Dialect or
          Dialect’s licensors, or is licensed to Dialect and Dialect’s licensors pursuant to Section
          10 (Member Content). As between you and Dialect, you own your Member Content. We own the
          Dialect Content, including but not limited to visual interfaces, interactive features,
          graphics, design, our compilation of Member Content, computer code, products, software,
          aggregate Member review ratings, and all other elements and components of the Dialect
          Platform excluding Member Content. As between you and Dialect, we also own the copyrights,
          trademarks, service marks, trade name, and other intellectual property rights throughout
          the world associated with the Dialect Content and the Dialect Platform, which are
          protected by copyright, trade dress, patent, trademark laws, and all other applicable
          intellectual and proprietary rights and laws. Except as expressly and unambiguously
          provided herein, we do not grant you any express or implied rights, and all rights in and
          to the Dialect Platform and the Dialect Content are retained by Dialect.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>9. License Grant</SectionTitle>
        <Paragraph>
          Subject to and conditioned on compliance with these Dialect Terms, Dialect hereby grants
          you a limited, personal, non-exclusive, non-transferable, non-sublicensable, terminatable
          license to access and use the Dialect Platform. Except as expressly set forth in these
          Dialect Terms, you may not modify (including without limitation making derivative works),
          copy, adapt, reverse engineer, de-compile or otherwise reduce to human perceivable format,
          distribute, frame, reproduce, republish, download, scrape, display, post, transmit,
          transfer, license or sublicense, publicly display or sell in any form or by any means, in
          whole or in part, the Dialect Content, other Members’ Member Content and the Dialect
          Platform without Dialect’s or our licensors’ express prior written permission.
        </Paragraph>
        <Paragraph>
          The licenses granted to you are conditioned upon your proper conduct and compliance with
          these Dialect Terms at all times, as judged by Dialect in Dialect’s sole discretion. We
          reserve the right to suspend or deny, in our sole discretion, your access to all or any
          portion of the Dialect Platform.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>10. Member Content</SectionTitle>
        <Paragraph>
          We may, in our sole discretion, permit you to post, upload, publish, submit, store or
          transmit your Member Content. By making available any Member Content on or through the
          Dialect Platform, you hereby grant to Dialect a worldwide, irrevocable, perpetual (or for
          the term of the protection), non-exclusive, transferable, royalty-free license, with the
          right to sublicense, to use, view, copy, adapt, modify, distribute, license, sell,
          transfer, publicly display, publicly perform, transmit, stream, broadcast, access, view,
          and otherwise exploit such Member Content on, through, by means of, or to promote or
          market the Dialect Platform. Dialect does not claim any ownership rights in any Member
          Content.
        </Paragraph>
        <Paragraph>
          You acknowledge and agree that you are solely responsible for all Member Content that you
          make available through the Dialect Platform. Accordingly, you represent and warrant that:
          (i) you either are the sole and exclusive owner of all Member Content that you make
          available through the Dialect Platform or through Dialect promotional campaigns or you
          have all rights, licenses, consents and releases that are necessary to grant to Dialect
          the rights in such Member Content, as contemplated under these Dialect Terms; and (ii)
          neither your Member Content nor your posting, uploading, publication, submission or
          transmittal of your Member Content or Dialect’s use of your Member Content (or any portion
          thereof) on, through or by means of the Dialect Platform or Dialect promotional campaigns
          will infringe, misappropriate or violate a third party's patent, copyright, trademark,
          trade secret, moral rights or other proprietary or intellectual property rights, or rights
          of publicity or privacy, or result in the violation of any applicable law or regulation.
        </Paragraph>
        <Paragraph>
          If you are a Teacher, you may share your Member Content with your Students.
        </Paragraph>
        <Paragraph>
          Dialect respects copyright law and expects its Members to do the same. If you believe that
          any content on the Dialect Platform infringes copyrights you own, please notify us in
          accordance with our Copyright Policy.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>11. Restrictions</SectionTitle>
        <Paragraph>
          We are under no obligation to enforce the Dialect Terms on your behalf against another
          Member. While we encourage you to let us know if you believe another Member has violated
          the Dialect Terms, we reserve the right to investigate and take appropriate action at our
          sole discretion.
        </Paragraph>
        <SectionSub>11.1 Improper Use</SectionSub>
        <Paragraph>
          You agree not to, and will not assist, encourage, or enable others to use the Dialect
          Platform to:
        </Paragraph>
        <ol type="i">
          <li>
            <PStyle>
              Violate any third party's rights, including any breach of confidentiality, or any
              infringement of copyright, trademark, patent, trade secret, moral right, privacy
              right, right of publicity or any other intellectual property or proprietary right;
            </PStyle>
          </li>
          <li>
            <PStyle>
              Upload any content that is indecent, libelous, defamatory, obscene, invasive of
              privacy or publicity rights, abusive, illegal or otherwise objectionable;
            </PStyle>
          </li>
          <li>
            <PStyle>
              Solicit personal information from minors, or submit or transmit pornography;
            </PStyle>
          </li>
          <li>
            <PStyle>
              Threaten, stalk, harm, or harass others, or promote bigotry or discrimination;
            </PStyle>
          </li>
          <li>
            <PStyle>
              Promote a business or other commercial venture or event, or otherwise use the Dialect
              Platform for commercial purposes, except as expressly permitted by Dialect or
              contemplated by these Dialect Terms;
            </PStyle>
          </li>
          <li>
            <PStyle>
              Send bulk emails, surveys, or other mass messaging, whether commercial in nature or
              not; engage in keyword spamming, or otherwise attempt to manipulate the Dialect
              Platform’s search results or the search results of any third-party website; or
            </PStyle>
          </li>
          <li>
            <PStyle>Violate any applicable law.</PStyle>
          </li>
        </ol>
        <SectionSub>11.2 Additional Restrictions</SectionSub>
        <Paragraph>
          If you choose to link Third-Party Accounts with your Dialect Account, subject to the
          privacy settings that you have selected at such Third-Party Accounts, some of the
          information that you provided to us from the linking of your Third-Party Accounts might be
          available on and through the Dialect Platform via your Dialect Account and Dialect Account
          profile page. You have the ability to disable the connection between your Dialect Account
          and your Third-Party Accounts at any time by accessing the "Settings" section of the Sites
          or Applications. If you disable the connection between your Dialect Account and your Third
          Party Accounts, then SNS Content from that Third Party Account will no longer be available
          on and through the Dialect Platform, and you will no longer be able to access your Dialect
          Account through such Third Party Account.
        </Paragraph>
        <ol type="i">
          <li>
            <PStyle>Violate these Dialect Terms;</PStyle>
          </li>
          <li>
            <PStyle>
              Modify, adapt, appropriate, reproduce, distribute, translate, create derivative works
              or adaptations of, publicly display, sell, trade or in any way exploit the Dialect
              Platform, any Dialect Content or other Members’ Member Content, except as expressly
              authorized by us;
            </PStyle>
          </li>
          <li>
            <PStyle>
              Use any robot, spider, site search/retrieval application or other automated device,
              process or means to access, retrieve, scrape or index any portion of the Dialect
              Platform, any Dialect Content or other Members’ Member Content;
            </PStyle>
          </li>
          <li>
            <PStyle>Reverse engineer any portion of the Dialect Platform;</PStyle>
          </li>
          <li>
            <PStyle>
              Remove or modify any copyright, trademark or other proprietary rights notice that
              appears on any portion of the Dialect Platform or on any materials printed or copied
              from the Dialect Platform;
            </PStyle>
          </li>
          <li>
            <PStyle>Record, process or mine information about other Members;</PStyle>
          </li>
          <li>
            <PStyle>
              Access the Dialect Platform by means other than through the public interfaces we
              provide to you;
            </PStyle>
          </li>
          <li>
            <PStyle>Reformat or frame any portion of the Dialect Platform;</PStyle>
          </li>
          <li>
            <PStyle>
              Take any action that imposes, or may impose, an unreasonable or disproportionately
              large load on our technology infrastructure or otherwise make excessive traffic
              demands of the Dialect Platform, as determined by Dialect in Dialect’s sole
              discretion;
            </PStyle>
          </li>
          <li>
            <PStyle>
              Attempt to gain unauthorized access to the Dialect Platform, Dialect Accounts,
              computer systems or networks connected to the Dialect Platform through hacking,
              password mining or any other means;
            </PStyle>
          </li>
          <li>
            <PStyle>
              Use the Dialect Platform, any Dialect Content or other Members’ Member Content to
              transmit any computer viruses, worms, defects, Trojan horses or any other computer
              code, files or programs designated to interrupt, destroy or limit the functionality of
              the Dialect Platform;
            </PStyle>
          </li>
          <li>
            <PStyle>
              Use any device, software or routine that interferes with the proper working of the
              Dialect Platform or otherwise attempt to interfere with the proper working of the
              Dialect Platform;
            </PStyle>
          </li>
          <li>
            <PStyle>
              Use the Dialect Platform to violate the security of any computer network, crack
              passwords or security encryption codes; disrupt or interfere with the security of, or
              otherwise cause harm to, the Dialect Platform, any Dialect Content or other Members’
              Member Content;
            </PStyle>
          </li>
          <li>
            <PStyle>
              Remove, circumvent, disable, damage or otherwise interfere with any security-related
              features of the Dialect Platform, features that prevent or restrict the use or copying
              of any Dialect Content, or other Members’ Member Content or features that enforce
              limitations on the use of the Dialect Platform;
            </PStyle>
          </li>
          <li>
            <PStyle>
              Authorize any third party to use Dialect Platforms, including but not limited to
              Teacher Services, through your Dialect Account, or schedule any Teacher Services on
              behalf of any individuals other than yourself, except that the Company authorizes its
              Employee to use Dialect Platforms, and schedule the Teacher Services on behalf of its
              Employees;
            </PStyle>
          </li>
          <li>
            <PStyle>
              Schedule and/or provide for any Teacher Service outside of the Dialect Platform;
            </PStyle>
          </li>
          <li>
            <PStyle>
              Make, accept, or receive any payment in connection with the Teacher Service outside of
              the Dialect Platform; or
            </PStyle>
          </li>
          <li>
            <PStyle>
              Solicit and/or recruit Dialect Members to work or study on other software or language
              learning platforms.
            </PStyle>
          </li>
        </ol>
        <Paragraph>
          The restrictions above only apply to the extent permissible under applicable law.
          Nevertheless, you agree not to act contrary to these restrictions (even if permissible
          under applicable law). Moreover, Dialect reserves the right to determine what conduct
          Dialect considers to be in violation of these Dialect Terms or otherwise outside the
          intent or spirit of the Dialect Platform. Dialect reserves the right to take action as a
          result of any such violation, which may include terminating your Dialect Account and
          prohibiting you from using the Dialect Platform in whole or in part.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>12. Links</SectionTitle>
        <Paragraph>
          The Dialect Platform may contain links to third-party websites or resources. You
          acknowledge and agree that Dialect is not responsible or liable for: (i) the availability
          or accuracy of such websites or resources; or (ii) the content, products, or services on
          or available from such websites or resources. Links to such websites or resources do not
          imply any endorsement by Dialect of such websites or resources or the content, products,
          or services available from such websites or resources. You acknowledge sole responsibility
          for and assume all risk arising from your use of any such websites or resources or the
          content, products or services on or available from such websites or resources.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>13. Enforcement of Dialect Terms of Service</SectionTitle>
        <Paragraph>
          We may suspend or cancel your Dialect Account if we believe that you have violated or
          acted in a manner that is inconsistently with the letter or the spirit of these Dialect
          Terms, or violated our rights or those of a third-party in connection with your use of the
          Dialect Platform. Without limiting Dialect's other remedies, we will suspend, cancel or
          terminate your Dialect Account, suspend your ability to use certain portions of the
          Dialect Platform, freeze or confiscate your Dialect Credits (as defined in the Payment
          Policy) and/or ban you altogether from the Dialect Platform, without notice or liability
          of any kind, if: (a) you breach any terms and conditions of these Dialect Terms or any
          other written policies and procedures posted on the Dialect Platform, including but not
          limited to Dialect Policies; (b) we are unable to verify or authenticate any information
          you provide to us; or (c) we believe that your actions may cause legal liability for you,
          our Members or for Dialect.
        </Paragraph>
        <Paragraph>
          Once suspended or terminated, you may not continue to use the Dialect Platform under a
          different Dialect Account or re-register under a new Dialect Account. This includes usage
          of any associated Payment Services. In addition, violations of these Dialect Terms may be
          prosecuted to the fullest extent of the law and may result in additional penalties and
          sanctions. If you engage in actions or activities which circumvent the Dialect Platform or
          otherwise reduce service fees owed or paid to Dialect under these Dialect Terms, you will
          be liable to Dialect for the full amount of the service fees due, and may be subject to
          additional sanctions including, but not limited to, suspension or termination of your
          Dialect Account. Dialect reserves the right to terminate any Member or project for any
          reason, at its sole discretion and to refuse to provide registration and membership to you
          in the future. If your membership is canceled, you may no longer have access to data,
          messages, files and other material you store at the Dialect Platform.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>14. Disclaimers</SectionTitle>
        <Paragraph>
          THE Dialect PLATFORM PROVIDED BY Dialect AND THE SERVICES PROVIDED BY Dialect, ANY OF OUR
          LICENSORS OR TEACHERS ARE PROVIDED ON AN "AS IS," AND AS AVAILABLE BASIS, WITHOUT
          WARRANTY, AND "WITH ALL FAULTS", WITH THE EXPRESS UNDERSTANDING THAT Dialect MIGHT NOT
          MONITOR, CONTROL OR VET MEMBER CONTENT OR ANY CONTENT FROM THIRD PARTY. Dialect EXPRESSLY
          DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING WARRANTIES AS TO THE
          PRODUCTS OR SERVICES OFFERED BY THIRD PARTIES, AND IMPLIED WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT, ARISING BY STATUTE OR
          OTHERWISE IN LAW OR FROM A COURSE OF DEALING OR USAGE OR TRADE. YOUR USE OF THE Dialect
          PLATFORM IS AT YOUR OWN DISCRETION AND RISK. WE MAKE NO REPRESENTATIONS OR WARRANTIES, OF
          ANY KIND, EITHER EXPRESS OR IMPLIED, AS TO THE QUALITY, IDENTITY OR RELIABILITY OF ANY
          THIRD PARTY, OR AS TO THE ACCURACY OF THE POSTINGS MADE ON THE Dialect PLATFORM BY ANY
          THIRD PARTY. SOME JURISDICTIONS DO NOT ALLOW LIMITATIONS ON HOW LONG AN IMPLIED WARRANTY
          LASTS, SO SOME OF THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.
        </Paragraph>
        <Paragraph>
          IN ADDITION, NOTWITHSTANDING ANY FEATURE A STUDENT MAY USE TO SELECT A TEACHER, EACH
          STUDENT IS RESPONSIBLE FOR SELECTING THEIR TEACHER AND NEGOTIATING A CONTRACT AND Dialect
          DOES NOT PROVIDE ANY WARRANTY WITH RESPECT TO ANY GOODS OR SERVICES PURCHASED BY A STUDENT
          ON THE Dialect PLATFORM AND DOES NOT RECOMMEND ANY PARTICULAR TEACHER. Dialect DOES NOT
          PROVIDE ANY WARRANTIES OR GUARANTEES REGARDING ANY TEACHER’S PROFESSIONAL ACCREDITATION,
          REGISTRATION OR LICENSE.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>15. Limitation of Liability</SectionTitle>
        <Paragraph>
          IN NO EVENT SHALL Dialect, OUR LICENSORS OR THE TEACHERS BE LIABLE TO YOU OR ANY OTHER
          MEMBER FOR ANY SPECIAL, INDIRECT, CONSEQUENTIAL, INCIDENTAL OR PUNITIVE DAMAGES PURSUANT
          TO THESE Dialect TERMS, INCLUDING BUT NOT LIMITED TO, LOSS OF PROFITS, LOSS OF BUSINESS
          OPPORTUNITIES OR LOSS OF GOODWILL, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          SOME JURISDICTIONS DO NOT ALLOW FOR THE EXCLUSION OR LIMITATION OF INCIDENTAL OR
          CONSEQUENTIAL DAMAGES, SO THIS LIMITATION AND EXCLUSION MAY NOT APPLY TO YOU
        </Paragraph>
        <Paragraph>
          NOTWITHSTANDING ANY OTHER PROVISION OF THESE Dialect TERMS, IN NO EVENT WILL OUR LIABILITY
          TO YOU FOR ANY ACTION OR CLAIM RELATED TO THE Dialect PLATFORM PROVIDED UNDER THESE
          Dialect TERMS, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE OR ANY OTHER THEORY OF
          LIABILITY, EXCEED IN THE GREATER OF: (A) $100 OR (B) THE AGGREGATE AMOUNT OF SERVICE
          CHARGES ACTUALLY COLLECTED BY US FROM YOU FOR THE SERVICES TO WHICH THE LIABILITY RELATES
          DURING THE SIX (6) MONTH PERIOD IMMEDIATELY PRECEDING THE DETERMINATION OF SUCH LIABILITY.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>16. Indemnification</SectionTitle>
        <Paragraph>
          You agree to indemnify, defend and hold Dialect harmless, including against all costs,
          liabilities and legal fees, from any claim or demand made by any third party arising out
          of or relating to (i) your access to or use of the Dialect Platform, (ii) your decision to
          submit postings and accept offers from other Member, (iii) any breach of contract or other
          claims made by Members with which you conducted business through the Dialect Platform,
          (iv) your violation of these Dialect Terms, (v) any products or services purchased or
          obtained by you in connection with the Dialect Platform, (vi) any liability arising from
          the tax treatment of payments to Teachers, (vii) any negligent or intentional wrongdoing
          committed by you on or through the Dialect Platform, (viii) any infringement by you, or
          any third party using your Dialect Account, of any intellectual property or other right of
          any person or entity, (ix) your failure to pay or dispute of any fees owed to any Teacher
          or any other amounts owed to other Members; and/or (x) your failure to satisfy your
          obligations as a Teacher or to a Teacher. Dialect reserves the right, at your expense, to
          assume the exclusive defense and control of any matter for which you are required to
          indemnify Dialect and you agree to cooperate with Dialect’s defense of these claims. You
          agree not to settle any such matter without the prior written consent of Dialect. Dialect
          will use reasonable efforts to notify you of any such claim, action or proceeding upon
          becoming aware of such claim, action or proceeding.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>17. Suspension, Termination or Cancellation</SectionTitle>
        <SectionSub>17.1 Termination By You</SectionSub>
        <Paragraph>
          You may terminate these Dialect Terms at any time by closing your Dialect Account,
          discontinuing your use of the Dialect Platform and deleting the Applications from your
          device. You have the right to cancel your Dialect Account at any time.
        </Paragraph>
        <SectionSub>17.2 Termination by Dialect</SectionSub>
        <Paragraph>
          We may suspend, cancel or terminate your Dialect Account, suspend your ability to use
          certain portions of the Dialect Platform, freeze or confiscate your Dialect Credits (as
          defined in the Payment Policy) and/or ban you altogether from the Dialect Platform for any
          reason or for no reason, and without notice or liability of any kind. Reasons for such
          suspension, cancelation or termination may include, but are not limited to, if we believe
          in good faith that (a) you, a related person, or your Employee (to the extent you are a
          Company) has engaged in any of the restricted conduct described in Section 11
          (Restrictions) or otherwise violated or may have violated these Dialect Terms and/or any
          Dialect Policies, or (b) your Dialect Account and use of the Dialect Platform have been
          inactive for more than twelve (12) months. To the extent that you violate these Dialect
          Terms and we revoke the licenses granted to you, you will lose all benefits and privileges
          associated with the Dialect Platform. We are under no obligation to compensate you for any
          such losses.
        </Paragraph>
        <Paragraph>
          We reserve the right to stop making available any one or more of the Dialect Platform, at
          any time, whether on a temporary or permanent basis and without any liability,
          compensation, refunds or other compensatory benefits to you. Your license to the Dialect
          Platform automatically ends when we terminate access to such Dialect Platform. Any such
          action could prevent you from accessing your Dialect Account, the Dialect Platform, any
          Dialect Content, or any other related information.
        </Paragraph>
        <SectionSub>17.3 Survival</SectionSub>
        <Paragraph>
          In the event of any termination of these Dialect Terms, whether by you or Dialect, the
          following Sections will continue in full force and effect: Section 8 (Ownership), Section
          10 (Member Content), including but not limited to Dialect’s right to use your Member
          Content, Section 11 (Restrictions), Section 12 (Links), Section 13 (Enforcement of Dialect
          Terms of Service), Section 14 (Disclaimers), Section 15 (Limitation of Liability), Section
          16 (Indemnification), Section 17 (Suspension, Termination or Cancellation), Section 18
          (Entire Agreement), Section 19 (Assignment), Section 20 (Notices), Section 21 (Governing
          Law and Jurisdiction), Section 21 (Dispute Resolution), Section 23 (Feedback) and Section
          24 (General).
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>18. Entire Agreement</SectionTitle>
        <Paragraph>
          Except as they may be supplemented by additional Dialect policies, guidelines, standards,
          or terms for a specific product, feature, service or offering, these Dialect Terms
          together with the Dialect Policies constitute the entire and exclusive understanding and
          agreement between Dialect and you pertaining to the subject matter hereof, and supersede
          any and all prior oral or written understandings or agreements between Dialect and you in
          relation to your access to and use of the Dialect Platform.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>19. Assignment</SectionTitle>
        <Paragraph>
          You may not assign or transfer these Dialect Terms, or any rights or obligations
          hereunder, by operation of law or otherwise, without Dialect's prior written consent. Any
          attempt by you to assign or transfer these Dialect Terms without such consent will be null
          and of no effect. Dialect may assign or transfer these Dialect Terms, and any rights or
          obligations hereunder, at its sole discretion, without restriction. Subject to the
          foregoing, these Dialect Terms will bind and inure to the benefit of the parties, their
          successors and permitted assigns.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>20. Notices</SectionTitle>
        <Paragraph>
          Unless you otherwise indicate in writing to customer service in accordance with Section 25
          (Contacting Customer Service), Dialect will communicate with you by email or by posting
          communications on the Dialect Platform. You consent to receive communications from us
          electronically and you agree that these electronic communications satisfy any legal
          requirement that such communications be in writing. You will be considered to have
          received a communication when Dialect sends the communication to the email address you
          have provided to Dialect on the Dialect Platform, or when Dialect posts such communication
          on the Dialect Platform. You must keep your email address updated on the Dialect Platform,
          and you must regularly check the Dialect Platform for postings. If you fail to respond to
          an email message from Dialect regarding violation, dispute or complaint within two
          business days, Dialect will have the right to terminate or suspend your Dialect Account.
        </Paragraph>
        <Paragraph>
          All notices to Dialect intended to have a legal effect concerning these Dialect Terms must
          be in writing and delivered either in person or by a means evidenced by a delivery
          receipt, to the following address:
        </Paragraph>
        <ul>
          <li>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start'
              }}
            >
              <PStyle>Dialect Technology Inc.</PStyle>
              <PStyle>223 Lakeview Ave W</PStyle>
              <PStyle>Brightwaters, NY 11718</PStyle>
              <PStyle>United States of America</PStyle>
            </div>
          </li>
        </ul>
        <Paragraph>Such notices to Dialect are deemed effective upon receipt.</Paragraph>
      </Section>
      <Section>
        <SectionTitle>21. Governing Law</SectionTitle>
        <SectionSub>21.1 For Residents Outside of the United States</SectionSub>
        <Paragraph>
          Except as otherwise specified in Section 21.2 below, any claims arising out of the Dialect
          Platform or these Dialect Terms will be subject to the laws of the State of California,
          without reference to conflict of laws principles.
        </Paragraph>
        <SectionSub>21.2 For Residents in the United States</SectionSub>
        <Paragraph>
          Any claims arising out of the Dialect Platform or these Dialect Terms that are brought in
          the United States will be subject to the laws of the State of California without reference
          to conflict of laws principles.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>
          22. Dispute Resolution; Binding Arbitration and Class Action Waiver
        </SectionTitle>
        <Paragraph>
          READ THIS SECTION 22 CAREFULLY. THIS SECTION 22 MAY SIGNIFICANTLY AFFECT YOUR LEGAL
          RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT.
        </Paragraph>
        <SectionSub>22.1 Informal Dispute Resolution</SectionSub>
        <Paragraph>
          Our customer service department is available as noted in Section 25 (Contacting Customer
          Service) to address any concerns, disputes, claims or controversies you may have regarding
          the Dialect Platform, these Dialect Terms or the relationship between you and Dialect
          (collectively, "Disputes"). Most Disputes are quickly resolved in this manner to our
          users’ satisfaction. The parties shall use their best efforts to settle any Dispute
          directly through consultation and good faith negotiations which shall be a precondition to
          either party initiating a lawsuit or arbitration.
        </Paragraph>
        <SectionSub>22.3 Dispute Resolution for Residents in the United States</SectionSub>
        <Paragraph>
          You agree not to, and will not assist, encourage, or enable others to use the Dialect
          Platform to:
        </Paragraph>
        <ol type="i">
          <li>
            <PStyle>
              Agreement to Arbitrate. If the parties do not agree upon a resolution in connection
              with a Dispute within a period of thirty (30) calendar days from the time informal
              dispute resolution is initiated pursuant to Section 22.1 (Initial Dispute Resolution),
              then either party may initiate binding arbitration as the sole means to formally
              resolve claims (the "Agreement to Arbitrate"), subject to the terms set forth below.
              Specifically, all Disputes shall be finally settled by binding arbitration
              administered by the American Arbitration Association (the "AAA"). The arbitration
              proceedings shall be governed by AAA’s Commercial Arbitration Rules (the "AAA Rules")
              and, where appropriate, AAA’s Supplementary Procedures for Resolution of
              Consumer-Related Disputes (the "AAA Consumer Rules"). This arbitration provision is
              made pursuant to a transaction involving interstate commerce, and the Federal
              Arbitration Act shall apply to the interpretation, applicability, enforceability and
              formation of these Dialect Terms notwithstanding any other choice of law provision
              contained in these Dialect Terms. The arbitrator, and not any federal, state or local
              court or agency, shall have exclusive authority to resolve all disputes arising out of
              or relating to the interpretation, applicability, enforceability or formation of these
              Dialect Terms, including without limitation any claim that all or any party of these
              Dialect Terms are void or voidable, or whether a claim is subject to arbitration. The
              arbitrator shall be empowered to grant whatever relief would be available in a court
              under law or in equity. The arbitrator’s award shall be binding on the parties and may
              be entered as a judgment in any court of competent jurisdiction.
            </PStyle>
          </li>
          <li>
            <PStyle>
              The arbitration may be conducted in person, through the submission of documents, by
              phone or online. The arbitrator shall make a decision in writing, and shall provide a
              statement of reasons if requested by either party. The arbitrator must follow
              applicable law, and any award may be challenged if the arbitrator fails to do so.
            </PStyle>
          </li>
          <li>
            <PStyle>
              The AAA Rules and the AAA Consumer Rules are both available at the AAA website
              www.adr.org. Your arbitration fees and your share of arbitrator compensation shall be
              governed by the AAA Rules and, where appropriate, limited by the AAA Consumer Rules.
              The parties understand that, absent this mandatory provision, they would have the
              right to sue in court and have a jury trial. They further understand that, in some
              instances, the costs of arbitration could exceed the cost of litigation and the right
              to discovery may be more limited in arbitration than in court.
            </PStyle>
          </li>
          <li>
            <PStyle>
              Location. The arbitration will take place at any reasonable location within the United
              States convenient for you.
            </PStyle>
          </li>
          <li>
            <PStyle>
              Class Action Waiver. The parties further agree that any arbitration shall be conducted
              in their individual capacities only and not as a class action or other representative
              action, and the parties expressly waive their right to file a class action or seek
              relief on a class basis. YOU AND Dialect AGREE THAT EACH MAY BRING CLAIMS AGAINST THE
              OTHER ONLY IN YOUR OR Dialect’S INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS
              MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. If any court or arbitrator
              determines that the class action waiver set forth in this subsection is void or
              unenforceable for any reason or that an arbitration can proceed on a class basis, then
              the arbitration provision set forth above shall be deemed null and void in its
              entirety and the parties shall be deemed to have not agreed to arbitrate Disputes.
            </PStyle>
          </li>
          <li>
            <PStyle>
              Exception – Litigation of Intellectual Property and Small Claims Court Claims.
              Notwithstanding the parties’ decision to resolve all Disputes through arbitration,
              either party may bring an action in state or federal court that only asserts claims
              for patent infringement or invalidity, copyright infringement, moral rights
              violations, trademark infringement and/or trade secret misappropriation, but not, for
              clarity, claims related to the license granted to you for the Dialect Platform under
              this Agreement. Either party may also seek relief in a small claims court for disputes
              or claims within the scope of that court’s jurisdiction.
            </PStyle>
          </li>
          <li>
            <PStyle>
              30 Day Right to Opt Out. You have the right to opt-out and not be bound by the
              arbitration and class action waiver provisions set forth in Section 22.3(i) (Agreement
              to Arbitrate), Section 22.3(ii) (Location) and Section 22.3(iii) (Class Action Waiver)
              above by sending written notice of your decision to opt-out pursuant to Section 20
              (Notice). The notice must be sent within 30 days of your first access or use of the
              Dialect Platform; otherwise you will be bound to arbitrate Disputes in accordance with
              the terms of those Sections. If you opt-out of these arbitration provisions, Dialect
              also will not be bound by such provisions.
            </PStyle>
          </li>
        </ol>
      </Section>
      <Section>
        <SectionTitle>23. Feedback</SectionTitle>
        <Paragraph>
          By sending us any ideas, suggestions, documents or proposals ("Feedback"), you agree that
          (i) your Feedback does not contain confidential or proprietary information of third
          parties, (ii) we are under no obligation of confidentiality, express or implied, with
          respect to the Feedback, (iii) we may have something similar to the Feedback already under
          consideration or in development, and (iv) you grant us an irrevocable, non-exclusive,
          royalty-free, perpetual, worldwide license to use, modify, prepare derivative works of,
          publish, distribute and sublicense the Feedback and you irrevocably waive, and cause to be
          waived, against Dialect and other Members any claims and assertions of any moral rights
          that you may have with respect to such Feedback.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>24. General</SectionTitle>
        <Paragraph>
          The failure of Dialect to enforce any right or provision of these Dialect Terms will not
          constitute a waiver of future enforcement of that right or provision. The waiver of any
          such right or provision will be effective only if in writing and signed by a duly
          authorized representative of Dialect. Except as expressly set forth in these Dialect
          Terms, the exercise by either party of any of its remedies under these Dialect Terms will
          be without prejudice to its other remedies under these Dialect Terms or otherwise. If for
          any reason an arbitrator or a court of competent jurisdiction finds any provision of these
          Dialect Terms invalid or unenforceable, that provision will be enforced to the maximum
          extent permissible and the other provisions of these Dialect Terms will remain in full
          force and effect.
        </Paragraph>
      </Section>
      <Section>
        <SectionTitle>25. Contacting Customer Service</SectionTitle>
        <Paragraph>
          If you have any questions about this Privacy Policy, please contact us as follows:
        </Paragraph>
        <ul>
          <li>
            <PStyle>
              Online Support:
              {' '}
              <a href="https://support.dialect.so">https://support.dialect.so</a>
            </PStyle>
          </li>
          <li>
            <PStyle>
              Email:
              {' '}
              <a href="mailto:support@dialect.so">support@dialect.so</a>
            </PStyle>
          </li>
        </ul>
      </Section>
    </Wrapper>
  </Container>
)

export default Content
