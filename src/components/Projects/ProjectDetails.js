import imageMLP from '../../assests/ProjectImages/MLP.jpeg'
import imageYOLO from '../../assests/ProjectImages/yolo.png'
import imageCovid from '../../assests/ProjectImages/COVID19Tracker.png'
import Viby from '../../assests/ProjectImages/Viby.png'
import DoorLock from '../../assests/ProjectImages/DoorLock.jpeg'
import VideoCompression from '../../assests/ProjectImages/VideoCompression.png'


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
  {
    id: 'TR9zlSpl9I',
    title: 'Viby: Mood based Music Recommendation System',
    image: Viby,
    award: 'Best Innovation Award',
    description: `
    <p>In a world where mental health concerns are on the rise, Viby emerges as a pioneering solution leveraging the therapeutic power of music. Grounded in psychological research affirming the stress-relieving and mood-elevating effects of music, Viby seeks to address the critical need for a holistic music recommendation system.</p>

    <h2>Key Objectives:</h2>
    <ul>
      <li><strong>User-Centric Music Therapy:</strong> Viby aims to enhance users' mental well-being by delivering personalized music recommendations based on their emotions and moods.</li>
      <li><strong>Comprehensive Algorithm:</strong> Unlike existing platforms, Viby goes beyond conventional music recommendation systems, integrating machine learning and natural language processing (NLP) algorithms for emotion recognition.</li>
    </ul>

    <h2>Methodology:</h2>
    <p><strong>Frontend Development:</strong> Viby's frontend is crafted with ReactJS and enhanced with Redux for effective data management. MUI components contribute to an intuitive user interface.</p>
    <p><strong>Backend Development:</strong> Node.js and Flask serve as the backend frameworks, supported by Python for model coding. MongoDB stores user data, including preferences and login credentials.</p>
    <p><strong>Data Source:</strong> A dataset of 12,000 songs sourced from the Spotify Web API enriches Viby's capabilities. This dataset, with calculated audio features, fuels the recommendation engine.</p>
    <p><strong>Models Deployment:</strong> Heroku hosts two main models - an emotion and valence analyzer utilizing NLP, and a song recommendation model blending content-based filtering and sentiment analysis.</p>
    <p><strong>Valence Aware Dictionary and sEntiment Reasoner (VADER):</strong> Viby implements VADER, an NLP tool sensitive to polarity and intensity of emotions, using the Spotify Web API for song data.</p>
    <p><strong>Playlist Generation:</strong> The song recommendation model combines content-based filtering and sentiment analysis to curate playlists aligned with users' current moods.</p>

    <h2>Integration and Deployment:</h2>
    <p><strong>API Integration:</strong> Viby seamlessly integrates APIs to fetch emotion and valence analysis results, ensuring real-time responsiveness.</p>
    <p><strong>Deployment:</strong> The entire Viby website is deployed on Netlify, ensuring accessibility and usability for users worldwide.</p>

    <p>Viby is not just a music recommendation system; it's a step towards harnessing the therapeutic potential of music for mental well-being. Through cutting-edge technology and a user-centric approach, Viby invites users to explore the profound connection between their emotions and the melodies that accompany them.</p>
    `,
    publication: 'https://www.irjmets.com/uploadedfiles/paper/issue_7_july_2022/27915/final/fin_irjmets1657529466.pdf'
  }, 
  {
    id: 'VlcR6staTu',
    title: 'Enhancing Video Object Detection through Feature Extraction-Based Video Compression',
    image: VideoCompression,
    description: `
    <h2>Problem Statement:</h2>
    <p>
        Traditional video compression methods are tailored for human vision, posing challenges for automated video
        surveillance, where computers analyze frames. The compromise in object recognition precision due to traditional
        compression methods is a critical issue.
    </p>

    <h2>Proposal:</h2>
    <p>
        The proposal aims to enhance video object detection by employing a feature extraction-based video compression
        technique.
    </p>

    <h2>Methodology:</h2>
    <ol>
        <li><strong>Extract Features:</strong> Pass frames through a YOLO model, extracting features from CNN layers to
            highlight important areas.</li>
        <li><strong>Calculate Object Importance Maps:</strong> Utilize CNN kernels to calculate L2 normalized values,
            representing object importance for each pixel.</li>
        <li><strong>Devise Bit Allocation Strategy:</strong> Divide object importance maps into blocks, calculate QP
            values, and store them for video compression.</li>
        <li><strong>Video Compression:</strong> Use FFMPEG video compressor with the calculated QP values to encode video
            frames.</li>
    </ol>
    `,
    code: 'https://colab.research.google.com/drive/1_v_7Mqr1uSn72cJB_TdwZKS7o-PMm5Iq#scrollTo=bUYBzCpvGvyJ'

  },
  {
    id: '61prOriSpa',
    title: 'Computer Vision Based Smart Door Lock Bot',
    image: DoorLock,
    description: `
    <h2>Abstract</h2>

    <p>Security has always been a concern among humans. The necessity for a capable security system is paramount. It provides protection, acts as a deterrent to burglars, promotes the 
    owner’s peace of mind and contributes to reduced home insurance premiums. Our proposed project, the Smart Door Lock, is a security system based on the facial detection and recognition of visitors. 
    It uses sensors such as Raspberry Pi, PIR motion sensor and Pi camera in order to detect any intruders. It is coupled with CV facilities, which allows it to scan and confirm whether the person is an 
    interloper or an associate who is known to the owner, which the user can confirm. Once this is complete, the system sends the appropriate message via a connected Discord server and either unlocks the door for the user, 
    or keeps the door bolted and raises an alarm. All in all, the features of the Smart Door Lock aim to provide a guarantee of protection to users and maximize the safety of their houses, especially in their absence.
    </p>
    
    <h2>Objective and Scope</h2>
    <ol>
    <li>
    Constructing an architecture regarding the security and functionality. 
    </li>
    <li>
    Establishing a reliable technique to determine if a user is in the physical proximity of the door lock using PIR sensor.
    </li>
    <li>
    Attaining a proper policy to authenticate users trying to access the door. 
    </li>
    <li>
    Creating a bot that can serve the user 24/7 at the endpoint.
    </li>
    <li>
    Creating an easy monitoring environment to capture the daily check ins.
    </li>
    </ol>

    <h2>Methodology</h2>

    <ul>
    <li>
      <strong>Face Recognition to Open the Door</strong>
      <p>When the PIR sensor senses the presence of a human, the Pi camera is turned on, capturing a snapshot. This image serves as input for the face-detection and face-recognition software. OpenCV fetches data from the database to check whether the face is registered. If the image is recognized as the user, the door automatically unlocks; otherwise, the image is processed and sent to the user's Discord channel.</p>
    </li>

    <li>
      <strong>Emergency Recording</strong>
      <p>In case the user wants to monitor their premises, they can send an alert via the Discord bot. The Pi camera immediately starts recording, storing the video in local storage, and sending it to the user's Discord channel.</p>
    </li>

    <li>
      <strong>Easy Open/Close</strong>
      <p>The bot constantly monitors messages from the user; if any keywords are encountered, it instantaneously opens or closes the door lock.</p>
    </li>

    <li>
      <strong>Security</strong>
      <p>Discord offers high-level security with its authentication and authorization features, making it robust against outside breaches.</p>
    </li>
    </ul>

    `
  },
  
];

export default ProjectDetails;