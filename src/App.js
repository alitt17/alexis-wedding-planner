import { useState } from 'react';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState([
    { section: 'Officiant', task: 'Book officiant', status: 'Not Started' },
    { section: 'Photography', task: 'Book photographer', status: 'Not Started' },
    { section: 'Florals & Decor', task: 'Book floral vendor', status: 'Not Started' },
    { section: 'Hair & Makeup', task: 'Book services', status: 'Not Started' },
    { section: 'Stationery', task: 'Design invitations', status: 'Not Started' },
    { section: 'Cake', task: 'Order small cake', status: 'Not Started' },
    { section: 'Favors', task: 'Order or make favors', status: 'Not Started' },
    { section: 'Legal', task: 'Apply for marriage license', status: 'Not Started' },
    { section: 'Guest List', task: 'Finalize headcount', status: 'Not Started' },
    { section: 'Timeline', task: 'Create wedding day schedule', status: 'Not Started' }
  ]);

  const [budget, setBudget] = useState([
    { category: 'Venue & Food', estimated: 28938.40, paid: 28938.40 },
    { category: 'DJ', estimated: 2144.74, paid: 2144.74 },
    { category: 'Officiant', estimated: 400, paid: 0 },
    { category: 'Photography', estimated: 4500, paid: 0 },
    { category: 'Florals & Decor', estimated: 4500, paid: 0 },
    { category: 'Hair & Makeup', estimated: 1000, paid: 0 },
    { category: 'Stationery', estimated: 550, paid: 0 },
    { category: 'Cake', estimated: 400, paid: 0 },
    { category: 'Favors', estimated: 400, paid: 0 },
    { category: 'Marriage License', estimated: 125, paid: 0 }
  ]);

  const updateTaskStatus = (index, newStatus) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = newStatus;
    setTasks(updatedTasks);
  };

  const updateBudgetPaid = (index, newPaid) => {
    const updatedBudget = [...budget];
    updatedBudget[index].paid = parseFloat(newPaid);
    setBudget(updatedBudget);
  };

  return (
    <div className="container">
      <h1 className="title">💍 Alexis' Wedding Planner</h1>

      <h2>📋 Task Checklist</h2>
      <div className="grid">
        {tasks.map((item, index) => (
          <div key={index} className="card">
            <h3>{item.section}</h3>
            <p>{item.task}</p>
            <select
              value={item.status}
              onChange={(e) => updateTaskStatus(index, e.target.value)}
            >
              <option>Not Started</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>
        ))}
      </div>

      <h2>💰 Budget Overview</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Estimated</th>
            <th>Paid</th>
            <th>Remaining</th>
          </tr>
        </thead>
        <tbody>
          {budget.map((item, index) => (
            <tr key={index}>
              <td>{item.category}</td>
              <td>${item.estimated.toFixed(2)}</td>
              <td>
                <input
                  type="number"
                  value={item.paid}
                  onChange={(e) => updateBudgetPaid(index, e.target.value)}
                />
              </td>
              <td>${(item.estimated - item.paid).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}