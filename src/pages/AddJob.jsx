import { useState, useContext } from "react";
import { JobContext } from "../context/JobContext";
import { addJob } from "../services/api";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const { setJobs } = useContext(JobContext);
  const [formData, setFormData] = useState({
    position: "",
    company: "",
    status: "Applied",
    date: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.position || !formData.company || !formData.date) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await addJob(formData);
      setJobs((prev) => [...prev, response.data]);
      navigate("/dashboard");
    } catch (err) {
      console.error("Error adding job:", err);
      setError("Something went wrong!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl mt-10 p-10 bg-gray-800 rounded-xl shadow-2xl transition-all duration-300">
        <h2 className="text-4xl font-semibold text-center mb-8 text-teal-400">
          Add New Job
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Input Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="position"
              placeholder="Job Position"
              value={formData.position}
              onChange={handleChange}
              className="w-full p-4 rounded-lg text-black border-2 border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-400 hover:border-teal-500 transition"
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-4 rounded-lg text-black border-2 border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-400 hover:border-teal-500 transition"
            />
          </div>

          {/* Input Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-4 rounded-lg text-black border-2 border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-400 hover:border-teal-500 transition"
            >
              <option>Applied</option>
              <option>Interviewing</option>
              <option>Offered</option>
              <option>Rejected</option>
            </select>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-4 rounded-lg text-black border-2 border-gray-700 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-400 hover:border-teal-500 transition"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-4 rounded-lg font-semibold text-xl shadow-lg hover:from-indigo-700 hover:to-blue-600 transition-all duration-300 ease-in-out"
            >
              Add Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
