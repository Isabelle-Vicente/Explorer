import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: rgba(255, 133, 155, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: none;
  border-radius: 10px;
  padding: 22px;
  margin-bottom: 16px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size:32px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > img {
    height: 1rem;
  }

  p {
    color: #999591;
    white-space: nowrap; /* Impede a quebra de linha */
    overflow: hidden; /* Esconde o excesso de texto */
    text-overflow: ellipsis; /* Adiciona reticências (...) no final do texto */
    max-width: 125ch; /* Define uma largura máxima para o parágrafo */
}


  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`