export type ProjectType = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  coverImage: string;
  staticImages: string[];
  background: string;
};

export const bookmark: ProjectType = {
  title: 'Bookmark',
  description:
    'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.',
  tags: ['Interaction Design', 'Front End Development', 'HTML', 'CSS', 'JS'],
  link: '/portfolio/bookmark',
  coverImage: '/images/portfolio/desktop/image-portfolio-bookmark.jpg',
  staticImages: [
    '/images/detail/desktop/image-bookmark-hero.jpg',
    '/images/detail/desktop/image-bookmark-preview-1.jpg',
    '/images/detail/desktop/image-bookmark-preview-2.jpg',
  ],
  background:
    'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
};

export const fylo: ProjectType = {
  title: 'Fylo',
  description:
    'This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.',
  tags: ['Interaction Design', 'Front End Development', 'HTML', 'CSS'],
  link: '/portfolio/fylo',
  coverImage: '/images/portfolio/desktop/image-portfolio-fylo.jpg',
  staticImages: [
    '/images/detail/desktop/image-fylo-hero.jpg',
    '/images/detail/desktop/image-fylo-preview-1.jpg',
    '/images/detail/desktop/image-fylo-preview-2.jpg',
  ],
  background:
    'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
};

export const insure: ProjectType = {
  title: 'Insure',
  description:
    'This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.',
  tags: ['Interaction Design', 'Front End Development', 'HTML', 'CSS', 'JS'],
  link: '/portfolio/insure',
  coverImage: '/images/portfolio/desktop/image-portfolio-insure.jpg',
  staticImages: [
    '/images/detail/desktop/image-insure-hero.jpg',
    '/images/detail/desktop/image-insure-preview-1.jpg',
    '/images/detail/desktop/image-insure-preview-2.jpg',
  ],
  background:
    'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
};

export const manage: ProjectType = {
  title: 'Manage',
  description:
    'This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
  tags: ['Interaction Design', 'Front End Development', 'HTML', 'CSS', 'JS'],
  link: '/portfolio/manage',
  coverImage: '/images/portfolio/desktop/image-portfolio-manage.jpg',
  staticImages: [
    '/images/detail/desktop/image-manage-hero.jpg',
    '/images/detail/desktop/image-manage-preview-1.jpg',
    '/images/detail/desktop/image-manage-preview-2.jpg',
  ],
  background:
    'This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
};

const projects = [manage, bookmark, insure, fylo];

export default projects;
