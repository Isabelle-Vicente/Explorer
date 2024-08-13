import { Container } from './styles';

export function ButtonText({ title, icon: Icon, ...rest }) {
  return (
    <Container
      type="button"
      {...rest}
    >
      {Icon && <Icon style={{ marginRight: '8px' }} />} {/* Renderiza o ícone se for fornecido */}
      {title}
    </Container>
  );
}
