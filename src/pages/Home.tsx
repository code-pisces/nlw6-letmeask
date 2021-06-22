import { useHistory } from "react-router-dom";

import IllustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import { Button } from "../components/Button";

import { useAuth } from "../hooks/useAuth";

import {
  Container,
  MainContent,
  Separator,
  ButtonCreateRoom,
} from "../styles/auth";

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/rooms/new");
  }

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
          <ButtonCreateRoom onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </ButtonCreateRoom>
          <Separator>Ou entre em uma sala</Separator>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </MainContent>
      </main>
    </Container>
  );
}
