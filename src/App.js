import { useState } from 'react';
import './App.css';

import useStore from './store';

function App() {
  const [name, setName] = useState('')
  const [fullName, setFullName] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  const [maJor, setMaJor] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')


  const dataZustand = useStore((state) => state.dataZustand)
  const addDataZustand = useStore((state) => state.addValue)
  const deleteDataZustand = useStore((state) => state.deleteValue)



  const handleAdd = () => {
    if (name == '' || fullName == '' || gender == '' || age == '' || maJor == '' || email == '' || pass == '') {
      alert('Input not Empty')
    }
    else {
      var obj = {
        name, fullName, gender, age, maJor, email, pass
      }
      addDataZustand(obj)

      setName('')
      setFullName('')
      setGender('')
      setAge('')
      setMaJor('')
      setEmail('')
      setPass('')

      document.getElementById("nam").checked = false;
      document.getElementById("nu").checked = false;
    }


  }


  const handleDelete = (index) => {

    const newData = dataZustand.filter((item) => {
      return item != dataZustand[index];
    });

    deleteDataZustand(newData)
  }



  return (
    <div className="App">
      <h1>Hello</h1>
      <label>Name : </label>
      <input
        onChange={e => setName(e.target.value)}
        value={name}
      />

      <br /><br />

      <label>FullName : </label>
      <input
        onChange={e => setFullName(e.target.value)}
        value={fullName}
      />
      <br /><br />

      <label>Gender : </label>
      <input
        id='nam'
        type='radio'
        name='gender'
        value="Nam"
        onChange={e => setGender(e.target.value)}
      /> Nam
      <input
        id='nu'
        type='radio'
        name='gender'
        value="Nữ"
        onChange={e => setGender(e.target.value)}
      /> Nữ

      <br /><br />

      <label>Age : </label>
      <input
        onChange={e => setAge(e.target.value)}
        value={age}
      />
      <br /><br />

      <label>Major : </label>
      <input
        onChange={e => setMaJor(e.target.value)}
        value={maJor}
      />
      <br /><br />

      <label>Email : </label>
      <input
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <br /><br />

      <label>Password : </label>
      <input
        onChange={e => setPass(e.target.value)}
        value={pass}
      />
      <br /><br />

      <button onClick={handleAdd}>ADD</button>  <br /><br />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>FullName</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Major</th>
            <th>Email</th>
            <th>Password</th>
            <th>Other</th>
          </tr>
        </thead>

        <tbody>
          {dataZustand.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.fullName}</td>
                <td>{item.gender}</td>
                <td>{item.age}</td>
                <td>{item.maJor}</td>
                <td>{item.email}</td>
                <td>{item.pass}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>

      </table>
    </div>
  );
}

export default App;
