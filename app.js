document.addEventListener("DOMContentLoaded", () => {
  const leadsSection = document.getElementById("leads-section");
  const leadsContainer = document.getElementById("leads");
  const referralSection = document.getElementById("referral-section");
  const premiumSection = document.getElementById("premium-section");

  // Utility
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const findCustomers = () => {
    leadsSection.style.display = "block";
    leadsContainer.innerHTML = "";

    const leads = [
      "Sarah, posting about skincare routines on Twitter",
      "Mike, asking for web design help on Reddit",
      "Jessica, looking for a personal trainer on Facebook",
    ];

    leads.forEach((lead) => {
      const card = document.createElement("div");
      card.className = "bg-white p-4 rounded shadow";
      card.innerHTML = `
        <p>${lead}</p>
        <div class="mt-2 space-x-2">
          <button class="text-blue-600 underline">Save Lead</button>
          <button class="text-blue-600 underline">Visit Profile</button>
        </div>`;
      leadsContainer.appendChild(card);
    });
  };

  const showReferral = () => {
    referralSection.style.display = "block";
    premiumSection.style.display = "none";
  };

  const showPremium = () => {
    premiumSection.style.display = "block";
    referralSection.style.display = "none";
  };

  const copyReferral = () => {
    const input = referralSection.querySelector("input");
    input.select();
    document.execCommand("copy");
    alert("Referral link copied!");
  };

  const checkout = () => {
    alert("Redirecting to Stripe checkout (mock)...");
  };

  const showLogin = () => {
    alert("Login functionality coming soon!");
  };

  const showSignup = () => {
    alert("Signup functionality coming soon!");
  };

  // Button Bindings
  document.querySelectorAll("button[data-action]").forEach((btn) => {
    const action = btn.getAttribute("data-action");
    switch (action) {
      case "scroll-pricing":
        btn.addEventListener("click", () => scrollToSection("pricing"));
        break;
      case "login":
        btn.addEventListener("click", showLogin);
        break;
      case "signup":
        btn.addEventListener("click", showSignup);
        break;
      case "find-customers":
        btn.addEventListener("click", findCustomers);
        break;
      case "show-premium":
        btn.addEventListener("click", showPremium);
        break;
      case "show-referral":
        btn.addEventListener("click", showReferral);
        break;
      case "copy-referral":
        btn.addEventListener("click", copyReferral);
        break;
      case "checkout":
        btn.addEventListener("click", checkout);
        break;
    }
  });
});
