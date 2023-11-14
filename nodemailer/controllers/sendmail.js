const nodemailer=require("nodemailer")

const sendmail=async (req,res)=>{
    let testAccount=await nodemailer.createTestAccount();

    //connect with smtp server 

    let transport=await nodemailer.createTransport({
        host: "smtp.forwardemail.net",
        port: 585,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: "kaci.lakin@ethereal.email",
          pass: "QSeMGFxcfuw1gXnHEH",
        },
    });
    let info=transport.sendMail(
        {
            from: '"shiva  👻" <shiva@gmail.com>', // sender address
            to: "shivaverma30july@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
          }
      )

    res.json(info);


}
module.exports={sendmail}