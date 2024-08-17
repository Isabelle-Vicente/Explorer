import { Container } from './styles'
import { Tag } from '../Tag'

export function Movie({ data, ...rest }) {
  return (
    <Container {...rest}>
      
      <h1>{data.title}</h1>

      <img src="src\assets\stars.png" alt="Estrelas do Filme" />

      <p>{data.paragraph}</p>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  )
}