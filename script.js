const projects = [
    {
        title: "🎮 TCC - Jogos",
        description: "Trabalho de Conclusão de Curso sobre desenvolvimento de jogos",
        link: "#"
    },
    {
        title: "⭕ Jogo da Velha",
        description: "Jogo da velha interativo com placar e animações",
        link: "jogo-da-velha/index.html"
    },
    {
        title: "🎬 Meu Cinema",
        description: "Catálogo dos meus filmes, séries e animes favoritos",
        link: "meu-cinema/index.html"
    },
    {
        title: "🎨 Portfolio Criativo",
        description: "Site de portfólio com animações e design moderno",
        link: "#"
    }
];

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = Math.random() * 5 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        particlesContainer.appendChild(particle);
    }
}

function createBubbles() {
    const bubbleCount = 8;
    
    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        const size = Math.random() * 200 + 100;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.top = Math.random() * 100 + '%';
        bubble.style.animationDelay = Math.random() * 5 + 's';
        bubble.style.animationDuration = (Math.random() * 10 + 15) + 's';
        document.body.appendChild(bubble);
    }
}

function typeWriter() {
    const texts = ['Front-end 💜', 'UI/UX 🎨', 'Web Design ✨'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.getElementById('typing-text');
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
        
        const speed = isDeleting ? 50 : 100;
        setTimeout(type, speed);
    }
    
    type();
}

function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.project-card, .tech-item').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        if (project.link && project.link !== '#') {
            card.style.cursor = 'pointer';
            card.onclick = () => window.open(project.link, '_blank');
        }
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            ${project.link && project.link !== '#' ? '<span style="color: #00ffff; font-size: 0.9rem; margin-top: 1rem; display: block;">🔗 Clique para jogar</span>' : ''}
        `;
        container.appendChild(card);
    });
}

document.getElementById('cta-btn').addEventListener('click', () => {
    document.getElementById('projetos').scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

createParticles();
createBubbles();
typeWriter();
renderProjects();
observeElements();
