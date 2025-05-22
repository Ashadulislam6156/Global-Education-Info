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
// Responsive navbar toggle
// document.addEventListener("DOMContentLoaded", function () {
//   const menuToggle = document.getElementById("menu-toggle");
//   const navLinks = document.getElementById("nav-links");

//   menuToggle.addEventListener("click", function () {
//       navLinks.classList.toggle("active");
//   });
// });



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


/* Banner */


// scholarship page start





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
    }
    // } else {
    //     messageBox.textContent = `Sorry, the university "${userInput}" is not available in our database.`;
    // }
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


  
       // University Page design start

       // Top 20 Universities
const geiUniversitiesData = [
  {
    id: 1,
    name: "Massachusetts Institute of Technology (MIT)",
    country: "usa",
    rank: "01",
    description: "Known for STEM programs, research, and innovation.",
    website: "https://www.mit.edu"
  },
  {
    id: 2,
    name: "Stanford University",
    country: "usa",
    rank: "02",
    description: "Leading in technology, business, and entrepreneurship.",
    website: "https://www.stanford.edu"
  },
  {
    id: 3,
    name: "Harvard University",
    country: "usa",
    rank: "03",
    description: "World-renowned for law, medicine, and humanities.",
    website: "https://www.harvard.edu"
  },
  {
    id: 4,
    name: "University of Oxford",
    country: "uk",
    rank: "04",
    description: "Oldest English-speaking university with strong research focus.",
    website: "https://www.ox.ac.uk"
  },
  {
    id: 5,
    name: "University of Cambridge",
    country: "uk",
    rank: "05",
    description: "Prestigious in sciences, arts, and research.",
    website: "https://www.cam.ac.uk"
  },
  {
    id: 6,
    name: "California Institute of Technology (Caltech)",
    country: "usa",
    rank: "06",
    description: "Small but elite in engineering and physical sciences.",
    website: "https://www.caltech.edu"
  },
  {
    id: 7,
    name: "ETH Zurich",
    country: "europe",
    rank: "07",
    description: "Top European university for technology and natural sciences.",
    website: "https://www.ethz.ch"
  },
  {
    id: 8,
    name: "University of Chicago",
    country: "usa",
    rank: "08",
    description: "Strong in economics, social sciences, and research.",
    website: "https://www.uchicago.edu"
  },
  {
    id: 9,
    name: "Imperial College London",
    country: "uk",
    rank: "09",
    description: "Leading in science, engineering, medicine, and business.",
    website: "https://www.imperial.ac.uk"
  },
  {
    id: 10,
    name: "University of Pennsylvania",
    country: "usa",
    rank: "10",
    description: "Famous for Wharton Business School and liberal arts.",
    website: "https://www.upenn.edu"
  },
  {
    id: 11,
    name: "Yale University",
    country: "usa",
    rank: "11",
    description: "Elite in law, arts, and humanities.",
    website: "https://www.yale.edu"
  },
  {
    id: 12,
    name: "Princeton University",
    country: "usa",
    rank: "12",
    description: "Strong in mathematics, physics, and public policy.",
    website: "https://www.princeton.edu"
  },
  {
    id: 13,
    name: "Columbia University",
    country: "usa",
    rank: "13",
    description: "Renowned for journalism, business, and arts.",
    website: "https://www.columbia.edu"
  },
  {
    id: 14,
    name: "University of Toronto",
    country: "canada",
    rank: "14",
    description: "Canada's top university with diverse programs.",
    website: "https://www.utoronto.ca"
  },
  {
    id: 15,
    name: "University of California, Berkeley (UCB)",
    country: "usa",
    rank: "15",
    description: "Leading in computer science, engineering, and social sciences.",
    website: "https://www.berkeley.edu"
  },
  {
    id: 16,
    name: "University of Melbourne",
    country: "australia",
    rank: "16",
    description: "Australia's best for research and multidisciplinary programs.",
    website: "https://www.unimelb.edu.au"
  },
  {
    id: 17,
    name: "National University of Singapore (NUS)",
    country: "asia",
    rank: "17",
    description: "Asia's top university with global recognition.",
    website: "https://www.nus.edu.sg"
  },
  {
    id: 18,
    name: "University of Michigan, Ann Arbor",
    country: "usa",
    rank: "18",
    description: "Excellent in engineering, business, and social sciences.",
    website: "https://umich.edu"
  },
  {
    id: 19,
    name: "University of Edinburgh",
    country: "uk",
    rank: "19",
    description: "Historic university strong in medicine, law, and AI.",
    website: "https://www.ed.ac.uk"
  },
  {
    id: 20,
    name: "Tsinghua University",
    country: "asia",
    rank: "20",
    description: "China's top university for STEM and technology.",
    website: "https://www.tsinghua.edu.cn"
  }
];

// DOM Elements
const geiUniversitiesList = document.getElementById('gei-universities-list');
const geiSearchInput = document.getElementById('gei-search-input');
const geiCountryFilter = document.getElementById('gei-country-filter');

// Display Universities
function geiDisplayUniversities(universities) {
  geiUniversitiesList.innerHTML = '';
  universities.forEach(university => {
    const universityCard = document.createElement('div');
    universityCard.className = 'gei-university-card';
    universityCard.innerHTML = `
      <h3 class="gei-university-name">${university.name}</h3>
      <span class="gei-university-country">${university.country.toUpperCase()}</span>
      <p class="gei-university-rank">Rank: ${university.rank}</p>
      <p class="gei-university-desc">${university.description}</p>
      <a href="${university.website}" target="_blank" class="gei-university-link">Visit Website</a>
    `;
    geiUniversitiesList.appendChild(universityCard);
  });
}

// Filter Universities
function geiFilterUniversities() {
  const searchTerm = geiSearchInput.value.toLowerCase();
  const country = geiCountryFilter.value;

  const filtered = geiUniversitiesData.filter(university => {
    const matchesSearch = university.name.toLowerCase().includes(searchTerm) || 
                         university.description.toLowerCase().includes(searchTerm);
    const matchesCountry = country === 'all' || university.country === country;
    return matchesSearch && matchesCountry;
  });

  geiDisplayUniversities(filtered);
}

// Event Listeners
geiSearchInput.addEventListener('input', geiFilterUniversities);
geiCountryFilter.addEventListener('change', geiFilterUniversities);

// Initialize
geiDisplayUniversities(geiUniversitiesData);


// Cache for university rankings
let rankingsCache = null;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

// Function to fetch university rankings with caching
async function fetchUniversityRankings() {
    try {
        // Check if we have valid cached data
        const cachedData = localStorage.getItem('universityRankings');
        const cacheTimestamp = localStorage.getItem('rankingsTimestamp');
        
        if (cachedData && cacheTimestamp) {
            const now = new Date().getTime();
            if (now - parseInt(cacheTimestamp) < CACHE_DURATION) {
                rankingsCache = JSON.parse(cachedData);
                updateRankingsUI(rankingsCache);
                return;
            }
        }

        // If no valid cache, fetch from API
        const response = await fetch('https://api.timeshighereducation.com/v1/rankings', {
            headers: {
                'Authorization': 'Bearer YOUR_API_KEY', // Replace with your actual API key
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('API request failed');
        }

        const data = await response.json();
        
        // Process and cache the data
        rankingsCache = {
            oxford: formatRanking(data, 'University of Oxford'),
            harvard: formatRanking(data, 'Harvard University'),
            toronto: formatRanking(data, 'University of Toronto'),
            melbourne: formatRanking(data, 'University of Melbourne')
        };

        // Save to cache
        localStorage.setItem('universityRankings', JSON.stringify(rankingsCache));
        localStorage.setItem('rankingsTimestamp', new Date().getTime().toString());

        // Update UI
        updateRankingsUI(rankingsCache);

    } catch (error) {
        console.error('Error fetching university rankings:', error);
        // Try to use cached data even if expired
        if (rankingsCache) {
            updateRankingsUI(rankingsCache);
        } else {
            // Show fallback rankings if no cache available
            const fallbackRankings = {
                oxford: "#2 World, #1 UK",
                harvard: "#3 World, #1 USA",
                toronto: "#18 World, #1 Canada",
                melbourne: "#14 World, #1 Australia"
            };
            updateRankingsUI(fallbackRankings);
        }
    }
}

// Helper function to format ranking data
function formatRanking(data, universityName) {
    const university = data.find(u => u.name === universityName);
    if (university) {
        return `#${university.worldRank} World, #${university.countryRank} ${university.country}`;
    }
    return 'Ranking unavailable';
}

// Helper function to update UI
function updateRankingsUI(rankings) {
    document.querySelectorAll('.university-rank').forEach(element => {
        const university = element.getAttribute('data-university');
        if (rankings[university]) {
            element.textContent = rankings[university];
        } else if (window.initialRankings && window.initialRankings[university]) {
            element.textContent = window.initialRankings[university];
        } else {
            element.textContent = 'Ranking unavailable';
        }
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Show initial loading state
    document.querySelectorAll('.university-rank').forEach(element => {
        element.textContent = 'Loading...';
    });

    // Show initial rankings immediately (for fast UX)
    if (window.initialRankings) {
        updateRankingsUI(window.initialRankings);
    }

    // Fetch rankings from API (will overwrite if successful)
    fetchUniversityRankings();
});

// বিশ্ববিদ্যালয় ডাটা লোড করার ফাংশন
async function loadUniversities() {
    try {
        const response = await fetch('http://localhost:5000/api/universities');
        const universities = await response.json();
        
        // ডাটা লোড করে UI আপডেট করা
        const cardContainer = document.querySelector('.card-container');
        cardContainer.innerHTML = ''; // কন্টেইনার খালি করা
        
        universities.forEach(university => {
            const card = `
                <div class="card">
                    <div class="img-div">
                        <img src="${university.image}" alt="${university.name}" class="logo" />
                    </div>
                    <h3>${university.name}</h3>
                    <p class="country">${university.country}</p>
                    <ul>
                        <li><strong>🌐 Rank:</strong> ${university.ranking.world}</li>
                        <li><strong>💸 Tuition:</strong> ${university.tuition.amount} ${university.tuition.currency}/year</li>
                        <li><strong>🎯 Scholarships:</strong> ${university.scholarships.join(', ')}</li>
                    </ul>
                    <a href="${university.website}" target="_blank" class="apply-btn">Apply Now</a>
                </div>
            `;
            cardContainer.innerHTML += card;
        });
    } catch (error) {
        console.error('Error loading universities:', error);
    }
}

// পেজ লোড হওয়ার সময় ফাংশন কল করা
document.addEventListener('DOMContentLoaded', loadUniversities);



// new add

async function performSearch() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const resultsDiv = document.getElementById('searchResults');
  
  try {
      // API থেকে ডাটা লোড
      const response = await fetch('http://localhost:5001/api/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: searchTerm })
      });
      
      const data = await response.json();
      
      // রেজাল্ট দেখানো
      if (data.universities.length > 0 || data.scholarships.length > 0) {
          let html = '<div class="search-results-container">';
          
          // বিশ্ববিদ্যালয় রেজাল্ট
          if (data.universities.length > 0) {
              html += '<h3>Universities</h3>';
              data.universities.forEach(uni => {
                  html += `
                      <div class="result-card">
                          <h4>${uni.name}</h4>
                          <p>Country: ${uni.country}</p>
                          <p>Ranking: #${uni.ranking}</p>
                          <p>Programs: ${uni.programs.join(', ')}</p>
                          <a href="${uni.website}" target="_blank">Visit Website</a>
                      </div>
                  `;
              });
          }
          
          // স্কলারশিপ রেজাল্ট
          if (data.scholarships.length > 0) {
              html += '<h3>Scholarships</h3>';
              data.scholarships.forEach(scholar => {
                  html += `
                      <div class="result-card">
                          <h4>${scholar.name}</h4>
                          <p>Amount: ${scholar.amount}</p>
                          <p>Deadline: ${scholar.deadline}</p>
                          <p>Eligibility: ${scholar.eligibility}</p>
                          <a href="${scholar.link}" target="_blank">Apply Now</a>
                      </div>
                  `;
              });
          }
          
          html += '</div>';
          resultsDiv.innerHTML = html;
      } else {
          resultsDiv.innerHTML = '<p class="no-results">No results found. Try different keywords.</p>';
      }
  } catch (error) {
      resultsDiv.innerHTML = '<p class="error">Error loading results. Please try again.</p>';
  }
}



// api

// server.js এ যোগ করব
app.post('/api/search', async (req, res) => {
  const { query } = req.body;
  
  try {
      // ডাটাবেস থেকে সার্চ
      const universities = await pool.query(
          'SELECT * FROM universities WHERE name ILIKE $1 OR country ILIKE $1 OR programs ILIKE $1',
          [`%${query}%`]
      );
      
      const scholarships = await pool.query(
          'SELECT * FROM scholarships WHERE name ILIKE $1 OR country ILIKE $1 OR eligibility ILIKE $1',
          [`%${query}%`]
      );
      
      res.json({
          universities: universities.rows,
          scholarships: scholarships.rows
      });
  } catch (error) {
      res.status(500).json({ error: 'Database error' });
  }
});

