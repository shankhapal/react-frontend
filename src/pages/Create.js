import React, { useEffect, useState } from 'react';
import http from '../components/http';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));

    // Hide error message when user starts typing
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  const validateInputs = () => {
    let newErrors = {};

    if (!inputs.name) {
      newErrors.name = 'Name is required';
    }
    if (!inputs.email) {
      newErrors.email = 'Email is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const hideErrorsAfterTime = () => {
    // Hide error messages after 5 seconds (5000 milliseconds)
    setTimeout(() => {
      setErrors({});
    }, 5000);
  };

  const hideSuccessMessageAfterTime = () => {
    // Hide success message after 3 seconds (3000 milliseconds)
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  useEffect(() => {
    hideErrorsAfterTime();
    hideSuccessMessageAfterTime();
  }, [errors, successMessage]);

  const submitForm = () => {
    if (validateInputs()) {
      http
        .post('/users', inputs)
        .then((res) => {
          setSuccessMessage('Data inserted successfully');
          setInputs({});
          navigate('/');
        })
        .catch((error) => {

          if (error.response) {
          // The error has a response from the server
          if (error.response.status === 422) {
            // Handle validation errors (status code 422) if needed
            // You can access error.response.data to get detailed validation error messages
            setErrors({ serverError: 'Email already exists' });
          } else {
            // Handle other server errors (e.g., 500 Internal Server Error)
            setErrors({ serverError: 'An error occurred on the server.' });
          }
        } else {
          // Handle network errors or other issues
          setErrors({ serverError: 'An error occurred. Please try again later.' });
        }

        console.error('Error', error);
        hideErrorsAfterTime();
      });
        
    } else {
      alert('Please enter required fields');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-6 mt-5">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title text-center">User Form</h2>
              {successMessage && (
                <div className="alert alert-success">{successMessage}</div>
              )}
              {errors.serverError && (
                <div className="alert alert-danger">{errors.serverError}</div>
              )}
              <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  id="name"
                  value={inputs.name || ''}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="email"
                  value={inputs.email || ''}
                  onChange={handleChange}
                  placeholder="name@example.com"
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={submitForm}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
