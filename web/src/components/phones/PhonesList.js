import { Fragment, useEffect, useState } from "react";
import phonesService from '../../services/phone-service'
import PhoneItem from './PhoneItem'

function PhonesList() {

  const [state, setState] = useState({
    phones: [],
  });

  useEffect(() => {
    // componentDidMount
    async function fetchPhones() {
      console.log('Fetching phones...');
      setState(state => ({
        ...state,
      }))
      const phones = await phonesService.list();
      if (!isUnmounted) {
        setState({
          phones: phones,
        })
      }
    }

    let isUnmounted = false;

      fetchPhones();

    return () => {
      // componentWillUnmount
      isUnmounted = true;
    }
  }, []); // tiene como dependencia el buscador, para que siempre que cambie de valor se ejecute


  const { phones, isUnmounted } = state;

if (!isUnmounted){
  return (
    <Fragment>
      <h1>Phones</h1>
      <PhoneItem></PhoneItem>
      <div className="card-group">
        {phones.map(phone => (
          <div>
            {/* <h1 key={phone._id} className="col mb-4"><PhoneItem name={phone.name} image={phone.imageFileName} description={phone.description}/></h1> */}
            <h1 key={phone._id} className="col mb-4"><PhoneItem phone={phone}/></h1>

          </div>

        ))}
      </div>
    </Fragment>
  );
}

}

export default PhonesList;

