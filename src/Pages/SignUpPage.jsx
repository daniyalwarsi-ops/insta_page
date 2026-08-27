import React from "react";
import "./SignUpPage.css";

function getMonths() {
  return [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
}

function getDays() {
  var days = [];
  for (var i = 1; i <= 31; i++) {
    days.push(i);
  }
  return days;
}

function getYears() {
  var currentYear = 2026;
  var years = [];
  for (var j = 0; j < 100; j++) {
    years.push(currentYear - j);
  }
  return years;
}

function SignUpPage() {
  const months = getMonths();
  const days = getDays();
  const years = getYears();

  return (
    <main className="signup-page">
      {/* Back Button */}
      <div className="signup-page__back-row">
        <button className="signup-page__back-btn" aria-label="Go back">
          <svg
            className="signup-page__back-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      {/* Header Meta Logo */}
      <div className="signup-page__header">
        <div className="signup-page__meta-branding">
          <span>∞</span> Meta
        </div>
        <h1 className="signup-page__title">Get started on Instagram</h1>
        <p className="signup-page__subtitle">
          Sign up to see photos and videos from your friends.
        </p>
      </div>

      {/* Registration Form */}
      <form className="signup-form">
        {/* Mobile or Email */}
        <div className="field-group">
          <label className="field-label">Mobile number or email</label>
          <input
            type="text"
            name="contact"
            placeholder="Mobile number or email"
            className="field-input"
          />
          <p className="field-hint">
            You may receive notifications from us.{" "}
            <a>Learn why we ask for your contact information</a>
          </p>
        </div>

        {/* Password */}
        <div className="field-group">
          <label className="field-label">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="field-input"
          />
        </div>

        {/* Birthday Inputs */}
        <div className="field-group">
          <div className="birthday-label-row">
            <label className="field-label" style={{ marginBottom: 0 }}>
              Birthday
            </label>
            <span
              className="birthday-info-icon"
              title="Providing your birthday helps make sure you get the right experience for your age."
            >
              
            </span>
          </div>
          <div className="birthday-grid">
            <input
              type="text"
              name="month"
              className="field-select"
              placeholder="Month"
              maxLength={2}
              inputMode="numeric"
            />

            <input
              type="text"
              name="day"
              className="field-select"
              placeholder="Day"
              maxLength={2}
              inputMode="numeric"
            />

            <input
              type="text"
              name="year"
              className="field-select"
              placeholder="Year"
              maxLength={4}
              inputMode="numeric"
            />
          </div>
        </div>

        {/* Name */}
        <div className="field-group">
          <label className="field-label">Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Full name"
            className="field-input"
          />
        </div>

        {/* Username */}
        <div className="field-group">
          <label className="field-label">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="field-input"
          />
        </div>

        {/* Legal Disclaimers */}
        <div className="legal-notice">
          <p>
            People who use our service may have uploaded your contact
            information to Instagram. <a>Learn more</a>.
          </p>
          <p>
            By tapping Submit, you agree to create an account and to Instagram's{" "}
            <a>Terms</a>, <a>Privacy Policy</a> and <a>Cookies Policy</a>.
          </p>
          <p>
            The <a>Privacy Policy</a> describes the ways we can use the
            information we collect when you create an account.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="signup-form__actions">
          <button type="button" className="btn btn-primary">
            Submit
          </button>
          <button type="button" className="btn btn-secondary">
            I already have an account
          </button>
        </div>
      </form>
    </main>
  );
}

export default SignUpPage;
