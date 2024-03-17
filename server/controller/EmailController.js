
const nodemailer = require('nodemailer')
// const sendGridTransport = require('nodemailer-sendgrid-transport')
const sendGridTransport = require('sendgrid')

// const transporter  = nodemailer.createTransport(
//     sendGridTransport({
//         auth:{
//             api_key:process.env.API_SENDGRID,
//         },
//     })
// )

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hassantanoli1807@gmail.com',
    pass: 'plhi yjcy bqli fsmp'
  }
});

const EmailController = {
    async ContactEmailController(req,res){
        try {
            const {name,email,msg} = req.body;
            if(!name || !email || !msg){
                return res.status(500).send({
                    success:false,
                    message:"all  feilds required",
                })
            }

            // email matter 

            transporter.sendMail({
                to: "hassantanoli1807@gmail.com",
                from: "mht1872000@gmail.com",
                subject: "Regarding mern portfolio",
                html:`
                <h5>Detail information</h5>

                <ul>
                <li><p>Name: ${name}</p></li>
                <li><p>Email: ${email}</p></li>
                <li><p>Message: ${msg}</p></li>

                </ul>
                `,
            });
            return res.status(200).send({
                success:true,
                message:"your message has beenn sent ssuccesfuly"
            })
            console.log("hogaya run")
            
        } catch (error) {
            console.log(error)
            return res.status(500).send({
                success:false,
                message: "error in contact email",
                error
            })
        }
    }
}

module.exports = EmailController