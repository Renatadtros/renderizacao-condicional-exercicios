import { Form, FormContainer, Input, StyledLabel, SendButton, } from "../styled";

function TelaCadastroEndereco(props) {
const confirmar =(event) => {
  const endereco = event.target.endereco.value
  const numero = event.target.numero.value
  const complemento = event.target.complemento.value
  const telefone = event.target.telefone.value
  console.log({endereco, numero, complemento, telefone});
  props.mudarTela("TelaPrincipal");
};

const mostrarTelaEndereco = () => {
  props.mudarTela("TelaLogin")
}
    return (
    <FormContainer>
      <h1>Endereco </h1>

      <Form onSubmit={confirmar}>
        <StyledLabel htmlFor="endereco">
          Endereço completo:
          <Input id="endereco" name="endereco"/>
        </StyledLabel>

        <StyledLabel htmlFor="numero">
         Número da residência:
          <Input id="numero" name="numero"/>
        </StyledLabel>

        <StyledLabel htmlFor="complemento">
          Complemento:
          <Input id="complemento" name="complemento" />
        </StyledLabel>

        <StyledLabel htmlFor="telefone">
          Telefone:
          <Input id="telefone" name="telefone"/>
        </StyledLabel>

        <SendButton type="submit">confirmar</SendButton>
      </Form>
    </FormContainer>
    );
};



export default TelaCadastroEndereco