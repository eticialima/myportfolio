export interface Translation {
  [key: string]: string | Translation;
}

export const translations: Record<string, Translation> = {
  pt: {
    nav: {
      logo: 'Portfolio',
      home: 'Home',
      about: 'Sobre',
      projects: 'Projetos',
      courses: 'Cursos',
      contact: 'Contato',
    },
    home: {
      greeting: 'Olá, eu sou',
      name: 'Letícia Lima',
      role: 'Developer Python',
      description: 'Transformando ideias em soluções digitais elegantes e eficientes. Especializada em Python, Django e desenvolvimento web moderno.',
      viewProjects: 'Ver Projetos',
      getInTouch: 'Entre em Contato',
      features: {
        python: {
          title: 'Python & Django',
          description: 'Desenvolvimento de sistemas robustos e escaláveis com Django Framework'
        },
        performance: {
          title: 'Performance',
          description: 'Aplicações rápidas e otimizadas para melhor desempenho'
        },
        responsive: {
          title: 'Responsivo',
          description: 'Experiência perfeita em todos os dispositivos e tamanhos de tela'
        },
        education: {
          title: 'Cursos & Tutoriais',
          description: 'Criação de conteúdo educacional para YouTube e Udemy'
        }
      }
    },
    about: {
      title: 'Sobre Mim',
      intro1: 'Olá! Meu nome é Letícia Lima, atualmente trabalho com desenvolvimento de sistemas com Python e Django Framework. Nos tempos livres trabalho como freelancer em projetos de Desenvolvimento Web.',
      intro2: 'Sou formada em Engenharia da Computação com foco em programação e sistemas, possuo uma visão ampla e sólida de ferramentas e conceitos. Tenho experiência em Python, Django e Angular, programando diversos tipos de aplicações Web.',
      intro3: 'Fique a vontade para conhecer meus projetos.',
      skills: 'Habilidades'
    },
    projects: {
      title: 'Meus Projetos',
      subtitle: 'Confira alguns dos projetos que desenvolvi ao longo da minha carreira',
      loading: 'Carregando projetos...'
    },
    courses: {
      title: 'Cursos e Certificações',
      subtitle: 'Aprendizado contínuo é essencial. Aqui estão alguns cursos que criei',
      loading: 'Carregando cursos...'
    },
    tcc: {
      title: 'Projeto TCC 2020',
      subtitle: 'Sistema de Controle de Acesso por Reconhecimento Facial',
      degree: 'Engenharia da Computação',
      mission: {
        title: 'Missão do Projeto',
        p1: 'A missão do projeto objetiva desenvolver um <strong>sistema de baixo custo automatizado</strong> para controle de acesso utilizando reconhecimento facial. Como parâmetro de entrada, o sistema recebe uma imagem de um funcionário capturada via webcam retornando como saída uma resposta do reconhecimento das faces previamente cadastradas no banco de dados.',
        p2: 'O sistema consiste em três partes: <strong>detecção facial, extração de características e reconhecimento</strong>. A detecção facial foi implementada usando-se o algoritmo de Rede Neural Convolucional, que tem como base o aprendizado profundo que pode captar uma imagem de entrada e atribuir importâncias como pesos e vieses a vários aspectos para a extração. Além disso, foi utilizado os conceitos de Deep Learning, que junto com a função ConvNet é capaz de reduzir as imagens extraídas para uma forma mais fácil de processar o treinamento, sem perder qualidade e boa previsão.'
      },
      prototype: {
        title: 'Protótipo Funcionando',
        p1: 'Para o reconhecimento de faces foi desenvolvido um código que realiza o processamento de extração das faces através de uma câmera digital. O método utilizado é baseado na identificação dos atributos faciais do usuário.',
        p2: 'Foi utilizado <strong>Rede Neural</strong> pela facilidade que a rede tem de receber informações e compará-las com outras informações em um tempo muito curto.'
      },
      architecture: {
        title: 'Arquitetura do Sistema',
        p1: 'A figura abaixo expõe claramente um exemplo de controle de acesso. Foi utilizado o algoritmo Python e biblioteca <strong>Kivy</strong> para criar a interface onde será feito o cadastro das pessoas, fazendo assim a extração das características faciais e enviando as imagens capturadas para uma unidade central com um banco de dados <strong>SQLite</strong>.',
        p2: 'Foi desenvolvido um código que atua dentro do <strong>Raspberry Pi</strong> que é responsável por fazer o treinamento dos rostos das informações que foram cadastradas. Após o treinamento, o usuário cadastrado está pronto para fazer o reconhecimento.'
      },
      hardware: {
        title: 'Hardware',
        subtitle: 'Adaptação Criativa',
        p1: 'Para a ideia do projeto não tínhamos um mega terminal. Então adaptamos um modelo um pouco diferente. Foi utilizado um suporte do iPad com teclado e adaptamos um <strong>display de 7 polegadas</strong>.',
        p2: 'Atrás do iPad adaptamos um suporte para colocar a câmera e o <strong>Raspberry Pi 4</strong>.'
      },
      tests: {
        title: 'Primeiros Testes',
        description: 'Esse vídeo foi os primeiros testes no PC para dar início no protótipo. Verificamos principalmente a parte da interface se tem suporte com as bibliotecas de reconhecimento facial. Então foi montado um modelo em <strong>Python com biblioteca Kivy</strong>. E obtivemos um resultado muito bom!'
      },
      presentation: {
        title: 'Apresentação Completa',
        subtitle: 'Confira a apresentação completa do projeto',
        noSupport: 'Seu navegador não suporta visualização de PDF.',
        download: 'Clique aqui para fazer o download'
      },
      videoNoSupport: 'Seu navegador não suporta vídeos.'
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Tem algum projeto em mente? Vamos conversar!',
      info: 'Informações de Contato',
      email: 'Email',
      phone: 'Telefone',
      location: 'Localização',
      locationValue: 'São Paulo, Brasil',
      social: 'Redes Sociais',
      form: {
        name: 'Nome',
        namePlaceholder: 'Seu nome',
        email: 'Email',
        emailPlaceholder: 'seu.email@example.com',
        message: 'Mensagem',
        messagePlaceholder: 'Sua mensagem...',
        send: 'Enviar Mensagem',
        sending: 'Enviando...',
      },
      success: {
        title: 'Mensagem enviada com sucesso!',
        message: 'Obrigada pelo contato! Responderei em breve.'
      },
      error: {
        title: 'Erro ao enviar mensagem',
        message: 'Por favor, tente novamente ou entre em contato por email.',
        retry: 'Tentar Novamente'
      }
    },
    footer: {
      description: 'Desenvolvedora Full Stack apaixonada por criar soluções digitais elegantes e eficientes.',
      social: 'Redes Sociais',
      rights: 'Todos os direitos reservados.'
    }
  },
  en: {
    nav: {
      logo: 'Portfolio',
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      courses: 'Courses',
      contact: 'Contact',
    },
    home: {
      greeting: 'Hello, I am',
      name: 'Letícia Lima',
      role: 'Python Developer',
      description: 'Transforming ideas into elegant and efficient digital solutions. Specialized in Python, Django and modern web development.',
      viewProjects: 'View Projects',
      getInTouch: 'Get in Touch',
      features: {
        python: {
          title: 'Python & Django',
          description: 'Development of robust and scalable systems with Django Framework'
        },
        performance: {
          title: 'Performance',
          description: 'Fast and optimized applications for better performance'
        },
        responsive: {
          title: 'Responsive',
          description: 'Perfect experience on all devices and screen sizes'
        },
        education: {
          title: 'Courses & Tutorials',
          description: 'Creating educational content for YouTube and Udemy'
        }
      }
    },
    about: {
      title: 'About Me',
      intro1: 'Hello! My name is Letícia Lima, I currently work with system development using Python and Django Framework. In my free time I work as a freelancer on Web Development projects.',
      intro2: 'I have a degree in Computer Engineering with a focus on programming and systems, I have a broad and solid view of tools and concepts. I have experience in Python, Django and Angular, programming various types of Web applications.',
      intro3: 'Feel free to check out my projects.',
      skills: 'Skills'
    },
    projects: {
      title: 'My Projects',
      subtitle: 'Check out some of the projects I developed throughout my career',
      loading: 'Loading projects...'
    },
    courses: {
      title: 'Courses & Certifications',
      subtitle: 'Continuous learning is essential. Here are some courses I created',
      loading: 'Loading courses...'
    },
    tcc: {
      title: 'TCC Project 2020',
      subtitle: 'Access Control System by Facial Recognition',
      degree: 'Computer Engineering',
      mission: {
        title: 'Project Mission',
        p1: 'The project mission aims to develop a <strong>low-cost automated system</strong> for access control using facial recognition. As input parameter, the system receives an image of an employee captured via webcam returning as output a response of the recognition of faces previously registered in the database.',
        p2: 'The system consists of three parts: <strong>facial detection, feature extraction and recognition</strong>. Facial detection was implemented using the Convolutional Neural Network algorithm, which is based on deep learning that can capture an input image and assign importance as weights and biases to various aspects for extraction. In addition, Deep Learning concepts were used, which together with the ConvNet function is capable of reducing the extracted images to an easier form to process training, without losing quality and good prediction.'
      },
      prototype: {
        title: 'Working Prototype',
        p1: 'For face recognition, a code was developed that performs the processing of extracting faces through a digital camera. The method used is based on the identification of the user\'s facial attributes.',
        p2: '<strong>Neural Network</strong> was used for the ease that the network has to receive information and compare it with other information in a very short time.'
      },
      architecture: {
        title: 'System Architecture',
        p1: 'The figure below clearly shows an example of access control. The Python algorithm and <strong>Kivy</strong> library were used to create the interface where people will be registered, thus extracting facial features and sending the captured images to a central unit with a <strong>SQLite</strong> database.',
        p2: 'A code was developed that runs inside the <strong>Raspberry Pi</strong> which is responsible for training the faces of the information that was registered. After training, the registered user is ready to perform recognition.'
      },
      hardware: {
        title: 'Hardware',
        subtitle: 'Creative Adaptation',
        p1: 'For the project idea we didn\'t have a mega terminal. So we adapted a slightly different model. An iPad stand with keyboard was used and we adapted a <strong>7-inch display</strong>.',
        p2: 'Behind the iPad we adapted a support to place the camera and the <strong>Raspberry Pi 4</strong>.'
      },
      tests: {
        title: 'First Tests',
        description: 'This video was the first tests on the PC to start the prototype. We mainly checked the interface part if it has support with facial recognition libraries. So a model was built in <strong>Python with Kivy library</strong>. And we got a very good result!'
      },
      presentation: {
        title: 'Complete Presentation',
        subtitle: 'Check out the complete project presentation',
        noSupport: 'Your browser does not support PDF viewing.',
        download: 'Click here to download'
      },
      videoNoSupport: 'Your browser does not support videos.'
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Have a project in mind? Let\'s talk!',
      info: 'Contact Information',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      locationValue: 'São Paulo, Brazil',
      social: 'Social Media',
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your.email@example.com',
        message: 'Message',
        messagePlaceholder: 'Your message...',
        send: 'Send Message',
        sending: 'Sending...',
      },
      success: {
        title: 'Message sent successfully!',
        message: 'Thank you for contacting! I will reply soon.'
      },
      error: {
        title: 'Error sending message',
        message: 'Please try again or contact me by email.',
        retry: 'Try Again'
      }
    },
    footer: {
      description: 'Full Stack Developer passionate about creating elegant and efficient digital solutions.',
      social: 'Social Media',
      rights: 'All rights reserved.'
    }
  },
  es: {
    nav: {
      logo: 'Portfolio',
      home: 'Inicio',
      about: 'Sobre',
      projects: 'Proyectos',
      courses: 'Cursos',
      contact: 'Contacto',
    },
    home: {
      greeting: 'Hola, soy',
      name: 'Letícia Lima',
      role: 'Desarrolladora',
      description: 'Transformando ideas en soluciones digitales elegantes y eficientes. Especializada en Python, Django y desarrollo web moderno.',
      viewProjects: 'Ver Proyectos',
      getInTouch: 'Contáctame',
      features: {
        python: {
          title: 'Python & Django',
          description: 'Desarrollo de sistemas robustos y escalables con Django Framework'
        },
        performance: {
          title: 'Rendimiento',
          description: 'Aplicaciones rápidas y optimizadas para mejor rendimiento'
        },
        responsive: {
          title: 'Responsivo',
          description: 'Experiencia perfecta en todos los dispositivos y tamaños de pantalla'
        },
        education: {
          title: 'Cursos y Tutoriales',
          description: 'Creación de contenido educativo para YouTube y Udemy'
        }
      }
    },
    about: {
      title: 'Sobre Mí',
      intro1: '¡Hola! Mi nombre es Letícia Lima, actualmente trabajo con desarrollo de sistemas con Python y Django Framework. En mi tiempo libre trabajo como freelancer en proyectos de Desarrollo Web.',
      intro2: 'Soy graduada en Ingeniería Informática con enfoque en programación y sistemas, poseo una visión amplia y sólida de herramientas y conceptos. Tengo experiencia en Python, Django y Angular, programando diversos tipos de aplicaciones Web.',
      intro3: 'Siéntete libre de conocer mis proyectos.',
      skills: 'Habilidades'
    },
    projects: {
      title: 'Mis Proyectos',
      subtitle: 'Echa un vistazo a algunos de los proyectos que desarrollé a lo largo de mi carrera',
      loading: 'Cargando proyectos...'
    },
    courses: {
      title: 'Cursos y Certificaciones',
      subtitle: 'El aprendizaje continuo es esencial. Aquí están algunos cursos que creé',
      loading: 'Cargando cursos...'
    },
    tcc: {
      title: 'Proyecto TCC 2020',
      subtitle: 'Sistema de Control de Acceso por Reconocimiento Facial',
      degree: 'Ingeniería Informática',
      mission: {
        title: 'Misión del Proyecto',
        p1: 'La misión del proyecto tiene como objetivo desarrollar un <strong>sistema automatizado de bajo costo</strong> para control de acceso utilizando reconocimiento facial. Como parámetro de entrada, el sistema recibe una imagen de un empleado capturada vía webcam devolviendo como salida una respuesta del reconocimiento de rostros previamente registrados en la base de datos.',
        p2: 'El sistema consta de tres partes: <strong>detección facial, extracción de características y reconocimiento</strong>. La detección facial se implementó utilizando el algoritmo de Red Neuronal Convolucional, que se basa en el aprendizaje profundo que puede capturar una imagen de entrada y asignar importancia como pesos y sesgos a varios aspectos para la extracción. Además, se utilizaron conceptos de Deep Learning, que junto con la función ConvNet es capaz de reducir las imágenes extraídas a una forma más fácil de procesar el entrenamiento, sin perder calidad y buena predicción.'
      },
      prototype: {
        title: 'Prototipo Funcionando',
        p1: 'Para el reconocimiento facial, se desarrolló un código que realiza el procesamiento de extracción de rostros a través de una cámara digital. El método utilizado se basa en la identificación de los atributos faciales del usuario.',
        p2: 'Se utilizó <strong>Red Neuronal</strong> por la facilidad que tiene la red para recibir información y compararla con otra información en muy poco tiempo.'
      },
      architecture: {
        title: 'Arquitectura del Sistema',
        p1: 'La figura a continuación muestra claramente un ejemplo de control de acceso. Se utilizó el algoritmo Python y la biblioteca <strong>Kivy</strong> para crear la interfaz donde se registrarán las personas, extrayendo así las características faciales y enviando las imágenes capturadas a una unidad central con una base de datos <strong>SQLite</strong>.',
        p2: 'Se desarrolló un código que se ejecuta dentro del <strong>Raspberry Pi</strong> que es responsable de entrenar los rostros de la información que se registró. Después del entrenamiento, el usuario registrado está listo para realizar el reconocimiento.'
      },
      hardware: {
        title: 'Hardware',
        subtitle: 'Adaptación Creativa',
        p1: 'Para la idea del proyecto no teníamos un mega terminal. Así que adaptamos un modelo ligeramente diferente. Se utilizó un soporte de iPad con teclado y adaptamos una <strong>pantalla de 7 pulgadas</strong>.',
        p2: 'Detrás del iPad adaptamos un soporte para colocar la cámara y el <strong>Raspberry Pi 4</strong>.'
      },
      tests: {
        title: 'Primeras Pruebas',
        description: 'Este video fueron las primeras pruebas en la PC para iniciar el prototipo. Verificamos principalmente la parte de la interfaz si tiene soporte con bibliotecas de reconocimiento facial. Entonces se construyó un modelo en <strong>Python con biblioteca Kivy</strong>. ¡Y obtuvimos un muy buen resultado!'
      },
      presentation: {
        title: 'Presentación Completa',
        subtitle: 'Consulta la presentación completa del proyecto',
        noSupport: 'Su navegador no admite la visualización de PDF.',
        download: 'Haga clic aquí para descargar'
      },
      videoNoSupport: 'Su navegador no admite videos.'
    },
    contact: {
      title: 'Contáctame',
      subtitle: '¿Tienes un proyecto en mente? ¡Hablemos!',
      info: 'Información de Contacto',
      email: 'Correo',
      phone: 'Teléfono',
      location: 'Ubicación',
      locationValue: 'São Paulo, Brasil',
      social: 'Redes Sociales',
      form: {
        name: 'Nombre',
        namePlaceholder: 'Tu nombre',
        email: 'Correo',
        emailPlaceholder: 'tu.correo@example.com',
        message: 'Mensaje',
        messagePlaceholder: 'Tu mensaje...',
        send: 'Enviar Mensaje',
        sending: 'Enviando...',
      },
      success: {
        title: '¡Mensaje enviado con éxito!',
        message: '¡Gracias por contactar! Responderé pronto.'
      },
      error: {
        title: 'Error al enviar mensaje',
        message: 'Por favor, intenta nuevamente o contáctame por correo.',
        retry: 'Intentar Nuevamente'
      }
    },
    footer: {
      description: 'Desarrolladora Full Stack apasionada por crear soluciones digitales elegantes y eficientes.',
      social: 'Redes Sociales',
      rights: 'Todos los derechos reservados.'
    }
  }
};
