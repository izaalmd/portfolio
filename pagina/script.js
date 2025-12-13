const projects = [
    {
        title: "🌐 Site TCC",
        description: "Site do Trabalho de Conclusão de Curso",
        type: "site",
        images: [
            "../imagens/indexsite.png",
            "../imagens/loginsite.png",
            "../imagens/jogossite.png",
            "../imagens/codigosite.png",
            "../imagens/redefinirsenhasite.png",
            "../imagens/suportesite.png"
        ]
    },
    {
        title: "📱 App TCC",
        description: "Aplicativo do Trabalho de Conclusão de Curso",
        type: "app",
        images: [
            "../imagens/categoriasapp.png",
            "../imagens/jogoapp.png",
            "../imagens/perfilapp.png",
            "../imagens/pixapp.png"
        ]
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
        card.style.cursor = 'pointer';
        card.onclick = () => showProjectImages(project);
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <span style="color: #00ffff; font-size: 0.9rem; margin-top: 1rem; display: block;">📸 Clique para ver imagens</span>
        `;
        container.appendChild(card);
    });
}

function showProjectImages(project) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.9); z-index: 1000; display: flex;
        align-items: center; justify-content: center; flex-direction: column;
    `;
    
    const content = document.createElement('div');
    content.style.cssText = `
        max-width: 90%; max-height: 90%; overflow-y: auto;
        text-align: center; padding: 20px;
    `;
    
    content.innerHTML = `
        <h2 style="color: #00ffff; margin-bottom: 20px;">${project.title}</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
            ${project.images.map(img => `
                <img src="${img}" style="width: 100%; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,255,255,0.3);" alt="${project.title}">
            `).join('')}
        </div>
        <button onclick="this.parentElement.parentElement.remove()" style="
            margin-top: 20px; padding: 10px 20px; background: #00ffff;
            color: #000; border: none; border-radius: 5px; cursor: pointer;
        ">Fechar</button>
    `;
    
    modal.appendChild(content);
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    document.body.appendChild(modal);
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
