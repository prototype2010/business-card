"use client"

import {ReactElement, useEffect, useRef} from 'react';
// import { useFormState } from "react-dom";
// import sendEmail, {State} from "@/action";
// import ContactMessageSubmitting from "@/app/components/ContactMessageSubmiting";

// function useFormState<State, Payload>(
//     action: (state: Awaited<State>, payload: Payload) => State | Promise<State>,
//     initialState: Awaited<State>,
//     permalink?: string,
// ): [state: Awaited<State>, dispatch: (payload: Payload) => void];

const ContactForm = (): ReactElement => {
    const ref = useRef<HTMLFormElement | null>(null);
    // const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
    //     error: null,
    //     success: false
    // })


    // useEffect(() => {
    //     if (sendEmailState.success!) {
    //         ref?.current?.reset();
    //         alert("Email sent!");
    //     }
    //     if (sendEmailState.error!) {
    //         ref?.current?.reset();
    //         alert("Error sending email!")
    //     }
    // }, [sendEmailState])

    return(
        <div >
            <iframe width="100%" height="650"
                    src="https://c6ea27cd.sibforms.com/serve/MUIFAFNEnlVH6oD-IqoCb-6zPkt3R0n5HeuwWcSpjkdVE7JUH3y-f02AofrCclKW4bY6dwN6BC6y29_JxuumDo-Lf_XhNzgth5MnUrg3nlKVYrneJQUsksCU5tNkqxd9SY302qPpukXIW4Osgd2NBMw9iJ1TcyEhwDCXGByD8FwQ5Yt-hTqHYU08Kv4xxWMd6MxgMnW3LsZ8Y_Bd"
                    allowFullScreen
                    className={'overflow-hidden'}></iframe>
            {/*<form*/}
            {/*    ref={ref}*/}
            {/*    // action={sendEmailAction}*/}
            {/*    // action={async (formData) => {*/}
            {/*    //     await sendEmail(formData);*/}
            {/*    //     ref?.current?.reset();*/}
            {/*    // }}*/}
            {/*>*/}
            {/*    <div className={'flex flex-col text-white mt-6'}>*/}
            {/*        <label htmlFor="name">Your Name (required)</label>*/}
            {/*        <input*/}
            {/*            type="text"*/}
            {/*            name={'name'}*/}
            {/*            required={true}*/}
            {/*            maxLength={100}*/}
            {/*            className={'px-4 h-10 w-5/6 mt-2 bg-black outline-none focus:shadow-md focus:shadow-mainColor'}/>*/}
            {/*    </div>*/}
            {/*    <div className={'flex flex-col text-white mt-6'}>*/}
            {/*        <label htmlFor="email">Your Email (required)</label>*/}
            {/*        <input*/}
            {/*            type="email"*/}
            {/*            name={'email'}*/}
            {/*            required={true}*/}
            {/*            maxLength={320}*/}
            {/*            className={'px-4 h-10 w-5/6 mt-2 bg-black outline-none focus:shadow-md focus:shadow-mainColor'}/>*/}
            {/*    </div>*/}
            {/*    <div className={'flex flex-col text-white mt-6'}>*/}
            {/*        <label htmlFor="subject">Subject</label>*/}
            {/*        <input*/}
            {/*            type="text"*/}
            {/*            name={'subject'}*/}
            {/*            maxLength={200}*/}
            {/*            className={'px-4 h-10 w-5/6 mt-2 bg-black outline-none focus:shadow-md focus:shadow-mainColor'} />*/}
            {/*    </div>*/}
            {/*    <div className={'flex flex-col text-white mt-6'}>*/}
            {/*        <label htmlFor="message">Your Message</label>*/}
            {/*        <textarea*/}
            {/*            cols={40}*/}
            {/*            rows={10}*/}
            {/*            name={'message'}*/}
            {/*            maxLength={500}*/}
            {/*            className={'p-4 h-40 w-5/6 mt-2 bg-black outline-none focus:shadow-md focus:shadow-mainColor'} />*/}
            {/*    </div>*/}
            {/*    <button type="submit" className={'h-10 w-28 rounded-full bg-mainColor mt-6 hover:opacity-60'}>Send</button>*/}
            {/*</form>*/}
            {/*<ContactMessageSubmitting success={sendEmailState.success}/>*/}
        </div>
    )
}

export default ContactForm;
