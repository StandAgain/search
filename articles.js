var ARTICLES = [
  { slug: 'emotional-range-of-a-spoon-07-05-26',           title: 'How to Have More Than the Emotional Range of a Spoon',                                    tags: ['recovery', 'male-victims'] },
  { slug: 'no-one-is-coming-to-save-you-is-crap-02-05-26', title: 'Why \'No One Is Coming to Save You\' Is Bullshit',                                         tags: ['recovery', 'male-victims'] },
  { slug: 'how-tti-reveals-coervice-control-01-05-26',     title: 'DARVO Is a Sequence, Not a Label: How TTI Reveals the Mechanics of Coercive Control',       tags: ['tti', 'understanding-abuse'] },
  { slug: 'men-need-structure-purpose-and-tools-29-04-26', title: 'Men Need Structure, Purpose and Tools to Heal',                                             tags: ['recovery', 'male-victims', 'guides'] },
  { slug: 'building-your-support-network-23-04-26',        title: 'Building Your Support Team',                                                                tags: ['recovery', 'guides'] },
  { slug: 'the-paper-trail-gap-15-04-26',                  title: 'The Paper Trail Gap',                                                                       tags: ['legal', 'guides'] },
  { slug: 'how-to-tell-your-family-and-friends-07-04-26',  title: 'How to Tell Your Family and Friends',                                                       tags: ['guides', 'male-victims'] },
  { slug: 'architecture-of-silence-02-04-26',              title: 'The Architecture of Silence',                                                               tags: ['male-victims'] },
  { slug: 'don-t-prove-she-s-a-narcissist-31-03-26',       title: "Don't Prove She's a Narcissist",                                                            tags: ['understanding-abuse', 'recovery'] },
  { slug: 'lawyers-document-coercive-control-28-03-26',    title: 'How Lawyers Can Document Coercive Control',                                                 tags: ['legal', 'tti'] },
  { slug: 'preparing-for-a-family-report-24-03-26',        title: 'Preparing for a Family Report',                                                             tags: ['legal', 'parenting', 'guides'] },
  { slug: 'narrow-corridor-22-01-26',                      title: 'The Narrow Corridor',                                                                       tags: ['parenting', 'divorce'] },
  { slug: 'handover-grief-11-01-26',                       title: 'Handover Grief',                                                                            tags: ['parenting', 'divorce'] },
  { slug: 'the-double-bind-26-12-25',                      title: 'The Double Bind',                                                                           tags: ['understanding-abuse'] },
  { slug: 'dealing-with-false-allegations-18-12-25',       title: 'Dealing with False Allegations',                                                            tags: ['legal', 'guides', 'divorce'] },
  { slug: 'guide-to-respond-dont-react-08-11-25',          title: "Respond Don't React",                                                                       tags: ['guides', 'recovery'] },
  { slug: 'myths-that-silence-male-victims-11-09-25',      title: 'Myths That Silence Male Victims',                                                           tags: ['male-victims', 'understanding-abuse'] },
  { slug: 'the-bitterness-trap-27-08-25',                  title: 'The Bitterness Trap',                                                                       tags: ['recovery'] },
  { slug: 'hold-it-together-during-divorce-20-08-25',      title: 'Hold it Together During Divorce',                                                           tags: ['divorce', 'recovery', 'guides'] },
  { slug: 'the-masks-they-wear-31-07-25',                  title: 'The Masks They Wear',                                                                       tags: ['understanding-abuse'] },
  { slug: 'why-do-they-abuse-11-07-25',                    title: 'Why Do They Abuse?',                                                                        tags: ['understanding-abuse'] },
  { slug: 'ways-men-get-tricked-into-abuse-08-07-25',      title: 'Ways Men Get Tricked Into Abuse',                                                           tags: ['understanding-abuse', 'male-victims'] },
  { slug: '8-internal-signs-of-abuse-08-07-25',            title: '8 Internal Signs of Abuse',                                                                 tags: ['understanding-abuse', 'guides'] }
];

(function() {
  if (!window.location.pathname.match(/\/articles-and-blogs\/?$/)) return;

  var TAG_CONFIG = {
    'guides':              { label: 'Guides',              bg: '#E6F1FB', color: '#0C447C' },
    'divorce':             { label: 'Divorce',             bg: '#FAEEDA', color: '#633806' },
    'parenting':           { label: 'Parenting',           bg: '#EAF3DE', color: '#27500A' },
    'recovery':            { label: 'Recovery',            bg: '#EEEDFE', color: '#3C3489' },
    'understanding-abuse': { label: 'Understanding abuse', bg: '#FAECE7', color: '#712B13' },
    'legal':               { label: 'Legal & court',       bg: '#F1EFE8', color: '#444441' },
    'tti':                 { label: 'TTI framework',       bg: '#FBEAF0', color: '#72243E' },
    'male-victims':        { label: 'Male victims',        bg: '#E1F5EE', color: '#085041' }
  };

  function makeTagPill(tagKey) {
    var cfg = TAG_CONFIG[tagKey];
    if (!cfg) return null;
    var span = document.createElement('span');
    span.textContent = cfg.label;
    span.style.cssText = 'display:inline-block;font-size:11px;padding:2px 8px;border-radius:12px;margin:2px 4px 2px 0;background:' + cfg.bg + ';color:' + cfg.color + ';font-weight:500;line-height:1.6;';
    return span;
  }

  function getSlugFromHref(href) {
    var m = href.match(/\/articles-and-blogs\/([^\/]+)/);
    return m ? m[1].replace(/\/$/, '') : null;
  }

  function findArticleBySlug(slug) {
    for (var i = 0; i < ARTICLES.length; i++) {
      if (ARTICLES[i].slug === slug) return ARTICLES[i];
    }
    return null;
  }

  document.addEventListener('DOMContentLoaded', function() {
    var allLinks = document.querySelectorAll('a[href*="/articles-and-blogs/"]');
    var articleLinks = [];

    allLinks.forEach(function(link) {
      var slug = getSlugFromHref(link.href);
      if (!slug) return;
      var article = findArticleBySlug(slug);
      if (!article) return;
      if (link.closest('nav') || link.closest('header')) return;

      var wrapper = link.parentElement;
      var tagContainer = document.createElement('div');
      tagContainer.style.cssText = 'margin:2px 0 8px;line-height:1;';
      tagContainer.className = 'sa-tags';

      article.tags.forEach(function(tagKey) {
        var pill = makeTagPill(tagKey);
        if (pill) tagContainer.appendChild(pill);
      });

      if (wrapper && wrapper !== document.body) {
        wrapper.appendChild(tagContainer);
        wrapper.setAttribute('data-sa-tags', article.tags.join(','));
        wrapper.setAttribute('data-sa-article', 'true');
      } else {
        link.insertAdjacentElement('afterend', tagContainer);
        link.setAttribute('data-sa-tags', article.tags.join(','));
        link.setAttribute('data-sa-article', 'true');
      }

      articleLinks.push(wrapper && wrapper !== document.body ? wrapper : link);
    });

    if (articleLinks.length === 0) return;

    var filterBar = document.createElement('div');
    filterBar.style.cssText = 'margin:0 0 20px;display:flex;flex-wrap:wrap;gap:6px;';

    var allBtn = document.createElement('button');
    allBtn.textContent = 'All';
    allBtn.style.cssText = 'font-size:12px;padding:4px 14px;border-radius:16px;border:1.5px solid #444;background:#444;color:#fff;cursor:pointer;font-weight:500;';
    allBtn.setAttribute('data-filter', 'all');
    filterBar.appendChild(allBtn);

    Object.keys(TAG_CONFIG).forEach(function(key) {
      var cfg = TAG_CONFIG[key];
      var btn = document.createElement('button');
      btn.textContent = cfg.label;
      btn.style.cssText = 'font-size:12px;padding:4px 14px;border-radius:16px;border:1.5px solid ' + cfg.color + ';background:transparent;color:' + cfg.color + ';cursor:pointer;font-weight:500;';
      btn.setAttribute('data-filter', key);
      btn.setAttribute('data-bg', cfg.bg);
      btn.setAttribute('data-color', cfg.color);
      filterBar.appendChild(btn);
    });

    var firstArticle = articleLinks[0];
    firstArticle.parentElement.insertBefore(filterBar, firstArticle);

    var activeFilter = 'all';

    filterBar.addEventListener('click', function(e) {
      var btn = e.target.closest('button');
      if (!btn) return;
      var filter = btn.getAttribute('data-filter');

      filterBar.querySelectorAll('button').forEach(function(b) {
        if (b.getAttribute('data-filter') === 'all') {
          b.style.background = 'transparent';
          b.style.color = '#444';
        } else {
          b.style.background = 'transparent';
          b.style.color = b.getAttribute('data-color');
        }
      });

      if (filter === 'all') {
        btn.style.background = '#444';
        btn.style.color = '#fff';
      } else {
        btn.style.background = btn.getAttribute('data-bg');
        btn.style.color = btn.getAttribute('data-color');
      }

      activeFilter = filter;

      articleLinks.forEach(function(el) {
        var tags = el.getAttribute('data-sa-tags') || '';
        if (filter === 'all' || tags.indexOf(filter) !== -1) {
          el.style.display = '';
        } else {
          el.style.display = 'none';
        }
      });
    });
  });
})();
