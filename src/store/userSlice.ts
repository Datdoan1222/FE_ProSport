import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: number;
  name: string;
}

interface UserState {
  list: User[];
  loading: boolean;
}

const initialState: UserState = {
  list: [],
  loading: false,
};

export const fetchUsers = createAsyncThunk<User[]>(
  'user/fetchUsers',
  async () => {
    const res = await fetch('/api/users');
    return res.json();
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.list.push(action.payload);
    },

    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.list.findIndex(u => u.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },

    deleteUser: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter(u => u.id !== action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;