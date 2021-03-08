import * as S from './styles'

const Main = ({
  title = 'Good Doctor',
  description = 'Tudo para sua pré e pós-consulta médica'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero.svg"
      alt="um paciente m contato com o médico pelo celular."
    />
  </S.Wrapper>
)

export default Main
