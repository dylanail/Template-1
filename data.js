// Client data — swap this file to rebrand the whole site.
window.SITE_DATA = {
  business: {
    name: "Redwood & Co. Painters",
    short_name: "Redwood & Co.",
    tagline: "Interior & exterior painting, done properly.",
    phone: "(503) 555-0142",
    phone_href: "tel:+15035550142",
    sms_number: "(503) 555-0143",
    sms_href: "sms:+15035550143",
    email: "hello@redwoodpainters.co",
    address: "2418 SE Division St, Portland, OR 97202",
    address_short: "Portland, OR",
    service_area: [
      "Portland", "Beaverton", "Lake Oswego", "Tigard", "Milwaukie",
      "West Linn", "Gresham", "Hillsboro", "Tualatin", "Oregon City",
      "Happy Valley", "Sherwood", "Wilsonville", "Clackamas"
    ],
    primary_city: "Portland",
    primary_state: "OR",
    hours: [
      { day: "Mon–Fri", time: "7:00 AM – 6:00 PM" },
      { day: "Saturday", time: "8:00 AM – 2:00 PM" },
      { day: "Sunday", time: "Closed" }
    ],
    year_founded: 2008,
    years_in_business: 18,
    license_number: "OR CCB #198422",
    insurance_carrier: "Liberty Mutual — $2M liability",
    review_count: 412,
    avg_rating: 4.9,
    facebook_url: "https://facebook.com/redwoodpainters",
    instagram_url: "https://instagram.com/redwoodpainters"
  },

  services: [
    {
      slug: "interior-painting",
      name: "Interior Painting",
      short_description: "Crisp walls, smooth trim, and zero mess. We tape, drop, and cut like it's our own house — because we treat it that way.",
      long_description: "Interior painting is 80% prep. We spend the first day pulling outlet covers, filling nail holes, caulking trim gaps, and sanding anything that isn't dead-flat. Then we paint — two coats of Benjamin Moore Regal or Sherwin-Williams Emerald, brushed and rolled by hand. No sprayers indoors unless you ask. We protect floors with rosin paper and canvas drops, move furniture, and leave every room tidier than we found it.",
      hero_image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1600&q=80",
      whats_included: [
        "Full surface prep — sanding, patching, caulking",
        "Benjamin Moore or Sherwin-Williams paint, two coats",
        "Cut-in by hand at all trim, ceilings, corners",
        "Outlet covers and switch plates removed and reinstalled",
        "Daily cleanup, furniture moved and covered",
        "Final walkthrough and touch-ups before we leave"
      ],
      differentiators: [
        { title: "Two coats, every time", detail: "One-coat jobs are a shortcut we don't take. Every color gets two full coats for depth and coverage." },
        { title: "Hand-brushed trim", detail: "We don't spray trim in occupied homes. Brushed trim looks better, lasts longer, and doesn't overspray your furniture." },
        { title: "Same crew, start to finish", detail: "The painter who starts your job finishes it. No rotating subs, no mystery hands on your walls." }
      ],
      faqs: [
        { question: "How long does a typical interior job take?", answer: "A single room is usually one day. A full main floor takes three to five days depending on trim and cut-ins. We give you a per-day schedule in writing before we start." },
        { question: "Do we need to move out?", answer: "No. We work one room at a time, cover everything, and ventilate well. Most clients stay home the whole job." },
        { question: "Do you move furniture?", answer: "Yes, included. We move it to the middle of the room, cover it, and put it back each evening." },
        { question: "What brand of paint do you use?", answer: "Benjamin Moore Regal Select or Sherwin-Williams Emerald by default. Both are top-tier washable finishes. Happy to use your preferred brand if you have one." }
      ]
    },
    {
      slug: "exterior-painting",
      name: "Exterior Painting",
      short_description: "Weather-ready finishes on siding, trim, and doors. We pressure wash, scrape, prime bare wood, and coat with paint rated for the Pacific Northwest.",
      long_description: "Pacific Northwest weather is brutal on exterior paint. Moss, UV, driving rain, and freeze-thaw cycles will find any weakness in a finish. We start every exterior job with a soft pressure wash, then scrape loose paint down to a sound edge, spot-prime bare wood with Zinsser Cover-Stain, and caulk every joint. Two topcoats of Sherwin-Williams Duration or Benjamin Moore Aura go on in fair weather only — we won't paint in the rain or on damp siding.",
      hero_image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
      whats_included: [
        "Soft pressure wash of all painted surfaces",
        "Scrape, sand, and spot-prime bare wood",
        "Caulk all joints, seams, and nail holes",
        "Two coats of Sherwin-Williams Duration or BM Aura",
        "Trim, fascia, and gutter boards included",
        "Landscaping protected and plants hand-watered post-wash"
      ],
      differentiators: [
        { title: "We don't paint wet siding", detail: "Moisture meter on every job. If siding reads above 15%, we wait. Paint on wet wood peels within a year." },
        { title: "Local climate-rated coatings", detail: "We specify mildew-resistant, UV-stable paint lines that actually hold up in Oregon winters." },
        { title: "5-year workmanship warranty", detail: "If anything peels, bubbles, or fails within 5 years due to our work, we come back and fix it. Free." }
      ],
      faqs: [
        { question: "When is the best time to paint an exterior in Portland?", answer: "Mid-May through late September is the safe window. We book that season 3-4 months out, so call early." },
        { question: "How long will the paint last?", answer: "Properly prepped, 10-12 years on siding, 7-10 on south-facing trim. We warranty the work for 5." },
        { question: "Do you do lead paint?", answer: "Yes. We're EPA RRP-certified for homes built before 1978. We contain, collect, and dispose of lead-contaminated debris per federal rules." }
      ]
    },
    {
      slug: "cabinet-refinishing",
      name: "Cabinet Refinishing",
      short_description: "A new kitchen for a fraction of a remodel. We remove, spray, and reinstall cabinet doors in a dust-controlled spray booth.",
      long_description: "Kitchen cabinet refinishing is its own craft — and most painters shouldn't touch it. We remove every door and drawer front, label them, and take them to our dust-controlled spray shop. There they get sanded, degreased, primed with a bonding primer, and sprayed with 2-3 coats of Sherwin-Williams Emerald Urethane Trim Enamel. The result is a factory-smooth finish that rivals new cabinets. Boxes stay in place and get the same prep + spray treatment on-site with full containment.",
      hero_image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80",
      whats_included: [
        "Remove, label, transport doors/drawers to our shop",
        "Degrease, sand, bond-prime all surfaces",
        "2-3 coats of Emerald Urethane sprayed in booth",
        "On-site containment for boxes (no dust in kitchen)",
        "New hinges and bumpers installed",
        "Reinstall and adjust every door"
      ],
      differentiators: [
        { title: "Off-site spray booth", detail: "Doors are sprayed in our dust-free shop, not in your garage. You get a factory finish, not a driveway finish." },
        { title: "Urethane, not latex", detail: "We use urethane trim enamel — it cures hard like furniture and doesn't chip when you bump it with a pan." },
        { title: "One-week turnaround", detail: "From the day we pull doors, you're back to a working kitchen in 5-7 days. We plan every job around your meals." }
      ],
      faqs: [
        { question: "Can you change the cabinet color?", answer: "Yes. Any color you can match — white, cream, sage, navy, charcoal are the most popular. We recommend sampling on a door first." },
        { question: "How long before I can use the kitchen?", answer: "Boxes are usable 24 hours after the last coat. Doors return 5-7 days later fully cured." },
        { question: "Will it hold up to daily use?", answer: "Urethane enamel is the same coating on high-end factory cabinets. With normal use it lasts 10+ years." }
      ]
    },
    {
      slug: "deck-fence-staining",
      name: "Deck & Fence Staining",
      short_description: "Semi-transparent and solid stain that actually sticks. We strip, brighten, and apply stain by brush — no roller shortcuts.",
      long_description: "Most failed deck stains come from bad prep. We strip the old finish with a sodium-hydroxide stripper, neutralize with a brightener, and let the wood dry for 48 hours before we apply anything. Then we brush — not roll — Penofin, TWP, or Sherwin-Williams SuperDeck into the grain. Brushing forces stain into the pores; rolling leaves it sitting on top where it peels within a year.",
      hero_image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=80",
      whats_included: [
        "Strip existing finish with professional stripper",
        "Brighten and neutralize wood pH",
        "48-hour dry time before stain application",
        "Hand-brushed application into wood grain",
        "Penofin, TWP, or SuperDeck — semi-trans or solid",
        "Railings, balusters, stairs, and fence included"
      ],
      differentiators: [
        { title: "Brushed, not rolled", detail: "We brush every board. It's slower, but stain only lasts when it's forced into the grain." },
        { title: "Moisture-tested wood", detail: "We won't stain above 15% moisture content. Guaranteed adhesion." },
        { title: "Annual check-ups", detail: "We swing by year one for a free inspection and touch-up any high-wear spots." }
      ],
      faqs: [
        { question: "How often will my deck need re-staining?", answer: "Semi-transparent: 2-3 years on horizontal surfaces, 4-5 on vertical. Solid stain: 5-7 years. Shade and traffic matter." },
        { question: "Can you stain pressure-treated wood?", answer: "Yes, but it needs to dry 4-6 months after install before it accepts stain. We can test it for you." }
      ]
    },
    {
      slug: "commercial-painting",
      name: "Commercial Painting",
      short_description: "Offices, retail, multifamily. After-hours and weekend schedules so your business doesn't pause.",
      long_description: "Commercial work is about schedule and discipline. We paint after hours, on weekends, or in phases — whatever keeps your doors open. Our crews are W-2 employees with background checks, uniforms, and job-site safety training. We carry $2M liability, name you as an additional insured on request, and provide certificates of insurance before the first drop cloth hits the floor.",
      hero_image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
      whats_included: [
        "After-hours and weekend scheduling available",
        "W-2 employees, background-checked, uniformed",
        "$2M liability, additional-insured certs on request",
        "Phased painting for occupied spaces",
        "Low-VOC and zero-VOC coatings available",
        "Property management portfolios welcome"
      ],
      differentiators: [
        { title: "Night crews", detail: "We run a dedicated night shift May–October. Offices painted 6pm–6am, fully cleaned before your team arrives." },
        { title: "Dedicated PM per project", detail: "One project manager, one point of contact, daily email updates." },
        { title: "Master service agreements", detail: "Property managers: we'll set up a standing MSA with pre-negotiated rates across your portfolio." }
      ],
      faqs: [
        { question: "Can you paint during business hours?", answer: "Usually not recommended for occupied space. We prefer after 6pm or weekends. Happy to quote both if you want to compare." },
        { question: "Do you do multi-family / apartment turns?", answer: "Yes, and we're fast. 1-bedroom turn in 4 hours, 2-bedroom in 6. Volume pricing for 10+ units/year." }
      ]
    }
  ],

  main_service_slug: "interior-painting",

  process_steps: [
    { step: "01", title: "Walk-through", detail: "We come out, measure every wall, and talk through color and finish. 45 minutes, no pressure." },
    { step: "02", title: "Written estimate", detail: "A fixed-price quote in your inbox within 48 hours. Itemized, no surprises." },
    { step: "03", title: "Schedule", detail: "We book 2-4 weeks out. You pick the start date, we show up that morning at 7:30." },
    { step: "04", title: "Prep day", detail: "Day one is all prep — covering, patching, sanding, caulking. No paint yet." },
    { step: "05", title: "Paint", detail: "Two coats, cut by hand, rolled into every surface. Daily photos sent to you." },
    { step: "06", title: "Walkthrough", detail: "We walk the job with you, fix anything on the list, and don't leave until you're happy." }
  ],

  differentiators: [
    { title: "Eighteen years, one zip code", detail: "We only work within 30 miles of SE Portland. Most of our crew grew up here. We know the houses, the weather, and the building stock." },
    { title: "W-2 employees, not subs", detail: "Every painter on your job is on our payroll. Paid properly, trained by us, accountable to you." },
    { title: "Fixed-price quotes", detail: "No hourly surprises. You get a number in writing, and that's the number. Change orders signed in advance, never after." },
    { title: "5-year workmanship warranty", detail: "We stand behind every job for five years. If something fails because of our work, we come back and fix it." }
  ],

  team: [
    { name: "Mara Okafor", role: "Owner & Lead Estimator", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80", bio: "Took over Redwood in 2014 from her dad. Runs the quotes, crews, and the coffee run." },
    { name: "Ben Castillo", role: "Interior Crew Lead", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80", bio: "Twelve years with Redwood. Can cut a straight line without tape. Weekend mandolin player." },
    { name: "Jenna Park", role: "Cabinet Shop Manager", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80", bio: "Runs the spray booth. Previously built custom furniture. Has strong opinions about sheen." },
    { name: "Terrence Moll", role: "Exterior Crew Lead", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80", bio: "Seven summers on ladders. EPA RRP lead-certified. Knows every house in Laurelhurst." }
  ],

  testimonials: [
    { author: "Sarah K.", rating: 5, text: "Redwood painted our whole main floor and I swear the house feels bigger now. Crew was polite, on time, and cleaned up every single day. No paint smell when I got home — they ventilate properly. Worth every dollar.", date: "2026-03-14", service_tagged: "interior-painting", neighborhood: "Laurelhurst" },
    { author: "Mike & Dana R.", rating: 5, text: "Exterior on our 1912 craftsman. Other quotes told us to vinyl-wrap it. Redwood scraped, primed, and painted the original siding and it looks spectacular. Four years in and not a single peel.", date: "2026-02-28", service_tagged: "exterior-painting", neighborhood: "Irvington" },
    { author: "Priya N.", rating: 5, text: "Cabinets were sprayed off-site in their shop. The finish is so smooth I thought they replaced the doors. Took exactly the week they said it would. Kitchen was useable on day two.", date: "2026-01-22", service_tagged: "cabinet-refinishing", neighborhood: "Alameda" },
    { author: "Dave L.", rating: 5, text: "Mara came out, measured everything, emailed a fixed quote 36 hours later. The quote was the final invoice. No surprise charges. That alone earns repeat business from me.", date: "2026-01-08", service_tagged: "interior-painting", neighborhood: "Hawthorne" },
    { author: "Aisha T.", rating: 5, text: "Deck was gray and splintering. They stripped it, brightened the wood, and brush-stained it to a warm cedar tone. Looks brand new. Neighbors asked who did it — three of them have already hired Redwood.", date: "2025-11-15", service_tagged: "deck-fence-staining", neighborhood: "Sellwood" },
    { author: "Josh W.", rating: 5, text: "We manage 240 units. Redwood has handled our paint turns for two years. Fast, consistent, never a callback. They're a keeper.", date: "2025-10-02", service_tagged: "commercial-painting", neighborhood: "Pearl District" },
    { author: "Hannah B.", rating: 4, text: "Great work on our bedrooms and hallway. One small missed touch-up near a window, but they came back the next day and fixed it without a fuss. Will hire again.", date: "2025-09-18", service_tagged: "interior-painting", neighborhood: "Mt. Tabor" },
    { author: "Rob A.", rating: 5, text: "They painted our fence and built a matching gate. Matched stain perfectly. Both crews communicated like they'd worked together for years — because they had.", date: "2025-08-30", service_tagged: "deck-fence-staining", neighborhood: "Beaumont" },
    { author: "Leah F.", rating: 5, text: "Painted our storefront overnight. We opened at 9am like nothing happened, except the shop looked brand new. Thank you for the clean job.", date: "2025-07-11", service_tagged: "commercial-painting", neighborhood: "Division" },
    { author: "Tom & Ellie S.", rating: 5, text: "We interviewed four painters. Mara was the only one who spent an hour with us, explained the prep, and gave real color advice. Easy choice. Couldn't be happier.", date: "2025-06-04", service_tagged: "interior-painting", neighborhood: "Sunnyside" }
  ],

  gallery: [
    { src: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=80", alt: "Sage green living room with white trim, Laurelhurst remodel" },
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80", alt: "Cream craftsman exterior with charcoal trim, Irvington" },
    { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80", alt: "White shaker cabinets refinished, Alameda kitchen" },
    { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80", alt: "Navy blue front door, Sellwood bungalow" },
    { src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80", alt: "Warm white bedroom with oak floors, Hawthorne" },
    { src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80", alt: "Forest green cabinet refinish with brass pulls" },
    { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80", alt: "Deep green mudroom with built-in bench" },
    { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80", alt: "Charcoal board-and-batten exterior accent wall" },
    { src: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=80", alt: "Dining room with limewashed walls" },
    { src: "https://images.unsplash.com/photo-1600566753051-6057283d0e6a?w=1200&q=80", alt: "Hunter green front door with brass hardware" },
    { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80", alt: "Kitchen island refinished in deep navy" },
    { src: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1200&q=80", alt: "Modern farmhouse exterior, ivory with black trim" },
    { src: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200&q=80", alt: "Cedar-stained back deck in Sellwood" },
    { src: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200&q=80", alt: "Nursery with soft clay walls and white trim" },
    { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80", alt: "Office with warm beige walls" },
    { src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80", alt: "Teal powder room with gold accents" },
    { src: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1200&q=80", alt: "Sage green shiplap accent wall in entryway" },
    { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80", alt: "Exterior in warm terracotta, Mt. Tabor bungalow" },
    { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80", alt: "Fence stain in natural cedar, backyard after" },
    { src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=80", alt: "Modern minimalist living room, bone walls" }
  ],

  blog_posts: [
    {
      slug: "when-to-paint-exterior-portland",
      title: "When is the best time to paint your house exterior in Portland?",
      date: "2026-03-28",
      author: "Mara Okafor",
      cover_image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
      excerpt: "Portland's painting window is narrower than most people think. Here's how we decide when a house is ready.",
      content: `Portland gets a lot of rain. You know this. What you may not know is that your siding stays damp longer than it looks.\n\nWhen we show up to paint an exterior, the first tool out of the truck isn't a brush — it's a moisture meter. We take readings on north-facing siding, south-facing trim, and anywhere that looks suspicious. Above 15% moisture content and we won't paint. Period.\n\n## The safe window\n\nMid-May through late September is the safe window for exterior painting in the Portland metro. Before that, siding hasn't dried out from winter. After that, evening temperatures drop below the paint's cure range.\n\nIn a dry spring, we can sometimes start mid-April. In a wet fall, we've cut off as early as September 20th. The weather decides, not the calendar.\n\n## Why it matters\n\nPaint applied to damp wood does two things: it refuses to adhere, and it traps moisture underneath. The first failure is peeling within 12 months. The second is rot you don't see for five years.\n\n## What to do\n\nIf you're planning a 2026 exterior, call us in February or March. Our May-September window books solid by April. Earlier is better.`
    },
    {
      slug: "interior-paint-colors-2026",
      title: "The interior paint colors Portland homeowners are asking for in 2026",
      date: "2026-03-12",
      author: "Mara Okafor",
      cover_image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80",
      excerpt: "Warm whites are out, mushroom is in, and green is everywhere. What we're seeing on color cards this year.",
      content: `We paint about 300 interiors a year. Here are the colors we're spec-ing most often right now.\n\n## The new neutrals\n\nCool gray is finally dead. The replacement: warm mushroomy taupes like Benjamin Moore Revere Pewter and Sherwin-Williams Accessible Beige. They read neutral but don't go cold in winter light.\n\n## Green everywhere\n\nHalf our kitchen refinishes this quarter have been some shade of green. Favorites:\n- BM Saybrook Sage\n- SW Evergreen Fog\n- BM Vintage Vogue (on cabinets — dramatic)\n\n## Deep doors\n\nFront doors are getting confident. We're seeing hunter green, oxblood, and deep navy replace the ubiquitous black.\n\n## Ceiling trend\n\nColor-drenching — where walls, ceiling, and trim are all the same color — has become mainstream. It makes small rooms look bigger, not smaller, as long as you keep the sheen differentiated.`
    },
    {
      slug: "cabinet-refinish-vs-replace",
      title: "Refinish or replace? The honest math on kitchen cabinets",
      date: "2026-02-20",
      author: "Jenna Park",
      cover_image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
      excerpt: "New cabinets run $20-60k installed. Refinishing runs $3-6k. When is each actually the right call?",
      content: `Clients ask this every week. Here's the honest answer.\n\n## Refinish when:\n\n- Boxes are solid and layout works\n- You want a color change, not a layout change\n- Budget is under $10k\n- You want to be done in a week, not a month\n\n## Replace when:\n\n- Boxes are particleboard and falling apart\n- You want to change layout, add an island, etc.\n- Doors are thermofoil and peeling (can't refinish thermofoil)\n- You're also doing counters and floors — might as well go all the way\n\n## The middle path\n\nRefinish the boxes, replace just the doors with new paint-grade doors from a local mill. Roughly half the cost of full replacement, and you get exactly the door style you want.`
    },
    {
      slug: "prep-is-everything",
      title: "Why our prep day looks boring (and why that's the point)",
      date: "2026-02-03",
      author: "Ben Castillo",
      cover_image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=80",
      excerpt: "Day one on any Redwood job, no paint goes on the wall. Here's what we're doing instead.",
      content: `If you walk in on our day one, it'll look like we're not doing much. No color. No drama.\n\nThat's the job.\n\n## What prep actually is\n\n- Move furniture to center, cover with plastic\n- Rosin paper and canvas drops on all floors\n- Pull every outlet and switch cover, bag them, label them\n- Caulk every trim gap, every crown seam, every window return\n- Fill nail holes, spot-sand patches smooth\n- Clean walls with a damp microfiber — you'd be amazed what's on them\n- Tape only where we truly need to (good painters tape less, not more)\n\n## Why we take a whole day\n\nCut corners here and the paint will tell on us. Paint shows every bump, every missed caulk line, every patch you didn't sand flat. There's no paint formula that forgives bad prep.\n\n## The math\n\nPrep is about 40% of our labor hours. Paint application is 35%. Cleanup and punch list is 25%. If someone is quoting you a two-day interior paint for a whole house, they're skipping prep.`
    },
    {
      slug: "lead-paint-rrp",
      title: "What the EPA lead rule means for your pre-1978 house",
      date: "2026-01-15",
      author: "Terrence Moll",
      cover_image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
      excerpt: "If your house was built before 1978, your painter is legally required to follow specific containment rules. Here's what good looks like.",
      content: `The EPA's Renovation, Repair, and Painting (RRP) rule applies to any home built before 1978. Your contractor has to be certified, and has to follow containment procedures that most DIYers (and some shady contractors) ignore.\n\n## What containment looks like\n\n- Plastic sheeting taping 6 feet out from work area\n- HEPA vacuum cleanup, not regular vacuum\n- Wet-scrape only — no dry sanding\n- Waste bagged, labeled, and disposed of properly\n\n## Why it matters\n\nLead dust is measured in micrograms. A single scrape of lead paint can contaminate a room for months. Kids under 6 and pregnant women are at the highest risk.\n\n## Ask your painter\n\nBefore you hire anyone for exterior work on a pre-1978 house, ask to see their EPA RRP certification card. If they don't have one, walk away. The fines are $37,500 per day per violation — someone will pay them, and it shouldn't be you.`
    },
    {
      slug: "deck-stain-failure",
      title: "Why your last deck stain peeled after one season",
      date: "2025-12-18",
      author: "Mara Okafor",
      cover_image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=80",
      excerpt: "Three common reasons deck stain fails early. All of them are about prep, not the stain brand.",
      content: `Clients often call us after a DIY or big-box contractor stain job has peeled. Here's what we usually find.\n\n## 1. Too wet\n\nStained on damp wood. Finish never adhered. Peels in sheets.\n\n## 2. Rolled, not brushed\n\nStain needs to be forced into the wood grain to grip. Rolling leaves it sitting on top of the board where UV and foot traffic tear it off.\n\n## 3. Wrong product for exposure\n\nSolid stain on horizontal deck boards traps moisture. It has to go somewhere, and it goes under the film, lifting it. Decks want transparent or semi-transparent. Fences can take solid.\n\n## Our process\n\nStrip. Brighten. Wait. Brush. That's it. It's not glamorous but it's why our stain jobs still look good three years in.`
    },
    {
      slug: "choosing-sheen",
      title: "Flat, eggshell, satin, semi-gloss: what goes where",
      date: "2025-11-22",
      author: "Jenna Park",
      cover_image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      excerpt: "A practical guide to picking paint sheen by room and surface. Short version: most of your house wants eggshell.",
      content: `Sheen confuses everyone. Here's the cheat sheet we use on every job.\n\n## Ceilings\n\nFlat. Always. Hides imperfections, kills light reflection, doesn't telegraph lap marks. Don't let anyone talk you into anything else.\n\n## Walls — bedrooms and living rooms\n\nEggshell. Slight sheen, washable enough, forgiving on drywall texture.\n\n## Walls — kitchens, baths, hallways, kids' rooms\n\nSatin. More washable, more sheen. Shows imperfections more, so prep has to be better.\n\n## Trim, doors, cabinets\n\nSemi-gloss or satin in urethane. Hard, washable, takes daily abuse.\n\n## Exteriors\n\nLow-lustre / satin for siding. Semi-gloss for doors and trim. Flat on rough cedar shake only.`
    },
    {
      slug: "hiring-painter-checklist",
      title: "Hiring a painter in Portland: a 10-point checklist",
      date: "2025-10-30",
      author: "Mara Okafor",
      cover_image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      excerpt: "Before you sign a contract with any painter, ask these ten questions. Yes, us too.",
      content: `Before you hire any painter (including us), run this list.\n\n1. Are you CCB licensed? Ask for the number.\n2. What's your liability coverage? Ask for a COI.\n3. Are your painters W-2 employees or subs?\n4. Do you pull permits when required?\n5. What brand and product line of paint?\n6. How many coats are in the quote? (Answer should be two.)\n7. How do you handle dust from sanding?\n8. What's the warranty, in writing?\n9. Who's my point of contact day-to-day?\n10. Can I talk to three recent customers?\n\nA good painter will welcome every one of these questions. A bad painter will rush you off them.`
    }
  ],

  business_faqs: [
    { question: "Are you licensed and insured?", answer: "Yes. Oregon CCB license #198422. $2M liability through Liberty Mutual. We're happy to email a current certificate of insurance before any work starts — just ask." },
    { question: "How quickly can you start?", answer: "Interior jobs are typically 2-4 weeks out. Exterior jobs are scheduled 3-4 months ahead during the May-September window. Emergency work (water damage, sale prep) we'll fit in sooner." },
    { question: "Do you offer free estimates?", answer: "Yes. Always free, always in writing, never any pressure. We come out, measure, walk through the scope, and email a fixed-price quote within 48 hours." },
    { question: "How do you price your work?", answer: "By the job, not the hour. We measure square footage, count windows and doors, and price from there. The number we quote is the number you pay — no hourly surprises." },
    { question: "Do I have to be home while you're working?", answer: "No. Most of our clients give us a key or a garage code. We'll lock up every night and send you daily photos of progress." },
    { question: "What brands of paint do you use?", answer: "Benjamin Moore Regal Select, Sherwin-Williams Emerald and Duration, and Farrow & Ball on request. We stock our own materials — no trips to the store on your dime." },
    { question: "Do you offer a warranty?", answer: "Five-year workmanship warranty on all work. If anything peels, bubbles, or fails because of how we applied it, we come back and fix it at no charge." },
    { question: "Can you match an existing color?", answer: "Yes. We'll take a chip from the existing paint and have it scanned at our paint store. Matches are usually within 2-3% — close enough that you won't see a difference." },
    { question: "Do you work on historic homes?", answer: "Yes, and we love them. We're EPA RRP-certified for lead, familiar with Portland's historic districts, and careful with original trim details." },
    { question: "Do you paint occupied commercial spaces?", answer: "Yes — we run a dedicated night crew from May through October. We can quote both day and after-hours schedules so you can compare cost vs. disruption." }
  ]
};
