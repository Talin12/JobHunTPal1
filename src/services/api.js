import axios from "axios";

const BASE_URL = "https://6803f0d279cb28fb3f5a0abc.mockapi.io/jobs";

export const addJob = (jobData) => axios.post(BASE_URL, jobData);
export const fetchJobs = () => axios.get(BASE_URL);
export const deleteJob = (id) => axios.delete(`${BASE_URL}/${id}`);