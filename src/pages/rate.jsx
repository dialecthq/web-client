import styled from "styled-components"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import UserContainer from "../utils/state/userContainer"
import LanguageContainer from "../utils/state/languageContainer"
import Loading from "../components/common/Loading"
import strings from "../utils/data/strings"
import HeaderLogo from "../components/common/HeaderLogo"
import Image from "next/image"
import { Rate as StarRate, Button, Input } from "antd"
import rateUser from "../utils/apis/RoomAPI"

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

const Title = styled.p`
  font-size: 1.8em;
  font-weight: 500;
  color: #1c1c1c;
  margin-bottom: 5px;
  margin-left: 20px;
`

const Rate = () => {
  const { user, loading } = UserContainer.useContainer()
  const { language } = LanguageContainer.useContainer()
  const [stars, setStars] = useState(5)
  const [text, setText] = useState("")
  const [buttonLoading, setButtonLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (!user && !loading) {
      router.replace("/")
    }
  }, [user, loading])

  useEffect(() => {
    if (!router.query.id && !loading) {
      router.replace("/")
    }
  }, [])

  if (loading || !user) {
    return <Loading />
  }

  return (
    <Container>
      <Wrapper>
        <Row>
          <Image height="64" width="64" src="/clear-logo.svg" alt="logo" />
          <Title>How was your last conversation?</Title>
        </Row>
        <StarRate
          value={stars}
          onChange={(value) => setStars(value)}
          allowClear={false}
          style={{ marginTop: 20 }}
        />
        <Input.TextArea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tell us more"
          autoSize={{ minRows: 3, maxRows: 5 }}
          style={{ marginTop: 20 }}
        />
        <Button
          type="primary"
          block
          style={{ height: 50, marginTop: 30 }}
          loading={buttonLoading}
          onClick={() => {
            rateUser(router.query.id, user, stars, setButtonLoading)
          }}
        >
          Submit Rating
        </Button>
      </Wrapper>
    </Container>
  )
}

export default Rate
