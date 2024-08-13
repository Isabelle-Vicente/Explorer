import { FiPlus } from 'react-icons/fi'
import { Container,  Content, NewMovie, Section } from './styles'

// import { Movie } from '../../components/Movie'
// import { Input } from '../../components/Input'
import { Header } from '../../components/Header'

export function Home() {
  return (
    <Container>
      <Header />

      <Content>

        <Section>
            <h1>Meus filmes</h1>


            <NewMovie>
                <FiPlus />
                Adicionar filme      
            </NewMovie>
        </Section>

      </Content>

      


     {/* <Movie data={{
            title: 'React',
            tags: [
              { id: '1', name: 'react' },
              { id: '2', name: 'rocketseat' }
            ]
          }}
          /> */}


     
    </Container>
  )
}