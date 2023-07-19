import { configureStore, createSlice } from '@reduxjs/toolkit';

//A store é o que seria o estado global onde será compartilhada para toda a aplicação

//As slices seriam como as pequenas "fatias" para serem utilizadas nos componentes

const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Fazer café', 'Estudar Redux', 'Estudar Zustand'],

  reducers: {},
})

export const store = configureStore({
  //reducer => são as informações que vamos compartilhar entre todos os componentes da aplicação

  reducer: {
    todo: todoSlice.reducer,
  }
})