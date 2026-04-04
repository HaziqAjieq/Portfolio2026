import React from 'react'
import ContactForm from '../../../assets/component/ui/ContactForm'
import test2 from '../../../assets/image/heroImage/contactImg.jpg';

const Contact = () => {
  return (
    <div className='relative w-screen flex items-center align-middle z-0 h-auto'>
      <div className='absolute w-full h-full'>
        <img
      src={test2}
      className='absolute inset-0 w-full h-full object-cover'
      />
      </div>
      <div className='flex flex-1 w-full'>
        <ContactForm/>
      </div>
      
    </div>
  )
}

export default Contact;
//contact form in other component and attach here