import React, { useState, useEffect } from 'react';
import styles from './MemeList.module.css'
import { Mem } from './Mem'

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

  return <main>
    <Mem />
    <Mem />
    <Mem />
    </main>;
}
