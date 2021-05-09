import { Fragment, useEffect, useState } from "react";
import phonesService from '../../services/phone-service'
import PhoneItem from './PhoneItem'
import Cart from '../cart/Cart';


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
  if (isUnmounted) {
    return (
      <Fragment>
        <div className="d-flex align-items-center">
          <strong>Loading...</strong>
          <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
      </Fragment>
    )
  }
  else {
    return (
      <Fragment>
        <div className="container pt-4 pb-5 bg-transparent border-warning  rounded" >

          <div className="row row-cols-2">
            <div className="container pt-4 pb-5 bg-transparent overflow auto" >
              <h1 className="text-white">The best phones!</h1>

              {phones.map(phone => (
                <div>
                  <h1 key={phone._id} className="col mb-4"><PhoneItem phone={phone} /></h1>
                </div>
              ))}
            </div>

            <div className="container pt-4 pb-5  overflow auto" >
              <h1>Cart</h1>
              <div>
                <h1 className="col mb-4  "><Cart /></h1>
              </div>
            </div>
          </div>

        </div>

      </Fragment>
    );
  }

}

export default PhonesList;

