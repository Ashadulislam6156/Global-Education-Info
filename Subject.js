// Subject.js

// DOM Elements
const searchInput = document.getElementById('searchInput');
const subjectsGrid = document.getElementById('subjectsGrid');
const filterCheckboxes = document.querySelectorAll('.filter-option input[type="checkbox"]');
const resetButton = document.querySelector('.filter-reset');
const notification = document.getElementById('notification');

// Sample data for programs (in real application, this would come from a database)
const programs = [
    {
        id: 1,
        title: "Computer Science",
        category: "cs",
        description: "Cutting-edge programs in Artificial Intelligence, Software Engineering, Data Science, and Cybersecurity from top-ranked universities like MIT, Stanford, and ETH Zurich.",
        duration: "3-4 years",
        image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        tags: ["Technology", "Programming", "AI"]
    },
    {
        id: 2,
        title: "Business Administration",
        category: "business",
        description: "Comprehensive degrees in Marketing, Finance, Entrepreneurship, and Management at prestigious institutions including Harvard, LBS, and INSEAD.",
        duration: "1-4 years",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        tags: ["Business", "Management", "Finance"]
    },
    {
        id: 3,
        title: "Engineering",
        category: "engineering",
        description: "Specialized programs in Mechanical, Civil, Electrical, Aerospace, and Biomedical Engineering from world-renowned universities including MIT, Imperial, and TU Munich.",
        duration: "3-5 years",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        tags: ["Engineering", "Technology", "Science"]
    },
    {
        id: 4,
        title: "Medicine & Health Sciences",
        category: "medicine",
        description: "Medical programs including MBBS, Nursing, Dentistry, Public Health, and Biomedical Sciences from globally recognized institutions.",
        duration: "4-6 years",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        tags: ["Health", "Medical", "Science"]
    },
    {
        id: 5,
        title: "Arts & Humanities",
        category: "arts",
        description: "Explore literature, history, philosophy, languages, and fine arts programs from leading global universities with rich cultural heritage.",
        duration: "3-4 years",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        tags: ["Arts", "Humanities", "Culture"]
    },
    {
        id: 6,
        title: "Law & Legal Studies",
        category: "law",
        description: "Comprehensive law degrees including LLB, JD, International Law, and Human Rights Law at prestigious institutions like Oxford, Yale, and Harvard.",
        duration: "3-5 years",
        image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        tags: ["Law", "Legal", "Justice"]
    },
    {
        id: 7,
        title: "Education & Teaching",
        category: "education",
        description: "Innovative programs in Teaching Methods, Curriculum Development, Educational Technology, and Leadership from top universities.",
        duration: "1-4 years",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        tags: ["Education", "Teaching", "Leadership"]
    }
];

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    filterPrograms();
});

// Filter functionality
filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        console.log('Filter changed:', checkbox.value, checkbox.checked); // Debug log
        filterPrograms();
    });
});

// Reset filters
resetButton.addEventListener('click', () => {
    filterCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    searchInput.value = '';
    filterPrograms();
});

// Main filter function
function filterPrograms() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategories = Array.from(filterCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    console.log('Search term:', searchTerm); // Debug log
    console.log('Selected categories:', selectedCategories); // Debug log

    const filteredPrograms = programs.filter(program => {
        // Search in title, description, and tags
        const matchesSearch = 
            program.title.toLowerCase().includes(searchTerm) ||
            program.description.toLowerCase().includes(searchTerm) ||
            program.tags.some(tag => tag.toLowerCase().includes(searchTerm));

        // Check category filter
        const matchesCategory = selectedCategories.length === 0 || 
                              selectedCategories.includes(program.category);

        console.log('Program:', program.title, 'Matches search:', matchesSearch, 'Matches category:', matchesCategory); // Debug log

        return matchesSearch && matchesCategory;
    });

    displayPrograms(filteredPrograms);
}

// Display programs in the grid
function displayPrograms(programs) {
    subjectsGrid.innerHTML = '';

    if (programs.length === 0) {
        showNotification('No programs found matching your criteria');
        return;
    }

    programs.forEach(program => {
        const programCard = createProgramCard(program);
        subjectsGrid.appendChild(programCard);
    });
}

// Create program card element
function createProgramCard(program) {
    const card = document.createElement('div');
    card.className = 'Sub-Programe-card';
    card.setAttribute('data-category', program.category);

    card.innerHTML = `
        <div class="Sub-Programe-card-img">
            <img src="${program.image}" alt="${program.title}">
            <span class="Sub-Programe-category-tag">${program.tags[0]}</span>
        </div>
        <div class="Sub-Programe-card-content">
            <h3>${program.title}</h3>
            <p>${program.description}</p>
            <div class="Sub-Programe-card-footer">
                <span class="Sub-Programe-duration"><i class="far fa-clock"></i> ${program.duration}</span>
                <button class="Sub-Programe-view-btn" onclick="viewProgramDetails(${program.id})">View Programs</button>
            </div>
        </div>
    `;

    return card;
}

// View program details
function viewProgramDetails(programId) {
    const program = programs.find(p => p.id === programId);
    if (program) {
        // Create a modal to show program details
        const modal = document.createElement('div');
        modal.className = 'program-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h2>${program.title}</h2>
                <img src="${program.image}" alt="${program.title}">
                <p>${program.description}</p>
                <div class="program-info">
                    <p><strong>Duration:</strong> ${program.duration}</p>
                    <p><strong>Category:</strong> ${program.tags.join(', ')}</p>
                </div>
                <button class="apply-btn">Apply Now</button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close modal functionality
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.onclick = () => {
            modal.remove();
        };
        
        // Close modal when clicking outside
        window.onclick = (event) => {
            if (event.target === modal) {
                modal.remove();
            }
        };
    }
}

// Show notification
function showNotification(message) {
    notification.textContent = message;
    notification.style.display = 'block';
    notification.style.opacity = '1';
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 300);
    }, 3000);
}

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Make sure all DOM elements are loaded
    if (searchInput && subjectsGrid && filterCheckboxes && resetButton && notification) {
        console.log('All DOM elements loaded successfully'); // Debug log
        displayPrograms(programs);
    } else {
        console.error('Some required DOM elements are missing');
    }
});
}