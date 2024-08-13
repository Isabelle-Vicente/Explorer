import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`
export const Section = styled.div`
  display: flex;
justify-content: space-between;
  
`


export const Content = styled.div`
    width: 70%;

`
export const NewMovie = styled.div`
  background-color: ${({ theme }) => theme.COLORS.PICK};
  color: ${({ theme }) => theme.COLORS.WHITE};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;

  svg {
    margin-right: 8px;
  }
`