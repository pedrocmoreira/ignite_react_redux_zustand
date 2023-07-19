import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

//A store é o que seria o estado global onde será compartilhada para toda a aplicação

//As slices seriam como as pequenas "fatias" para serem utilizadas nos componentes

const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Fazer café', 'Estudar Redux', 'Estudar Zustand'],

  reducers: {
    add: (state, action) => {
      state.push(action.payload.newTodo);
    }
  },
})

export const store = configureStore({
  //reducer => são as informações que vamos compartilhar entre todos os componentes da aplicação

  reducer: {
    todo: todoSlice.reducer,
  }
})

export const { add } = todoSlice.actions;

export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;