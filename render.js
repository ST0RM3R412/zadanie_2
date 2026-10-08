/* render.js — чистые функции рендера, без innerHTML для данных */

function createEl(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text != null) el.textContent = text;
  return el;
}

function formatDate(iso) {
  if (!iso) return "—";
  const d = new Date(iso);
  return d.toLocaleDateString("ru-RU", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function statusLabel(status) {
  const map = {
    active: "Активен",
    draft: "Черновик",
    archived: "Архив",
    graduated: "Выпускник",
    suspended: "Отчислен",
    pending: "Ожидает",
    submitted: "Сдано",
    graded: "Оценено",
    overdue: "Просрочено"
  };
  return map[status] || status;
}

function levelLabel(level) {
  const map = { beginner: "Начальный", intermediate: "Средний", advanced: "Продвинутый" };
  return map[level] || level;
}

function priorityLabel(p) {
  const map = { high: "Высокий", medium: "Средний", low: "Низкий" };
  return map[p] || p;
}

function renderStatusBadge(status) {
  const badge = createEl("span", "badge badge--" + status, statusLabel(status));
  return badge;
}

function renderCourseCard(course) {
  const card = createEl("article", "card");
  card.dataset.id = course.id;

  const header = createEl("header", "card__header");
  header.appendChild(createEl("span", "card__id", course.id));
  header.appendChild(createEl("h3", "card__title", course.title));
  header.appendChild(renderStatusBadge(course.status));
  card.appendChild(header);

  const body = createEl("div", "card__body");
  body.appendChild(createEl("p", "card__desc", course.description));
  body.appendChild(createEl("p", null, "Преподаватель: " + course.instructor));
  body.appendChild(createEl("p", null, "Уровень: " + levelLabel(course.level)));
  body.appendChild(createEl("p", null, "Часов: " + course.hours));
  card.appendChild(body);

  const meta = createEl("footer", "card__meta");
  const time = createEl("time", null, formatDate(course.startDate));
  time.setAttribute("datetime", course.startDate);
  meta.appendChild(time);
  const tags = createEl("div", "card__tags");
  (course.tags || []).forEach(function (t) {
    tags.appendChild(createEl("span", "tag", t));
  });
  meta.appendChild(tags);
  card.appendChild(meta);

  return card;
}

function renderStudentCard(student) {
  const card = createEl("article", "card");
  card.dataset.id = student.id;

  const header = createEl("header", "card__header");
  header.appendChild(createEl("span", "card__id", student.id));
  header.appendChild(createEl("h3", "card__title", student.name));
  header.appendChild(renderStatusBadge(student.status));
  card.appendChild(header);

  const body = createEl("div", "card__body");
  body.appendChild(createEl("p", null, "Группа: " + student.group));
  body.appendChild(createEl("p", null, "Email: " + student.email));
  body.appendChild(createEl("p", null, "GPA: " + student.gpa));
  body.appendChild(createEl("p", null, "Курсов: " + (student.courses ? student.courses.length : 0)));
  card.appendChild(body);

  const meta = createEl("footer", "card__meta");
  const time = createEl("time", null, formatDate(student.enrollmentDate));
  time.setAttribute("datetime", student.enrollmentDate);
  meta.appendChild(time);
  meta.appendChild(createEl("span", null, student.city));
  card.appendChild(meta);

  return card;
}

function renderAssignmentCard(asn) {
  const card = createEl("article", "card");
  card.dataset.id = asn.id;

  const header = createEl("header", "card__header");
  header.appendChild(createEl("span", "card__id", asn.id));
  header.appendChild(createEl("h3", "card__title", asn.title));
  header.appendChild(renderStatusBadge(asn.status));
  card.appendChild(header);

  const body = createEl("div", "card__body");
  body.appendChild(createEl("p", "card__desc", asn.description));
  body.appendChild(createEl("p", null, "Курс: " + asn.courseTitle));
  body.appendChild(createEl("p", null, "Макс. балл: " + asn.maxScore));
  body.appendChild(createEl("p", null, "Сдано: " + asn.submissions));
  card.appendChild(body);

  const meta = createEl("footer", "card__meta");
  const time = createEl("time", null, formatDate(asn.dueDate));
  time.setAttribute("datetime", asn.dueDate);
  meta.appendChild(time);
  meta.appendChild(createEl("span", "priority priority--" + asn.priority, priorityLabel(asn.priority)));
  card.appendChild(meta);

  return card;
}

function renderCardList(items, renderFn) {
  const frag = document.createDocumentFragment();
  items.forEach(function (item) {
    frag.appendChild(renderFn(item));
  });
  return frag;
}

function renderCoursesTableBody(list) {
  const frag = document.createDocumentFragment();
  list.forEach(function (c) {
    const tr = createEl("tr");
    tr.dataset.id = c.id;

    const tdId = createEl("td", null, c.id);
    tdId.setAttribute("data-label", "ID");
    tr.appendChild(tdId);

    const tdTitle = createEl("td", null, c.title);
    tdTitle.setAttribute("data-label", "Название");
    tr.appendChild(tdTitle);

    const tdInst = createEl("td", null, c.instructor);
    tdInst.setAttribute("data-label", "Преподаватель");
    tr.appendChild(tdInst);

    const tdStatus = createEl("td");
    tdStatus.setAttribute("data-label", "Статус");
    tdStatus.appendChild(renderStatusBadge(c.status));
    tr.appendChild(tdStatus);

    const tdLevel = createEl("td", null, levelLabel(c.level));
    tdLevel.setAttribute("data-label", "Уровень");
    tr.appendChild(tdLevel);

    const tdHours = createEl("td", null, String(c.hours));
    tdHours.setAttribute("data-label", "Часы");
    tr.appendChild(tdHours);

    const tdDate = createEl("td");
    tdDate.setAttribute("data-label", "Старт");
    const t = createEl("time", null, formatDate(c.startDate));
    t.setAttribute("datetime", c.startDate);
    tdDate.appendChild(t);
    tr.appendChild(tdDate);

    frag.appendChild(tr);
  });
  return frag;
}
