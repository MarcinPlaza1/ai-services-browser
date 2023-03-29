const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Przykładowe dane dla usług
const services = [
  { id: 1, name: 'ChatGPT', description: 'Generowanie tekstu z użyciem AI', apiDocumentation: 'https://example.com/chatgpt', category: 'Natural Language Processing (NLP)' },
  { id: 2, name: 'DALL-E', description: 'Tworzenie obrazów z opisów tekstowych', apiDocumentation: 'https://example.com/dall-e', category: 'Image Processing, Image Synthesis' },
  { id: 3, name: 'OpenAI Codex', description: 'Model AI do generowania kodu źródłowego', apiDocumentation: 'https://example.com/codex', category: 'Developer Tools, AutoML' },
  { id: 4, name: 'DeepL', description: 'Tłumaczenie tekstu za pomocą AI', apiDocumentation: 'https://example.com/deepl', category: 'Machine Translation' },
  { id: 5, name: 'Jarvis', description: 'Narzędzie do generowania treści i copywritingu', apiDocumentation: 'https://example.com/jarvis', category: 'Copywriting' },
  { id: 6, name: 'Talk to Transformer', description: 'Rozmowa z AI opartym na GPT-3', apiDocumentation: 'https://example.com/talktotransformer', category: 'Chatbots' },
  { id: 7, name: 'AIDungeon', description: 'Gra oparta na AI', apiDocumentation: 'https://example.com/aidungeon', category: 'Gaming' },
  { id: 8, name: 'DeOldify', description: 'Przywracanie koloru i jakości starych zdjęć', apiDocumentation: 'https://example.com/deoldify', category: 'Image Processing' },
  { id: 9, name: 'TensorFlow', description: 'Biblioteka do uczenia maszynowego', apiDocumentation: 'https://example.com/tensorflow', category: 'Machine Learning (ML)' },
  { id: 10, name: 'Pandas', description: 'Biblioteka do analizy danych w Pythonie', apiDocumentation: 'https://example.com/pandas', category: 'Data Analysis' },
  { id: 11, name: 'Midjourney', description: 'Generowanie obrazów na podstawie tekstu', apiDocumentation: 'https://example.com/midjourney', category: 'Image Processing' },
  { id: 12, name: 'Spacy', description: 'Biblioteka do przetwarzania języka naturalnego', apiDocumentation: 'https://example.com/spacy', category: 'Natural Language Processing (NLP)' },
  { id: 13, name: 'Google Translate', description: 'Tłumaczenie tekstu za pomocą AI', apiDocumentation: 'https://example.com/googletranslate', category: 'Machine Translation' },
  { id: 14, name: 'GPT-3', description: 'Generowanie tekstu z użyciem AI', apiDocumentation: 'https://example.com/gpt-3', category: 'Natural Language Processing (NLP)' },
  { id: 15, name: 'Pix2Pix', description: 'Generowanie obrazów z użyciem AI', apiDocumentation: 'https://example.com/pix2pix', category: 'Image Processing' },
  { id: 16, name: 'YOLO', description: 'Detekcja obiektów na obrazach i wideo', apiDocumentation: 'https://example.com/yolo', category: 'Object Detection' },
  { id: 17, name: 'Mask R-CNN', description: 'Segmentacja obrazów i detekcja obiektów', apiDocumentation: 'https://example.com/mask-rcnn', category: 'Image Segmentation' },
  { id: 18, name: 'GPT-2', description: 'Generowanie tekstu z użyciem AI', apiDocumentation: 'https://example.com/gpt-2', category: 'Natural Language Processing (NLP)' },
  { id: 19, name: 'BERT', description: 'Model AI do przetwarzania języka naturalnego', apiDocumentation: 'https://example.com/bert', category: 'Natural Language Processing (NLP)' },
  { id: 20, name: 'Google Cloud Speech-to-Text', description: 'Konwersja mowy na tekst za pomocą AI', apiDocumentation: 'https://example.com/google-speech-to-text', category: 'Audio Processing' },
  { id: 21, name: 'Amazon Transcribe', description: 'Konwersja mowy na tekst za pomocą AI', apiDocumentation: 'https://example.com/amazon-transcribe', category: 'Audio Processing' },
  { id: 22, name: 'IBM Watson Speech to Text', description: 'Konwersja mowy na tekst za pomocą AI', apiDocumentation: 'https://example.com/ibm-watson-speech-to-text', category: 'Speech Recognition' },
  { id: 23, name: 'Keras', description: 'Biblioteka do uczenia maszynowego i głębokiego uczenia', apiDocumentation: 'https://example.com/keras', category: 'Machine Learning (ML)' },
  { id: 24, name: 'Scikit-learn', description: 'Biblioteka do uczenia maszynowego i analizy danych w Pythonie', apiDocumentation: 'https://example.com/scikit-learn', category: 'Machine Learning (ML)' },
  { id: 25, name: 'AutoML', description: 'Automatyczne tworzenie modeli AI', apiDocumentation: 'https://example.com/automl', category: 'AutoML' },
  { id: 26, name: 'IBM Watson Studio', description: 'Platforma do budowania, trenowania i wdrażania modeli AI', apiDocumentation: 'https://example.com/ibm-watson-studio', category: 'Machine Learning (ML)' },
  { id: 27, name: 'Google Cloud AutoML', description: 'Platforma do automatycznego tworzenia i trenowania modeli AI', apiDocumentation: 'https://example.com/google-cloud-automl', category: 'AutoML' },
  { id: 28, name: 'PyTorch', description: 'Biblioteka do uczenia maszynowego i głębokiego uczenia', apiDocumentation: 'https://example.com/pytorch', category: 'Machine Learning (ML)' },
  { id: 29, name: 'Fast.ai', description: 'Biblioteka do uczenia maszynowego i głębokiego uczenia', apiDocumentation: 'https://example.com/fastai', category: 'Machine Learning (ML)' },
  { id: 30, name: 'Hugging Face', description: 'Biblioteka do przetwarzania języka naturalnego i uczenia maszynowego', apiDocumentation: 'https://example.com/hugging-face', category: 'Natural Language Processing (NLP)' },
  { id: 31, name: 'Google Cloud Vision', description: 'Detekcja i analiza obrazów za pomocą AI', apiDocumentation: 'https://example.com/google-cloud-vision', category: 'Image Processing' },
  { id: 32, name: 'Amazon Rekognition', description: 'Detekcja i analiza obrazów za pomocą AI', apiDocumentation: 'https://example.com/amazon-rekognition', category: 'Image Processing' },
  { id: 33, name: 'Microsoft Azure Cognitive Services', description: 'Platforma do przetwarzania języka naturalnego i analizy obrazów za pomocą AI', apiDocumentation: 'https://example.com/microsoft-azure-cognitive-services', category: 'Natural Language Processing (NLP)' },
  { id: 34, name: 'OpenCV', description: 'Biblioteka do przetwarzania obrazów i wideo', apiDocumentation: 'https://example.com/opencv', category: 'Image Processing' },
  { id: 35, name: 'Facebook AI', description: 'Narzędzia do uczenia maszynowego i przetwarzania języka naturalnego', apiDocumentation: 'https://example.com/facebook-ai', category: 'Natural Language Processing (NLP)' },
  { id: 36, name: 'Microsoft Azure Machine Learning Studio', description: 'Platforma do budowania, trenowania i wdrażania modeli AI', apiDocumentation: 'https://example.com/microsoft-azure-ml-studio', category: 'Machine Learning (ML)' },
  { id: 37, name: 'IBM Watson Machine Learning', description: 'Platforma do budowania, trenowania i wdrażania modeli AI', apiDocumentation: 'https://example.com/ibm-watson-ml', category: 'Machine Learning (ML)' },
  {id: 38, name: 'VADER', description: 'Analiza wydźwięku tekstu za pomocą AI', apiDocumentation: 'https://example.com/vader', category: 'Sentiment Analysis'},
  {id: 39, name: 'Prophet', description: 'Biblioteka do prognozowania szeregów czasowych', apiDocumentation: 'https://example.com/prophet', category: 'Time Series Analysis'},
  {id: 40, name: 'LightGBM', description: 'Biblioteka do uczenia maszynowego i gradientowego wzmacniania drzew', apiDocumentation: 'https://example.com/lightgbm', category: 'Machine Learning (ML)'},
  {id: 41, name: 'XGBoost', description: 'Biblioteka do uczenia maszynowego i gradientowego wzmacniania drzew', apiDocumentation: 'https://example.com/xgboost', category: 'Machine Learning (ML)'},
  {id: 42, name: 'Isolation Forest', description: 'Algorytm wykrywania anomalii w danych', apiDocumentation: 'https://example.com/isolation-forest', category: 'Anomaly Detection'},
  {id: 43, name: 'Ludwig', description: 'Biblioteka do uczenia maszynowego i głębokiego uczenia', apiDocumentation: 'https://example.com/ludwig', category: 'Machine Learning (ML)'},
  {id: 44, name: 'LibROSA', description: 'Biblioteka do przetwarzania i analizy dźwięku', apiDocumentation: 'https://example.com/librosa', category: 'Audio Processing'},
  {id: 45, name: 'Tacotron 2', description: 'Synteza mowy za pomocą AI', apiDocumentation: 'https://example.com/tacotron2', category: 'Speech Synthesis'},
  {id: 46, name: 'WaveGlow', description: 'Generowanie dźwięku za pomocą AI', apiDocumentation: 'https://example.com/waveglow', category: 'Audio Processing'},
  {id: 47, name: 'Transformers', description: 'Biblioteka do przetwarzania języka naturalnego i uczenia maszynowego', apiDocumentation: 'https://example.com/transformers', category: 'Natural Language Processing (NLP)'},
  {id: 48, name: 'T2T', description: 'Biblioteka do trenowania i wdrażania modeli AI', apiDocumentation: 'https://example.com/t2t', category: 'Machine Learning (ML)'},
  {id: 49, name: 'Rasa', description: 'Biblioteka do tworzenia chatbotów i asystentów wirtualnych', apiDocumentation: 'https://example.com/rasa', category: 'Chatbots'},
];

// Routing
app.get('/api/services', (req, res) => {
  const { searchTerm, category } = req.query;
  let filteredServices = services;

  if (searchTerm) {
    filteredServices = filteredServices.filter(service =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (category) {
    filteredServices = filteredServices.filter(service =>
      service.category.toLowerCase() === category.toLowerCase()
    );
  }

  res.json(filteredServices);
});

// Obsługa błędów 404
app.use((req, res, next) => {
  res.status(404).send('404 Not Found');
});

// Nasłuchiwanie na porcie 3001
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
