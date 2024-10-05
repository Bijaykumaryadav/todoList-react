import { useState,useEffect } from "react"
import { useLoaderData } from "react-router-dom"; 

function Github() {
  const data = useLoaderData();
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/BijayKumaryadav')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
 return (
    <div className="text-center m-4 bg-gray-600 text-white">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" className="w-[300px]" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/BijayKumaryadav");
  
  if (!response.ok) {
    throw new Response("Failed to fetch GitHub data", { status: response.status });
  }

  return response.json(); // Corrected return statement
};