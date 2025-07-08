            // <div class="section-content home-content">
            //     <h1 class="section-title">Bem vindo à Maxlimp Rio</h1>
            //     <p class="section-description">Sua solução em produtos de Limpeza e Higiene.</p>
            //     <a href="#s-contact" class="btn btn-primary">Fale Conosco</a>
    const homeContent = {
        title: "Bem-vindo à Maxlimp Rio",
        description: "Sua solução em produtos de Limpeza e Higiene.",
        buttonText: "FALE COM UM VENDEDOR",
        buttonLink: "#s-contact" 
    }

    function renderHomeSection() {
        const homeSectionElement = $("#s-home");

        const textButtonBlock = $("<div>");
        textButtonBlock.addClass("s-home-text-button-block");

        const titleElement = $("<h1>");
        titleElement.text(homeContent.title);

        const descriptionElement = $('<p>');
        descriptionElement.text(homeContent.description);

        const btnElement = $("<a>");
        btnElement.attr('href', homeContent.buttonLink);
        btnElement.text(homeContent.buttonText);
        btnElement.addClass('btn btn-cta');

        textButtonBlock.append(titleElement);
        textButtonBlock.append(descriptionElement);
        textButtonBlock.append(btnElement);

        homeSectionElement.append(textButtonBlock);
    }
    $(document).ready(function(){
        renderHomeSection();
    })

    
    const aboutContent = {
         title: "Sobre nós",
         description: "Na Maxlimp Rio, somos especialistas em soluções completas de limpeza profissional e descartáveis para empresas no Rio de Janeiro.Nossa missão é simplificar a gestão de suprimentos, garantindo qualidade, economia e agilidade. Oferecemos uma ampla variedade de produtos de alta performance, com preços especiais para compras em volume. Asseguramos entregas rápidas em até 48 horas, frete grátis e faturamento via boleto bancário, garantindo total competitividade. Ao escolher a Maxlimp Rio, você obtém economia real, qualidade comprovada e suporte personalizado para seu negócio. Estamos prontos para atender suas demandas no atacado e varejo, e será um prazer apresentar uma proposta sob medida para sua próxima cotação. Conte conosco para um ambiente sempre limpo, seguro e produtivo."
    }

    function renderAbout(){

    }


    const contactContent = {
        title: "Contato",

    }

    function renderContact(){

    }

            //  <div class="section-content about-content">
            //     <h2 class="section-title">Sobre a Maxlimp Rio</h2>
            //     <div class="about-text-block">
            //         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit iusto nemo rerum deserunt. Dignissimos vero atque est, quos inventore molestias aspernatur ad asperiores incidunt maxime fugit odio sint voluptatem veritatis!</p>
            //     </div>
            // </div>

            //  <div class="section-content contact-content">
            //     <h2 class="section-title">Entre em Contato</h2>
            //     <p class="contact-description">Fale conosco para dúvidas e orçamentos.</p>
            //     <a href="https://wa.me/5521998355672" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
            //         <img src="assets/whatsapp-icon.svg" alt="Ícone WhatsApp" class="whatsapp-icon">
            //     </a>
            //     <div class="contact-info">
            //         <p><strong>Telefone:</strong>21 98765-4321</p>
            //         <p><strong>E-mail:</strong>contato.maxlimp@gmail.com</p>
            //     </div>
            // </div>


        //     <p class="footer-copy">&copy; 2025 Maxlimp Rio. Todos os direitos reservados</p>
        // <small class="footer-credits">Desenvolvido por: <a href="https://github.com/pedronrs" target="_blank">@pedronrs</a></small>

