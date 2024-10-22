type Customer = {
  _id: string;
  name: string;
  industry: string;
  __v: number;
};

type JsonToRecieve = {
  customers: Array<Customer>;
};

const Customers: React.FC = () => {
  // Mock data
  const mockedData: JsonToRecieve = {
    customers: [
      {
        _id: '670bf7bcb1a05a69e0bd318b',
        name: 'Miri',
        industry: 'Healthcare',
        __v: 0,
      },
      {
        _id: '670bf83ebd8772649ae773c5',
        name: 'Ben',
        industry: "None because I'm a bum",
        __v: 0,
      },
      {
        _id: '670bf83ebd8772649ae773c5',
        name: 'Henry',
        industry: 'iGaming',
        __v: 0,
      },
    ],
  };

  return (
    <>
      <h1>Customers List</h1>
      <table>
        <tr>
          <td>Name</td>
          <td>Occupation</td>
        </tr>
        {mockedData.customers.map((customer: Customer) => {
          return (
            <tr>
              <td>{customer.name}</td>
              <td>{customer.industry}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Customers;
