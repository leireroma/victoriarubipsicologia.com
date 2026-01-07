---
layout: page
title: Publications
permalink: /publications/
---

# Publications

## Journal Articles

{% for publication in site.publications %}
  {% if publication.type == 'journal' %}
  <div class="publication-item">
    <h3><a href="{{ publication.url | relative_url }}">{{ publication.title }}</a></h3>
    <p>{{ publication.authors }}</p>
    <p><em>{{ publication.venue }}</em>, {{ publication.date | date: "%Y" }}</p>
    {% if publication.paperurl %}
    <a href="{{ publication.paperurl }}" class="btn">Paper</a>
    {% endif %}
  </div>
  {% endif %}
{% endfor %}

## Conference Papers

{% for publication in site.publications %}
  {% if publication.type == 'conference' %}
  <div class="publication-item">
    <h3><a href="{{ publication.url | relative_url }}">{{ publication.title }}</a></h3>
    <p>{{ publication.authors }}</p>
    <p><em>{{ publication.venue }}</em>, {{ publication.date | date: "%Y" }}</p>
    {% if publication.paperurl %}
    <a href="{{ publication.paperurl }}" class="btn">Paper</a>
    {% endif %}
  </div>
  {% endif %}
{% endfor %}
