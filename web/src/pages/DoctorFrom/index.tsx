import React from 'react';
import { RiErrorWarningLine } from 'react-icons/ri'

import Input from '../../components/Input/index';
import './styles.css'
import PageHeader from '../../components/PageHeader';
import doctorImg from '../../assets/doctor.svg'

//Especialidade podia ser um Select
//Genero é uma checkbox
function DoctorForm() {
  return (

    
    <div id="page-doctorform" className="container">
       <PageHeader 
      src= {doctorImg}
      alt= "Médicos"
      title="Cadastro de Médicos"
      />
    
  
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