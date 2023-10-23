const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.use(express.json());

// Route to send mass email
router.post("/", async (req, res) => {
  

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "teamcashquiz@gmail.com",
                pass: "rhbkmirwcpsurtdg",
            },
        });

        const mailOptions = {
            from: '"Cash Quiz"<teamcashquiz@gmail.com>',
            to: "contactcashquiz@gmail.com", 
            subject: "Contact Message",
            html: `<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Email Template</title>
              <!-- Include Bootstrap CSS -->
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
              <style>
                /* Additional styles specific to the email template */
                .email-container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 10px;
                }
                .btn-container {
                  text-align: center;
                  margin-top: 20px;
                }
                .custom-warning-btn {
                  color: black;
                  background-color: #ffc107;
                  padding:10px;
                  border-radius: 20px;
                  border-color: #ffc107;
                  text-decoration: none;
                }
                .custom-warning-btn:hover {
                  background-color: #e0a800;
                  border-color: #e0a800;
                  text-decoration: none;
                  color: black;
                }
              </style>
            </head>
            <body>
              <div class="email-container">
                  <h1>Customer Issue Report</h1>
                <br>
                <br>
                <h3>
                <strong>Name: </strong>${req.body.name}<br>
                <strong>Account ID: </strong>${req.body.accountID}<br>
                <strong>Email: </strong>${req.body.email}<br>
                <strong>Issue: </strong> ${req.body.issue}<br>
                <strong>Issue Details: </strong> ${req.body.issuedetail}<br>
                </h3>
              </div>
            </body>
            </html>
            `
        };

        transporter.sendMail(mailOptions, (err, message) => {
            if (err) {
                console.error("Error sending mass email:", err);
                res.status(500).json({ message: "Failed to send mass email" });
            } else {
                console.log("Report mail sent successfully!");
                res.status(200).json({ message: "Report mail sent successfully" });
            }
        });
    } catch (error) {
        console.error("Error sending mass email:", error);
        res.status(500).json({ message: "Failed to send mass email" });
    }
});

module.exports = router;
