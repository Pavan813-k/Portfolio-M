const buttons = document.querySelectorAll('.buttons button');
const projects = document.querySelectorAll('.project-card');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    // Mark active button
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // First hide everything (remove layout and animations)
    projects.forEach(project => {
      project.classList.remove('show');
      project.style.display = 'none';
    });

    // Then show filtered projects one by one
    let delay = 0;
    projects.forEach(project => {
      if (project.classList.contains(filter)) {
        setTimeout(() => {
          project.style.display = 'block'; // re-enter layout
          setTimeout(() => {
            project.classList.add('show'); // trigger fade+slide
          }, 10); // allow browser to apply display before animating
        }, delay);
        delay += 350; // delay per card
      }
    });
  });
});

// Trigger default filter on page load
window.addEventListener('DOMContentLoaded', () => {
  buttons[0].click();
});


  const skillsSection = document.getElementById('skills');
  const skillLevels = document.querySelectorAll('.skill-level');

  function animateSkillBars() {
    if (skillsSection.getBoundingClientRect().top < window.innerHeight - 100) {
      skillLevels.forEach(bar => {
        bar.classList.add('animate');
        bar.style.width = bar.style.getPropertyValue('--skill-width');
      });
      window.removeEventListener('scroll', animateSkillBars); // run once
    }
  }

  window.addEventListener('scroll', animateSkillBars);


