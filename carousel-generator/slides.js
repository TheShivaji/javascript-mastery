/* ==========================================================================
   JS MASTERY CORE - SLIDES CONTENT (slides.js)
   ========================================================================== */

const slideData = [
  {
    id: 1,
    type: "cover",
    badge: "CORE MECHANICS",
    title: "How JS Works<br>Behind The <span class=\"highlight\">Scenes</span>",
    subtitle: "A deep dive into Execution Context, the Call Stack, and the mechanics of modern JavaScript execution.",
    brand: "JS Mastery",
    series: "Developer Handbook Vol. 1"
  },
  {
    id: 2,
    type: "problem",
    title: "The Mystery of <span class=\"accent\">Temporal Execution</span>",
    subtitle: "Why can you call some functions before they are declared, while variables return undefined or throw ReferenceErrors?",
    body: "Most developers understand *what* hoisting does, but few understand the underlying physical architecture of the JavaScript engine that governs it. Without a clear mental model, scope errors and asynchronous bugs become inevitable.",
    brand: "JS Mastery",
    series: "Developer Handbook Vol. 1"
  },
  {
    id: 3,
    type: "definition",
    title: "What is <span class=\"accent\">Execution Context?</span>",
    subtitle: "The fundamental container room of JavaScript execution.",
    definition: {
      icon: "{}",
      title: "Execution Context (EC)",
      body: "An abstract environment created by the JS engine to evaluate and execute code. It contains the code itself, its variable environment (local scope), outer environment reference (scope chain), and the execution context context bindings (this)."
    },
    remember: {
      title: "Key Principle",
      body: "Everything in JavaScript happens inside an Execution Context. If code is running, it must be running inside a context."
    },
    brand: "JS Mastery",
    series: "Developer Handbook Vol. 1"
  },
  {
    id: 4,
    type: "diagram_anatomy",
    title: "Anatomy of a Context",
    subtitle: "Inside every Execution Context, two distinct spaces exist side-by-side:",
    diagram: {
      type: "anatomy",
      title: "Execution Context Structure"
    },
    brand: "JS Mastery",
    series: "Developer Handbook Vol. 1"
  },
  {
    id: 5,
    type: "deep_dive",
    title: "The Two-Phase <span class=\"accent\">Lifecycle</span>",
    subtitle: "Execution contexts do not just happen instantly; they are processed in two separate cycles:",
    concepts: [
      {
        title: "1. The Creation Phase",
        body: "The compiler scans the code and registers variable and function declarations. Memory space is allocated. Variables are initialized to `undefined`, while function declarations are stored in their entirety."
      },
      {
        title: "2. The Execution Phase",
        body: "The engine runs the code line-by-line (thread of execution). It executes assignments, evaluates expressions, and executes function calls, updating memory references in real-time."
      }
    ],
    brand: "JS Mastery",
    series: "Developer Handbook Vol. 1"
  },
  {
    id: 6,
    type: "code",
    title: "The Stack in <span class=\"accent\">Practice</span>",
    subtitle: "Consider this typical workflow where multiple functions call one another:",
    codeBlock: {
      filename: "execution-flow.js",
      language: "javascript",
      lines: [
        "const userName = 'Shivaji';",
        "",
        "function greet(name) {",
        "  const msg = `Hello, ${name}`;",
        "  const time = getCurrentTime();",
        "  return `${msg} at ${time}`;",
        "}",
        "",
        "function getCurrentTime() {",
        "  return new Date().toLocaleTimeString();",
        "}",
        "",
        "greet(userName);"
      ],
      tokens: [
        ["const", "keyword"], [" ", ""], ["userName", "variable"], [" = ", ""], ["'Shivaji'", "string"], [";", ""],
        [],
        ["function", "keyword"], [" ", ""], ["greet", "function"], ["(", ""], ["name", "variable"], [") {", ""],
        ["  ", ""], ["const", "keyword"], [" ", ""], ["msg", "variable"], [" = ", ""], ["`Hello, ${", "string"], ["name", "variable"], ["}`", "string"], [";", ""],
        ["  ", ""], ["const", "keyword"], [" ", ""], ["time", "variable"], [" = ", ""], ["getCurrentTime", "function"], ["();", ""],
        ["  ", ""], ["return", "keyword"], [" ", ""], ["`${", "string"], ["msg", "variable"], ["} at ${", "string"], ["time", "variable"], ["}`", "string"], [";", ""],
        ["}", ""],
        [],
        ["function", "keyword"], [" ", ""], ["getCurrentTime", "function"], ["() {", ""],
        ["  ", ""], ["return", "keyword"], [" ", ""], ["new", "keyword"], [" ", ""], ["Date", "entity"], ["().", ""], ["toLocaleTimeString", "function"], ["();", ""],
        ["}", ""],
        [],
        ["greet", "function"], ["(", ""], ["userName", "variable"], [");", ""]
      ]
    },
    brand: "JS Mastery",
    series: "Developer Handbook Vol. 1"
  },
  {
    id: 7,
    type: "diagram_stack",
    title: "Call Stack Execution",
    subtitle: "How the Call Stack tracks the current execution location line by line:",
    diagram: {
      type: "stack",
      frames: [
        { title: "getCurrentTime() Context", vars: "Local: [time: (eval)]", active: true },
        { title: "greet() Context", vars: "Args: [name: 'Shivaji'], Local: [msg, time]", active: false },
        { title: "Global Execution Context", vars: "Global: [userName, greet, getCurrentTime]", active: false, isGlobal: true }
      ]
    },
    brand: "JS Mastery",
    series: "Developer Handbook Vol. 1"
  },
  {
    id: 8,
    type: "mistakes",
    title: "Common Mistakes",
    subtitle: "Incorrect execution assumptions lead to errors. Here is how to avoid them.",
    comparison: {
      bad: {
        title: "❌ Expecting Variable Hoisting to Keep Values",
        body: "Using `var` variables before their assignment works (returns `undefined`) but using `let` or `const` throws a ReferenceError due to the Temporal Dead Zone (TDZ). Expecting functions stored in variables to hoist throws a TypeError."
      },
      good: {
        title: "✅ Clear Variable Initialization & Scope Order",
        body: "Always declare and initialize your variables at the top of their scope. Write functions as standard function declarations if you must call them before declaration, or use strict variable initialization."
      }
    },
    warning: {
      title: "Warning",
      body: "Variables declared with let and const are hoisted during the creation phase, but they are not initialized. Accessing them before initialization triggers a ReferenceError."
    },
    brand: "JS Mastery",
    series: "Developer Handbook Vol. 1"
  },
  {
    id: 9,
    type: "interview",
    title: "Interview Perspective",
    subtitle: "What interviewers really ask to verify your deep JS comprehension.",
    interview: {
      question: "\"Does JavaScript move code to the top during hoisting?\"",
      answer: "No, JavaScript does not physically move or rewrite code. Hoisting is simply a metaphorical description of how the JS engine scans files and allocates memory for declarations (initializing 'var' to undefined, reserving functions) during the context's Creation Phase, before execution begins."
    },
    brand: "JS Mastery",
    series: "Developer Handbook Vol. 1"
  },
  {
    id: 10,
    type: "takeaways",
    title: "Key Takeaways",
    subtitle: "The essential mental framework for every elite developer.",
    takeaways: [
      "JavaScript is single-threaded, synchronous, and operates using execution contexts.",
      "The Global Execution Context is initialized first and remains at the bottom of the stack.",
      "Every function execution generates a new local execution context popped on top of the stack.",
      "Variable and function memory maps are built during creation phase; variables are assigned values during execution phase."
    ],
    brand: "JS Mastery",
    series: "Developer Handbook Vol. 1"
  },
  {
    id: 11,
    type: "cta",
    title: "Master JS Core Mechanics",
    subtitle: "Accelerate your path to JavaScript and React excellence.",
    brand: "JS Mastery",
    series: "Developer Handbook Vol. 1"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = slideData;
}
