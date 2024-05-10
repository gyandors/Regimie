import './ContactForm.css';

export default function ContactForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const userData = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };

    async function submitData() {
      const response = await fetch(
        'https://test-api-cd004-default-rtdb.firebaseio.com/userdata.json',
        {
          method: 'POST',
          body: JSON.stringify(userData),
        }
      );
      console.log(response);
    }

    submitData();
  }
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Get in touch!</h2>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" minLength={10} maxLength={10} required />
      </div>
      <p>By submitting this form, you agree to Regimie’s Privacy Policy.</p>
      <button type="submit">Submit</button>
    </form>
  );
}
