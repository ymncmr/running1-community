document.addEventListener('DOMContentLoaded', function () {

  /* ─── Mobile menu ─────────────────────────────────── */
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.contains('open');
      mobileMenu.classList.toggle('open');
      const icon = menuBtn.querySelector('.material-symbols-outlined');
      if (icon) icon.textContent = isOpen ? 'menu' : 'close';
    });
  }

  /* ─── Event filter chips ──────────────────────────── */
  const filterBtns = document.querySelectorAll('[data-filter]');
  const eventCards = document.querySelectorAll('[data-event-type]');

  if (filterBtns.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const filter = this.dataset.filter;

        filterBtns.forEach(function (b) {
          b.classList.remove('bg-primary', 'text-on-primary');
          b.classList.add('bg-surface-container', 'text-on-surface');
        });
        this.classList.add('bg-primary', 'text-on-primary');
        this.classList.remove('bg-surface-container', 'text-on-surface');

        eventCards.forEach(function (card) {
          const parent = card.closest('[data-event-wrapper]');
          const target = parent || card;
          if (filter === 'all' || card.dataset.eventType === filter) {
            target.style.display = '';
          } else {
            target.style.display = 'none';
          }
        });
      });
    });
  }

  /* ─── Interactive Calendar ────────────────────────── */
  const today = new Date();
  let calYear = today.getFullYear();
  let calMonth = today.getMonth();

  const calendarEvents = {
    // May 2026
    '2026-05-05': [{ type: 'community', title: 'BGC City Run 5K' }],
    '2026-05-07': [{ type: 'race', title: 'Pasig Fun Run 10K' }],
    '2026-05-10': [{ type: 'trail', title: 'Rizal Mountain Trail' }],
    '2026-05-13': [{ type: 'community', title: 'Weekly Long Run' }],
    '2026-05-17': [{ type: 'community', title: 'Cebu Tempo Run' }],
    '2026-05-24': [{ type: 'community', title: 'Baguio Long Trail' }],
    '2026-05-26': [{ type: 'race', title: 'Clark Sun Run 21K' }],
    // June 2026
    '2026-06-07': [{ type: 'community', title: 'Weekend Shakeout' }],
    '2026-06-14': [{ type: 'trail', title: 'Nuvali Trail Series' }],
    '2026-06-21': [{ type: 'race', title: 'BGC Midnight Run' }],
    '2026-06-28': [{ type: 'community', title: 'Recovery Long Run' }],
    // April 2026
    '2026-04-05': [{ type: 'race', title: 'Makati 10K Run' }],
    '2026-04-12': [{ type: 'community', title: 'Track Intervals' }],
    '2026-04-19': [{ type: 'trail', title: 'Antipolo Trail Climb' }],
    '2026-04-26': [{ type: 'community', title: 'Recovery Easy Run' }],
    // July 2026
    '2026-07-05': [{ type: 'community', title: 'BGC Sunday Run' }],
    '2026-07-12': [{ type: 'trail', title: 'Mt. Romelo Trail' }],
    '2026-07-19': [{ type: 'race', title: 'Quezon City Marathon' }],
  };

  const typeColors = {
    race: { bg: 'bg-[#2f2fe4]/10', text: 'text-[#1000c7]', dot: '#2f2fe4' },
    trail: { bg: 'bg-[#8397fe]/20', text: 'text-[#273ca0]', dot: '#4256b9' },
    community: { bg: 'bg-[#9b2400]/10', text: 'text-[#721800]', dot: '#9b2400' },
  };

  const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  function renderCalendar() {
    const calGrid = document.getElementById('cal-grid');
    const calTitle = document.getElementById('cal-title');
    if (!calGrid || !calTitle) return;

    calTitle.textContent = MONTHS[calMonth] + ' ' + calYear;

    const firstDay = new Date(calYear, calMonth, 1).getDay();
    const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();

    let html = '';

    for (let i = 0; i < firstDay; i++) {
      html += '<div class="cal-day bg-surface-container-low/30 rounded-lg p-2 border border-transparent opacity-30"></div>';
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const mm = String(calMonth + 1).padStart(2, '0');
      const dd = String(d).padStart(2, '0');
      const dateStr = calYear + '-' + mm + '-' + dd;
      const evs = calendarEvents[dateStr] || [];

      const isToday =
        today.getFullYear() === calYear &&
        today.getMonth() === calMonth &&
        today.getDate() === d;

      const borderCls = isToday
        ? 'border-[#2f2fe4] shadow-[0_4px_12px_rgba(47,47,228,0.12)]'
        : 'border-transparent hover:border-[#2f2fe4]/30';

      const dayNumCls = isToday
        ? 'text-[#1000c7] font-extrabold'
        : 'text-[#454556] group-hover:text-[#1000c7] font-bold';

      const pulseDot = isToday
        ? '<span class="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#2f2fe4] animate-pulse block"></span>'
        : '';

      const evHtml = evs.map(function (e) {
        const c = typeColors[e.type] || typeColors.community;
        return '<div class="mt-1 px-1 py-0.5 ' + c.bg + ' ' + c.text + ' rounded text-[10px] font-semibold leading-tight truncate">' + e.title + '</div>';
      }).join('');

      html += '<div class="cal-day relative bg-[#f5f2ff] rounded-lg p-2 border ' + borderCls + ' transition-colors group cursor-pointer">'
        + pulseDot
        + '<span class="text-base ' + dayNumCls + ' transition-colors">' + d + '</span>'
        + evHtml
        + '</div>';
    }

    calGrid.innerHTML = html;
  }

  const calPrev = document.getElementById('cal-prev');
  const calNext = document.getElementById('cal-next');

  if (calPrev) {
    calPrev.addEventListener('click', function () {
      calMonth--;
      if (calMonth < 0) { calMonth = 11; calYear--; }
      renderCalendar();
    });
  }

  if (calNext) {
    calNext.addEventListener('click', function () {
      calMonth++;
      if (calMonth > 11) { calMonth = 0; calYear++; }
      renderCalendar();
    });
  }

  renderCalendar();

  /* ─── Contact form feedback ───────────────────────── */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = this.querySelector('[type="submit"]');
      const orig = btn.textContent;
      btn.textContent = 'Message Sent!';
      btn.disabled = true;
      btn.classList.add('opacity-60', 'cursor-not-allowed');
      setTimeout(function () {
        btn.textContent = orig;
        btn.disabled = false;
        btn.classList.remove('opacity-60', 'cursor-not-allowed');
        contactForm.reset();
      }, 3000);
    });
  }

  /* ─── Join form feedback ──────────────────────────── */
  const joinForm = document.getElementById('join-form');
  if (joinForm) {
    joinForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = this.querySelector('[type="submit"]');
      const orig = btn.innerHTML;
      btn.innerHTML = '<span>Welcome to the club!</span><span class="material-symbols-outlined" style="font-size:20px">check_circle</span>';
      btn.disabled = true;
      btn.classList.add('opacity-70');
      setTimeout(function () {
        btn.innerHTML = orig;
        btn.disabled = false;
        btn.classList.remove('opacity-70');
        joinForm.reset();
      }, 3500);
    });
  }

});
