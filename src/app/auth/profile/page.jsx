'use client'
import axios from 'axios'
import React from 'react'

const page = () => {
    // const user = JSON.parse(localStorage.getItem("responsedata"));
    const user1 = localStorage.getItem("responsedata");
    const user = JSON.parse(user1);
    console.log(user?.token)
    async function userinfo() {
        try {
            const response = await axios.get("/api/userinfo", {
                headers: {
                    'Authorization': `Bearer ${user?.token}`,
                }
            })
            alert("get info success");
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <button onClick={userinfo} className='w-30 h-10 border '>Get user id</button>  
        </div>
    )
}

export default page