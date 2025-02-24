import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://jumwrqvhbqhdmrjnshbi.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1bXdycXZoYnFoZG1yam5zaGJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzNzIwMDMsImV4cCI6MjA1NTk0ODAwM30.5QaDOgdEK07XL8Ik-anLJ5yGUklMd3V4u4bmCi2m9pw");

function App() {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    getInstruments();
  }, []);

  async function getInstruments() {
    const { data } = await supabase.from("instruments").select();
    setInstruments(data);
  }

  return (
    <ul>
      <h2>List of Instruments</h2>
      {instruments.map((instrument) => (
        <li key={instrument.name}>{instrument.name}</li>
      ))}
    </ul>
  );
}

export default App;