import React from 'react';
import { useParams } from 'react-router-dom';

function EmployeesPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>{id ? `Employee Details ${id}` : 'Employees List'}</h1>
      {/* Add your employees page content here */}
    </div>
  );
}

export default EmployeesPage;