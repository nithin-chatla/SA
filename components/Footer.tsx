
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">N</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">NexusTech</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Empowering the next generation of engineers and founders through world-class training and innovative software development.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Technical Workshops</Link></li>
              <li><Link to="/internships" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Student Internships</Link></li>
              <li><Link to="/services" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Startup Development</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">Connect</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <span className="text-slate-500 text-sm">hello@nexustech.solutions</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-500 text-sm">
                <span>San Francisco, CA / Virtual Hub</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NexusTech Solutions Inc. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
