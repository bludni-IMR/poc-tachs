import axios from 'axios';
import React from 'react';

interface PdfProps {
  setPdfs: Function;
}

const PdfButton: React.FC<PdfProps> = ({ setPdfs }: PdfProps) => {
  const getPdfs = async () => {
    try {
      const { data } = await axios.get('/api/pdf');
      setPdfs(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button className='PdfButton' onClick={getPdfs}>
      Get Pdf Names
    </button>
  );
};

export default PdfButton;
