(function () {
  'use strict';

  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));


  function initNavbarFallback() {
    const toggler = $('.navbar-toggler');
    if (!toggler) return;
    const targetSelector = toggler.getAttribute('data-bs-target');
    const target = targetSelector ? $(targetSelector) : null;
    if (!target) return;

    toggler.addEventListener('click', () => {
      const isOpen = target.classList.toggle('show');
      toggler.setAttribute('aria-expanded', String(isOpen));
    });

    $$('.nav-link', target).forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
          target.classList.remove('show');
          toggler.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  function initAccordionFallback() {
    const buttons = $$('[data-bs-toggle="collapse"]');
    buttons.forEach((button) => {
      const targetSelector = button.getAttribute('data-bs-target');
      const target = targetSelector ? $(targetSelector) : null;
      if (!target || button.classList.contains('navbar-toggler')) return;

      button.addEventListener('click', () => {
        const parentSelector = target.getAttribute('data-bs-parent');
        if (parentSelector) {
          $$('.accordion-collapse.show', $(parentSelector) || document).forEach((openItem) => {
            if (openItem !== target) {
              openItem.classList.remove('show');
              const openButton = $(`[data-bs-target="#${openItem.id}"]`);
              if (openButton) {
                openButton.classList.add('collapsed');
                openButton.setAttribute('aria-expanded', 'false');
              }
            }
          });
        }

        const isOpen = target.classList.toggle('show');
        button.classList.toggle('collapsed', !isOpen);
        button.setAttribute('aria-expanded', String(isOpen));
      });
    });
  }

  function initCounters() {
    const counters = $$('.counter');
    counters.forEach((counter) => {
      const target = Number(counter.dataset.target || 0);
      const duration = 900;
      const startTime = performance.now();

      function update(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const value = Math.floor(progress * target);
        counter.textContent = new Intl.NumberFormat('es-CL').format(value);
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    });
  }

  function initPortfolioFilters() {
    const buttons = $$('.filter-btn');
    const items = $$('.portfolio-item');
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        buttons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
        items.forEach((item) => {
          const show = filter === 'all' || item.dataset.category === filter;
          item.classList.toggle('d-none', !show);
        });
      });
    });
  }

  function buildProposalSummary(form) {
    const data = new FormData(form);
    const now = new Date();
    return [
      'PROPUESTA PARA EVALUACIÓN PRELIMINAR - UNIDAD DE INNOVACIÓN Y DESARROLLO HGF',
      `Fecha de generación: ${now.toLocaleString('es-CL')}`,
      '',
      `Nombre de contacto: ${data.get('nombre') || 'No informado'}`,
      `Correo: ${data.get('correo') || 'No informado'}`,
      `Perfil: ${data.get('perfil') || 'No informado'}`,
      `Tipo de propuesta: ${data.get('tipo') || 'No informado'}`,
      '',
      '1. Problema que busca resolver',
      data.get('problema') || 'No informado',
      '',
      '2. Solución propuesta',
      data.get('solucion') || 'No informado',
      '',
      '3. Impacto esperado y métrica sugerida',
      data.get('impacto') || 'No informado',
      '',
      'Nota: resumen generado desde MVP local. Debe ser revisado por la unidad responsable antes de cualquier ingreso formal.'
    ].join('\n');
  }

  function initProposalForm() {
    const form = $('#proposalForm');
    const output = $('#summaryOutput');
    const downloadButton = $('#downloadSummary');
    let latestSummary = '';
    if (!form || !output || !downloadButton) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        output.value = 'Faltan campos obligatorios. Revise nombre, correo, perfil, tipo, problema y solución propuesta.';
        downloadButton.disabled = true;
        return;
      }
      latestSummary = buildProposalSummary(form);
      output.value = latestSummary;
      downloadButton.disabled = false;
      output.focus();
    });

    downloadButton.addEventListener('click', () => {
      if (!latestSummary) return;
      const blob = new Blob([latestSummary], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      const date = new Date().toISOString().slice(0, 10);
      link.href = url;
      link.download = `propuesta-innovacion-hgf-${date}.txt`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    });
  }

  function initFaqSearch() {
    const searchInput = $('#faqSearch');
    const faqItems = $$('.faq-item');
    const feedback = $('#searchFeedback');
    if (!searchInput) return;

    function normalizeText(text) {
      return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
    }

    searchInput.addEventListener('input', () => {
      const query = normalizeText(searchInput.value.trim());
      let visibleCount = 0;

      faqItems.forEach((item) => {
        const keywords = normalizeText(item.dataset.keywords || '');
        const titleText = normalizeText(item.querySelector('.accordion-button')?.textContent || '');
        const bodyText = normalizeText(item.querySelector('.accordion-body')?.textContent || '');

        const isMatch = keywords.includes(query) || titleText.includes(query) || bodyText.includes(query);
        item.classList.toggle('d-none', !isMatch);
        if (isMatch) visibleCount++;
      });

      if (query === '') {
        feedback.style.display = 'none';
      } else {
        feedback.style.display = 'block';
        if (visibleCount === 0) {
          feedback.textContent = `No se encontraron preguntas para "${searchInput.value}".`;
        } else if (visibleCount === 1) {
          feedback.textContent = `Se encontró 1 pregunta frecuente.`;
        } else {
          feedback.textContent = `Se encontraron ${visibleCount} preguntas frecuentes.`;
        }
      }
    });
  }

  function initFooterYear() {
    const year = $('#year');
    if (year) year.textContent = new Date().getFullYear();
  }

  function initParticles() {
    const canvas = $('#particlesCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const header = canvas.closest('.institutional-bar');
    
    // Configurar canvas
    function resizeCanvas() {
      canvas.width = header.offsetWidth;
      canvas.height = header.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Propiedades de partículas
    const particles = [];
    const particleCount = 8;
    let mouseX = 0;
    let mouseY = 0;

    // Crear partículas
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        radius: Math.random() * 1.5 + 0.8,
        opacity: Math.random() * 0.3 + 0.2
      });
    }

    // Seguimiento del mouse
    document.addEventListener('mousemove', (e) => {
      const headerRect = header.getBoundingClientRect();
      mouseX = e.clientX - headerRect.left;
      mouseY = e.clientY - headerRect.top;
    });

    // Animar partículas
    function animate() {
      // Limpiar canvas manteniendo el gradiente
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Redibujar gradiente
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, 'rgba(0, 94, 162, 0.1)');
      gradient.addColorStop(0.72, 'rgba(0, 94, 162, 0.1)');
      gradient.addColorStop(0.72, 'rgba(216, 37, 61, 0.1)');
      gradient.addColorStop(1, 'rgba(216, 37, 61, 0.1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Atracción hacia el mouse
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          particle.vx += (dx / distance) * 0.15;
          particle.vy += (dy / distance) * 0.15;
        }

        // Aplicar fricción
        particle.vx *= 0.96;
        particle.vy *= 0.96;

        // Actualizar posición
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Rebote en los bordes
        if (particle.x - particle.radius < 0 || particle.x + particle.radius > canvas.width) {
          particle.vx *= -1;
          particle.x = Math.max(particle.radius, Math.min(canvas.width - particle.radius, particle.x));
        }
        if (particle.y - particle.radius < 0 || particle.y + particle.radius > canvas.height) {
          particle.vy *= -1;
          particle.y = Math.max(particle.radius, Math.min(canvas.height - particle.radius, particle.y));
        }

        // Dibujar partícula
        ctx.fillStyle = `rgba(216, 37, 61, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Dibujar líneas conectando partículas cercanas
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 70) {
            ctx.strokeStyle = `rgba(0, 94, 162, ${0.15 * (1 - distance / 70)})`;
            ctx.lineWidth = 0.4;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  }

  document.addEventListener('DOMContentLoaded', () => {
    initNavbarFallback();
    initAccordionFallback();
    initCounters();
    initPortfolioFilters();
    initProposalForm();
    initFaqSearch();
    initFooterYear();
    initParticles();
  });
})();
