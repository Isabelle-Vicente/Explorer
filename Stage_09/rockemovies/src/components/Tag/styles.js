import styled from 'styled-components'

export const Container = styled.span`
  font-size: 12px;
  padding: 10px 24px;
  border-radius: 5px;
  margin-right: 6px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.PICK_OPCITY};
`