
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const urlFetchShowsList:string = "https://api.tvmaze.com/shows?page=1"

export const fetchData = createAsyncThunk("fetchShowList", async () => {
     const response = await axios.get(urlFetchShowsList)     
     return response.data
})

export const ShowListApiSlicer = createSlice({
     name: "ListOfShows",
     initialState: {
          listOfShows: [],
          isLoading: false,
          isError: false
     },
     reducers: {},
     extraReducers: (builder) => {
          builder.addCase(fetchData.pending, (state, action) => { // loading
               state.isLoading = true
          })
          builder.addCase(fetchData.fulfilled, (state, action) => { // success
               state.isLoading = false
               state.listOfShows = action.payload                  
          })
          builder.addCase(fetchData.rejected, (state, action) => { // error
               state.isLoading = false
               state.isError = true
          })
     }
});