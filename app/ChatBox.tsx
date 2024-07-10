"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React from 'react'
import Typewriter from "typewriter-effect";
const ChatBox = () => {
    const [message,setMessage] = React.useState("")
    const [responses,setResponses] = React.useState("");
    const [greeting,setGreeting] = React.useState("");
    async function handleSubmit(){
        setResponses("")
        const response = await fetch(`http://localhost:3000/api/generate?prompt=${message}`,{method: "GET",});
        const data = response.text();
        console.log(response);
        setMessage("");
        setResponses(await data);
        setGreeting("Here are your Responses, enjoy!")
      }
    function clearRes(){
      setResponses("");
      setGreeting("");
    }
    const array: string[] = responses.split(",");
    console.log(array);
    const movies = (
        <>
        <div className='flex flex row p-2 text-xl text-white'>
        <ul>
        {/* {array.map((value) => (
            <li><Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(value)
                  .start()
              } } /></li>
        ))} */}
        {array.map((value) => (
          <li className='p-2'>{value}</li>
        ))}
      
      </ul>
      </div>
      {
        responses.trim() == '' ? <></> : <Button onClick={clearRes}>Clear Responses</Button>
      }
      </>
    );
  return (
    <div className='flex flex-col'>
      <Input placeholder="What kind of a movie do you want?" className="bg-[#4D4DFF] w-[500px] h-[90px] ml-[30px] mt-[20px]" value={message} onChange={(e) => setMessage(e.target.value)}></Input>
      <Button className="ml-[230px] mt-[50px] w-[120px] mb-[60px]" onClick={handleSubmit}>Submit</Button>
      <div className='text-white'>
        <Card className='bg-black border-0'>
          <CardHeader>
            <CardTitle className='text-white'>
              {greeting}
            </CardTitle>
          </CardHeader>
          <CardContent className='text-white'>
            {movies}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ChatBox;


