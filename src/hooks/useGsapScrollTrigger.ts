import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../utils/gsapSetup';

interface ScrollTriggerOptions {
  trigger?: HTMLElement | string | null;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  toggleActions?: string;
  once?: boolean;
  delay?: number;
  duration?: number;
  yOffset?: number;
  stagger?: number;
}

/**
 * Universal hook for page-wide GSAP ScrollTrigger animations.
 * Scans children for data-gsap tags or standard GSAP class names:
 * - `.gsap-section`: fades in the entire section smoothly
 * - `.gsap-fade-up`: translates from y: 30 to y: 0 with opacity 0 to 1
 * - `.gsap-fade-in`: opacity only (for badges, glows, dividers)
 * - `.gsap-stagger-items`: staggers direct child elements
 * - `.gsap-stagger-cards`: staggers cards with subtle slide
 * - `.gsap-header-reveal`: subtle typographic headline reveal
 * - `.gsap-line-reveal`: draws or fades connecting lines
 */
export function usePageScrollTriggers(dependencies: unknown[] = []) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Use gsap.context for clean scoping and safe unmount cleanup in React 18/19
    const ctx = gsap.context(() => {
      // 1. Full section subtle entrances
      const sections = containerRef.current?.querySelectorAll<HTMLElement>('.gsap-section, section');
      sections?.forEach((section) => {
        // Skip hero section if it animates immediately on mount
        if (section.classList.contains('gsap-no-scroll-trigger')) return;

        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 24,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 88%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      });

      // 2. Individual Fade-Up elements
      const fadeUpElements = containerRef.current?.querySelectorAll<HTMLElement>('.gsap-fade-up, [data-gsap="fade-up"]');
      fadeUpElements?.forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 28,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 86%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      });

      // 3. Stagger container groups (e.g. grids of cards, metrics, features)
      const staggerGroups = containerRef.current?.querySelectorAll<HTMLElement>(
        '.gsap-stagger, .gsap-stagger-items, [data-gsap="stagger"]'
      );
      staggerGroups?.forEach((group) => {
        const items = group.children;
        if (!items || items.length === 0) return;

        gsap.fromTo(
          items,
          {
            opacity: 0,
            y: 24,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: group,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      });

      // 4. Headline & Eyebrow pairs
      const headers = containerRef.current?.querySelectorAll<HTMLElement>('.gsap-header-reveal, [data-gsap="header"]');
      headers?.forEach((header) => {
        const eyebrow = header.querySelector('.gsap-eyebrow, [data-gsap="eyebrow"]');
        const title = header.querySelector('h1, h2, h3, .gsap-title');
        const subtitle = header.querySelector('p, .gsap-subtitle');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: header,
            start: 'top 86%',
            toggleActions: 'play none none none',
            once: true,
          },
        });

        if (eyebrow) {
          tl.fromTo(
            eyebrow,
            { opacity: 0, y: -6 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
            0
          );
        }

        if (title) {
          tl.fromTo(
            title,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
            0.05
          );
        }

        if (subtitle) {
          tl.fromTo(
            subtitle,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.75, ease: 'power2.out' },
            0.15
          );
        }
      });

      // 5. Parallax / subtle scrub for background ambient glowing blobs
      const parallaxBlobs = containerRef.current?.querySelectorAll<HTMLElement>('.gsap-ambient-glow, [data-gsap="glow"]');
      parallaxBlobs?.forEach((blob) => {
        gsap.to(blob, {
          y: -40,
          opacity: 0.18,
          ease: 'none',
          scrollTrigger: {
            trigger: blob.parentElement || blob,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        });
      });

      // 6. Connecting lines & dividers
      const dividerLines = containerRef.current?.querySelectorAll<HTMLElement>('.gsap-line, [data-gsap="line"]');
      dividerLines?.forEach((line) => {
        gsap.fromTo(
          line,
          { scaleX: 0, transformOrigin: 'left center', opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.9,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: line,
              start: 'top 90%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      });

      // Refresh ScrollTrigger calculations after setup
      ScrollTrigger.refresh();
    }, containerRef);

    // Refresh triggers slightly after DOM stabilizes (e.g. dynamic font loading / images)
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timeout);
      ctx.revert();
    };
  }, dependencies);

  return containerRef;
}

/**
 * Dedicated hook for an individual component / section
 */
export function useSectionScrollTrigger<T extends HTMLElement = HTMLElement>(
  options: ScrollTriggerOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const el = ref.current;
      if (!el) return;

      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: options.yOffset ?? 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: options.duration ?? 0.85,
          delay: options.delay ?? 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: options.start ?? 'top 88%',
            toggleActions: options.toggleActions ?? 'play none none none',
            once: options.once ?? true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [options.duration, options.delay, options.yOffset, options.start]);

  return ref;
}
