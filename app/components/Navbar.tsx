import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between items-center py-4 px-6  bg-gradient-to-r from-blue-400 to-blue-600">
      <h1 className="text-xl font-semibold">Assignment Class 15</h1>
      <nav className="flex justify-center space-x-4">
        <a href="#" className="font-bo px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
        <a href="/posts" className="font-bo px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Posts</a>
        <a href="/comments" className="font-bo px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Comments</a>
        <a href="/albums" className="font-bo px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Albums</a>
        <a href="/photos" className="font-bo px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Photos</a>
        <a href="/todos" className="font-bo px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Todos</a>
        <a href="/users" className="font-bo px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Users</a>
      </nav>
      
    </div>
  );
};

export default Navbar;
