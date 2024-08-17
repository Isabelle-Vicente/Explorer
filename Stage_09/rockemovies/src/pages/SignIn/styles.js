import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'


export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PICK};
  }

  > h2 {
    font-size: 24px;
    margin: 44px 0px;
    font-weight: 600;

  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

   > a {
    margin-top: 24px;
    margin-left: 110px;
    color: ${({ theme }) => theme.COLORS.PICK};
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
` 