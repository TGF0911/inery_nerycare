import React from 'react';
import { RiErrorWarningLine } from 'react-icons/ri'

import Input from '../../components/Input/index';
import './styles.css'

//Colcoar um campo para foto do médico.
function DoctorForm() {
  return (
    <div id="page-doctorform" className="container">

      <main>
        <form>
          <fieldset>
            <legend>Dados do Médico</legend>
            <span>Hospital Albert Einstein</span>
            <Input
              name="name"
              label="Nome Completo:"
            />
            <Input
              name="crm"
              label="CRM:"
            />
            <Input
              name="email"
              label="Email:"
            />
            <Input
              name="fone"
              label="Telefone:"
            />
            <Input
              name="especialidade"
              label="Especialidade:"
            />

          </fieldset>
          <footer>
            <p>
              <RiErrorWarningLine size={40} />
          Importante!<br />
          Preencha todos os dados.
          </p>
            <button  type="submit" >Cadastrar</button>
          </footer>

        </form>
      </main>
    </div>
  )
}

export default DoctorForm;