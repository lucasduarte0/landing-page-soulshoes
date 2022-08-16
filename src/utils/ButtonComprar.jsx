import React, { useState } from 'react';

import PropTypes from 'prop-types';
import Transition from './Transition';

function ButtonComprar() {

  return (
    <div className="bg-green-500  text-center text-white font-semibold">
        <Button variant="primary" size="xl">
        <div className='flex flex-col space-y-3'>
            <h2 className='text-4xl'>SIM!</h2>
            <p className='text-lg'>Quero garantir meu Chinelo Nuvem</p>
        </div>
        </Button>
    </div>
  );
}

export default ButtonComprar;
