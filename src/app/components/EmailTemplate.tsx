import { Html, Heading, Text } from "@react-email/components";

export interface EmailTemplateProps {
    name: string
    email: string
    subject: string
    message: string
}

const EmailTemplate = ({name,email,message,subject}: EmailTemplateProps) => {
    return (
        <Html lang="en">
            <Heading as="h1">New Form Submission from Upwork</Heading>
            <Text>Here are the details:</Text>
            <Text>Name: {name}</Text>
            <Text>Email: {email}</Text>
            <Text>Subject: {subject}</Text>
            <Text>Message: {message}</Text>
        </Html>
    )
}
export default EmailTemplate
