
import React from 'react'
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa'

export default function RegistrationForm({
  formData,
  setFormData,
  error,
  submitHandler,
  submit
}) {

  return (
    <div className="min-h-screen bg-[#09090F] flex items-center justify-center p-4">

      {/* Background Glow */}
      <div className="fixed top-10 left-10 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full"></div>
      <div className="fixed bottom-10 right-10 w-72 h-72 bg-pink-600/20 blur-[120px] rounded-full"></div>

      {/* Registration Card */}
      <div className="relative w-full max-w-4xl bg-[#141420] border border-purple-500/20 rounded-3xl p-6 md:p-8 shadow-[0_0_50px_rgba(168,85,247,0.15)]">

        {/* Heading */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white text-xl mb-3">
            <FaUser />
          </div>

          <h1 className="text-3xl font-bold text-white">
            Create Account
          </h1>

          <p className="text-gray-400 text-sm mt-2">
            Join us today and get started!
          </p>
        </div>

        <form onSubmit={submitHandler} className="grid grid-cols-2 gap-x-5 gap-y-4">

          {/* Full Name */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Full Name
            </label>

            <div className="flex items-center gap-3 bg-[#1C1C2B] border border-gray-700 rounded-xl px-3 focus-within:border-purple-500 transition">
              <FaUser className="text-purple-400 text-sm" />

              <input
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-transparent py-3 text-white outline-none placeholder:text-gray-500 text-sm"
              />
            </div>

            {error.name && (
              <p className="text-red-400 text-xs mt-1">{error.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Email Address
            </label>

            <div className="flex items-center gap-3 bg-[#1C1C2B] border border-gray-700 rounded-xl px-3 focus-within:border-purple-500 transition">
              <FaEnvelope className="text-purple-400 text-sm" />

              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-transparent py-3 text-white outline-none placeholder:text-gray-500 text-sm"
              />
            </div>

            {error.email && (
              <p className="text-red-400 text-xs mt-1">{error.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Password
            </label>

            <div className="flex items-center gap-3 bg-[#1C1C2B] border border-gray-700 rounded-xl px-3 focus-within:border-purple-500 transition">
              <FaLock className="text-purple-400 text-sm" />

              <input
                type="password"
                placeholder="Create password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full bg-transparent py-3 text-white outline-none placeholder:text-gray-500 text-sm"
              />
            </div>

            {error.password && (
              <p className="text-red-400 text-xs mt-1">{error.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Confirm Password
            </label>

            <div className="flex items-center gap-3 bg-[#1C1C2B] border border-gray-700 rounded-xl px-3 focus-within:border-purple-500 transition">
              <FaLock className="text-purple-400 text-sm" />

              <input
                type="password"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                className="w-full bg-transparent py-3 text-white outline-none placeholder:text-gray-500 text-sm"
              />
            </div>

            {error.confirmPassword && (
              <p className="text-red-400 text-xs mt-1">{error.confirmPassword}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Phone Number
            </label>

            <div className="flex items-center gap-3 bg-[#1C1C2B] border border-gray-700 rounded-xl px-3 focus-within:border-purple-500 transition">
              <FaPhone className="text-purple-400 text-sm" />

              <input
                type="tel"
                placeholder="Phone number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full bg-transparent py-3 text-white outline-none placeholder:text-gray-500 text-sm"
              />
            </div>

            {error.phone && (
              <p className="text-red-400 text-xs mt-1">{error.phone}</p>
            )}
          </div>

          {/* Age */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Age
            </label>

            <input
              type="number"
              placeholder="Enter your age"
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
              className="w-full bg-[#1C1C2B] border border-gray-700 rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500 transition text-sm"
            />

            {error.age && (
              <p className="text-red-400 text-xs mt-1">{error.age}</p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Gender
            </label>

            <div className="flex items-center gap-4 bg-[#1C1C2B] border border-gray-700 rounded-xl px-3 py-3">

              {['Male', 'Female', 'Other'].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-2 text-gray-300 text-sm cursor-pointer"
                >
                  <input
                    type="radio"
                    name="gender"
                    value={item}
                    checked={formData.gender === item}
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                    className="accent-purple-500"
                  />
                  {item}
                </label>
              ))}

            </div>

            {error.gender && (
              <p className="text-red-400 text-xs mt-1">{error.gender}</p>
            )}
          </div>

          {/* City */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              City
            </label>

            <div className="flex items-center gap-3 bg-[#1C1C2B] border border-gray-700 rounded-xl px-3 focus-within:border-purple-500 transition">
              <FaMapMarkerAlt className="text-purple-400 text-sm" />

              <select
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                className="w-full bg-transparent py-3 text-gray-400 outline-none text-sm"
              >
                <option value="" disabled className="bg-[#1C1C2B]">
                  Select your city
                </option>
                <option value="Jaipur" className="bg-[#1C1C2B] text-white">Jaipur</option>
                <option value="Delhi" className="bg-[#1C1C2B] text-white">Delhi</option>
                <option value="Mumbai" className="bg-[#1C1C2B] text-white">Mumbai</option>
                <option value="Bengaluru" className="bg-[#1C1C2B] text-white">Bengaluru</option>
                <option value="Other" className="bg-[#1C1C2B] text-white">Other</option>
              </select>
            </div>

            {error.city && (
              <p className="text-red-400 text-xs mt-1">{error.city}</p>
            )}
          </div>

          {/* Terms */}
          <div className="col-span-2 flex items-center gap-2 mt-1">
            <input
              type="checkbox"
              className="accent-purple-500 w-4 h-4"
            />

            <p className="text-gray-400 text-sm">
              I agree to the
              <span className="text-purple-400 ml-1">Terms & Conditions</span>
            </p>
          </div>

          {/* Submit Button */}
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-linear-to-r from-purple-600 to-pink-600 text-white font-bold hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:scale-[1.01] active:scale-95 transition duration-300"
            >
              Create Account
            </button>
          </div>

          {/* Success Message */}
          {submit && (
            <p className="col-span-2 text-center text-green-400 font-medium">
              {submit}
            </p>
          )}

          {/* Sign In */}
          <p className="col-span-2 text-center text-gray-500 text-sm">
            Already have an account?
            <span className="text-purple-400 font-semibold ml-1">
              Sign In
            </span>
          </p>

        </form>
      </div>
    </div>
  )
}
