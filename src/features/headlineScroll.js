

gsap.registerPlugin(ScrollTrigger)

export function headlineScroll() {
    const sections = document.querySelectorAll('[data-animate-scroll=headline-section]')

    sections.forEach(section => {
        const headline = section.querySelectorAll('[data-animate-scroll=headline]')
        const headlineSplit = new SplitType(headline, {
            types: 'chars',
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'top 75%',
                toggleActions: 'none play none reverse'
            }
        })

        tl.from(headlineSplit.chars, {
            duration: 1,
            y: 100,
            stagger: 0.05,
            ease: 'power3.out'
        })
    })
}