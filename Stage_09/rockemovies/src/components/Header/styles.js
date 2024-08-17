import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Container = styled.header`
  grid-area: header;
  height: 105px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  justify-content: space-between;
  align-items: center; /* Adicionado para centralizar verticalmente */
  padding: 0 80px;
`

export const Logo = styled.p`
  font-size: 24px; /* Tamanho da fonte do logo */
  font-weight: bold; /* Destacar o texto do logo */
  color: ${({ theme }) => theme.COLORS.PICK}; /* Cor do texto do logo */
`

export const Search = styled.div`
  display: flex;
  align-items: center; /* Alinha verticalmente o campo de entrada */
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600}; 
  border-radius: 8px; 
  padding: 0 26px; 
  width: 60%; 

  input {
    border: none; /* Remove a borda padrão do input */
    background: transparent; /* Torna o fundo do input transparente */
    color: ${({ theme }) => theme.COLORS.GRAY_300}; /* Cor do texto no campo de pesquisa */
    padding: 18px; /* Espaçamento interno */
    width: 100%; /* Ocupa a largura total do container */
    font-size: 16px; /* Tamanho da fonte do texto */
    outline: none; /* Remove o contorno padrão ao focar */
  }

  input::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300}; /* Cor do texto do placeholder */
  }
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`
