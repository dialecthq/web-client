import React, { useState } from 'react'
import styled from 'styled-components'
import GreenIcon from 'Img/pricing-icon-green.svg'
import BlueIcon from 'Img/pricing-icon-blue.svg'
import DarkBlueIcon from 'Img/pricing-icon-darkblue.svg'
import { Button, Switch } from 'antd'
import { FaCheck, FaTimes } from 'react-icons/fa'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  margin-bottom: 40px;
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const YearlyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
`

const YearlyText = styled.p`
  font-weight: 400;
  font-size: 1.2em;
  color: ${(p) => (p.checked ? '#1c1c1c' : '#1c1c1c80')};
  margin: 16px;
  margin-left: ${(p) => (p.left ? '60px' : '16px')};

  @media screen and (max-width: 768px) {
    margin-left: 16px;
  }
`

const DiscountContainer = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  background: #45bdff;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  } ;
`

const DiscountText = styled.p`
  color: #fff;
  font-weight: 500;
  font-size; 1.1em;
`

const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const Card = styled.div`
  height: 400px;
  width: 300px;
  z-index: ${(p) => (p.small ? '2' : '3')};
  background: #f8fafc;
  border-radius: 20px;
  margin: 10px;
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px; */
  border: 1px solid #eeeeee;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 24px;

  @media screen and (max-width: 768px) {
    height: auto;
    width: 100%;
    margin-bottom: 20px;
    box-shadow: none;
  }
`

const SectionHero = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 20px;
`

const ColDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const PricingText = styled.p`
  font-size: 1.7em;
  font-weight: 400;
  color: #1c1c1c;
`

const PricingSpan = styled.span`
  color: #1c1c1c80;
  font-size: 0.4em;
`

const SectionTitle = styled.p`
  font-size: 1.5em;
  font-weight: 700;
  color: #1c1c1c;
`

const Icon = styled.img`
  height: 56px;
  width: 56px;
  margin-right: 20px;
`

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-top: 20px;
`

const Bullets = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`

const Bullet = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`

const CheckMark = styled(FaCheck)`
  height: 14px;
  width: 14px;
  margin-right: 10px;
  color: #1c1c1c;
`

const XMark = styled(FaTimes)`
  height: 14px;
  width: 14px;
  margin-right: 10px;
  color: #1c1c1c70;
`

const BulletText = styled.p`
  font-size: 0.9em;
  color: ${(p) => (p.x ? '#1c1c1c70' : '#1c1c1c')};
  font-weight: 400;
`
const PricingSection = () => {
  const [yearly, setYearly] = useState(false)
  const price = yearly ? Math.ceil(8 * 12 * 0.8) : 8
  return (
    <Container>
      <Wrapper>
        <YearlyContainer>
          <YearlyText left checked={!yearly}>
            Monthly
          </YearlyText>
          <Switch checked={yearly} onChange={() => setYearly(!yearly)} />
          <YearlyText checked={yearly}>Yearly</YearlyText>
          <DiscountContainer>
            <DiscountText>20% Off</DiscountText>
          </DiscountContainer>
        </YearlyContainer>
        <PriceContainer>
          <Card>
            <SectionHero>
              <Icon src={GreenIcon} alt="green icon" />
              <ColDiv>
                <SectionTitle>Free</SectionTitle>
                <PricingText>$0</PricingText>
              </ColDiv>
            </SectionHero>
            <InfoSection>
              <Bullets>
                <Bullet>
                  <CheckMark />
                  <BulletText>3 target conversations / day</BulletText>
                </Bullet>
                <Bullet>
                  <CheckMark />
                  <BulletText>Unlimited native conversations</BulletText>
                </Bullet>
                <Bullet>
                  <XMark />
                  <BulletText x>Unlimited target conversations</BulletText>
                </Bullet>
                <Bullet>
                  <XMark />
                  <BulletText x>Early access to new features</BulletText>
                </Bullet>
              </Bullets>
              <Button block type="primary" style={{ height: 40 }}>
                Get Started
              </Button>
            </InfoSection>
          </Card>
          <Card>
            <SectionHero>
              <Icon src={BlueIcon} alt="green icon" />
              <ColDiv>
                <SectionTitle>Pro</SectionTitle>
                <PricingText>
                  $
                  {price}
                  {' '}
                  <PricingSpan>
                    /
                    {yearly ? 'yr' : 'mo'}
                  </PricingSpan>
                </PricingText>
              </ColDiv>
            </SectionHero>
            <InfoSection>
              <Bullets>
                <Bullet>
                  <CheckMark />
                  <BulletText>Unlimited native conversations</BulletText>
                </Bullet>
                <Bullet>
                  <CheckMark />
                  <BulletText>Unlimited target conversations</BulletText>
                </Bullet>
                <Bullet>
                  <CheckMark />
                  <BulletText>Early access to new features</BulletText>
                </Bullet>
              </Bullets>
              <Button block type="primary" style={{ height: 40 }}>
                Try 30 Days Free
              </Button>
            </InfoSection>
          </Card>
        </PriceContainer>
      </Wrapper>
    </Container>
  )
}

export default PricingSection
