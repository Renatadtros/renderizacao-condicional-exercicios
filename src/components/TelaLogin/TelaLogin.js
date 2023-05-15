import { Form, FormContainer, Input, SendButton, StyledLabel, RegisterButton } from "./styled";

function TelaLogin(props) {
  const login = (event) => {
    // fluxo de login (ainda veremos)
    const email = event.target.email.value
    const senha = event.target.senha.value
    console.log({email, senha});
    props.mudarTela("TelaPrincipal")
  }

  const mostrarTelaCadastro = () => {
    props.mudarTela("TelaCadastro")
  }

  return (
    <FormContainer >
      <h1>LOGIN</h1>

      <Form onSubmit={login}>
        <StyledLabel>E-mail:
          <Input id="email" name ="email"/>
        </StyledLabel>

        <StyledLabel>Senha:
          <Input type={"password"}  id="senha" name ="senha" />
        </StyledLabel>

        <SendButton type="submit">Entrar</SendButton>

        <RegisterButton onClick={mostrarTelaCadastro}>Cadastre-se</RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default TelaLogin;
