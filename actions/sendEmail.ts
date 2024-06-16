'use server'

import { getErrorMessage, validateString } from '@/lib/utils'
import { Resend } from 'resend'
import ContactFormEmail from '@/email/contact-form-email'
import React from 'react'
import { CreateEmailResponse } from 'resend/build/src/emails/interfaces'

type SendEmailSuccess = { data: CreateEmailResponse };
type SendEmailError = { error: string };
type SendEmailResponse = SendEmailSuccess | SendEmailError;

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData): Promise<SendEmailResponse> {
    const senderEmail = formData.get('senderEmail')
    const message = formData.get('message')

    // simple server side validation
    if (!validateString(senderEmail, 500)) {
        return {
            error: 'Invalid sender email'
        }
    }
    if (!validateString(message, 5000)) {
        return {
            error: 'Invalid message'
        }
    }

    try {
        const data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'educin15@hotmail.com',
            subject: 'Message from contact form (educintra.dev)',
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, { message: message as string, senderEmail: senderEmail as string })
        })
        return { data }
    } catch (error: unknown) {
        return { error: getErrorMessage(error) }
    }
  }