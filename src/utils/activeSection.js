export const getActiveSection = () => {
  const sections = ["home", "skills", "projects", "blogs", "contact"];
  let currentSection = "home";

  sections.forEach((section) => {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
        currentSection = section;
      }
    }
  });

  return currentSection;
};
