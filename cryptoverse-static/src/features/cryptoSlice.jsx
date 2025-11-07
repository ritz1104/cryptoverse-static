import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCryptos = createAsyncThunk('crypto/fetchCryptos',async () => {

const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins/trending',
  headers: {
    //put you credential here
  }
};

 const response = await axios.request(options)
  console.log(response.data.data.coins);
 return response.data.data.coins;

})

const cryptoSlice = createSlice({
    name:'crypto',
    initialState:{
        cryptos:[],
        status:'idle',
        error:null

    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchCryptos.pending,(state)=>{
            state.status = 'loading';
        }),
        builder.addCase(fetchCryptos.fulfilled,(state,action)=>{
            state.status = 'succeeded';
            state.cryptos = action.payload;
        })
        builder.addCase(fetchCryptos.rejected,(state,action)=>{
            state.status = 'failed';
            state.error = action.error.message;
        }
        )
    }
});


export default cryptoSlice.reducer;