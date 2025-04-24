const mockLeads = {
  "fitness coach": [
    "Sarah asking for workout tips on Instagram",
    "Mike looking for a personal trainer on Twitter"
  ],
  "online store": [
    "Jessica posting about finding e-commerce tools on Facebook",
    "Tom searching for Shopify help on Reddit"
  ],
  "web designer": [
    "Client requesting portfolio reviews on LinkedIn",
    "Someone tweeting about needing a new website"
  ]
};

function findCustomers() {
  const input = document.getElementById('niche-input');
  const niche = input.value.trim().toLowerCase();
  const leadsSection = document.getElementById('leads-section');
  const leadsContainer = document.getElementById('leads');

  if (!niche) {
    alert("Please enter a business niche.");
    return;
  }

  leadsSection.style.display = 'block';
  leadsContainer.innerHTML = '';

  const leads = mockLeads[niche];
  if (!leads) {
    leadsContainer.innerHTML = `<p>No leads found for "<strong>${niche}</strong>". Try another niche!</p>`;
    return;
  }

  leads.forEach(lead => {
    const card = document.createElement('div');
    card.innerHTML = `
      <p>${lead}</p>
      <button>Save Lead</button>
      <button>Visit Profile</button>
    `;
    leadsContainer.appendChild(card);
  });
}

function showReferral() {
  document.getElementById('referral-section').style.display = 'block';
  document.getElementById('premium-section').style.display = 'none';
}

function showPremium() {
  document.getElementById('premium-section').style.display = 'block';
  document.getElementById('referral-section').style.display = 'none';
}

function copyReferral() {
  const input = document.querySelector('#referral-section input');
  input.select();
  document.execCommand('copy');
  alert('Referral link copied!');
}

function checkout() {
  alert('Redirecting to Stripe checkout (mock) ...');
}
