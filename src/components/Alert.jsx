import Swal from 'sweetalert2';

const Alert = ({ status, message }) => {
    console.log(status,'from alert');
  Swal.fire({
    icon: status ? 'success' : 'error', 
    title: status ? 'Success' : 'Error', 
    text: message, 
    position: 'top-right', 
    toast: true,
    timer: 3000,  // Optional: auto-close after 3 seconds
    showConfirmButton: false  
  });
};

export default Alert;
