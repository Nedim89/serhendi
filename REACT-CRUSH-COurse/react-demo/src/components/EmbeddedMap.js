import React from 'react';

function EmbeddedMap() {
  return (
    <div style={{ width: '100%', height: '400px', marginBottom: '20px' }}>
      <iframe 
        title="Business Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1397.8863659875283!2d18.311425905856762!3d43.84142190619922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758cb005360ec11%3A0x58558383ce424f15!2sUG%20Serhendi!5e0!3m2!1sen!2sba!4v1708091518793!5m2!1sen!2sba" 
        width="100%" 
        height="100%" 
        style={{border:0}} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
    </iframe>
    </div>
  );
}

export default EmbeddedMap;
