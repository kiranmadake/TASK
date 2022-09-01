import React from "react";
import UserCard from "../components/UserCard/UserCard";
const Users =()=>{
    return(
        <>
          <div id="userCards">
        <UserCard name="Kiran Madake"
        mobNumber="+919552241517"
        email="kiransmadake450@gmail.com"
        add="Shrigonda"/>
        <UserCard name="Dipak Ohol"
        mobNumber="+917745043766"
        email="dipak96@gmail.com"
        add="Shirur"/>
        <UserCard name="Sachin Labade"
        mobNumber="+919697982424"
        email="sachu9696@gmail.com"
        add="Shrigonda"/>
        <UserCard name="Gaurav Dhalawade"
        mobNumber="+919011557545"
        email="gaurav96@gmail.com"
        add="Karjat"/>
       
      </div>
      </>
    )
}
export default Users;