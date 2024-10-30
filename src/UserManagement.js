import React, { useState, useEffect } from 'react';


function UserManagement({ setCurrentUser }) {
  const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem('users')) || []);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editUsername, setEditUsername] = useState('');
  const [editPassword, setEditPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditUsername(users[index].username);
    setEditPassword(users[index].password);
  };

  const handleSave = () => {
    const updatedUsers = [...users];
    updatedUsers[editingIndex] = { username: editUsername, password: editPassword };
    setUsers(updatedUsers);
    setEditingIndex(null);
  };

  const handleAddUser = () => {
    if (newUsername && newPassword) {
      setUsers([...users, { username: newUsername, password: newPassword }]);
      setNewUsername('');
      setNewPassword('');
    }
  };

  const handleSignOut = () => {
    setCurrentUser(null);
  };

  return (
    <section>
      <h2>User Management</h2>
      <button onClick={handleSignOut}>Sign out</button>
      {/* Add User Form */}
      <div className='me'>
        <h3>Add New User</h3>
        <input
          type="text"
          placeholder="Username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{editingIndex === index ? <input value={editUsername} onChange={(e) => setEditUsername(e.target.value)} /> : user.username}</td>
              <td>{editingIndex === index ? <input value={editPassword} onChange={(e) => setEditPassword(e.target.value)} /> : user.password}</td>
              <td>
                {editingIndex === index ? (
                  <button onClick={handleSave}>Save</button>
                ) : (
                  <>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

     
    </section>
  );
}

export default UserManagement;
