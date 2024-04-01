


import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'


export const GlobalContext = createContext();

export const Users = ({children}) => {
const [users,setUsers] = useState("");

const getUsers = async() => {
  try{

    const response = await fetch("https://randomuser.me/api/?results=50"); 
    
    
    if(response.ok){
      
      const jsonData = await response.json();
      setUsers(jsonData.results); 
    }

  }catch(error){
    console.log(error);
  }
} 
useEffect(()=>{
    getUsers();

},[])
// console.log(users);


  return (
    <GlobalContext.Provider value={users}>
        {children}
    </GlobalContext.Provider>
    
  )
}
 