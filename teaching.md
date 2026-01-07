---
layout: page
title: Teaching
permalink: /teaching/
---

# Teaching

{% for course in site.teaching %}
<div class="teaching-item">
  <h3><a href="{{ course.url | relative_url }}">{{ course.title }}</a></h3>
  {% if course.course_code %}
  <p><strong>Course Code:</strong> {{ course.course_code }}</p>
  {% endif %}
  {% if course.term %}
  <p><strong>Term:</strong> {{ course.term }}</p>
  {% endif %}
  {% if course.role %}
  <p><strong>Role:</strong> {{ course.role }}</p>
  {% endif %}
</div>
{% endfor %}
