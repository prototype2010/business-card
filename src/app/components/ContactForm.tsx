"use client"
import { useEffect } from "react";
import { useFormState } from "react-dom";
import sendEmail from "@/action";

const ContactForm = () => {

    const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
        error: null,
        success: false
    })

    useEffect(() => {
        if (sendEmailState.success) {
            alert("Email sent!")
        }
        if (sendEmailState.error) {
            alert("Error sending email!")
        }
    }, [sendEmailState])

    return(
        <form action={sendEmailAction}>
            <div>
                <div className={'flex flex-col text-white mt-6'}>
                    <label htmlFor="name">Your Name (required)</label>
                    <input className={'px-4 h-10 w-5/6 mt-2 bg-black outline-none focus:shadow-md focus:shadow-mainColor'} type="text" name={'name'}/>
                </div>
                <div className={'flex flex-col text-white mt-6'}>
                    <label htmlFor="email">Your Email (required)</label>
                    <input className={'px-4 h-10 w-5/6 mt-2 bg-black outline-none focus:shadow-md focus:shadow-mainColor'} type="email" name={'email'}/>
                </div>
                <div className={'flex flex-col text-white mt-6'}>
                    <label htmlFor="subject">Subject</label>
                    <input className={'px-4 h-10 w-5/6 mt-2 bg-black outline-none focus:shadow-md focus:shadow-mainColor'} type="text" name={'subject'}/>
                </div>
                <div className={'flex flex-col text-white mt-6'}>
                    <label htmlFor="message">Your Message</label>
                    <textarea className={'p-4 h-40 w-5/6 mt-2 bg-black outline-none focus:shadow-md focus:shadow-mainColor'} cols={40} rows={10} name={'message'}/>
                </div>
                <button type="submit" className={'h-10 w-28 rounded-full bg-mainColor mt-6 hover:opacity-60'}>Send</button>
            </div>
        </form>
    )
}

export default ContactForm;
