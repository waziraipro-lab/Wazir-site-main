/* ==========================================================================
   NAVIGATION & GLOBAL ACTIONS
   ========================================================================== */
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  highlightNav();
});

// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
  });
}

// Close mobile nav on click of link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navMenu.classList.remove('open');
  });
});

// Active Link Highlight on Scroll
function highlightNav() {
  const sections = document.querySelectorAll('section, main');
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

/* ==========================================================================
   INTERACTIVE HUB TAB ROUTING
   ========================================================================== */
function switchHubTab(event, tabId) {
  // Remove active from all tabs
  const tabBtns = document.querySelectorAll('.hub-tab-btn');
  tabBtns.forEach(btn => btn.classList.remove('active'));

  // Add active to current tab
  event.currentTarget.classList.add('active');

  // Hide all content panes
  const panes = document.querySelectorAll('.hub-content-pane');
  panes.forEach(pane => pane.classList.remove('active'));

  // Show selected pane
  document.getElementById(tabId).classList.add('active');
}

// Casebook PDF Download Simulation
function simulateDownload() {
  const btn = event.currentTarget;
  const originalText = btn.innerHTML;
  btn.disabled = true;
  btn.innerHTML = `
    <svg style="width:18px; height:18px; fill:currentColor; animation: spin 1s linear infinite;" viewBox="0 0 24 24">
      <path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"/>
    </svg> Preparing Casebook 3.0...`;
  
  // Custom spin style insertion if not present
  if (!document.getElementById('spin-style')) {
    const style = document.createElement('style');
    style.id = 'spin-style';
    style.textContent = '@keyframes spin { 100% { transform: rotate(360deg); } }';
    document.head.appendChild(style);
  }

  setTimeout(() => {
    btn.innerHTML = `✓ Download Complete`;
    btn.style.background = 'rgb(74, 222, 128)';
    btn.style.color = '#030a16';
    
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = originalText;
      btn.style.background = '';
      btn.style.color = '';
      alert('Casebook 3.0 Download Initiated! In a production deployment, this link would fetch the latest Wazir IIM Rohtak Casebook PDF.');
    }, 2000);
  }, 1800);
}

/* ==========================================================================
   THE HOUSE OF WAZIR - COLOSSEUM INSPECTOR LOGIC
   ========================================================================== */
const verticalsData = {
  'casebook': {
    title: 'Casebook Vertical',
    subtitle: "Every great strategy starts with a question. A casebook just hands you the right ones to ask!",
    desc: "Our annual Consulting Casebook is the Bible of preparation at IIM Rohtak. Compiled and reviewed by alumni working in consulting roles, it connects students to an in-house consulting network.",
    bullets: [
      { title: "50+ Cases", text: "Curated real interview cases cracked at top strategy firms." },
      { title: "30+ Guesstimates & 40+ Frameworks", text: "Step-by-step methodologies and mathematical trees." },
      { title: "20+ Industry Overviews", text: "Deep briefings covering key sectors and value chains." },
      { title: "800+ Alumni Network", text: "Connecting the batch with seniors in top global practices." }
    ]
  },
  'clinic': {
    title: 'APEX - The Consulting Clinic',
    subtitle: "You don't learn strategy from slides — you learn it by solving problems.",
    desc: "Our apex pro-bono consulting practice. We connect student teams with small-and-medium enterprises (SMEs) and government departments to deliver actionable strategic roadmaps.",
    bullets: [
      { title: "Client Sourcing & Audit", text: "Identify high-potential SMEs and govt. bodies and assess business models." },
      { title: "In-Depth Diagnosis", text: "Conduct business analysis through site visits, interviews, and audits." },
      { title: "Expert Collaborations", text: "Partner with industry leaders to formulate tactical GTM and growth plans." },
      { title: "Impact & Execution Tracking", text: "Monitor implementation steps and record tangible client improvements." }
    ]
  },
  'editorial': {
    title: 'Editorial Vertical',
    subtitle: "Knowledge has to be improved, challenged, and increased constantly.",
    desc: "Structuring campus intelligence. We don't believe in just publishing editorials; we strive to make them a part of our culture, sharpening placement readiness.",
    bullets: [
      { title: "Guesstimate Guruwaar", text: "Weekly editorial driving calculations culture, with 60+ GGs published." },
      { title: "The Monthly Muse", text: "Monthly case interview journal covering mock transcripts, with 25+ MMs." },
      { title: "Industry Overview", text: "Fortnightly reports detailing macro trends across sectors, with 20+ IOs." },
      { title: "Limited Editions Insights", text: "Fast-reads like Strat Square, Strategy Insights, and Strategy Mutations." }
    ]
  },
  'events': {
    title: 'Events Vertical',
    subtitle: "Events aren't games of chance — they're games of choice. Think like a Wazir.",
    desc: "Managing national case challenges and strategy hackathons. We partner with top hosting platforms to drive massive student engagement and corporate visibility.",
    bullets: [
      { title: "Consultant of the Year (COTY)", text: "Our flagship intra-college crucible, with 8 editions conducted." },
      { title: "Legacy Events", text: "Director's Roundtable 2.0, The Consulting Carousel, and Impostors Gambit." },
      { title: "Passion Events", text: "Cinematic Seconds, Product Playground, Stratlyst, and Prodthink Quest." },
      { title: "Scale & Outreach", text: "1M+ impressions, 24,000+ registrations, and 100+ national level competitions." }
    ]
  },
  'relations': {
    title: 'External Relations Vertical',
    subtitle: "Success in strategy lies in doing and connecting.",
    desc: "We forge impactful collaborations and real-world experiences, gathering live projects and boutique knowledge sessions for the batch.",
    bullets: [
      { title: "Live Projects Sourcing", text: "Securing exclusive internships and project runs for Wazir and batch coordinates." },
      { title: "9K Average Stipend", text: "Delivering value-added internships with tangible student compensation." },
      { title: "Knowledge Sessions", text: "Inviting full-time consultants from top boutiques and management firms." },
      { title: "Campus Connect", text: "Facilitating inter-IIM and IIT knowledge exchanges and joint workshops." }
    ]
  },
  'pr': {
    title: 'Public Relations Vertical',
    subtitle: "Visibility is strategy. If the world doesn't see you, you don't exist.",
    desc: "The PR vertical is the 'Mother of Verticals' — the connective tissue that amplifies every initiative across Wazir. From LinkedIn thought-leadership to Instagram engagement, we craft narratives that position Wazir as a national consulting brand.",
    bullets: [
      { title: "Social Media Strategy", text: "End-to-end content calendar management across LinkedIn, Instagram, and campus channels with 1M+ cumulative impressions." },
      { title: "Brand Identity & Design", text: "Crafting a cohesive visual identity — from event posters and casebook covers to digital templates and merchandise." },
      { title: "Content & Storytelling", text: "Long-form posts, reels, carousels, and behind-the-scenes narratives that humanize the club and drive engagement." },
      { title: "Media & Outreach", text: "Coordinating press coverage, alumni spotlights, and cross-club collaborations to amplify Wazir's visibility nationally." }
    ]
  }
};

function inspectVertical(id) {
  const data = verticalsData[id];
  if (!data) return;

  // Highlight selected pillar
  const pillars = document.querySelectorAll('.temple-pillar');
  pillars.forEach(p => p.classList.remove('active'));

  // Find the clicked pillar element
  // Since inspectVertical is called inline, we can find the pillar based on index or onclick match
  const clickedPillar = Array.from(pillars).find(p => p.getAttribute('onclick').includes(id));
  if (clickedPillar) clickedPillar.classList.add('active');

  const panel = document.getElementById('vertical-detail-panel');
  
  // Format bullets HTML
  let bulletsHtml = '';
  data.bullets.forEach(b => {
    bulletsHtml += `
      <div class="v-bullet-item">
        <div class="v-bullet-icon">✓</div>
        <div class="v-bullet-text">
          <h4>${b.title}</h4>
          <p>${b.text}</p>
        </div>
      </div>
    `;
  });

  panel.innerHTML = `
    <div class="glass-card vertical-detail-card" style="animation: fadeIn 0.4s ease forwards;">
      <div class="vertical-detail-header">
        <h3>${data.title}</h3>
        <span>Operations</span>
      </div>
      <h4 style="font-weight:400; color:var(--text-secondary); font-size:1rem; margin-bottom:1rem; font-style:italic;">"${data.subtitle}"</h4>
      <p class="vertical-detail-desc">${data.desc}</p>
      <div class="vertical-detail-bullets-grid">
        ${bulletsHtml}
      </div>
    </div>
  `;
}


/* ==========================================================================
   FRAMEWORKS POPUPS / MODALS
   ========================================================================== */
const frameworksData = {
  'profit-tree': {
    title: 'Profitability Framework',
    subtitle: 'Base diagnostic tree for identifying business performance decay',
    desc: 'The profitability framework is the cornerstone of case preparation. It utilizes a MECE (Mutually Exclusive, Collectively Exhaustive) structure to divide a business\'s profits into revenue and cost metrics to pinpoint why a business is losing money.',
    structure: `
      <div style="margin-top: 1.5rem;">
        <h4 style="color:var(--brand-accent); margin-bottom:0.75rem;">Structure breakdown:</h4>
        <div style="background:rgba(0,0,0,0.25); padding:1rem; border-radius:8px; font-family:var(--font-header); font-size:0.9rem; border:1px solid var(--border-color);">
          <strong>Profit</strong> = Revenue - Cost<br>
          &nbsp;&nbsp;↳ <strong>Revenue</strong> = Volume × Price<br>
          &nbsp;&nbsp;↳ <strong>Cost</strong> = Fixed Costs + Variable Costs (Volume × Unit Cost)
        </div>
        <h4 style="color:var(--brand-accent); margin-top:1.5rem; margin-bottom:0.5rem;">When to apply:</h4>
        <p style="font-size:0.9rem;">Apply this whenever a business reports declining profitability, stagnant margins, or when you need to audit operational cost segments before launching a new venture.</p>
      </div>
    `
  },
  'bcg-matrix': {
    title: 'Growth-Share Matrix (BCG)',
    subtitle: 'Strategic product portfolio classification tool',
    desc: 'Developed by Boston Consulting Group, this model plots business units or products along two axes: Market Growth Rate (vertical) and Relative Market Share (horizontal) to guide investment strategies.',
    structure: `
      <div style="margin-top: 1.5rem;">
        <h4 style="color:var(--brand-accent); margin-bottom:0.75rem;">Portfolio Quadrants:</h4>
        <table style="width:100%; border-collapse:collapse; font-size:0.85rem; border:1px solid var(--border-color); text-align:left;">
          <tr style="background:rgba(255,255,255,0.03); border-bottom:1px solid var(--border-color);">
            <th style="padding:0.75rem;">Quadrant</th>
            <th style="padding:0.75rem;">Attributes</th>
            <th style="padding:0.75rem;">Recommended Action</th>
          </tr>
          <tr style="border-bottom:1px solid var(--border-color);">
            <td style="padding:0.75rem; font-weight:600; color:var(--text-accent);">Stars</td>
            <td style="padding:0.75rem;">High Growth, High Share</td>
            <td style="padding:0.75rem;">Invest to sustain growth.</td>
          </tr>
          <tr style="border-bottom:1px solid var(--border-color);">
            <td style="padding:0.75rem; font-weight:600; color:var(--brand-accent);">Question Marks</td>
            <td style="padding:0.75rem;">High Growth, Low Share</td>
            <td style="padding:0.75rem;">Evaluate: scale up or divest.</td>
          </tr>
          <tr style="border-bottom:1px solid var(--border-color);">
            <td style="padding:0.75rem; font-weight:600; color:var(--text-secondary);">Cash Cows</td>
            <td style="padding:0.75rem;">Low Growth, High Share</td>
            <td style="padding:0.75rem;">Harvest cash flows to fund Stars.</td>
          </tr>
          <tr>
            <td style="padding:0.75rem; font-weight:600; color:var(--text-muted);">Dogs</td>
            <td style="padding:0.75rem;">Low Growth, Low Share</td>
            <td style="padding:0.75rem;">Divest or restructure.</td>
          </tr>
        </table>
      </div>
    `
  },
  'market-entry': {
    title: 'Market Entry Framework',
    subtitle: 'Strategic roadmap for expansion feasibility',
    desc: 'A comprehensive entry framework maps qualitative and quantitative factors to evaluate if a client should expand into a new geography, product segment, or vertical.',
    structure: `
      <div style="margin-top: 1.5rem;">
        <h4 style="color:var(--brand-accent); margin-bottom:0.75rem;">Four Core Pillars of Analysis:</h4>
        <ol style="padding-left:1.25rem; font-size:0.9rem; display:flex; flex-direction:column; gap:0.5rem;">
          <li><strong>Market Attractiveness:</strong> Evaluate total addressable market (TAM), compound growth rate (CAGR), competitors, and entry barriers.</li>
          <li><strong>Financial Viability:</strong> Estimate initial capital expenditure (CAPEX), operating costs (OPEX), projected revenues, NPV, and payback periods.</li>
          <li><strong>Operational Feasibility:</strong> Assess supply chain, regulatory landscape, distribution channels, and talent acquisition.</li>
          <li><strong>Strategic Fit:</strong> Examine synergy with parent business, impact on current brand equity, and joint venture/acquisition routes.</li>
        </ol>
      </div>
    `
  }
};

const modal = document.getElementById('framework-modal');
const modalContent = document.getElementById('modal-content-area');

function showFrameworkModal(id) {
  const data = frameworksData[id];
  if (!data) return;

  modalContent.innerHTML = `
    <h3 class="text-gradient" style="font-size:1.8rem; margin-bottom:0.25rem;">${data.title}</h3>
    <h4 style="font-weight:400; color:var(--text-secondary); font-size:0.95rem; margin-bottom:1.5rem;">${data.subtitle}</h4>
    <p style="font-size:0.95rem; line-height:1.6;">${data.desc}</p>
    ${data.structure}
    <div style="margin-top:2.5rem; display:flex; justify-content:flex-end;">
      <button class="btn btn-secondary" onclick="closeFrameworkModal()">Close</button>
    </div>
  `;
  modal.style.display = 'flex';
}

function closeFrameworkModal() {
  modal.style.display = 'none';
}

// Click outside to close modal
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeFrameworkModal();
  }
});


/* ==========================================================================
   GUESSTIMATE SIMULATOR GAME MACHINERY
   ========================================================================== */
let simState = {
  currentStep: 1,
  answers: {
    step1: null,
    step2: null,
    step3: null
  },
  stepValidity: {
    step1: false,
    step2: false,
    step3: false
  }
};

// UI DOM References
const simBtnBack = document.getElementById('sim-btn-back');
const simBtnNext = document.getElementById('sim-btn-next');
const calcResultField = document.getElementById('calc-result');
const calcFreqField = document.getElementById('calc-freq');
const calcCapacityField = document.getElementById('calc-capacity');

// Handle choice selection in Step 1 and Step 2
function selectChoice(button, stepNum, status, feedbackText) {
  const choicesGrid = button.parentElement;
  const siblingBtns = choicesGrid.querySelectorAll('.sim-choice-btn');
  
  siblingBtns.forEach(btn => {
    btn.classList.remove('selected', 'correct', 'incorrect');
  });

  // Apply statuses classes
  button.classList.add('selected');
  
  // Show feedback container
  const feedbackBox = document.getElementById(`sim-feedback-${stepNum}`);
  feedbackBox.className = `sim-feedback-box ${status}`;
  feedbackBox.innerHTML = `<strong>${status.toUpperCase()}:</strong> ${feedbackText}`;

  // Log to state
  simState.answers[`step${stepNum}`] = status === 'correct';
  
  if (status === 'correct') {
    button.classList.add('correct');
    simState.stepValidity[`step${stepNum}`] = true;
    simBtnNext.disabled = false;
  } else {
    button.classList.add('incorrect');
    simState.stepValidity[`step${stepNum}`] = false;
    simBtnNext.disabled = true; // Block progression on wrong choices to force learning
  }
}

// Watch calculator input on Step 3
if (calcResultField) {
  calcResultField.addEventListener('input', () => {
    const val = parseInt(calcResultField.value);
    const feedbackBox = document.getElementById('sim-feedback-3');
    
    const evs = 60000;
    const freq = parseInt(calcFreqField.value) || 0;
    const cap = parseInt(calcCapacityField.value) || 1;
    const expectedValue = Math.round((evs * freq) / cap);

    if (val === expectedValue) {
      feedbackBox.className = 'sim-feedback-box correct';
      feedbackBox.innerHTML = `<strong>CORRECT:</strong> Math verified! 60,000 EVs × ${freq} charges / ${cap} capacity = ${expectedValue} public stations needed.`;
      simState.stepValidity.step3 = true;
      simBtnNext.disabled = false;
      simState.answers.step3 = true;
    } else {
      feedbackBox.className = 'sim-feedback-box incorrect';
      feedbackBox.innerHTML = `<strong>INCORRECT:</strong> Value mismatch. Formula is: (60,000 × ${freq}) ÷ ${cap} = ?`;
      simState.stepValidity.step3 = false;
      simBtnNext.disabled = true;
      simState.answers.step3 = false;
    }
  });
}

function updateSimUI() {
  // Hide all step content
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`sim-step-${i}`).classList.remove('active');
    document.getElementById(`sim-step-${i}-indicator`).classList.remove('active', 'completed');
  }

  // Show active step
  document.getElementById(`sim-step-${simState.currentStep}`).classList.add('active');
  
  // Highlight indicators
  for (let i = 1; i < simState.currentStep; i++) {
    document.getElementById(`sim-step-${i}-indicator`).classList.add('completed');
  }
  document.getElementById(`sim-step-${simState.currentStep}-indicator`).classList.add('active');

  // Disable back on step 1
  simBtnBack.disabled = simState.currentStep === 1;

  // Manage Next button state/label
  if (simState.currentStep === 4) {
    simBtnNext.innerHTML = 'Restart';
    simBtnNext.disabled = false;
    simBtnBack.style.display = 'none';
    
    // Calculate Score Summary
    const correctCount = Object.values(simState.answers).filter(val => val === true).length;
    const percentage = Math.round((correctCount / 3) * 100);
    document.getElementById('sim-final-score').innerHTML = `${percentage}%`;
  } else {
    simBtnNext.innerHTML = 'Next Step';
    simBtnBack.style.display = 'inline-flex';
    simBtnNext.disabled = !simState.stepValidity[`step${simState.currentStep}`];
  }
}

function nextSimStep() {
  if (simState.currentStep === 4) {
    // Restart logic
    simState = {
      currentStep: 1,
      answers: { step1: null, step2: null, step3: null },
      stepValidity: { step1: false, step2: false, step3: false }
    };
    // Clear inputs & feedback
    calcResultField.value = '';
    document.querySelectorAll('.sim-choice-btn').forEach(btn => btn.className = 'sim-choice-btn');
    document.querySelectorAll('.sim-feedback-box').forEach(box => {
      box.style.display = 'none';
      box.className = 'sim-feedback-box';
    });
    updateSimUI();
    return;
  }

  if (simState.stepValidity[`step${simState.currentStep}`]) {
    simState.currentStep++;
    updateSimUI();
  }
}

function prevSimStep() {
  if (simState.currentStep > 1) {
    simState.currentStep--;
    updateSimUI();
  }
}


/* ==========================================================================
   CLIENT CLINIC INTAKE FORM HANDLING
   ========================================================================== */
const intakeForm = document.getElementById('clinic-intake-form');
const successOverlay = document.getElementById('form-success');

function handleFormSubmit(event) {
  event.preventDefault();
  const submitBtn = intakeForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  
  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <svg style="width:16px; height:16px; fill:currentColor; animation: spin 1s linear infinite; margin-right:0.5rem;" viewBox="0 0 24 24">
      <path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"/>
    </svg> Submitting Brief...`;

  setTimeout(() => {
    successOverlay.classList.add('active');
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
  }, 1200);
}

function resetForm() {
  intakeForm.reset();
  successOverlay.classList.remove('active');
}

// Initial UI triggers
document.addEventListener('DOMContentLoaded', () => {
  highlightNav();
  updateSimUI();
  // Open the Casebook vertical details by default in the temple inspector
  inspectVertical('casebook');
});
