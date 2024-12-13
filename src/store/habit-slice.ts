import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Habit {
  id: string;
  name: string;
  frequrency: "daily" | "weekly";
  completedDate: string[];
  createdAt: string;
}

interface HabitState{
    habits:Habit[];
}


const initialState: HabitState ={
    habits: [],
}

const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (state,
      action:PayloadAction<{name:string; frequency:"daily" | "weekly"}>)=>{

      const newHabit:Habit = {
        id: Date.now().toString(),
        name: action.payload.name,
        frequrency: action.payload.frequency,
        completedDate:[],
        createdAt: new Date().toString(),
      }
      state.habits.push(newHabit);
    },
  }
});

export const {addHabit} = habitSlice.actions;
export default habitSlice.reducer;
