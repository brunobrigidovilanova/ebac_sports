import { Favorito as FavoritoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

type Props = {
  favoritos: FavoritoType[]
}

const Produtos = ({ favoritos }: Props) => {
  const produtoEstaNosFavoritos = (favorito: FavoritoType) => {
    const favoritoId = favorito.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(favoritoId)
  }
  const { data: produtos, isLoading } = useGetProdutosQuery()

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
