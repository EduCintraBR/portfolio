'use server'

import { getErrorMessage, validateString } from '@/lib/utils'
import { Resend } from 'resend'
import ContactFormEmail from '@/email/contact-form-email'
import React from 'react'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
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
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'educin15@hotmail.com',
            subject: 'Message from contact form (educintra.dev)',
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, { message: message as string, senderEmail: senderEmail as string })
        })
    } catch (error: unknown) {
        return getErrorMessage(error)
    }
  }