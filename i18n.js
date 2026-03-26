import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "Hi_hero": "Hi",
      "I'M_hero": "I'M",
      "frontend_dev_hero": "front-end Developer",
      "project_app": "Project",
      "about_app": "About",
      "myproject": "MY PROJECTS",
      "project1": "Project 1",
      "project2": "Project 2",
      "project3": "Project 3",
      "project4": "Project 4",
      "title1": "Website About Me",
      "title2": "Personal Finance App",
      "title3": "Database Management - SQL Server",
      "view": "View Project",
      "details1":"This is a personal portfolio website developed to present my profile, technical skills, and selected projects in a structured and visually appealing way. The application is built with a modern front-end approach, focusing on clean design, usability, and performance. It features a fully responsive layout that adapts seamlessly across different screen sizes, along with interactive UI components that enhance user engagement. The website allows users to explore project previews, access detailed information, and navigate smoothly between sections through an intuitive interface. Additionally, the project emphasizes maintainable code structure, component reusability, and optimized rendering to ensure a fast and consistent user experience. Technologies Used ReactJS, JavaScript (ES6+), HTML5, CSS3 (Flexbox, Grid), Responsive Design.",
      "details2": "A mobile personal finance application designed to help users manage their daily expenses and income efficiently. The app provides a clean and intuitive interface for tracking transactions, categorizing spending, and maintaining financial records in a structured manner. It features user-friendly input forms, real-time data updates, and organized views for better financial monitoring. The application focuses on simplicity and usability, allowing users to quickly add, edit, and review their financial activities on the go. The project is built with a scalable architecture and emphasizes maintainable code structure, responsive mobile UI, and smooth performance to ensure a seamless user experience.",
      "details3": "This is a small backend-focused data management project developed using Spring Boot and SQL Server (Structured Query Language Server) to handle product data, user interactions, and business logic. The project utilizes a pre-built front-end interface to simulate a real-world e-commerce environment, enabling the implementation and practice of CRUD (Create, Read, Update, Delete) operations, data processing, and database management. The project focuses on building RESTful APIs (Application Programming Interfaces), optimizing database queries, and ensuring structured data handling to achieve better performance and scalability.",
      "details4": "This is a workflow automation system built using n8n to process messages through a visual flow-based interface. The system integrates multiple nodes to handle input data, apply conditional logic, and execute automated actions via HTTP requests. The project simulates real-world chatbot and automation scenarios, enabling efficient data processing, workflow orchestration, and integration with external APIs. It is designed to generate dynamic daily greetings via Telegram based on real-time data, with results stored and logged into Google Docs for tracking and record-keeping.",
      "about_me": "About",
      "me": "ME",
      "about_text": "Hi! My name is Viet, my full name is Trieu Hoang Viet. Born and raised in Tuyen Quang, I’ve always been driven by a passion for technology. I enjoy turning ideas into reality through code, specifically using React.js, Java Spring Boot, and Flutter. I pride myself on being a fast learner with a high sense of responsibility. I am fully confident that I can adapt to any challenge and add value to your organization.",
      
    }
  },
  vi: {
    translation: {
      "Hi_hero": "Xin chào",
      "I'M_hero": "TÔI LÀ",
      "frontend_dev_hero": "Lập trình viên Front-end",
      "project_app": "DỰ ÁN",
      "about_app": "THÔNG TIN",
      "myproject": "DỰ ÁN CÁ NHÂN",
      "project1": "Dự án 1",
      "project2": "Dự án 2",
      "project3": "Dự án 3",
      "project4": "Dự án 4",
      "title1": "Trang web giới thiệu bản thân",
      "title2": "Ứng dụng quản lý chi tiêu",
      "title3": "Quản lý dữ liệu - SQL Server",
      "view": "Xem dự án",
      "details1":"Đây là một website portfolio cá nhân được phát triển nhằm trình bày thông tin cá nhân, kỹ năng chuyên môn và các dự án tiêu biểu một cách có cấu trúc và trực quan. Ứng dụng được xây dựng theo hướng front-end hiện đại, tập trung vào thiết kế gọn gàng, tính dễ sử dụng và hiệu năng. Website có bố cục responsive hoàn chỉnh, hiển thị tốt trên nhiều kích thước màn hình khác nhau, cùng với các thành phần giao diện tương tác giúp tăng mức độ tương tác của người dùng. Người dùng có thể xem trước các dự án, truy cập thông tin chi tiết và điều hướng mượt mà giữa các phần thông qua giao diện trực quan. Ngoài ra, dự án còn chú trọng vào cấu trúc code dễ bảo trì, khả năng tái sử dụng component và tối ưu hóa quá trình render nhằm đảm bảo trải nghiệm nhanh và ổn định. Công nghệ sử dụng: ReactJS, JavaScript (ES6+), HTML5, CSS3 (Flexbox, Grid), Responsive Design.",
      "details2":"Đây là một ứng dụng quản lý tài chính cá nhân trên mobile, được thiết kế nhằm giúp người dùng quản lý thu nhập và chi tiêu hàng ngày một cách hiệu quả. Ứng dụng cung cấp giao diện gọn gàng, trực quan để theo dõi giao dịch, phân loại chi tiêu và lưu trữ dữ liệu tài chính một cách có hệ thống. Ứng dụng bao gồm các form nhập liệu thân thiện, cập nhật dữ liệu theo thời gian thực và cách hiển thị rõ ràng giúp người dùng dễ dàng theo dõi tình hình tài chính. Ứng dụng tập trung vào sự đơn giản và dễ sử dụng, cho phép người dùng nhanh chóng thêm, chỉnh sửa và xem lại các hoạt động tài chính mọi lúc. Dự án được xây dựng với kiến trúc có khả năng mở rộng, đồng thời chú trọng vào cấu trúc code dễ bảo trì, giao diện mobile responsive và hiệu năng mượt mà nhằm mang lại trải nghiệm liền mạch cho người dùng.",
      "details3":"Đây là một dự án nhỏ tập trung vào backend, được phát triển bằng Spring Boot và SQL Server (Structured Query Language Server) nhằm xử lý dữ liệu sản phẩm, tương tác người dùng và logic nghiệp vụ. Dự án sử dụng một giao diện front-end có sẵn để mô phỏng môi trường thương mại điện tử thực tế, phục vụ cho việc triển khai và thực hành các chức năng CRUD (Create, Read, Update, Delete), xử lý dữ liệu và quản lý cơ sở dữ liệu. Dự án tập trung vào việc xây dựng RESTful API (Application Programming Interface), tối ưu hóa các truy vấn cơ sở dữ liệu và đảm bảo việc xử lý dữ liệu có cấu trúc nhằm cải thiện hiệu năng và khả năng mở rộng.",
      "details4":"Đây là một hệ thống workflow automation được xây dựng bằng n8n, dùng để xử lý tin nhắn thông qua giao diện dạng luồng trực quan. Hệ thống tích hợp nhiều node để xử lý dữ liệu đầu vào, áp dụng logic điều kiện và thực hiện các hành động tự động thông qua HTTP request. Dự án mô phỏng các kịch bản chatbot và tự động hóa trong thực tế, giúp xử lý dữ liệu hiệu quả, điều phối workflow và tích hợp với các API bên ngoài. Hệ thống được thiết kế để tạo ra các lời chào mỗi ngày khác nhau thông qua Telegram dựa trên dữ liệu thời gian thực, đồng thời lưu trữ và ghi lại kết quả vào Google Docs để theo dõi và quản lý dữ liệu.",
      "about_me": "Thông tin về",
      "me": "TÔI",
      "about_text": "Xin chào! Tôi tên là Triệu Hoàng Việt. Sinh ra và lớn lên tại Tuyên Quang, tôi luôn có niềm đam mê với công nghệ. Tôi yêu thích việc biến ý tưởng thành hiện thực thông qua lập trình, đặc biệt với React.js, Java Spring Boot và Flutter. Với sự tự tin là người ham học hỏi và có tinh thần trách nhiệm cao. Tôi tin rằng mình có thể thích nghi với mọi thử thách và mang lại giá trị cho nhà tuyển dụng.",
    
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // Ngôn ngữ mặc định
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;