/* ==========================================================
   Kilion Tech — i18n (ES / EN)
   A lightweight, zero-dependency translation layer.
   Every translatable node carries  data-i18n="key"  in the HTML.
   ========================================================== */

window.KT_I18N = (function () {
  'use strict';

  /* ---------- dictionaries ---------- */
  const dict = {
    es: {
      /* — Nav — */
      'nav.services':      'Servicios',
      'nav.process':       'Proceso',
      'nav.about':         'Nosotros',
      'nav.contact':       'Contacto',
      'nav.cta':           'Pedir presupuesto →',

      /* — Hero — */
      'hero.location':     'Gijón · Asturias',
      'hero.status':       'Abierto para nuevos proyectos',
      'hero.title':        'Soluciones tech ',
      'hero.title.accent': 'a tu medida.',
      'hero.sub':          'Somos dos ingenieros de Gijón construyendo software, automatizaciones y reparando equipos para negocios pequeños y particulares. Sin precios de agencia, sin promesas vacías. Lo que necesitas, hecho y entregado.',
      'hero.cta.primary':  'Cuéntanos tu idea',
      'hero.cta.ghost':    'Ver servicios',
      'hero.stat1.strong': 'Desde 30 €',
      'hero.stat1.label':  'software a medida',
      'hero.stat2.strong': 'Desde 39 €',
      'hero.stat2.label':  'reparaciones',
      'hero.stat3.strong': '48–72 h',
      'hero.stat3.label':  'primera respuesta',
      'hero.stat4.strong': '2',
      'hero.stat4.label':  'ingenieros detrás',

      /* — Audience toggle — */
      'aud.individuals':   'Para individuos',
      'aud.companies':     'Para empresas',

      /* — Services (individuals) — */
      'srv.section':       '01 · Servicios',
      'srv.heading':       'Cuatro cosas que hacemos, <em>bien hechas</em>.',

      'srv1.title':        'Software a medida y automatizaciones',
      'srv1.tag':          'scripts · bots · webs · integraciones',
      'srv1.desc':         'Herramientas que te ahorran horas cada semana. Resolvemos el problema real: facturación automática, un bot que responde en WhatsApp, una web sencilla que convierte, un script que limpia tu base de datos.',
      'srv1.li1':          'Automatización de tareas repetitivas',
      'srv1.li2':          'Webs sencillas (landing, reservas, catálogo)',
      'srv1.li3':          'Integraciones entre apps que ya usas',
      'srv1.from':         'Desde',

      'srv2.title':        'Reparaciones técnicas',
      'srv2.tag':          'móviles · ordenadores · diagnóstico',
      'srv2.desc':         'Tú nos lo traes, nosotros coordinamos. Gestionamos la reparación con un técnico especializado y te lo devolvemos funcionando, con diagnóstico claro y presupuesto antes de tocar nada.',
      'srv2.li1':          'Pantallas, baterías, placas base',
      'srv2.li2':          'Portátiles lentos, limpieza, upgrades',
      'srv2.li3':          'Recuperación de datos básica',
      'srv2.from':         'Desde',

      'srvW.title':        'Páginas web',
      'srvW.tag':          'negocios · autónomos · particulares',
      'srvW.desc':         '¿Quieres tener tu propio espacio en internet? Te creamos una web en 3–4 días, lista para que te encuentren.',
      'srvW.li1':          'Diseño adaptado a móvil y ordenador',
      'srvW.li2':          'Formulario de contacto directo',
      'srvW.li3':          'Lista para usar, es tuya para siempre',
      'srvW.note':         'Con dominio incluido (primer año, depende del dominio): 249 €',
      'srvW.note2':        'Sin dominio: 199 €',
      'srvW.maint':        'Soporte + mantenimiento: 15 €/mes o 120 €/año',
      'srvW.maint2':       'Soporte + cambios de contenido: 35 €/mes o 360 €/año',
      'srvW.from':         'Desde',

      'srv3.title':        'Apps propias',
      'srv3.tag':          'android · windows',
      'srv3.desc':         'Aplicaciones sencillas y directas que desarrollamos nosotros mismos. Si tienes una idea concreta para una app, podemos construirla juntos o partir de lo que ya tenemos publicado.',
      'srv3.li1':          'Utilidades para Android',
      'srv3.li2':          'Pequeñas herramientas para PC',
      'srv3.consult':      'A consultar',
      'srv3.contact':      'contacto',

      /* — Companies CTA — */
      'biz.section':       '01 · Para empresas',
      'biz.heading':       'Cada empresa es distinta. <em>Cuéntanos</em> la tuya.',
      'biz.kicker':        'Proyectos a medida',
      'biz.h3':            'Nada de paquetes cerrados: <em>hablamos</em> y lo hacemos.',
      'biz.p1':            'Para empresas no tiene sentido listar precios de catálogo: cada caso pide un análisis propio. Nos cuentas qué necesitas —un proceso que automatizar, una herramienta interna, una integración entre sistemas— y después de escucharte te mandamos una propuesta clara con alcance, plazo y precio cerrado.',
      'biz.p2':            'Sin comerciales, sin presentaciones infladas y sin ataduras: si la propuesta no encaja, no pasa nada.',
      'biz.cta.primary':   'Cuéntanos tu proyecto',
      'biz.bullets.title': 'Cómo solemos trabajar',
      'biz.b1':            '<b>Llamada inicial</b> de 20–30 min para entender el problema real, sin compromiso.',
      'biz.b2':            '<b>Propuesta por escrito</b> con alcance, hitos, plazo y precio cerrado.',
      'biz.b3':            '<b>Desarrollo iterativo</b>: te mostramos avances semanales, no desaparecemos.',
      'biz.b4':            '<b>Entrega y documentación</b> — el código es tuyo, sin dependencias ocultas.',
      'biz.b5':            '<b>Soporte posterior</b> acordado según lo que necesitéis, no por defecto.',

      /* — Process — */
      'proc.section':      '02 · Cómo trabajamos',
      'proc.heading':      'Tres pasos. <em>Sin sorpresas.</em>',

      'proc1.title':       'Nos cuentas qué necesitas',
      'proc1.body':        'Un email o un mensaje desde la web. Nos explicas el problema y escuchamos. Si es algo que no podemos hacer, te lo decimos claro.',
      'proc1.label':       'Contacto inicial',
      'proc1.time':        '< 24 h',

      'proc2.title':       'Presupuesto cerrado y plazo',
      'proc2.body':        'Te mandamos un presupuesto simple: qué hacemos, qué cuesta, cuánto tardamos. Sin letra pequeña. Si te vale, empezamos.',
      'proc2.label':       'Aprobación',
      'proc2.time':        '24–48 h',

      'proc3.title':       'Entrega y soporte',
      'proc3.body':        'Te lo entregamos funcionando, con una pequeña guía si hace falta. Quedamos disponibles para ajustes y dudas durante las semanas siguientes.',
      'proc3.label':       'Plazo típico',
      'proc3.time':        '3–14 días',

      /* — About — */
      'about.section':     '03 · Por qué nosotros',
      'about.heading':     'Pequeños, cercanos, <em>y muy serios</em> con lo que entregamos.',
      'about.intro':       'Somos <em>dos estudiantes de Ingeniería Informática</em> que hemos juntado lo que sabemos para ayudar a negocios y personas de Asturias con sus problemas tech. Poca estructura, mucho oficio.',
      'about.badge':       '<b>2</b> &nbsp;fundadores &nbsp;·&nbsp; Ing. Informática',

      'why1.title':        'Trato humano',
      'why1.body':         'Hablas directamente con quien hace el trabajo. Nada de mandos intermedios ni tickets perdidos.',
      'why2.title':        'Precio justo',
      'why2.body':         'Cobramos lo que vale. Somos dos personas, no una agencia con 12 capas de margen.',
      'why3.title':        'Entrega rápida',
      'why3.body':         'Proyectos pequeños en días, no meses. Te decimos un plazo y lo cumplimos o te avisamos antes.',
      'why4.title':        'De Gijón',
      'why4.body':         'Aquí vivimos y aquí trabajamos. Si eres del norte, podemos vernos en persona sin problema.',

      /* — Contact — */
      'contact.section':   '04 · Contacto',
      'contact.big':       '¿Lo <em>hablamos</em>?',
      'contact.lead':      'Cuéntanos qué tienes en mente, por pequeño que sea. Te contestamos en menos de 24 horas con una primera idea y un rango de precio honesto.',
      'form.name':         'Tu nombre',
      'form.name.ph':      'Ana García',
      'form.email':        'Email',
      'form.email.ph':     'ana@ejemplo.com',
      'form.topic':        '¿En qué podemos ayudarte?',
      'form.topic.o1':     'Software a medida / automatización',
      'form.topic.o2':     'Reparación técnica',
      'form.topic.o3':     'Página web',
      'form.topic.o4':     'App propia / idea nueva',
      'form.topic.o5':     'Otra cosa',
      'form.msg':          'Cuéntanos un poco',
      'form.msg.ph':       'Tengo un bar y quiero automatizar las reservas…',
      'form.disclaimer':   'Respondemos en 24 h. Sin compromiso.',
      'form.submit':       'Enviar',
      'form.sending':      'Enviando…',
      'form.success':      'Gracias — hemos recibido tu mensaje. Te contestamos en menos de 24 h.',
      'form.error':        'Hubo un error al enviar. Puedes escribirnos directamente a',

      /* — Footer — */
      'foot.tagline':      'Software a medida, automatizaciones y reparaciones técnicas hechas por dos ingenieros desde Gijón. Trabajamos para toda España.',
      'foot.h.services':   'Servicios',
      'foot.custom':       'Software a medida',
      'foot.repairs':      'Reparaciones',
      'foot.webs':         'Páginas web',
      'foot.apps':         'Apps propias',
      'foot.h.contact':    'Contacto',
      'foot.location':     'Gijón, Asturias · España',
      'foot.h.legal':      'Legal',
      'foot.legal.notice': 'Aviso legal',
      'foot.legal.priv':   'Privacidad',
      'foot.legal.cookies':'Cookies',
      'legal.back': `← Back to home`,
      'legal.kicker.1': `Legal documents · 01`,
      'legal.aviso.title': `Legal <em>notice</em>`,
      'legal.aviso.lede': `Who we are, under what conditions we offer the contents of this site and what your rights and responsibilities are when using it. No frills: what needs to be there, is there.`,
      'legal.meta.update': `Last updated <b>April 2026</b>`,
      'legal.meta.version': `Version <b>1.0</b>`,
      'legal.meta.jurisdiction': `Jurisdiction <b>Spain</b>`,
      'legal.toc.title': `On this page`,
      'legal.aviso.toc.1': `Site owner`,
      'legal.aviso.toc.2': `Purpose and access`,
      'legal.aviso.toc.3': `Terms of use`,
      'legal.aviso.toc.4': `Intellectual property`,
      'legal.aviso.toc.5': `Liability`,
      'legal.aviso.toc.6': `External links`,
      'legal.aviso.toc.7': `Modifications`,
      'legal.aviso.toc.8': `Law and jurisdiction`,
      'legal.aviso.s1.title': `<span class="n">01</span> Site owner`,
      'legal.aviso.s1.p1': `In compliance with the provisions of <strong>Law 34/2002, of July 11, on Information Society Services and Electronic Commerce (LSSI-CE)</strong>, the following identifying data of the service provider are disclosed:`,
      'legal.aviso.s1.card.title': `Identifying data`,
      'legal.aviso.s1.card.p1': `<strong>Commercial name:</strong> Kilion Tech<br><strong>Activity:</strong> Custom software development, automations, and repair intermediation.<br><strong>Address:</strong> Gijón (Asturias), Spain.<br><strong>Contact email:</strong> <a href="mailto:contacto@kiliontech.com">contacto@kiliontech.com</a><br><strong>Website:</strong> kiliontech.com`,
      'legal.aviso.s1.p2': `Kilion Tech is a project managed by two physical persons under individual economic activity status. Full tax data (VAT number and, where applicable, registration in the Special Regime for Self-Employed Workers) are provided to the client when issuing any quote or invoice.`,
      'legal.aviso.s2.title': `<span class="n">02</span> Purpose and scope of application`,
      'legal.aviso.s2.p1': `This Legal Notice regulates access, navigation, and use of the <strong>kiliontech.com</strong> website (hereinafter, "the Site"). Access to the Site is free, except for the cost of internet connection, and does not require prior registration.`,
      'legal.aviso.s2.p2': `The mere use of the Site attributes the condition of User and implies full and unreserved acceptance of all provisions included in this Legal Notice. If you do not agree with any of them, please do not use the Site.`,
      'legal.aviso.s3.title': `<span class="n">03</span> Terms of use`,
      'legal.aviso.s3.p1': `The User agrees to make appropriate use of the contents and services of the Site and not to use them to:`,
      'legal.aviso.s3.li1': `Carry out activities contrary to law, morals, or public order.`,
      'legal.aviso.s3.li2': `Disseminate racist, xenophobic, pornographic, terrorist apologist content, or anything that violates human rights.`,
      'legal.aviso.s3.li3': `Introduce computer viruses, malicious code, damaged files, or attempt intrusion, denial of service, or exploitation of vulnerabilities.`,
      'legal.aviso.s3.li4': `Perform massive scraping, copy, or reproduce content for commercial purposes without express authorization.`,
      'legal.aviso.s3.p2': `Failure to comply with these conditions may result in suspension of access and legal action as appropriate.`,
      'legal.aviso.s4.title': `<span class="n">04</span> Intellectual and industrial property`,
      'legal.aviso.s4.p1': `All Site contents—including, but not limited to, texts, photographs, graphics, images, icons, typography, software, links, and other audiovisual or audio material, as well as its graphic design and source codes—are <strong>intellectual property of Kilion Tech</strong> or third parties who have authorized their use.`,
      'legal.aviso.s4.p2': `Reproduction, distribution, and public communication, including making available all or part of the Site's contents, for commercial purposes, on any medium and by any technical means, without the express written authorization of Kilion Tech, is prohibited.`,
      'legal.aviso.s4.p3': `Brands, commercial names, and distinctive signs appearing on the Site are the property of Kilion Tech or, where appropriate, third parties, without access to the Site granting any rights over them.`,
      'legal.aviso.s5.title': `<span class="n">05</span> Exclusion of liability`,
      'legal.aviso.s5.p1': `Kilion Tech makes maximum efforts to avoid errors in published contents, but <strong>does not guarantee the absence of errors</strong> or the absolute accuracy of the information. Prices, deadlines, and conditions shown on the Site are for guidance purposes and will be confirmed in writing via a firm quote before starting any work.`,
      'legal.aviso.s5.p2': `Kilion Tech is not responsible for damages resulting from:`,
      'legal.aviso.s5.li1': `Interruptions, failures, or errors in Site operation beyond its reasonable control.`,
      'legal.aviso.s5.li2': `The presence of viruses or malicious programs introduced by third parties.`,
      'legal.aviso.s5.li3': `Improper or negligent use of the Site by the User.`,
      'legal.aviso.s5.li4': `Decisions made by the User based on guidance information published on the Site.`,
      'legal.aviso.s6.title': `<span class="n">06</span> Links to third-party sites`,
      'legal.aviso.s6.p1': `The Site may contain links to third-party web pages solely to provide the User with access to additional information. Kilion Tech <strong>assumes no responsibility</strong> for the content, veracity, legality, or privacy policies of those external sites.`,
      'legal.aviso.s6.p2': `If you discover that any link leads to illicit or inappropriate content, please let us know at <a href="mailto:contacto@kiliontech.com">contacto@kiliontech.com</a> so we can review it.`,
      'legal.aviso.s7.title': `<span class="n">07</span> Modifications`,
      'legal.aviso.s7.p1': `Kilion Tech reserves the right to modify, at any time and without prior notice, the presentation, configuration, and content of the Site, as well as the conditions set out here. Modifications will take effect from their publication and the date indicated at the beginning of this document will be updated.`,
      'legal.aviso.s8.title': `<span class="n">08</span> Applicable law and jurisdiction`,
      'legal.aviso.s8.p1': `This Legal Notice is governed by <strong>Spanish law</strong>. For the resolution of any dispute arising from access to or use of the Site, the parties submit, expressly waiving any other jurisdiction that may apply, to the <strong>Courts and Tribunals of Gijón</strong>, unless the applicable law imposes a different jurisdiction due to an relationship with a consumer.`,
      'legal.aviso.s8.p2': `If any clause in this Legal Notice is declared void or inapplicable, the rest will remain valid and continue in effect.`,
      'legal.kicker.2': `Legal documents · 02`,
      'legal.priv.title': `Privacy <em>policy</em>`,
      'legal.priv.lede': `Your data is yours. Here we tell you what we ask for, what we use it for, how long we keep it, and how you can delete it at any time. Drafted according to GDPR and LOPDGDD.`,
      'legal.meta.normativa': `Regulations <b>GDPR · LOPDGDD</b>`,
      'legal.priv.toc.1': `Data controller`,
      'legal.priv.toc.2': `What data we collect`,
      'legal.priv.toc.3': `Purpose and legal basis`,
      'legal.priv.toc.4': `Data retention`,
      'legal.priv.toc.5': `Recipients`,
      'legal.priv.toc.6': `Your rights`,
      'legal.priv.toc.7': `Security`,
      'legal.priv.toc.8': `Minors`,
      'legal.priv.toc.9': `Changes`,
      'legal.priv.s1.title': `<span class="n">01</span> Data controller`,
      'legal.priv.s1.p1': `The controller of personal data collected through this website is <strong>Kilion Tech</strong>, located in Gijón (Asturias, Spain) and contact email <a href="mailto:contacto@kiliontech.com">contacto@kiliontech.com</a>.`,
      'legal.priv.s1.p2': `Kilion Tech is a project by two individuals operating as freelancers; full tax details are provided to the client when issuing a quote or invoice.`,
      'legal.priv.s2.title': `<span class="n">02</span> What data we collect`,
      'legal.priv.s2.p1': `We only ask for the data strictly necessary to reply and, if you hire a service, to provide it correctly. Specifically:`,
      'legal.priv.s2.li1': `<strong>Contact form:</strong> name, email, project type, and the message you write.`,
      'legal.priv.s2.li2': `<strong>Direct emails:</strong> the data you voluntarily include in the email you send to <a href="mailto:contacto@kiliontech.com">contacto@kiliontech.com</a>.`,
      'legal.priv.s2.li3': `<strong>Billing data</strong> (only if we end up working together): name or company name, VAT number/ID, billing address.`,
      'legal.priv.s2.li4': `<strong>Minimal browsing technical data:</strong> anonymized IP address and user-agent, kept only in server logs for security.`,
      'legal.priv.s2.p2': `We do not collect sensitive data categories (health, ideology, ethnic origin, etc.).`,
      'legal.priv.s3.title': `<span class="n">03</span> Purpose and legal basis`,
      'legal.priv.s3.p1': `We process your data for the following purposes:`,
      'legal.priv.s3.c1.title': `Handling your inquiry`,
      'legal.priv.s3.c1.p1': `Responding to the message you send via the form or email. <strong>Legal basis:</strong> consent of the interested party by sending us the form (art. 6.1.a GDPR) and pre-contractual measures at the request of the interested party (art. 6.1.b GDPR).`,
      'legal.priv.s3.c2.title': `Providing the contracted service`,
      'legal.priv.s3.c2.p1': `Managing quotes, work, billing, and subsequent support. <strong>Legal basis:</strong> contract execution (art. 6.1.b GDPR) and legal obligations regarding accounting and taxation (art. 6.1.c GDPR).`,
      'legal.priv.s3.c3.title': `Site security and operation`,
      'legal.priv.s3.c3.p1': `Keeping the site operational, detecting abuse, and retaining minimal logs. <strong>Legal basis:</strong> legitimate interest (art. 6.1.f GDPR).`,
      'legal.priv.s3.p2': `We do not use your data for commercial profiling, automated marketing, or automated decision-making with legal effects on you.`,
      'legal.priv.s4.title': `<span class="n">04</span> How long we keep them`,
      'legal.priv.s4.li1': `<strong>Inquiries without a contract:</strong> up to 12 months after the last contact, unless you ask us to delete them earlier.`,
      'legal.priv.s4.li2': `<strong>Clients:</strong> while the contractual relationship lasts and, once ended, during the applicable legal terms (6 years for commercial obligations, 4 years for tax obligations).`,
      'legal.priv.s4.li3': `<strong>Technical logs:</strong> 30 days maximum.`,
      'legal.priv.s5.title': `<span class="n">05</span> Who we share data with`,
      'legal.priv.s5.p1': `By default, <strong>we do not share your data with third parties</strong>. Only the following data processors, strictly necessary, will have access to them:`,
      'legal.priv.s5.li1': `<strong>Email provider</strong> (hosting the contacto@kiliontech.com inbox).`,
      'legal.priv.s5.li2': `<strong>Website hosting provider</strong>.`,
      'legal.priv.s5.li3': `<strong>Accounting or tax advisors</strong>, if applicable, to fulfill legal obligations.`,
      'legal.priv.s5.li4': `<strong>Collaborating technicians</strong> in physical repairs, only the data necessary to manage your device (name and description of the fault).`,
      'legal.priv.s5.p2': `All processors are located within the <strong>European Economic Area</strong> or, failing that, have adequate guarantees (Standard Contractual Clauses of the European Commission). We do not make international transfers outside these conditions.`,
      'legal.priv.s6.title': `<span class="n">06</span> Your rights`,
      'legal.priv.s6.p1': `You can exercise the following rights over your personal data at any time:`,
      'legal.priv.s6.l1': `<strong>Access:</strong> to know what data we hold about you.`,
      'legal.priv.s6.l2': `<strong>Rectification:</strong> to correct inaccurate data.`,
      'legal.priv.s6.l3': `<strong>Erasure ("right to be forgotten"):</strong> to ask us to delete them.`,
      'legal.priv.s6.l4': `<strong>Objection:</strong> to object to specific processing.`,
      'legal.priv.s6.l5': `<strong>Restriction:</strong> to stop processing them in certain scenarios.`,
      'legal.priv.s6.l6': `<strong>Portability:</strong> to receive your data in a structured format to take to another controller.`,
      'legal.priv.s6.l7': `<strong>Withdraw consent</strong> at any time, without retroactive effect.`,
      'legal.priv.s6.p2': `To exercise these rights, simply email <a href="mailto:contacto@kiliontech.com">contacto@kiliontech.com</a> indicating which right you want to exercise. We will respond within a maximum of one month. If you feel we have not handled your request correctly, you can file a complaint with the <a href="https://www.aepd.es" target="_blank" rel="noopener">Spanish Data Protection Agency (aepd.es)</a>.`,
      'legal.priv.s7.title': `<span class="n">07</span> Security measures`,
      'legal.priv.s7.p1': `We apply technical and organizational measures that are reasonable and proportionate to the size of the project: HTTPS encrypted connections, robust password access with two-factor authentication for inboxes and servers, regular backups, and the principle of least privilege. Yet, no system is 100% invulnerable, and in the event of a security incident affecting you, we will notify you without undue delay when required by law.`,
      'legal.priv.s8.title': `<span class="n">08</span> Minors`,
      'legal.priv.s8.p1': `This site is not intended for children under 14, and we do not knowingly collect their data. If you are a parent or guardian and find that a minor has submitted data without consent, contact us and we will delete it immediately.`,
      'legal.priv.s9.title': `<span class="n">09</span> Changes to this policy`,
      'legal.priv.s9.p1': `We may update this policy to adapt to legal or operational changes. The current version is always the one published on this page, with the last update date shown at the top. If the changes are substantial, we will notify you prominently.`,
      'legal.kicker.3': `Legal documents · 03`,
      'legal.cookies.title': `Cookie <em>policy</em>`,
      'legal.cookies.lede': `We use the minimum cookies possible and none for advertising. Here we tell you exactly which ones, what for, and how to disable them if you are not interested.`,
      'legal.meta.normativa2': `Regulations <b>LSSI-CE · GDPR</b>`,
      'legal.cookies.toc.1': `What are cookies`,
      'legal.cookies.toc.2': `What cookies we use`,
      'legal.cookies.toc.3': `Cookie table`,
      'legal.cookies.toc.4': `Consent`,
      'legal.cookies.toc.5': `How to disable them`,
      'legal.cookies.toc.6': `Updates`,
      'legal.cookies.s1.title': `<span class="n">01</span> What are cookies`,
      'legal.cookies.s1.p1': `Cookies are small text files that a website stores on your device when you visit it. They serve to remember information between pages or visits: your preferences, whether you are logged in, language choices, etc. They are used practically everywhere on the internet and, when well-managed, are harmless.`,
      'legal.cookies.s1.p2': `According to their purpose, cookies can be classified as: <strong>technical</strong> (essential for site operation), <strong>preference or personalization</strong>, <strong>analysis or measurement</strong>, <strong>advertising</strong>, and <strong>behavioral advertising</strong>.`,
      'legal.cookies.s2.title': `<span class="n">02</span> What cookies we use on kiliontech.com`,
      'legal.cookies.s2.p1': `This site is <strong>deliberately light</strong> on cookies. In its current setup, we only use strictly necessary cookies and local storage to make the web function.`,
      'legal.cookies.s2.card.title': `Quick summary`,
      'legal.cookies.s2.card.p1': `<strong>Third-party cookies:</strong> none.<br><strong>Advertising / tracking:</strong> we do not use them.<br><strong>Analytics:</strong> currently disabled. If we later add an anonymous privacy-friendly tool, we will update this policy and, if legally required, ask for your consent before activating it.`,
      'legal.cookies.s3.title': `<span class="n">03</span> Detail of cookies and local storage`,
      'legal.cookies.s3.th1': `Name`,
      'legal.cookies.s3.th2': `Type`,
      'legal.cookies.s3.th3': `Purpose`,
      'legal.cookies.s3.th4': `Duration`,
      'legal.cookies.s3.t1.td1': `Technical / preferences (localStorage)`,
      'legal.cookies.s3.t1.td2': `Remembers your visual preferences (accent color, background, grain) if you adjust them in the settings panel.`,
      'legal.cookies.s3.t1.td3': `Persistent until you clear browser data`,
      'legal.cookies.s3.t2.td1': `<em>Web font cookies</em>`,
      'legal.cookies.s3.t2.td2': `Third-party technical (Google Fonts)`,
      'legal.cookies.s3.t2.td3': `Google Fonts serves the site’s typography. In its standard delivery mode, it does not use cookies but may log the request IP. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google’s privacy policy</a>.`,
      'legal.cookies.s3.t2.td4': `Session`,
      'legal.cookies.s3.p1': `We do not use analytics, advertising, remarketing, social media pixel cookies, or similar.`,
      'legal.cookies.s4.title': `<span class="n">04</span> Consent`,
      'legal.cookies.s4.p1': `Since we exclusively use technical or preference cookies triggered by the user, under <strong>Article 22.2 of LSSI-CE</strong>, prior consent is not required for their use. If we add non-exempt cookies (e.g., third-party analytics), we will show a banner letting you accept, reject, or configure them before they activate.`,
      'legal.cookies.s5.title': `<span class="n">05</span> How to disable or delete cookies`,
      'legal.cookies.s5.p1': `You can manage, block, and delete cookies directly from your browser settings. Here are official links:`,
      'legal.cookies.s5.p2': `Keep in mind that if you fully block technical cookies, some site features may behave unexpectedly (for example, the site won’t remember your visual preferences across visits).`,
      'legal.cookies.s6.title': `<span class="n">06</span> Updates to this policy`,
      'legal.cookies.s6.p1': `We will review this policy whenever we introduce new cookies or change existing ones. The last update date appears at the top. If changes are substantial (like enabling analytics), we will notify you prominently on the site.`,
      'legal.cookies.s6.p2': `If you have any doubts about our use of cookies, write to us at <a href="mailto:contacto@kiliontech.com">contacto@kiliontech.com</a>.`,

      'legal.back': `← Volver al inicio`,
      'legal.kicker.1': `Documentos legales · 01`,
      'legal.aviso.title': `Aviso <em>legal</em>`,
      'legal.aviso.lede': `Quiénes somos, bajo qué condiciones ofrecemos los contenidos de este sitio y cuáles son tus derechos y responsabilidades al usarlo. Sin florituras: lo que tiene que estar, está.`,
      'legal.meta.update': `Última actualización <b>Abril 2026</b>`,
      'legal.meta.version': `Versión <b>1.0</b>`,
      'legal.meta.jurisdiction': `Jurisdicción <b>España</b>`,
      'legal.toc.title': `En esta página`,
      'legal.aviso.toc.1': `Titular del sitio`,
      'legal.aviso.toc.2': `Objeto y acceso`,
      'legal.aviso.toc.3': `Condiciones de uso`,
      'legal.aviso.toc.4': `Propiedad intelectual`,
      'legal.aviso.toc.5': `Responsabilidad`,
      'legal.aviso.toc.6': `Enlaces externos`,
      'legal.aviso.toc.7': `Modificaciones`,
      'legal.aviso.toc.8': `Ley y jurisdicción`,
      'legal.aviso.s1.title': `<span class="n">01</span> Titular del sitio`,
      'legal.aviso.s1.p1': `En cumplimiento de lo dispuesto en la <strong>Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE)</strong>, se informa de los siguientes datos identificativos del prestador del servicio:`,
      'legal.aviso.s1.card.title': `Datos identificativos`,
      'legal.aviso.s1.card.p1': `<strong>Nombre comercial:</strong> Kilion Tech<br><strong>Actividad:</strong> Desarrollo de software a medida, automatizaciones e intermediación de reparaciones técnicas.<br><strong>Domicilio:</strong> Gijón (Asturias), España.<br><strong>Correo de contacto:</strong> <a href="mailto:contacto@kiliontech.com">contacto@kiliontech.com</a><br><strong>Sitio web:</strong> kiliontech.com`,
      'legal.aviso.s1.p2': `Kilion Tech es un proyecto gestionado por dos personas físicas en régimen de actividad económica individual. Los datos fiscales completos (NIF y, en su caso, alta en el Régimen Especial de Trabajadores Autónomos) se facilitan al cliente al emitir cualquier presupuesto o factura.`,
      'legal.aviso.s2.title': `<span class="n">02</span> Objeto y ámbito de aplicación`,
      'legal.aviso.s2.p1': `El presente Aviso Legal regula el acceso, navegación y uso del sitio web <strong>kiliontech.com</strong> (en adelante, «el Sitio»). El acceso al Sitio es gratuito, salvo en lo relativo al coste de conexión a internet, y no requiere registro previo.`,
      'legal.aviso.s2.p2': `La mera utilización del Sitio atribuye la condición de Usuario e implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal. Si no estás de acuerdo con alguna de ellas, te pedimos que no hagas uso del Sitio.`,
      'legal.aviso.s3.title': `<span class="n">03</span> Condiciones de uso`,
      'legal.aviso.s3.p1': `El Usuario se compromete a hacer un uso adecuado de los contenidos y servicios del Sitio y a no emplearlos para:`,
      'legal.aviso.s3.li1': `Realizar actividades contrarias a la ley, la moral o el orden público.`,
      'legal.aviso.s3.li2': `Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico, de apología del terrorismo o que atenten contra los derechos humanos.`,
      'legal.aviso.s3.li3': `Introducir virus informáticos, código malicioso, archivos dañados o realizar intentos de intrusión, denegación de servicio o explotación de vulnerabilidades.`,
      'legal.aviso.s3.li4': `Realizar scraping masivo, copiar o reproducir contenidos con fines comerciales sin autorización expresa.`,
      'legal.aviso.s3.p2': `El incumplimiento de estas condiciones podrá derivar en la suspensión del acceso y en las acciones legales que procedan.`,
      'legal.aviso.s4.title': `<span class="n">04</span> Propiedad intelectual e industrial`,
      'legal.aviso.s4.p1': `Todos los contenidos del Sitio —incluyendo, a título enunciativo, textos, fotografías, gráficos, imágenes, iconos, tipografía, software, enlaces y demás material audiovisual o sonoro, así como su diseño gráfico y códigos fuente— son <strong>propiedad intelectual de Kilion Tech</strong> o de terceros que han autorizado su uso.`,
      'legal.aviso.s4.p2': `Queda prohibida la reproducción, distribución y comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos del Sitio, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización expresa y por escrito de Kilion Tech.`,
      'legal.aviso.s4.p3': `Las marcas, nombres comerciales y signos distintivos que aparecen en el Sitio son propiedad de Kilion Tech o, en su caso, de terceros, sin que pueda entenderse que el acceso al Sitio atribuya ningún derecho sobre los mismos.`,
      'legal.aviso.s5.title': `<span class="n">05</span> Exclusión de responsabilidad`,
      'legal.aviso.s5.p1': `Kilion Tech realiza los máximos esfuerzos para evitar errores en los contenidos publicados, pero <strong>no garantiza la ausencia de errores</strong> ni la exactitud absoluta de la información. Los precios, plazos y condiciones mostrados en el Sitio tienen carácter orientativo y serán confirmados por escrito mediante presupuesto firme antes del inicio de cualquier trabajo.`,
      'legal.aviso.s5.p2': `Kilion Tech no se responsabiliza de los daños y perjuicios derivados de:`,
      'legal.aviso.s5.li1': `Interrupciones, fallos o errores en el funcionamiento del Sitio ajenos a su control razonable.`,
      'legal.aviso.s5.li2': `La presencia de virus o programas maliciosos introducidos por terceros.`,
      'legal.aviso.s5.li3': `El uso indebido o negligente del Sitio por parte del Usuario.`,
      'legal.aviso.s5.li4': `Decisiones tomadas por el Usuario a partir de información meramente orientativa publicada en el Sitio.`,
      'legal.aviso.s6.title': `<span class="n">06</span> Enlaces a sitios de terceros`,
      'legal.aviso.s6.p1': `El Sitio puede contener enlaces a páginas web de terceros con el único objetivo de facilitar al Usuario el acceso a información adicional. Kilion Tech <strong>no asume responsabilidad alguna</strong> sobre el contenido, la veracidad, la licitud o las políticas de privacidad de dichos sitios externos.`,
      'legal.aviso.s6.p2': `Si detectas que algún enlace conduce a contenidos ilícitos o inapropiados, te agradecemos que nos lo comuniques a <a href="mailto:contacto@kiliontech.com">contacto@kiliontech.com</a> para revisarlo.`,
      'legal.aviso.s7.title': `<span class="n">07</span> Modificaciones`,
      'legal.aviso.s7.p1': `Kilion Tech se reserva el derecho a modificar, en cualquier momento y sin previo aviso, la presentación, configuración y contenidos del Sitio, así como las condiciones aquí recogidas. Las modificaciones entrarán en vigor desde su publicación y se actualizará la fecha indicada al inicio de este documento.`,
      'legal.aviso.s8.title': `<span class="n">08</span> Legislación aplicable y jurisdicción`,
      'legal.aviso.s8.p1': `El presente Aviso Legal se rige por la <strong>legislación española</strong>. Para la resolución de cualquier controversia derivada del acceso o uso del Sitio, las partes se someten, con renuncia expresa a cualquier otro fuero que pudiera corresponderles, a los <strong>Juzgados y Tribunales de Gijón</strong>, salvo que la ley aplicable imponga un fuero distinto por tratarse de una relación con un consumidor.`,
      'legal.aviso.s8.p2': `Si alguna de las cláusulas de este Aviso Legal fuese declarada nula o inaplicable, el resto continuará siendo válido y seguirá en vigor.`,
      'legal.kicker.2': `Documentos legales · 02`,
      'legal.priv.title': `Política de <em>privacidad</em>`,
      'legal.priv.lede': `Tus datos son tuyos. Aquí te contamos qué pedimos, para qué lo usamos, cuánto lo guardamos y cómo puedes borrarlo en cualquier momento. Redactado conforme al RGPD y la LOPDGDD.`,
      'legal.meta.normativa': `Normativa <b>RGPD · LOPDGDD</b>`,
      'legal.priv.toc.1': `Responsable del tratamiento`,
      'legal.priv.toc.2': `Qué datos recogemos`,
      'legal.priv.toc.3': `Finalidad y base legal`,
      'legal.priv.toc.4': `Conservación de datos`,
      'legal.priv.toc.5': `Destinatarios`,
      'legal.priv.toc.6': `Tus derechos`,
      'legal.priv.toc.7': `Seguridad`,
      'legal.priv.toc.8': `Menores`,
      'legal.priv.toc.9': `Cambios`,
      'legal.priv.s1.title': `<span class="n">01</span> Responsable del tratamiento`,
      'legal.priv.s1.p1': `El responsable del tratamiento de los datos personales recogidos a través de este sitio web es <strong>Kilion Tech</strong>, con domicilio en Gijón (Asturias, España) y correo de contacto <a href="mailto:contacto@kiliontech.com">contacto@kiliontech.com</a>.`,
      'legal.priv.s1.p2': `Kilion Tech es un proyecto de dos personas físicas que operan en régimen individual; los datos fiscales completos se facilitan al cliente en el momento de emitir presupuesto o factura.`,
      'legal.priv.s2.title': `<span class="n">02</span> Qué datos recogemos`,
      'legal.priv.s2.p1': `Solo pedimos los datos estrictamente necesarios para poder contestarte y, si contratas un servicio, prestarlo correctamente. En concreto:`,
      'legal.priv.s2.li1': `<strong>Formulario de contacto:</strong> nombre, email, tipo de proyecto y el mensaje que nos escribas.`,
      'legal.priv.s2.li2': `<strong>Emails directos:</strong> los datos que incluyas voluntariamente en el correo que nos mandes a <a href="mailto:contacto@kiliontech.com">contacto@kiliontech.com</a>.`,
      'legal.priv.s2.li3': `<strong>Datos de facturación</strong> (solo si llegamos a trabajar juntos): nombre o razón social, NIF/CIF, dirección fiscal.`,
      'legal.priv.s2.li4': `<strong>Datos técnicos de navegación</strong> mínimos: dirección IP anonimizada y user-agent, conservados únicamente en logs del servidor para seguridad.`,
      'legal.priv.s2.p2': `No recogemos datos de categorías especiales (salud, ideología, origen étnico, etc.).`,
      'legal.priv.s3.title': `<span class="n">03</span> Finalidad y base legal`,
      'legal.priv.s3.p1': `Tratamos tus datos con las siguientes finalidades:`,
      'legal.priv.s3.c1.title': `Atender tu consulta`,
      'legal.priv.s3.c1.p1': `Responderte al mensaje que nos envías por el formulario o por email. <strong>Base legal:</strong> consentimiento del interesado al enviarnos el formulario (art. 6.1.a RGPD) y medidas precontractuales a petición del interesado (art. 6.1.b RGPD).`,
      'legal.priv.s3.c2.title': `Prestar el servicio contratado`,
      'legal.priv.s3.c2.p1': `Gestionar el presupuesto, el trabajo, la facturación y el soporte posterior. <strong>Base legal:</strong> ejecución de un contrato (art. 6.1.b RGPD) y obligaciones legales en materia contable y fiscal (art. 6.1.c RGPD).`,
      'legal.priv.s3.c3.title': `Seguridad y funcionamiento del sitio`,
      'legal.priv.s3.c3.p1': `Mantener el sitio operativo, detectar abusos y conservar logs mínimos. <strong>Base legal:</strong> interés legítimo (art. 6.1.f RGPD).`,
      'legal.priv.s3.p2': `No utilizamos tus datos para perfilado comercial, marketing automatizado ni para tomar decisiones automatizadas con efectos jurídicos sobre ti.`,
      'legal.priv.s4.title': `<span class="n">04</span> Durante cuánto tiempo los guardamos`,
      'legal.priv.s4.li1': `<strong>Consultas sin contratación:</strong> hasta 12 meses desde el último contacto, salvo que nos pidas borrarlos antes.`,
      'legal.priv.s4.li2': `<strong>Clientes:</strong> mientras dure la relación contractual y, una vez finalizada, durante los plazos legales aplicables (6 años para obligaciones mercantiles, 4 años para obligaciones fiscales).`,
      'legal.priv.s4.li3': `<strong>Logs técnicos:</strong> 30 días como máximo.`,
      'legal.priv.s5.title': `<span class="n">05</span> A quién comunicamos los datos`,
      'legal.priv.s5.p1': `Por defecto, <strong>no cedemos tus datos a terceros</strong>. Solo accederán a ellos los siguientes encargados del tratamiento, estrictamente necesarios para prestar el servicio:`,
      'legal.priv.s5.li1': `<strong>Proveedor de correo electrónico</strong> (alojamiento del buzón contacto@kiliontech.com).`,
      'legal.priv.s5.li2': `<strong>Proveedor de hosting</strong> del sitio web.`,
      'legal.priv.s5.li3': `<strong>Asesoría contable o fiscal</strong>, si corresponde, para cumplir obligaciones legales.`,
      'legal.priv.s5.li4': `<strong>Técnicos colaboradores</strong> en reparaciones físicas, únicamente los datos necesarios para gestionar tu equipo (nombre y descripción de la avería).`,
      'legal.priv.s5.p2': `Todos los encargados están ubicados en el <strong>Espacio Económico Europeo</strong> o, en su defecto, cuentan con garantías adecuadas (Cláusulas Contractuales Tipo de la Comisión Europea). No realizamos transferencias internacionales fuera de estos supuestos.`,
      'legal.priv.s6.title': `<span class="n">06</span> Tus derechos`,
      'legal.priv.s6.p1': `Puedes ejercer en cualquier momento los siguientes derechos sobre tus datos personales:`,
      'legal.priv.s6.l1': `<strong>Acceso:</strong> saber qué datos tuyos tenemos.`,
      'legal.priv.s6.l2': `<strong>Rectificación:</strong> corregir datos inexactos.`,
      'legal.priv.s6.l3': `<strong>Supresión («derecho al olvido»):</strong> pedir que los borremos.`,
      'legal.priv.s6.l4': `<strong>Oposición:</strong> oponerte a un tratamiento concreto.`,
      'legal.priv.s6.l5': `<strong>Limitación:</strong> pedir que dejemos de tratarlos en determinados supuestos.`,
      'legal.priv.s6.l6': `<strong>Portabilidad:</strong> recibir tus datos en formato estructurado para llevártelos a otro responsable.`,
      'legal.priv.s6.l7': `<strong>Retirar el consentimiento</strong> en cualquier momento, sin efectos retroactivos.`,
      'legal.priv.s6.p2': `Para ejercerlos, basta con escribirnos a <a href="mailto:contacto@kiliontech.com">contacto@kiliontech.com</a> indicando qué derecho quieres ejercer. Responderemos en el plazo máximo de un mes. Si consideras que no hemos atendido correctamente tu solicitud, puedes presentar una reclamación ante la <a href="https://www.aepd.es" target="_blank" rel="noopener">Agencia Española de Protección de Datos (aepd.es)</a>.`,
      'legal.priv.s7.title': `<span class="n">07</span> Medidas de seguridad`,
      'legal.priv.s7.p1': `Aplicamos medidas técnicas y organizativas razonables y proporcionadas al tamaño del proyecto: conexiones cifradas HTTPS, acceso con contraseñas robustas y doble factor a buzones y servidores, copias de seguridad periódicas y principio de mínimos privilegios. Aun así, ningún sistema es invulnerable al 100 % y, en caso de incidente de seguridad que te afecte, te lo notificaremos sin dilación indebida cuando así lo exija la normativa.`,
      'legal.priv.s8.title': `<span class="n">08</span> Menores de edad`,
      'legal.priv.s8.p1': `Este sitio no está dirigido a menores de 14 años y no recogemos sus datos conscientemente. Si eres padre, madre o tutor y detectas que un menor nos ha enviado datos sin consentimiento, contáctanos y los eliminaremos de inmediato.`,
      'legal.priv.s9.title': `<span class="n">09</span> Cambios en esta política`,
      'legal.priv.s9.p1': `Podemos actualizar esta política para adaptarla a cambios legales o de funcionamiento. La versión vigente es siempre la publicada en esta página, con la fecha de última actualización indicada al principio. Si los cambios son sustanciales, te avisaremos de forma destacada.`,
      'legal.kicker.3': `Documentos legales · 03`,
      'legal.cookies.title': `Política de <em>cookies</em>`,
      'legal.cookies.lede': `Usamos las mínimas cookies posibles y ninguna con fines publicitarios. Aquí te contamos exactamente cuáles, para qué y cómo desactivarlas si no te interesan.`,
      'legal.meta.normativa2': `Normativa <b>LSSI-CE · RGPD</b>`,
      'legal.cookies.toc.1': `Qué son las cookies`,
      'legal.cookies.toc.2': `Qué cookies usamos`,
      'legal.cookies.toc.3': `Tabla de cookies`,
      'legal.cookies.toc.4': `Consentimiento`,
      'legal.cookies.toc.5': `Cómo desactivarlas`,
      'legal.cookies.toc.6': `Actualizaciones`,
      'legal.cookies.s1.title': `<span class="n">01</span> Qué son las cookies`,
      'legal.cookies.s1.p1': `Las cookies son pequeños archivos de texto que un sitio web almacena en tu dispositivo cuando lo visitas. Sirven para recordar información entre páginas o entre visitas: tus preferencias, si has iniciado sesión, elecciones de idioma, etc. Se usan prácticamente en todo internet y, bien gestionadas, son inofensivas.`,
      'legal.cookies.s1.p2': `Según su finalidad, las cookies pueden clasificarse en: <strong>técnicas</strong> (imprescindibles para el funcionamiento del sitio), <strong>de preferencias o personalización</strong>, <strong>de análisis o medición</strong>, <strong>publicitarias</strong> y <strong>publicitarias comportamentales</strong>.`,
      'legal.cookies.s2.title': `<span class="n">02</span> Qué cookies usamos en kiliontech.com`,
      'legal.cookies.s2.p1': `Este sitio es <strong>deliberadamente ligero</strong> en cuanto a cookies. En su configuración actual solo empleamos cookies y almacenamiento local estrictamente necesarios para que la web funcione.`,
      'legal.cookies.s2.card.title': `Resumen rápido`,
      'legal.cookies.s2.card.p1': `<strong>Cookies de terceros:</strong> ninguna.<br><strong>Publicidad / tracking:</strong> no usamos.<br><strong>Analítica:</strong> no activada actualmente. Si en el futuro incorporamos una herramienta anónima y respetuosa con la privacidad, actualizaremos esta política y, si fuera legalmente necesario, pediremos tu consentimiento antes de activarla.`,
      'legal.cookies.s3.title': `<span class="n">03</span> Detalle de cookies y almacenamiento local`,
      'legal.cookies.s3.th1': `Nombre`,
      'legal.cookies.s3.th2': `Tipo`,
      'legal.cookies.s3.th3': `Finalidad`,
      'legal.cookies.s3.th4': `Duración`,
      'legal.cookies.s3.t1.td1': `Técnica / preferencias (localStorage)`,
      'legal.cookies.s3.t1.td2': `Recuerda tus preferencias visuales (color de acento, fondo, grano) si las ajustas en el panel de ajustes.`,
      'legal.cookies.s3.t1.td3': `Persistente hasta que borres los datos del navegador`,
      'legal.cookies.s3.t2.td1': `<em>Cookies de fuentes web</em>`,
      'legal.cookies.s3.t2.td2': `Técnica de terceros (Google Fonts)`,
      'legal.cookies.s3.t2.td3': `Google Fonts sirve las tipografías del sitio. En su modo de entrega estándar no utiliza cookies, pero puede registrar la IP de la petición. Consulta la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">política de privacidad de Google</a>.`,
      'legal.cookies.s3.t2.td4': `Sesión`,
      'legal.cookies.s3.p1': `No utilizamos cookies de analítica, publicidad, remarketing, píxeles de redes sociales ni similares.`,
      'legal.cookies.s4.title': `<span class="n">04</span> Consentimiento`,
      'legal.cookies.s4.p1': `Al tratarse únicamente de cookies y almacenamiento técnicos o de preferencias activadas por el propio usuario, conforme al <strong>artículo 22.2 de la LSSI-CE</strong>, no es necesario recabar consentimiento previo para su uso. En el momento en el que incorporemos cookies no exentas (por ejemplo, de analítica de terceros), mostraremos un banner que te permitirá aceptarlas, rechazarlas o configurarlas antes de que se activen.`,
      'legal.cookies.s5.title': `<span class="n">05</span> Cómo desactivar o borrar cookies`,
      'legal.cookies.s5.p1': `Puedes gestionar, bloquear y borrar cookies directamente desde la configuración de tu navegador. Aquí tienes los enlaces oficiales:`,
      'legal.cookies.s5.p2': `Ten en cuenta que si bloqueas por completo las cookies técnicas, algunas funcionalidades del sitio pueden dejar de comportarse como esperas (por ejemplo, el sitio no podrá recordar tus preferencias visuales entre visitas).`,
      'legal.cookies.s6.title': `<span class="n">06</span> Actualizaciones de esta política`,
      'legal.cookies.s6.p1': `Revisaremos esta política siempre que incorporemos nuevas cookies o cambiemos las existentes. La fecha de última actualización aparece al principio del documento. Si el cambio es relevante (por ejemplo, activar analítica), lo comunicaremos de forma destacada en el propio sitio.`,
      'legal.cookies.s6.p2': `Si tienes cualquier duda sobre el uso de cookies, escríbenos a <a href="mailto:contacto@kiliontech.com">contacto@kiliontech.com</a>.`,

      'foot.copy':         '© 2026 Kilion Tech · kiliontech.com',
      'foot.made':         'Hecho en Gijón · con demasiado café',

      /* — Tweaks panel — */
      'tweak.accent':      'Acento',
      'tweak.grain':       'Grano',
      'tweak.bg':          'Fondo',
    },

    en: {
      /* — Nav — */
      'nav.services':      'Services',
      'nav.process':       'Process',
      'nav.about':         'About',
      'nav.contact':       'Contact',
      'nav.cta':           'Get a quote →',

      /* — Hero — */
      'hero.location':     'Gijón · Asturias',
      'hero.status':       'Open for new projects',
      'hero.title':        'Tech solutions ',
      'hero.title.accent': 'made for you.',
      'hero.sub':          'Two engineers from Gijón building custom software, automations, and repairing devices for small businesses and individuals. No agency prices, no empty promises. What you need, done and delivered.',
      'hero.cta.primary':  'Tell us your idea',
      'hero.cta.ghost':    'See services',
      'hero.stat1.strong': 'From €30',
      'hero.stat1.label':  'custom software',
      'hero.stat2.strong': 'From €39',
      'hero.stat2.label':  'repairs',
      'hero.stat3.strong': '48–72 h',
      'hero.stat3.label':  'first response',
      'hero.stat4.strong': '2',
      'hero.stat4.label':  'engineers behind it',

      /* — Audience toggle — */
      'aud.individuals':   'For individuals',
      'aud.companies':     'For businesses',

      /* — Services (individuals) — */
      'srv.section':       '01 · Services',
      'srv.heading':       'Four things we do, <em>done right</em>.',

      'srv1.title':        'Custom software & automations',
      'srv1.tag':          'scripts · bots · websites · integrations',
      'srv1.desc':         'Tools that save you hours every week. We solve the real problem: automatic invoicing, a WhatsApp bot, a simple website that converts, a script that cleans your database.',
      'srv1.li1':          'Automation of repetitive tasks',
      'srv1.li2':          'Simple websites (landing, bookings, catalog)',
      'srv1.li3':          'Integrations between apps you already use',
      'srv1.from':         'From',

      'srv2.title':        'Technical repairs',
      'srv2.tag':          'phones · computers · diagnostics',
      'srv2.desc':         'You bring it, we coordinate. We manage the repair with a specialised technician and return it working, with a clear diagnosis and a quote before touching anything.',
      'srv2.li1':          'Screens, batteries, motherboards',
      'srv2.li2':          'Slow laptops, cleaning, upgrades',
      'srv2.li3':          'Basic data recovery',
      'srv2.from':         'From',

      'srvW.title':        'Websites',
      'srvW.tag':          'businesses · freelancers · individuals',
      'srvW.desc':         'Want your own space on the internet? We build your website in 3–4 days, ready for people to find you.',
      'srvW.li1':          'Mobile and desktop responsive design',
      'srvW.li2':          'Direct contact form',
      'srvW.li3':          'Ready to use, yours forever',
      'srvW.note':         'Domain included (1st year, price may vary): €249',
      'srvW.note2':        'Without domain: €199',
      'srvW.maint':        'Support + maintenance: €15/month or €120/year',
      'srvW.maint2':       'Support + content updates: €35/month or €360/year',
      'srvW.from':         'From',

      'srv3.title':        'Our own apps',
      'srv3.tag':          'android · windows',
      'srv3.desc':         'Simple, straightforward applications we build ourselves. If you have a concrete idea for an app, we can build it together or start from what we\'ve already published.',
      'srv3.li1':          'Android utilities',
      'srv3.li2':          'Small PC tools',
      'srv3.consult':      'On request',
      'srv3.contact':      'contact',

      /* — Companies CTA — */
      'biz.section':       '01 · For businesses',
      'biz.heading':       'Every business is different. <em>Tell us</em> about yours.',
      'biz.kicker':        'Custom projects',
      'biz.h3':            'No fixed packages: we <em>talk</em> and get it done.',
      'biz.p1':            'For businesses, listing catalogue prices makes no sense: every case needs its own analysis. Tell us what you need — a process to automate, an internal tool, an integration between systems — and after listening we\'ll send you a clear proposal with scope, timeline, and a fixed price.',
      'biz.p2':            'No salespeople, no inflated presentations, no strings attached: if the proposal doesn\'t fit, no worries.',
      'biz.cta.primary':   'Tell us about your project',
      'biz.bullets.title': 'How we usually work',
      'biz.b1':            '<b>Initial call</b> of 20–30 min to understand the real problem, no commitment.',
      'biz.b2':            '<b>Written proposal</b> with scope, milestones, timeline, and fixed price.',
      'biz.b3':            '<b>Iterative development</b>: we show you weekly progress, we don\'t disappear.',
      'biz.b4':            '<b>Delivery and documentation</b> — the code is yours, no hidden dependencies.',
      'biz.b5':            '<b>Ongoing support</b> agreed according to what you need, not by default.',

      /* — Process — */
      'proc.section':      '02 · How we work',
      'proc.heading':      'Three steps. <em>No surprises.</em>',

      'proc1.title':       'Tell us what you need',
      'proc1.body':        'An email or a message from the website. You explain the problem and we listen. If it\'s something we can\'t do, we\'ll tell you straight.',
      'proc1.label':       'Initial contact',
      'proc1.time':        '< 24 h',

      'proc2.title':       'Fixed quote and timeline',
      'proc2.body':        'We send you a simple quote: what we do, how much it costs, how long it takes. No fine print. If it works for you, we start.',
      'proc2.label':       'Approval',
      'proc2.time':        '24–48 h',

      'proc3.title':       'Delivery and support',
      'proc3.body':        'We deliver it working, with a short guide if needed. We stay available for adjustments and questions in the following weeks.',
      'proc3.label':       'Typical timeline',
      'proc3.time':        '3–14 days',

      /* — About — */
      'about.section':     '03 · Why us',
      'about.heading':     'Small, close, <em>and very serious</em> about what we deliver.',
      'about.intro':       'We\'re <em>two Computer Engineering students</em> who joined forces to help businesses and individuals in Asturias with their tech problems. Lean structure, real craft.',
      'about.badge':       '<b>2</b> &nbsp;founders &nbsp;·&nbsp; Computer Engineering',

      'why1.title':        'Human touch',
      'why1.body':         'You talk directly with the person doing the work. No middle management, no lost tickets.',
      'why2.title':        'Fair pricing',
      'why2.body':         'We charge what it\'s worth. Two people, not an agency with 12 layers of margin.',
      'why3.title':        'Fast delivery',
      'why3.body':         'Small projects in days, not months. We give you a deadline and meet it, or we let you know in advance.',
      'why4.title':        'From Gijón',
      'why4.body':         'We live and work here. If you\'re from northern Spain, we can meet in person.',

      /* — Contact — */
      'contact.section':   '04 · Contact',
      'contact.big':       'Shall we <em>talk</em>?',
      'contact.lead':      'Tell us what you have in mind, no matter how small. We\'ll get back to you within 24 hours with a first idea and an honest price range.',
      'form.name':         'Your name',
      'form.name.ph':      'John Doe',
      'form.email':        'Email',
      'form.email.ph':     'john@example.com',
      'form.topic':        'How can we help you?',
      'form.topic.o1':     'Custom software / automation',
      'form.topic.o2':     'Technical repair',
      'form.topic.o3':     'Website',
      'form.topic.o4':     'Own app / new idea',
      'form.topic.o5':     'Something else',
      'form.msg':          'Tell us a bit more',
      'form.msg.ph':       'I run a bar and want to automate bookings…',
      'form.disclaimer':   'We reply within 24 h. No commitment.',
      'form.submit':       'Send',
      'form.sending':      'Sending…',
      'form.success':      'Thanks — we\'ve received your message. We\'ll get back to you within 24 h.',
      'form.error':        'There was an error sending. You can email us directly at',

      /* — Footer — */
      'foot.tagline':      'Custom software, automations, and tech repairs built by two engineers from Gijón. We work across all of Spain.',
      'foot.h.services':   'Services',
      'foot.custom':       'Custom software',
      'foot.repairs':      'Repairs',
      'foot.webs':         'Websites',
      'foot.apps':         'Our own apps',
      'foot.h.contact':    'Contact',
      'foot.location':     'Gijón, Asturias · Spain',
      'foot.h.legal':      'Legal',
      'foot.legal.notice': 'Legal notice',
      'foot.legal.priv':   'Privacy',
      'foot.legal.cookies':'Cookies',
      'foot.copy':         '© 2026 Kilion Tech · kiliontech.com',
      'foot.made':         'Made in Gijón · with too much coffee',

      /* — Tweaks panel — */
      'tweak.accent':      'Accent',
      'tweak.grain':       'Grain',
      'tweak.bg':          'Background',
    }
  };

  /* ---------- state ---------- */
  let currentLang = 'es';

  /* ---------- apply ---------- */
  function applyLang(lang) {
    if (!dict[lang]) return;
    currentLang = lang;

    document.documentElement.lang = lang;

    /* Update page title & meta description */
    document.title = lang === 'es'
      ? 'Kilion Tech — Software, automatizaciones y reparaciones en Gijón'
      : 'Kilion Tech — Software, automations and repairs in Gijón';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.content = lang === 'es'
        ? 'Dos ingenieros de Gijón construyendo software a medida, automatizaciones y apps. Reparaciones técnicas coordinadas. Sin precios de agencia.'
        : 'Two engineers from Gijón building custom software, automations, and apps. Coordinated tech repairs. No agency prices.';
    }

    /* Walk every data-i18n element */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = dict[lang][key];
      if (val === undefined) return;

      /* Choose how to set the content */
      const mode = el.getAttribute('data-i18n-attr');
      if (mode === 'placeholder') {
        el.placeholder = val;
      } else if (mode === 'title') {
        el.title = val;
      } else if (mode === 'aria-label') {
        el.setAttribute('aria-label', val);
      } else {
        el.innerHTML = val;
      }
    });

    /* Update the language toggle button label */
    const toggleLabel = document.getElementById('langLabel');
    if (toggleLabel) {
      toggleLabel.textContent = lang === 'es' ? 'EN' : 'ES';
    }

    /* Persist preference */
    try { localStorage.setItem('kt_lang', lang); } catch (e) {}
  }

  /* ---------- toggle ---------- */
  function toggle() {
    applyLang(currentLang === 'es' ? 'en' : 'es');
  }

  /* ---------- init ---------- */
  function init() {
    const saved = (() => { try { return localStorage.getItem('kt_lang'); } catch (e) { return null; } })();
    applyLang(saved === 'en' ? 'en' : 'es');

    const btn = document.getElementById('langToggle');
    if (btn) btn.addEventListener('click', toggle);
  }

  return { init, applyLang, toggle, get lang() { return currentLang; } };
})();
