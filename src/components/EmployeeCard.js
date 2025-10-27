import React from 'react';

function EmployeeCard({ employee }) {
  if (!employee) return null;

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="bg-white rounded-lg shadow-2xl mb-6 overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 relative">
          <img
            src={employee.image}
            alt={employee.name}
            className="w-full h-[300px] md:h-full object-cover"
          />
        </div>
        <div className="w-full md:w-2/3 p-6 md:p-8">
          <h2 className="text-h2 text-slate-800 mb-6 border-b pb-4">{employee.name}</h2>
          <div className="space-y-4">
            <p className="text-p text-slate-600 flex flex-col md:flex-row md:items-center gap-1 md:gap-0">
              <span className="font-semibold md:w-32">Position:</span>
              <span className="flex-1">{employee.position}</span>
            </p>
            <p className="text-p text-slate-600 flex flex-col md:flex-row md:items-center gap-1 md:gap-0">
              <span className="font-semibold md:w-32">Department:</span>
              <span className="flex-1">{employee.department}</span>
            </p>
            <p className="text-p text-slate-600 flex flex-col md:flex-row md:items-center gap-1 md:gap-0">
              <span className="font-semibold md:w-32">Email:</span>
              <a href={`mailto:${employee.email}`} className="flex-1 text-accent hover:text-accent/80 transition-colors break-all">
                {employee.email}
              </a>
            </p>
            <p className="text-p text-slate-600 flex flex-col md:flex-row md:items-center gap-1 md:gap-0">
              <span className="font-semibold md:w-32">Phone:</span>
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