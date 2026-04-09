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
  className="w-full flex flex-col gap-4 max-w-2xl mx-auto my-16 px-6 py-8  bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg"
>
  <h2 className="text-2xl md:text-3xl font-bold text-center text-shadow-indigo-100 text-white">
    Contact Me
  </h2>

  {/* Name */}
  <div className="flex flex-col gap-4">
    <label className="text-sm md:text-base font-medium text-shadow-indigo-100 text-white">
      Name
    </label>
    <input
      type="text"
      name="user_name"
      placeholder="Your name"
      className="px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent transition"
      required
    />
  </div>

  {/* Email */}
  <div className="flex flex-col gap-2">
    <label className="text-sm md:text-base font-medium text-shadow-indigo-100 text-white">
      Email
    </label>
    <input
      type="email"
      name="user_email"
      placeholder="you@example.com"
      className="px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent transition"
      required
    />
  </div>

  {/* Message */}
  <div className="flex flex-col gap-2">
    <label className="text-sm md:text-base font-medium text-shadow-indigo-100 text-white">
      Message
    </label>
    <textarea
      name="message"
      rows={5}
      placeholder="Write your message..."
      className="px-4 py-3 rounded-lg border border-gray-300 bg-white resize-none focus:outline-none focus:ring-2 focus:ring-primary-accent focus:border-transparent transition"
      required
    />
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="mt-4 self-center md:self-start bg-primary-accent text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-secondary hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
  >
    Send Message
  </button>
</form>
  )
}

export default ContactForm
