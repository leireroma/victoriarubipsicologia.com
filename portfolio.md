---
layout: page
title: Portfolio
permalink: /portfolio/
---

# Portfolio

{% for project in site.portfolio %}
<div class="portfolio-item">
  <h3><a href="{{ project.url | relative_url }}">{{ project.title }}</a></h3>
  {% if project.date %}
  <p>{{ project.date | date: "%Y" }}</p>
  {% endif %}
  <p>{{ project.excerpt }}</p>
  {% if project.projecturl %}
  <a href="{{ project.projecturl }}" class="btn">View Project</a>
  {% endif %}
</div>
{% endfor %}
