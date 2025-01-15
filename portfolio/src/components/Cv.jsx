import React from 'react'

const Cv = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/cv.pdf'; // Replace with the actual path to your CV file
        link.download = 'My_CV.pdf'; // The name for the downloaded file
        link.click();
      };

  return (
    <div>
      <button onClick={handleDownload}>
      
      </button>
    </div>
  )
}

export default Cv
