import styled from 'styled-components'
import {
  InputHTMLAttributes,
  ButtonHTMLAttributes,
  FormHTMLAttributes
} from 'react'

export const Form = styled.form<FormHTMLAttributes<HTMLFormElement>>`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const Campo = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  padding: 0 16px;
  outline-color: var(--cor-principal);
`

export const BtnPesquisar = styled.button<
  ButtonHTMLAttributes<HTMLButtonElement>
>`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`
