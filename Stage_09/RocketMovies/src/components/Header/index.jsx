import { Container, Profile, Search, Logo } from './styles'

export function Header() {
  return (
    <Container>

      <Logo>
        RocketMovies
      </Logo>

    <Search>
      <input type="text" placeholder='Pesquisar pelo título' />
    </Search>

      <Profile>
        <img
          src="https://github.com/rodrigorgtic.png"
          alt="Foto do usuário"
        />

        <div>
          <strong>Rodrigo Gonçalves</strong>
          <span>Sair</span>
        </div>
      </Profile>
    </Container>
  )
}