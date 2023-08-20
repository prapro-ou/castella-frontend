import Tips from "@/features/components/Tips";
import DestinationList from "@/features/destinations/components/DestinationList";
import { useEffect, useState } from "react";


export default function Destinations() {
  const [dests,setDests]=useState([]);
  useEffect(()=>{
    const cookieAsJson = JSON.parse(document.cookie);
    fetch(`${process.env.NEXT_PUBLIC_URL}/destinations`,{
      method:'GET',
      mode:'cors',
      headers:{
        'Authorization': `Bearer ${cookieAsJson.token}`,
      },})
      .then(function (response){
        console.log(response);
        return response.json();
      })
      .then( function (data){
        console.log(data.dms);
        setDests(data.dms);
      })
      .catch(function (error){
        console.log(error);
      });
  },[]);
  function clickTest(){
    console.log("Add Clicked");
  }

  return (
    <div className="flex h-screen bg-gray">
      <div className="w-72 bg-white">
        <DestinationList destinations={dests} onClickAddButton={clickTest} />
      </div>
      <div className="m-auto">
        <Tips />
      </div>
    </div>
  );
}
