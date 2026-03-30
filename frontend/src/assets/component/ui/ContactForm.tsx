import React , {useRef}from 'react';

import emailjs from '@emailjs/browser';


const ContactForm: React.FC = () => {
  //specify the type for the res to be htmlformelement
 const form = useRef<HTMLFormElement>(null);

 //ensure the form reference is not null before submit
 const sendEmail = (e: React.FormEvent) => { 
  e.preventDefault(); // prevent sending empty form

//ensure the form reference if not null / taking the serviceid from the env
if (form.current) { 
  emailjs.sendForm(
    import.meta.env.SERVICE_ID,
    import.meta.env.TEMPLATE_ID,
    form.current,
    import.meta.env.PUBLIC_KEY,
  )
  .then((result) => {
    alert('Message Sent');
    console.log(result.text)
  },(error) => {
    alert(error);
    console.log(error.text);
  })
 
}


 }
  return (
    <form 
    ref={form} 
    onSubmit={sendEmail}
    className='flex flex-col w-full h-full  gap-4 my-10 mx-10'
    >
      <label className='text-md md:text-xl font-semibold'>Name</label>
      <input type="text" name='user_name' className='bg-white rounded' />
      <label className='text-md md:text-xl font-semibold'>Email</label>
      <input type='email' name='user_email' className='bg-white rounded'/>
      <label className='text-md md:text-xl font-semibold'>Message</label>
      <textarea name='message' className='h-40 bg-white rounded'/>
      <input type="submit" value="Send" className='text-md md:text-xl font-semibold self-center md:self-start bg-primary-accent text-white px-6 py-3 rounded-xl shadow-md hover:bg-secondary hover:-translate-y-1 transition-all duration-300 cursor-pointer'  />
      
    </form>
  )
}

export default ContactForm
