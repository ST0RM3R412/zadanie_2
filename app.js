/* app.js — этап 2: фильтры, состояния, модалка (без тем, toast, skeleton) */
(function () {
  var main = document.getElementById("main-content");
  var filteredCourses = courses.slice();
  var sortKey = null;
  var sortDir = "asc";

  function setActiveNav(section) {
    document.querySelectorAll(".nav__link").forEach(function (link) {
      link.classList.toggle("nav__link--active", link.dataset.section === section);
    });
  }

  function applyCourseFilters() {
    var search = (document.getElementById("filter-search") || {}).value || "";
    var status = (document.getElementById("filter-status") || {}).value || "";
    var levels = [];
    document.querySelectorAll('input[name="level"]:checked').forEach(function (cb) {
      levels.push(cb.value);
    });
    search = search.toLowerCase().trim();

    filteredCourses = courses.filter(function (c) {
      if (status && c.status !== status) return false;
      if (levels.length && levels.indexOf(c.level) === -1) return false;
      if (search) {
        var hay = (c.id + " " + c.title + " " + c.instructor + " " + (c.tags || []).join(" ")).toLowerCase();
        if (hay.indexOf(search) === -1) return false;
      }
      return true;
    });

    if (sortKey) {
      filteredCourses.sort(function (a, b) {
        var va = a[sortKey], vb = b[sortKey];
        if (typeof va === "string") { va = va.toLowerCase(); vb = String(vb).toLowerCase(); }
        if (va < vb) return sortDir === "asc" ? -1 : 1;
        if (va > vb) return sortDir === "asc" ? 1 : -1;
        return 0;
      });
    }
    renderCoursesView();
  }

  function renderCourseFilters() {
    var panel = createEl("aside", "filters filters--bar");
    panel.setAttribute("aria-label", "Фильтры курсов");
    var row = createEl("div", "filters__row");

    var searchWrap = createEl("div", "filter-chip filter-chip--search");
    var searchLabel = createEl("label", "sr-only", "Поиск");
    searchLabel.setAttribute("for", "filter-search");
    searchWrap.appendChild(searchLabel);
    var searchInput = createEl("input", "input input--search");
    searchInput.type = "search";
    searchInput.id = "filter-search";
    searchInput.placeholder = "ID, название, преподаватель…";
    searchInput.addEventListener("input", applyCourseFilters);
    searchWrap.appendChild(searchInput);
    row.appendChild(searchWrap);

    var statusWrap = createEl("div", "filter-chip");
    var select = createEl("select", "select select--chip");
    select.id = "filter-status";
    select.setAttribute("aria-label", "Статус");
    [
      { v: "", t: "Статус: Все" },
      { v: "active", t: "Активен" },
      { v: "draft", t: "Черновик" },
      { v: "archived", t: "Архив" }
    ].forEach(function (opt) {
      var o = createEl("option", null, opt.t);
      o.value = opt.v;
      select.appendChild(o);
    });
    select.addEventListener("change", applyCourseFilters);
    statusWrap.appendChild(select);
    row.appendChild(statusWrap);

    var levelWrap = createEl("div", "filter-chip filter-chip--group");
    levelWrap.appendChild(createEl("span", "filter-chip__label", "Уровень"));
    ["beginner", "intermediate", "advanced"].forEach(function (lv) {
      var wrap = createEl("label", "chip-toggle");
      var input = document.createElement("input");
      input.type = "checkbox";
      input.name = "level";
      input.value = lv;
      input.addEventListener("change", applyCourseFilters);
      wrap.appendChild(input);
      wrap.appendChild(createEl("span", "chip-toggle__text", levelLabel(lv)));
      levelWrap.appendChild(wrap);
    });
    row.appendChild(levelWrap);

    var viewWrap = createEl("div", "filter-chip filter-chip--group");
    viewWrap.appendChild(createEl("span", "filter-chip__label", "Вид"));
    ["cards", "table"].forEach(function (v, i) {
      var wrap = createEl("label", "chip-toggle");
      var input = document.createElement("input");
      input.type = "radio";
      input.name = "view";
      input.value = v;
      if (i === 0) input.checked = true;
      input.addEventListener("change", renderCoursesView);
      wrap.appendChild(input);
      wrap.appendChild(createEl("span", "chip-toggle__text", v === "cards" ? "Карточки" : "Таблица"));
      viewWrap.appendChild(wrap);
    });
    row.appendChild(viewWrap);

    var resetBtn = createEl("button", "btn btn--secondary btn--chip");
    resetBtn.type = "button";
    resetBtn.textContent = "Сбросить";
    resetBtn.addEventListener("click", function () {
      document.getElementById("filter-search").value = "";
      document.getElementById("filter-status").value = "";
      document.querySelectorAll('input[name="level"]').forEach(function (cb) { cb.checked = false; });
      var cardsRadio = document.querySelector('input[name="view"][value="cards"]');
      if (cardsRadio) cardsRadio.checked = true;
      sortKey = null;
      applyCourseFilters();
    });
    row.appendChild(resetBtn);

    panel.appendChild(row);
    return panel;
  }

  function renderCoursesView() {
    var existing = main.querySelector(".orders-wrap");
    if (existing) existing.remove();

    var wrap = createEl("div", "orders-wrap");
    var section = main.querySelector(".section--with-filters");
    var target = section || main;

    if (filteredCourses.length === 0) {
      wrap.appendChild(createEl("p", null, "Курсы не найдены."));
      target.appendChild(wrap);
      return;
    }

    var view = (document.querySelector('input[name="view"]:checked') || {}).value || "cards";

    if (view === "cards") {
      var grid = createEl("div", "cards-grid");
      grid.appendChild(renderCardList(filteredCourses, renderCourseCard));
      wrap.appendChild(grid);
      grid.addEventListener("click", function (e) {
        var card = e.target.closest(".card");
        if (card) openCourseModal(card.dataset.id);
      });
    } else {
      var table = createEl("table", "data-table");
      table.appendChild(createEl("caption", null, "Курсы (" + filteredCourses.length + ")"));
      var thead = createEl("thead");
      var headRow = createEl("tr");
      var cols = [
        { key: "id", title: "ID" },
        { key: "title", title: "Название" },
        { key: "instructor", title: "Преподаватель" },
        { key: "status", title: "Статус" },
        { key: "level", title: "Уровень" },
        { key: "hours", title: "Часы" },
        { key: "startDate", title: "Старт" }
      ];
      cols.forEach(function (col) {
        var th = createEl("th");
        th.setAttribute("scope", "col");
        var btn = createEl("button", "th-sort", col.title);
        btn.type = "button";
        if (sortKey === col.key) {
          btn.textContent = col.title + (sortDir === "asc" ? " ↑" : " ↓");
        }
        btn.addEventListener("click", function () {
          if (sortKey === col.key) sortDir = sortDir === "asc" ? "desc" : "asc";
          else { sortKey = col.key; sortDir = "asc"; }
          applyCourseFilters();
        });
        th.appendChild(btn);
        headRow.appendChild(th);
      });
      thead.appendChild(headRow);
      table.appendChild(thead);
      var tbody = createEl("tbody");
      tbody.appendChild(renderCoursesTableBody(filteredCourses));
      table.appendChild(tbody);
      wrap.appendChild(table);
      tbody.addEventListener("click", function (e) {
        var tr = e.target.closest("tr");
        if (tr && tr.dataset.id) openCourseModal(tr.dataset.id);
      });
    }
    target.appendChild(wrap);
  }

  function showCourses() {
    setActiveNav("courses");
    main.textContent = "";
    var section = createEl("section", "section section--with-filters");
    section.appendChild(createEl("h2", "section__title", "Курсы"));
    section.appendChild(renderCourseFilters());
    main.appendChild(section);
    filteredCourses = courses.slice();
    renderCoursesView();
  }

  function showStudents() {
    setActiveNav("students");
    main.textContent = "";
    var section = createEl("section", "section");
    section.appendChild(createEl("h2", "section__title", "Студенты"));
    var grid = createEl("div", "cards-grid");
    grid.appendChild(renderCardList(students, renderStudentCard));
    section.appendChild(grid);
    grid.addEventListener("click", function (e) {
      var card = e.target.closest(".card");
      if (card) openStudentModal(card.dataset.id);
    });
    main.appendChild(section);
  }

  function showAssignments() {
    setActiveNav("assignments");
    main.textContent = "";
    var section = createEl("section", "section");
    section.appendChild(createEl("h2", "section__title", "Задания"));
    var grid = createEl("div", "cards-grid");
    grid.appendChild(renderCardList(assignments, renderAssignmentCard));
    section.appendChild(grid);
    grid.addEventListener("click", function (e) {
      var card = e.target.closest(".card");
      if (card) openAssignmentModal(card.dataset.id);
    });
    main.appendChild(section);
  }

  function openModal() {
    document.getElementById("detail-modal-overlay").hidden = false;
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    document.getElementById("detail-modal-overlay").hidden = true;
    document.body.style.overflow = "";
  }

  function openCourseModal(id) {
    var c = courses.find(function (x) { return x.id === id; });
    if (!c) return;
    document.getElementById("detail-modal-title").textContent = c.title;
    var body = document.getElementById("detail-modal-body");
    body.textContent = "";
    body.appendChild(createEl("p", null, "ID: " + c.id));
    body.appendChild(createEl("p", null, c.description));
    body.appendChild(createEl("p", null, "Преподаватель: " + c.instructor));
    body.appendChild(createEl("p", null, "Статус: " + statusLabel(c.status)));
    body.appendChild(createEl("p", null, "Уровень: " + levelLabel(c.level)));
    body.appendChild(createEl("p", null, "Часов: " + c.hours));
    openModal();
  }

  function openStudentModal(id) {
    var s = students.find(function (x) { return x.id === id; });
    if (!s) return;
    document.getElementById("detail-modal-title").textContent = s.name;
    var body = document.getElementById("detail-modal-body");
    body.textContent = "";
    body.appendChild(createEl("p", null, "Группа: " + s.group));
    body.appendChild(createEl("p", null, "Email: " + s.email));
    body.appendChild(createEl("p", null, "GPA: " + s.gpa));
    body.appendChild(createEl("p", null, "Статус: " + statusLabel(s.status)));
    openModal();
  }

  function openAssignmentModal(id) {
    var a = assignments.find(function (x) { return x.id === id; });
    if (!a) return;
    document.getElementById("detail-modal-title").textContent = a.title;
    var body = document.getElementById("detail-modal-body");
    body.textContent = "";
    body.appendChild(createEl("p", null, a.description));
    body.appendChild(createEl("p", null, "Курс: " + a.courseTitle));
    body.appendChild(createEl("p", null, "Статус: " + statusLabel(a.status)));
    body.appendChild(createEl("p", null, "Приоритет: " + priorityLabel(a.priority)));
    openModal();
  }

  document.querySelectorAll(".nav__link").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var s = link.dataset.section;
      if (s === "courses") showCourses();
      else if (s === "students") showStudents();
      else if (s === "assignments") showAssignments();
    });
  });

  document.getElementById("detail-modal-close").addEventListener("click", closeModal);
  document.getElementById("detail-modal-ok").addEventListener("click", closeModal);
  document.getElementById("detail-modal-overlay").addEventListener("click", function (e) {
    if (e.target === e.currentTarget) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });

  showCourses();
})();
