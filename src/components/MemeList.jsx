import React, { useState, useEffect } from 'react';

export function MemeList(props) {

  const [list, setList] = useState([]);

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const data = await fetch('https://yourapi.com');
      setList(data);
    }
  
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [])

  return <main>Tu powstanie komponent listy memów {props.category}</main>;
}
