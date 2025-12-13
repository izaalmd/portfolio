const projects = [
    {
        title: "🎮 Game Legends",
        description: "Plataforma web e mobile para desenvolvedores independentes de jogos",
        cover: "imagens/tcc/indexsite.png",
        images: [
            "imagens/tcc/indexsite.png",
            "imagens/tcc/loginsite.png",
            "imagens/tcc/jogossite.png",
            "imagens/tcc/codigosite.png",
            "imagens/tcc/redefinirsenhasite.png",
            "imagens/tcc/suportesite.png",
            "imagens/tcc/categoriasapp.png",
            "imagens/tcc/jogoapp.png",
            "imagens/tcc/perfilapp.png",
            "imagens/tcc/pixapp.png"
        ]
    },
    {
        title: "💻 Projeto 2",
        description: "Descrição do segundo projeto",
        cover: "https://via.placeholder.com/400x250/333/fff?text=Em+Breve",
        images: []
    },
    {
        title: "🎨 Projeto 3",
        description: "Descrição do terceiro projeto",
        cover: "https://via.placeholder.com/400x250/333/fff?text=Em+Breve",
        images: []
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
        if (project.images.length > 0) {
            card.onclick = () => showProjectImages(project);
        }
        card.innerHTML = `
            <div style="width: 100%; height: 200px; background-image: url('${project.cover}'); background-size: cover; background-position: center; border-radius: 10px 10px 0 0; margin-bottom: 15px;"></div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            ${project.images.length > 0 ? '<span style="color: #00ffff; font-size: 0.9rem; margin-top: 1rem; display: block;">📸 Clique para ver imagens</span>' : '<span style="color: #888; font-size: 0.9rem; margin-top: 1rem; display: block;">Em desenvolvimento...</span>'}
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
    
    const siteImages = project.images.filter(img => img.includes('site'));
    const appImages = project.images.filter(img => img.includes('app'));
    
    content.innerHTML = `
        <h2 style="color: #00ffff; margin-bottom: 20px;">${project.title}</h2>
        <div style="color: #fff; text-align: left; margin-bottom: 30px; line-height: 1.6; max-width: 800px; margin-left: auto; margin-right: auto;">
            <p style="margin-bottom: 20px;">Game Legends é uma plataforma web e mobile criada para apoiar e dar visibilidade a desenvolvedores independentes de jogos, especialmente iniciantes. O projeto conecta criadores e jogadores em um ambiente colaborativo, permitindo a publicação de jogos, avaliações gratuitas, feedbacks da comunidade e um sistema de doações diretas para financiar projetos em desenvolvimento.</p>
            
            <p style="margin-bottom: 20px;">Desenvolvida com arquitetura moderna e escalável, a plataforma integra frontend responsivo, backend em Spring Boot, API RESTful e aplicação mobile em Flutter, garantindo segurança, usabilidade e consistência de dados entre web e mobile. O sistema conta com autenticação segura, diferentes níveis de acesso (cliente, desenvolvedor e administrador), moderação de conteúdo, filtros avançados de busca e controle de avaliações.</p>
            
            <p style="margin-bottom: 20px;">Além do aspecto técnico, a Game Legends possui um forte viés social, promovendo inclusão, inovação e democratização no mercado de games, alinhando-se aos Objetivos de Desenvolvimento Sustentável (ODS 9). O projeto busca reduzir barreiras enfrentadas por desenvolvedores indie e fortalecer a relação entre quem cria e quem joga.</p>
            
            <p style="color: #00ffff; font-weight: bold; margin-top: 30px;">Algumas fotos do projeto:</p>
        </div>
        <h3 style="color: #fff; margin: 20px 0 10px 0;">🌐 Site</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 30px;">
            ${siteImages.map(img => `
                <img src="${img}" style="width: 100%; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,255,255,0.3);" alt="Site Game Legends">
            `).join('')}
        </div>
        <h3 style="color: #fff; margin: 20px 0 10px 0;">📱 App</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
            ${appImages.map(img => `
                <img src="${img}" style="width: 100%; border-radius: 10px; box-shadow: 0 4px 20px rgba(0,255,255,0.3);" alt="App Game Legends">
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
