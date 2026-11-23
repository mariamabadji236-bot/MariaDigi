import React, { useEffect, useRef } from 'react';

export const RabbitCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const rigRef = useRef<HTMLDivElement | null>(null);
  const earLeftRef = useRef<SVGGElement | null>(null);
  const earRightRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!finePointer.matches || reducedMotion.matches) {
      return;
    }

    const cursorEl = cursorRef.current;
    const rigEl = rigRef.current;
    const earLeftEl = earLeftRef.current;
    const earRightEl = earRightRef.current;

    if (!cursorEl || !rigEl || !earLeftEl || !earRightEl) {
      return;
    }

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let prevX = -100;
    let prevY = -100;
    let hasMoved = false;
    let isTouchDisabled = false;
    let rafId: number | null = null;
    let idleTimer: number | null = null;

    // Speed factor (0.12 = dreamy float, 0.18 = responsive luxury, 0.28 = snappy)
    const EASE = 0.18;

    const enableCursor = () => {
      if (!hasMoved && !isTouchDisabled) {
        hasMoved = true;
        document.documentElement.classList.add('md-rabbit-enabled');
        cursorEl.classList.add('is-visible');
      }
    };

    const disableCursor = () => {
      isTouchDisabled = true;
      document.documentElement.classList.remove('md-rabbit-enabled');
      cursorEl.classList.remove('is-visible');
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    const updateTargetState = (target: EventTarget | null) => {
      if (!(target instanceof Element)) {
        cursorEl.classList.remove('is-hover', 'is-project', 'is-text-field');
        return;
      }

      const isTextField = Boolean(
        target.closest(
          'input:not([type="submit"]):not([type="button"]):not([type="checkbox"]):not([type="radio"]), textarea, [contenteditable="true"]'
        )
      );
      const isProject = Boolean(target.closest('[data-cursor="project"]'));
      const isInteractive = Boolean(
        target.closest(
          'a, button, [role="button"], select, summary, label[for], [data-cursor="interactive"]'
        )
      );

      cursorEl.classList.toggle('is-text-field', isTextField);
      cursorEl.classList.toggle('is-project', isProject && !isTextField);
      cursorEl.classList.toggle('is-hover', (isInteractive || isProject) && !isTextField);
    };

    const resetIdleTimer = () => {
      cursorEl.classList.remove('is-idle');
      if (idleTimer !== null) {
        window.clearTimeout(idleTimer);
      }
      idleTimer = window.setTimeout(() => {
        cursorEl.classList.add('is-idle');
      }, 1100);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isTouchDisabled) return;

      // Clamp target coordinates inside viewport bounds
      const maxX = Math.max(0, window.innerWidth - 2);
      const maxY = Math.max(0, window.innerHeight - 2);
      targetX = Math.min(Math.max(0, e.clientX), maxX);
      targetY = Math.min(Math.max(0, e.clientY), maxY);

      if (!hasMoved) {
        currentX = targetX;
        currentY = targetY;
        prevX = targetX;
        prevY = targetY;
        enableCursor();
      }

      updateTargetState(e.target);
      resetIdleTimer();
    };

    const onMouseDown = () => {
      if (isTouchDisabled || !hasMoved) return;
      cursorEl.classList.add('is-clicking');
    };

    const onMouseUp = () => {
      cursorEl.classList.remove('is-clicking');
    };

    const onMouseLeave = () => {
      cursorEl.classList.remove('is-visible');
    };

    const onMouseEnter = () => {
      if (hasMoved && !isTouchDisabled) {
        cursorEl.classList.add('is-visible');
      }
    };

    const onTouchStart = () => {
      disableCursor();
    };

    const tick = () => {
      if (!isTouchDisabled && hasMoved) {
        currentX += (targetX - currentX) * EASE;
        currentY += (targetY - currentY) * EASE;

        const vx = currentX - prevX;
        const vy = currentY - prevY;
        prevX = currentX;
        prevY = currentY;

        // Clamp rendered position within viewport so the rabbit never clips outside
        const rect = cursorEl.getBoundingClientRect();
        const width = rect.width || 40;
        const height = rect.height || 48;
        const hotspotOffsetX = width * 0.32;
        const hotspotOffsetY = height * 0.08;

        const renderX = Math.min(
          Math.max(0, currentX - hotspotOffsetX),
          Math.max(0, window.innerWidth - width)
        );
        const renderY = Math.min(
          Math.max(0, currentY - hotspotOffsetY),
          Math.max(0, window.innerHeight - height)
        );

        cursorEl.style.transform = `translate3d(${renderX.toFixed(2)}px, ${renderY.toFixed(
          2
        )}px, 0)`;

        // Subtle organic body tilt & dynamic ear bounce driven by movement velocity
        const speed = Math.min(Math.hypot(vx, vy), 24);
        const tilt = Math.max(-9, Math.min(9, vx * 0.55));
        const earSway = Math.max(-14, Math.min(14, -vx * 0.9 + vy * 0.45));
        const earBounce = Math.sin(performance.now() * 0.018) * Math.min(speed * 0.65, 8);

        if (!cursorEl.classList.contains('is-hover') && !cursorEl.classList.contains('is-project')) {
          rigEl.style.transform = `rotate(${tilt.toFixed(2)}deg)`;
          if (!cursorEl.classList.contains('is-idle')) {
            earLeftEl.style.transform = `rotate(${(earSway - earBounce).toFixed(2)}deg)`;
            earRightEl.style.transform = `rotate(${(earSway * 1.15 + earBounce).toFixed(2)}deg)`;
          } else {
            earLeftEl.style.transform = '';
            earRightEl.style.transform = '';
          }
        } else {
          rigEl.style.transform = '';
          earLeftEl.style.transform = '';
          earRightEl.style.transform = '';
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mousedown', onMouseDown, { passive: true });
    document.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter, { passive: true });
    document.addEventListener('touchstart', onTouchStart, { passive: true, once: true });

    rafId = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove('md-rabbit-enabled');
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('touchstart', onTouchStart);
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (idleTimer !== null) window.clearTimeout(idleTimer);
    };
  }, []);

  return (
    <div ref={cursorRef} className="md-rabbit-cursor" aria-hidden="true">
      <div ref={rigRef} className="md-rabbit-rig">
        <svg
          className="md-rabbit-svg"
          viewBox="0 0 50 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Soft Lavender Aura Halo (blooms on hover & project cards) */}
          <circle
            className="md-rabbit-halo"
            cx="26"
            cy="36"
            r="21"
            fill="var(--md-rabbit-lavender)"
            stroke="var(--md-rabbit-mauve)"
            strokeWidth="1"
            strokeDasharray="2 2.5"
          />

          {/* Delicate 4-Point Editorial Sparkle (appears on portfolio project cards) */}
          <path
            className="md-rabbit-sparkle"
            d="M40 7L41.4 11.1L45.5 12.5L41.4 13.9L40 18L38.6 13.9L34.5 12.5L38.6 11.1L40 7Z"
            fill="var(--md-rabbit-purple)"
          />

          {/* Back Ear (Right) */}
          <g ref={earRightRef} className="md-rabbit-ear-right">
            <ellipse
              cx="29"
              cy="15.5"
              rx="4.2"
              ry="11.2"
              transform="rotate(14 29 15.5)"
              fill="var(--md-rabbit-lavender)"
              stroke="var(--md-rabbit-purple)"
              strokeWidth="1.5"
            />
            <ellipse
              cx="29.1"
              cy="16.2"
              rx="2"
              ry="7.4"
              transform="rotate(14 29.1 16.2)"
              fill="var(--md-rabbit-mauve)"
              opacity="0.5"
            />
          </g>

          {/* Front Leading Ear (Left — tip aims gently at click point) */}
          <g ref={earLeftRef} className="md-rabbit-ear-left">
            <ellipse
              cx="18"
              cy="14.5"
              rx="4.4"
              ry="12"
              transform="rotate(-11 18 14.5)"
              fill="var(--md-rabbit-white)"
              stroke="var(--md-rabbit-deep)"
              strokeWidth="1.5"
            />
            <ellipse
              cx="18.2"
              cy="15.2"
              rx="2.1"
              ry="7.8"
              transform="rotate(-11 18.2 15.2)"
              fill="var(--md-rabbit-mauve)"
              opacity="0.65"
            />
          </g>

          {/* Rounded Body, Fluffy Tail & Refined Expression */}
          <g className="md-rabbit-body-group">
            {/* Little Rounded Tail Puff */}
            <circle
              cx="37.5"
              cy="44.5"
              r="4.2"
              fill="var(--md-rabbit-lavender)"
              stroke="var(--md-rabbit-purple)"
              strokeWidth="1.3"
            />

            {/* Small Rounded Body */}
            <path
              d="M14 40.5C14 34.8 18.5 31 24.8 31C31.2 31 36 35.2 36 41.2C36 46.8 31.8 50.5 25 50.5C18.2 50.5 14 46.6 14 40.5Z"
              fill="var(--md-rabbit-white)"
              stroke="var(--md-rabbit-deep)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />

            {/* Subtle Lavender Belly Shading */}
            <path
              d="M17.5 43.2C18.6 46.8 21.5 48.8 25 48.8C28.4 48.8 31 46.9 32.1 43.6C29.8 45.2 27.5 45.8 24.8 45.8C22.1 45.8 19.7 44.9 17.5 43.2Z"
              fill="var(--md-rabbit-lavender)"
            />

            {/* Soft Rounded Head */}
            <ellipse
              cx="23.5"
              cy="30"
              rx="10.2"
              ry="8.6"
              fill="var(--md-rabbit-white)"
              stroke="var(--md-rabbit-deep)"
              strokeWidth="1.5"
            />

            {/* Delicate Cheek Blush */}
            <ellipse
              className="md-rabbit-blush"
              cx="16.8"
              cy="32"
              rx="2.2"
              ry="1.2"
              fill="var(--md-rabbit-mauve)"
            />
            <ellipse
              className="md-rabbit-blush"
              cx="29.6"
              cy="32"
              rx="2.2"
              ry="1.2"
              fill="var(--md-rabbit-mauve)"
            />

            {/* Calm Default Eyes */}
            <g className="md-rabbit-eyes-calm">
              <circle cx="19.3" cy="29.1" r="1.45" fill="var(--md-rabbit-deep)" />
              <circle cx="18.9" cy="28.6" r="0.45" fill="var(--md-rabbit-white)" />
              <circle cx="27.1" cy="29.1" r="1.45" fill="var(--md-rabbit-deep)" />
              <circle cx="26.7" cy="28.6" r="0.45" fill="var(--md-rabbit-white)" />
            </g>

            {/* Playful Happy Curved Eyes on Hover */}
            <g className="md-rabbit-eyes-happy">
              <path
                d="M17.6 29.4C18.2 28.1 20.2 28.1 20.8 29.4"
                stroke="var(--md-rabbit-purple)"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M25.6 29.4C26.2 28.1 28.2 28.1 28.8 29.4"
                stroke="var(--md-rabbit-purple)"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </g>

            {/* Refined Little Lavender Nose */}
            <path
              d="M22.2 31.6C22.2 31.1 22.8 30.9 23.2 30.9C23.6 30.9 24.2 31.1 24.2 31.6C24.2 32.1 23.6 32.6 23.2 32.6C22.8 32.6 22.2 32.1 22.2 31.6Z"
              fill="var(--md-rabbit-purple)"
            />

            {/* Tiny Tucked Paws */}
            <path
              d="M19.5 48.2C19.5 46.9 20.6 46 21.8 46C22.8 46 23.6 46.8 23.6 48.1"
              stroke="var(--md-rabbit-deep)"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            <path
              d="M26.2 48.1C26.2 46.8 27 46 28 46C29.2 46 30.3 46.9 30.3 48.2"
              stroke="var(--md-rabbit-deep)"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};
