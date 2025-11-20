import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as brevo from '@getbrevo/brevo';

export interface EmailOptions {
  to: string;
  subject: string;
  htmlContent: string;
  textContent?: string;
}

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private apiInstance: brevo.TransactionalEmailsApi;
  private readonly senderEmail: string;
  private readonly senderName: string;

  constructor(private readonly configService: ConfigService) {
    const apiKey = this.configService.get<string>('BREVO_API_KEY');

    if (!apiKey) {
      this.logger.warn(
        '⚠️ BREVO_API_KEY no configurada. Los emails no se enviarán.',
      );
      return;
    }

    try {
      this.apiInstance = new brevo.TransactionalEmailsApi();
      this.apiInstance.setApiKey(
        brevo.TransactionalEmailsApiApiKeys.apiKey,
        apiKey,
      );

      this.senderEmail = this.configService.get<string>(
        'BREVO_SENDER_EMAIL',
        'noreply@pethealth.com',
      );
      this.senderName = this.configService.get<string>(
        'BREVO_SENDER_NAME',
        'Pet Health Tracker',
      );

      this.logger.log(`✅ EmailService configurado correctamente`);
      this.logger.log(`📧 Remitente: ${this.senderName} <${this.senderEmail}>`);
    } catch (error) {
      this.logger.error('❌ Error al configurar Brevo:', error);
    }
  }

  async sendEmail(options: EmailOptions): Promise<boolean> {
    if (!this.apiInstance) {
      this.logger.warn('⚠️ Brevo no configurado. Email simulado:', {
        to: options.to,
        subject: options.subject,
      });
      return false;
    }

    try {
      this.logger.log(`📤 Enviando email a ${options.to}...`);

      const sendSmtpEmail = new brevo.SendSmtpEmail();
      sendSmtpEmail.sender = { email: this.senderEmail, name: this.senderName };
      sendSmtpEmail.to = [{ email: options.to }];
      sendSmtpEmail.subject = options.subject;
      sendSmtpEmail.htmlContent = options.htmlContent;

      if (options.textContent) {
        sendSmtpEmail.textContent = options.textContent;
      }

      const result = await this.apiInstance.sendTransacEmail(sendSmtpEmail);
      this.logger.log(
        `✅ Email enviado exitosamente a ${options.to} | Subject: "${options.subject}"`,
      );
      if (result.body && 'messageId' in result.body) {
        this.logger.log(`📬 Message ID: ${result.body.messageId}`);
      }
      return true;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      this.logger.error(
        `❌ Error al enviar email a ${options.to}:`,
        errorMessage,
      );
      if (error instanceof Error && error.stack) {
        this.logger.debug(`Stack trace: ${error.stack}`);
      }

      return false;
    }
  }

  async sendPasswordResetEmail(
    email: string,
    resetLink: string,
  ): Promise<boolean> {
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .button { display: inline-block; padding: 12px 30px; background: #667eea; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
          .warning { background: #fff3cd; border-left: 4px solid #ffc107; padding: 12px; margin: 15px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🐾 Pet Health Tracker</h1>
          </div>
          <div class="content">
            <h2>Recuperación de Contraseña</h2>
            <p>Hola,</p>
            <p>Recibimos una solicitud para restablecer la contraseña de tu cuenta.</p>
            <p>Haz clic en el siguiente botón para crear una nueva contraseña:</p>
            <p style="text-align: center;">
              <a href="${resetLink}" class="button">Restablecer Contraseña</a>
            </p>
            <p>O copia y pega este enlace en tu navegador:</p>
            <p style="word-break: break-all; background: white; padding: 10px; border-radius: 5px;">
              ${resetLink}
            </p>
            <div class="warning">
              <strong>⚠️ Importante:</strong> Este enlace expirará en <strong>15 minutos</strong>.
            </div>
            <p>Si no solicitaste este cambio, puedes ignorar este correo de forma segura.</p>
            <p>Saludos,<br>El equipo de Pet Health Tracker</p>
          </div>
          <div class="footer">
            <p>Este es un correo automático, por favor no respondas a este mensaje.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const textContent = `
Recuperación de Contraseña - Pet Health Tracker

Recibimos una solicitud para restablecer la contraseña de tu cuenta.

Para crear una nueva contraseña, visita el siguiente enlace:
${resetLink}

⚠️ Este enlace expirará en 15 minutos.

Si no solicitaste este cambio, puedes ignorar este correo de forma segura.

Saludos,
El equipo de Pet Health Tracker
    `.trim();

    return this.sendEmail({
      to: email,
      subject: 'Restablecer tu contraseña - Pet Health Tracker 🐾',
      htmlContent,
      textContent,
    });
  }

  async sendWelcomeEmail(email: string, username: string): Promise<boolean> {
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🐾 ¡Bienvenido a Pet Health Tracker!</h1>
          </div>
          <div class="content">
            <h2>Hola ${username},</h2>
            <p>¡Gracias por unirte a Pet Health Tracker! Estamos emocionados de tenerte con nosotros.</p>
            <p>Ahora puedes empezar a gestionar la salud de tus mascotas de manera fácil y organizada.</p>
            <p>Saludos,<br>El equipo de Pet Health Tracker</p>
          </div>
        </div>
      </body>
      </html>
    `;

    return this.sendEmail({
      to: email,
      subject: '¡Bienvenido a Pet Health Tracker! 🐾',
      htmlContent,
      textContent: `¡Hola ${username}! Bienvenido a Pet Health Tracker. Gracias por unirte a nosotros.`,
    });
  }
}
