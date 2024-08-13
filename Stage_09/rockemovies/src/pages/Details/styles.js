import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 64px 0;
  }
`

export const Section = styled.div`

  display: flex;
  gap: 1rem;

  >img {
    width: 1rem;
    height: 1rem;
    border-radius: 10px;
  }

  >svg{
     color: ${({ theme }) => theme.COLORS.PICK};

  }

`



export const Content = styled.div`
  max-width: 1050px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  > button:first-child {
    align-self: start;
  }    

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }
`