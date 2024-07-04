import { useState } from 'react'
import { Title, Container, Search, Input, ButtonSearch, Main } from './style'
import { FiSearch } from 'react-icons/fi'
import api from '../../services/api'

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})


  async function handSearch() {

    if(input == ''){
      alert('Preencha com algum CEP!')
      return
    }

    try 
    {
      const response = await api.get(`${input}/json`)
      setCep(response.data) // .data tem todas as info do cep
      setInput('')
    } 

    catch
    {
      alert('ERRO - CEP não existe!')
      setInput('')
    }

  }

  return (
    <>
      <Container>

        <Title>Buscador de CEPs</Title> 

        <Search>
          <Input 
          type='text'
          placeholder='       Digite seu CEP'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <ButtonSearch
          onClick={handSearch}        
        >
          <FiSearch 
            size={25}
            color='#fff'          
          />
        </ButtonSearch>
        </Search>

        {Object.keys(cep).length > 0 && ( // verifica se tem alguma coisa dentro do objeto, ou seja, se o objeto for maior que ) irá mostrar na tela o codigo dentro dos parenteses
          <Main>
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.localidade} - {cep.uf}</span>
          <span>{cep.logradouro}</span>
          <span>{cep.bairro}</span>
          <span>Complemento: {cep.complemento}</span>
        </Main>
        )}
        
      </Container>
    </>
  )
}

export default App
