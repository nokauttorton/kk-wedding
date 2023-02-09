const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('enter')
                // observer.unobserve(entry.target)
                return
            }
            entry.target.classList.remove('enter')
            // entry.target.classList.remove('before-enter')

        })
    }
)

export default {
    bind(el) {
        el.classList.add('before-enter')
        observer.observe(el)
    }
}