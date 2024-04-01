import { useContext, useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import CardEach from "./components/main/card/CardEach";
import CardContainer from "./components/main/cardContainer/CardContainer"; 
import PaginationCount from "./components/main/pagination/PaginationCount";
import Buttons from "./components/main/buttons/Buttons"; 
import { GlobalContext } from "./components/context/Users";

function App() { 
 
    
// const [users,setUsers] = useState();

// const getUsers = async() => {
//   try{

//     const response = await fetch("https://randomuser.me/api/?results=20"); 
    
    
//     if(response.ok){
      
//       const jsonData = await response.json();
//       setUsers(jsonData.results); 
//     }

//   }catch(error){
//     console.log(error);
//   }
//   } 
  
//   useEffect(()=>{
//     getUsers();

// },[])
//  console.log(users);
const users = useContext(GlobalContext);
console.log(users);
  
  const [page,setPage] = useState(1);
  
   const totalUser = users instanceof Array && users.length; 
   const numberOfPerPage = 5;
   const totalPage = totalUser / numberOfPerPage
   
  const startIndex = (totalUser / totalPage) * (page - 1);
  const finishIndex = startIndex + numberOfPerPage;
  
  
  
  const handlePageChange = (e) => {
    if(e.target.id == 'prev' &&  page > 1){
      setPage(page - 1);

    }else if(e.target.id == 'next'  && page < totalPage){
      setPage(page + 1);

    }
  } 







  return (
    <div className="App">
      <Header />
      <CardContainer>
        <PaginationCount start={startIndex ? startIndex : "1"} finish={finishIndex ? finishIndex : "5"} sumUsers={totalUser ? totalUser: "-"} totalPages={totalPage ? totalPage : "-"}/>
        {
        users instanceof Array &&
          (users.map((item,i,array) => {
            if(i>= startIndex && i< finishIndex){
              return <CardEach key={item.cell} user={item}/>
            }

          }

          ))
        } 
        <Buttons onClick={handlePageChange}/>
      </CardContainer>
    </div>
  );
}

export default App;
