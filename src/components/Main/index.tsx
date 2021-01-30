import * as S from './styles'

const Main = ({
    title = 'React Avancado',
    description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
    <S.Wrapper>
        <S.Logo
            src="/img/reactjs-icon.svg"
            alt="Imagem de um atomo e React Avançado escrito ao lado"
        ></S.Logo>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Ilustration
            src="/img/progressive_app.svg"
            alt="desenvolvedor de frente para tela com codigo"
        />
    </S.Wrapper>
)

export default Main
