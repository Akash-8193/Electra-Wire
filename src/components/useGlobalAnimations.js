import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * useGlobalAnimations
 * Modern, React-safe GSAP animation hook.
 * Handles scroll animations, hover effects, and count-up stats.
 */
export const useGlobalAnimations = (rootRef) => {
    const location = useLocation();

    useEffect(() => {
        // Safety check: DOM must be mounted and ref available
        if (!rootRef.current) return;

        // Initialize GSAP Context for scoped selectors and easy cleanup
        const ctx = gsap.context((self) => {
            // Helper to select elements only within rootRef
            const q = gsap.utils.selector(rootRef);
            
            // The scrollable container. Using ref directly avoids 'Element not found' selector errors.
            const scrollerEl = rootRef.current;

            // 2. HERO SECTION ANIMATIONS
            // Background slow zoom/parallax effect
            const heroBg = q(".gsap-hero-bg");
            if (heroBg.length > 0) {
                gsap.fromTo(heroBg, 
                    { scale: 1 },
                    { 
                        scale: 1.15, 
                        duration: 15, 
                        ease: "none", 
                        repeat: -1, 
                        yoyo: true 
                    }
                );
            }

            // Heading stagger (fade in + slide from left)
            const heroLines = q(".gsap-hero-line");
            if (heroLines.length > 0) {
                gsap.from(heroLines, {
                    x: -50,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    stagger: 0.2,
                    delay: 0.3
                });
            }

            // CTA pulse/glow effect
            const cta = q(".gsap-cta");
            if (cta.length > 0) {
                gsap.to(cta, {
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(232, 163, 23, 0.5)",
                    duration: 1.2,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            }

            // 3. CARDS & GRID SECTIONS
            // Staggered reveal for grid items on scroll
            const gridContainers = q(".gsap-grid-container");
            gridContainers.forEach(container => {
                const cards = container.querySelectorAll(".gsap-card");
                if (cards.length > 0) {
                    gsap.from(cards, {
                        scrollTrigger: {
                            trigger: container,
                            scroller: scrollerEl,
                            start: "top 88%"
                        },
                        y: 40,
                        opacity: 0,
                        stagger: 0.1,
                        duration: 1,
                        ease: "expo.out"
                    });
                }
            });

            // Interactive Hover effects for all cards (including testimonials)
            const allCards = q(".gsap-card");
            allCards.forEach(card => {
                const onEnter = () => gsap.to(card, { 
                    scale: 1.05, 
                    y: -10, 
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)", 
                    duration: 0.5, 
                    ease: "power3.out" 
                });
                const onLeave = () => gsap.to(card, { 
                    scale: 1, 
                    y: 0, 
                    boxShadow: "0 4px 6px rgba(0,0,0,0.05)", 
                    duration: 0.5, 
                    ease: "power3.out" 
                });

                card.addEventListener('mouseenter', onEnter);
                card.addEventListener('mouseleave', onLeave);

                self.add(() => {
                    card.removeEventListener('mouseenter', onEnter);
                    card.removeEventListener('mouseleave', onLeave);
                });
            });

            // 4. IMAGE + TEXT SIDE SLIDES
            q(".gsap-slide-left").forEach(el => {
                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        scroller: scrollerEl,
                        start: "top 85%"
                    },
                    x: -60,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power2.out"
                });
            });

            q(".gsap-slide-right").forEach(el => {
                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        scroller: scrollerEl,
                        start: "top 85%"
                    },
                    x: 60,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power2.out"
                });
            });

            // 5. STATS NUMBER COUNT-UP
            q(".gsap-stat-number").forEach(el => {
                const originalText = el.innerText;
                const numbers = originalText.match(/\d+/);
                if (!numbers) return;
                
                const finalVal = parseInt(numbers[0], 10);
                const prefix = originalText.substring(0, numbers.index);
                const suffix = originalText.substring(numbers.index + numbers[0].length);
                
                const obj = { value: 0 };
                gsap.to(obj, {
                    scrollTrigger: {
                        trigger: el,
                        scroller: scrollerEl,
                        start: "top 85%"
                    },
                    value: finalVal,
                    duration: 2.5,
                    ease: "power2.out",
                    onUpdate: () => {
                        el.innerText = `${prefix}${Math.floor(obj.value)}${suffix}`;
                    }
                });
            });

            // 6. GENERAL FADE-IN SECTIONS
            q(".gsap-fade-in").forEach(el => {
                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        scroller: scrollerEl,
                        start: "top 85%"
                    },
                    opacity: 0,
                    y: 30,
                    duration: 1.2,
                    ease: "power2.out"
                });
            });

        }, rootRef); // Scoping to rootRef ensures selectors only look inside this component

        // Cleanup on unmount or route change
        return () => {
            ctx.revert(); 
            ScrollTrigger.refresh(); // Ensure layout resets correctly
        };
    }, [location, rootRef]); // Re-run when navigation happens
};
