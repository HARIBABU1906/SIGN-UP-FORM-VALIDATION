 document.getElementById('currentYear').textContent = new Date().getFullYear();

        document.addEventListener('scroll', () => {
            const nav = document.getElementById('mainNav');
            if (window.scrollY > 50) {
                nav.classList.add('navbar-scrolled');
            } else {
                nav.classList.remove('navbar-scrolled');
            }
        });
         (function(){
      emailjs.init("YOUR_PUBLIC_KEY"); 
    })();

    document.getElementById("contactForm").addEventListener("submit", function(event){
      event.preventDefault();

      emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
      })
      .then(function(response) {
         alert("✅ Message sent successfully! I'll reply soon at haribabu190604@gmail.com");
         document.getElementById("contactForm").reset();
      }, function(error) {
         alert("❌ Failed to send message. Please try again later.");
         console.error("EmailJS error:", error);
      });
    });

        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Message Sent! (Replace this with actual submission logic)');
            this.reset();
        });