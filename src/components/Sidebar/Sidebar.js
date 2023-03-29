import React from 'react';
import { Container, Title, CategoryList, CategoryItem } from './SidebarStyles';

const Sidebar = ({ setCategory }) => {
  const categories = [
    'All',
    'Natural Language Processing (NLP)',
    'Speech Recognition',
    'Machine Translation',
    'Image Processing',
    'Object Detection',
    'Image Segmentation',
    'AutoML',
    'Machine Learning (ML)',
    'Data Analysis',
    'Copywriting',
    'Chatbots',
    'Gaming',
    'Sentiment Analysis',
    'Anomaly Detection',
    'Recommendation Systems',
    'Audio Processing',
    'Text Summarization',
    'Time Series Analysis',
    'Medical Imaging',
    'Natural Language Generation (NLG)',
    'Speech Synthesis',
  ];

  return (
    <Container>
      <Title>Categories</Title>
      <CategoryList>
        {categories.map((category, index) => (
          <CategoryItem key={index} onClick={() => setCategory(category)}>
            {category}
          </CategoryItem>
        ))}
      </CategoryList>
    </Container>
  );
};

export default Sidebar;
