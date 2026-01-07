---
layout: page
title: Talks
permalink: /talks/
---

# Talks

{% for talk in site.talks %}
<div class="talk-item">
  <h3><a href="{{ talk.url | relative_url }}">{{ talk.title }}</a></h3>
  <p><strong>{{ talk.venue }}</strong></p>
  <p>{{ talk.date | date: "%B %d, %Y" }}{% if talk.location %} • {{ talk.location }}{% endif %}</p>
  {% if talk.slidesurl %}
  <a href="{{ talk.slidesurl }}" class="btn">Slides</a>
  {% endif %}
</div>
{% endfor %}
