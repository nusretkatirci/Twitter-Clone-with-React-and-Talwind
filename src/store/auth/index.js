import{createSlice} from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id:1,
    username:"nusretktrc",
    fullname:"Nusret",
    avatar:"https://media.licdn.com/dms/image/D5603AQEqkDvJ_K4R3g/profile-displayphoto-shrink_800_800/0/1694723017885?e=2147483647&v=beta&t=HqTysNJqjIAfupJFHxEutWkwDbiHbPX9zInZKRV5mQM"
  },
  accounts:[
  ]
}

const auth = createSlice({
  name:'auth',
  initialState,
  reducers:{
    // state manipüle etme metodları
    _addAccounts:(state, action)=>{
      state.accounts.push(action.payload)
    },
    _removeAccount:(state, action)=>{
      state.accounts = state.accounts.filter(account => account.id !== action.payload)
      if(state.currentAccount && action.payload === state.currentAccount.id){
        this._setCurrentAccount(false)
      }
    },
    _setCurrentAccount:(state,action)=>{
      state.currentAccount = action.payload
    }
  }
})

export const {_addAccounts, _removeAccount, _setCurrentAccount} = auth.actions
export default auth.reducer