import { Link } from "react-router-dom";

import IllustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";

import { Button } from "../components/Button";

import { useAuth } from "../hooks/useAuth";

import { Container, MainContent } from "../styles/auth";

export function NewRoom() {
  //  const { user } = useAuth();

  return (
    <Container>
      <aside>
        <img
          src={IllustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <MainContent>
          <img src={logoImg} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link>
          </p>
        </MainContent>
      </main>
    </Container>
  );
}
