/* ==========================================================================
   JS MASTERY CORE - PREVIEWER & RENDERING ENGINE (previewer.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  let activeSlideIndex = 0;
  
  const container = document.getElementById('slides-container');
  const sidebarList = document.getElementById('slide-nav-list');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnPrint = document.getElementById('btn-print');
  const toggleGrid = document.getElementById('toggle-grid');
  const safetyOverlay = document.getElementById('safety-overlay');
  
  // Initialize presentation
  function init() {
    renderSlides();
    renderSidebar();
    updateSlideViewState();
    setupEventListeners();
    
    // Scale previewer on load and resize
    setTimeout(resizePreview, 50);
    window.addEventListener('resize', resizePreview);
  }

  // Render slides dynamically inside workspace
  function renderSlides() {
    container.innerHTML = '';
    
    slideData.forEach((slide, index) => {
      const page = document.createElement('section');
      page.className = `slide-page ${index === activeSlideIndex ? 'active-slide' : ''}`;
      page.id = `slide-${slide.id}`;
      
      // Header Component
      const header = document.createElement('div');
      header.className = 'slide-header';
      header.innerHTML = `
        <span class="series-badge">${slide.series}</span>
        <span class="brand-header">
          <svg height="14" width="14" viewBox="0 0 16 16" fill="currentColor" style="display: inline-block; vertical-align: middle; margin-right: 6px; fill: var(--text-muted);"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
          TheShivaji
        </span>
      `;
      page.appendChild(header);

      // Main Context Component
      const main = document.createElement('div');
      main.className = 'slide-main';
      
      // Generate components based on slide type
      switch (slide.type) {
        case 'cover':
          main.innerHTML = `
            <div class="decorator-brackets left">{</div>
            <div class="decorator-brackets right">}</div>
            <div class="decorator-coordinates top-left">LAT: 51.5074° N, LON: 0.1278° W</div>
            <div class="decorator-coordinates bottom-right">SCALE: 1:080x1350</div>
            <h1 class="hero-title">${slide.title}</h1>
            <p class="subtitle" style="margin-bottom: 24px;">${slide.subtitle}</p>
            <div class="cover-mockup">
              <div class="mockup-header">
                <div class="window-controls">
                  <span class="win-dot red"></span>
                  <span class="win-dot yellow"></span>
                  <span class="win-dot green"></span>
                </div>
              </div>
              <div class="mockup-body">
                <div class="mockup-sidebar">
                  <div class="mockup-item"></div>
                  <div class="mockup-item"></div>
                  <div class="mockup-item"></div>
                </div>
                <div class="mockup-main">
                  <div class="mockup-line" style="width: 40%; height: 16px; background-color: var(--accent-yellow);"></div>
                  <div class="mockup-line" style="width: 85%;"></div>
                  <div class="mockup-line" style="width: 70%;"></div>
                  <div class="mockup-line" style="width: 90%;"></div>
                  <div class="mockup-line" style="width: 50%;"></div>
                </div>
              </div>
            </div>
          `;
          break;
          
        case 'problem':
          main.innerHTML = `
            <h2 class="section-heading">${slide.title}</h2>
            <p class="subtitle">${slide.subtitle}</p>
            <p class="body-text">${slide.body}</p>
            <div class="remember-box" style="border-color: var(--accent-red); background-color: rgba(239, 68, 68, 0.01);">
              <div class="remember-title" style="color: var(--accent-red);">
                <span>⚠️</span> Hoisting Consequences
              </div>
              <p class="remember-body">Before modern scope bounds were introduced, variables would bleed or remain uninitialized in local namespaces, triggering silent visual crashes. Let's dissect the core compilation lifecycle to understand why.</p>
            </div>
          `;
          break;
          
        case 'definition':
          main.innerHTML = `
            <h2 class="section-heading">${slide.title}</h2>
            <p class="subtitle">${slide.subtitle}</p>
            <div class="card definition-card" style="padding-top: 48px;">
              <div class="icon-circle yellow-circle" style="margin-bottom: 24px;">
                ${slide.definition.icon}
              </div>
              <div class="definition-title" style="font-size: 1.55rem; margin-bottom: 12px;">
                ${slide.definition.title}
              </div>
              <p class="definition-body">${slide.definition.body}</p>
            </div>
            <div class="remember-box">
              <div class="remember-title">
                <span>⚡</span> ${slide.remember.title}
              </div>
              <p class="remember-body">${slide.remember.body}</p>
            </div>
          `;
          break;
          
        case 'diagram_anatomy':
          main.innerHTML = `
            <h2 class="section-heading">${slide.title}</h2>
            <p class="subtitle">${slide.subtitle}</p>
            <div class="diagram-container">
              <div class="diagram-flow">
                <div class="diagram-node active-node" style="min-height: 200px; display: flex; flex-direction: column; justify-content: space-between;">
                  <div>
                    <div class="diagram-node-title" style="color: var(--accent-yellow); font-size: 1.1rem; text-align: left;">1. Memory Space</div>
                    <div class="diagram-node-desc" style="text-align: left; margin-top: 4px;">Variable Environment</div>
                  </div>
                  <p style="font-family: var(--font-code); font-size: 0.8rem; color: var(--text-secondary); text-align: left; line-height: 1.6; border-top: 1px solid var(--border-color); padding-top: 12px; margin-top: 12px;">
                    userName: 'Shivaji'<br>
                    greet: f()<br>
                    getCurrentTime: f()
                  </p>
                </div>
                <div class="diagram-node" style="min-height: 200px; display: flex; flex-direction: column; justify-content: space-between;">
                  <div>
                    <div class="diagram-node-title" style="color: var(--accent-cyan); font-size: 1.1rem; text-align: left;">2. Thread of Execution</div>
                    <div class="diagram-node-desc" style="text-align: left; margin-top: 4px;">Code Execution Space</div>
                  </div>
                  <p style="font-family: var(--font-code); font-size: 0.8rem; color: var(--text-muted); text-align: left; line-height: 1.6; border-top: 1px solid var(--border-color); padding-top: 12px; margin-top: 12px;">
                    Line 1: const user...<br>
                    Line 2: greet(user)...<br>
                    (Evaluated line-by-line)
                  </p>
                </div>
              </div>
            </div>
          `;
          break;
          
        case 'deep_dive':
          main.innerHTML = `
            <h2 class="section-heading">${slide.title}</h2>
            <p class="subtitle">${slide.subtitle}</p>
            <div class="concept-card-grid">
              <div class="concept-card">
                <div class="concept-card-title" style="color: var(--accent-yellow);">
                  <span>◷</span> ${slide.concepts[0].title}
                </div>
                <p class="concept-card-body">${slide.concepts[0].body}</p>
              </div>
              <div class="concept-card">
                <div class="concept-card-title" style="color: var(--accent-cyan);">
                  <span>▶</span> ${slide.concepts[1].title}
                </div>
                <p class="concept-card-body">${slide.concepts[1].body}</p>
              </div>
            </div>
            <div class="remember-box" style="margin-top: 0;">
              <div class="remember-title">💡 Critical Understanding</div>
              <p class="remember-body">This two-phase design is the exact reason variables declared with <strong>var</strong> initialize to <strong>undefined</strong>, while function declarations are ready to run immediately.</p>
            </div>
          `;
          break;
          
        case 'code':
          const codeHTML = renderCodeBlock(slide.codeBlock);
          main.innerHTML = `
            <h2 class="section-heading">${slide.title}</h2>
            <p class="subtitle">${slide.subtitle}</p>
            ${codeHTML}
          `;
          break;
          
        case 'diagram_stack':
          main.innerHTML = `
            <h2 class="section-heading">${slide.title}</h2>
            <p class="subtitle">${slide.subtitle}</p>
            <div class="diagram-container" style="flex-direction: row; gap: 32px; align-items: flex-start; justify-content: center; min-height: 380px;">
              <div>
                <div style="font-family: var(--font-heading); font-weight: 700; font-size: 0.95rem; margin-bottom: 12px; text-align: center; color: var(--accent-yellow);">Call Stack (LIFO)</div>
                <div class="stack-container">
                  <div class="stack-frame active-frame">
                    <span class="stack-frame-title">getCurrentTime()</span>
                    <span class="stack-frame-vars">Local: [this, arguments]</span>
                  </div>
                  <div class="stack-frame">
                    <span class="stack-frame-title">greet()</span>
                    <span class="stack-frame-vars">Local: [msg, time]</span>
                  </div>
                  <div class="stack-frame global">
                    <span class="stack-frame-title">Global Execution Context</span>
                    <span class="stack-frame-vars">Global: [userName, greet, ...]</span>
                  </div>
                </div>
              </div>
              <div>
                <div style="font-family: var(--font-heading); font-weight: 700; font-size: 0.95rem; margin-bottom: 12px; text-align: center; color: var(--accent-cyan);">Memory Heap</div>
                <div class="memory-heap-container">
                  <div class="memory-object">
                    <div class="memory-object-address">0x2A4F8</div>
                    <div class="memory-object-val">{ name: 'Shivaji' }</div>
                  </div>
                  <div class="memory-object">
                    <div class="memory-object-address">0x5F10C</div>
                    <div class="memory-object-val">greet: f()</div>
                  </div>
                  <div style="width: 100%; font-size: 0.7rem; color: var(--text-muted); padding-top: 12px; line-height: 1.4;">
                    Objects, functions, and arrays reside in the Heap memory, while Execution Stack frames manage primitive references.
                  </div>
                </div>
              </div>
            </div>
          `;
          break;
          
        case 'mistakes':
          main.innerHTML = `
            <h2 class="section-heading">${slide.title}</h2>
            <p class="subtitle">${slide.subtitle}</p>
            <div class="comparison-grid">
              <div class="comparison-card bad-practice" style="padding-top: 40px;">
                <div class="icon-circle red-circle">✗</div>
                <div class="comparison-header" style="font-size: 1.25rem; margin-bottom: 12px; font-family: var(--font-heading);">
                  BAD PRACTICE
                </div>
                <p class="comparison-body">${slide.comparison.bad.body}</p>
              </div>
              <div class="comparison-card good-practice" style="padding-top: 40px;">
                <div class="icon-circle green-circle">✓</div>
                <div class="comparison-header" style="font-size: 1.25rem; margin-bottom: 12px; font-family: var(--font-heading);">
                  GOOD PRACTICE
                </div>
                <p class="comparison-body">${slide.comparison.good.body}</p>
              </div>
            </div>
            <div class="warning-card">
              <div class="warning-title">
                <span>⚠️</span> ${slide.warning.title}
              </div>
              <p class="warning-body">${slide.warning.body}</p>
            </div>
          `;
          break;
          
        case 'interview':
          main.innerHTML = `
            <h2 class="section-heading">${slide.title}</h2>
            <p class="subtitle">${slide.subtitle}</p>
            <div class="interview-tip">
              <div class="interview-title">
                <span>⚡</span> Interviewer Question
              </div>
              <p class="interview-body" style="font-weight: 700; color: var(--text-primary); margin-bottom: 16px;">
                ${slide.interview.question}
              </p>
              <div style="border-top: 1px solid rgba(34, 197, 94, 0.15); padding-top: 16px;">
                <span style="font-family: var(--font-heading); font-size: 0.85rem; font-weight: 700; text-transform: uppercase; color: var(--accent-emerald); display: block; margin-bottom: 6px; letter-spacing: 0.05em;">Elite Developer Answer</span>
                <p class="interview-body">${slide.interview.answer}</p>
              </div>
            </div>
          `;
          break;
          
        case 'takeaways':
          let listItems = '';
          slide.takeaways.forEach(item => {
            listItems += `
              <li class="summary-item">
                <span class="summary-icon">✓</span>
                <span>${item}</span>
              </li>
            `;
          });
          main.innerHTML = `
            <h2 class="section-heading">${slide.title}</h2>
            <p class="subtitle">${slide.subtitle}</p>
            <ul class="summary-list">${listItems}</ul>
          `;
          break;
          
        case 'cta':
          main.innerHTML = `
            <div class="cta-container" style="justify-content: center; gap: 48px;">
              <h2 class="cta-header" style="font-size: 4.5rem; line-height: 1.1; margin-bottom: 0;">Built for elite<br>developers.</h2>
              <p class="subtitle" style="margin-bottom: 0; font-size: 1.35rem; color: var(--text-secondary); max-width: 600px;">
                Deep visual handbooks covering the underlying engine mechanics of modern JavaScript.
              </p>
              <div style="margin-top: 12px;">
                <a href="https://github.com/TheShivaji/javascript-mastery" class="cta-glow-btn" target="_blank">
                  github.com/TheShivaji/javascript-mastery
                </a>
              </div>
              <p style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-heading); text-transform: uppercase; letter-spacing: 0.08em; margin-top: 24px;">
                🌙 Built in Public by Shivaji Jagdale
              </p>
            </div>
          `;
          break;
      }
      
      page.appendChild(main);

      // Footer Component
      const footer = document.createElement('div');
      footer.className = 'slide-footer';
      if (slide.type === 'cover') {
        footer.innerHTML = `
          <span class="brand-watermark" style="color: var(--text-muted); font-size: 1rem; font-weight: 500; font-family: var(--font-heading);">Swipe &rarr;</span>
          <span class="slide-number">01</span>
        `;
      } else if (slide.type === 'cta') {
        footer.innerHTML = `
          <span></span>
          <span></span>
        `;
      } else {
        footer.innerHTML = `
          <span></span>
          <span class="slide-number">${String(slide.id).padStart(2, '0')}</span>
        `;
      }
      page.appendChild(footer);
      
      container.appendChild(page);
    });
  }

  // Render Sidebar slide navigation lists
  function renderSidebar() {
    sidebarList.innerHTML = '';
    
    slideData.forEach((slide, index) => {
      const li = document.createElement('li');
      li.className = `slide-nav-item ${index === activeSlideIndex ? 'active' : ''}`;
      li.innerHTML = `
        <span>Slide ${slide.id}: ${slide.type.replace('_', ' ').toUpperCase()}</span>
        <span class="slide-nav-num">${String(slide.id).padStart(2, '0')}</span>
      `;
      li.addEventListener('click', () => {
        activeSlideIndex = index;
        updateSlideViewState();
      });
      sidebarList.appendChild(li);
    });
  }

  // Helper method to format code syntax highlighter
  function renderCodeBlock(codeBlock) {
    let highlightedHTML = '';
    let currentTokenIndex = 0;
    
    codeBlock.lines.forEach((line, lineIdx) => {
      let lineHTML = '';
      if (line === '') {
        // empty line
        lineHTML += '\n';
        // consume any empty token
        if (currentTokenIndex < codeBlock.tokens.length && codeBlock.tokens[currentTokenIndex][0] === '') {
          currentTokenIndex++;
        }
      } else {
        // loop and assemble tokens until they match the line content length
        let assembledLine = '';
        while (currentTokenIndex < codeBlock.tokens.length) {
          const token = codeBlock.tokens[currentTokenIndex];
          if (!token || token.length === 0) {
            currentTokenIndex++;
            continue;
          }
          const [text, tokenClass] = token;
          if (text === undefined) {
            currentTokenIndex++;
            continue;
          }
          if (tokenClass) {
            lineHTML += `<span class="code-${tokenClass}">${escapeHTML(text)}</span>`;
          } else {
            lineHTML += escapeHTML(text);
          }
          assembledLine += text;
          currentTokenIndex++;
          
          if (assembledLine.length >= line.length) {
            break;
          }
        }
        lineHTML += '\n';
      }
      highlightedHTML += lineHTML;
    });

    // Make line numbers string
    const lineNumbers = Array.from({length: codeBlock.lines.length}, (_, i) => i + 1).join('\n');

    return `
      <div class="code-block-container">
        <div class="code-header">
          <div class="code-badge-group">
            <div class="window-controls">
              <span class="win-dot red"></span>
              <span class="win-dot yellow"></span>
              <span class="win-dot green"></span>
            </div>
            <span class="code-filename">${codeBlock.filename}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 10px;">
            <span class="code-language">${codeBlock.language}</span>
            <button class="code-copy-btn" title="Copy code">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            </button>
          </div>
        </div>
        <div class="code-body-wrapper">
          <pre class="code-line-numbers"><code>${lineNumbers}</code></pre>
          <pre class="code-content"><code>${highlightedHTML}</code></pre>
        </div>
      </div>
    `;
  }

  function escapeHTML(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Update showing slide based on activeSlideIndex
  function updateSlideViewState() {
    const slides = document.querySelectorAll('.slide-page');
    slides.forEach((slide, index) => {
      if (index === activeSlideIndex) {
        slide.classList.add('active-slide');
      } else {
        slide.classList.remove('active-slide');
      }
    });

    const items = document.querySelectorAll('.slide-nav-item');
    items.forEach((item, index) => {
      if (index === activeSlideIndex) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Control navigation disable states
    btnPrev.disabled = activeSlideIndex === 0;
    btnNext.disabled = activeSlideIndex === slideData.length - 1;
  }

  // Resize Sandbox scaling context
  function resizePreview() {
    const previewContainer = document.querySelector('.preview-container');
    const viewportSandbox = document.querySelector('.viewport-sandbox');
    if (!previewContainer || !viewportSandbox) return;

    const cw = previewContainer.clientWidth - 40;
    const ch = previewContainer.clientHeight - 40;

    const scaleX = cw / 1080;
    const scaleY = ch / 1350;
    const scale = Math.min(scaleX, scaleY, 1);

    viewportSandbox.style.transform = `scale(${scale})`;
  }

  // Set event handlers
  function setupEventListeners() {
    btnPrev.addEventListener('click', () => {
      if (activeSlideIndex > 0) {
        activeSlideIndex--;
        updateSlideViewState();
      }
    });

    btnNext.addEventListener('click', () => {
      if (activeSlideIndex < slideData.length - 1) {
        activeSlideIndex++;
        updateSlideViewState();
      }
    });

    btnPrint.addEventListener('click', () => {
      window.print();
    });

    toggleGrid.addEventListener('change', (e) => {
      if (e.target.checked) {
        safetyOverlay.classList.add('visible');
      } else {
        safetyOverlay.classList.remove('visible');
      }
    });

    // Keyboards
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        if (activeSlideIndex < slideData.length - 1) {
          activeSlideIndex++;
          updateSlideViewState();
        }
      } else if (e.key === 'ArrowLeft') {
        if (activeSlideIndex > 0) {
          activeSlideIndex--;
          updateSlideViewState();
        }
      }
    });
  }

  init();
});
