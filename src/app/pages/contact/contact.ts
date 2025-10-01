import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, MatIconModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactPage {
  protected formData = signal({
    name: '',
    email: '',
    message: ''
  });

  protected submitted = signal(false);
  protected sending = signal(false);
  protected error = signal(false);

  private readonly emailConfig = environment.emailjs;

  async onSubmit() {
    if (this.sending()) return;

    this.sending.set(true);
    this.error.set(false);

    try {
      const templateParams = {
        title: 'Contato',
        from_name: this.formData().name,
        from_email: this.formData().email,
        message: this.formData().message,
        to_email: 'leticialimacgi@gmail.com'
      };

      await emailjs.send(
        this.emailConfig.serviceId,
        this.emailConfig.templateId,
        templateParams,
        this.emailConfig.publicKey
      );

      this.submitted.set(true);
      this.formData.set({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        this.submitted.set(false);
      }, 5000);

    } catch (err) {
      console.error('Erro ao enviar email:', err);
      this.error.set(true);

      // Reset error message after 5 seconds
      setTimeout(() => {
        this.error.set(false);
      }, 5000);
    } finally {
      this.sending.set(false);
    }
  }
}
