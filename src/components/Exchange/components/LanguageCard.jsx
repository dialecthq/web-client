/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import UserContainer from '@utils/state/userContainer'
import {
  Button, Modal, Form, Select
} from 'antd'
import styled from 'styled-components'
import {
  FaUserAlt
} from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase'
import fire from '@utils/fire'
import { checkTokens, checkNative } from '@utils/apis/RoomAPI'

import languageOptions from '@utils/data/LanguageOptions'
import countryOptions from '@utils/data/CountryOptions'
import timezoneOptions from '@utils/data/TimezoneOptions'

const CardContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  color: var(--text-color);
  transition: 0.2s all ease-in-out;

  :hover {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const CardWrapper = styled.div`
  width: 100% ;
  height: 100%;
  padding: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  background: var(--layer-background);
  transition: 0.2s all ease-in-out;
  overflow: hidden;
  :hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`

const CardContent = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CardTitle = styled.p`
  font-size: 1.1em;
  font-weight: 500;
  opacity: 0.9;
`

const CardPeople = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const CardNum = styled.p`
  font-size: 1em;
  font-weight: 400;
  margin-left: 5px;
  opacity: 0.9;
`

const Flag = styled.img`
    height: 28px;
    width: 28px;
    margin-right: 10px;
`
const TabContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ButtonText = styled.span`
  font-weight: 600;
  letter-spacing: 0.5px;
`

const TermsContainer = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const Terms = styled.p`
    font-size: 12px;
    font-weight: 400;
    width: 100%;
`

const Label = styled.p`
    font-size: 14px;
    font-weight: 400;
`

const FormRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const FluencyButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: ${(p) => (p.active ? '1px solid #4D40F0' : '1px solid #d4d4d4')};
    color: ${(p) => (p.active ? '#4D40F0' : '#898989')};
    transition: 0.2s all ease-in-out;
    border-radius: 20px;
    :hover {
        cursor: pointer;
        border: 1px solid #4D40F0;
        color: #4D40F0;
    }
`

const FluencyButtonText = styled.p`
    margin-bottom: 0px;
    font-size: 12px;
    font-weight: 600;
`

const AddLanguage = ({
  setVisible, user, userAPI, language
}) => {
  const [loading, setLoading] = useState(false)
  const [level, setLevel] = useState(1)
  const history = useHistory()

  const onFinish = async () => {
    setLoading(true)
    await fire.firestore().collection('users').doc(user.uid).update({
      languages: firebase.firestore.FieldValue.arrayUnion({ key: language.key, level })
    })

    userAPI.getUser()
    history.push({
      pathname: `/join/${language.value}`,
    })
    setVisible(false)
    setLoading(false)
  }

  return (
    <TabContent>
      <Form
        name="login-info"
        onFinish={onFinish}
        onFinishFailed={() => console.log('hi')}
        style={{ width: '100%' }}
      >
        <FormRow style={{ justifyContent: 'space-between' }}>
          <FluencyButton
            active={level === 1}
            onClick={() => {
              setLevel(1)
            }}
          >
            <FluencyButtonText>
              Beginner
            </FluencyButtonText>
          </FluencyButton>
          <FluencyButton
            active={level === 2}
            onClick={() => {
              setLevel(2)
            }}
          >
            <FluencyButtonText>
              Elementary
            </FluencyButtonText>
          </FluencyButton>
          <FluencyButton
            active={level === 3}
            onClick={() => {
              setLevel(3)
            }}
          >
            <FluencyButtonText>
              Intermediate
            </FluencyButtonText>
          </FluencyButton>
          <FluencyButton
            active={level === 5}
            onClick={() => {
              setLevel(5)
            }}
          >
            <FluencyButtonText>
              Advanced
            </FluencyButtonText>
          </FluencyButton>
          <FluencyButton
            active={level === 7}
            onClick={() => {
              setLevel(7)
            }}
          >
            <FluencyButtonText>
              Native
            </FluencyButtonText>
          </FluencyButton>

        </FormRow>

        <FormRow style={{ marginTop: 50 }}>
          <Form.Item style={{ marginBottom: 20, width: '100%', paddingRight: 5 }}>
            <Button
              block
              style={{ height: 40 }}
              onClick={() => {
                setVisible(false)
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
          </Form.Item>
          <Form.Item style={{ marginBottom: 20, width: '100%', paddingLeft: 5 }}>
            <Button
              type="primary"
              block
              htmlType="submit"
              style={{ height: 40 }}
              loading={loading}
            >
              <ButtonText>Continue</ButtonText>
            </Button>
          </Form.Item>
        </FormRow>
      </Form>
    </TabContent>
  )
}

const LanguageCard = ({ room }) => {
  const history = useHistory()
  const { user, userAPI } = UserContainer.useContainer()
  const [visible, setVisible] = useState(false)
  return (
    <CardContainer
      onClick={async () => {
        if (visible) return
        const isNative = await checkNative(user, room)
        if (!isNative) {
          const tokens = await checkTokens(user)
          if (!tokens) {
            history.push('/pricing')
          }
        }

        if (user.languages.filter((e) => e.key === room.key).length > 0) {
          history.push({
            pathname: `/join/${room.value}`,
          })
        } else {
          setVisible(true)
        }
      }}
    >
      <CardWrapper>
        <CardContent>
          <CardPeople style={{ marginRight: 20 }}>
            <Flag src={room.flag} alt="flag" />
            <CardTitle>{room.value}</CardTitle>
          </CardPeople>

          <CardPeople>
            <FaUserAlt size={16} opacity={0.9} />
            <CardNum>{Math.ceil(Math.random() * 100) }</CardNum>
          </CardPeople>
        </CardContent>
      </CardWrapper>
      <Modal
        visible={visible}
        footer={null}
        onCancel={() => setVisible(false)}
        title={`Select your ${room.value} level`}
      >
        <AddLanguage setVisible={setVisible} user={user} language={room} userAPI={userAPI} />
      </Modal>
    </CardContainer>
  )
}

export default LanguageCard
