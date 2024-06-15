import * as html from './Templates.js';

function addParticipant(count) {

  if (window.innerWidth > 600 && count > 1) {
    document.querySelector("fieldset").classList.add("columns");
  }

  const newSection = html.participantSection(count);
  document
    .querySelector("#flex-basis-container")
    .insertAdjacentHTML("beforebegin", newSection);

  count++;
  return count;
}

const form = document.querySelector("form");
let participantCount = 1;

document.addEventListener("DOMContentLoaded", () => {
  participantCount = addParticipant(participantCount)
});

form.querySelector("#add").addEventListener("click", () => {
  participantCount = addParticipant(participantCount);
});


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const summary = {};
  summary.submitter = document.querySelector("#adult_name").value;
  summary.participants = participantCount - 1;
  summary.s = summary.participants > 1 ? "s" : "";
  summary.fees = Array.from(document.querySelectorAll("[id^=fee]"))  
    .map(element => parseFloat(element.value))
    .reduce((subtotal, fee) => subtotal + fee, 0.);

  form.style.display = "none";
  document
    .querySelector("#summary")
    .innerHTML = html.submissionSummary(summary);
})