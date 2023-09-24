import { useState, useEffect } from 'react';
import http from '../components/http';
import { Link, useNavigate } from 'react-router-dom';

function Home() {

  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 5;
  
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    fetchAllUsers();
  }, [currentPage]);

  const fetchAllUsers = () => {
    // Fetch user data from your API using the Axios instance
    http.get('/users')
      .then((response) => {
        const userData = response.data; // Assuming the data is in an array
        const firstIndex = (currentPage - 1) * recordPerPage;
        const lastIndex = firstIndex + recordPerPage;
        const slicedUsers = userData.slice(firstIndex, lastIndex);
        setUsers(slicedUsers);
        setTotalPages(Math.ceil(userData.length / recordPerPage));
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  };

  

  const hideSuccessMessageAfterTime = () => {
    // Hide success message after 3 seconds (3000 milliseconds)
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  const hideErrorsAfterTime = () => {
    // Hide error messages after 5 seconds (5000 milliseconds)
    setTimeout(() => {
      setErrors({});
    }, 10000);
  };

  useEffect(() => {
    hideErrorsAfterTime();
    hideSuccessMessageAfterTime();
  }, [errors, successMessage]);


  const handleDelete = (userId) => {
    //Send a DELETE request to your API to delete the user record
    http.delete(`/users/${userId}`).then((response)=>{
      const {message} = response.data;
      setSuccessMessage(message);
      //if delete record is successful refresh the userlist
      fetchAllUsers();
    }).catch((error)=>{
      console.log('Error delete user data',error);
      hideErrorsAfterTime();

    })
  };

  const changeCPage = (page) => {
    setCurrentPage(page);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container">
      <h2>User listing ...</h2>
       {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
        )}
        {errors.serverError && (
        <div className="alert alert-danger">{errors.serverError}</div>
        )}
      <table className="table">
       
        <thead>
          <tr>
            <th>Sno.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{(currentPage - 1) * recordPerPage + index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link className='btn btn-primary m-2' to={{pathname:"/edit/"+user.id}} >Edit</Link>
                <button className='btn btn-danger m-2' onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
      <nav>
        <ul className='pagination'>
          <li className='page-item'>
            <a href='#' className='page-link' onClick={prevPage}>Prev</a>
          </li>
          {Array.from({ length: totalPages }).map((_, i) => (
            <li className={`page-item ${currentPage === i + 1 ? 'active' : ''}`} key={i}>
              <a href='#' className='page-link' onClick={() => changeCPage(i + 1)}>{i + 1}</a>
            </li>
          ))}
          <li className='page-item'>
            <a href='#' className='page-link' onClick={nextPage}>Next</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
