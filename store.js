import { createWrapper } from 'next-redux-wrapper'
import { createStore } from 'redux'
import data from './pages/api/data.json'
// could also do this in useContex with React hooks
//  using a state.provider wrapper to wrap the context in the application, and then just pull it in and dispatch decision
// inital state 
const startState = {
    cards: []
}
//actions 
export const initalCards = () => {
    return {
        type:'INITALCARDS',
        cards: data,
    }
}
export const addItem = (item) => {
    return {
        type:'ADD',
        item:item,
    }
}
//reducers
export const reducer = (state = initalState, action) => {
    switch(action.type) {
        case 'INITALCARDS':
            return {
                cards: action.cards
            }
        case 'ADD':
            return {
                ...state,
                cards: [...state.cards, action.item],
            }
        default: return state     
        
    }
}
//create store 
const store =(intialState = startState) => {
    return createStore(reducer, intialState)
}

export const initStore = createWrapper(store)