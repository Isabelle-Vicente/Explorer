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
    overflow-y: auto;
  }

  .tags {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
  }
`

export const Form = styled.form`
  max-width: 1050px;
  margin: 38px auto;
  display: grid;

  gap: 40px;

  > header {
    display: flex;
    gap: 24px;
    flex-direction: column;



    a {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.PICK}
    }
  }

  > div {
    display: flex;
    gap: 40px;
  }
`