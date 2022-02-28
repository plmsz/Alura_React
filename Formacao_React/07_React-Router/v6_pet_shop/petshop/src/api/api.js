import axios from 'axios'


export const api = axios.create({
  baseURL: 'http://localhost:5000'
})

export const dogApi = axios.create({
  baseURL: 'https://dog.ceo/api/breeds'
})

export const busca = async(url, setDado) => { 
  const resposta = await api.get(url)
  setDado(resposta.data)
}

export const buscaFoto = async(setUrlImage) => {
  const resposta = await dogApi.get('/image/random')
  return setUrlImage(resposta.data.message);
} 