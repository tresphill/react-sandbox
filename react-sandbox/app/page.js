'use client'
import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import MyButton from './atoms/MyButton'
import SearchInput from './molecules/Searchinput'

export default function Home() { //parent
  function setStateClickHandler(e){
    
  }
  function searchClickHandler(e){
    
  }
  
  return (
    <main className={styles.main}> 
      <h1>Ello wold</h1> 
    <SearchInput 
      title="Search"
      searchClickHandler="{search}"
      buttonText="GO"
      />
      
      
      <MyButton 
      clickHandler={setStateClickHandler}
      buttonText={"Set State"}
      />
    </main>
  )
}

