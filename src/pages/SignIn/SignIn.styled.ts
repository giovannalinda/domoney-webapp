import styled from 'styled-components/macro'
import { theme } from 'config'

export const Content = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;

  fieldset {
    border: 0;
    margin: 5px 1px 5px 14px;
  }

  span {
    color: ${theme.colors.red};
    font-size: 10px;
  }
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button {
    margin: 10px 0 0 15px;
    font-size: 15px;
    color: ${theme.colors.neutral[900]};
    background: ${theme.colors.neutral[900]};
    border-radius: 5px;
    height: 50px;
    width: 444px;
    border: 0;
    transition: 1s;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      opacity: 85%;
    }
  }
`

export const Password = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  fieldset {
    flex-direction: column;
    display: flex;
  }

  button {
    position: absolute;
    height: 40px;
    width: 30px;
    background: none !important;
    border: 0;
    transition: 1s;
    right: 0;
    bottom: 0;
    left: 410px;
    top: 25px;

    svg {
      color: ${theme.colors.neutral[900]};
      position: relative;
      margin: -10px 0 0 -30px;

      :hover {
        opacity: 85%;
      }
    }
  }
`
