import { useState } from 'react';

function Form({ theme }) {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    service: '',
    timeline: '',
  });
  const [applicants, setApplicants] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newApplicant = {
      id: Date.now(),
      ...formData,
      timeline: formData.timeline || 'Not selected',
    };

    const updatedApplicants = [...applicants, newApplicant];
    setApplicants(updatedApplicants);
    console.table(updatedApplicants);

    alert(`Success! Launch Pad AI will contact ${formData.name} soon.`);
    setFormData({ name: '', contactNumber: '', email: '', service: '', timeline: '' });
  };

  const handleDelete = (id) => {
    const updatedApplicants = applicants.filter((applicant) => applicant.id !== id);
    setApplicants(updatedApplicants);
    console.table(updatedApplicants);
  };
  return (
    <section id="form" className={`form-section ${theme === 'dark' ? 'dark-bg' : 'light-bg'}`}>
      <div className="form-panel">
        <span className="form-kicker">Start here</span>
        <h2>Ready to Launch?</h2>
        <p>Fill out the form below to start your AI journey.</p>
        <form onSubmit={handleSubmit} className="ai-form">
          <input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            name="contactNumber"
            placeholder="Your contact number"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <select name="service" value={formData.service} onChange={handleChange} required>
            <option value="">Select a Service</option>
            <option value="automation">AI Automation</option>
            <option value="frontend">Frontend Design</option>
            <option value="consulting">AI Consulting</option>
          </select>
          <select name="timeline" value={formData.timeline} onChange={handleChange}>
            <option value="">Project Timeline</option>
            <option value="soon">As soon as possible</option>
            <option value="month">Within a month</option>
            <option value="planning">Still planning</option>
          </select>
          <button type="submit" className="form-btn">Join the Waitlist</button>
        </form>
        <div className="applicants">
          <h3>Applicants</h3>
          {applicants.length === 0 ? (
            <p className="applicants__empty">No applicants yet. Submitted details will appear here </p>
          ) : (
            <div className="applicants__list">
              {applicants.map((applicant) => (
                <div className="applicant-card" key={applicant.id}>
                  <div>
                    <strong>{applicant.name}</strong>
                    <p>{applicant.contactNumber}</p>
                    <p>{applicant.email}</p>
                    <p>{applicant.service} | {applicant.timeline}</p>
                  </div>
                  <button type="button" onClick={() => handleDelete(applicant.id)}>
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 
export default Form;

