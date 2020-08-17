import React from 'react'
import PageHeader from '../../components/PageHeader'
import medicalImg from '../../assets/medical.svg'
import Input from '../../components/Input'
import { RiErrorWarningLine } from 'react-icons/ri'


import './styles.css'

function MedicalForm() {
  return (
    <div id="page-medical-form" className="container">
      <PageHeader
        src={medicalImg}
        alt="Remédio"
        title="Cadastro de Remédios"
        description="Estes remédios poderão ser receitados para os pacientes"
      />
      <form>
        <main>
          <fieldset>
            <legend>Dados do remédio</legend>
            <Input
              name="name"
              label="Nome:"
            />
            <Input
              name="price"
              label="Preço:"
            />

            <Input
              name="description"
              label="Descrição:"
            />

          </fieldset>
          <footer>
            <p>
              <RiErrorWarningLine size={40} />
          Importante!<br />
          Preencha todos os dados.
          </p>
            <button type="submit" >Cadastrar</button>
          </footer>
        </main>
      </form>
    </div>
  )
}

export default MedicalForm;