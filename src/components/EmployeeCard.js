import React from 'react';

function EmployeeCard({ employee }) {
  if (!employee) return null;

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden flex">
        <div className="w-1/3 relative">
          <img
            src={employee.image}
            alt={employee.name}
            className="w-full h-full object-cover"
            style={{ minHeight: '400px' }}
          />
        </div>
        <div className="w-2/3 p-8">
          <h2 className="text-h2 text-slate-800 mb-6 border-b pb-4">{employee.name}</h2>
          <div className="space-y-4">
            <p className="text-p text-slate-600 flex items-center">
              <span className="font-semibold w-32">Position:</span>
              <span className="flex-1">{employee.position}</span>
            </p>
            <p className="text-p text-slate-600 flex items-center">
              <span className="font-semibold w-32">Department:</span>
              <span className="flex-1">{employee.department}</span>
            </p>
            <p className="text-p text-slate-600 flex items-center">
              <span className="font-semibold w-32">Email:</span>
              <a href={`mailto:${employee.email}`} className="flex-1 text-accent hover:text-accent/80 transition-colors">
                {employee.email}
              </a>
            </p>
            <p className="text-p text-slate-600 flex items-center">
              <span className="font-semibold w-32">Phone:</span>
              <a href={`tel:${employee.phone}`} className="flex-1 text-accent hover:text-accent/80 transition-colors">
                {employee.phone}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;