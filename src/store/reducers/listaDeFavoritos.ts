import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Favorito } from '../../App'

type FavoritoState = {
  itens: Favorito[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Favorito>) => {
      const favorito = action.payload

      if (state.itens.some((f) => f.id === favorito.id)) {
        state.itens = state.itens.filter((f) => f.id !== favorito.id)
      } else {
        state.itens.push(favorito)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
