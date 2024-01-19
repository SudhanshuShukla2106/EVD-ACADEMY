import React from 'react'
import Layout from '../Components/Layout/Layout'
import '../styles/Home.css'
import Features from './Features'
const Home = () => {
  return (
    <Layout>
    <div className='background-container'>
    <div className="placeholder-bar">
    <input type='text' placeholder='Search Here' className="searchInput" />
    <button variant='contained' className="searchButton">SEARCH</button>
    </div>
    <h1>Unleash the Potential 
      <br/>
      with EVD academy </h1>
    <p>Lorem ipsum dolor sit amet consectetur. Quam libero suspendisse auctor maecenas. Ac 
      <br/>
      nisl placerat tristique interdum dolor. A morbi lectus pulvinar lacinia bibendum
      <br/>
      consectetur elementum elit. Urna feugiat dignissim nec tLorem ipsum dolor sit amet 
      <br/>
      consectetur. Quam libero suspendisse auctor maecenas. Ac nisl placerat tristique
      <br/>
      interdum dolor. A morbi lectus pulvinar lacinia bibendum consectetur elementum elit. 
      <br/>
      Urna feugiat dignissim nec</p>
      <div className='form-container'>
      <form>
        <h2>Registeration Form</h2>
        <label>
            Name
            <input type='text' name='name' />
            </label>
            <label>
             Email
            <input type='email' name='email' />
            </label>
             <label>
            Phone
            <input type='phone' name='phone' />
            </label>
            <button variant='contained' type='submit'>SUBMIT</button>
      </form>
    </div>
    </div>
    <Features/>
    </Layout>

  )
}

export default Home