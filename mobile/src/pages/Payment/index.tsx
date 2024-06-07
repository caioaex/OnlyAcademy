
import React, { useEffect, useState } from "react";



export function CheckoutScreen() {
  
  const response = fetch(`http://10.0.2.2/pay/:assinatura`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return(
    <>

    </>
  )
}