import styled from 'styled-components'
import { theme } from 'config'

export const Content = styled.div`
  position: absolute;
  right: 20%;
  top: 50%;
  transform: translate(50%, -50%);

  fieldset {
    border: 0;
    margin: 5px 1px 5px 14px;
  }

  span {
    color: ${theme.colors.red};
    font-size: 10px;
  }

  h1 {
    margin: 10px;

    @media (max-width: 1299px) {
      color: ${theme.colors.neutral[100]};
    }
  }

  @media (max-width: 1299px) {
    right: 50%;
  }
`

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;


  button {
    align-items: center;
    background: ${theme.colors.neutral[900]};
    border: 0;
    border-radius: 5px;
    color: ${theme.colors.neutral[100]};
    display: flex;
    font-size: 15px;
    height: 50px;
    justify-content: center;
    margin: 10px 7px 0 0;
    transition: 1s;
    transition: transform 1s;
    width: 360px;

    :hover {
      transform: translateX(0px) scale(1.1);
    }

    @media (max-width: 1299px) {
      background: ${theme.colors.neutral[100]};
      color: ${theme.colors.neutral[900]};
    }
  }

  strong {
    color: ${theme.colors.neutral[900]});
    font-size: 15px;
    margin-top: 10px;
  }

  a {
    color: ${theme.colors.neutral[900]};
    font-weight: bold;
    font-size: 15px;
    margin-top: 17px;
    text-decoration: underline;
  }

  @media (max-width: 1299px) {
    a, strong {
      color: ${theme.colors.neutral[100]};
    }
  }
`

export const Password = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  fieldset {
    display: flex;
    flex-direction: column;
  }

  button {
    background: none !important;
    border: 0;
    bottom: 0;
    height: 40px;
    left: 325px;
    position: absolute;
    right: 0;
    transition: 1s;
    top: 28px;
    width: 30px;

    svg {
      color: ${theme.colors.neutral[400]};
      margin: -7px 0 0 -30px;
      position: relative;
    }
  }
`

export const Aside = styled.div`
  background-color: ${theme.colors.neutral[900]};
  color: ${theme.colors.neutral[100]};
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-width: 333px;
  max-width: 870px;
  overflow: hidden;
  padding: 32px;
`

export const ContentAside = styled.div`
  h1 {
    font-size: 64px;
    margin: 40px;
    max-width: 470px;
  }

  h2 {
    font-size: 24px;
    margin: 47px 0 0 40px;
    max-width: 10px;
  }

  p {
    font-size: 18px;
    margin: 40px;
    max-width: 470px;
  }

  img {
    animation: go-back 1s infinite alternate;
    align-items: center;
    display: flex;
    justify-content: center;
    margin: -100px 0 0 550px;
  }

  @keyframes go-back {
    from {
      transform: translateY(50px);
    }
    to {
      transform: translateX(0);
    }
  }

  @media (max-width: 1299px) {
    display: none;
  }
`
