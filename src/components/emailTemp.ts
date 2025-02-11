// src/emailTemplate.ts
export interface EmailTemplateParams {
    recipientName: string;
    interviewDate: string; // e.g., "2025-02-10"
    interviewTime: string; // e.g., "7:06 pm - 7:16 pm"
    footerText?: string;
  }
  
  export const generateEmailTemplate = (params: EmailTemplateParams): string => {
    const { recipientName, interviewDate, interviewTime, footerText } = params;
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Interview Scheduled</title>
        <style>
          body {
            font-family: 'Poppins', sans-serif;
            background-color: #f8f9fa;
            margin: 0;
            padding: 0;
            color: #343a40;
          }
          .container {
            width: 100%;
            max-width: 600px;
            margin: 30px auto;
            background-color: #ffffff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            padding-bottom: 20px;
            border-bottom: 1px solid #dee2e6;
          }
          .header h1 {
            margin: 0;
            font-size: 26px;
            color: #007bff;
          }
          .content {
            padding: 20px 0;
            font-size: 16px;
            line-height: 1.6;
          }
          .signature {
            margin-top: 30px;
            font-size: 16px;
            font-weight: bold;
            color: #007bff;
          }
          .footer {
            text-align: center;
            font-size: 12px;
            color: #6c757d;
            border-top: 1px solid #dee2e6;
            padding-top: 10px;
            margin-top: 20px;
          }
          .cta {
            display: inline-block;
            padding: 12px 24px;
            background-color: #007bff;
            color: #ffffff !important;
            text-decoration: none;
            border-radius: 5px;
            text-align: center;
            margin: 20px 0;
            transition: background-color 0.3s ease;
          }
          .cta:hover {
            background-color: #0056b3;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Interview Scheduled!</h1>
          </div>
          <div class="content">
            <p>Dear ${recipientName},</p>
            <p>
              We are pleased to inform you that your interview has been scheduled.
            </p>
            <p>
              <strong>Date:</strong> ${interviewDate} <br/>
              <strong>Time:</strong> ${interviewTime}
            </p>
            <p>
              Please ensure that you are available at the scheduled time. If you have any questions, feel free to contact us.
            </p>
          </div>
          <div class="signature">
            Best regards, <br/>
            Piyush Joshi
          </div>
        </div>
      </body>
    </html>
    `;
  };
  