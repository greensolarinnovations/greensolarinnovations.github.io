// Scroll to contact section when button clicked
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Handle contact form submit
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    this.reset();
  });
  function scrollToBenefits() {
    const benefitsSection = document.getElementById("benefit-cleaning");
    benefitsSection.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToInstallationBenefits() {
    document.getElementById("installation-benefits").scrollIntoView({
      behavior: "smooth"
    });
  }
  