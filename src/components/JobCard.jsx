const JobCard = ({ job, onDelete }) => {
  return (
    <div className="p-4 border rounded-lg bg-white shadow flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{job.position}</h3>
        <p className="text-gray-600">{job.company}</p>
        <p className="text-sm text-gray-500">Status: {job.status}</p>
        <p className="text-sm text-gray-500">Applied on: {job.date}</p>
      </div>
      <button
        onClick={() => onDelete(job.id)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
      Delete
      </button>
    </div>
  );
};

export default JobCard;
