let article = {
  title: "Why Accessibility Matters in UI UX Design",
  date: "May 25, 2023",
  description: "Accessibility is a word that is often thrown around in the design field. As a UI/UX Web Designer, you might have heard this word a few times and you might wonder why it's important."
}

let title = document.getElementById("title");
let date = document.getElementById("date");
let description = document.getElementById("description");

title.textContent = article.title;
date.textContent = article.date;
description.textContent = article.description;

let article2 = {
  title: "Web Accessibility – Common ARIA Mistakes to Avoid",
  date: "January 11, 2023",
  description: "Accessible Rich Internet Applications – or ARIA – is a set of attributes and roles defined by the Web Accessibility Initiative. These make the web more accessible to people with disabilities."
}

let title2 = document.getElementById("title2");
let date2 = document.getElementById("date2");
let description2 = document.getElementById("description2");

title2.textContent = article2.title;
date2.textContent = article2.date;
description2.textContent = article2.description;
