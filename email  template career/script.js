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
    
</head>

<body style="background-color: #f4f4f4;font-family: 'Montserrat', sans-serif;margin: 0;padding: 0;">
    <div class="container" style="max-width: 600px;margin: 0 auto;padding: 20px;">
        <div class="header" style="text-align: center;background-color: #c5b630;color: #ffffff;padding: 0px 0;display: flex;flex-direction: column;align-items: center;">
            <div class="logoimage">
                <img id="imagemail" src="./images/logo.png" alt="" width="100" style="margin-top: 10px;border: 0;display: block;">
            </div>
            <h2 class="welcomeheading" style="margin: 5px;">JOB Enquiry....!</h2>
          
        </div>


        <div class="content" style="background-color: #ffffff;padding: 20px;border-radius: 5px;">
            <div class="mainDiv" style="display: flex;justify-content: center;">
                <div class="subMaindiv" style="display: flex;justify-content: center;flex-direction: column;align-items: center;width: 600px;">


                    <img id="imagemail" src="./images/imagemail.png" alt="" width="300" style="border: 0;display: block;">

                </div>

            </div>
            <h1 style="font-size: 24px;">Candidate Details</h1>
           <b>
            </b><p style="margin: 0;padding: 0;font-size: 16px;line-height: 1.5;">
                Name  : 
            </p>
            <p style="margin: 0;padding: 0;font-size: 16px;line-height: 1.5;">
                Email :
            </p>
            <p style="margin: 0;padding: 0;font-size: 16px;line-height: 1.5;">
                Phone :
            </p>
            <p style="margin: 0;padding: 0;font-size: 16px;line-height: 1.5;">
                Message:
            </p>
           
           <br>
         
            <a class="cta-button" href="#" style="display: block;width: 100%;text-align: center;background-color: #000000;color: #ffffff;padding: 10px 0;text-decoration: none;border-radius: 5px;">Learn More</a>
        </div>
        <!-- <div class="footer">
          
            <p class="contact-details">Contact us at <a href="mailto:contact@prosevotechnologies.com">contact@prosevotechnologies.com</a></p>
        </div> -->

        <footer style="background-color: #c5b630; text-align: center; padding: 20px 0; border-radius: 0 0 5px 5px; color: #ffffff;">
            <a href="#" class="footer-icons" style="font-size: 20px;margin: 0 10px;"><i class="bi bi-facebook" style="color: white;"></i></a>
            <a href="#" class="footer-icons" style="font-size: 20px;margin: 0 10px;"><i class="bi bi-twitter" style="color: white;"></i></a>
            <a href="#" class="footer-icons" style="font-size: 20px;margin: 0 10px;"><i class="bi bi-linkedin" style="color: white;"></i></a>
            <a href="#" class="footer-icons" style="font-size: 20px;margin: 0 10px;"><i class="bi bi-instagram" style="color: white;"></i></a>
            <a href="#" class="footer-icons" style="font-size: 20px;margin: 0 10px;"><i class="bi bi-github" style="color: white;"></i></a>
            <p class="contact-details" style="margin: 0;padding: 0;">Contact us at <a href="mailto:contact@prosevo.com" style="color: #ffffff;">contact@prosevo.com</a></p>
            </footer>
          
        
    </div>
</body>

</html>
`
}

module.exports = returnCareertemp;