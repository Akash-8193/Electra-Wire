import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * useGlobalAnimations
 * Modern, React-safe GSAP animation hook.
 * Handles scroll animations, hover effects, typewriter text, and count-up stats.
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
            
            // The scrollable container
            const scrollerEl = rootRef.current;

            // 1. TEXT WRITING (TYPEWRITER EFFECT)
            // Applies letter-by-letter typing animation to all h1 elements
            q("h1, .gsap-typewriter").forEach(el => {
                if (el.dataset.animatedTypewriter === 'true') return;
                el.dataset.animatedTypewriter = 'true';

                const originalText = el.innerText.trim();
                if (!originalText) return;

                // Empty the element carefully
                el.innerHTML = '';
                
                // Create spans for each character
                const chars = originalText.split('');
                const charSpans = chars.map(char => {
                    const span = document.createElement('span');
                    span.textContent = char;
                    span.style.opacity = '0';
                    span.style.display = char === ' ' ? 'inline' : 'inline-block';
                    el.appendChild(span);
                    return span;
                });

                gsap.to(charSpans, {
                    scrollTrigger: {
                        trigger: el,
                        scroller: scrollerEl,
                        start: "top 85%",
                        once: true
                    },
                    opacity: 1,
                    stagger: 0.03, // smooth and professional speed
                    ease: "none",
                    duration: 0.05
                });

                // Restore original inner text on context revert (React safety)
                self.add(() => {
                    el.innerHTML = originalText;
                });
            });

            // 2. HERO SECTION ANIMATIONS (Existing classes)
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

            // 3. SCROLL ANIMATIONS: TEXT
            // Text: fade + slight slide (left/right depending on layout)
            q("h2, h3, p, .gsap-slide-left, .gsap-slide-right").forEach(el => {
                // Skip typewriter elements and anything nested inside a card
                if (el.dataset.animatedTypewriter === 'true' || el.closest('h1')) return;
                if (el.dataset.animatedText === 'true') return;
                if (el.closest('.gsap-card') || el.closest('[role="group"]')) return;
                
                el.dataset.animatedText = 'true';

                const rect = el.getBoundingClientRect();
                const screenCenter = window.innerWidth / 2;
                const elCenter = rect.left + rect.width / 2;

                let slideX = 0;
                let slideY = 20; // Default: upward movement

                // Determine direction dynamically or via explicit class
                if (el.className.includes('gsap-slide-left')) {
                    slideX = -30;
                    slideY = 0;
                } else if (el.className.includes('gsap-slide-right')) {
                    slideX = 30;
                    slideY = 0;
                } else if (elCenter < screenCenter - 100) {
                    slideX = -30;
                    slideY = 0;
                } else if (elCenter > screenCenter + 100) {
                    slideX = 30;
                    slideY = 0;
                }

                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        scroller: scrollerEl,
                        start: "top 85%",
                        once: true
                    },
                    opacity: 0,
                    x: slideX,
                    y: slideY,
                    duration: 1.2,
                    ease: "power2.out"
                });
            });

            // 4. SCROLL ANIMATIONS: CARDS & GRIDS
            // Cards: fade in + upward movement with stagger
            const cardGrids = q(".gsap-grid-container, .grid").filter(container => {
                const cls = container.className || '';
                // Only target multi-column grid layouts as cards to avoid big section grids
                return cls.includes('grid-cols-') || cls.includes('cols-');
            });

            cardGrids.forEach(container => {
                const cards = Array.from(container.children).filter(el => {
                    if (el.nodeType !== 1) return false;
                    if (el.dataset.animatedCard === 'true') return false;
                    el.dataset.animatedCard = 'true';
                    return true;
                });

                if (cards.length > 0) {
                    gsap.from(cards, {
                        scrollTrigger: {
                            trigger: container,
                            scroller: scrollerEl,
                            start: "top 88%",
                            once: true
                        },
                        y: 40,
                        opacity: 0,
                        stagger: 0.1,
                        duration: 1,
                        ease: "expo.out"
                    });
                }
            });

            // 5. SCROLL ANIMATIONS: IMAGES
            // Images: subtle zoom or reveal on scroll
            q("img, .gsap-image").forEach(img => {
                if (img.dataset.animatedImage === 'true') return;
                img.dataset.animatedImage = 'true';

                gsap.from(img, {
                    scrollTrigger: {
                        trigger: img,
                        scroller: scrollerEl,
                        start: "top 90%",
                        once: true
                    },
                    scale: 0.95,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power2.out"
                });
            });

            // 6. HOVER EFFECTS
            // Cards/images: slight zoom (scale 1.05) + soft shadow + lift effect
            const hoverCards = q(".gsap-card, [role='group'][aria-roledescription='slide']");
            
            // Find grids that represent cards
            const extraCards = [];
            cardGrids.forEach(grid => {
                Array.from(grid.children).forEach(child => {
                    if (child.nodeType === 1 && !hoverCards.includes(child)) {
                        extraCards.push(child);
                    }
                });
            });

            // Find standalone images (not nested inside cards)
            const standaloneImgs = q("img").filter(img => 
                !img.closest('.gsap-card') && 
                !img.closest('[role="group"]') && 
                !extraCards.some(card => card.contains(img))
            );

            const allHoverables = [...hoverCards, ...extraCards, ...standaloneImgs];

            allHoverables.forEach(el => {
                // Prepare default styles to ensure smooth transition
                el.style.transition = 'box-shadow 0.5s ease, transform 0.5s ease';

                const onEnter = () => {
                    gsap.to(el, { 
                        scale: 1.05, 
                        y: -10, 
                        boxShadow: "0 20px 40px rgba(0,0,0,0.15)", 
                        duration: 0.5, 
                        ease: "power3.out" 
                    });
                };

                const onLeave = () => {
                    gsap.to(el, { 
                        scale: 1, 
                        y: 0, 
                        boxShadow: "0 4px 6px rgba(0,0,0,0.05)", 
                        duration: 0.5, 
                        ease: "power3.out" 
                    });
                };

                el.addEventListener('mouseenter', onEnter);
                el.addEventListener('mouseleave', onLeave);

                self.add(() => {
                    el.removeEventListener('mouseenter', onEnter);
                    el.removeEventListener('mouseleave', onLeave);
                });
            });

            // 7. STATS NUMBER COUNT-UP
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
                        start: "top 85%",
                        once: true
                    },
                    value: finalVal,
                    duration: 2.5,
                    ease: "power2.out",
                    onUpdate: () => {
                        el.innerText = `${prefix}${Math.floor(obj.value)}${suffix}`;
                    }
                });
            });

            // 8. GENERAL FADE-IN SECTIONS
            q(".gsap-fade-in").forEach(el => {
                if (el.dataset.animatedText === 'true' || el.dataset.animatedCard === 'true') return;
                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        scroller: scrollerEl,
                        start: "top 85%",
                        once: true
                    },
                    opacity: 0,
                    y: 30,
                    duration: 1.2,
                    ease: "power2.out"
                });
            });

        }, rootRef);

        return () => {
            ctx.revert(); 
            ScrollTrigger.refresh();
        };
    }, [location, rootRef]);
};
