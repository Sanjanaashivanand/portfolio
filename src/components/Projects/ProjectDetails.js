import imageMLP from '../../assests/ProjectImages/MLP.jpeg'
import imageYOLO from '../../assests/ProjectImages/yolo.png'
import imageCovid from '../../assests/ProjectImages/COVID19Tracker.png'


const ProjectDetails = [
  { 
    id: 'hKlR5pRGth', 
    title: 'Multilayer Perceptron (MLP) from Scratch', 
    image: imageMLP,
    description: `
    <h2>Overview</h2>
    <p>This project focuses on implementing a Convolutional Neural Network (CNN) for accurately recognizing handwritten digits from the MNIST dataset. The objective is to leverage deep learning techniques using the Keras library, experimenting with various CNN architectures and hyperparameters to enhance accuracy.</p>

    <h2>Objectives</h2>
    <ol>
        <li><strong>Model Construction:</strong> Design a CNN architecture with convolutional and pooling layers, followed by fully connected layers. Experiment with different configurations, including kernel sizes, feature maps, and activation functions.</li>
        <li><strong>Dataset Utilization:</strong> Utilize the MNIST dataset, a standard benchmark in machine learning and computer vision, consisting of 60,000 training images and 10,000 testing images of handwritten digits (0-9).</li>
        <li><strong>Preprocessing:</strong> Preprocess the dataset by normalizing pixel values, transforming labels into one-hot encoded format, and adding color channels to images.</li>
        <li><strong>Model Training:</strong> Train the CNN model on the training set, analyzing the impact of architectural variations on convergence speed and accuracy.</li>
        <li><strong>Hyperparameter Exploration:</strong> Experiment with modifications to filter sizes, neuron counts in fully connected layers, learning rates, stride sizes, and loss functions to observe their effects on model performance.</li>
    </ol>

    <h2>Methodology</h2>
    <ol>
        <li><strong>Dataset Collection and Preprocessing:</strong> Retrieve the MNIST dataset using Keras, divide it into training and testing sets, and preprocess the data.</li>
        <li><strong>CNN Model Architecture:</strong> Construct a CNN using Keras Sequential API, comprising Conv2D, MaxPool2D, and Dense layers. Explore different architectural configurations.</li>
        <li><strong>Model Compilation, Training, and Evaluation:</strong> Compile the model with appropriate loss function and optimizer. Train the model on the preprocessed training data and evaluate its performance on the testing data.</li>
        <li><strong>Results Analysis:</strong> Experiment with various parameter modifications and observe their impact on convergence speed, accuracy, and overall model behavior.</li>
    </ol>

    <h2>Results and Conclusion</h2>
    <p>The project findings will provide insights into the significance of CNN parameter modifications in terms of convergence speed, accuracy, and overall model behavior. The analysis will highlight the trade-offs and considerations in selecting optimal parameters for CNN-based models.</p>
    <p>This project not only contributes to the understanding of deep learning techniques for digit recognition but also serves as a foundation for further exploration and innovation in the field of image classification.</p>
    ` ,
    code: 'https://github.com/Sanjanaashivanand/MLPfromScratch',
  },
  {
    id: 'ZYO25YebsD', 
    title: 'Object Detection using YOLO', 
    image: imageYOLO,
    description: `
    <h2>Overview</h2>
    <p>This project focuses on implementing the You Only Look Once (YOLO) algorithm for real-time object detection. The YOLO system is known for its state-of-the-art performance, offering impressive speed and accuracy. The objective is to apply YOLO to detect objects within images and videos, utilizing deep learning frameworks such as TensorFlow.</p>

    <h2>Objectives</h2>
    <ol>
        <li><strong>Algorithm Implementation:</strong> Implement the YOLO algorithm for object detection, emphasizing real-time capabilities and accuracy.</li>
        <li><strong>Dataset Utilization:</strong> Utilize datasets suitable for object detection, facilitating the training and evaluation of the YOLO model.</li>
        <li><strong>Deep Learning Framework:</strong> Implement the YOLO algorithm using deep learning frameworks like TensorFlow, taking advantage of existing tools and libraries.</li>
    </ol>

    <h2>Methodology</h2>
    <ol>
        <li><strong>Dataset Selection:</strong> Choose appropriate datasets containing images and videos with annotated object bounding boxes for training and testing.</li>
        <li><strong>YOLO Model Implementation:</strong> Implement the YOLO model architecture using TensorFlow, configuring the network for object detection.</li>
        <li><strong>Training and Evaluation:</strong> Train the YOLO model on the selected dataset, evaluating its performance on test data and ensuring accurate object detection.</li>
        <li><strong>Real-time Application:</strong> Explore the real-time application of the YOLO algorithm for object detection in videos, emphasizing speed and precision.</li>
    </ol>

    <h2>Results and Conclusion</h2>
    <p>The project aims to achieve accurate and real-time object detection using the YOLO algorithm. By leveraging deep learning frameworks and suitable datasets, the findings will contribute to advancements in computer vision applications. The project underscores the significance of YOLO in achieving state-of-the-art object detection capabilities.</p>
    `,
    code: 'https://github.com/Sanjanaashivanand/ObjectDetectionUsingYOLO'
  },
  {
    id: '24gCNEMBzC',
    title: 'COVID-19 Tracker',
    image: imageCovid,
    description: `
    <h2>Overview</h2>
    <p>This React project aims to create a real-time COVID-19 dashboard, providing up-to-date information and statistics sourced from Worldometer's data API. The dashboard serves as a web application designed to offer comprehensive insights into the ongoing COVID-19 pandemic on a global scale, including crucial metrics such as the number of confirmed cases, recoveries, deaths, and other relevant data points.</p>

    <h2>Objectives</h2>
    <ol>
        <li><strong>Data Integration:</strong> Utilize Worldometer's data API to fetch real-time information about COVID-19 statistics worldwide.</li>
        <li><strong>Dashboard Design:</strong> Create an interactive and visually appealing dashboard using React components to display key metrics and trends.</li>
        <li><strong>Data Visualization:</strong> Implement data visualization techniques such as charts and graphs to present COVID-19 data in an easily understandable format.</li>
        <li><strong>User Interaction:</strong> Provide user-friendly features for sorting and filtering data, enabling users to explore specific regions or timeframes.</li>
    </ol>

    <h2>Methodology</h2>
    <ol>
        <li><strong>API Integration:</strong> Connect to Worldometer's data API to fetch real-time COVID-19 statistics, ensuring a consistent and reliable data source.</li>
        <li><strong>React Components:</strong> Develop modular React components for various aspects of the dashboard, including overall statistics, regional breakdowns, and historical trends.</li>
        <li><strong>Data Visualization:</strong> Utilize charting libraries or custom components to visually represent COVID-19 data, aiding users in understanding trends and patterns.</li>
        <li><strong>Responsive Design:</strong> Implement a responsive design to ensure the dashboard is accessible and usable across various devices.</li>
    </ol>

    <h2>Results and Conclusion</h2>
    <p>The Real-time COVID-19 Dashboard project seeks to provide users with a reliable and visually engaging platform to stay informed about the evolving global situation. By leveraging Worldometer's data API and React's capabilities, this project aims to contribute to public awareness and understanding of the ongoing pandemic.</p>
      `,
    code: 'https://github.com/Sanjanaashivanand/Covid_Tracker',
  },
  // {
  //   id: 'It7Vxxpp4v',
  //   title: 'Fantom - An Ecommerce Website',
  //   image: FantomImage,
  //   description: `
  //   <h2>Overview</h2>
  // }
  // Add more projects with detailed descriptions here...
  
];

export default ProjectDetails;