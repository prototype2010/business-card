"use server"
import { Resend } from "resend"
import EmailTemplate from "@/app/components/EmailTemplate";

export interface State {
    error: string | null
    success: boolean
}
const sendEmail = async (prevState: State, formData: FormData): Promise<State> => {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string
    try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        await resend.emails.send({
            from: "shahmir@mydevpa.ge",
            to: 'leonidlee777@gmail.com',
            subject: subject,
            react: EmailTemplate({ name, email, message,subject })
        })
        return {
            error: null,
            success: true
        }
    } catch (error) {
        console.log(error)
        return {
            error: (error as Error).message,
            success: false
        }
    }
}

export default sendEmail;
