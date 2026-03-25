


Object.assign(document.body.style, {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    margin: '0',
    backgroundColor: '#f2f2f2'
})

const container = document.querySelector('.container')
Object.assign(container.style, {
    display: 'flex',
    maxWidth: '920px',
    borderRadius: '10px',
    overflow: 'hidden',
    fontFamily: "'Lexend Deca', sans-serif"
})


const cards = document.querySelectorAll('.card')
const colors = ['hsl(31, 77%, 52%)', 'hsl(184, 100%, 22%)', 'hsl(179, 100%, 13%)']

cards.forEach((card, index) => {
    Object.assign(card.style, {
        backgroundColor: colors[index],
        padding: '45px',
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    })

   
    const h1 = card.querySelector('h1')
    Object.assign(h1.style, {
        fontFamily: "'Big Shoulders Display', cursive",
        color: 'white',
        textTransform: 'uppercase',
        fontSize: '40px',
        margin: '30px 0'
    })

    // პარაგრაფების (p) სტილი
    const p = card.querySelector('p')
    Object.assign(p.style, {
        color: 'hsla(0, 0%, 100%, 0.75)',
        lineHeight: '1.6',
        fontSize: '15px',
        marginBottom: '80px'
    })

    const img = card.querySelector('img')
Object.assign(img.style, {
    width: '64px',      
    height: 'auto',      
    marginBottom: '35px',
})

   
    const btn = card.querySelector('button')
    Object.assign(btn.style, {
        padding: '12px 30px',
        borderRadius: '25px',
        border: `2px solid white`,
        backgroundColor: 'white',
        color: colors[index],
        cursor: 'pointer',
        fontSize: '15px',
        transition: '0.2s',
        marginTop: 'auto', 
        alignSelf: 'flex-start'
    })

    // Hover ეფექტი
    btn.onmouseover = () => {
        btn.style.backgroundColor = 'transparent'
        btn.style.color = 'white'
    }
    btn.onmouseleave = () => {
        btn.style.backgroundColor = 'white'
        btn.style.color = colors[index]
    }
})