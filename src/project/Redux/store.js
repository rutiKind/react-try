import { produce } from 'immer';

import { createStore } from 'redux';

//State - משתנה גלובלי שיהיה מוכר לכל הקומפוננטות
//initialState = סטייט מאותחל
//שם מקובל - לא חובה
// const initialState = {
//       Recipes: [
//         { name: 'apple', color: 'green', password: '1' ,cost: 5},
//         { name: 'orange', color: 'orange', password: '2' ,cost: 3 },
//         { name: 'peach', color: 'orange', password: '3' ,cost: 4 },
//         { name: 'melon', color: 'orange', password: '4' ,cost: 6 },
//         { name: 'potato', color: 'red', password: '5' ,cost: 8 },

//     ],
// }
// const initialState1={
//     Categories: [
//         {id:'1',name: 'easy'},
//         {id:'2',name: 'meduim'},
//         {id:'3',name: 'hard'},
//         {id:'4',name: 'very hard'}

//     ]
// }

const initialState={
    Customers: [
        {id:'1',name: 'shifi',email:'gfdsf.gmail.com',password:'gfds'},
        {id:'2',name: 'racheli',email:'gfdsf.gmail.com',password:'gfds'},
        {id:'3',name: 'ruti',email:'gfdsf.gmail.com',password:'gfds'},
        {id:'4',name: 'naama',email:'gfdsf.gmail.com',password:'gfds'}

    ]
}


//reducer - לא מילה שמורה!
//produce - פונקציה מובנית
//מזהה את הפעולות שנשלחות לאויר ומפעילה אותן בפועל על הסטייט
//מקבלת שני ארגומנטים
//1. callback פונקציית 
//2. סטייט שעליו נפעיל את הפעולות
//הפונקציה הפנימית מקבלת שני ארגומנטים
//1. state - הסטייט שהתקבל בפונקציה החיצונית
//2. action - פעולה כלשהיא
//הפונקציה הפנימית תבדוק איזה פעולה נשלחה ותפעיל אותה על הסטייט
const reducer = produce((state, action) => {

    switch (action.type) {
        case 'UPDATE_RECIPE':
            state.Recipes = action.payload
            break;
        case 'ADD_RECIPE':
            debugger
            state.Recipes = [...state.Recipes, action.payload]
            break;
        case 'ADD_CATEGORY':
            state.Categories=[...state.Categories,action.payload]
            break;
        case 'UPDATE_CATEGORY':
            state.Categories=action.payload
            break;
        case 'ADD_CUSTOMER':
           state.Customers=[...state.Customers,action.payload]
           break;
        case 'UPDATE_CUSTOMER':
         state.Customers=action.payload
        default:
            break;
    }

}, initialState)

//יצירת המחסן - מקבל את הרדיוסר
const store = createStore(reducer)
window.store = store;
export default reducer;