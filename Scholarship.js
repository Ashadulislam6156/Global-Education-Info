// স্কলারশিপ ডাটা
const scholarships = [
    {
        id: 1,
        universityName: "Harvard University",
        scholarshipTitle: "Harvard University Scholarship",
        amount: "$50,000 per year",
        deadline: "2025-12-01",
        level: "Undergraduate",
        country: "United States",
        type: "merit",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        universityLogo: "./Images/Harvard_University_logo.svg.png",
        description: "The Harvard Presidential Scholarship is awarded to exceptional students demonstrating outstanding academic achievement and leadership potential. This prestigious scholarship covers tuition, room, and board for four years of undergraduate study at Harvard College."
    },
    {
        id: 2,
        universityName: "University of Oxford",
        scholarshipTitle: "Rhodes Scholarship",
        amount: "Full tuition + £15,000 stipend",
        deadline: "2025-10-15",
        level: "Graduate",
        country: "United Kingdom",
        type: "merit",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        universityLogo: "./Images/university-of-oxford-logo-1.webp",
        description: "The Rhodes Scholarship is one of the oldest and most prestigious international scholarship programs. It covers all university and college fees, a personal stipend, health insurance, and economy class airfare to Oxford."
    },
    {
        id: 3,
        universityName: "ETH Zurich",
        scholarshipTitle: "Excellence Scholarship",
        amount: "CHF 11,000 per semester",
        deadline: "2025-06-15",
        level: "Master's",
        country: "Switzerland",
        type: "merit",
        image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        universityLogo: "./Images/ETH_Zürich_Logo_black.svg.png",
        description: "The ETH Zurich Excellence Scholarship offers excellent students the opportunity to pursue their Master's degree at one of the world's leading universities for science and technology."
    },
    {
        id: 4,
        universityName: "University of Toronto",
        scholarshipTitle: "Lester B. Pearson Scholarship",
        amount: "Full tuition + living expenses",
        deadline: "2025-08-15",
        level: "Undergraduate",
        country: "Canada",
        type: "merit",
        image: "https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        universityLogo: "./Images/Utoronto_coa.svg.png",
        description: "The Lester B. Pearson International Scholarship at the University of Toronto is awarded to exceptional international students who demonstrate outstanding academic achievement and creativity."
    },
    {
        id: 5,
        universityName: "Australian National University",
        scholarshipTitle: "ANU Chancellor's Scholarship",
        amount: "25%-50% tuition fee waiver",
        deadline: "2025-05-15",
        level: "Master's",
        country: "Australia",
        type: "merit",
        image: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        universityLogo: "./Images/australian-national-university.jpg",
        description: "The ANU Chancellor's International Scholarship offers a 25% or 50% tuition fee waiver for the duration of the recipient's program."
    },
    {
        id: 6,
        universityName: "National University of Singapore",
        scholarshipTitle: "NUS Global Merit Scholarship",
        amount: "Full tuition + living allowance",
        deadline: "2025-11-31",
        level: "Undergraduate",
        country: "Singapore",
        type: "merit",
        image: "https://images.unsplash.com/photo-1561501878-aabd62634533?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        universityLogo: "./Images/NUS_logo_full-vertical.jpg",
        description: "The NUS Global Merit Scholarship is awarded to academically outstanding international students applying for undergraduate programmes."
    }
];

// স্কলারশিপ লোড করার ফাংশন
function loadScholarships(filters = {}) {
    const container = document.getElementById('scholarshipsContainer');
    container.innerHTML = ''; // কন্টেইনার খালি করা

    // ফিল্টার করা স্কলারশিপ
    let filteredScholarships = scholarships.filter(scholarship => {
        // দেশ ফিল্টার
        if (filters.country && filters.country !== '') {
            const scholarshipCountry = scholarship.country.toLowerCase();
            const filterCountry = filters.country.toLowerCase();
            if (!scholarshipCountry.includes(filterCountry)) return false;
        }
        
        // লেভেল ফিল্টার
        if (filters.level && filters.level !== '') {
            const scholarshipLevel = scholarship.level.toLowerCase();
            const filterLevel = filters.level.toLowerCase();
            if (!scholarshipLevel.includes(filterLevel)) return false;
        }
        
        // টাইপ ফিল্টার
        if (filters.type && filters.type !== 'all') {
            if (scholarship.type !== filters.type) return false;
        }
        
        // সার্চ ফিল্টার
        if (filters.search && filters.search !== '') {
            const searchTerm = filters.search.toLowerCase();
            const universityName = scholarship.universityName.toLowerCase();
            const scholarshipTitle = scholarship.scholarshipTitle.toLowerCase();
            const country = scholarship.country.toLowerCase();
            
            if (!universityName.includes(searchTerm) && 
                !scholarshipTitle.includes(searchTerm) && 
                !country.includes(searchTerm)) {
                return false;
            }
        }
        
        return true;
    });

    // স্কলারশিপ কার্ড তৈরি করা
    filteredScholarships.forEach((scholarship, index) => {
        const card = `
            <div class="scholarship-card" style="--delay: ${index}">
                <div class="card-image">
                    <img src="${scholarship.image}" alt="${scholarship.universityName}">
                    <div class="university-logo">
                        <img src="${scholarship.universityLogo}" alt="${scholarship.universityName} logo">
                    </div>
                </div>
                <div class="card-content">
                    <p class="university-name">${scholarship.universityName}</p>
                    <h3 class="scholarship-title">${scholarship.scholarshipTitle}</h3>
                    <div class="scholarship-details">
                        <div class="detail-item">
                            <i class="fas fa-money-bill-wave"></i>
                            <span class="amount">${scholarship.amount}</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-calendar-day"></i>
                            <span>Deadline: <span class="deadline">${formatDate(scholarship.deadline)}</span></span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-graduation-cap"></i>
                            <span>Level: ${scholarship.level}</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-globe-asia"></i>
                            <span>Country: ${scholarship.country}</span>
                        </div>
                    </div>
                    <button class="view-btn" onclick="showModal('${scholarship.universityName}', '${scholarship.scholarshipTitle}', '${scholarship.image}', '${scholarship.universityLogo}', '${scholarship.amount}', '${formatDate(scholarship.deadline)}', '${scholarship.level}', '${scholarship.country}', '${scholarship.description}')">
                        <i class="fas fa-info-circle"></i> View Details
                    </button>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });

    // যদি কোন রেজাল্ট না পাওয়া যায়
    if (filteredScholarships.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>No scholarships found</h3>
                <p>Try adjusting your search criteria</p>
            </div>
        `;
    }

    // পেজিনেশন আপডেট করা
    updatePagination(filteredScholarships.length);
}

// তারিখ ফরম্যাট করার ফাংশন
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// মোডাল দেখানোর ফাংশন
function showModal(universityName, scholarshipTitle, image, logo, amount, deadline, level, country, description) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <div class="modal-header">
                <img src="${logo}" alt="${universityName} logo" class="modal-logo">
                <h2>${scholarshipTitle}</h2>
            </div>
            <div class="modal-body">
                <img src="${image}" alt="${universityName}" class="modal-image">
                <div class="modal-details">
                    <p><strong>University:</strong> ${universityName}</p>
                    <p><strong>Amount:</strong> ${amount}</p>
                    <p><strong>Deadline:</strong> ${deadline}</p>
                    <p><strong>Level:</strong> ${level}</p>
                    <p><strong>Country:</strong> ${country}</p>
                    <p><strong>Description:</strong> ${description}</p>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// পেজিনেশন আপডেট করার ফাংশন
function updatePagination(totalItems) {
    const itemsPerPage = 6;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const paginationContainer = document.querySelector('.Scholarship-pagination');
    
    let paginationHTML = `
        <button class="Scholarship-page-btn" onclick="changePage('prev')"><i class="fas fa-chevron-left"></i></button>
    `;
    
    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `
            <button class="Scholarship-page-btn ${i === 1 ? 'active' : ''}" onclick="changePage(${i})">${i}</button>
        `;
    }
    
    paginationHTML += `
        <button class="Scholarship-page-btn" onclick="changePage('next')"><i class="fas fa-chevron-right"></i></button>
    `;
    
    paginationContainer.innerHTML = paginationHTML;
}

// পেজ পরিবর্তন করার ফাংশন
function changePage(page) {
    const currentPage = document.querySelector('.Scholarship-page-btn.active');
    const totalPages = document.querySelectorAll('.Scholarship-page-btn').length - 2; // -2 for prev/next buttons
    
    let newPage;
    if (page === 'prev') {
        newPage = parseInt(currentPage.textContent) - 1;
    } else if (page === 'next') {
        newPage = parseInt(currentPage.textContent) + 1;
    } else {
        newPage = page;
    }
    
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage.classList.remove('active');
        document.querySelectorAll('.Scholarship-page-btn')[newPage].classList.add('active');
        // এখানে পেজিনেশন লজিক যোগ করুন
    }
}

// ফিল্টার এবং সার্চ ফাংশন
function applyFilters() {
    const country = document.getElementById('countryFilter').value;
    const level = document.getElementById('levelFilter').value;
    const search = document.getElementById('searchInput').value;
    const activeChip = document.querySelector('.chip.active');
    const type = activeChip ? activeChip.dataset.type : 'all';

    console.log('Filters:', { country, level, type, search }); // ডিবাগিং এর জন্য

    loadScholarships({ country, level, type, search });
}

// ইভেন্ট লিসেনার যোগ করা
document.addEventListener('DOMContentLoaded', () => {
    // সার্চ বাটন
    document.getElementById('searchButton').addEventListener('click', applyFilters);
    
    // দেশ ফিল্টার
    document.getElementById('countryFilter').addEventListener('change', applyFilters);
    
    // লেভেল ফিল্টার
    document.getElementById('levelFilter').addEventListener('change', applyFilters);
    
    // সার্চ ইনপুট
    document.getElementById('searchInput').addEventListener('input', applyFilters);
    
    // ফিল্টার চিপস
    document.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            applyFilters();
        });
    });

    // প্রথম লোড
    loadScholarships();
});
