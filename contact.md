---
layout: page
title: Contacto
permalink: /contact/
---

# Contacto

## No importa cuál sea tu inquietud o problema, estaré encantada de ayudarte.

<div class="contact-info">
  {% if site.phone %}
  <div class="contact-item">
    <h3>Teléfono</h3>
    <p><a href="tel:{{ site.phone }}">{{ site.phone }}</a></p>
  </div>
  {% endif %}

  {% if site.email %}
  <div class="contact-item">
    <h3>Email</h3>
    <p><a href="mailto:{{ site.email }}">{{ site.email }}</a></p>
  </div>
  {% endif %}

  {% if site.location %}
  <div class="contact-item">
    <h3>Ubicación</h3>
    <p>{{ site.location }}</p>
  </div>
  {% endif %}
</div>

## Reserva tu Cita

Puedes reservar tu cita directamente a través de Calendly. La primera consulta es de 30 minutos y es una oportunidad perfecta para conocernos y evaluar cómo puedo ayudarte.

<div class="calendly-section">
  <a href="{{ site.calendly_url }}" class="btn btn-hero" target="_blank">Reservar Cita en Calendly</a>
  
  <!-- Calendly inline widget -->
  <div class="calendly-inline-widget" data-url="{{ site.calendly_url }}" style="min-width:320px;height:630px;margin-top:30px;"></div>
  <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
</div>

## Horarios de Atención

- **Lunes a Viernes**: 9:00 - 20:00
- **Sábados**: Consulta previa cita
- **Domingos**: Cerrado

## Modalidades

- **Presencial**: Consulta en Valencia
- **Online**: Sesiones por videollamada

¡Espero conocerte pronto!
