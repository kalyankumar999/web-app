import { useEffect, useState } from "react";
import axios from "axios";
import EmployeeListContainer from "./Components/EmplyeeListContainer";
import "./App.css";

function App() {
  const [user, setUser] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get("https://reqres.in/api/users?page=2");
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <EmployeeListContainer dataSet={user} />
    </div>
  );
}

export default App;
