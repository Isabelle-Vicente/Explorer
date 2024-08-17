import styled from 'styled-components'
import { Link } from 'react-router-dom'


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
  display: flex;
  gap: 1rem;
  width: 90%;
  flex-direction: column;
`

export const MoviesContainer = styled.div`
  max-height: 500px; /* Altura máxima para o container dos filmes */
  overflow-y: auto; /* Habilita a rolagem vertical */
  padding-right: 1rem; /* Espaço para o scroll */
  scrollbar-color: #FF859B transparent;

`

export const NewMovie = styled(Link)`
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
