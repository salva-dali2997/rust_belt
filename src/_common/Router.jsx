import React from 'react';
import { Route, Routes } from "react-router-dom";
import FirebaseApp from '../firebase/FirebaseApp';
import Form from '../client_form/ClientForm';
// import DataContextProvider from './DataContextProvider';

const Router = () => {
  return (
    <FirebaseApp>
      {/* <DataContextProvider> */}
        <Routes>
          <Route path="/form" element={<Form />} />
        </Routes>
      {/* </DataContextProvider> */}
    </FirebaseApp>
  )
}

export default Router