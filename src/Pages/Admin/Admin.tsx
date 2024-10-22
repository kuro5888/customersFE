import { useState } from 'react';
import CreateCustomer from './AdminFunctions/CreateCustomer';
import UpdateCustomer from './AdminFunctions/UpdateCustomer';

const Admin: React.FC = () => {
  const [adminFunction, setAdminFunction] = useState('');

  return (
    <>
      <div>
        <button onClick={() => setAdminFunction('CREATE')}>
          Create Customer
        </button>
        <button onClick={() => setAdminFunction('UPDATE')}>
          Update Customer
        </button>
      </div>

      <section>
        {adminFunction === 'CREATE' && <CreateCustomer />}
        {adminFunction === 'UPDATE' && <UpdateCustomer />}
      </section>
    </>
  );
};

export default Admin;
