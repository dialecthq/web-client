/* eslint-disable max-len */
import React, { useState } from 'react'
import styled from 'styled-components'
import { Form, Button, message } from 'antd'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import User from 'Utils/state/userContainer'
import countryOptions from 'Utils/data/CountryOptions'
import timezoneOptions from 'Utils/data/TimezoneOptions'
import languageOptions from 'Utils/data/LanguageOptions'
import levelOptions from 'Utils/data/levelOptions'
import strings from 'Utils/data/strings'
import { getUser, edit } from 'Utils/apis/UserAPI'

const EditingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`

const EditingRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 200px;
`

const InputRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Edit = ({
  children, setEditing, initialValues, index
}) => {
  const [loading, setLoading] = useState(false)
  const { user, setUser } = User.useContainer()

  const onFinish = (values) => {
    setLoading(true)
    let parameters = values

    // date of birth
    if (Object.keys(parameters).includes('day', 'month', 'year')) {
      parameters = {
        dob: { ...parameters }
      }
    }

    // countries
    if (Object.keys(parameters).includes('country')) {
      parameters = {
        country: countryOptions.filter((e) => e.value === values.country)[0].key
      }
    }

    if (Object.keys(parameters).includes('living')) {
      parameters = {
        living: countryOptions.filter((e) => e.value === values.living)[0].key
      }
    }

    // timezones
    if (Object.keys(parameters).includes('timezone')) {
      parameters = {
        timezone: timezoneOptions.filter((e) => e.value === values.timezone)[0].key
      }
    }

    // languages
    if (Object.keys(parameters).includes('language')) {
      const tempLanguages = [...user.languages]
      tempLanguages[index] = {
        level: parseInt(levelOptions.filter((e) => e.value === parameters.level)[0].key, 10),
        key: languageOptions.filter((e) => e.value === parameters.language)[0].key
      }
      if (tempLanguages.filter((e) => e.level === 7).length < 1) {
        message.error({
          content: 'Must have one native language',
          icon: <FaTimesCircle size={24} color="#e86461" style={{ marginRight: 10 }} />
        })
        setLoading(false)
        return
      }
      parameters = {
        languages: tempLanguages
      }
    }

    edit(parameters)
      .then(async () => {
        setLoading(false)
        setEditing('')
        const userRef = await getUser()
        setUser(userRef.data())

        message.success({
          content: strings.successfullyUpdatedUser,
          icon: <FaCheckCircle size={24} color="#1ae398" style={{ marginRight: 10 }} />
        })
      })
      .catch((error) => {
        setLoading(false)
        message.error({
          content: strings.couldNotUpdateUser,
          icon: <FaTimesCircle size={24} color="#e86461" style={{ marginRight: 10 }} />
        })
      })
  }

  const onFinishFailed = () => {}

  return (
    <Form
      name="edit"
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{ width: '100%' }}
    >
      <EditingContainer>
        <InputRow>{children}</InputRow>
        <EditingRow>
          <Form.Item style={{ width: '100%', paddingRight: 5 }}>
            <Button
              style={{ width: '100%' }}
              onClick={() => {
                setEditing('')
              }}
            >
              {strings.cancel.capitalize()}
            </Button>
          </Form.Item>
          <Form.Item style={{ width: '100%', paddingLeft: 5 }}>
            <Button type="primary" style={{ width: '100%' }} htmlType="submit" loading={loading}>
              {strings.save.capitalize()}
            </Button>
          </Form.Item>
        </EditingRow>
      </EditingContainer>
    </Form>
  )
}

export default Edit
