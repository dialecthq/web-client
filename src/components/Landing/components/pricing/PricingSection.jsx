import React from 'react'
import styled from 'styled-components'
import GreenIcon from '@img/pricing-icon-green.svg'
import BlueIcon from '@img/pricing-icon-blue.svg'
import DarkBlueIcon from '@img/pricing-icon-darkblue.svg'
import { Button } from 'antd'
import { FaCheck } from 'react-icons/fa'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 24px;
    margin-top: 50px;
    margin-bottom: 40px;
`

const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
    height: ${(p) => (p.small ? '350px' : '400px')};
    width: ${(p) => (p.small ? '230px' : '280px')};;
    z-index: ${(p) => (p.small ? '2' : '3')};
    background: #f8fafc;
    border-radius: 20px;
    margin: ${(p) => (p.small ? '0px' : '0px')};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
    margin-left: ${(p) => (p.right ? '-5px' : '0px')};
    margin-right: ${(p) => (p.left ? '-5px' : '0px')};
    border: 1px solid #eeeeee;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 24px;

    @media screen and (max-width: 768px) {
        height: 300px;
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
`

const BulletText = styled.p`
    font-size: 0.8em;
    color: #1c1c1c;
    font-weight: 400;
`
const PricingSection = () => (
  <Container>
    <Wrapper>
      <PriceContainer>
        <Card small left>
          <SectionHero>
            <Icon src={GreenIcon} alt="green icon" />
            <ColDiv>
              <SectionTitle>Starter</SectionTitle>
              <PricingText>
                $3
                {' '}
                <PricingSpan>/ mo</PricingSpan>
              </PricingText>

            </ColDiv>

          </SectionHero>
          <InfoSection>
            <Bullets>
              <Bullet>
                <CheckMark />
                <BulletText>hihihihihi</BulletText>
              </Bullet>
              <Bullet>
                <CheckMark />
                <BulletText>hihihihihi</BulletText>
              </Bullet>
              <Bullet>
                <CheckMark />
                <BulletText>hihihihihi</BulletText>
              </Bullet>
            </Bullets>
            <Button block type="primary" style={{ height: 40 }}>Choose Plan</Button>
          </InfoSection>
        </Card>
        <Card>
          <SectionHero>
            <Icon src={BlueIcon} alt="green icon" />
            <ColDiv>
              <SectionTitle>Pro</SectionTitle>
              <PricingText>
                $20
                {' '}
                <PricingSpan>/ mo</PricingSpan>
              </PricingText>

            </ColDiv>

          </SectionHero>
          <InfoSection>
            <Bullets>
              <Bullet>
                <CheckMark />
                <BulletText>hihihihihi</BulletText>
              </Bullet>
              <Bullet>
                <CheckMark />
                <BulletText>hihihihihi</BulletText>
              </Bullet>
              <Bullet>
                <CheckMark />
                <BulletText>hihihihihi</BulletText>
              </Bullet>
            </Bullets>
            <Button block type="primary" style={{ height: 40 }}>Choose Plan</Button>
          </InfoSection>
        </Card>
        <Card small right>
          <SectionHero>
            <Icon src={DarkBlueIcon} alt="green icon" />
            <ColDiv>
              <SectionTitle>Basic</SectionTitle>
              <PricingText>
                $8
                {' '}
                <PricingSpan>/ mo</PricingSpan>
              </PricingText>

            </ColDiv>

          </SectionHero>
          <InfoSection>
            <Bullets>
              <Bullet>
                <CheckMark />
                <BulletText>hihihihihi</BulletText>
              </Bullet>
              <Bullet>
                <CheckMark />
                <BulletText>hihihihihi</BulletText>
              </Bullet>
              <Bullet>
                <CheckMark />
                <BulletText>hihihihihi</BulletText>
              </Bullet>
            </Bullets>
            <Button block type="primary" style={{ height: 40 }}>Choose Plan</Button>
          </InfoSection>
        </Card>
      </PriceContainer>
    </Wrapper>
  </Container>

)

export default PricingSection
