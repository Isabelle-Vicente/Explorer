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

    <Profile to="/profile">
    <img
          src="https://github.com/Isabelle-Vicente.png"
          alt="Foto do usuário"
        />

        <div>
          <strong>Isabelle Vicente</strong>
          <span>Sair</span>
        </div>
      </Profile>
    </Container>
  )
}