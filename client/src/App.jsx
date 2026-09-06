import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MemberRegister from './pages/MemberRegister';
import ActivityFeed from './pages/ActivityFeed';
import ContactForm from './pages/ContactForm';
import ApplyEmpowerment from './pages/ApplyEmpowerment';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminMembers from './pages/admin/AdminMembers';
import AdminActivities from './pages/admin/AdminActivities';
import AdminMessages from './pages/admin/AdminMessages';
import AdminApplications from './pages/admin/AdminApplications';
import AdminCrewPerformance from './pages/admin/AdminCrewPerformance';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<MemberRegister />} />
            <Route path="/activities" element={<ActivityFeed />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/apply" element={<ApplyEmpowerment />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/members" element={<AdminMembers />} />
            <Route path="/admin/activities" element={<AdminActivities />} />
            <Route path="/admin/messages" element={<AdminMessages />} />
            <Route path="/admin/applications" element={<AdminApplications />} />
            <Route path="/admin/crew" element={<AdminCrewPerformance />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;