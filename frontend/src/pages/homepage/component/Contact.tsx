import React from 'react'
import ContactForm from '../../../assets/component/ui/ContactForm'
import test2 from '../../../assets/image/heroImage/contactImg.jpg';

const Contact = () => {
  return (
    <div className='w-screen bg-background-gradient-middle flex flex-col  md:flex-row h-auto'>
      <div className='w-full h-full'>
        <img
      src={test2}
      className=' h-full object-cover'
      />
      </div>
      
      <ContactForm/>
    </div>
  )
}

export default Contact;
//contact form in other component and attach here