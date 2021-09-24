import React from "react"
import styled from "styled-components"
import { useRouter } from "next/router"
import Image from "next/image"

const HeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: ${(p) => (p.unclickable ? "none" : "pointer")};
  }
`

const Text = styled(Image)`
  filter: ${(p) => (p.light ? "none" : "invert(0.9)")};
  margin-left: 5px;
`

export default ({ light, unclickable }) => {
  const router = useRouter()
  return (
    <HeaderLogo
      onClick={() => {
        if (unclickable) return
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
        router.push("/")
      }}
      unclickable={unclickable}
    >
      {light ? (
        <Image src="/logo-white.svg" height={54} width={144} alt="logo" />
      ) : (
        <Image src="/logo.svg" height={54} width={144} alt="logo" />
      )}
    </HeaderLogo>
  )
}
