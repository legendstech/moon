import React, { useState } from 'react';
const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    birthDate: '',
    gender: 'male',
    streetAddress: '',
    streetAddressLine2: '',
    country: '',
    city: '',
    region: '',
    postalCode: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="container back" style={{backgroundColor:'#84c8ed', color:'#fff'}}>
      <header>Registration Form</header>
      <form onSubmit={handleSubmit} className="form" >
      <div className="input-box  text-light">
          <label>Full Name</label>
          <input type="text" placeholder="Enter full name" required />
        </div>

        <div className="input-box">
          <label>Email Address</label>
          <input type="text" placeholder="Enter email address" required />
        </div>

        <div className="column">
          <div className="input-box">
            <label>Phone Number</label>
            <input type="number" placeholder="Enter phone number" required />
          </div>
          <div className="input-box">
            <label>Birth Date</label>
            <input type="date" placeholder="Enter birth date" required />
          </div>
        </div>
        <div className="gender-box ">
          <h3>Gender</h3>
          <div className="gender-option">
            <div className="gender">
              <input
                type="radio"
                id="check-male"
                name="gender"
                value="male"
                        />
              <label htmlFor="check-male">Male</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-female" name="gender" />
              <label for="check-female">Female</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-other" name="gender" />
              <label for="check-other">prefer not to say</label>
            </div>
          </div>
        </div>
        <div class="input-box address">
          <label>Address</label>
          <input type="text" placeholder="Enter street address" required />
          <input type="text" placeholder="Enter street address line 2" required />

        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Registration;
