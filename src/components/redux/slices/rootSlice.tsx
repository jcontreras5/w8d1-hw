import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        first_name:'Jonathan', 
        last_name:'Contreras', 
        age:28, 
        height:'5ft 10in', 
        weight:'155lb', 
        position:'FW', 
        club:'FC Barcelona', 
        nationality:'Mexican',
        price:1000,
        boots: 'Nike'
    },
    reducers: {
        chooseFirstName: (state, action) => { state.first_name = action.payload},
        chooseLastName: (state, action) => { state.last_name = action.payload},
        chooseAge: (state, action) => { state.age = action.payload},
        chooseHeight: (state, action) => { state.height = action.payload},
        chooseWeight: (state, action) => { state.weight = action.payload},
        choosePosition: (state, action) => { state.position = action.payload},
        chooseClub: (state, action) => { state.club = action.payload},
        chooseNationality: (state, action) => { state.nationality = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
        chooseBoots: (state, action) => { state.boots = action.payload}
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseFirstName,chooseLastName,chooseAge,chooseHeight,chooseWeight,choosePosition,chooseClub,chooseNationality,choosePrice,chooseBoots } = rootSlice.actions;