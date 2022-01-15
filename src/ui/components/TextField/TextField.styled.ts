import styled from 'styled-components'
import { theme } from 'config'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputLabel = styled.label`
  color: ${theme.colors.neutral[900]};
  font-size: 16px;

  @media (max-width: 1299px) {
    color: ${theme.colors.neutral[100]};
  }
`

export const Input = styled.input`
  background: none;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid ${theme.colors.neutral[300]};
  color: ${theme.colors.neutral[900]};
  height: 48px;
  margin: 10px 20px 0 0;
  padding: 0 20px;
  width: 360px;

  :focus {
    border: 1px solid ${theme.colors.neutral[900]};
  }

  @media (max-width: 1299px) {
    border: 1px solid ${theme.colors.neutral[500]};
    color: ${theme.colors.white};

    :focus {
      border: 1px solid ${theme.colors.neutral[100]};
    }
  }
`

export const ErrorMessage = styled.span`
  color: ${theme.colors.red[700]};
  font-size: 16px;
`
