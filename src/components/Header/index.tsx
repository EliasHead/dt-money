import { HeaderContainer, HeaderContent, NewTrasactionButton } from "./styles";

import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <NewTrasactionButton>Nova Transação</NewTrasactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
