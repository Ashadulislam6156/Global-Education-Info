// Modal
var modal = document.getElementById("compareModal");
var btn = document.getElementById("compareBtn");
var span = document.getElementById("closeModalBtn");

// Open modal when Compare button is clicked
btn.onclick = function() {
  modal.style.display = "block";
}

// Close modal when the "X" button is clicked
span.onclick = function() {
  modal.style.display = "none";
}

// Close modal if clicked outside of the modal content
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Handle country comparison
document.getElementById("showComparison").onclick = function() {
  var country1 = document.getElementById("country1").value;
  var country2 = document.getElementById("country2").value;
  var tableContent = `
    <table>
      <thead>
        <tr>
          <th>Country</th>
          <th>Visa</th>
          <th>Tuition Fees</th>
          <th>Living Cost</th>
          <th>Part-time Jobs</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${country1}</td>
          <td>Visa info for ${country1}</td>
          <td>Tuition info for ${country1}</td>
          <td>Living cost for ${country1}</td>
          <td>Part-time jobs for ${country1}</td>
        </tr>
        <tr>
          <td>${country2}</td>
          <td>Visa info for ${country2}</td>
          <td>Tuition info for ${country2}</td>
          <td>Living cost for ${country2}</td>
          <td>Part-time jobs for ${country2}</td>
        </tr>
      </tbody>
    </table>
  `;
  document.getElementById("comparisonTable").innerHTML = tableContent;
}



  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

