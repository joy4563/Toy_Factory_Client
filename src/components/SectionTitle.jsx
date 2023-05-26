import React from 'react';

const SectionTitle = ({ title }) => {
  if (!title) {
    title = 'Section Title';
  }
  return (
    <div className="divider mt-12 mb-8">
      <div className="text-center text-3xl font-semibold">{title}</div>
    </div>
  );
};

export default SectionTitle;
