const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'osf@hotmail.fr',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app ${name} . Let me know how you get along with the app`
    })
}

const cancelAccountEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'osf@hotmail.fr',
        subject: 'Good continuation !',
        text: `We are sad to see you left the app ${name}, send us a feedback if u have time, good bye good continuation`
    })
}

module.exports = {
    sendWelcomeEmail,
    cancelAccountEmail
}