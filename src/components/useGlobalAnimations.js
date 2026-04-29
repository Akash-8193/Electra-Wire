import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const wrapTextInSpans = (el) => {
    const textNodes = [];
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while ((node = walker.nextNode())) {
        if (node.nodeValue.trim() !== '' && node.parentNode.tagName !== 'SCRIPT' && node.parentNode.tagName !== 'STYLE') {
            textNodes.push(node);
        }
    }
    
    const chars = [];
    textNodes.forEach(textNode => {
        const text = textNode.nodeValue;
        const fragment = document.createDocumentFragment();
        
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            if (char === ' ' || char === '\n' || char === '\t') {
                fragment.appendChild(document.createTextNode(char));
            } else {
                const span = document.createElement('span');
                span.textContent = char;
                span.style.opacity = '0';
                fragment.appendChild(span);
                chars.push(span);
            }
        }
        textNode.parentNode.replaceChild(fragment, textNode);
    });
    return chars;
};

/**
 * useGlobalAnimations
 * Premium minimal animations inspired by modern e-commerce (TwoLeavesTea.com style).
 */
export const useGlobalAnimations = (rootRef) => {
    const location = useLocation();

    useEffect(() => {
        if (!rootRef.current) return;

        const ctx = gsap.context((self) => {
            const q = gsap.utils.selector(rootRef);
            const scrollerEl = rootRef.current;

            // 1. NAVBAR BEHAVIOR


            // 2. HERO SECTION ENTRANCE
            const sections = q("section");
            const heroSection = sections.find(s => s.id === "हीरो सेक्शन" || s.parentElement?.id === "हीरो सेक्शन" || s.classList.contains('min-h-screen'));

            if (heroSection) {
                // Smooth section entrance on load
                gsap.fromTo(heroSection,
                    { opacity: 0 },
                    { opacity: 1, duration: 1.2, ease: "power3.out" }
                );

                const headline = heroSection.querySelector("h1");
                const subtext = heroSection.querySelector("p");
                const ctas = heroSection.querySelectorAll("a[data-slot='button'], button[data-slot='button']");

                if (headline) {
                    gsap.from(headline, {
                        y: 30,
                        opacity: 0,
                        duration: 1,
                        delay: 0.3,
                        ease: "power3.out"
                    });
                }

                if (subtext) {
                    gsap.from(subtext, {
                        y: 20,
                        opacity: 0,
                        duration: 1,
                        delay: 0.6,
                        ease: "power3.out"
                    });
                }

                if (ctas.length > 0) {
                    gsap.from(ctas, {
                        y: 15,
                        opacity: 0,
                        scale: 0.95,
                        duration: 0.8,
                        delay: 0.9,
                        stagger: 0.1,
                        ease: "power3.out"
                    });
                }
            }

            // 3. GLOBAL SCROLL REVEAL: SECTIONS
            // Sections fade in and move slightly upward
            sections.forEach(section => {
                if (section === heroSection) return;

                gsap.from(section, {
                    scrollTrigger: {
                        trigger: section,
                        scroller: scrollerEl,
                        start: "top 85%",
                        once: true
                    },
                    y: 40,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out"
                });
            });

            // 4. TEXT REVEAL (PREMIUM STAGGER)
            q("h2, h3").forEach(el => {
                if (el.dataset.animated === 'true') return;
                el.dataset.animated = 'true';

                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        scroller: scrollerEl,
                        start: "top 90%",
                        once: true
                    },
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out"
                });
            });

            // 5. CARD / PRODUCT GRID
            // Staggered upward fade on scroll + hover transforms
            const grids = q(".grid");
            grids.forEach(grid => {
                if (grid.closest('header') || grid.closest('footer')) return;

                const cards = Array.from(grid.children).filter(el =>
                    el.tagName === 'DIV' && el.children.length > 0
                );

                if (cards.length > 0 && cards.length < 30) {
                    gsap.from(cards, {
                        scrollTrigger: {
                            trigger: grid,
                            scroller: scrollerEl,
                            start: "top 88%",
                            once: true
                        },
                        y: 30,
                        opacity: 0,
                        stagger: 0.12,
                        duration: 0.8,
                        ease: "power2.out"
                    });
                }
            });

            // Interactive Card Hover Effects
            const hoverCards = q(".gsap-card, .grid > div").filter(el =>
                !el.closest('header') && !el.closest('footer') && el.children.length > 0
            );

            hoverCards.forEach(card => {
                card.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';

                const onEnter = () => {
                    gsap.to(card, {
                        scale: 1.04,
                        y: -4,
                        boxShadow: "0 12px 25px rgba(0,0,0,0.08)",
                        duration: 0.4,
                        ease: "power2.out"
                    });
                };
                const onLeave = () => {
                    gsap.to(card, {
                        scale: 1,
                        y: 0,
                        boxShadow: "0 0 0 rgba(0,0,0,0)",
                        duration: 0.4,
                        ease: "power2.out"
                    });
                };

                card.addEventListener('mouseenter', onEnter);
                card.addEventListener('mouseleave', onLeave);
                self.add(() => {
                    card.removeEventListener('mouseenter', onEnter);
                    card.removeEventListener('mouseleave', onLeave);
                });
            });

            // 6. IMAGE ANIMATIONS
            // Subtle zoom reveal on scroll (1.05 to 1)
            q("img").forEach(img => {
                if (img.dataset.animatedImg === 'true') return;
                if (img.closest('header')) return;
                img.dataset.animatedImg = 'true';

                gsap.fromTo(img,
                    { scale: 1.05, opacity: 0 },
                    {
                        scrollTrigger: {
                            trigger: img,
                            scroller: scrollerEl,
                            start: "top 92%",
                            once: true
                        },
                        scale: 1,
                        opacity: 1,
                        duration: 1.2,
                        ease: "power2.out"
                    }
                );
            });

            // 7. BUTTON INTERACTIONS
            // Clean subtle hover scale
            q("a[data-slot='button'], button[data-slot='button']").forEach(btn => {
                const onEnter = () => {
                    gsap.to(btn, { scale: 1.03, duration: 0.3, ease: "power2.out" });
                };
                const onLeave = () => {
                    gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" });
                };
                btn.addEventListener('mouseenter', onEnter);
                btn.addEventListener('mouseleave', onLeave);
                self.add(() => {
                    btn.removeEventListener('mouseenter', onEnter);
                    btn.removeEventListener('mouseleave', onLeave);
                });
            });

            // 8. WHATSAPP BUTTON ANIMATION
            q(".whatsapp-float").forEach(btn => {
                // Continuous slow floating animation
                gsap.to(btn, {
                    y: -20,
                    duration: 2,
                    ease: "power1.inOut",
                    yoyo: true,
                    repeat: -1
                });

                // Custom hover for the WhatsApp button
                const onEnter = () => {
                    gsap.to(btn, { scale: 1.1, boxShadow: "0px 15px 35px rgba(0,0,0,0.4)", duration: 0.3, ease: "power2.out", overwrite: "auto" });
                };
                const onLeave = () => {
                    gsap.to(btn, { scale: 1, boxShadow: "0px 10px 25px rgba(0,0,0,0.3)", duration: 0.3, ease: "power2.out", overwrite: "auto" });
                };
                btn.addEventListener('mouseenter', onEnter);
                btn.addEventListener('mouseleave', onLeave);
                self.add(() => {
                    btn.removeEventListener('mouseenter', onEnter);
                    btn.removeEventListener('mouseleave', onLeave);
                });
            });

            // 9. TYPEWRITER PARAGRAPHS
            const paragraphs = q("p");
            paragraphs.forEach(p => {
                if (p.dataset.animatedTyping === 'true') return;
                if (p.closest('header')) return; 
                
                p.dataset.originalHtml = p.innerHTML;
                p.dataset.animatedTyping = 'true';

                const chars = wrapTextInSpans(p);
                
                if (chars.length > 0) {
                    gsap.to(chars, {
                        scrollTrigger: {
                            trigger: p,
                            scroller: scrollerEl,
                            start: "top 90%",
                            once: true
                        },
                        opacity: 1,
                        duration: 0.1,
                        stagger: 0.015,
                        ease: "power1.inOut"
                    });
                }
            });

        }, rootRef);

        return () => {
            ctx.revert();
            if (rootRef.current) {
                const animatedParagraphs = rootRef.current.querySelectorAll("p[data-animated-typing='true']");
                animatedParagraphs.forEach(p => {
                    if (p.dataset.originalHtml) {
                        p.innerHTML = p.dataset.originalHtml;
                        p.dataset.animatedTyping = 'false';
                    }
                });
            }
            ScrollTrigger.refresh();
        };
    }, [location, rootRef]);
};
