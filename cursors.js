/**
 * Glasio UI - Vanilla JS Cursor Engine
 * 
 * Drop-in script for any HTML website to get the premium Glasio UI custom cursor.
 * <script src="https://unpkg.com/glasio-ui/cursors.js"></script>
 */

(function () {
  // Only initialize on devices with fine pointers (desktops/laptops)
  if (window.matchMedia("(pointer: coarse)").matches) return;

  // Inject global cursor styles
  const style = document.createElement("style");
  style.innerHTML = `
    * { cursor: none !important; }
    input, textarea { cursor: text !important; }
    .glasio-cursor {
      pointer-events: none;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999999;
      transform: translate3d(-100px, -100px, 0);
      transition: transform 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .glasio-cursor svg {
      width: 28px;
      height: 28px;
      color: #4AC5C9;
      filter: drop-shadow(0 4px 12px rgba(74, 197, 201, 0.5));
      transition: transform 0.2s ease-out;
    }
    .glasio-cursor.hovering svg {
      transform: scale(1.15) rotate(-10deg);
    }
    .glasio-cursor.hidden {
      opacity: 0;
    }
  `;
  document.head.appendChild(style);

  // Create cursor element
  const cursor = document.createElement("div");
  cursor.className = "glasio-cursor";
  cursor.innerHTML = `
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M4 4l5.36 17.5c.34 1.12 1.94 1.15 2.34.05l2.4-6.6 6.6-2.4c1.1-.4 1.07-2-.05-2.34L4 4z" />
    </svg>
  `;
  document.body.appendChild(cursor);

  let isHovering = false;
  let isHiddenByTarget = false;

  const moveCursor = (e) => {
    // Offset by -2 to align the tip of the arrow with the actual mouse pointer
    cursor.style.transform = \`translate3d(\${e.clientX - 2}px, \${e.clientY - 2}px, 0)\`;
    
    if (isHiddenByTarget) return;
    
    const target = e.target;
    
    // Check if hovering a clickable element
    const isClickable = 
      target.tagName.toLowerCase() === 'button' ||
      target.tagName.toLowerCase() === 'a' ||
      target.closest('button') ||
      target.closest('a') ||
      window.getComputedStyle(target).cursor === 'pointer';
      
    if (isClickable && !isHovering) {
      isHovering = true;
      cursor.classList.add("hovering");
    } else if (!isClickable && isHovering) {
      isHovering = false;
      cursor.classList.remove("hovering");
    }
  };

  window.addEventListener("mousemove", moveCursor);
  
  document.addEventListener("mouseleave", () => {
    cursor.classList.add("hidden");
  });
  
  document.addEventListener("mouseenter", () => {
    cursor.classList.remove("hidden");
  });
})();
