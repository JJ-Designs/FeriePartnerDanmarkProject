import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import Loading from '../components/Loading';
import Select from '../atoms/Select';
import EmployeeCard from '../components/EmployeeCard';
import ErrorMessage from '../components/ErrorMessage';
import InfoMessage from '../components/InfoMessage';

function EmployeesPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { devSettings } = useOutletContext();
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleEmployeeSelect = (event) => {
    const selectedId = event.target.value;
    if (selectedId) {
      navigate(`/employee/${selectedId}`);
    } else {
      navigate('/employees');
    }
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setIsLoading(true);

        // Simulate loading time if specified
        if (devSettings.SIMULATE_LOADING_TIME > 0) {
          await new Promise(resolve => setTimeout(resolve, devSettings.SIMULATE_LOADING_TIME));
        }

        const response = await fetch('http://localhost:3001/employees');
        if (!response.ok) {
          throw new Error('Failed to fetch employees');
        }
        const data = await response.json();
        setEmployees(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEmployees();
  }, [devSettings]); // Re-run when devSettings changes

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      if (!id) {
        setSelectedEmployee(null);
        return;
      }

      try {
        setIsLoading(true);

        // Simulate loading time if specified
        if (devSettings.SIMULATE_LOADING_TIME > 0) {
          await new Promise(resolve => setTimeout(resolve, devSettings.SIMULATE_LOADING_TIME));
        }

        // Only check if employee exists after employees have been loaded
        if (employees.length > 0) {
          const employeeExists = employees.some(emp => emp.id.toString() === id.toString());
          if (!employeeExists) {
            throw new Error('The requested employee could not be found. Please select another employee.');
          }
        }

        const response = await fetch(`http://localhost:3001/employees/${id}`);
        if (response.status === 404) {
          throw new Error('The requested employee could not be found. Please select another employee.');
        }
        if (!response.ok) {
          throw new Error('Failed to fetch employee details. Please try again.');
        }
        const data = await response.json();
        setSelectedEmployee(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setSelectedEmployee(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEmployeeDetails();
  }, [id, navigate, employees, devSettings]); // Added devSettings as dependency

  const renderContent = () => {
    if (error) {
      return <ErrorMessage message={error} />;
    }

    if (isLoading) {
      return <Loading message="Loading employee details..." />;
    }

    if (!selectedEmployee && !error) {
      return (
        <InfoMessage 
          message="Select an employee from the dropdown to view their details"
          variant="info"
        />
      );
    }

    return <EmployeeCard employee={selectedEmployee} />;
  };

  return (
    <div className="min-h-screen bg-linen font-sans">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-h1 text-slate-800 mb-6 text-center">Employees List</h1>

        {/* Select Dropdown */}
        <div className="max-w-md mx-auto mb-8">
          <Select
            value={id || ''}
            onChange={handleEmployeeSelect}
            options={employees}
            placeholder="Select an employee..."
            disabled={isLoading}
          />
        </div>

        {renderContent()}
      </div>
    </div>
  );
}

export default EmployeesPage;