// "use server"
// import { Resend } from "resend"
// import EmailTemplate from "@/app/components/EmailTemplate";
// import React from "react";
//
// export interface State {
//     error: string | null
//     success: boolean
// }
//
//     const sendEmail = async (prevState: State, formData: FormData) => {
//         const resend = new Resend(process.env.RESEND_API_KEY);
//         const name = formData.get("name") as string
//         const email = formData.get("email") as string
//         const subject = formData.get("subject") as string
//         const message = formData.get("message") as string
//         try {
//             await resend.emails.send({
//                 from: 'onboarding@resend.dev',
//                 to: 'leonidlee777@gmail.com',
//                 subject: subject,
//                 reply_to: email as string,
//                 react: React.createElement(EmailTemplate, {
//                     name: name as string,
//                     email: email as string,
//                     subject: subject as string,
//                     message: message as string
//                 })
//             })
//             return {
//                 error: null,
//                 success: true
//             }
//         }catch(error: unknown) {
//             console.log(error);
//             return {
//                 error: (error as Error).message,
//                 success: false
//             }
//         }
// }
//
// export default sendEmail;
