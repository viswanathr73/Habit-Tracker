import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Habit {
  id: string;
  name: string;
  frequrency: "daily" | "weekly";
  completedDates: string[];
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
        completedDates:[],
        createdAt: new Date().toString(),
      }
      state.habits.push(newHabit);
    },
    toggleHabit: (
      state,
      action: PayloadAction <{ id:string; date:string}>
    ) => {
      const habit = state.habits.find((h) => h.id === action.payload.id);

      if(habit){
        const index = habit.completedDates.indexOf(action.payload.date);
        if(index>-1){
          habit.completedDates.splice(index,1)
        }else{
          habit.completedDates.push(action.payload.date);
        }
      }
    },
    removeHabit: () => {},
  },
});

export const {toggleHabit,addHabit} = habitSlice.actions;
export default habitSlice.reducer;
