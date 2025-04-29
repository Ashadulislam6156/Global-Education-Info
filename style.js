//   destination-guide section start

      const countryData = {
        USA: {
          Visa: "F-1 Student Visa",
          Tuition: "$10,000 - $40,000/year",
          Living: "$800 - $1,500/month",
          Jobs: "20 hrs/week on-campus"
        },
        UK: {
          Visa: "Student Route Visa",
          Tuition: "£10,000 - £20,000/year",
          Living: "£800 - £1,200/month",
          Jobs: "20 hrs/week"
        },
        Canada: {
          Visa: "Study Permit",
          Tuition: "CA$12,000 - CA$25,000/year",
          Living: "CA$700 - CA$1,200/month",
          Jobs: "20 hrs/week"
        },
        Australia: {
          Visa: "Subclass 500",
          Tuition: "AU$15,000 - AU$30,000/year",
          Living: "AU$1,000 - AU$1,400/month",
          Jobs: "48 hrs/fortnight"
        },
        Germany: {
          Visa: "Student Visa (D-type)",
          Tuition: "Mostly Free",
          Living: "€700 - €1,000/month",
          Jobs: "120 full / 240 half days/year"
        }
      };
    
      const compareBtn = document.getElementById("compareBtn");
      const compareModal = document.getElementById("compareModal");
      const closeModalBtn = document.getElementById("closeModalBtn");
      const showComparison = document.getElementById("showComparison");
      const table = document.getElementById("comparisonTable");
    
      compareBtn.onclick = () => compareModal.style.display = "block";
      closeModalBtn.onclick = () => compareModal.style.display = "none";
    
      window.onclick = event => {
        if (event.target === compareModal) {
          compareModal.style.display = "none";
        }
      };
    
      showComparison.onclick = () => {
        const c1 = document.getElementById("country1").value;
        const c2 = document.getElementById("country2").value;
    
        if (c1 === c2) {
          table.innerHTML = `<p>Please select two different countries to compare.</p>`;
          return;
        }
    
        const data1 = countryData[c1];
        const data2 = countryData[c2];
    
        table.innerHTML = `
          <table>
            <thead>
              <tr>
                <th>Criteria</th>
                <th>${c1}</th>
                <th>${c2}</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Visa</td><td>${data1.Visa}</td><td>${data2.Visa}</td></tr>
              <tr><td>Tuition Fees</td><td>${data1.Tuition}</td><td>${data2.Tuition}</td></tr>
              <tr><td>Living Cost</td><td>${data1.Living}</td><td>${data2.Living}</td></tr>
              <tr><td>Part-time Jobs</td><td>${data1.Jobs}</td><td>${data2.Jobs}</td></tr>
            </tbody>
          </table>
        `;
      };



// Navbar

// 1. Toggle Navigation Menu on Mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Show/hide nav menu
});

// 2. Redirect the "LogIn" button
const logInButton = document.querySelector('.nav-button button');
logInButton.addEventListener('click', () => {
    window.location.href = './User-logIn-page.html';
});

// 3.1 Redirect the "Sign Up" button
const signUpButton = document.querySelector('.banner-sign-up button');
signUpButton.addEventListener('click', () => {
    window.location.href = './SignUp-Page.html';
});

// 3.2 Highlight the current active page
const navItems = document.querySelectorAll('.nav-right nav a');
const currentPath = window.location.pathname;

navItems.forEach(link => {
    if (link.getAttribute('href') && currentPath.includes(link.getAttribute('href').split('/').pop())) {
        link.classList.add('Active-page');
    } else {
        link.classList.remove('Active-page');
    }
});


// Navbar



/* Banner */

// University & internal search routes
const searchRoutes = {
    "harvard": "https://www.harvard.edu/",
    "oxford": "https://www.ox.ac.uk/",
    "mit": "https://www.mit.edu/",
    "cambridge": "https://www.cam.ac.uk/",
    "stanford": "https://www.stanford.edu/",
    "toronto": "https://www.utoronto.ca/",
    "tokyo": "https://www.u-tokyo.ac.jp/en/",
    "nus": "https://www.nus.edu.sg/",
    "berkeley": "https://www.berkeley.edu/",
    "yale": "https://www.yale.edu/",

    // Internal site pages
    "scholarship": "./Scholarships-Page.html",
    "scholarships": "./Scholarships-Page.html",
    "usa": "./Universities-Page.html",
    "uk": "./Universities-Page.html",
    "contact": "./Contact-page.html",
    "blog": "./Blog-page.html"
};

// Select elements
const searchButton = document.querySelector('.search-bar button');
const searchInput = document.querySelector('.search-bar input');

// Optional: create message container
let messageBox = document.createElement('div');
messageBox.id = 'search-message';
messageBox.style.marginTop = '10px';
messageBox.style.color = 'red';
messageBox.style.fontWeight = 'bold';
searchInput.parentElement.appendChild(messageBox);

// Handle search click
searchButton.addEventListener('click', () => {
    const userInput = searchInput.value.trim().toLowerCase();

    // Clear any previous message
    messageBox.textContent = "";

    if (userInput === "") {
        messageBox.textContent = "Please enter a keyword to search.";
        return;
    }

    if (searchRoutes[userInput]) {
        window.location.href = searchRoutes[userInput];
    } else {
        messageBox.textContent = `Sorry, the university "${userInput}" is not available in our database.`;
    }
});





/* Banner */

// home page future section start


  const universities = [
    {
      name: "University of Oxford",
      country: "UK",
      rank: "#1 UK",
      tuition: "£27,840/year",
      scholarships: "Chevening, Rhodes",
      image: "./Images/oxford.jpeg",
      link: "https://www.ox.ac.uk/admissions"
    },
    {
      name: "Harvard University",
      country: "USA",
      rank: "#1 USA",
      tuition: "$54,269/year",
      scholarships: "Fulbright, AAUW",
      image: "./Images/harvard.jpeg",
      link: "https://college.harvard.edu/admissions"
    },
    {
      name: "University of Toronto",
      country: "Canada",
      rank: "#1 Canada",
      tuition: "CAD $58,160/year",
      scholarships: "Lester B. Pearson",
      image: "./Images/toronto.jpeg",
      link: "https://future.utoronto.ca/apply/"
    },
    {
      name: "University of Melbourne",
      country: "Australia",
      rank: "#1 Australia",
      tuition: "AUD $45,000/year",
      scholarships: "Australia Awards, RTP",
      image: "./Images/melborn.jpeg",
      link: "https://study.unimelb.edu.au/how-to-apply"
    }
  ];

  // Save to localStorage (only once if not present)
  if (!localStorage.getItem('featuredUniversities')) {
    localStorage.setItem('featuredUniversities', JSON.stringify(universities));
  }

  // Load and render cards
  const container = document.getElementById('card-container');
  const data = JSON.parse(localStorage.getItem('featuredUniversities'));

  data.forEach((uni) => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <div class="img-div">
        <img src="${uni.image}" alt="${uni.name}" class="logo" />
      </div>
      <h3>${uni.name}</h3>
      <p class="country">${uni.country}</p>
      <ul>
        <li><strong>🌐 Rank:</strong> ${uni.rank}</li>
        <li><strong>💸 Tuition:</strong> ${uni.tuition}</li>
        <li><strong>🎯 Scholarships:</strong> ${uni.scholarships}</li>
      </ul>
      <a href="${uni.link}" target="_blank" class="apply-btn">Apply Now</a>
    `;

    container.appendChild(card);
  });



//   Agency section start


// Function to dynamically load agency data
const agencies = [
    {
      id: 'pfec',
      name: 'PFEC Global',
      url: 'https://pfecglobal.com.bd/',
      description: 'Provides counseling and services for higher education in countries like Australia, Canada, the UK, USA, and more.',
      logo: 'https://pfecglobal.com.bd/wp-content/uploads/2021/06/pfec-logo.png',
    },
    {
      id: 'eduko',
      name: 'Eduko Pathways',
      url: 'https://edukopathwaysbd.com/',
      description: 'Offers personalized guidance and tailored solutions for students seeking international education opportunities.',
      logo: 'https://edukopathwaysbd.com/wp-content/uploads/2021/06/eduko-logo.png',
    },
    {
      id: 'idp',
      name: 'IDP Bangladesh',
      url: 'https://www.idp.com/bangladesh/',
      description: 'Co-founder of IELTS and official representative of universities in the UK, Canada, Australia, and many other countries.',
      logo: 'https://www.idp.com/medias/IDP-Logo.png?context=bWFzdGVyfHJvb3R8MjYxNzF8aW1hZ2UvcG5nfGg2YS9oZDIvODg2MDM4ODk2MjI4Ni9JRFAtTG9nby5wbmd8ZDMz',
    },
    {
      id: 'pie',
      name: 'PIE International',
      url: 'https://piebd.com',
      description: 'Expert in admission and visa processing for study in Europe, Canada, and Australia.',
      logo: 'https://piebd.com/assets/images/logo.png',
    },
    {
      id: 'maces',
      name: 'MACES',
      url: 'https://macesbd.com/',
      description: 'Leads in admission services and IELTS coaching for the UK and Europe.',
      logo: 'https://macesbd.com/images/logo.png',
    },
    {
      id: 'tcl',
      name: 'TCL Global',
      url: 'https://tclglobalbd.com/',
      description: 'TCL Global operates in over 25 countries, providing global education services worldwide.',
      logo: 'https://tclglobal.co.uk/wp-content/uploads/2021/08/TCL-Logo-01.png',
    },
  ];
  
  // Dynamically update agency content
  agencies.forEach(agency => {
    const agencyCard = document.getElementById(agency.id);
    agencyCard.querySelector('h3').textContent = agency.name;
    agencyCard.querySelector('p').textContent = agency.description;
    agencyCard.querySelector('a').setAttribute('href', agency.url);
    agencyCard.querySelector('img').setAttribute('src', agency.logo);
  });
  

// FAQ Section Start

      function openChat() {
        document.getElementById('chatModal').style.display = 'block';
        loadMessages(); // Load previous messages from localStorage
      }
    
      function closeChat() {
        document.getElementById('chatModal').style.display = 'none';
      }
    
      function sendMessage() {
        const input = document.getElementById("chat-input");
        const message = input.value.trim();
        if (message === "") return;
    
        const chatBox = document.getElementById("chat-box");
    
        // Add user's message
        const userMsg = document.createElement("p");
        userMsg.className = "user-message";
        userMsg.textContent = "You: " + message;
        chatBox.appendChild(userMsg);
    
        // Save to localStorage
        saveMessage("You: " + message);
    
        // Clear input field
        input.value = "";
    
        // Simulate response
        setTimeout(() => {
          const reply = document.createElement("p");
          reply.className = "support-message";
          reply.textContent = "Support: Thanks for your message. We'll get back shortly.";
          chatBox.appendChild(reply);
    
          saveMessage("Support: Thanks for your message. We'll get back shortly.");
          chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
      }
    
      function saveMessage(msg) {
        let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
        messages.push(msg);
        localStorage.setItem("chatMessages", JSON.stringify(messages));
      }
    
      function loadMessages() {
        const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
        const chatBox = document.getElementById("chat-box");
        chatBox.innerHTML = ""; // Clear old messages
        messages.forEach(msg => {
          const p = document.createElement("p");
          if (msg.startsWith("You:")) {
            p.className = "user-message";
          } else {
            p.className = "support-message";
          }
          p.textContent = msg;
          chatBox.appendChild(p);
        });
        chatBox.scrollTop = chatBox.scrollHeight;
      }




      // Function to subscribe and store email in localStorage

      function subscribe() {
        var email = document.getElementById('email').value;
    
        // Check if the email field is empty
        if (email.trim() !== "") {
          // Save the email to localStorage
          localStorage.setItem('subscribedEmail', email);
          alert('Thank you for subscribing! We\'ll send updates to ' + email);
          
          // Optionally, you can clear the input field after subscription
          document.getElementById('email').value = "";
        } else {
          alert('Please enter a valid email address.');
        }
      }
  
