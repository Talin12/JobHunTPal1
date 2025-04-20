import { useEffect, useContext, useState } from "react";
import { JobContext } from "../context/JobContext";
import { fetchJobs, deleteJob } from "../services/api";
import JobCard from "../components/JobCard";

const Dashboard = () => {
  const { jobs, setJobs } = useContext(JobContext);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await fetchJobs();

        if (response.data.length === 0) {
          const dummyJobs = [
            {
              id: 1,
              position: "Frontend Developer",
              company: "Google",
              status: "Applied",
              date: "2025-04-01",
            },
            {
              id: 2,
              position: "Backend Developer",
              company: "Amazon",
              status: "Interviewing",
              date: "2025-04-02",
            },
            {
              id: 3,
              position: "Full Stack Engineer",
              company: "Netflix",
              status: "Offered",
              date: "2025-04-03",
            },
            {
              id: 4,
              position: "Software Engineer Intern",
              company: "TCS",
              status: "Rejected",
              date: "2025-04-04",
            },
          ];
          setJobs(dummyJobs);
        } else {
          setJobs(response.data);
        }
      } catch (err) {
        console.error("Failed to fetch jobs:", err);
      } finally {
        setLoading(false);
      }
    };

    getJobs();
  }, [setJobs]);

  const handleDelete = async (id) => {
    try {
      const jobToDelete = jobs.find((job) => job.id === id);
      if (jobToDelete && jobToDelete.id <= 4) {
        setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
        return;
      }
      await deleteJob(id);
      setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
    } catch (err) {
      console.error("Failed to delete job:", err);
    }
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p className="text-center mt-10 text-white">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4 sm:px-6 md:px-8 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center sm:text-left text-teal-300">
        All Jobs
      </h2>

      <input
        type="text"
        placeholder="Search by position or company..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 mb-6 focus:outline-none focus:ring-2 focus:ring-teal-400 text-white"
      />

      {filteredJobs.length === 0 ? (
        <p className="text-center text-gray-400">No matching jobs found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
