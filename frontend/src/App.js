import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// // eslint-disable-next-line
// import { JobListProvider } from './JobListProvider';
import JobList from './JobList';
import JobDetail from './JobDetail';
import Login from './Login';
import Register from './Register';
import JobCenter from './JobCenter';
import JobApplied from './JobApplied';
import UserInfo from './UserInfo';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect the default route to the login page */}
        <Route path="/" element={<Navigate replace to="/login" />} />

        {/* Route for the login page */}
        <Route path="/login" element={<Login />} />

        {/* Route for the register page */}
        <Route path="/register" element={<Register />} />

        {/* Protected route for the list of jobs */}
        <Route path="/jobs" element={<JobList />} />

        {/* Route for job details */}
        <Route path="/jobcenter" element={<JobCenter />} />
        {/* Route for User Info */}
        <Route path="/userinfo" element={<UserInfo />} />

        {/* Route for job details */}
        <Route path="/jobapplied" element={<JobApplied />} />

        {/* Route for job details */}
        <Route path="/jobs/:job_jk" element={<JobDetail />} />

        {/* Fallback for any other route */}
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
