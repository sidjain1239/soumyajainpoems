"use client"
import Image from "next/image";
import "./page.css";
import React, { useState, useEffect } from 'react';
import { AllPoemsMongo } from "./backend/mongo";
AllPoemsMongo
export default function Home() {
  const [poems, setPoems] = useState([]);
  useEffect( () => {
    async function fetchData() {
      await AllPoemsMongo()
      .then((response) => { 
        console.log("response",response.data)
        setPoems(response.data.reverse());

      })
    }
    fetchData();
  },[]);

  console.log("poems",poems)
  return (
    <>
      <div className='flex justify-between w-full m-0 flex-col'>

        <div className="box">
          <div className="box1">
            <div className="title">Poems <br /> By <br />Soumya Jain</div>
            <div className="disc">
              Myself Soumya Jain. I am 16  right now.Writing is one of my interests . I am also indulged in public speaking presently.
              I hope you will enjoy reading my Write ups.<br />
              Thank you
            </div>
          </div>
          <div className="box2">
            <div className="header">
              <div className="title2">My Writeups</div>
              <div className="search ">
                <input type="text" placeholder="Search Poems" className="searchInput" />  
              </div>
            </div>
          <div className="poems">
              {poems.map((poem) => (
            <div className="poemCard" key={poem.id}>
                <div className="poem">
                  <div className="poemTitle">{poem.title}</div>
                  <div className="poemImage">
                    <img src={poem.filename} alt="poem"  />
<Image
            src={poem.filename}
            alt="poem"
            fill
           // Makes it responsive
            style={{ objectFit: 'contain' }} // Keeps aspect ratio
          />
                  </div>
                </div>
            </div>
              ))}
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
