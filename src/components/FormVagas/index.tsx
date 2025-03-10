import React, { FormEvent, useState } from 'react'
import { BtnPesquisar, Form as Formulario, Campo } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas: React.FC<Props> = ({ aoPesquisar }) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLowerCase())
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermo(e.target.value)
  }

  return (
    <Formulario onSubmit={aoEnviarForm}>
      <Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={handleChange}
        type="search"
      />
      <BtnPesquisar type="submit">Pesquisar</BtnPesquisar>
    </Formulario>
  )
}

export default FormVagas
