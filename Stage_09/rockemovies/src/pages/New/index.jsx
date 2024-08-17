import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'




import { Container, Form } from './styles'

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/">voltar</Link>
            <h1>Criar nota</h1>
          </header>

         <div>
          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" />
         </div>

         <Textarea placeholder="Observações" />

         <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="react" />
              <NoteItem isNew placeholder="Novo marcador" />
            </div>
          </Section>

          <div>
            
          <Button title="Excluir filme" />
          <Button title="Salvar alterações" />
          </div>



        </Form>
      </main>
    </Container>
  )
}