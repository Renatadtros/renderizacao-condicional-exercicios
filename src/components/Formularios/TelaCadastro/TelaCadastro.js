import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "../styled";

function TelaCadastro(props) {
  const cadastrar = (event) => {
    // fluxo de cadastro (ainda veremos)
    const nome = event.target.nome.value
    const email = event.target.email.value
    const senha = event.target.senha.value
    const confirmaSenha = event.target.confirmaSenha.value
    console.log({nome, email, senha, confirmaSenha});
    props.mudarTela("TelaCadastroEndereco")
  }

  const mostrarTelaLogin = () => {
    props.mudarTela("TelaLogin")
  }

  return (
    <FormContainer>
      <h1>Cadastro </h1>

      <Form onSubmit={cadastrar}>
        <StyledLabel htmlFor="nome">
          Nome:
          <Input id="nome" name="nome"/>
        </StyledLabel>

        <StyledLabel htmlFor="email">
          E-mail:
          <Input id="email" name="email" />
        </StyledLabel>

        <StyledLabel htmlFor="senha">
          Senha:
          <Input id="senha" name="senha" />
        </StyledLabel>

        <StyledLabel htmlFor="confirmaSenha">
          Confirmação da senha:
          <Input id="confirmaSenha" name="confirmaSenha"/>
        </StyledLabel>

        <SendButton type="submit">Cadastrar</SendButton>

        <BackToLoginButton onClick={mostrarTelaLogin}>Já possuo cadastro</BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastro;
