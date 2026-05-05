const guests = {
  "kay-jeff-kelly": {
    displayName: "Kay & Jeff Kelly",
    allowedGuests: 2,
    invitedGuests: ["Kay Kelly", "Jeff Kelly"]
  },

  "nicole-yeager": {
    displayName: "Nicole Yeager",
    allowedGuests: 1,
    invitedGuests: ["Nicole Yeager"]
  },

  "stephen-yeager": {
    displayName: "Stephen Yeager",
    allowedGuests: 1,
    invitedGuests: ["Stephen Yeager"]
  },

  "david-yeager": {
    displayName: "David Yeager",
    allowedGuests: 1,
    invitedGuests: ["David Yeager"]
  },

  "austin-ashley-kelly": {
    displayName: "Austin & Ashley Kelly",
    allowedGuests: 2,
    invitedGuests: ["Austin Kelly", "Ashley Kelly"]
  },

  "josh-abby-kelly": {
    displayName: "Josh & Abby Kelly",
    allowedGuests: 2,
    invitedGuests: ["Josh Kelly", "Abby Kelly"]
  },

  "will-and-steph-kelly": {
    displayName: "William & Stephanie Kelly",
    allowedGuests: 2,
    invitedGuests: ["William Kelly", "Stephanie Kelly"]
  },

  "patricia-and-omar-badin": {
    displayName: "Patricia & Omar Badin",
    allowedGuests: 2,
    invitedGuests: ["Patricia Badin", "Omar Badin"]
  },
  "samantha-and-andrei-szabo": {
    displayName: "Samantha & Andrei Szabo",
    allowedGuests: 2,
    invitedGuests: ["Samantha Szabo", "Andrei Szabo"]
  },
  "omar-badin": {
    displayName: "Omar Badin Arenas",
    allowedGuests: 1,
    invitedGuests: ["Omar Badin Arenas"]
  },
  
};

const params = new URLSearchParams(window.location.search);
const guestKey = params.get("guest");

let currentGuest = guests[guestKey] || {
  displayName: "Beautiful Guest",
  allowedGuests: 1,
  invitedGuests: ["Beautiful Guest"]
};

const envelopeScreen = document.getElementById("envelopeScreen");
const invitationPage = document.getElementById("invitationPage");
const openEnvelope = document.getElementById("openEnvelope");

const guestPreview = document.getElementById("guestPreview");
const guestName = document.getElementById("guestName");
const guestLimitText = document.getElementById("guestLimitText");
const nameInput = document.getElementById("nameInput");

const attendance = document.getElementById("attendance");
const yesOptions = document.getElementById("yesOptions");
const meal = document.getElementById("meal");
const guestCount = document.getElementById("guestCount");
const rsvpForm = document.getElementById("rsvpForm");

guestPreview.textContent = `${currentGuest.displayName}`;
guestName.textContent = currentGuest.displayName;
nameInput.value = currentGuest.displayName;

guestLimitText.textContent =
  `We have reserved ${currentGuest.allowedGuests} seat${currentGuest.allowedGuests > 1 ? "s" : ""} in your honor.`;

function buildGuestCountOptions() {
  guestCount.innerHTML = "";

  for (let i = 1; i <= currentGuest.allowedGuests; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `${i} guest${i > 1 ? "s" : ""}`;
    guestCount.appendChild(option);
  }

  guestCount.value = currentGuest.allowedGuests;
}

buildGuestCountOptions();

openEnvelope.addEventListener("click", () => {
  envelopeScreen.classList.add("hidden");
  invitationPage.classList.remove("hidden");
  window.scrollTo(0, 0);
});

attendance.addEventListener("change", () => {
  if (attendance.value === "Yes") {
    yesOptions.classList.remove("hidden");

    if (meal) {
      meal.required = false;
      meal.closest("label")?.classList.add("hidden");
      meal.classList.add("hidden");
    }

    buildInvitedGuestFields();
  } else {
    yesOptions.classList.add("hidden");

    if (meal) {
      meal.required = false;
      meal.value = "";
    }

    clearInvitedGuestFields();
  }
});

guestCount.addEventListener("change", () => {
  buildInvitedGuestFields();
});

function clearInvitedGuestFields() {
  const extraGuestsBox = document.getElementById("extraGuestsBox");
  if (extraGuestsBox) {
    extraGuestsBox.innerHTML = "";
  }
}

function buildInvitedGuestFields() {
  const extraGuestsBox = document.getElementById("extraGuestsBox");
  if (!extraGuestsBox) return;

  extraGuestsBox.innerHTML = "";

  const totalGuestsSelected = Number(guestCount.value);

  const title = document.createElement("p");
  title.className = "extra-guest-title";
  title.textContent = "Please confirm each guest name and meal choice:";
  extraGuestsBox.appendChild(title);

  for (let i = 0; i < totalGuestsSelected; i++) {
    const guestRealName = currentGuest.invitedGuests[i] || "";

    const guestWrapper = document.createElement("div");
    guestWrapper.className = "guest-meal-box";

    const labelName = document.createElement("label");
    labelName.textContent = `Guest ${i + 1} Name`;

    const input = document.createElement("input");
    input.type = "text";
    input.className = "invitedGuestName";
    input.name = `guest${i + 1}Name`;
    input.placeholder = `Guest ${i + 1} full name`;
    input.value = guestRealName;
    input.required = true;

    const labelMeal = document.createElement("label");
    labelMeal.textContent = `${guestRealName || `Guest ${i + 1}`} Meal`;

    const select = document.createElement("select");
    select.className = "invitedGuestMeal";
    select.name = `guest${i + 1}Meal`;
    select.required = true;

    select.innerHTML = `
      <option value="">Select meal</option>
      <option value="Carnivore">Carnivore</option>
      <option value="Vegetarian">Vegetarian</option>
    `;

    input.addEventListener("input", () => {
      labelMeal.textContent = `${input.value.trim() || `Guest ${i + 1}`} Meal`;
    });

    guestWrapper.appendChild(labelName);
    guestWrapper.appendChild(input);
    guestWrapper.appendChild(labelMeal);
    guestWrapper.appendChild(select);

    extraGuestsBox.appendChild(guestWrapper);
  }
}

rsvpForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const attending = attendance.value;
  const selectedGuestCount = attending === "Yes" ? guestCount.value : "0";
  const notes = document.getElementById("notes") ? document.getElementById("notes").value : "";

  if (!attending) {
    alert("Please select if you will attend.");
    return;
  }

  let invitedGuestsInfo = [];

  if (attending === "Yes") {
    const invitedGuestNames = document.querySelectorAll(".invitedGuestName");
    const invitedGuestMeals = document.querySelectorAll(".invitedGuestMeal");

    for (let i = 0; i < invitedGuestNames.length; i++) {
      const guestNameValue = invitedGuestNames[i].value.trim();
      const mealChoice = invitedGuestMeals[i] ? invitedGuestMeals[i].value : "";

      if (!guestNameValue) {
        alert(`Please enter Guest ${i + 1} name.`);
        return;
      }

      if (!mealChoice) {
        alert(`Please select Guest ${i + 1} meal.`);
        return;
      }

      invitedGuestsInfo.push(
        `Guest ${i + 1}: ${guestNameValue} - Meal: ${mealChoice}`
      );
    }
  }

  document.getElementById("guestCodeInput").value = guestKey || "No guest code";
  document.getElementById("mainGuestInput").value = currentGuest.displayName;
  document.getElementById("extraGuestsInput").value =
    invitedGuestsInfo.length > 0 ? invitedGuestsInfo.join(", ") : "Not attending";

  const formData = new FormData(rsvpForm);

  formData.append("guestCode", guestKey || "No guest code");
  formData.append("invitationName", currentGuest.displayName);
  formData.append("attendance", attending);
  formData.append("guestCount", selectedGuestCount);
  formData.append("guestsAndMeals", invitedGuestsInfo.length > 0 ? invitedGuestsInfo.join(", ") : "Not attending");
  formData.append("notes", notes);
  formData.append("submittedAt", new Date().toLocaleString());

  fetch(rsvpForm.action, {
    method: "POST",
    body: formData,
    headers: {
      "Accept": "application/json"
    }
  })
    .then(response => {
      if (response.ok) {
        alert("Thank you! Your RSVP has been saved.");
        rsvpForm.reset();
        nameInput.value = currentGuest.displayName;
        clearInvitedGuestFields();
        yesOptions.classList.add("hidden");
        buildGuestCountOptions();
      } else {
        alert("Something went wrong. Please try again.");
      }
    })
    .catch(error => {
      alert("Something went wrong. Please try again.");
    });
});

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
