# Victoria Rubi Bonet - Psicología Website

A professional psychology practice website built with Jekyll, inspired by academicpages template and designed for Victoria Rubi Bonet's practice in Valencia.

## Features

- **Professional Design**: Clean, modern design optimized for a psychology practice
- **Calendly Integration**: Direct booking integration with Calendly
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Built-in SEO tags and sitemap generation
- **Easy Content Management**: Simple Markdown-based content management

## Setup Instructions

### Prerequisites

- Ruby (2.7 or higher)
- Bundler
- Node.js (optional, for local development)

### Local Development

1. Install dependencies:
```bash
bundle install
```

2. Serve the site locally:
```bash
bundle exec jekyll serve
```

3. Visit `http://localhost:4000` in your browser

### Configuration

Edit `_config.yml` to customize:
- Site title and description
- Contact information (email, phone, location)
- Calendly URL
- Social media links
- College number

### Content Pages

- **About** (`_pages/about.md`): Your professional profile
- **Services** (`_pages/services.md`): Services offered
- **Testimonials** (`_pages/testimonials.md`): Client testimonials
- **Contact** (`_pages/contact.md`): Contact information and Calendly widget

### Calendly Integration

The Calendly integration is configured in `_config.yml`:
```yaml
calendly_url: "https://calendly.com/victoriarubipsicologia/30min"
```

The contact page includes an embedded Calendly widget that will automatically load your booking calendar.

## Deployment

### GitHub Pages

1. Create a new repository on GitHub
2. Push this code to the repository
3. In repository settings, enable GitHub Pages
4. Select the main branch as the source
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Custom Domain

1. Add a `CNAME` file in the root directory with your domain name
2. Configure DNS settings with your domain provider
3. Update the `url` in `_config.yml` to match your domain

## Customization

### Colors

The main color scheme uses `#2c5f7c` (blue) as the primary color. You can customize this in `assets/css/main.css` by searching for color values.

### Navigation

Edit `_data/navigation.yml` to add, remove, or reorder menu items.

### Styling

All styles are in `assets/css/main.css`. The design is modular and easy to customize.

## License

This website template is free to use and modify for your own purposes.

## Support

For Jekyll documentation, visit: https://jekyllrb.com/docs/
