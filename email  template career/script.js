const path = require('path')

function returnCareertemp(name, email, phone, message) {
    return `
    
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;0,900;1,200&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
    <style>
        body,
        p {
            margin: 0;
            padding: 0;
        }

        img {
            border: 0;
            display: block;
        }

        .fontFamily1 {
            font-family: 'Montserrat', sans-serif;

        }

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
            background-color: #ffffff;
            color: #ffffff;
            padding: 5px 0 10px 0px;
            /* display: flex; */
            /* flex-direction: column; */
            /* align-items: center; */
        }

        .imagemail {
            margin-left: auto;
            /* margin-right: auto; */
        }

        .imagemaill {
            margin-left: auto;
            margin-right: auto;
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

        .bi {
            display: inline;
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
            /* display: flex; */
            /* justify-content: center;
            flex-direction: column;
            align-items: center; */
            /* width: 300px; */
        }

        .mainDiv {
            /* display: flex;
            justify-content: center; */
        }


        .welcomeheading {
            /* width: 8em; */
            /* margin-left: auto; */
            /* margin-right: auto; */
        }
    </style>
</head>

<body>
    <div class="container fontFamily1">
        <div class="header fontFamily1">
            <div class="logoimag fontFamily1e">
                <img class="imagemail"
                    src="https://bitbucket.org/prosevotechnologies/second_logo_2023/raw/36b87524d15d88e15a8d36c432ddcfe067d2c93a/black%20text%20Logo/4x/Artboard%201%20copy%207%404x.png"
                    alt="" width="100" style="margin-top: 10px;">
            </div>
            <!-- <h1 class="welcomeheading fontFamily1">JOB Enquiry....!</h1> -->

        </div>


        <div class="content fontFamily1">
            <div class="mainDiv fontFamily1">
                <div class="subMaindiv fontFamily1">


                    <img class="imagemaill" src="https://abuabz.github.io/EMAILTEMP/images/msgimmage.png" alt=""
                        width="300">

                </div>

            </div>
            <div>
                <h1 class="fontFamily1">Candidate Details</h1>
            </div>
            <b>
                <p>
                    Name : ${name}
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

        </div>
        <div
            style="background-color: #4c3304; text-align: center; padding: 20px 0; border-radius: 0 0 5px 5px; color: #ffffff;">
            
            <p class="contact-details">Contact us at <a href="mailto:contact@prosevo.com"
                    style="color: #ffffff;">contact@prosevo.com</a></p>
        </div>

    </div>
</body>

</html>
    `
}

module.exports = returnCareertemp;