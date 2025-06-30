const buttons = document.querySelectorAll('.buttons button');
const projects = document.querySelectorAll('.project-card');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    projects.forEach(project => {
      if (filter === 'all') {
        project.style.display = 'block';
      } else {
        if (project.classList.contains(filter)) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      }
    });
  });
});

// Show all projects on initial load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.project-card').forEach(card => {
    card.style.display = 'block';
  });
});
