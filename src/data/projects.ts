export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  gradient: string;
  tags: string[];
  status: 'completed' | 'in-progress' | 'planned';
  githubUrl?: string;
  demoUrl?: string;
  images: string[];
  videoUrl?: string;
  features: string[];
  learnings: string[];
  period: string;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'promptcraft',
    title: 'PromptCraft',
    subtitle: 'Interactive Prompt Engineering Learning Platform',
    description: `PromptCraft adalah platform pembelajaran interaktif yang membantu menguasai Prompt Engineering — seni menyusun instruksi yang efektif untuk AI seperti Claude, GPT, dan Gemini. Ditampilkan dalam pengalaman belajar yang interaktif dengan lessons, quiz, dan playground untuk latihan langsung.`,
    icon: '🎨',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    status: 'completed',
    githubUrl: 'https://github.com/Atazyyy/PromptCraft',
    demoUrl: 'https://promptcraft.vercel.app',
    images: [
      '/images/projects/promptcraft/1.png',
      '/images/projects/promptcraft/2.png',
    ],
    features: [
      '12 Interactive Lessons dengan materi dari dasar hingga lanjutan',
      '60+ Quiz Questions dengan instant feedback',
      '15+ Prompt Templates siap pakai',
      'XP System dan Streak Counter untuk motivasi',
      '12 Achievements untuk unlock',
      'Prompt Playground dengan save/load/copy',
      'Dark theme dengan smooth animations',
      'Responsive untuk mobile, tablet, dan desktop',
    ],
    learnings: [
      'React + TypeScript integration untuk type safety',
      'State Management dengan React Context + useReducer',
      'Gamification design (XP, streaks, achievements)',
      'UI/UX design system yang konsisten',
      'Content creation untuk materi edukasi',
    ],
    period: '2024',
  },
  {
    id: '2',
    slug: 'atapdigital-ai',
    title: 'AtapDigital AI Prompt Library',
    subtitle: 'Social Media Workflow Automation with Claude API',
    description: `AtapDigital AI Prompt Library adalah web application yang menyediakan 12+ prompt templates untuk workflow social media. Project ini menggunakan Claude API untuk menghasilkan konten berkualitas tinggi dengan glassmorphism UI yang modern.`,
    icon: '🤖',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    tags: ['Python', 'Flask', 'Claude API', 'HTML/CSS'],
    status: 'completed',
    githubUrl: 'https://github.com/Atazyyy/AtapDigital-AI-Prompt-Library',
    images: [
      '/images/projects/atapdigital-ai/1.png',
    ],
    features: [
      '12+ Prompt Templates untuk social media workflow',
      'Claude API Integration untuk output berkualitas tinggi',
      'Glassmorphism UI yang modern dan interaktif',
      'PDF & Markdown Export',
      'Interactive demo page',
      'Responsive design',
    ],
    learnings: [
      'API Integration dengan Claude (Anthropic)',
      'Flask backend development',
      'Web UI design dengan glassmorphism',
      'Content automation untuk social media',
    ],
    period: '2024',
  },
  {
    id: '3',
    slug: 'personal-finance',
    title: 'Personal Finance App',
    subtitle: 'Flutter App with YOLOv8 Receipt Recognition',
    description: `Aplikasi keuangan personal dengan fitur otomatis receipt recognition menggunakan YOLOv8 dan EasyOCR. FastAPI backend dengan SQLite database untuk menyimpan data transaksi.`,
    icon: '📱',
    gradient: 'linear-gradient(135deg, #1e3a5f, #0d1b2a)',
    tags: ['Flutter', 'Dart', 'YOLOv8', 'FastAPI', 'SQLite'],
    status: 'completed',
    githubUrl: 'https://github.com/Atazyyy/PersonalFinance',
    images: [
      '/images/projects/personal-finance/1.png',
    ],
    features: [
      'Receipt scanning dengan YOLOv8 object detection',
      'OCR untuk extract text dari receipt',
      'Categorization otomatis transaksi',
      'Dashboard dengan statistik keuangan',
      'FastAPI backend dengan SQLite',
      'Mobile-first responsive design',
    ],
    learnings: [
      'Mobile development dengan Flutter',
      'Computer Vision dengan YOLOv8',
      'OCR implementation dengan EasyOCR',
      'REST API development dengan FastAPI',
    ],
    period: '2024',
  },
  {
    id: '4',
    slug: 'rf-harvesting',
    title: 'RF Energy Harvesting System',
    subtitle: 'Multistage RF-to-DC Converter Design',
    description: `Designed a multistage RF-to-DC converter to harvest ambient RF signals for energy conversion. This project focuses on improving energy conversion efficiency through circuit optimization and testing.`,
    icon: '⚡',
    gradient: 'linear-gradient(135deg, #2d1b4e, #1a0a2e)',
    tags: ['Electronics', 'RF Systems', 'Circuit Design'],
    status: 'completed',
    githubUrl: 'https://github.com/Atazyyy/RF-Harvesting',
    images: [
      '/images/projects/rf-harvesting/1.png',
    ],
    features: [
      'Multistage RF-to-DC converter design',
      'Ambient RF signal harvesting',
      'Circuit optimization for efficiency',
      'PCB design and testing',
      'Performance measurement and analysis',
    ],
    learnings: [
      'RF circuit design fundamentals',
      'Energy conversion optimization',
      'PCB design with EDA tools',
      'Signal analysis and measurement',
    ],
    period: '2023',
  },
  {
    id: '5',
    slug: 'weather-rnn',
    title: 'Weather Prediction RNN',
    subtitle: 'Recurrent Neural Network for Time-Series Forecasting',
    description: `Built and trained a Recurrent Neural Network model to predict weather variables from time-series data. Evaluated model accuracy for weather forecasting applications.`,
    icon: '🌤',
    gradient: 'linear-gradient(135deg, #1b3d3f, #0a2021)',
    tags: ['Python', 'TensorFlow', 'RNN', 'Machine Learning'],
    status: 'completed',
    githubUrl: 'https://github.com/Atazyyy/WeatherRNN',
    images: [
      '/images/projects/weather-rnn/1.png',
    ],
    features: [
      'RNN architecture untuk time-series prediction',
      'Weather data preprocessing dan cleaning',
      'Model training dengan TensorFlow',
      'Accuracy evaluation dan metrics',
      'Visualization dari prediksi vs actual',
    ],
    learnings: [
      'Deep learning dengan TensorFlow/Keras',
      'RNN dan LSTM architectures',
      'Time-series data processing',
      'Model evaluation dan hyperparameter tuning',
    ],
    period: '2023',
  },
  {
    id: '6',
    slug: 'rfid-attendance',
    title: 'RFID Attendance System',
    subtitle: 'IoT-based Student Attendance with RFID',
    description: `WEB-based student attendance system integrated with RFID Card RC522 and NodeMCU ESP8266. Web interface untuk real-time monitoring kehadiran siswa.`,
    icon: '📋',
    gradient: 'linear-gradient(135deg, #3d2b1b, #2a1a0d)',
    tags: ['IoT', 'NodeMCU', 'RFID', 'ESP8266'],
    status: 'completed',
    githubUrl: 'https://github.com/Atazyyy/RFID-Attendance',
    images: [
      '/images/projects/rfid-attendance/1.png',
    ],
    features: [
      'RFID Card RC522 integration',
      'NodeMCU ESP8266 microcontroller',
      'Real-time web-based monitoring',
      'Attendance database dengan timestamps',
      'Export attendance reports',
    ],
    learnings: [
      'IoT system development',
      'RFID technology implementation',
      'Embedded programming dengan Arduino',
      'Web-based data visualization',
    ],
    period: '2023',
  },
  {
    id: '7',
    slug: 'bioreactor',
    title: 'Bioreactor Control System',
    subtitle: 'Agitator Control System for Bioreactor Prototype',
    description: `Developed dan calibrated an agitator control system untuk bioreactor prototype di ITB. Improved control accuracy dan performance dari sistem yang ada.`,
    icon: '🧪',
    gradient: 'linear-gradient(135deg, #2b3d1b, #1a2a0d)',
    tags: ['Control Systems', 'Automation', 'Python', 'PLC'],
    status: 'completed',
    githubUrl: 'https://github.com/Atazyyy/Bioreactor',
    images: [
      '/images/projects/bioreactor/1.png',
    ],
    features: [
      'Agitator motor control system',
      'PID controller implementation',
      'Real-time monitoring dashboard',
      'Data logging dan analysis',
      'Safety interlocks',
    ],
    learnings: [
      'Control systems engineering',
      'PID controller tuning',
      'PLC programming',
      'Process automation',
    ],
    period: '2022',
  },
  {
    id: '8',
    slug: 'line-follower',
    title: 'Line Follower Robot',
    subtitle: 'Autonomous Robot with IR Sensor Navigation',
    description: `Designed dan assembled a robot menggunakan IR sensors dan Arduino. Implemented control logic untuk stable path tracking di berbagai kondisi lintasan.`,
    icon: '🤖',
    gradient: 'linear-gradient(135deg, #3d1b3d, #2a0d2a)',
    tags: ['Arduino', 'Electronics', 'C++', 'Robotics'],
    status: 'completed',
    githubUrl: 'https://github.com/Atazyyy/LineFollower',
    images: [
      '/images/projects/line-follower/1.png',
    ],
    features: [
      'IR sensor array untuk line detection',
      'PID control untuk smooth navigation',
      'Motor driver dengan PWM control',
      'Adjustable speed dan sensitivity',
      'Competition-ready design',
    ],
    learnings: [
      'Robot kinematics dan dynamics',
      'Sensor integration dan calibration',
      'Control algorithms implementation',
      'Mechanical design untuk robotics',
    ],
    period: '2022',
  },
  {
    id: '9',
    slug: 'sumo-robot',
    title: 'Sumo Robot',
    subtitle: 'Autonomous Combat Robot with Distance Sensors',
    description: `Assembled dan programmed a combat robot menggunakan distance sensors. Optimized movement control untuk competitive performance di sumo robot competitions.`,
    icon: '🥊',
    gradient: 'linear-gradient(135deg, #1b1b3d, #0d0d2a)',
    tags: ['Arduino', 'Robotics', 'C++', 'Sensors'],
    status: 'completed',
    githubUrl: 'https://github.com/Atazyyy/SumoRobot',
    images: [
      '/images/projects/sumo-robot/1.png',
    ],
    features: [
      'Ultrasonic distance sensors',
      'Aggressive push strategy algorithms',
      'Edge detection untuk prevent falling',
      'Enemy tracking dan pursuit',
      'Competition-tuned parameters',
    ],
    learnings: [
      'Competitive robotics strategies',
      'Multi-sensor fusion',
      'Real-time control systems',
      'Mechanical durability design',
    ],
    period: '2022',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.slice(0, 3);
}
