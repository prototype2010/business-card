import {ReactElement} from "react";

const ContactMessageSubmitting = ({success}: {success: boolean }): ReactElement => {


    return(
        success ? <div id={'submit-message'} className={'mt-10 border-2 border-red-600 p-2 inline-block text-white'}>There was an error trying to send your message. Please try again later.</div>

            : <div id={'submit-message'} className={'mt-10 border-2 border-mainColor p-2 mx-[20%] inline-block mx-auto  text-white'}>Your message has been sent successfully</div>
    )
}

export default ContactMessageSubmitting
