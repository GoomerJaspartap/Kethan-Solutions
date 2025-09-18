// Mailgun configuration
const MAILGUN_API_KEY = import.meta.env.VITE_MAILGUN_API_KEY;
const DOMAIN = import.meta.env.VITE_MAILGUN_DOMAIN;
const MAILGUN_URL = 'https://api.mailgun.net/v3';

export const sendContactEmail = async (formData) => {
  try {
    // Check if environment variables are available
    if (!MAILGUN_API_KEY || !DOMAIN) {
      throw new Error('Mailgun configuration is missing. Please check your environment variables.');
    }
    
    const { fullName, loanType, loanAmount, preferredCommunication, contactInfo, message } = formData;
    
    // Create form data for Mailgun API
    const formDataToSend = new FormData();
    formDataToSend.append('from', `Contact Form <noreply@${DOMAIN}>`);
    formDataToSend.append('to', 'k.s@anugu.net');
    formDataToSend.append('subject', `New Contact Form Submission - ${loanType}`);
    formDataToSend.append('html', `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #000035; border-bottom: 2px solid #000035; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Contact Details</h3>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Loan Type:</strong> ${loanType}</p>
          <p><strong>Loan Amount:</strong> ${loanAmount}</p>
          <p><strong>Preferred Communication:</strong> ${preferredCommunication}</p>
          <p><strong>Contact Info:</strong> ${contactInfo}</p>
          ${message ? `<p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>` : ''}
        </div>
        
        <div style="background-color: #e3f2fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #1976d2;">
            <strong>Note:</strong> This message was sent from your website's contact form.
          </p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
        <p style="color: #666; font-size: 12px; text-align: center;">
          This email was sent from Kethan Solutions contact form.
        </p>
      </div>
    `);
    formDataToSend.append('text', `
      New Contact Form Submission
      
      Name: ${fullName}
      Loan Type: ${loanType}
      Loan Amount: ${loanAmount}
      Preferred Communication: ${preferredCommunication}
      Contact Info: ${contactInfo}
      ${message ? `Message: ${message}` : ''}
      
      This message was sent from your website's contact form.
    `);

    // Send email using Mailgun REST API
    const response = await fetch(`${MAILGUN_URL}/${DOMAIN}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`api:${MAILGUN_API_KEY}`)}`
      },
      body: formDataToSend
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Mailgun API error: ${response.status} - ${errorData}`);
    }

    const result = await response.json();
    
    return {
      success: true,
      messageId: result.id,
      message: 'Email sent successfully'
    };
    
  } catch (error) {
    console.error('Mailgun error:', error);
    return {
      success: false,
      error: error.message || 'Failed to send email'
    };
  }
};
