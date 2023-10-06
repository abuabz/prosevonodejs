const path = require('path')

function returnCareertemp(name,email,phone,message) {
    return `
    
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;0,900;1,200&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <style>
       @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;0,900;1,200&display=swap');
        /* Reset some default styles to ensure consistency */
        body,
        p {
            margin: 0;
            padding: 0;
        }

        img {
            border: 0;
            display: block;
        }

        /* Styles for the email template */
        body {
            background-color: #f4f4f4;
            font-family: 'Montserrat', sans-serif;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            text-align: center;
            background-color: #c5b630;
            color: #ffffff;
            padding: 0px 0;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .footer-icons {
            font-size: 20px;
            margin: 0 10px;
        }

        .content {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 5px;
        }

        .content h1 {
            font-size: 24px;
        }

        .content p {
            font-size: 16px;
            line-height: 1.5;
        }
        .bi{
            color: white;
        }
        .cta-button {
            display: block;
            width: 100%;
            text-align: center;
            background-color: #000000;
            color: #ffffff;
            padding: 10px 0;
            text-decoration: none;
            border-radius: 5px;
        }

        .footer {
            text-align: center;
            margin-top: 20px;
        }

        .subMaindiv {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            width: 600px;
            /* background-color: rgba(128, 128, 128, 0.066); */
        }

        .mainDiv {
            display: flex;
            justify-content: center;
        }

 
        .welcomeheading{
            margin: 5px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <div class="logoimage">
                <img id="imagemail" src="https://abuabz.github.io/EMAILTEMP/images/logo.png" alt="" width="100" style="margin-top: 10px;">
            </div>
            <h2 class="welcomeheading">JOB Enquiry....!</h2>
          
        </div>


        <div class="content">
            <div class="mainDiv">
                <div class="subMaindiv">


                    <img id="imagemail" src="https://abuabz.github.io/EMAILTEMP/images/imagemail.png" alt="" width="300">

                </div>

            </div>
            <h1>Candidate Details</h1>
           <b>
            <p>
                Name  : ${name}
            </p>
            <p>
                Email : ${email}
            </p>
            <p>
                Phone : ${phone}
            </p>
            <p>
                Message: ${message}
            </p>
           </b>
           <br>
         
            <a class="cta-button" href="#">Learn More</a>
        </div>
        <!-- <div class="footer">
          
            <p class="contact-details">Contact us at <a href="mailto:contact@prosevotechnologies.com">contact@prosevotechnologies.com</a></p>
        </div> -->

        <footer style="background-color: #c5b630; text-align: center; padding: 20px 0; border-radius: 0 0 5px 5px; color: #ffffff;">
            <a href="#" class="footer-icons"><i class="bi bi-facebook"></i></a>
            <a href="#" class="footer-icons"><i class="bi bi-twitter"></i></a>
            <a href="#" class="footer-icons"><i class="bi bi-linkedin"></i></a>
            <a href="#" class="footer-icons"><i class="bi bi-instagram"></i></a>
            <a href="#" class="footer-icons"><i class="bi bi-github"></i></a>
            <p class="contact-details">Contact us at <a href="mailto:contact@prosevo.com" style="color: #ffffff;">contact@prosevo.com</a></p>
          </footer>
        
    </div>
</body>

</html>`
}

module.exports = returnCareertemp;