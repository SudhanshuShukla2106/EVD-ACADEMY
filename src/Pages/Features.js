import React from 'react'
import Layout from '../Components/Layout/Layout'
import '../styles/Features.css'
const Features = () => {
  return (
    <Layout>
        <div className='feature-container'>
          <h3>Feature</h3>
          <h4>Smart Features</h4>
          <div className='feature-box1'>
          <h3>Feature 1</h3>
          <p>Description of Feature 1.</p>
        </div>
        <div className='feature-box2'>
          <h3>Feature 2</h3>
          <p>Description of Feature 2.</p>
        </div>
        <div className='feature-box3'>
          <h3>Feature 3</h3>
          <p>Description of Feature 3.</p>
        </div>
        <div className='feature-box4'>
          <h3>Feature 4</h3>
          <p>Description of Feature 2.</p>
        </div>
        <div className='feature-box5'>
          <h3>Feature 5</h3>
          <p>Description of Feature 2.</p>
        </div>
        <div className='feature-box6'>
          <h3>Feature 6</h3>
          <p>Description of Feature 2.</p>
        </div>
        </div>
    </Layout>
  )
}

export default Features