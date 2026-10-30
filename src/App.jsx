
import React, { useState } from 'react'
import RegistrationForm from './Form'

export default function App() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    city: '',
    age: '',
    gender: ''
  })

  const [error, setError] = useState({})
  const [submit, setSubmit] = useState('')

  function submitHandler(e) {

    e.preventDefault()

    const newError = {}

    // Name Validation
    if (formData.name.trim() === '') {
      newError.name = "Please Enter Name"
    }

    // Email Validation
    if (formData.email.trim() === '') {
      newError.email = "Please Enter Email"
    } else if (!formData.email.includes("@")) {
      newError.email = "Please include @"
    }

    // Password Validation
    if (formData.password === '') {
      newError.password = "Please Enter Password"
    } else if (formData.password.length < 8) {
      newError.password = "Password must be at least 8 characters"
    }

    // Confirm Password Validation
    if (formData.confirmPassword === '') {
      newError.confirmPassword = "Please Confirm Password"
    } else if (formData.confirmPassword !== formData.password) {
      newError.confirmPassword = "Password Does Not Match"
    }

    // Phone Validation
    if (formData.phone.trim() === '') {
      newError.phone = "Please Enter Phone Number"
    }

    // Age Validation
    if (formData.age === '') {
      newError.age = "Please Enter Age"
    } else if (Number(formData.age) < 18) {
      newError.age = "You Are not 18+"
    }

    // Gender Validation
    if (formData.gender === '') {
      newError.gender = "Please Select the Gender"
    }

    // City Validation
    if (formData.city === '') {
      newError.city = "Please Select The City"
    }

    setError(newError)

    if (Object.keys(newError).length === 0) {
      setSubmit("Form Submitted Successfully!")
    } else {
      setSubmit('')
    }
  }

  return (
    <>
      <RegistrationForm
        formData={formData}
        setFormData={setFormData}
        error={error}
        submitHandler={submitHandler}
        submit={submit}
      />
    </>
  )
}
