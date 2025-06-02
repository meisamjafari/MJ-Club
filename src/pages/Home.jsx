import React from "react";
import Container from "../component/Container";
import Svg from "../component/Svg";
import Offer from "../component/Offer";
import CategoryOffer from "../component/CategoryOffer";
import axios from 'axios';

export default function Home() {


const supabaseUrl = 'https://niuinehkckcbxnvicnqui.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pdWluZWhja2NieG52aWNucXVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3MjA4ODAsImV4cCI6MjA2NDI5Njg4MH0.RD9yTigT6pRzsH0s0HFm3Q7eopwVsNwzRab_RKTnsao'

const fetchProducts = async () => {
  try {
    const response = await axios.get(`${supabaseUrl}/rest/v1/products`, {
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
      },
    });

    console.log('محصولات:', response.data);
  } catch (error) {
    console.error('خطا در دریافت محصولات:', error.message);
  }
};

fetchProducts();
  return (
  
      <Container>
        <section>
          <Svg/>
          <Offer/>
          <CategoryOffer/>
    
        </section>
      </Container>
    
  );
}
