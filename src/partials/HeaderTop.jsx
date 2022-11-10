<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HeaderTop() {
  return (
    <section className="relative w-full bg-[#f8dd4a]">
      <div className='inline-flex w-full items-center justify-center text-center py-1'>
        <svg className='mx-2 self-middle' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M3 18h-2c-.552 0-1-.448-1-1v-13c0-.552.448-1 1-1h13c.552 0 1 .448 1 1v2h4.667c1.117 0 1.6.576 1.936 1.107.594.94 1.536 2.432 2.109 3.378.188.312.288.67.288 1.035v4.48c0 1.089-.743 2-2 2h-1c0 1.656-1.344 3-3 3s-3-1.344-3-3h-6c0 1.656-1.344 3-3 3s-3-1.344-3-3zm3-1.2c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm12 0c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm-3-2.8h-13v2h1.765c.549-.614 1.347-1 2.235-1 .888 0 1.686.386 2.235 1h7.53c.549-.614 1.347-1 2.235-1 .888 0 1.686.386 2.235 1h1.765v-4.575l-1.711-2.929c-.179-.307-.508-.496-.863-.496h-4.426v6zm-2-9h-11v7h11v-7zm3 4v3h5l-1.427-2.496c-.178-.312-.509-.504-.868-.504h-2.705z"/></svg>
        <h5 className='text-sm font-semibold'>FRETE GRÁTIS PARA TODO BRASIL</h5>
      </div>
      
=======
import React from "react";

function HeaderTop() {
  return (
    <section className='z-20 w-full bg-[#f8dd4a]'>
      <div className='inline-flex w-full items-center justify-center text-center py-1'>
        <svg
          className='mx-2 self-middle'
          width='24'
          height='24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M3 18h-2c-.552 0-1-.448-1-1v-13c0-.552.448-1 1-1h13c.552 0 1 .448 1 1v2h4.667c1.117 0 1.6.576 1.936 1.107.594.94 1.536 2.432 2.109 3.378.188.312.288.67.288 1.035v4.48c0 1.089-.743 2-2 2h-1c0 1.656-1.344 3-3 3s-3-1.344-3-3h-6c0 1.656-1.344 3-3 3s-3-1.344-3-3zm3-1.2c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm12 0c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2zm-3-2.8h-13v2h1.765c.549-.614 1.347-1 2.235-1 .888 0 1.686.386 2.235 1h7.53c.549-.614 1.347-1 2.235-1 .888 0 1.686.386 2.235 1h1.765v-4.575l-1.711-2.929c-.179-.307-.508-.496-.863-.496h-4.426v6zm-2-9h-11v7h11v-7zm3 4v3h5l-1.427-2.496c-.178-.312-.509-.504-.868-.504h-2.705z' />
        </svg>
        <h5 className='text-sm font-semibold'>
          ENTREGA <strong>GRÁTIS</strong> EM ATÉ <strong>7</strong> DIAS
        </h5>
      </div>
>>>>>>> 172cf599b543bdc0b77366f153adb0b3867bfb39
    </section>
  );
}

export default HeaderTop;
